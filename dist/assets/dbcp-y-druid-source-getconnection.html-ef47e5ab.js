const e=JSON.parse('{"key":"v-76d24542","path":"/dependencies/database-connection-pool/dbcp-y-druid-source-getconnection.html","title":"Druid源码学习（四）-DruidDataSource的getConnection过程","lang":"zh-CN","frontmatter":{"description":"1. 简介 1.1 DruidDataSource 实现 javax.sql.DataSource DruidDataSource连接池实现了javaX.sql包中，DataSource接口的全部方法。getConnection也来自于javax.sql.DataSource接口。 image-20220522090249593 image-20220...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/dependencies/database-connection-pool/dbcp-y-druid-source-getconnection.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Druid源码学习（四）-DruidDataSource的getConnection过程"}],["meta",{"property":"og:description","content":"1. 简介 1.1 DruidDataSource 实现 javax.sql.DataSource DruidDataSource连接池实现了javaX.sql包中，DataSource接口的全部方法。getConnection也来自于javax.sql.DataSource接口。 image-20220522090249593 image-20220..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 DruidDataSource 实现 javax.sql.DataSource","slug":"_1-1-druiddatasource-实现-javax-sql-datasource","link":"#_1-1-druiddatasource-实现-javax-sql-datasource","children":[]},{"level":3,"title":"1.2 DruidPooledConnection实现接口java.sql.Connection。","slug":"_1-2-druidpooledconnection实现接口java-sql-connection。","link":"#_1-2-druidpooledconnection实现接口java-sql-connection。","children":[]}]},{"level":2,"title":"2. fileter处理–责任链模式","slug":"_2-fileter处理–责任链模式","link":"#_2-fileter处理–责任链模式","children":[{"level":3,"title":"2.1 getConnection方法 调用责任链","slug":"_2-1-getconnection方法-调用责任链","link":"#_2-1-getconnection方法-调用责任链","children":[]},{"level":3,"title":"2.2 FilterChainImpl 责任连之","slug":"_2-2-filterchainimpl-责任连之","link":"#_2-2-filterchainimpl-责任连之","children":[]},{"level":3,"title":"2.3 getConnectionDirect","slug":"_2-3-getconnectiondirect","link":"#_2-3-getconnectiondirect","children":[]},{"level":3,"title":"2.4 getConnectionInternal","slug":"_2-4-getconnectioninternal","link":"#_2-4-getconnectioninternal","children":[]},{"level":3,"title":"2.5 pollLast 与 takeLast","slug":"_2-5-polllast-与-takelast","link":"#_2-5-polllast-与-takelast","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":7.33,"words":2200},"filePathRelative":"dependencies/database-connection-pool/dbcp-y-druid-source-getconnection.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
