# 公共环境

由多个公共子环境组成的全量环境，包含所有业务线，运行中，用于给私有环境提供公共服务，以减少其搭建维护成本，节约资源。

<a data-fancybox title="" href="/assets/public.png">![](/assets/public.png)</a>

::: tip Tips
【强制】公共环境个项目要求代码分支为 Master 或 release

【强制】项目新版本通过 iflow 全量上线发布后，且关闭此次迭代，且在两个工作日内合并代码到 Master，蜂巢会自动更新此公共环境的项目：

【强制】公共子环境的维护者为该环境的可用性和升级负责。出现问题时，应及时响应和解决。

【强制】质量部应定期（不低于每月 1 次）安排对公共环境进行回归测试，以保证上述环境的可用性。
