(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{179:function(t,s,e){"use strict";e.r(s);var i=e(0),a=Object(i.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("私有环境")]),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("公共环境")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("p",[t._v("私有环境")]),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("公共环境")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("私有环境")]),t._v(" "),t._m(9),t._v(" "),e("p",[t._v("公共环境")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),e("p",[t._v("私有环境")]),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("公共环境")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),e("p",[t._v("公共环境")]),t._v(" "),e("p",[e("font",{attrs:{color:"red"}},[t._v("公用环境禁止使用及改分支配置等")])],1),t._v(" "),e("p",[t._v("私有环境")]),t._v(" "),e("p",[t._v("1、配置 hosts,192.168.0.38 xxljob.aixuexi.com")]),t._v(" "),e("p",[t._v("2、复制公用环境的 TheItalianJob 到私有环境，类型为 theitalianjob")]),t._v(" "),t._m(26),t._v(" "),e("p",[t._v("3、登录项目看项目端口："),e("font",{attrs:{color:"red"}},[t._v("注意：一定是 9998 对应的端口")])],1),t._v(" "),t._m(27),t._v(" "),e("p",[t._v("4、登录 xxljob.aixuexi.com，用户名密码：admin/123456")]),t._v(" "),e("p",[t._v("5、创建执行器，ip 为：10.255.0.213，端口填写 step3 的")]),t._v(" "),t._m(28),t._v(" "),e("p",[t._v("6、创建私有环境定时任务")]),t._v(" "),t._m(29)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"中间件问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中间件问题"}},[this._v("#")]),this._v(" 中间件问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("公共环境和私有环境默认使用公共数据环境(public-env-dev)， mysql(阿里云rds)，mongo(阿里云MongoDB)，redis(容器)，es(容器)")]),this._v(" "),s("li",[this._v("公共环境和私有环境使用独立 zookeeper 和 nginx 中间件，私有环境可独立部署任何数据中间件mysql，redis，mongo，es，部署完中间件后，重启当前环境内项目即可自动使用当前环境的数据库中间件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"当前环境-mysql-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当前环境-mysql-配置"}},[this._v("#")]),this._v(" 当前环境 mysql 配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Tips")]),this._v(" "),s("p",[this._v("若环境内存在 mysql，则访问方式为环境内 mysql 容器 IP:3306 "),s("br"),this._v("\n若环境内不存在 mysql，默认使用公共环境的配置")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Tips")]),this._v(" "),s("p",[this._v("项目: mysql.aixuexi.com:3306 test/test123 "),s("br"),this._v("\n本地: rm-2zeyoxjy4n606sm1l4o.mysql.rds.aliyuncs.com:3306 test/test123")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"当前环境-redis-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当前环境-redis-配置"}},[this._v("#")]),this._v(" 当前环境 redis 配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Tips")]),this._v(" "),s("p",[this._v("若环境内存在 redis，则访问方式为环境内 redis 容器 IP:6379 暂无密码 "),s("br"),this._v("\n若环境内不存在 redis，默认使用公共环境的配置")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Tips")]),this._v(" "),s("p",[this._v("项目: redis.aixuexi.com:6379 暂无密码 "),s("br"),this._v("\n本地: "),s("code",[this._v("public-env-dev")]),this._v(" 环境内的 redis 容器 IP:6379")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"当前环境-mongo-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当前环境-mongo-配置"}},[this._v("#")]),this._v(" 当前环境 mongo 配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Tips")]),this._v(" "),s("p",[this._v("若环境内存在 mongo，则访问方式为环境内 mongo 容器 IP:27017 暂无密码"),s("br"),this._v("\n若环境内不存在 mongo，默认使用公共环境的配置")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Tips")]),this._v(" "),s("p",[this._v("项目: mongo.aixuexi.com:3717 root/jzkM93XYMw "),s("br"),this._v("\n本地: dds-2zee9477317995941609-pub.mongodb.rds.aliyuncs.com:3717 root/jzkM93XYMw")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"当前环境-es-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当前环境-es-配置"}},[this._v("#")]),this._v(" 当前环境 es 配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Tips")]),this._v(" "),s("p",[this._v("若环境内存在 es，则访问方式为环境内 es 容器 IP:9200/9300 "),s("br"),this._v("\n若环境内不存在 es，默认使用公共环境的配置")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Tips")]),this._v(" "),s("p",[this._v("项目: elasticsearch.aixuexi.com:9200/9300 暂无密码"),s("br"),this._v("\n本地: "),s("code",[this._v("public-env-dev")]),this._v(" 环境内的 es 容器 IP:9200/9300 暂无密码")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"当前环境-mq-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当前环境-mq-配置"}},[this._v("#")]),this._v(" 当前环境 mq 配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Tips")]),this._v(" "),s("p",[this._v("蜂巢不提供MQ中间件，统一使用阿里云的ONS产品"),s("br"),this._v("\nhttps://ons.console.aliyun.com/region/mq-internet-access/instances")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"当前项目-apollo-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#当前项目-apollo-配置"}},[this._v("#")]),this._v(" 当前项目 apollo 配置")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"/assets/apollo1.png"}},[s("img",{attrs:{src:"/assets/apollo1.png",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Tips")]),this._v(" "),s("p",[this._v("所有环境的项目，默认使用 DEV 环境的 Apollo 配置，如需指定其他环境，见上图 "),s("br"),this._v("\n1.项目列表点击修改按钮"),s("br"),this._v("\n2.点击高级配置页签，选择环境，输入集群名称"),s("br"),this._v("\n3.保存后重启项目")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"如何查看修改-redis-数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何查看修改-redis-数据"}},[this._v("#")]),this._v(" 如何查看修改 redis 数据")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"/assets/redis1.png"}},[s("img",{attrs:{src:"/assets/redis1.png",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Tips")]),this._v(" "),s("p",[this._v("如果使用 redis-admin 查看数据，需要登录，用户名密码：admin/Gaosi2012")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"如何查看-zookeeper-里面的接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何查看-zookeeper-里面的接口"}},[this._v("#")]),this._v(" 如何查看 zookeeper 里面的接口")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"/assets/zookeeper1.png"}},[s("img",{attrs:{src:"/assets/zookeeper1.png",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Tips")]),this._v(" "),s("p",[this._v("快速查看私有环境和公共环境的 dubbo 服务提供者和消费者接口信息，简化版的 dubbo-admin")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"如何使用定时任务-xxl-job"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何使用定时任务-xxl-job"}},[this._v("#")]),this._v(" 如何使用定时任务 xxl-job")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"/assets/xxlJob1.png"}},[s("img",{attrs:{src:"/assets/xxlJob1.png",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"/assets/xxlJob2.png"}},[s("img",{attrs:{src:"/assets/xxlJob2.png",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"/assets/xxlJob3.png"}},[s("img",{attrs:{src:"/assets/xxlJob3.png",alt:""}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("a",{attrs:{"data-fancybox":"",title:"",href:"/assets/xxlJob4.png"}},[s("img",{attrs:{src:"/assets/xxlJob4.png",alt:""}})])])}],!1,null,null,null);s.default=a.exports}}]);