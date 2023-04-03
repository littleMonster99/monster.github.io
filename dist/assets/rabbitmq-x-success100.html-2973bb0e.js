const e=JSON.parse('{"key":"v-e76cb004","path":"/deploy/mq-rabbitmq/rabbitmq-x-success100.html","title":"RabbitMQ消息如何保障100%投递成功","lang":"zh-CN","frontmatter":{"description":"1. 保证可靠性投递需具备的条件 1. 保障消息的成功发出 2. 保障MQ节点的成功接收 3. 发送端收到MQ节点（broker）确认应答 4. 完善的消息补偿机制 在实际生产中，很难保障前三点的完全可靠，比如在极端的环境中，生产者发送消息失败了，发送端在接受确认应答时突然发生网络闪断等等情况，很难保障可靠性投递，所以就需要有第四点完善的消息补偿机制。...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/deploy/mq-rabbitmq/rabbitmq-x-success100.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"RabbitMQ消息如何保障100%投递成功"}],["meta",{"property":"og:description","content":"1. 保证可靠性投递需具备的条件 1. 保障消息的成功发出 2. 保障MQ节点的成功接收 3. 发送端收到MQ节点（broker）确认应答 4. 完善的消息补偿机制 在实际生产中，很难保障前三点的完全可靠，比如在极端的环境中，生产者发送消息失败了，发送端在接受确认应答时突然发生网络闪断等等情况，很难保障可靠性投递，所以就需要有第四点完善的消息补偿机制。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 保证可靠性投递需具备的条件","slug":"_1-保证可靠性投递需具备的条件","link":"#_1-保证可靠性投递需具备的条件","children":[]},{"level":2,"title":"2. 互联网大厂的解决方案","slug":"_2-互联网大厂的解决方案","link":"#_2-互联网大厂的解决方案","children":[]},{"level":2,"title":"3. 方案一：消息落库，对消息状态进行打标","slug":"_3-方案一-消息落库-对消息状态进行打标","link":"#_3-方案一-消息落库-对消息状态进行打标","children":[]},{"level":2,"title":"4. 方案二：延迟投递，做二次确认，回调检查。","slug":"_4-方案二-延迟投递-做二次确认-回调检查。","link":"#_4-方案二-延迟投递-做二次确认-回调检查。","children":[{"level":3,"title":"4.1 方案一的问题：","slug":"_4-1-方案一的问题","link":"#_4-1-方案一的问题","children":[]},{"level":3,"title":"4.2 流程","slug":"_4-2-流程","link":"#_4-2-流程","children":[]}]},{"level":2,"title":"5. 结论","slug":"_5-结论","link":"#_5-结论","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":5.01,"words":1504},"filePathRelative":"deploy/mq-rabbitmq/rabbitmq-x-success100.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
