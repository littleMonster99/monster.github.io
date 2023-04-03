const t=JSON.parse('{"key":"v-be3b0ee6","path":"/think/deepImpression/list-contains-cpu100.html","title":"List的contains导致cpu100%","lang":"zh-CN","frontmatter":{"description":"1. 背景 在开发过程中用到了List，随着业务需求的变化，需要去重。当时直接就在代码中判断是否包含 list.contains(\\"a\\") ，包含则不添加 代码大体如下： 这代码在本地是没有任何问题的，当部署到生成环境时CPU100%了。 2. 问题解析 由于getAllIdnos() 获取到的用户数据量过于庞大，大概80w左右的数据。当这80w每添加...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/think/deepImpression/list-contains-cpu100.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"List的contains导致cpu100%"}],["meta",{"property":"og:description","content":"1. 背景 在开发过程中用到了List，随着业务需求的变化，需要去重。当时直接就在代码中判断是否包含 list.contains(\\"a\\") ，包含则不添加 代码大体如下： 这代码在本地是没有任何问题的，当部署到生成环境时CPU100%了。 2. 问题解析 由于getAllIdnos() 获取到的用户数据量过于庞大，大概80w左右的数据。当这80w每添加..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. 问题解析","slug":"_2-问题解析","link":"#_2-问题解析","children":[]},{"level":2,"title":"3. 改进","slug":"_3-改进","link":"#_3-改进","children":[]},{"level":2,"title":"4. 总结","slug":"_4-总结","link":"#_4-总结","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":1.35,"words":404},"filePathRelative":"think/deepImpression/list-contains-cpu100.md","localizedDate":"2023年3月30日","autoDesc":true}');export{t as data};
