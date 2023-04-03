const e=JSON.parse('{"key":"v-2d4461ca","path":"/arch/distributed/arch-z-transection02.html","title":"分布式系统-分布式事务(补充)","lang":"zh-CN","frontmatter":{"order":41,"category":["架构"],"description":"1. 分布式事务 分布式事务顾名思义就是要在分布式系统中实现事务，它其实是由多个本地事务组合而成。 对于分布式事务而言几乎满足不了 ACID，其实对于单机事务而言大部分情况下也没有满足 ACID，不然怎么会有四种隔离级别呢？所以更别说分布在不同数据库或者不同应用上的分布式事务了。 我们先来看下 2PC。 2. 2PC 2.1 简介 2PC（Two-ph...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/arch/distributed/arch-z-transection02.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"分布式系统-分布式事务(补充)"}],["meta",{"property":"og:description","content":"1. 分布式事务 分布式事务顾名思义就是要在分布式系统中实现事务，它其实是由多个本地事务组合而成。 对于分布式事务而言几乎满足不了 ACID，其实对于单机事务而言大部分情况下也没有满足 ACID，不然怎么会有四种隔离级别呢？所以更别说分布在不同数据库或者不同应用上的分布式事务了。 我们先来看下 2PC。 2. 2PC 2.1 简介 2PC（Two-ph..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 分布式事务","slug":"_1-分布式事务","link":"#_1-分布式事务","children":[]},{"level":2,"title":"2. 2PC","slug":"_2-2pc","link":"#_2-2pc","children":[{"level":3,"title":"2.1 简介","slug":"_2-1-简介","link":"#_2-1-简介","children":[]},{"level":3,"title":"2.2 流程图","slug":"_2-2-流程图","link":"#_2-2-流程图","children":[]},{"level":3,"title":"2.3 第二阶段提交失败处理？","slug":"_2-3-第二阶段提交失败处理","link":"#_2-3-第二阶段提交失败处理","children":[]},{"level":3,"title":"2.4 协调者故障分析","slug":"_2-4-协调者故障分析","link":"#_2-4-协调者故障分析","children":[]},{"level":3,"title":"2.5 协调者故障，通过选举得到新协调者","slug":"_2-5-协调者故障-通过选举得到新协调者","link":"#_2-5-协调者故障-通过选举得到新协调者","children":[]},{"level":3,"title":"2.6 伪代码","slug":"_2-6-伪代码","link":"#_2-6-伪代码","children":[]},{"level":3,"title":"2.7 总结","slug":"_2-7-总结","link":"#_2-7-总结","children":[]}]},{"level":2,"title":"3. 3PC","slug":"_3-3pc","link":"#_3-3pc","children":[{"level":3,"title":"3.1 简介","slug":"_3-1-简介","link":"#_3-1-简介","children":[]},{"level":3,"title":"3.2 流程图","slug":"_3-2-流程图","link":"#_3-2-流程图","children":[]},{"level":3,"title":"3.3 3PC 阶段变更有什么影响?","slug":"_3-3-3pc-阶段变更有什么影响","link":"#_3-3-3pc-阶段变更有什么影响","children":[]},{"level":3,"title":"3.4 3PC 超时能带来什么样的影响?","slug":"_3-4-3pc-超时能带来什么样的影响","link":"#_3-4-3pc-超时能带来什么样的影响","children":[]},{"level":3,"title":"3.5 3PC 的引入是为了解决什么问题？","slug":"_3-5-3pc-的引入是为了解决什么问题","link":"#_3-5-3pc-的引入是为了解决什么问题","children":[]},{"level":3,"title":"3.5 总结","slug":"_3-5-总结","link":"#_3-5-总结","children":[]}]},{"level":2,"title":"4. TCC","slug":"_4-tcc","link":"#_4-tcc","children":[{"level":3,"title":"4.1 简介","slug":"_4-1-简介","link":"#_4-1-简介","children":[]},{"level":3,"title":"4.2 流程图","slug":"_4-2-流程图","link":"#_4-2-流程图","children":[]},{"level":3,"title":"4.3 总结","slug":"_4-3-总结","link":"#_4-3-总结","children":[]}]},{"level":2,"title":"5. 本地消息表","slug":"_5-本地消息表","link":"#_5-本地消息表","children":[]},{"level":2,"title":"6. 消息事务","slug":"_6-消息事务","link":"#_6-消息事务","children":[]},{"level":2,"title":"7. 最大努力通知","slug":"_7-最大努力通知","link":"#_7-最大努力通知","children":[]},{"level":2,"title":"8. Saga事务","slug":"_8-saga事务","link":"#_8-saga事务","children":[]},{"level":2,"title":"9. 总结","slug":"_9-总结","link":"#_9-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":18.97,"words":5690},"filePathRelative":"arch/distributed/arch-z-transection02.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};