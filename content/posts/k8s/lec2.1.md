---
title: "K8s-Lec2.1"
date: 2022-03-23T20:31:47+08:00
draft: false
categories: k8s
---

### 1.1 container + orchestration
容器+编排，很多k8s书第二章都会讲容器，为什么大家都要讲呢？因为k8s=container + orchestration 

Kubernetes 是一个创建、部署和管理分布式应用程序的平台。这些应用程序有许多不同的形状和大小，但最终，它们都由一个或多个在单独机器上运行的程序组成。这些程序接受输入，操作数据，然后返回结果。在考虑构建分布式系统之前，我们必须首先考虑如何构建包含这些程序并构成分布式系统的应用程序容器映像。

### 1.2 container

#### 1.2.1 什么是打包

应用程序通常由语言运行时、库和源代码组成。在许多情况下，您的应用程序依赖于外部共享库，如 libc 和 libssl。这些外部库通常作为您已经安装在特定机器上的操作系统中的共享组件提供 

#### 1.2.2 为什么需要打包
当在程序员笔记本电脑上开发的应用程序依赖于共享库时，这种对共享库的依赖会导致问题，而当程序被推广到生产操作系统时，共享库就不可用了。即使开发环境和生产环境共享完全相同的操作系统版本，当开发人员忘记在他们部署到生产环境的包中包含依赖的资产文件时，也会出现问题 

在处理应用程序时，将它们打包以便于与其他人共享通常是有帮助的。多数人使用的容器默认工具 Docker 可以轻松地打包可执行文件并将其推送到远程注册表，以便其他人随后可以使用。在撰写本文时，容器注册在所有主要的公共云中都可用，在云中构建映像的服务在其中的许多云中也可用。您也可以使用开源或商业系统运行您自己的注册表。这些注册中心使用户可以轻松地管理和部署私有映像，而镜像仓库则可以轻松地与持续交付系统集成 

下面两张对比图解释了docker打包的最主要的好处：
![](https://raw.githubusercontent.com/cit965/blog-picture/master/Screen%20Shot%202022-03-23%20at%206.07.17%20PM.png)
![](https://raw.githubusercontent.com/cit965/blog-picture/master/Screen%20Shot%202022-03-23%20at%206.08.28%20PM.png)
#### 1.2.3 云原生如何打包
使用docker https://docs.docker.com/get-started/

### 1.3 orchestration
为什么需要编排

容器编排使容器的部署、管理、伸缩和联网自动化。需要部署和管理成百上千个 Linux 容器和主机的企业可以从容器编排中获益

Kubernetes 消除了部署和扩展容器化应用程序所涉及的许多手动流程。您可以将运行 Linux 容器的主机组(物理或虚拟机)集群在一起，而 Kubernetes 为您提供了简单有效地管理这些集群的平台。更广泛地说，它可以帮助您在生产环境中完全实现和依赖基于容器的基础结构

当您使用容器编排工具(如 Kubernetes)时，您将使用 YAML 或 JSON 文件描述应用程序的配置。配置文件告诉组态管理工具在哪里可以找到容器映像，如何建立网络，以及在哪里存储日志 

您可以使用 Kubernetes 模式来管理基于容器的应用程序和服务的配置、生命周期和规模。这些可重复的模式是 Kubernetes 开发人员构建完整系统所需的工具 

使用k8s https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-app/deploy-interactive/