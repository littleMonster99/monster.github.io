const e=JSON.parse('{"key":"v-304c5322","path":"/db/es/elasticsearch-x-dsl-term.html","title":"ES详解 - 查询：DSL查询之Term详解","lang":"zh-CN","frontmatter":{"order":100,"category":["ElasticSearch"],"description":"DSL查询另一种极为常用的是对词项进行搜索，官方文档中叫”term level“查询，本文主要对term level搜索进行详解。 1. Term查询引入 如前文所述，查询分基于文本查询和基于词项的查询: image-20220805222938003 本文主要讲基于词项的查询。 image-20220805223752733 2. Term查询 很多...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/db/es/elasticsearch-x-dsl-term.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"ES详解 - 查询：DSL查询之Term详解"}],["meta",{"property":"og:description","content":"DSL查询另一种极为常用的是对词项进行搜索，官方文档中叫”term level“查询，本文主要对term level搜索进行详解。 1. Term查询引入 如前文所述，查询分基于文本查询和基于词项的查询: image-20220805222938003 本文主要讲基于词项的查询。 image-20220805223752733 2. Term查询 很多..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. Term查询引入","slug":"_1-term查询引入","link":"#_1-term查询引入","children":[]},{"level":2,"title":"2. Term查询","slug":"_2-term查询","link":"#_2-term查询","children":[{"level":3,"title":"2.1 字段是否存在:exist","slug":"_2-1-字段是否存在-exist","link":"#_2-1-字段是否存在-exist","children":[]},{"level":3,"title":"2.2 id查询:ids","slug":"_2-2-id查询-ids","link":"#_2-2-id查询-ids","children":[]},{"level":3,"title":"2.3 前缀:prefix","slug":"_2-3-前缀-prefix","link":"#_2-3-前缀-prefix","children":[]},{"level":3,"title":"2.4 分词匹配:term","slug":"_2-4-分词匹配-term","link":"#_2-4-分词匹配-term","children":[]},{"level":3,"title":"2.5 多个分词匹配:terms","slug":"_2-5-多个分词匹配-terms","link":"#_2-5-多个分词匹配-terms","children":[]},{"level":3,"title":"2.6 按某个数字字段分词匹配:term set","slug":"_2-6-按某个数字字段分词匹配-term-set","link":"#_2-6-按某个数字字段分词匹配-term-set","children":[]},{"level":3,"title":"2.7 通配符:wildcard","slug":"_2-7-通配符-wildcard","link":"#_2-7-通配符-wildcard","children":[]},{"level":3,"title":"2.8 范围:range","slug":"_2-8-范围-range","link":"#_2-8-范围-range","children":[]},{"level":3,"title":"2.9 正则:regexp","slug":"_2-9-正则-regexp","link":"#_2-9-正则-regexp","children":[]},{"level":3,"title":"2.10 模糊匹配:fuzzy","slug":"_2-10-模糊匹配-fuzzy","link":"#_2-10-模糊匹配-fuzzy","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":2.78,"words":835},"filePathRelative":"db/es/elasticsearch-x-dsl-term.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
