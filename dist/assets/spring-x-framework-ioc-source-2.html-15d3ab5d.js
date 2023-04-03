const e=JSON.parse('{"key":"v-3563058c","path":"/dependencies/spring/spring-x-framework-ioc-source-2.html","title":"Spring进阶 - Spring IOC实现原理详解之IOC初始化流程","lang":"zh-CN","frontmatter":{"order":80,"category":["Spring"],"description":"上文，我们看了IOC设计要点和设计结构；紧接着这篇，我们可以看下源码的实现了：Spring如何实现将资源配置（以xml配置为例）通过加载，解析，生成BeanDefination并注册到IoC容器中的 1. 引入 上文，我们看了IOC设计要点和设计结构；紧接着这篇，我们可以看下源码的实现了：Spring如何实现将资源配置（以xml配置为例）通过加载，解析...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/dependencies/spring/spring-x-framework-ioc-source-2.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Spring进阶 - Spring IOC实现原理详解之IOC初始化流程"}],["meta",{"property":"og:description","content":"上文，我们看了IOC设计要点和设计结构；紧接着这篇，我们可以看下源码的实现了：Spring如何实现将资源配置（以xml配置为例）通过加载，解析，生成BeanDefination并注册到IoC容器中的 1. 引入 上文，我们看了IOC设计要点和设计结构；紧接着这篇，我们可以看下源码的实现了：Spring如何实现将资源配置（以xml配置为例）通过加载，解析..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 引入","slug":"_1-引入","link":"#_1-引入","children":[]},{"level":2,"title":"2. 如何将Bean从XML配置中解析后放到IoC容器中的？","slug":"_2-如何将bean从xml配置中解析后放到ioc容器中的","link":"#_2-如何将bean从xml配置中解析后放到ioc容器中的","children":[{"level":3,"title":"2.1 初始化的入口","slug":"_2-1-初始化的入口","link":"#_2-1-初始化的入口","children":[]},{"level":3,"title":"2.2 设置资源解析器和环境","slug":"_2-2-设置资源解析器和环境","link":"#_2-2-设置资源解析器和环境","children":[]},{"level":3,"title":"2.3 设置配置路径","slug":"_2-3-设置配置路径","link":"#_2-3-设置配置路径","children":[]},{"level":3,"title":"2.4 初始化的主体流程","slug":"_2-4-初始化的主体流程","link":"#_2-4-初始化的主体流程","children":[]}]},{"level":2,"title":"3. 总结","slug":"_3-总结","link":"#_3-总结","children":[]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":15.85,"words":4755},"filePathRelative":"dependencies/spring/spring-x-framework-ioc-source-2.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
