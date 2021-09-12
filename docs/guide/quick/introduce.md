# 介绍

`蜂巢`是一个基于`阿里云ACK`实现的便捷环境管理系统，基于技术组合（`kubernetes` `docker` `jenkins` `nginx`），内置模块如：环境管理、工单系统、服务监控、服务治理、日志管理等。

*   系统地址：[https://ghost.dev.aixuexi.com/index](https://ghost.dev.aixuexi.com/index)
*   在线文档：[https://ghost.dev.aixuexi.com/guide/quick/introduce.html](https://ghost.dev.aixuexi.com/guide/quick/introduce.html)
*   在线提问：[https://ghost.dev.aixuexi.com/workorder/order/add](https://ghost.dev.aixuexi.com/workorder/order/add)
*   需求地址：[http://iwork.gaosiedu.com/pages/viewpage.action?pageId=38414240](http://iwork.gaosiedu.com/pages/viewpage.action?pageId=38414240)
*   企业微信群：蜂巢系统-线下统一测试环境沟通群


## 主要特性

*   私有环境默认可直接使用公共环境dubbo服务，减少私有环境内项目
*   HTTP请求简单修改Nginx配置也可使用公共环境服务，减少私有环境内项目
*   HTTM，MQ，RPC均支持跨任何环境调用
*   支持多环境，简单修改host即可实现切换环境
*   强大的环境管理功能（包括一键复制、启动、停止、修改、删除等）
*   强大的项目管理功能（包括复制、修改、删除、启动，停止、搜索等）
*   支持在线查看Jenkins编译日志以及项目运行日志
*   支持webconsole，可直接进入部署项目的容器
*   支持在线查看项目源代码
*   完全响应式布局（支持电脑、平板、手机等所有主流设备登录使用）
*   完善的日志体系记录用户行为
*   支持服务监控，调用链监控，服务器监控功能。

## 系统架构

<a data-fancybox title="" href="/assets/framework.png">![](/assets/framework.png)</a>

::: tip Tips
使用`Docker`解决运行环境的依赖<br>
使用`Kubernetes`管理容器，运行各种服务<br>
使用`Nginx`监听不同端口实现环境分离<br>
使用`volume+nas`解决第三方数据／缓存服务的运行和数据持久化<br>
使用`Jenkins`调度项目编译<br>
使用大量"抽象化"的`Shell`脚本，高度可复用,减少对 Jenkins 插件的依赖<br>
在 ECS 上运行`Docker+Kubernetes`，提高资源利用率，解决环境迁移、扩容、故障恢复等难题<br>
[更多详细方案描述](http://iwork.gaosiedu.com/pages/viewpage.action?pageId=88546449)
:::



## 数据流向

<a data-fancybox title="" href="/assets/flow.png">![](/assets/flow.png)</a>


## 蜂巢 IP

| 类型        | 网段/IP       | 来源                     | 备注                                                              |
| ----------- | ------------- | ------------------------ | ----------------------------------------------------------------- |
| 私有环境 IP | 192.168.0.\*  | 7 层机房网络             | 公司网络和蜂巢服务器能访问，非蜂巢服务器访问需找运维打通网络      |
| 公共环境 IP | 192.168.0.38  | 7 层机房网络             | 公司网络和蜂巢服务器能访问，非蜂巢服务器访问需找运维打通网络      |
| 容器 IP     | 10.20.\*      | docker 容器 IP           | 公司网络和蜂巢服务器能访问，非蜂巢服务器不可以                    |
| 服务器 IP   | 10.255.0.\*   | 阿里云服务内网，独立 VPC | 公司网络能访问，阿里云服务器访问需找运维打通网络                  |
| 出口网关 IP | 39.106.86.229 | 阿里云弹性 IP            | 蜂巢内部署的项目访问内部系统，如 OA，需将此 ip 加入 OA 系统白名单 |
