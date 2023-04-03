const e=JSON.parse('{"key":"v-2020dd4c","path":"/db/redis/redis-x-cache-penetration.html","title":"Redis缓存穿透","lang":"zh-CN","frontmatter":{"description":"1. 简介 一般是黑客故意去请求缓存中不存在的数据，导致所有的请求都落到数据库上，造成数据库短时间内承受大量请求而崩掉 我们redis中的数据都是从数据库中放进来的，他之所以会穿透是因为在redis里面没有查到，在数据库里也没有查到。 这样数据库就不能吧这条数据放到redis里，redis就拿不到那条数据。你每次要来那条数据的时候，都要去查数据库，然后...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/db/redis/redis-x-cache-penetration.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Redis缓存穿透"}],["meta",{"property":"og:description","content":"1. 简介 一般是黑客故意去请求缓存中不存在的数据，导致所有的请求都落到数据库上，造成数据库短时间内承受大量请求而崩掉 我们redis中的数据都是从数据库中放进来的，他之所以会穿透是因为在redis里面没有查到，在数据库里也没有查到。 这样数据库就不能吧这条数据放到redis里，redis就拿不到那条数据。你每次要来那条数据的时候，都要去查数据库，然后..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 解决办法","slug":"_2-解决办法","link":"#_2-解决办法","children":[{"level":3,"title":"方案1：布隆过滤器","slug":"方案1-布隆过滤器","link":"#方案1-布隆过滤器","children":[]},{"level":3,"title":"方案2：返回数据为空也缓存","slug":"方案2-返回数据为空也缓存","link":"#方案2-返回数据为空也缓存","children":[]},{"level":3,"title":"方案3：","slug":"方案3","link":"#方案3","children":[]},{"level":3,"title":"方案4：","slug":"方案4","link":"#方案4","children":[]}]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":1.66,"words":499},"filePathRelative":"db/redis/redis-x-cache-penetration.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
