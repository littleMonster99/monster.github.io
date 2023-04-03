const e=JSON.parse('{"key":"v-017770c8","path":"/db/mongodb/mongo-y-page.html","title":"Mongo进阶 - WT引擎：Page生命周期","lang":"zh-CN","frontmatter":{"order":140,"category":["mongodb"],"description":"通过前文我们了解到数据以page为单位加载到cache; 有必要系统的分析一页page的生命周期、状态以及相关参数的配置，这对后续MongoDB的性能调优和故障问题的定位和解决有帮助。 1. 为什么要了解Page生命周期 通过前文我们了解到数据以page为单位加载到cache、cache里面又会生成各种不同类型的page及为不同类型的page分配不同大...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/db/mongodb/mongo-y-page.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Mongo进阶 - WT引擎：Page生命周期"}],["meta",{"property":"og:description","content":"通过前文我们了解到数据以page为单位加载到cache; 有必要系统的分析一页page的生命周期、状态以及相关参数的配置，这对后续MongoDB的性能调优和故障问题的定位和解决有帮助。 1. 为什么要了解Page生命周期 通过前文我们了解到数据以page为单位加载到cache、cache里面又会生成各种不同类型的page及为不同类型的page分配不同大..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 为什么要了解Page生命周期","slug":"_1-为什么要了解page生命周期","link":"#_1-为什么要了解page生命周期","children":[]},{"level":2,"title":"2. Page的生命周期","slug":"_2-page的生命周期","link":"#_2-page的生命周期","children":[]},{"level":2,"title":"3. Page的各种状态","slug":"_3-page的各种状态","link":"#_3-page的各种状态","children":[]},{"level":2,"title":"4. Page的大小参数","slug":"_4-page的大小参数","link":"#_4-page的大小参数","children":[]},{"level":2,"title":"5. Page无锁及压缩","slug":"_5-page无锁及压缩","link":"#_5-page无锁及压缩","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":6.68,"words":2004},"filePathRelative":"db/mongodb/mongo-y-page.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
