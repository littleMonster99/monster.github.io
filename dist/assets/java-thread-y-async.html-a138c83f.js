const e=JSON.parse('{"key":"v-1cbdc75a","path":"/java/thread/java-thread-y-async.html","title":"Java 并发 - 异步编程的 7 种实现方式","lang":"zh-CN","frontmatter":{"order":70,"category":["Java","并发"],"description":"0. 前言 image-20221219160859182 当用户创建一笔电商交易订单时，要经历的业务逻辑流程还是很长的，每一步都要耗费一定的时间，那么整体的RT就会比较长。 于是，聪明的人们开始思考能不能将一些非核心业务从主流程中剥离出来，于是有了异步编程雏形。 异步编程是让程序并发运行的一种手段。它允许多个事件同时发生，当程序调用需要长时间运行的方...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/java/thread/java-thread-y-async.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Java 并发 - 异步编程的 7 种实现方式"}],["meta",{"property":"og:description","content":"0. 前言 image-20221219160859182 当用户创建一笔电商交易订单时，要经历的业务逻辑流程还是很长的，每一步都要耗费一定的时间，那么整体的RT就会比较长。 于是，聪明的人们开始思考能不能将一些非核心业务从主流程中剥离出来，于是有了异步编程雏形。 异步编程是让程序并发运行的一种手段。它允许多个事件同时发生，当程序调用需要长时间运行的方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"0. 前言","slug":"_0-前言","link":"#_0-前言","children":[]},{"level":2,"title":"1. 线程 Thread","slug":"_1-线程-thread","link":"#_1-线程-thread","children":[]},{"level":2,"title":"2. Future","slug":"_2-future","link":"#_2-future","children":[]},{"level":2,"title":"3. FutureTask","slug":"_3-futuretask","link":"#_3-futuretask","children":[]},{"level":2,"title":"4. 异步框架 CompletableFuture","slug":"_4-异步框架-completablefuture","link":"#_4-异步框架-completablefuture","children":[]},{"level":2,"title":"5. SpringBoot 注解 @Async","slug":"_5-springboot-注解-async","link":"#_5-springboot-注解-async","children":[]},{"level":2,"title":"6.Spring ApplicationEvent 事件","slug":"_6-spring-applicationevent-事件","link":"#_6-spring-applicationevent-事件","children":[]},{"level":2,"title":"7. 消息队列","slug":"_7-消息队列","link":"#_7-消息队列","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":10.21,"words":3064},"filePathRelative":"java/thread/java-thread-y-async.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};