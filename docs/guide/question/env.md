# 环境问题

## 公共环境能否调用私有环境

::: tip Tips
dubbo 不能，http 可以临时通过修改 Nginx 配置的方式调用私有环境的服务
:::

## 如何跨环境调用 http 服务

::: tip Tips 
1.进入当前环境的项目列表<br> 2.点击 HOST 按钮<br> 3.点击添加按钮<br> 4.输入需要跨环境调用的域名以及 IP(通常为对应环境 Nginx 的容器 IP)<br> 5.重启当前项目<br>
:::

## 如何跨环境调用 dubbo 服务

<a data-fancybox title="" href="/assets/crossEnvDubbo.png">![](/assets/crossEnvDubbo.png)</a>

::: tip Tips 
1.点击服务治理菜单<br> 2.根据应用名或者服务名找到需要跨环境调用的接口<br> 3.点击修改按钮<br> 4.选择需要跨环境调用的环境名称<br> 5.重启消费者项目
:::

## 如何跨环境消费 MQ 消息

<a data-fancybox title="" href="/assets/crossEnvMQ1.png">![](/assets/crossEnvMQ1.png)</a>

::: tip Tips 
1.进入当前环境项目列表<br> 2.点击项目的修改按钮<br> 3.点击高级配置页签<br> 4.选择需要跨环境消费的环境<br> 5.重启当前项目
:::

## 如何查看当前环境 IP

<a data-fancybox title="" href="/assets/envip.png">![](/assets/envip.png)</a>

::: tip Tips
每个环境都有独立的 IP，都是 192.168.0.\*<br>
除 192.168.0.38 以外，其他都是私有环境 IP<br>
:::

## 如何查看各个环境 HOST

<a data-fancybox title="" href="/assets/envhost.png">![](/assets/envhost.png)</a>

::: tip Tips
蜂巢支持在线 host，(内容需要自己维护，除 192.168.0.38 以外，都是私有环境 IP)<br>
私有环境 host: http://ghost.dev.aixuexi.com/environment/host/${环境名称}<br>
公共环境 host: [http://ghost.dev.aixuexi.com/environment/host/public-env-dev](http://ghost.dev.aixuexi.com/environment/host/public-env-dev)
:::

## 如何进行环境权限分配

**1.点击环境对应的修改按钮**
<a data-fancybox title="" href="/assets/envPermission1.png">![](/assets/envPermission1.png)</a>
**2.修改环境的管理权限和查看权限**
<a data-fancybox title="" href="/assets/envPermission2.png">![](/assets/envPermission2.png)</a>

## 如何创建新的私有环境

::: tip Tips
目前仅由管理员创建环境，部门负责人可以找蜂巢运营人员申请管理员权限。 环境创建可以在现有环境上复制一样的环境，也可以根据需求创建环境
:::
