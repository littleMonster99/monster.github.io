const e=JSON.parse('{"key":"v-50b8688e","path":"/java/base/java-basic-x-reflection.html","title":"Java 基础 - 反射机制详解","lang":"zh-CN","frontmatter":{"order":80,"category":["Java"],"description":"JAVA反射机制是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为java语言的反射机制。Java反射机制在框架设计中极为广泛，需要深入理解。本文综合多篇文章后，总结了Java 反射的相关知识，希望可以提升你对Java中反射的认知效率。...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/java/base/java-basic-x-reflection.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Java 基础 - 反射机制详解"}],["meta",{"property":"og:description","content":"JAVA反射机制是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为java语言的反射机制。Java反射机制在框架设计中极为广泛，需要深入理解。本文综合多篇文章后，总结了Java 反射的相关知识，希望可以提升你对Java中反射的认知效率。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"0. 基础","slug":"_0-基础","link":"#_0-基础","children":[{"level":3,"title":"0.1 什么是反射？","slug":"_0-1-什么是反射","link":"#_0-1-什么是反射","children":[]},{"level":3,"title":"0.2 反射的缺点？","slug":"_0-2-反射的缺点","link":"#_0-2-反射的缺点","children":[]},{"level":3,"title":"0.3  你是怎么理解反射的（为什么框架需要反射）","slug":"_0-3-你是怎么理解反射的-为什么框架需要反射","link":"#_0-3-你是怎么理解反射的-为什么框架需要反射","children":[]}]},{"level":2,"title":"1. 反射基础","slug":"_1-反射基础","link":"#_1-反射基础","children":[{"level":3,"title":"1.1 Class类","slug":"_1-1-class类","link":"#_1-1-class类","children":[]},{"level":3,"title":"1.2 类加载","slug":"_1-2-类加载","link":"#_1-2-类加载","children":[]}]},{"level":2,"title":"2. 反射的使用","slug":"_2-反射的使用","link":"#_2-反射的使用","children":[{"level":3,"title":"2.1 Class类对象的获取","slug":"_2-1-class类对象的获取","link":"#_2-1-class类对象的获取","children":[]},{"level":3,"title":"2.2 Constructor类及其用法","slug":"_2-2-constructor类及其用法","link":"#_2-2-constructor类及其用法","children":[]},{"level":3,"title":"2.3 Field类及其用法","slug":"_2-3-field类及其用法","link":"#_2-3-field类及其用法","children":[]},{"level":3,"title":"2.4 Method类及其用法","slug":"_2-4-method类及其用法","link":"#_2-4-method类及其用法","children":[]}]},{"level":2,"title":"3. 反射机制执行的流程","slug":"_3-反射机制执行的流程","link":"#_3-反射机制执行的流程","children":[{"level":3,"title":"3.1 反射获取类实例","slug":"_3-1-反射获取类实例","link":"#_3-1-反射获取类实例","children":[]},{"level":3,"title":"3.2 反射获取方法","slug":"_3-2-反射获取方法","link":"#_3-2-反射获取方法","children":[]},{"level":3,"title":"3.3 调用 method.invoke() 方法","slug":"_3-3-调用-method-invoke-方法","link":"#_3-3-调用-method-invoke-方法","children":[]},{"level":3,"title":"3.4 反射调用流程小结","slug":"_3-4-反射调用流程小结","link":"#_3-4-反射调用流程小结","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":34.19,"words":10256},"filePathRelative":"java/base/java-basic-x-reflection.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
