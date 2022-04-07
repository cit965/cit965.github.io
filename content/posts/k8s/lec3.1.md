---
title: "K8s-Lec2.1"
date: 2022-04-07T21:03:53+08:00
draft: false
---

### k8s 源码简介
咱们从k8s first comiit 讲到1.23，这种时间序列的上帝讲法，让你们仿佛回到2014年中，参与那一场互联网时代的技术革命。不要担心听不懂，只要对于go语言语法有基本的了解，同时花费大量时间进去，你一定能够从13亿中国人中脱引而出，蜕变成top softwere developer！
### 起步
大家先下载k8s源码，然后将代码回退到第一个commit，我们首先来梳理下这个版本的代码目录
### 代码模块
- apiserver
- cloudcfg
- controller-manager
- kubelet
- proxy
- cluster(sh)

### apiserver

定义了一些RestStorage ： tasks,replicationControllers,services , endpointController ，主要负责接收用户发出的crud，底层依赖了etcd

### cloudcfg

kubectl 的前身，负责解析命令行参数，和apiserver交互

### controller-manager
通过list和watch以及label selector 来控制tasks的副本数量

### kubelet
用来创建task，查询task，删除task，底层和docker进行交互

### proxy
主要用来实现servers和endpoint的流量转发

### cluster

负责启动虚拟机，防火墙，网络初始化，k8s集群的安装卸载，第一版主要实现了在谷歌云上启动k8s