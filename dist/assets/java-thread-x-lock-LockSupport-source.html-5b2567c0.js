const e=JSON.parse('{"key":"v-02cc3d51","path":"/java/thread/java-thread-x-lock-LockSupport-source.html","title":"JUC锁: LockSupport源码分析","lang":"zh-CN","frontmatter":{"order":525,"category":["Java","并发"],"description":"1. 类的属性 UNSAFE字段表示sun.misc.Unsafe类，一般程序中不允许直接调用; 而long型的表示实例对象相应字段在内存中的偏移地址，可以通过该偏移地址获取或者设置该字段的值。; 2. 类的构造函数 私有构造函数，无法被实例化。所以所有的方法都是静态的 3. Unsafe类中的park和unpark函数 在分析LockSupport函...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/java/thread/java-thread-x-lock-LockSupport-source.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"JUC锁: LockSupport源码分析"}],["meta",{"property":"og:description","content":"1. 类的属性 UNSAFE字段表示sun.misc.Unsafe类，一般程序中不允许直接调用; 而long型的表示实例对象相应字段在内存中的偏移地址，可以通过该偏移地址获取或者设置该字段的值。; 2. 类的构造函数 私有构造函数，无法被实例化。所以所有的方法都是静态的 3. Unsafe类中的park和unpark函数 在分析LockSupport函..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 类的属性","slug":"_1-类的属性","link":"#_1-类的属性","children":[]},{"level":2,"title":"2. 类的构造函数","slug":"_2-类的构造函数","link":"#_2-类的构造函数","children":[]},{"level":2,"title":"3. Unsafe类中的park和unpark函数","slug":"_3-unsafe类中的park和unpark函数","link":"#_3-unsafe类中的park和unpark函数","children":[]},{"level":2,"title":"4. 核心函数分析","slug":"_4-核心函数分析","link":"#_4-核心函数分析","children":[{"level":3,"title":"4.1 park函数","slug":"_4-1-park函数","link":"#_4-1-park函数","children":[]},{"level":3,"title":"4.2 无参重载版本，park()函数","slug":"_4-2-无参重载版本-park-函数","link":"#_4-2-无参重载版本-park-函数","children":[]},{"level":3,"title":"4.3 parkNanos函数","slug":"_4-3-parknanos函数","link":"#_4-3-parknanos函数","children":[]},{"level":3,"title":"4.4 parkUntil函数","slug":"_4-4-parkuntil函数","link":"#_4-4-parkuntil函数","children":[]},{"level":3,"title":"4.5 unpark函数","slug":"_4-5-unpark函数","link":"#_4-5-unpark函数","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":5.03,"words":1508},"filePathRelative":"java/thread/java-thread-x-lock-LockSupport-source.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
