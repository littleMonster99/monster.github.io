const e=JSON.parse('{"key":"v-73004147","path":"/develop/security/dev-security-x-xss.html","title":"开发安全 - XSS详解","lang":"zh-CN","frontmatter":{"order":30,"category":["开发","安全"],"description":"XSS是跨站脚本攻击(Cross Site Scripting)，为不和层叠样式表(Cascading Style Sheets, CSS)的缩写混淆，故将跨站脚本攻击缩写为XSS。恶意攻击者往Web页面里插入恶意Script代码，当用户浏览该页之时，嵌入其中Web里面的Script代码会被执行，从而达到恶意攻击用户的目的。 1. XSS 简介 恶意攻...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/develop/security/dev-security-x-xss.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"开发安全 - XSS详解"}],["meta",{"property":"og:description","content":"XSS是跨站脚本攻击(Cross Site Scripting)，为不和层叠样式表(Cascading Style Sheets, CSS)的缩写混淆，故将跨站脚本攻击缩写为XSS。恶意攻击者往Web页面里插入恶意Script代码，当用户浏览该页之时，嵌入其中Web里面的Script代码会被执行，从而达到恶意攻击用户的目的。 1. XSS 简介 恶意攻..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. XSS 简介","slug":"_1-xss-简介","link":"#_1-xss-简介","children":[{"level":3,"title":"1.1 示例","slug":"_1-1-示例","link":"#_1-1-示例","children":[]}]},{"level":2,"title":"2. XSS 攻击类型","slug":"_2-xss-攻击类型","link":"#_2-xss-攻击类型","children":[{"level":3,"title":"2.1 反射型xss攻击","slug":"_2-1-反射型xss攻击","link":"#_2-1-反射型xss攻击","children":[]},{"level":3,"title":"2.2 存储型xss攻击","slug":"_2-2-存储型xss攻击","link":"#_2-2-存储型xss攻击","children":[]},{"level":3,"title":"2.3 DOM型xss攻击","slug":"_2-3-dom型xss攻击","link":"#_2-3-dom型xss攻击","children":[]}]},{"level":2,"title":"3. XSS 攻击的危害","slug":"_3-xss-攻击的危害","link":"#_3-xss-攻击的危害","children":[]},{"level":2,"title":"4. XSS 攻击的防御","slug":"_4-xss-攻击的防御","link":"#_4-xss-攻击的防御","children":[{"level":3,"title":"4.1 escapeHTML","slug":"_4-1-escapehtml","link":"#_4-1-escapehtml","children":[]},{"level":3,"title":"4.2 过滤或者校验","slug":"_4-2-过滤或者校验","link":"#_4-2-过滤或者校验","children":[]},{"level":3,"title":"4.3 CSP(Content Security Policy)","slug":"_4-3-csp-content-security-policy","link":"#_4-3-csp-content-security-policy","children":[]}]},{"level":2,"title":"5. XSS 攻击再深入理解","slug":"_5-xss-攻击再深入理解","link":"#_5-xss-攻击再深入理解","children":[{"level":3,"title":"5.1 对script再做阐述","slug":"_5-1-对script再做阐述","link":"#_5-1-对script再做阐述","children":[]},{"level":3,"title":"5.2 是不是只要对script进行防御呢？","slug":"_5-2-是不是只要对script进行防御呢","link":"#_5-2-是不是只要对script进行防御呢","children":[]},{"level":3,"title":"5.3 通过xss盗用cookie危害是什么？","slug":"_5-3-通过xss盗用cookie危害是什么","link":"#_5-3-通过xss盗用cookie危害是什么","children":[]},{"level":3,"title":"5.4 xss攻击和csrf攻击配合","slug":"_5-4-xss攻击和csrf攻击配合","link":"#_5-4-xss攻击和csrf攻击配合","children":[]},{"level":3,"title":"5.5 对于后端渲染HTML框架","slug":"_5-5-对于后端渲染html框架","link":"#_5-5-对于后端渲染html框架","children":[]},{"level":3,"title":"5.6 对于前端渲染HTML","slug":"_5-6-对于前端渲染html","link":"#_5-6-对于前端渲染html","children":[]},{"level":3,"title":"5.7 浏览器之间对xss处理有差异","slug":"_5-7-浏览器之间对xss处理有差异","link":"#_5-7-浏览器之间对xss处理有差异","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":12.78,"words":3833},"filePathRelative":"develop/security/dev-security-x-xss.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
