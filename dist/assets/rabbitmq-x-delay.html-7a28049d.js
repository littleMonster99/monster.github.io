const t=JSON.parse('{"key":"v-2ff51be3","path":"/deploy/mq-rabbitmq/rabbitmq-x-delay.html","title":"RabbitMQ进阶 - 延迟队列","lang":"zh-CN","frontmatter":{"order":60,"category":["RabbitMQ","MQ"],"description":"1. 简介 在 AMQP 协议或 RabbitMQ 中，本身没有直接支持延迟队列的功能。可以 通过 DLX 和 TTL 模拟出延迟队列的功能。 image-20220923203315852 上图是死信队列的用法，也是延迟队列的用法。唯一不同的是，消费者订阅的是 死信队列，没有消费者订阅普通队列的话，当消息过期时间到了，就会被路由到死信队列，这就达成了...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/deploy/mq-rabbitmq/rabbitmq-x-delay.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"RabbitMQ进阶 - 延迟队列"}],["meta",{"property":"og:description","content":"1. 简介 在 AMQP 协议或 RabbitMQ 中，本身没有直接支持延迟队列的功能。可以 通过 DLX 和 TTL 模拟出延迟队列的功能。 image-20220923203315852 上图是死信队列的用法，也是延迟队列的用法。唯一不同的是，消费者订阅的是 死信队列，没有消费者订阅普通队列的话，当消息过期时间到了，就会被路由到死信队列，这就达成了..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":0.54,"words":162},"filePathRelative":"deploy/mq-rabbitmq/rabbitmq-x-delay.md","localizedDate":"2023年3月30日","autoDesc":true}');export{t as data};