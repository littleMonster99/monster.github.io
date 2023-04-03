const e=JSON.parse('{"key":"v-3c1211ca","path":"/deploy/mq-rabbitmq/rabbitmq-z-cluster.html","title":"RabbitMQ集群 - 集群搭建","lang":"zh-CN","frontmatter":{"order":500,"category":["RabbitMQ","MQ"],"description":"1. 简介 单机问题就是不能高可用，吞吐量有瓶颈、存储有瓶颈。搭建集群才能解决这些 但是 RabbitMQ 集群不能保证消息的万无一失，当集群中一个 RabbitMQ 节点崩溃时，该节点上的所有队列中的消息也会丢失。RabbitMQ 集群中的所有节点都会备份所有的元数据信息，包括以下内容： 队列元数据：队列名称和属性; 交换器元数据：交换器名称和属性;...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/deploy/mq-rabbitmq/rabbitmq-z-cluster.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"RabbitMQ集群 - 集群搭建"}],["meta",{"property":"og:description","content":"1. 简介 单机问题就是不能高可用，吞吐量有瓶颈、存储有瓶颈。搭建集群才能解决这些 但是 RabbitMQ 集群不能保证消息的万无一失，当集群中一个 RabbitMQ 节点崩溃时，该节点上的所有队列中的消息也会丢失。RabbitMQ 集群中的所有节点都会备份所有的元数据信息，包括以下内容： 队列元数据：队列名称和属性; 交换器元数据：交换器名称和属性;..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 多机多节点配置","slug":"_2-多机多节点配置","link":"#_2-多机多节点配置","children":[{"level":3,"title":"2.1 部署节规划：","slug":"_2-1-部署节规划","link":"#_2-1-部署节规划","children":[]},{"level":3,"title":"2.2 配置集群","slug":"_2-2-配置集群","link":"#_2-2-配置集群","children":[]},{"level":3,"title":"2.3 闭集群","slug":"_2-3-闭集群","link":"#_2-3-闭集群","children":[]}]},{"level":2,"title":"3. 集群节点类型","slug":"_3-集群节点类型","link":"#_3-集群节点类型","children":[{"level":3,"title":"3.1 如何选择磁盘节点类型？","slug":"_3-1-如何选择磁盘节点类型","link":"#_3-1-如何选择磁盘节点类型","children":[]}]},{"level":2,"title":"4. 剔除单个节点","slug":"_4-剔除单个节点","link":"#_4-剔除单个节点","children":[{"level":3,"title":"4.1 适合不再运行 RabbitMQ 应用","slug":"_4-1-适合不再运行-rabbitmq-应用","link":"#_4-1-适合不再运行-rabbitmq-应用","children":[]},{"level":3,"title":"4.2 第二种方式","slug":"_4-2-第二种方式","link":"#_4-2-第二种方式","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":7.76,"words":2329},"filePathRelative":"deploy/mq-rabbitmq/rabbitmq-z-cluster.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
