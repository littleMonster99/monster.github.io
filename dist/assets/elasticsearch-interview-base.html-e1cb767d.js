const e=JSON.parse('{"key":"v-66b9f1fa","path":"/db/es/elasticsearch-interview-base.html","title":"ES面试 - ElasticSearch面试（基础篇）","lang":"zh-CN","frontmatter":{"order":2010,"category":["es"],"description":"1. ElasticSearch基础 1.1 什么是Elasticsearch： Elasticsearch 是基于 Lucene 的 Restful 的分布式实时全文搜索引擎，每个字段都被索引并可被搜索，可以快速存储、搜索、分析海量的数据。 全文检索是指对每一个词建立一个索引，指明该词在文章中出现的次数和位置。当查询时，根据事先建立的索引进行查找，并...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/db/es/elasticsearch-interview-base.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"ES面试 - ElasticSearch面试（基础篇）"}],["meta",{"property":"og:description","content":"1. ElasticSearch基础 1.1 什么是Elasticsearch： Elasticsearch 是基于 Lucene 的 Restful 的分布式实时全文搜索引擎，每个字段都被索引并可被搜索，可以快速存储、搜索、分析海量的数据。 全文检索是指对每一个词建立一个索引，指明该词在文章中出现的次数和位置。当查询时，根据事先建立的索引进行查找，并..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. ElasticSearch基础","slug":"_1-elasticsearch基础","link":"#_1-elasticsearch基础","children":[{"level":3,"title":"1.1 什么是Elasticsearch：","slug":"_1-1-什么是elasticsearch","link":"#_1-1-什么是elasticsearch","children":[]},{"level":3,"title":"1.2 Elasticsearch 的基本概念：","slug":"_1-2-elasticsearch-的基本概念","link":"#_1-2-elasticsearch-的基本概念","children":[]},{"level":3,"title":"1.3 什么是倒排索引：","slug":"_1-3-什么是倒排索引","link":"#_1-3-什么是倒排索引","children":[]},{"level":3,"title":"1.4 doc_values 的作用：","slug":"_1-4-doc-values-的作用","link":"#_1-4-doc-values-的作用","children":[]},{"level":3,"title":"1.5 text 和 keyword类型的区别：","slug":"_1-5-text-和-keyword类型的区别","link":"#_1-5-text-和-keyword类型的区别","children":[]},{"level":3,"title":"1.6 query 和 filter 的区别？","slug":"_1-6-query-和-filter-的区别","link":"#_1-6-query-和-filter-的区别","children":[]}]},{"level":2,"title":"2. ES的写入流程：","slug":"_2-es的写入流程","link":"#_2-es的写入流程","children":[{"level":3,"title":"2.1 ES写数据的整体流程：","slug":"_2-1-es写数据的整体流程","link":"#_2-1-es写数据的整体流程","children":[]},{"level":3,"title":"2.2 ES主分片写数据的详细流程：","slug":"_2-2-es主分片写数据的详细流程","link":"#_2-2-es主分片写数据的详细流程","children":[]}]},{"level":2,"title":"3. ES的更新和删除流程：","slug":"_3-es的更新和删除流程","link":"#_3-es的更新和删除流程","children":[]},{"level":2,"title":"4. ES的搜索流程：","slug":"_4-es的搜索流程","link":"#_4-es的搜索流程","children":[{"level":3,"title":"4.1 Query阶段：","slug":"_4-1-query阶段","link":"#_4-1-query阶段","children":[]},{"level":3,"title":"4.2 Fetch阶段：","slug":"_4-2-fetch阶段","link":"#_4-2-fetch阶段","children":[]}]},{"level":2,"title":"5. ES在高并发下如何保证读写一致性？","slug":"_5-es在高并发下如何保证读写一致性","link":"#_5-es在高并发下如何保证读写一致性","children":[{"level":3,"title":"5.1 更新操作","slug":"_5-1-更新操作","link":"#_5-1-更新操作","children":[]},{"level":3,"title":"5.2 对于写操作","slug":"_5-2-对于写操作","link":"#_5-2-对于写操作","children":[]},{"level":3,"title":"5.3 对于读操作","slug":"_5-3-对于读操作","link":"#_5-3-对于读操作","children":[]}]},{"level":2,"title":"6. ES集群如何选举Master节点：","slug":"_6-es集群如何选举master节点","link":"#_6-es集群如何选举master节点","children":[{"level":3,"title":"6.1 Elasticsearch 的分布式原理：","slug":"_6-1-elasticsearch-的分布式原理","link":"#_6-1-elasticsearch-的分布式原理","children":[]},{"level":3,"title":"6.2 ES集群 如何 选举 Master：","slug":"_6-2-es集群-如何-选举-master","link":"#_6-2-es集群-如何-选举-master","children":[]},{"level":3,"title":"6.3 Elasticsearch是如何避免脑裂现象：","slug":"_6-3-elasticsearch是如何避免脑裂现象","link":"#_6-3-elasticsearch是如何避免脑裂现象","children":[]}]},{"level":2,"title":"7. 建立索引阶段性能提升方法：","slug":"_7-建立索引阶段性能提升方法","link":"#_7-建立索引阶段性能提升方法","children":[]},{"level":2,"title":"8. ES的深度分页与滚动搜索scroll","slug":"_8-es的深度分页与滚动搜索scroll","link":"#_8-es的深度分页与滚动搜索scroll","children":[{"level":3,"title":"8.1 深度分页：","slug":"_8-1-深度分页","link":"#_8-1-深度分页","children":[]},{"level":3,"title":"8.2 滚动搜索：","slug":"_8-2-滚动搜索","link":"#_8-2-滚动搜索","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":13.99,"words":4198},"filePathRelative":"db/es/elasticsearch-interview-base.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
