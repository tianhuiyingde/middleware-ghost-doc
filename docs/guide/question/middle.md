# 中间件问题

*   公共环境和私有环境默认使用公共数据环境(public-env-dev)， mysql(阿里云rds)，mongo(阿里云MongoDB)，redis(容器)，es(容器)
*   公共环境和私有环境使用独立 zookeeper 和 nginx 中间件，私有环境可独立部署任何数据中间件mysql，redis，mongo，es，部署完中间件后，重启当前环境内项目即可自动使用当前环境的数据库中间件

## 当前环境 mysql 配置

私有环境
::: tip Tips
若环境内存在 mysql，则访问方式为环境内 mysql 容器 IP:3306 <br> 
若环境内不存在 mysql，默认使用公共环境的配置
:::

公共环境

::: tip Tips
项目: mysql.aixuexi.com:3306 test/test123 <br> 
本地: rm-2zeyoxjy4n606sm1l4o.mysql.rds.aliyuncs.com:3306 test/test123
:::

## 当前环境 redis 配置

私有环境
::: tip Tips
若环境内存在 redis，则访问方式为环境内 redis 容器 IP:6379 暂无密码 <br> 
若环境内不存在 redis，默认使用公共环境的配置
:::

公共环境

::: tip Tips
项目: redis.aixuexi.com:6379 暂无密码 <br> 
本地: `public-env-dev` 环境内的 redis 容器 IP:6379
:::

## 当前环境 mongo 配置

私有环境
::: tip Tips
若环境内存在 mongo，则访问方式为环境内 mongo 容器 IP:27017 暂无密码<br> 
若环境内不存在 mongo，默认使用公共环境的配置
:::

公共环境

::: tip Tips
项目: mongo.aixuexi.com:3717 root/jzkM93XYMw <br> 
本地: dds-2zee9477317995941609-pub.mongodb.rds.aliyuncs.com:3717 root/jzkM93XYMw
:::

## 当前环境 es 配置

私有环境
::: tip Tips
若环境内存在 es，则访问方式为环境内 es 容器 IP:9200/9300 <br> 
若环境内不存在 es，默认使用公共环境的配置
:::

公共环境

::: tip Tips
项目: elasticsearch.aixuexi.com:9200/9300 暂无密码<br> 
本地: `public-env-dev` 环境内的 es 容器 IP:9200/9300 暂无密码
:::

## 当前环境 mq 配置


::: tip Tips
蜂巢不提供MQ中间件，统一使用阿里云的ONS产品<br>
https://ons.console.aliyun.com/region/mq-internet-access/instances
:::

## 当前项目 apollo 配置

<a data-fancybox title="" href="/assets/apollo1.png">![](/assets/apollo1.png)</a>

::: tip Tips
所有环境的项目，默认使用 DEV 环境的 Apollo 配置，如需指定其他环境，见上图 <br> 
1.项目列表点击修改按钮<br> 
2.点击高级配置页签，选择环境，输入集群名称<br> 
3.保存后重启项目
:::

## 如何查看修改 redis 数据

<a data-fancybox title="" href="/assets/redis1.png">![](/assets/redis1.png)</a>

::: tip Tips
如果使用 redis-admin 查看数据，需要登录，用户名密码：admin/Gaosi2012
:::

## 如何查看 zookeeper 里面的接口

<a data-fancybox title="" href="/assets/zookeeper1.png">![](/assets/zookeeper1.png)</a>

::: tip Tips
快速查看私有环境和公共环境的 dubbo 服务提供者和消费者接口信息，简化版的 dubbo-admin
:::

## 如何使用定时任务 xxl-job

公共环境

<font color=red>公用环境禁止使用及改分支配置等</font>

私有环境

1、配置 hosts,192.168.0.38 xxljob.aixuexi.com

2、复制公用环境的 TheItalianJob 到私有环境，类型为 theitalianjob

<a data-fancybox title="" href="/assets/xxlJob1.png">![](/assets/xxlJob1.png)</a>

3、登录项目看项目端口：<font color=red>注意：一定是 9998 对应的端口</font>

<a data-fancybox title="" href="/assets/xxlJob2.png">![](/assets/xxlJob2.png)</a>

4、登录 xxljob.aixuexi.com，用户名密码：admin/123456

5、创建执行器，ip 为：10.255.0.213，端口填写 step3 的

<a data-fancybox title="" href="/assets/xxlJob3.png">![](/assets/xxlJob3.png)</a>

6、创建私有环境定时任务

<a data-fancybox title="" href="/assets/xxlJob4.png">![](/assets/xxlJob4.png)</a>
