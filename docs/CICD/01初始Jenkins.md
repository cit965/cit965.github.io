![image-20240801104743892](https://github.com/user-attachments/assets/ad6c1213-be3a-4f9b-b2da-2e14068f91a5)# Jenkins部署

[TOC]

## 资源列表

| 操作系统   | 主机名  | 配置 | IP             |
| ---------- | ------- | ---- | -------------- |
| CentOS 7.9 | jenkins | 2C4G | 192.168.93.101 |
| CentOS 7.9 | gitlab  | 2C4G | 192.168.93.102 |

## 基础环境

- 关闭防火墙

```bash
systemctl stop firewalld
systemctl disable firewalld
```

- 关闭内核安全机制

```bash
setenforce 0
sed -i "s/.*SELINUX=.*/SELINUX=disabled/g" /etc/selinux/config
```

- 修改主机名

```bash
hostnamectl set-hostname jenkins
hostnamectl set-hostname gitlab
```

## 一、部署Gilab

### 1.1、安装Gitlab

- 注意：
  - 本案例没有修改端口，直接使用了80端口，注意不要有冲突。
  - 如果不修改，在克隆项目的时候，给出的仓库链接使用的是gitlab.example.com，在局域网中使用起来不方便，还要修改成gitlab的ip地址。修改后就直接是gitlab的ip地址了。

```bash
[root@gitlab ~]# yum -y install policycoreutils-python
[root@gitlab ~]# rpm -ivh gitlab-ce-15.5.1-ce.0.el7.x86_64.rpm
```

### 1.2、修改配置文件

```bash
[root@gitlab ~]# vim /etc/gitlab/gitlab.rb
external_url 'http://192.168.93.102'
```

### 1.3、加载配置文件

- 前提是80端口没有被占用
- 备注：
  - 重启：gitlab-ctl restart
  - 关闭：gitlab-ctl stop
  - 启动：gitlab-ctl start
  - 状态：gitlab-ctl status
  - 帮助：gitlab-ctl --help

```bash
# 加载配置文件时间会有点小漫长，请耐心等待
[root@gitlab ~]# gitlab-ctl reconfigure
[root@gitlab ~]# netstat -anpt | grep 80
tcp        0      0 0.0.0.0:80              0.0.0.0:*               LISTEN      9536/nginx: master
```

```bash
# 查看状态
[root@gitlab ~]# gitlab-ctl status
run: alertmanager: (pid 9869) 80s; run: log: (pid 9755) 102s
run: gitaly: (pid 9858) 81s; run: log: (pid 9121) 194s
run: gitlab-exporter: (pid 9835) 82s; run: log: (pid 9695) 120s
run: gitlab-kas: (pid 9811) 84s; run: log: (pid 9383) 180s
run: gitlab-workhorse: (pid 9820) 84s; run: log: (pid 9518) 137s
run: logrotate: (pid 9055) 207s; run: log: (pid 9063) 206s
run: nginx: (pid 9536) 134s; run: log: (pid 9549) 131s
run: node-exporter: (pid 9830) 83s; run: log: (pid 9619) 125s
run: postgres-exporter: (pid 9953) 79s; run: log: (pid 9775) 96s
run: postgresql: (pid 9240) 189s; run: log: (pid 9335) 186s
run: prometheus: (pid 9843) 81s; run: log: (pid 9731) 108s
run: puma: (pid 9443) 152s; run: log: (pid 9452) 148s
run: redis: (pid 9085) 201s; run: log: (pid 9093) 200s
run: redis-exporter: (pid 9837) 82s; run: log: (pid 9713) 114s
run: sidekiq: (pid 9462) 146s; run: log: (pid 9488) 143s
```

### 1.4、访问Gitlab

- 访问地址：
- http://192.168.93.102
  - 默认账号：`root`
  - 默认密码：`cat /etc/gitlab/initial_root_password | grep Password:`

![image-20240801084138220](https://github.com/user-attachments/assets/b8df476c-c75e-44e3-8cbe-8ab5a6f0634e)

### 1.5、修改root登录密码

- 点击右上角用户头像，在下拉菜单中点`Preferences`，在左侧列表中开打`password`。本案例中使用的root密码为pwd12345，注意密码长度至少8位。

![image-20240801084243076](https://github.com/user-attachments/assets/b48871e6-6c97-4392-be15-18cc08a26b3b)


### 1.6、创建demo测试项目

- 创建一个项目名称叫`demo`

![image-20240801084341225](https://github.com/user-attachments/assets/f61bb8d7-169d-4b62-b451-47c524f53ffe)

![image-20240801084359145](https://github.com/user-attachments/assets/888de9ee-a998-4a27-a3e7-a2b027387280)


![image-20240801084430271](https://github.com/user-attachments/assets/2d787ffd-414e-43fd-9fb2-8495061b6b2d)


### 1.7、上传代码

```bash
[root@jenkins ~]# yum -y install git
[root@jenkins ~]# tar -zxvf BlueLight.git.tar.gz
[root@jenkins ~]# git clone http://192.168.93.102/root/demo.git
[root@jenkins ~]# mv -f BlueLight/* demo/
[root@jenkins ~]# cd demo/
[root@jenkins demo]# git config --global user.email "wzh@admin.com"
[root@jenkins demo]# git config --global user.name "wzh@wzh.com"
[root@jenkins demo]# git add .
[root@jenkins demo]# git commit -m "web"
[root@jenkins demo]# git push -uf origin main
```

### 1.8、验证上传的代码

![image-20240801085133641](https://github.com/user-attachments/assets/a6c651ca-3e2e-483b-9a44-cb2284ef3bd3)


## 二、部署Jenkins所需软件

- Jenkins节点操作

### 2.1、部署JDK

```bash
[root@jenkins ~]# tar -zxvf jdk-11.0.16.1_linux-x64_bin.tar.gz
[root@jenkins ~]# mv jdk-11.0.16.1 /usr/local/java11


[root@jenkins ~]# cat >> /etc/profile << 'EOF'
export JAVA_HOME=/usr/local/java11/
export CLASSPATH=$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar
export PATH=$JAVA_HOME/bin:$PATH
EOF


[root@jenkins ~]# source /etc/profile
[root@jenkins ~]# java -version
java version "11.0.16.1" 2022-08-18 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.16.1+1-LTS-1)
Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.16.1+1-LTS-1, mixed mode)
```

### 2.2、部署Tomcat

```bash
[root@jenkins ~]# tar -zxvf apache-tomcat-8.5.56.tar.gz
[root@jenkins ~]# mv apache-tomcat-8.5.56 /usr/local/tomcat
```

### 2.3、部署Jenkins

```bash
[root@jenkins ~]# yum -y install fontconfig
[root@jenkins ~]# mv jenkins2.401.1.war jenkins.war


# 不需要手动解包，把war包移动到tomcat的项目目录中webapps中开启tomcat将会自动解压
[root@jenkins ~]# mv jenkins.war /usr/local/tomcat/webapps/
[root@jenkins ~]# /usr/local/tomcat/bin/startup.sh
```

### 2.4、设置Jenkins插件更新源

- 注意：default.json文件或updates目录需要jenkins初始化结束才能出来。此处需要稍等片刻。

```bash
[root@jenkins ~]# cd /root/.jenkins/updates/
[root@jenkins updates]# sed -i 's/https:\/\/www.jenkins.io/https:\/\/mirrors.tuna.tsinghua.edu.cn\/jenkins/g' default.json 
[root@jenkins updates]# sed -i 's/https:\/\/www.google.com/https:\/\/www.baidu.com/g' default.json
```

## 三、Jenkins初始化

- 访问地址：http://192.168.93.101:8080/jenkins

### 3.1、登录Jenkins页面

- 根据页面提示，复制Jenkins安装后初始的密钥

```bash
[root@jenkins ~]# cat /root/.jenkins/secrets/initialAdminPassword
72a19165668b4b1daec409d9edce6c4e
```

![image-20240801090052026](https://github.com/user-attachments/assets/7e53334a-7530-497d-812f-99ecbfe1a6ed)


### 3.2、选择插件安装方式

- 注意：如果有插件安装失败也没关系，因为安装插件需要网络，结束后可以点击重试。

![image-20240801090300928](https://github.com/user-attachments/assets/25a46c30-1e5b-4bd8-a7c8-609ae91b04be)


![image-20240801090441001](https://github.com/user-attachments/assets/6fe7814a-f0d5-4997-9b8f-1c6ce24d94f8)


### 3.3、创建管理员用户

- 本案例将初始的管理员账号和密码都设置为admin

![image-20240801092520897](https://github.com/user-attachments/assets/3083fcb4-a12f-426d-a619-63432a75abb9)


![image-20240801092534124](https://github.com/user-attachments/assets/10291a86-7fa0-4252-a50d-ca6e4116d150)


![image-20240801092554136](https://github.com/user-attachments/assets/8e70af38-a3fb-48af-ac17-663d9be80cc8)


### 3.4、Jsenkins插件管理

- 在安装Jenkins时，选择默认安装插件会很慢，甚至会失败，因此我们可以配置插件源为国内的地址。
- 进入Manage Jenkins——>Plugins——>Advancedsettings最下面有Update Site（升级站点），设置为如下链接，并点“提交”按钮
- https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json

![image-20240801092901948](https://github.com/user-attachments/assets/8d4a0f2b-bd3e-4080-8080-76b78777ee82)


- 然后重启Jenkins

```bash
# 关闭
[root@jenkins ~]# /usr/local/tomcat/bin/shutdown.sh


# 开启
[root@jenkins ~]# /usr/local/tomcat/bin/startup.sh
```

### 3.5、安装插件

- 点击“Manage jenkins”——>“Plugins”——>“Avalableplugins”，输入要安装的插件，并勾选列出来的插件，然后点击安装。
- 可以都去搜索一下防止插件没有安装

```bash
# 本课程内，可能会用的插件如下所示
Git Parameter
Git Pipeline for Blue Ocean GitLab
Blue Ocean
Blue Ocean Pipeline Editor Blue OceanCore JS
Pipeline SCM API for Blue Ocean Dashboardfor Blue Ocean
Build With Parameters extended Choice ParameterKubernetes
Kubernetes CLI Kubernetes CredentialsImage Tag Parameter Active Choices
SSH
ansible
Maven Integration Publish Over SSH
Role-based Authorization Strategy NodeJS
############################################################
Git Credentials
Credentials Binding
Dynamic Extended ChoiceParameter Plug-In Dynamic Parameter Plug-In
Pipeline
Pipeline: DeclarativeLocalization: Chinese (Simplified)
############################################################


# 注意：在初始化如果没有安装好，此处可以进行手动安装，为其他项目的实施提供功能
```

### 3.6、软件包安装插件

- 将本课程提供的软件包上传至jenkins服务器

```bash
# 第一个mv是备份的意思
[root@jenkins ~]# mv /root/.jenkins/plugins /root/.jenkins/plugins.old
[root@jenkins ~]# tar zxf jenkins-plugins.tar.gz
[root@jenkins ~]# mv plugins/ /root/.jenkins


# 重启Tomcat
[root@jenkins ~]# /usr/local/tomcat/bin/shutdown.sh
[root@jenkins ~]# /usr/local/tomcat/bin/startup.sh
```

##  四、Jenkins角色与权限管理

- 我们可以利用”Role-basedAuthorization Strategy“插件来管理Jenkins用户权限，在前面的插件安装中已经安装过次插件。

### 4.1、全局安全配置

- “Dashboard”——>“ManageJenkins”——>“Security”——>“Authentication”
- 将授权策略修改为“Role-Based Strategy”，并保存设置。

![image-20240801094908186](https://github.com/user-attachments/assets/7d6419e0-b29f-4138-b846-4e3a86cd7d0f)


### 4.2、角色

- 为了更方便的为用户授权，jenkins中使用角色作为一类权限的容器。角色是一组相关权限的集合。可以为用户指定角色，而不是直接指定权限。

#### 4.2.1、角色种类

- **Global roles**：Global roles（全局角色）管理员等高级用户可以创建基于全局的角色
- **Item roles**：针对某个或者某些项目的角色
- **Agent roles**：节点相关的权限

#### 4.2.2、设置角色

- ”Dashboard“——>”Manage Jenkins“——>”Manage and AssingRoles“。点击”Manage Roles“

- 本案例中我们添加三个角色：
  - baseRole：该角色为全局角色，这个角色需要绑定Overall下面的Read权限，**是为了给所有用户绑定最基本的Jenkins访问权限。注意：如果不给后续用户绑定这个角色，会报错：用户名ismissing the Overall/Read permission**
    - role1：该角色为项目角色。使用正则表达式绑定”my-itme01.*“，意思是只能操作名称为”my-item01‘开头的项目。
    - role2：该角色也为项目角色。绑定”my-item02“，意思是只能操作”my-item02“开头的项目。

#### 4.2.3、添加角色

- 添加Global roles

![image-20240801100102301](https://github.com/user-attachments/assets/bf0a1797-30cf-4009-b853-efc248e93cc1)


- 添加item roles

![image-20240801100206805](https://github.com/user-attachments/assets/07ad4a02-8fc7-45d1-a6a6-812067fb536d)


![image-20240801100314029](https://github.com/user-attachments/assets/1550f226-dd17-4020-800c-ddf526f38a23)

#### 4.2.4、创建用户

##### 4.2.4.1、添加用户

- ”Dashboard“——>”Manage Jenkins“——>”Users“，在右上角点击”CreateUser“，创建用户。
- 添加两个用户`zhangsan`，`lisi`

![image-20240801100600798](https://github.com/user-attachments/assets/8c6ba281-da2e-4f06-be37-805ebdda317b)


![image-20240801100641053](https://github.com/user-attachments/assets/673e72f5-40a3-4c65-ad4e-fce2691df4f0)


![image-20240801100710660](https://github.com/user-attachments/assets/d9e02a17-6554-4fdc-8b78-6faa1be54364)


![image-20240801100733839](https://github.com/user-attachments/assets/6ad100f2-d144-40a6-b96a-3043f881befb)


##### 4.2.4.2、绑定角色

- ”Dashboard“——"Manage Jenkins"——>”Manage and Assign Roles“，然后点击”Assign Roles“
- 为zhangsan用户绑定baseRole和role1角色

![image-20240801100937250](https://github.com/user-attachments/assets/687ddf05-b564-4705-bf9f-3e81a6099a58)


![image-20240801101006750](https://github.com/user-attachments/assets/49051da8-07c3-4d94-a3a8-68e6d941e08d)


![image-20240801101036768](https://github.com/user-attachments/assets/be2c06a1-629a-41da-bb71-0b2a9ba6a5c8)


![image-20240801101105782](https://github.com/user-attachments/assets/65439041-d6ae-49b6-941e-51de5a4589eb)


![image-20240801101126395-17329642924181](https://github.com/user-attachments/assets/4aa58edb-2e47-4c45-8d71-d33b8625058a)


![image-20240801101831527](https://github.com/user-attachments/assets/8d5e9ae1-6bfb-4df5-8bb2-4512b1d90512)

- 为lisi用户绑定baseRole和role2角色

![image-20240801101306411](https://github.com/user-attachments/assets/38aa6400-1fb7-4716-a079-19c9317299f1)


![image-20240801101329294](https://github.com/user-attachments/assets/3d9e13c2-00d4-4808-be81-548676759d20)


![image-20240801101356751](https://github.com/user-attachments/assets/7df0792f-3da5-487f-a631-246e3e3a52bc)


![image-20240801101436135](https://github.com/user-attachments/assets/344e93af-0d91-4be7-b854-aaaf42de47b0)


#### 4.2.5、创建项目测试权限

##### 4.2.5.1、创建项目

- 用管理员的权限创建两个项目，名字分别是`my-item01-zhangsan`，`my-item02-lisi`、
- 创建`zhangsan`项目

- ”Dashboard“——>”新建Item“——>”确定“按钮

![image-20240801101800322](https://github.com/user-attachments/assets/f8ce41b3-fd0e-420c-a759-32d27bf17fc1)


![image-20240801101831527](https://github.com/user-attachments/assets/5b82c489-0cd2-4e4a-9849-e0399b0222e0)


- 创建`lisi`项目
- ”Dashboard“——>”新建Item“——>”确定“按钮

![image-20240801101936477](https://github.com/user-attachments/assets/44bcb669-687b-4346-b3e3-35fa6f2d9ae3)


![image-20240801101954735](https://github.com/user-attachments/assets/4c8441d8-e221-42c6-81d0-6dc064e73c16)


![image-20240801102015500](https://github.com/user-attachments/assets/6a836cde-a1dc-4618-92d3-e3a53321d26c)


##### 4.2.5.2、测试权限

- 分别用`zhangsan`和`lisi`的身份登录到系统
- 可以发现，每个用户只能管理属于自己的角色范围内的项目

![image-20240801102130642](https://github.com/user-attachments/assets/080b7e7c-75d3-4b32-8598-242d77f61e16)


![image-20240801102159859](https://github.com/user-attachments/assets/22b49104-e7f6-4d4c-b1ce-343506a2e54b)


## 五、凭证管理

- 在许多第三方网站和应用程序可以与Jenkins进行交互，例如程序代码仓库，云存储系统和服务等。此类应用程序的系统管理员可以在应用程序中配置凭据以专供Jenkins使用。通常通过将访问控制应用于这些凭据来完成这项工作，以”锁定“Jenkins可用的应用程序功能区域。一旦Jenkins管理员（即管理Jenkins站点的Jenkins用户）在Jenkins中添加/配置这些凭据，Pipeline项目可以使用凭据与这些第三方应用程序进行交互。
- 用管理员身份登录到Jenkins。要在Jenkins使用凭据管理功能，需要安装”CreadentialsBinding“插件，前面已经安装过此插件，这里不再安装
- 凭据可以用来存储需要密文保护的数据库密码、Gitlab密码信息、Docker私有仓库密码等，以便Jenkins可以和这些第三方的应用进行交互。

### 5.1、凭据的种类

- Jinkins提供了多种类型的凭据，使用与不同的业务需求，具体类型如下：
  - Username with password：用户名和密码
  - GitHub App：GitHub应用进行身份验证
  - GitLab API token：存储GitLab的用户给API token
  - OpenShift Username and password：存储OpenShift的用户名和密码
  - SSH Username with private key：使用SSH用户和密钥
  - Secret file：需要保密的文本文件，使用时Jenkins会将文件复制到一个临时目录中，再将文件路径设置到一个变量中，等构建结束后，所复制的Secret file就会被删除。
  - Secret text：需要保存的一个加密的文本串，如顶顶机器人或GitHun的api token
  - Certificate：通过上传证书文件的方式
- 其中，常用的凭证类型有：Username with password（用户密码）和SSH Username with private key（SSH密钥）。接下来以使用Git工具到GitLab拉取项目源代码为例，演示Jenkins的如果管理GitLab的凭证。
- **注意**：为了让Jenkins支持从GitLab拉取源码，需要安装Git插件以及在CentOS 7系统上安装Git工具

- **凭据的作用范围**
  - 凭据具有与它们相关联的范围。这是一种表示它们如何才能被暴露的方式，Jenkins使用的主要范围有如下2种。
- **System（系统）**
  - 顾名思义，这个范围与跟上下文，也就是Jenkins系统相关联。此范围中的凭据只被暴露给系统和后台任务，并且一般被用于连接到构建节点或代理节点等。
- **全局**
  - 全局范围是默认选项，通过用来确保Jenkins中的任务可以使用凭证

### 5.2、添加用户密码类型的凭据

#### 5.2.1、添加凭据

- ”Manage jenkins“——>”Credentials“，打开如下页面，并点击”全局“，进入全局凭据管理界面，如下图所示

![image-20240801103756564](https://github.com/user-attachments/assets/d3fd2cf7-fc5d-435d-a841-c63e2019f67f)


- 在如下界面中，点击右上角的”Add Credentials“按钮，添加凭据

![image-20240801103844776](https://github.com/user-attachments/assets/45c7014d-a19a-4ecf-8744-58a448e4de4a)


#### 5.2.2、添加凭据参数

- 这里主要的内容有：
  - 凭据类型：Username with password
  - 范围：Global
  - 用户名：root（该账号是gitlab中添加的账号）
  - 密码：gitlab中为root用户设置的密码（本案例此处为wzh.2005，注意不是系统的root密码）
  - ID：选填（设置平局的唯一标识，不设置会自动分配一个唯一标识）
  - 描述：选填（凭据名称，此处最好添加一下，使用凭据的时候便于识别，不设置就是用用户名）

![image-20240801104206740](https://github.com/user-attachments/assets/340494a5-041a-499f-9e0c-0cf59fb7c979)

- 点击”Create“创建此凭据，添加结果如下：

![image-20240801104231911](https://github.com/user-attachments/assets/d540467b-ccb4-4351-bd5e-6a9c77940459)


#### 5.2.3、使用凭据

##### 5.2.3.1、创建test01项目

```bash
[root@jenkins ~]# yum -y install git
```

![image-20240801104336919](https://github.com/user-attachments/assets/95ee354a-44f4-4c17-bbd3-5cbccffa5415)


![image-20240801104404031](https://github.com/user-attachments/assets/24bcb7ea-41e8-430e-80e9-db56b48ae9fe)

##### 5.2.3.2、配置源码管理

![image-20240801104551015](https://github.com/user-attachments/assets/8b86900f-ed31-4c50-94c8-f90355236d57)


##### 5.2.3.3、发布项目

![image-20240801104619070](https://github.com/user-attachments/assets/faa7be8d-c996-4a43-8aaa-8dae42832787)


- 运行成功之后，如果没有报错，可以刷新页面，就可以看到**绿色**的标识了

![image-20240801104743892](https://github.com/user-attachments/assets/ef35ba99-202c-4904-98f0-2ecc57b8c02b)
### 5.3、添加SSH类型的凭据

- SSH类型的凭据可以使Jenkins在拉去gitlab中的代码时使用密钥对的方式，不仅实现了免密连接，同时也会对数据进行加密，是一种安全可靠的凭据方式。

![image-20240801105241201](https://github.com/user-attachments/assets/3bf63c73-ea6f-479e-8c4f-73bf209b4bb7)



#### 5.3.1、Jenkins主机生成密钥对

- 在Jenkins主机上以root身份生成密钥对

```bash
# 一路回车即可
[root@jenkins ~]# ssh-keygen
```

#### 5.3.2、将公钥存放到gitlab

```bash
# 查看公钥文件内容
[root@jenkins ~]# cat /root/.ssh/id_rsa.pub 
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQClBYGM15IosBfenQszhhjbet06ww1YeapOb0lv7M+o9npYYW5nZ9aKHNzYsHIydkJ/ihO+ohJJe+/3ZYHKHSfd2kyOGC2/wWn/lBvbZTinA0UlDZayM/41gEU0vlv2evlM4h3B1SKbWHTM6C/XjwUhBtyaa1rRaSiaCTUjPfKtZu9mviNMn8mxGPgeyjTghqE/CrM8iGGuFkYsowI2Z+bhai8mIKGri3eIGQvuLYgO5X7s9W/g94wJAgapf+8rNrOeU8r9Vl92O3rGO+0ry9eNg8fbY8zuzPN6qWe3GnNT9cHN8qmHBqb4mHDzTsCMDgfTss+8CzxEAxF7VOYpRb/t root@jenkins
```

- 用root用户登录gitlab，点击右上角的头像，在下拉菜单中点”perferneces“，然后在左侧点击”SSH Keys“

![image-20240801105620870](https://github.com/user-attachments/assets/7aacf718-f1a8-406f-8a21-a4234b0f1727)

![image-20240801105636511](https://github.com/user-attachments/assets/dd3ed68e-4785-4fdd-8ebf-cab005436495)

#### 5.3.3、Jenkins添加SSH凭据

- ”Manage jenkins“——>”Credentials“，打开如下页面，并点击”全局”，进入全局凭据界面

![image-20240801105823187](https://github.com/user-attachments/assets/78c53beb-75a9-4310-b9d3-c4755702778f)


![image-20240801105840669](https://github.com/user-attachments/assets/df1de22e-e6af-4d0f-812c-05f0cd97cc35)


![image-20240801105916561](https://github.com/user-attachments/assets/c73ca36c-bd21-488f-b105-06d6c33c5d8b)

#### 5.3.4、添加凭据参数

- 这里主要的参数有：
  - 类型：SSH
  - 范围：Global
  - ID：可选
  - 描述：可选
  - Username：root（这个密钥对是用root的身份生成的）
  - Private Key：添加root生成的私钥

```bash
# 查看私钥文件内容
[root@jenkins ~]# cat /root/.ssh/id_rsa
-----BEGIN RSA PRIVATE KEY-----
MIIEowIBAAKCAQEApQWBjNeSKLAX3p0LM4YY23rdOsMNWHmqTm9Jb+zPqPZ6WGFu
Z2fWihzc2LByMnZCf4oTvqISSXvv92WByh0n3dpMjhgtv8Fp/5Qb22U4pwNFJQ2W
sjP+NYBFNL5b9nr5TOIdwdUim1h0zOgv148FIQbcmmta0Wkomgk1Iz3yrWbvZr4j
TJ/JsRj4Hso04IahPwqzPIhhrhZGLKMCNmfm4WovJiChq4t3iBkL7i2IDuV+7PVv
4PeMCQIGqX/vKzaznlPK/VZfdjt6xjvtK8vXjYPH22PM7szzeqlntxpzU/XBzfKp
hwam+Jhw807AjA4H07LPvAs8RAMRe1TmKUW/7QIDAQABAoIBAFvqCDGBdLhS9Mia
oj2NiFTfR0/OiqVoBtLvK3E67qNGvfhyNENGU/nTf7L1/HVc50cQilTZAuSJMqyS
jkscGDN6vr86emje+wJO5YE7DOYBbUbpHbGeQg5cpq9tA93yut725uoqo77w8wWa
oeMnlwzBPKiJ+SjAsMuzKzS48W1hDgr+CfTxjCY0/1RdazuGn5J2Fx841ZJ/JFgK
MtkVIpzd8f4pHdWIaPfLpCE2595tbQcJsu6ZDbUzHS0MBG3RUrMLqghriYHJkZmi
6YW2Fc7LOW/brw293IdM43myQUEmao8Wl/MWF19BB4En/p2dpGZnTcFTxAdv+q4z
Ow3KYCECgYEA1FjgQw0A1wm3SNVQbX1c/jGZrRily9AcMkFC8EGYQCYhxs0vyOyz
/vGtXivEu5eyyBGy2rSklFSJL/GjG87wUmd4MEAGSO1OYregnY1AtyyeuUpLrGL1
YqA/2E7lSH2ZBewNlbRpg6cetYV7wbpKjcCbxrp+N9+shDc4mqBzHnUCgYEAxvIJ
vk/oqYI5m6QGHT/Yd2Nh9nTmp4t7x5SQI4zc3bxIJGAg5MLr7ov+rmtusGr1SHzb
vhQfNWeWooaCiQzxuIEId4MSZq+BOrxKQl39jIdY9EKNroRU43BF2At9NNs0H3qu
gETUSTNi648Kt1vAgNBZIft85DipChIAnMuc3JkCgYAjqfWobUOp2iDlY6ZJbVez
/aKg1tXpwD8sFZfngCzRAVaE7CtNZKvqcq66dUFqfFTzkz1lzBckLnqICd5qKjxk
qqod+HLVxr12iP6512J6IU1bM2Y4QrqR4PY4HzAVF7seqoGxlgZurR/UPuIFLIOf
AS1omCPgwHlaD2g7WB1djQKBgQC9Wx6e/5vpy0Nduq7/JAe7CuLxG692hTKZcfQH
gkmu20inJr/oPQcnFCSiiyrdy9AO4JiewLQ7to8Pvot8Os/P1zDh3+WhyyZra1Aa
/y8XlLO8OaR1GQtbNz+jNLxFlOZ1l+WDvP95dOmQX6PJhhEiCizsRVxINQ3fwebH
Vp3E8QKBgHx/PQAlldjgPrUFs6xq0A6OCLtn6PWASBoFjh3SV4jXKUlY60Wg45H8
x60Kr44dAgvONbVFlyaUCl7nY78GeeMlCx7NtHktmyQDC5AL+3g2Dmfzfq7Klcc7
cKm534YYtALBTEVXsDalL9SP5JRnBqKPPzF7Wu88d/rEL7r1UaQ2
-----END RSA PRIVATE KEY-----
```

![image-20240801110243905-17329648398705](https://github.com/user-attachments/assets/e336747a-cc99-4939-b4e1-f3a8d7b79c64)


![image-20240801110312149](https://github.com/user-attachments/assets/36327c19-9c64-4e91-9f12-fa20b4c3ab6f)


#### 5.3.5、测试凭据

##### 5.3.5.1、创建test02项目

![image-20240801110351605](https://github.com/user-attachments/assets/76594c57-59f6-455f-9171-7b37b0eb98da)


![image-20240801110411455](https://github.com/user-attachments/assets/c7d619d2-2671-4fc2-93ea-e348bbe740f2)


##### 5.3.5.2、配置源码管理

- 如果报错以下错误可以使用Jenkins节点手动使用ssh登录一下
- 在使用密钥对时，要提前在jenkins主机上生成gitlab主机的fingerprint，否则，此处会提示报错。错误信息如下：
- 第一次连接的话可以看到提示：”Are yousure you want to continue connecting (yes/no)? yes“，输入yes并回车即可生成gitlab主机的fingerprint

```bash
[root@jenkins ~]# ssh root@192.168.93.102
The authenticity of host '192.168.93.102 (192.168.93.102)' can't be established.
ECDSA key fingerprint is SHA256:ulREvG0hrcgiCcK7+Tcbv+p0jxe7GDM8ZthK7bU3fMM.
ECDSA key fingerprint is MD5:4b:84:94:c0:62:22:76:ed:26:24:8e:46:c9:1e:03:85.
Are you sure you want to continue connecting (yes/no)? yes 
Warning: Permanently added '192.168.93.102' (ECDSA) to the list of known hosts.
root@192.168.93.102's password: 
```

![image-20240801110728582](https://github.com/user-attachments/assets/fd66ccf9-27ca-447f-9c8f-9656dc3f0fc9)


![image-20240801110920201](https://github.com/user-attachments/assets/53888f17-855b-430d-b4c8-2e4361712edd)


##### 5.3.5.3、发布项目

![image-20240801110958040](https://github.com/user-attachments/assets/8ba45c2e-42e1-4bb9-9afd-85f1da7aba75)


- 运行成功之后，如果没有报错，可以刷新页面，就可以看到**绿色**的标识了

![image-20240801111020176](https://github.com/user-attachments/assets/13115b5b-02ac-4609-ad3e-058ca74764dc)
