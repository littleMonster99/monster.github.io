import{_ as l,W as n,X as i,Y as e,Z as s}from"./framework-f64bc974.js";const a={},t=e("h1",{id:"微服务-软件架构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#微服务-软件架构","aria-hidden":"true"},"#"),s(" 微服务 - 软件架构")],-1),o=e("figure",null,[e("img",{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221124221146555.png",alt:"image-20221124221146555",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image-20221124221146555")],-1),c=e("ul",null,[e("li",null,"前端通过api 请求 到服务端经过F5硬件负载均衡和nginx 软件负载均衡、走到我们服务网关集群"),e("li",null,"网关针对请求做路由转发到各个的服务集群、各服务之间通过dubbo进行通信"),e("li",null,"其中各服务通过nacos 做服务注册中心与配置中心、sentinel 做流控降级"),e("li",null,"底层采用redis、mysql、minio、es 、rabbitmq 做数据支持"),e("li",null,"通过skywalking 和 springboot admin、elk 做系统监控")],-1),r=[t,o,c];function d(_,u){return n(),i("div",null,r)}const h=l(a,[["render",d],["__file","ms-x-arch.html.vue"]]);export{h as default};
