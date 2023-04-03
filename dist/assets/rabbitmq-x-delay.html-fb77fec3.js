import{_ as t,W as r,X as n,Y as e,Z as i,$ as o,a0 as s,D as c}from"./framework-f64bc974.js";const l={},d=s('<h1 id="rabbitmq进阶-延迟队列" tabindex="-1"><a class="header-anchor" href="#rabbitmq进阶-延迟队列" aria-hidden="true">#</a> RabbitMQ进阶 - 延迟队列</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>在 AMQP 协议或 RabbitMQ 中，本身没有直接支持延迟队列的功能。可以 **通过 DLX 和 TTL **模拟出延迟队列的功能。</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220923203315852.png" alt="image-20220923203315852" tabindex="0" loading="lazy"><figcaption>image-20220923203315852</figcaption></figure><p>上图是死信队列的用法，也是延迟队列的用法。唯一不同的是，消费者订阅的是 <strong>死信队列</strong>，没有消费者订阅普通队列的话，当消息过期时间到了，就会被路由到死信队列，这就达成了，消息被延迟消费的目的。</p><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>',6),h={href:"https://zq99299.github.io/mq-tutorial/rabbitmq-ac/04/04.html",target:"_blank",rel:"noopener noreferrer"};function b(_,m){const a=c("ExternalLinkIcon");return r(),n("div",null,[d,e("p",null,[e("a",h,[i("延迟队列"),o(a)])])])}const p=t(l,[["render",b],["__file","rabbitmq-x-delay.html.vue"]]);export{p as default};
