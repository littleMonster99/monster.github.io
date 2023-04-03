const e=JSON.parse('{"key":"v-695478a0","path":"/db/mysql/mysql-y-statistics-group.html","title":"Mysql按日、周、月进行分组统计","lang":"zh-CN","frontmatter":{"category":["数据库"],"description":"1. 背景 我们在用Mysql抽取数据时候，经常需要按照天、周、月等不同的粒度对数据进行分组统计。而我们的时间可能是“2017/12/5 0:0:0”这种准确的时间。所以在进行分组之前我们需要对时间进行一下处理。 2. DATE_FORMAT DATE_FORMAT是MySQL内置的一个函数，作用是以不同的格式显示日期/时间数据。具体的语法如下： DA...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/db/mysql/mysql-y-statistics-group.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Mysql按日、周、月进行分组统计"}],["meta",{"property":"og:description","content":"1. 背景 我们在用Mysql抽取数据时候，经常需要按照天、周、月等不同的粒度对数据进行分组统计。而我们的时间可能是“2017/12/5 0:0:0”这种准确的时间。所以在进行分组之前我们需要对时间进行一下处理。 2. DATE_FORMAT DATE_FORMAT是MySQL内置的一个函数，作用是以不同的格式显示日期/时间数据。具体的语法如下： DA..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 背景","slug":"_1-背景","link":"#_1-背景","children":[]},{"level":2,"title":"2. DATE_FORMAT","slug":"_2-date-format","link":"#_2-date-format","children":[{"level":3,"title":"2.1  示例","slug":"_2-1-示例","link":"#_2-1-示例","children":[]},{"level":3,"title":"2.2 面临问题","slug":"_2-2-面临问题","link":"#_2-2-面临问题","children":[]}]},{"level":2,"title":"3. 优化方案","slug":"_3-优化方案","link":"#_3-优化方案","children":[{"level":3,"title":"3.1 生成连续日期表","slug":"_3-1-生成连续日期表","link":"#_3-1-生成连续日期表","children":[]},{"level":3,"title":"3.2 关联查询显示","slug":"_3-2-关联查询显示","link":"#_3-2-关联查询显示","children":[]},{"level":3,"title":"3.3 如何控制生成多少个日期","slug":"_3-3-如何控制生成多少个日期","link":"#_3-3-如何控制生成多少个日期","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":3.04,"words":911},"filePathRelative":"db/mysql/mysql-y-statistics-group.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};