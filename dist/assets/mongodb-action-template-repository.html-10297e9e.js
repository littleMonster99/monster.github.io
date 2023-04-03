const e=JSON.parse('{"key":"v-369ad53a","path":"/db/mongodb/mongodb-action-template-repository.html","title":"MongoTemplate和MongoRepository总结","lang":"zh-CN","frontmatter":{"description":"1. 简介 Spring Data 操作 MongoDB 做 CRUD 的时候一般会使用两种方式MongoTemplate和MongoRepositor。本文就这两种方式做个简单的对比介绍，并对我们在业务中经常使用到的查询做一些举例。 2. 数据准备 其中使用到的 User 类如下 User.java 如下 3. 使用 MongoTemplate 形式...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/db/mongodb/mongodb-action-template-repository.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"MongoTemplate和MongoRepository总结"}],["meta",{"property":"og:description","content":"1. 简介 Spring Data 操作 MongoDB 做 CRUD 的时候一般会使用两种方式MongoTemplate和MongoRepositor。本文就这两种方式做个简单的对比介绍，并对我们在业务中经常使用到的查询做一些举例。 2. 数据准备 其中使用到的 User 类如下 User.java 如下 3. 使用 MongoTemplate 形式..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 数据准备","slug":"_2-数据准备","link":"#_2-数据准备","children":[]},{"level":2,"title":"3. 使用 MongoTemplate 形式","slug":"_3-使用-mongotemplate-形式","link":"#_3-使用-mongotemplate-形式","children":[{"level":3,"title":"3.1 insert","slug":"_3-1-insert","link":"#_3-1-insert","children":[]},{"level":3,"title":"3.2 save","slug":"_3-2-save","link":"#_3-2-save","children":[]},{"level":3,"title":"3.3 save - update","slug":"_3-3-save-update","link":"#_3-3-save-update","children":[]},{"level":3,"title":"3.4 updateFirst","slug":"_3-4-updatefirst","link":"#_3-4-updatefirst","children":[]},{"level":3,"title":"3.5 updateMulti","slug":"_3-5-updatemulti","link":"#_3-5-updatemulti","children":[]},{"level":3,"title":"3.6 findAndModify","slug":"_3-6-findandmodify","link":"#_3-6-findandmodify","children":[]},{"level":3,"title":"3.7 upsert","slug":"_3-7-upsert","link":"#_3-7-upsert","children":[]},{"level":3,"title":"3.8 remove","slug":"_3-8-remove","link":"#_3-8-remove","children":[]}]},{"level":2,"title":"4. 使用 MongoRepository  形式。","slug":"_4-使用-mongorepository-形式。","link":"#_4-使用-mongorepository-形式。","children":[{"level":3,"title":"4.1 插入和更新","slug":"_4-1-插入和更新","link":"#_4-1-插入和更新","children":[]},{"level":3,"title":"4.2 查找","slug":"_4-2-查找","link":"#_4-2-查找","children":[]},{"level":3,"title":"4.3 删除","slug":"_4-3-删除","link":"#_4-3-删除","children":[]}]},{"level":2,"title":"5. 两种方式的对比","slug":"_5-两种方式的对比","link":"#_5-两种方式的对比","children":[]},{"level":2,"title":"6. 常见业务问题做法","slug":"_6-常见业务问题做法","link":"#_6-常见业务问题做法","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":4.5,"words":1351},"filePathRelative":"db/mongodb/mongodb-action-template-repository.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
