const e=JSON.parse('{"key":"v-2bbd10d6","path":"/deploy/mq-rabbitmq/rabbitmq-x-consumer.html","title":"RabbitMQ进阶 - 消费端要点介绍","lang":"zh-CN","frontmatter":{"order":110,"category":["RabbitMQ","MQ"],"description":"1. 简介 消费者客户端可以通过 推模式 和 拉模式 来获取并消费消息，RabbitMQ 把消息推送后（或客户端主动 ACK）后，RabbitMQ 把当前消息从队列中标记清除。如果由于某些原因无法处理当前接受到的信息，可以通过 channel.basicNack 或则 channel.basicReject 来拒绝掉。 对于消费者来说，还有几点需要注意...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/deploy/mq-rabbitmq/rabbitmq-x-consumer.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"RabbitMQ进阶 - 消费端要点介绍"}],["meta",{"property":"og:description","content":"1. 简介 消费者客户端可以通过 推模式 和 拉模式 来获取并消费消息，RabbitMQ 把消息推送后（或客户端主动 ACK）后，RabbitMQ 把当前消息从队列中标记清除。如果由于某些原因无法处理当前接受到的信息，可以通过 channel.basicNack 或则 channel.basicReject 来拒绝掉。 对于消费者来说，还有几点需要注意..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 消息分发","slug":"_2-消息分发","link":"#_2-消息分发","children":[]},{"level":2,"title":"3. 消息顺序性","slug":"_3-消息顺序性","link":"#_3-消息顺序性","children":[]},{"level":2,"title":"4. 启用 QueuingConsumer","slug":"_4-启用-queuingconsumer","link":"#_4-启用-queuingconsumer","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":5.58,"words":1674},"filePathRelative":"deploy/mq-rabbitmq/rabbitmq-x-consumer.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
