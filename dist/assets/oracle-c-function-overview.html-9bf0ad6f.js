const e=JSON.parse('{"key":"v-0b35f1aa","path":"/db/oracle/oracle-c-function-overview.html","title":"Oracle预定义函数","lang":"zh-CN","frontmatter":{"order":30,"category":["数据库"],"description":"1. 简介 oralce 的函数分为 单行函数; 字符函数; 日期函数; 数字函数; 转换函数; 分组函数（后续介绍）; 学前知识：哑表 dual dual 是一个虚拟表，辅助查找和运算，通常用在select语句中，作为查询的目标表结构，oracle保证dual里面永远只有一条记录 例如： 显示1+1 的结果，可以看出，dual很多时候是为了构成sel...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/db/oracle/oracle-c-function-overview.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Oracle预定义函数"}],["meta",{"property":"og:description","content":"1. 简介 oralce 的函数分为 单行函数; 字符函数; 日期函数; 数字函数; 转换函数; 分组函数（后续介绍）; 学前知识：哑表 dual dual 是一个虚拟表，辅助查找和运算，通常用在select语句中，作为查询的目标表结构，oracle保证dual里面永远只有一条记录 例如： 显示1+1 的结果，可以看出，dual很多时候是为了构成sel..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 字符函数","slug":"_2-字符函数","link":"#_2-字符函数","children":[{"level":3,"title":"2.1 LOWER 把字符转为小写","slug":"_2-1-lower-把字符转为小写","link":"#_2-1-lower-把字符转为小写","children":[]},{"level":3,"title":"2.2 UPPER 把字符转换为大写","slug":"_2-2-upper-把字符转换为大写","link":"#_2-2-upper-把字符转换为大写","children":[]},{"level":3,"title":"2.3 initcap 把字符串首字母大写","slug":"_2-3-initcap-把字符串首字母大写","link":"#_2-3-initcap-把字符串首字母大写","children":[]},{"level":3,"title":"2.4 concat 把俩个字符串连接在一起(类似之前的||的作用)","slug":"_2-4-concat-把俩个字符串连接在一起-类似之前的-的作用","link":"#_2-4-concat-把俩个字符串连接在一起-类似之前的-的作用","children":[]},{"level":3,"title":"2.5 substr 截取字符串","slug":"_2-5-substr-截取字符串","link":"#_2-5-substr-截取字符串","children":[]},{"level":3,"title":"2.6 length 获得字符串长度","slug":"_2-6-length-获得字符串长度","link":"#_2-6-length-获得字符串长度","children":[]},{"level":3,"title":"2.7 nvl 替换列中为null 的值","slug":"_2-7-nvl-替换列中为null-的值","link":"#_2-7-nvl-替换列中为null-的值","children":[]},{"level":3,"title":"2.8 instr 查找字符串","slug":"_2-8-instr-查找字符串","link":"#_2-8-instr-查找字符串","children":[]}]},{"level":2,"title":"3. 数字函数","slug":"_3-数字函数","link":"#_3-数字函数","children":[{"level":3,"title":"3.1 round 四舍五入","slug":"_3-1-round-四舍五入","link":"#_3-1-round-四舍五入","children":[]},{"level":3,"title":"3.2 trunc 截取到某一位","slug":"_3-2-trunc-截取到某一位","link":"#_3-2-trunc-截取到某一位","children":[]},{"level":3,"title":"3.3 mod 取余","slug":"_3-3-mod-取余","link":"#_3-3-mod-取余","children":[]}]},{"level":2,"title":"4. 日期函数","slug":"_4-日期函数","link":"#_4-日期函数","children":[{"level":3,"title":"4.1 sysdate 关键字","slug":"_4-1-sysdate-关键字","link":"#_4-1-sysdate-关键字","children":[]},{"level":3,"title":"4.2 months_between","slug":"_4-2-months-between","link":"#_4-2-months-between","children":[]},{"level":3,"title":"4.3 add_months","slug":"_4-3-add-months","link":"#_4-3-add-months","children":[]},{"level":3,"title":"4.4 next_day","slug":"_4-4-next-day","link":"#_4-4-next-day","children":[]},{"level":3,"title":"4.5 last_day","slug":"_4-5-last-day","link":"#_4-5-last-day","children":[]},{"level":3,"title":"4.6 round","slug":"_4-6-round","link":"#_4-6-round","children":[]},{"level":3,"title":"4.7 trunc","slug":"_4-7-trunc","link":"#_4-7-trunc","children":[]}]},{"level":2,"title":"5. 类型转换函数","slug":"_5-类型转换函数","link":"#_5-类型转换函数","children":[{"level":3,"title":"5.1 to_char 把日期转换为字符","slug":"_5-1-to-char-把日期转换为字符","link":"#_5-1-to-char-把日期转换为字符","children":[]},{"level":3,"title":"5.2 to_char 把数字转换为字符","slug":"_5-2-to-char-把数字转换为字符","link":"#_5-2-to-char-把数字转换为字符","children":[]},{"level":3,"title":"5.3 to_number 把字符转换为数字","slug":"_5-3-to-number-把字符转换为数字","link":"#_5-3-to-number-把字符转换为数字","children":[]},{"level":3,"title":"5.4 to_date 把字符转换为日期","slug":"_5-4-to-date-把字符转换为日期","link":"#_5-4-to-date-把字符转换为日期","children":[]}]},{"level":2,"title":"6. exists 和not exists 用法","slug":"_6-exists-和not-exists-用法","link":"#_6-exists-和not-exists-用法","children":[{"level":3,"title":"6.1 EXISTS 和IN 的选择","slug":"_6-1-exists-和in-的选择","link":"#_6-1-exists-和in-的选择","children":[]}]},{"level":2,"title":"7. DECODE函数","slug":"_7-decode函数","link":"#_7-decode函数","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":9.45,"words":2836},"filePathRelative":"db/oracle/oracle-c-function-overview.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
