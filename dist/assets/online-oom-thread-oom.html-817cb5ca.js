const e=JSON.parse('{"key":"v-35d1334e","path":"/think/deepImpression/online-oom-thread-oom.html","title":"线上OOM-线程池线程无法及时消费内存堆积照成OOM","lang":"zh-CN","frontmatter":{"order":110,"category":["OOM"],"description":"1. 背景 我们有个业务需求，需要将爬取到的网页做数据清理放到搜索引擎solr中。 1. 将mongodb 中的数据分页读取 2. 并通过一定的业务规则做数据转换成 搜索引擎solr 中所需的对象 3. 向solr中批量添加数据建索引 但出现以下几个问题 清理过程中GC特别频繁，最终导致OOM; 线程继续打印，前后都没有日志。但是不继续运行了; 2. ...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/think/deepImpression/online-oom-thread-oom.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"线上OOM-线程池线程无法及时消费内存堆积照成OOM"}],["meta",{"property":"og:description","content":"1. 背景 我们有个业务需求，需要将爬取到的网页做数据清理放到搜索引擎solr中。 1. 将mongodb 中的数据分页读取 2. 并通过一定的业务规则做数据转换成 搜索引擎solr 中所需的对象 3. 向solr中批量添加数据建索引 但出现以下几个问题 清理过程中GC特别频繁，最终导致OOM; 线程继续打印，前后都没有日志。但是不继续运行了; 2. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. demo代码","slug":"_2-demo代码","link":"#_2-demo代码","children":[]},{"level":2,"title":"3. 排查过程","slug":"_3-排查过程","link":"#_3-排查过程","children":[{"level":3,"title":"3.1 打印gc和内存溢出的日志","slug":"_3-1-打印gc和内存溢出的日志","link":"#_3-1-打印gc和内存溢出的日志","children":[]},{"level":3,"title":"3.2 分析-gc日志","slug":"_3-2-分析-gc日志","link":"#_3-2-分析-gc日志","children":[]},{"level":3,"title":"3.3 分析-hprof","slug":"_3-3-分析-hprof","link":"#_3-3-分析-hprof","children":[]}]},{"level":2,"title":"4. 解决方案","slug":"_4-解决方案","link":"#_4-解决方案","children":[]},{"level":2,"title":"5. 推翻原有","slug":"_5-推翻原有","link":"#_5-推翻原有","children":[]},{"level":2,"title":"6. 总结","slug":"_6-总结","link":"#_6-总结","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":7.51,"words":2252},"filePathRelative":"think/deepImpression/online-oom-thread-oom.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
