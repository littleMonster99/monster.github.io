const e=JSON.parse('{"key":"v-3e0dcff3","path":"/db/es/elasticsearch-field-type.html","title":"ES详解 - ES字段类型","lang":"zh-CN","frontmatter":{"order":35,"category":["ElasticSearch"],"description":"在学习 ES 文档相关操作之前，我们先学习 ES 中常用的字段类型。 1. 字段类型 1.1 text 当一个字段的内容需要被全文检索时，可以使用text类型， 优点 支持长内容的存储，比如检索文章内容、商品信息等。; 该类型的字段内容在保存时会被分词器分析，并且拆分成多个词项; 然后根据拆分后的词项生成对应的索引，根据关键字检索时可能会将关键字分词，...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/db/es/elasticsearch-field-type.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"ES详解 - ES字段类型"}],["meta",{"property":"og:description","content":"在学习 ES 文档相关操作之前，我们先学习 ES 中常用的字段类型。 1. 字段类型 1.1 text 当一个字段的内容需要被全文检索时，可以使用text类型， 优点 支持长内容的存储，比如检索文章内容、商品信息等。; 该类型的字段内容在保存时会被分词器分析，并且拆分成多个词项; 然后根据拆分后的词项生成对应的索引，根据关键字检索时可能会将关键字分词，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 字段类型","slug":"_1-字段类型","link":"#_1-字段类型","children":[{"level":3,"title":"1.1 text","slug":"_1-1-text","link":"#_1-1-text","children":[]},{"level":3,"title":"1.2 keyword","slug":"_1-2-keyword","link":"#_1-2-keyword","children":[]},{"level":3,"title":"1.3 日期类型","slug":"_1-3-日期类型","link":"#_1-3-日期类型","children":[]},{"level":3,"title":"1.4 布尔类型","slug":"_1-4-布尔类型","link":"#_1-4-布尔类型","children":[]},{"level":3,"title":"1.5 数值类型","slug":"_1-5-数值类型","link":"#_1-5-数值类型","children":[]},{"level":3,"title":"1.6 数组类型","slug":"_1-6-数组类型","link":"#_1-6-数组类型","children":[]},{"level":3,"title":"1.7 对象类型","slug":"_1-7-对象类型","link":"#_1-7-对象类型","children":[]},{"level":3,"title":"1.8 范围类型","slug":"_1-8-范围类型","link":"#_1-8-范围类型","children":[]}]},{"level":2,"title":"2. 数组类型与嵌套数据类型","slug":"_2-数组类型与嵌套数据类型","link":"#_2-数组类型与嵌套数据类型","children":[{"level":3,"title":"2.1 开箱即用的数组类型","slug":"_2-1-开箱即用的数组类型","link":"#_2-1-开箱即用的数组类型","children":[]}]},{"level":2,"title":"2.2 嵌套数据类型","slug":"_2-2-嵌套数据类型","link":"#_2-2-嵌套数据类型","children":[{"level":3,"title":"2.3 easy-es中的嵌套类型","slug":"_2-3-easy-es中的嵌套类型","link":"#_2-3-easy-es中的嵌套类型","children":[]}]},{"level":2,"title":"3. 示例","slug":"_3-示例","link":"#_3-示例","children":[{"level":3,"title":"3.1 建索引","slug":"_3-1-建索引","link":"#_3-1-建索引","children":[]},{"level":3,"title":"3.2 添加文档数据","slug":"_3-2-添加文档数据","link":"#_3-2-添加文档数据","children":[]},{"level":3,"title":"3.3 说明","slug":"_3-3-说明","link":"#_3-3-说明","children":[]},{"level":3,"title":"3.4 查看文档mapping信息","slug":"_3-4-查看文档mapping信息","link":"#_3-4-查看文档mapping信息","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":10.01,"words":3003},"filePathRelative":"db/es/elasticsearch-field-type.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
