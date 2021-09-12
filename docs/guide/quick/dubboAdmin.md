# 服务治理

和 dubbo-admin 类似的一个服务治理工具，可查看服务信息，可修改消费者调用的提供者来源的环境

<a data-fancybox title="" href="/assets/dubbo1.png">![](/assets/dubbo1.png)</a>
<a data-fancybox title="" href="/assets/dubbo2.png">![](/assets/dubbo2.png)</a>

::: tip Tips
消费者调用提供者关系

1.如果接口在此配置了提供者来源的环境，无论所配置的环境有无提供者，都只会使用配置的环境的提供者。

2.消费者默认使用当前环境的提供者，如果当前环境没有对应的提供者，会自动使用公共环境的提供者，公共环境也没有，则会报错。

<br>
