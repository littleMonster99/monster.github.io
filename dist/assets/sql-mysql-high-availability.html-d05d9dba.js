const e=JSON.parse('{"key":"v-eb85f47c","path":"/db/mysql/sql-mysql-high-availability.html","title":"MySQL - MySQL高可用方案","lang":"zh-CN","frontmatter":{"order":326,"category":["Mysql","数据库"],"description":"1. 概述 我们在考虑MySQL数据库的高可用的架构时，主要要考虑如下几方面： 如果数据库发生了宕机或者意外中断等故障，能尽快恢复数据库的可用性，尽可能的减少停机时间，保证业务不会因为数据库的故障而中断。; 用作备份、只读副本等功能的非主节点的数据应该和主节点的数据实时或者最终保持一致。; 当业务发生数据库切换时，切换前后的数据库内容应当一致，不会因为...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/db/mysql/sql-mysql-high-availability.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"MySQL - MySQL高可用方案"}],["meta",{"property":"og:description","content":"1. 概述 我们在考虑MySQL数据库的高可用的架构时，主要要考虑如下几方面： 如果数据库发生了宕机或者意外中断等故障，能尽快恢复数据库的可用性，尽可能的减少停机时间，保证业务不会因为数据库的故障而中断。; 用作备份、只读副本等功能的非主节点的数据应该和主节点的数据实时或者最终保持一致。; 当业务发生数据库切换时，切换前后的数据库内容应当一致，不会因为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 概述","slug":"_1-概述","link":"#_1-概述","children":[]},{"level":2,"title":"2. 高可用方案","slug":"_2-高可用方案","link":"#_2-高可用方案","children":[{"level":3,"title":"2.1. 主从或主主半同步复制","slug":"_2-1-主从或主主半同步复制","link":"#_2-1-主从或主主半同步复制","children":[]},{"level":3,"title":"2.2. 半同步复制优化","slug":"_2-2-半同步复制优化","link":"#_2-2-半同步复制优化","children":[]},{"level":3,"title":"2.3. 高可用架构优化","slug":"_2-3-高可用架构优化","link":"#_2-3-高可用架构优化","children":[]},{"level":3,"title":"2.4. 共享存储","slug":"_2-4-共享存储","link":"#_2-4-共享存储","children":[]},{"level":3,"title":"2.5. 分布式协议","slug":"_2-5-分布式协议","link":"#_2-5-分布式协议","children":[]}]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":9.78,"words":2934},"filePathRelative":"db/mysql/sql-mysql-high-availability.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
