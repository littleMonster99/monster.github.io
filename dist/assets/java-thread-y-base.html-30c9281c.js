const e=JSON.parse('{"key":"v-c616d4ea","path":"/java/thread/java-thread-y-base.html","title":"多线程","lang":"zh-CN","frontmatter":{"description":"1. 什么是线程和进程 1.1 什么是进程 进程是程序的一次执行过程，是操作系统分配资源的最小单位。系统运行一个程序即是一个进程从创建，运行到消亡的过程 在java中，当我们启动 main 函数时其实就是启动了一个 JVM 的进程，而main函数所在的线程就是这个进程中的一个线程，也称主线程 1.2 什么是线程 他是操作系统运算调度（程序执行）的最小单...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/java/thread/java-thread-y-base.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"多线程"}],["meta",{"property":"og:description","content":"1. 什么是线程和进程 1.1 什么是进程 进程是程序的一次执行过程，是操作系统分配资源的最小单位。系统运行一个程序即是一个进程从创建，运行到消亡的过程 在java中，当我们启动 main 函数时其实就是启动了一个 JVM 的进程，而main函数所在的线程就是这个进程中的一个线程，也称主线程 1.2 什么是线程 他是操作系统运算调度（程序执行）的最小单..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 什么是线程和进程","slug":"_1-什么是线程和进程","link":"#_1-什么是线程和进程","children":[{"level":3,"title":"1.1 什么是进程","slug":"_1-1-什么是进程","link":"#_1-1-什么是进程","children":[]},{"level":3,"title":"1.2 什么是线程","slug":"_1-2-什么是线程","link":"#_1-2-什么是线程","children":[]}]},{"level":2,"title":"2. 线程与进程的关系与区别及优缺点","slug":"_2-线程与进程的关系与区别及优缺点","link":"#_2-线程与进程的关系与区别及优缺点","children":[{"level":3,"title":"2.1 进程与线程的关系","slug":"_2-1-进程与线程的关系","link":"#_2-1-进程与线程的关系","children":[]},{"level":3,"title":"2.2 进程与线程的区别","slug":"_2-2-进程与线程的区别","link":"#_2-2-进程与线程的区别","children":[]}]},{"level":2,"title":"3. 进程与线程的内存区域","slug":"_3-进程与线程的内存区域","link":"#_3-进程与线程的内存区域","children":[{"level":3,"title":"3.1 从内存区域角度来分析进程与线程区别","slug":"_3-1-从内存区域角度来分析进程与线程区别","link":"#_3-1-从内存区域角度来分析进程与线程区别","children":[]},{"level":3,"title":"3.2 程序计数器为什么是私有的？","slug":"_3-2-程序计数器为什么是私有的","link":"#_3-2-程序计数器为什么是私有的","children":[]},{"level":3,"title":"3.3 虚拟机栈和本地方法栈为什么是私有的","slug":"_3-3-虚拟机栈和本地方法栈为什么是私有的","link":"#_3-3-虚拟机栈和本地方法栈为什么是私有的","children":[]},{"level":3,"title":"3.4. 一句话简单了解堆和方法区","slug":"_3-4-一句话简单了解堆和方法区","link":"#_3-4-一句话简单了解堆和方法区","children":[]}]},{"level":2,"title":"4. 并发和并行","slug":"_4-并发和并行","link":"#_4-并发和并行","children":[]},{"level":2,"title":"5. 为什么要使用多线程","slug":"_5-为什么要使用多线程","link":"#_5-为什么要使用多线程","children":[]},{"level":2,"title":"6. 多线程可能带来的问题","slug":"_6-多线程可能带来的问题","link":"#_6-多线程可能带来的问题","children":[]},{"level":2,"title":"7. 什么是上下文切换","slug":"_7-什么是上下文切换","link":"#_7-什么是上下文切换","children":[{"level":3,"title":"7.1 为什么需要上下文切换","slug":"_7-1-为什么需要上下文切换","link":"#_7-1-为什么需要上下文切换","children":[]},{"level":3,"title":"7.2 为什么说上下文切换消耗时间","slug":"_7-2-为什么说上下文切换消耗时间","link":"#_7-2-为什么说上下文切换消耗时间","children":[]}]},{"level":2,"title":"8. 为什么我们不能直接调用 run() 方法？","slug":"_8-为什么我们不能直接调用-run-方法","link":"#_8-为什么我们不能直接调用-run-方法","children":[]},{"level":2,"title":"9. 什么是线程安全","slug":"_9-什么是线程安全","link":"#_9-什么是线程安全","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":6.72,"words":2015},"filePathRelative":"java/thread/java-thread-y-base.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
