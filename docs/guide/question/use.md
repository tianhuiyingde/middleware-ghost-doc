# 使用问题

## 404 如何解决

::: tip Tips

1.查看本地 host 对应的 IP<br> 2.根据 IP 找到对应环境的 nginx 配置<br> 3.根据请求的域名找到对应的 nginx 配置文件<br> 4.根据请求路径找到对应的 location<br> 5.根据 location 找到 proxy_pass 对应的环境内的项目<br> 6.查看项目详情，检查对应的文件是否存在<br> 7.检查 Nginx 静态资源的配置是否正确
:::

## 502 如何解决

::: tip Tips
1.一般为项目报错，请检查对应的项目日志是否正常
2.检查Nginx配置，proxy_pass指向的环境内项目是否存在
:::

## 如何本地联调

<a data-fancybox title="" href="/assets/localDebug.png">![](/assets/localDebug.png)</a>

::: tip Tips
新蜂巢公司网络已经和蜂巢服务网络以及运行在服务器上的容器网络完全打通，所以不用连任何 VPN 即可以直接访问服务器的内网以及容器网络。
:::

## 如何查看容器 IP

<a data-fancybox title="" href="/assets/podIp.png">![](/assets/podIp.png)</a>

::: tip Tips
容器 IP 在项目重启会发生变化，但一定是 10.20 网段的 IP
:::

## 如何进入容器

<a data-fancybox title="" href="/assets/execPod.png">![](/assets/execPod.png)</a>

## 如何查看编译日志

<a data-fancybox title="" href="/assets/buildLog1.png">![](/assets/buildLog1.png)</a>

<a data-fancybox title="" href="/assets/buildLog2.png">![](/assets/buildLog2.png)</a>

## 如何登陆蜂巢服务器

::: tip Tips
登陆 vpc 堡垒机(没有权限则找运维申请)，搜 k8s 关键字，任一服务器都可以。如果搜索没有结果，可找运维申请权限
:::

## 没有日志文件如何解决

::: tip Tips 
1.检查日志文件配置，是否符合日志规范<br> 
2.检查容器状态，或者 telnet 项目的 IP 端口，确定项目是否最终启动成功
:::

## 有日志文件，没有打印日志

::: tip Tips
当项目为消费者项目时，确认查看的项目是否正确，往往由于没有修改 nginx 配置导致查看项目错误，盘查步骤如下：

1.查看本地 host 对应的 IP<br> 2.根据 IP 找到对应环境的 nginx 配置<br> 3.根据请求的域名找到对应的 nginx 配置文件<br> 4.根据请求路径找到对应的 location<br> 5.根据 location 找到 proxy_pass 对应的环境内的项目

当项目为提供者项目时，确定当前环境的服务提供者启动成功，且处于运行状态。如果启动失败，请查看当前提供者项目在公共环境的日志。
:::

## 外网如何访问蜂巢内某个项目

::: tip Tips
蜂巢系统是部署在内网的系统，外网访问蜂巢内的服务，是指未能和蜂巢打通网络的系统要访问部署在蜂巢的服务，如第三方系统：微信，阿里云，或者北校

1.使用`https://{环境名称}.ghost.aixuexi.com` 切记是<font color=red>https</font><br> 2.修改环境内 Nginx 配置，增加此域名的监听

以 app-private-test 为例：
https://app-private-test.ghost.aixuexi.com 可直接访问
http://c.aixuexi.com 需要配置 host 才能访问

<a data-fancybox title="" href="/assets/out.png">![](/assets/out.png)</a>
:::

## websocket 自动关闭如何解决

::: tip Tips 
1.检查本地是否开了代理<br> 
2.检查浏览器是否禁用了 websocket
:::
