# 项目问题

## 项目配置

<a data-fancybox title="" href="/assets/jobAdd.png">![](/assets/jobAdd.png)</a>

::: tip Tips
如果不能使用复制功能（新项目首次在蜂巢添加），则使用添加功能。
详见上面截图
:::
<br>

## 项目高级配置

<a data-fancybox title="" href="/assets/jobAdd1.png">![](/assets/jobAdd1.png)</a>

::: tip Tips
如果不能使用复制功能（新项目首次在蜂巢添加），则使用添加功能。
详见上面截图
:::
<br>

## 项目复制

<a data-fancybox title="" href="/assets/jobCopy.png">![](/assets/jobCopy.png)</a>

::: tip Tips
添加项目优先使用复制功能，避免输入配置信息有误导致项目启动失败
:::
<br>

## 项目编译失败

<a data-fancybox title="" href="/assets/buildLog.png">![](/assets/buildLog.png)</a>

::: tip Tips
查看编译日志解决问题，查看error开头的错误信息，如果是代码问题，可联系对应开发负责人解决，如果是蜂巢问题，可通过工单系统解决
:::
<br>

## 项目容器运行失败

::: tip Tips
查看项目日志解决问题，点击项目列表的日志按钮
:::

## 如何确定项目类型

| 类型     | 描述                                                                                      |
| -------- | ----------------------------------------------------------------------------------------- |
| java_tar | Dubbo 服务提供者，打成 tar.gz 包，以自定义启动脚本 start.sh 启动                          |
| boot_tar | Spring Boot 项目打成 tar.gz 包，需设置项目启动端口为 8080，以自定义启动脚本 start.sh 启动 |
| tomcat   | Dubbo 服务消费者，打成 war 包，使用 tomcat 部署                                           |
| static   | 前端静态项目，默认服务器不编译，前端项目如需服务器编译请在 Shell 框中输入 npm_build=true  |

## 如何查看项目源代码

<a data-fancybox title="" href="/assets/sourceCode.png">![](/assets/sourceCode.png)</a>

::: tip Tips 
1.项目列表点击项目名称<br> 2.点击要查看的文件<br>

超过 1 兆的文件不能在此查看，可登录蜂巢服务器查看，源代码路径见上图<br>
登录服务器方式可在当前页面右上角搜索`如何登陆蜂巢服务器`
:::

## 如何配置项目HOST

<a data-fancybox title="" href="/assets/projectHost1.png">![](/assets/projectHost1.png)</a>
<a data-fancybox title="" href="/assets/projectHost2.png">![](/assets/projectHost2.png)</a>
<a data-fancybox title="" href="/assets/projectHost3.png">![](/assets/projectHost3.png)</a>

::: tip Tips 
1.host在容器内/etc/hosts<br> 
2.可以在容器内ping此域名，看是否是所配置的IP，以及网络是否连通<br>
:::

## 项目是否支持自定义脚本

::: tip Tips
暂不支持
:::

## 项目如何定时自动部署

<a data-fancybox title="" href="/assets/autoBuild.png">![](/assets/autoBuild.png)</a>

::: tip Tips 
1.项目列表点击修改按钮<br> 2.点击自动部署页签，输入 cron 表达式<br> 3.保存
:::

## 项目如何配置健康检查

<a data-fancybox title="" href="/assets/healthCheck.png">![](/assets/healthCheck.png)</a>

::: tip Tips 
1.项目列表点击修改按钮<br> 2.点击健康检查页签，输入配置信息<br> 3.保存
:::

## 项目编译完如何自动触发 testcase

<a data-fancybox title="" href="/assets/testcase.png">![](/assets/testcase.png)</a>

::: tip Tips 
1.项目列表点击修改按钮<br> 2.基本信息页签，关联项目<br> 3.保存
:::

## 前端项目如何使用服务器编译

<a data-fancybox title="" href="/assets/npmBuild.png">![](/assets/npmBuild.png)</a>

::: tip Tips 
1.项目列表点击修改按钮<br> 2.项目类型选择 static<br> 3.蜂巢编译单选框选择`是`<br> 4.保存后，点击启动
:::

## 项目构建后访问不是最新代码

::: tip Tips 
1.清空浏览器缓存，或者使用无痕模式<br> 2.检查蜂巢服务器上代码是否为最新，[如何查看源代码](#如何查看项目源代码)<br> 3.前端项目检查打包后的 js 和 css 是否为最新，[如何查看源代码](#如何查看项目源代码)<br> 4.检查 nginx 配置是否为当前环境<br> 5.检查本地 host 是否是当前环境
:::
