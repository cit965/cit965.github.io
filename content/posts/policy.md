---
title: "Policy"
date: 2022-03-23T21:56:31+08:00
draft: false
---


Zadig 基于 OPA 实现 RBAC 和 ABAC 权限管理技术方案详解
引言
随着 Zadig 被越来越多企业用户和社区小伙伴采用，大家对企业级权限和安全性有更高的诉求，亟待一套权限管理方案。经过充分调研，我们最终确定了采用 OPA（开放策略代理）开源策略引擎，事实上，它已经被 Netflix，Pinterest 和 Goldman Sachs 等公司用于生产，正在成为云原生策略管理的事实标准。但 OPA 的编写具有一定的复杂度，网上的教程和官方文档也仅仅停留在 demo 层面。经过 Zadig 从 v1.9.0 到 v1.10.0 的迭代，我们已完整实现了 RBAC 和 ABAC 权限管理业务和技术方案的落地，这里我们将整套方案的技术细节分享给大家。
背景介绍
OPA
开放策略代理(Open Policy Agent，发音为“ oh-pa”)是一个开放源码的通用策略引擎，它统一了跨技术栈的策略实施。OPA 提供了一种高级声明性语言 rego，允许您将策略指定为代码和简单的 api，以加载软件中的策略决策。您可以使用 OPA 在 microservices、 Kubernetes、 CI/CD 管道、 API 网关等中强制执行策略

                                            图片来自 OPA 官方
权限模型
RBAC
基于角色的访问控制模型(RBAC: Role-based Access Control)，顾名思义，给用户定义角色，通过角色来控制权限。目前来说基于角色的访问控制模型是应用较广的一个，特别是 2B 方向 SAAS 领域，应用尤其常见。

如上图示，用户拥有角色，且可拥有多个角色，而每个角色对应不同权限。这样的好处是：不必为每一个用户去配置权限，拥有极大的灵活性和便利性
ABAC
基于属性的访问控制模型(ABAC: Attribute-Based Access Control)，被一些人称为是权限系统设计的未来，不同于常见的将用户通过某种方式关联到权限的方式，ABAC 则是通过动态计算一个或一组属性是否满足某种条件来进行授权判断（可以编写简单的逻辑）。属性通常来说分为四类：用户属性（如用户年龄），环境属性（如当前时间），操作属性（如读取）和对象属性（如一篇文章，又称资源属性），所以理论上能够实现非常灵活的权限控制，几乎能满足所有类型的需求。Zadig 目前主要是通过标签模拟属性来实现细粒度资源权限控制。

                 图片来自阿里云帮助文档
Zadig 权限场景
- 系统级别角色-解决全系统级别的权限问题(RBAC)
  - 管理员:拥有全系统的所有权限
  - 普通用户:拥有公开项目以及其所有资源的查看权限、测试管理和数据分析的查看权限
- 项目级别角色-解决项目级别的权限问题(RBAC)
  - project-admin:拥有该项目下的所有权限
  - read-only:拥有该项目下的所有资源的查看权限
  - read-project-only(默认):拥有该项目下工作流和集成环境list的权限(但资源会被精细化管理)，服务、构建和测试资源的所有查看权限
  - 自定义角色:自定义每个模块权限能力
- 项目级别策略:解决项目级别资源的精细化管理(ABAC)
因此 zadig 基于 OPA 实现 RBAC 解决了系统和项目通用的权限管理，实现 ABAC 解决了项目级别资源的精细化管理
Zadig 权限架构设计
权限架构图:

gloo 作为 Zadig 的网关，是 zadig 所有流量的入口。通过集成 OPA 后，所有经过网关的流量都会由OPA来统一进行认证鉴权，而只有认证鉴权通过后才会准许访问后端服务(aslan)。并且OPA决策依赖的数据会异步定时去权限管理服务(policy)和后端服务(aslan)采集决策所需要的权限和资源数据，从而实现高性能决策。
Zadig 权限数据库模型
zadig-policy 数据库中的相关数据模型
role
用户角色定义表，用来定义某项目下角色，下面的一条记录表示在项目「zadig」下有一个「dev」角色，该角色拥有查看工作流和执行工作流的权限
{
    "name" : "dev",
    // 对应zadig中的项目名
    "namespace" : "zadig",
    // rule为权限最小单位，下面的代表用户对工作流有查看和执行权限
    "rules" : [ 
        {
            "verbs" : [ 
                "get_workflow", //业务语义权限，实际权限规则见policy_meta表
                "run_workflow"
            ],
            "resources" : [ 
                "Workflow"
            ]
        }
    ],
}

rolebinding
用户角色绑定表，用来将角色绑定到用户身上，下面的一条记录表示将「zadig」项目下的「dev」角色绑定给uid为「71b8aa87-a10b-11ec-af4e-fa012450189e」的用户
{
    "name" : "71b8aa87-a10b-11ec-af4e-fa012450189e-zadig-dev",
    "namespace" : "dev",
    "subjects" : [ 
        {
            "kind" : "user",
            "uid" : "71b8aa87-a10b-11ec-af4e-fa012450189e"
        }
    ],
    // 用户绑定的角色
    "role_ref" : {
        "name" : "dev",
        "namespace" : "zadig"
    }
}

policy_meta
权限元信息表，用来将业务语意的权限转换为对应 【endpoint+action】，在提供给OPA的bundle数据里角色下面的权限会被转换成一组url的集合，具体转换后的内容可以看决策数据中的Role 
{
    "resource" : "Workflow",
    "alias" : "工作流",
    "rules" : [ 
        {
            "action" : "run_workflow",//对应role中的verbs
            "alias" : "执行",
            "rules" : [ 
                {
                    "method" : "POST",
                    "endpoint" : "/api/aslan/workflow/workflowtask"
                }, 
                {
                    "method" : "PUT",
                    "endpoint" : "/api/aslan/workflow/workflowtask"
                }
                ...
            ]
        },
        {
            "action" : "get_workflow",
            "alias" : "查看",
            "description" : "",
            "rules" : [ 
                {
                    "method" : "GET",
                    "endpoint" : "api/aslan/workflow/workflow"
                }, 
                {
                    "method" : "GET",
                    "endpoint" : "/api/aslan/workflow/workflow/find/?*"
                }, 
                ...
            ]
        }
    ]
}

policy
用户策略定义表，用来定义某项目下策略，下面的一条记录表示在项目「zadig」下有一个「zadig-dev-system-zhangsan」策略
policy和role表基本一致，主要区别是policy表多了一个match_attributes字段，这里表示对于项目「zadig」下打上label为【key= policy，value= zadig-dev-system-zhangsan-Workflow-zadig-workflow-dev】的workflow有拥有查看工作流和执行工作流的权限
{
    "name" : "zadig-dev-system-zhangsan",
    "namespace" : "zadig",
    "description" : "zadig dev zhangsan 的权限",
    "rules" : [ 
        {
            "verbs" : [ 
                "get_workflow", 
                "run_workflow"
            ],
            "resources" : [ 
                "Workflow"
            ],
            "kind" : "resource",
            "match_attributes" : [ //标签，来自于label表中，用以筛选相匹配标签的资源
                {
                    "key" : "policy",
                    "value" : "zadig-dev-system-zhangsan-Workflow-zadig-workflow-dev"
                }
            ]
        }
}

policybinding
用户策略绑定表，用来将策略绑定到用户身上，下面的一条记录表示将「zadig」项目下的「zadig-dev-system-zhangsan」策略绑定给uid为「4fd92962-a4f6-11ec-af4e-fa012450189e」的用户
{
    "name" : "4fd92962-a4f6-11ec-af4e-fa012450189e-mouuii-15-z201-system-z201-mouuii-15",
    "namespace" : "zadig", //项目名
    "subjects" : [ 
        {
            "kind" : "user",
            "uid" : "4fd92962-a4f6-11ec-af4e-fa012450189e" 
        }
    ],
    "policy_ref" : {
        "name" : "zadig-dev-system-zhangsan", //策略名
        "namespace" : "zadig" //项目名
    }
}

zadig 数据库中的相关数据模型
label
标签表，标签会同时打在权限rule规则和资源上，即表示权限对此标签的资源有相关权限
{
    "type" : "system",
    "key" : "policy",
    "value" : "zadig-dev-system-zhangsan-Environment-qa",
    "project_name" : "zadig"
}

labelbinding
标签资源关联表，记录标签和资源的绑定关系
{
    "resource_type" : "Workflow",
    "resource_name" : "zadig-workflow-dev",
    "project_name" : "zadig",
    "label_id" : "62318aa4fc41757efdefc20a",
}

RBAC 的实现
决策数据
决策数据指的是提供给OPA用来执行决策的元数据集，它包括权限数据和资源数据，主要来自于权限管理服务(policy)和后端服务(aslan)，在OPA术语中叫做bundle，OPA会将bundle缓存，提高决策效率，以下为决策数据目录结构

roles
角色数据，数据来自上述role和policy_meta表，采集时会将其拼装，因此此处的rules是最终拼装的结果
 
{
    "roles": [
       {
            "name": "dev",
            "namespace": "zadig",
            "rules": [
                {
                    "method": "GET",
                    "endpoint": "/api/aslan/environment/environments"
                },
                {
                    "method": "GET",
                    "endpoint": "/api/aslan/logs/log/workflow/?*/tasks/?*/service/?*"
                },
                {
                    "method": "GET",
                    "endpoint": "/api/aslan/logs/log/workflow/?*/tasks/?*/tests/test/service/?*"
                },
                {
                    "method": "GET",
                    "endpoint": "/api/aslan/logs/log/workflow/?*/tasks/?*/tests/test/service/?*"
                },
                {
                    "method": "GET",
                    "endpoint": "/api/aslan/logs/sse/workflow/build/?*/?*/?*/?*"
                },
                {
                    "method": "GET",
                    "endpoint": "/api/aslan/logs/sse/workflow/test/?*/?*/?*/?*/?*"
                },
                {
                    "method": "GET",
                    "endpoint": "/api/aslan/project/products/?*/services"
                }
                ...
            ]
        }
   ]
}

bindings: role_bindings
角色绑定数据，数据主要来自于上述 rolebinding 表
 "role_bindings":[
    {
        "uid": "71b8aa87-a10b-11ec-af4e-fa012450189e",
        "bindings": [
            {
                "namespace": "zadig",
                "role_refs": [
                    {
                        "name": "dev",
                        "namespace": "zadig"
                    }
                ]
            }
        ]
    }
]

resources
资源数据，zadig目前提供项目下细粒度资源的权限控制，所以需要采集工作流和环境相关资源
- Workflow:工作流采集数据，原始数据存储在后端服务(aslan)
- Environment：采集数据，原始数据存储在后端服务(aslan)
{
    "Workflow":[
        {
            "resourceID": "zadig-ops-workflow",
            "projectName": "zadig",
            "spec": {}
        },
        {
            "resourceID": "zadig-workflow-dev",
            "projectName": "zadig",
            "spec": {}
        },
        {
            "resourceID": "cvm-andrew-ops-workflow",
            "projectName": "cvm-andrew",
            "spec": {}
        }
        ...
    ],
    "Environment":[
        {
            "resourceID": "zadig-ops-workflow",
            "projectName": "zadig",
            "spec": {}
        },
        {
            "resourceID": "zadig-workflow-dev",
            "projectName": "zadig",
            "spec": {}
        },
        {
            "resourceID": "cvm-andrew-ops-workflow",
            "projectName": "cvm-andrew",
            "spec": {}
        }
        ...
    ]
}             

exemptions
特殊url采集
- Public
zadig公开的urls，所有用户(包括未登陆用户都能访问)
- Privileged
zaidg特权urls，只有系统admin用户能访问
- Registered
zadig所有注册的urls，没有注册的urls默认登陆用户就能访问
"public": [
        {
            "method": "GET",
            "endpoint": ""
        },
        {
            "method": "GET",
            "endpoint": "api/aslan/cluster/agent/?*/agent.yaml"
        },
        {
            "method": "GET",
            "endpoint": "api/aslan/health"
        }
        ...
 ]  
        
 "privileged": [
        {
            "method": "POST",
            "endpoint": "api/aslan/cluster/clusters"
        },
        {
            "method": "DELETE",
            "endpoint": "api/aslan/cluster/clusters/?*"
        },
        {
            "method": "PUT",
            "endpoint": "api/aslan/cluster/clusters/?*"
        }
        ...
 ] 
        
 "registered": [
        {
            "method": "DELETE",
            "endpoint": "/api/aslan/build/build"
        },
        {
            "method": "GET",
            "endpoint": "/api/aslan/build/build"
        }
        ...
 ]    

OPA 实现
鉴权流程
- 校验url是否无注册，如果是无注册，则返回通过
- 用户是否是admin，如果是，则返回通过
- 请求是否满足，url不是特权url，并且用户为该项目的项目管理员,如果是则返回通过
- 请求是否满足，url不是特权url，并且请求匹配该用户绑定的角色的权限，如果是则返回通过(权限不带标签，即rule中不带有matchAttributes)
关键代码(rego)
// 鉴权结果
response = r {
    allow
    roles := all_roles
    r := {
      "allowed": true,
    }
}

allow {
    ...
    access_is_granted
}

// 查询用户匹配的角色 rules ，将查询出的结果匹配http request
access_is_granted {
    not url_is_privileged //校验url 是否不是特权url

    some rule

    allowed_role_plain_rules[rule]
    rule.method == http_request.method
    glob.match(trim(rule.endpoint, "/"), ["/"], concat("/", input.parsed_path))
}

// url 是特权url
url_is_privileged {
    some i
    data.exemptions.privileged[i].method == http_request.method
    glob.match(trim(data.exemptions.privileged[i].endpoint, "/"), ["/"], concat("/", input.parsed_path))
}

// 获取用户匹配的不带标签的角色 rules
allowed_role_plain_rules[rule] {
    rule := allowed_role_rules[_]
    not rule.matchAttributes
    not rule.matchExpressions
}

// 获取请求项目下匹配的角色的rules
allowed_role_rules[rule] {
    some role_ref
    allowed_roles[role_ref]

    some i
    data.roles.roles[i].name == role_ref.name
    data.roles.roles[i].namespace == role_ref.namespace
    rule := data.roles.roles[i].rules[_]
}

// 获取用户请求项目下匹配的角色
allowed_roles[role_ref] {
    some i
    some j
    data.bindings.role_bindings[i].uid == claims.uid
    data.bindings.role_bindings[i].bindings[j].namespace == project_name
    role_ref := data.bindings.role_bindings[i].bindings[j].role_refs[_]
}


ABAC 的实现
决策数据
决策数据解释同RBAC决策数据
bindings : policy_bindings
策略绑定数据，数据来自上述policybinding表

"policy_bindings": [
    {
        "uid": "4fd92962-a4f6-11ec-af4e-fa012450189e",
        "bindings": [
            {
                "namespace": "zadig",
                "policy_refs": [
                    {
                        "name": "read-project-only",
                        "namespace": ""
                    },
                    {
                        "name": "zadig-dev-system-zhangsan",
                        "namespace": "zadig"
                    }
                ]
            }
        ]
    },
    ...
]

policies
策略数据，数据来自上述policy表,相比较于roles，他的rule的matchAttributes中会带有标签，会对相匹配的资源进行过滤
{
    "policies": [
        {
            "name": "zadig-dev-system-zhangsan",
            "namespace": "zadig",
            "rules": [
                {
                    "method": "GET",
                    "endpoint": "/api/aslan/environment/configmaps",
                    "matchAttributes": [//标签，用以筛选资源
                        {
                            "key": "policy",
                            "value": "zadig-dev-system-zhangsan-Environment-dev"
                        }
                    ]
                },
                {
                    "method": "POST",
                    "endpoint": "/api/aslan/environment/image/deployment",
                    "matchAttributes": [
                        {
                            "key": "policy",
                            "value": "zadig-dev-system-zhangsan-Environment-dev"
                        },
                        {
                            "key": "policy",
                            "value": "zadig-dev-system-zhangsan-Environment-qa"
                        }
                    ]
                },
                ...
            ]
        }
    ]
}


resources
相比于 rbac 的 resource 采集，这里的资源 spec 中会带上 label，用来做细粒度资源匹配
{
    "Workflow":[
        {
            "resourceID": "zadig-ops-workflow",
            "projectName": "zadig",
            "spec": {
                "policy":"zadig-dev-system-zhangsan-Workflow-dev"
            }
        },
        {
            "resourceID": "mouuii-12",
            "projectName": "mouuii-12",
            "spec": {
                "policy":"Zadig-dev-system-zhangsan-Workflow-dev"
            }
        }
        ...
    ],
    "Environment":[
        {
            "resourceID": "zadig-ops-workflow",
            "projectName": "zadig",
            "spec": {
                "policy":"zadig-dev-system-zhangsan-Workflow-dev"
            }
        },
        {
            "resourceID": "mouuii-12",
            "projectName": "mouuii-12",
            "spec": {
                "policy":"Zadig-dev-system-zhangsan-Workflow-dev"
            }
        }
        ...
    ],
}

OPA 实现
鉴权流程
- 单个资源请求匹配，请求是否满足url不是特权url，该用户绑定的策略权限规则匹配该请求，并且该权限的标签匹配用户请求资源的标签，如果是则返回通过(权限带标签，即rule中带matchAttributes)
- 如果上述都不满足，会进行多资源请求匹配，该用户绑定的策略权限规则匹配该请求，如果是则会对匹配的资源进行过滤(权限带标签，即rule中带matchAttributes)
- 如果所有都不满足，则返回鉴权失败
关键代码(rego)
// ######################### 单个资源请求匹配 #########################
// 判断当前用户是否对单个资源请求有相关权限 即用户对如 url：api/workflow/:id action：get 是否有权限
// 主要是通过allow中的access_is_granted列表进行判断
response = r {
    allow
    r := {
      "allowed": true,
    }
}

allow {
    access_is_granted
}

// 单资源请求是否通过授权 
// 1.查询用户拥有的带标签 的 rule
// 2.获取请求的资源id
// 3.将请求的资源id和匹配的权限rule标签筛选的资源进行匹配
access_is_granted {
    not url_is_privileged //校验url 是否不是特权url
    some rule

    allowed_policy_attributive_rules[rule]
    rule.method == http_request.method
    glob.match(trim(rule.endpoint, "/"), ["/"], concat("/", input.parsed_path))

    any_attributes_match(rule.matchAttributes, rule.resourceType, get_resource_id(rule.idRegex))
}


// 该资源是否匹配到某rule的标签所筛选出来的资源
any_attributes_match(attributes, resourceType, resourceID) {
    res := data.resources[resourceType][_]
    res.resourceID == resourceID
    project_name_is_match(res)

    attributes_match(attributes, res)
}

// rule的matchAttribute为空的时候，不需要匹配
attributes_match(attributes, res) {
    count(attributes) == 0
}

// 任何标签匹配
attributes_match(attributes, res) {
    attribute := attributes[_]
    attribute_match(attribute, res)
}

// 单个标签匹配
attribute_match(attribute, res) {
    res.spec[attribute.key] == attribute.value
}


// ################################### filter资源匹配 ######################
// 多资源请求，即用户对如 url：api/workflow action：get 是否有权限，并对结果进行过滤
// rule_is_matched_for_filtering会进行判断是否有匹配的多资源请求权限，通过后会过滤匹配的资源列表，会走user_policy_alowed_resource逻辑，筛选该用户策略所绑定的资源
// zadig会在response header中设置有权限的resource数组
response = r {
    not allow
    rule_is_matched_for_filtering
    resource := user_policy_allowed_resources
    r := {
      "allowed": true,
      "headers": {
        "Resources": json.marshal(resource),
      }
    }
}

// 该用户是否有相匹配的带标签的角色rule
rule_is_matched_for_filtering {
    count(user_matched_role_rule_for_filtering) > 0
}
// 该用户是否有相匹配的带标签的策略rule
rule_is_matched_for_filtering {
    count(user_matched_policy_rule_for_filtering) > 0
}

// 获取与多资源请求相匹配该用户绑定的策略的带标签的rule列表
user_matched_policy_rule_for_filtering[rule] {
    some rule

    allowed_policy_attributive_rules[rule]
    rule.method == http_request.method
    glob.match(trim(rule.endpoint, "/"), ["/"], concat("/", input.parsed_path))
    not rule.idRegex
}
// 获取与多资源请求相匹配该用户绑定的角色的带标签的rule列表
user_matched_role_rule_for_filtering[rule] {
    some rule

    allowed_role_attributive_rules[rule]
    rule.method == http_request.method
    glob.match(trim(rule.endpoint, "/"), ["/"], concat("/", input.parsed_path))
    not rule.idRegex
}


// 用户策略能够匹配的资源列表
user_policy_allowed_resources[resourceID] {
    some rule

    user_matched_policy_rule_for_filtering[rule]
    res := data.resources[rule.resourceType][_]
    project_name_is_match(res)
    attributes_match(rule.matchAttributes, res)
    resourceID := res.resourceID
}

// 用户匹配到符合当前request url 的rule
user_matched_policy_rule_for_filtering[rule] {
    some rule

    allowed_policy_attributive_rules[rule]
    rule.method == http_request.method
    glob.match(trim(rule.endpoint, "/"), ["/"], concat("/", input.parsed_path))
    not rule.idRegex
}

// 用户某项目下匹配的带attribute 的 策略 rules
allowed_policy_attributive_rules[rule] {
    rule := allowed_policy_rules[_]
    rule.matchAttributes 
}

// 用户某项目下匹配的策略 rules
allowed_policy_rules[rule] {
    some policy_ref
    allowed_policies[policy_ref]

    some i
    data.policies.policies[i].name == policy_ref.name
    data.policies.policies[i].namespace == policy_ref.namespace
    rule := data.policies.policies[i].rules[_]
}

// 当前用户某项目下匹配的策略
allowed_policies[policy_ref] {
    some i
    some j
    data.bindings.policy_bindings[i].uid == claims.uid
    data.bindings.policy_bindings[i].bindings[j].namespace == project_name
    policy_ref := data.bindings.policy_bindings[i].bindings[j].policy_refs[_]
}
