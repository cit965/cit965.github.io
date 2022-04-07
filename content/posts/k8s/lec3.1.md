---
title: "K8s-Lec2.1"
date: 2022-04-07T21:03:53+08:00
draft: false
---

### k8s 源码简介
咱们从k8s first commit 开始讲起
### 代码模块
- apiserver
- cloudcfg
- controller-manager
- kubelet
- proxy
- cluster(sh)

### apiserver

定义了3+1个RestStorage： tasks,replicationControllers,services , endpointController 
。负责接收用户发出的crud，底层依赖了etcd

### cloudcfg

kubectl 的前身，负责解析命令行参数，和apiserver交互

### controller-manager
通过list和watch以及label selector 来控制tasks的副本数量

### kubelet
用来创建task，查询task，删除task

### proxy
主要用来实现servers和endpoint的流量转发

### cluster（sh）
负责虚拟机的网络初始化，k8s集群的安装卸载，第一版主要是gcloud