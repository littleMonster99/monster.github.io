const e=JSON.parse('{"key":"v-b49ab68c","path":"/java/thread/java-thread-x-juc-executor-ScheduledThreadPoolExecutor.html","title":"JUC线程池: ScheduledThreadPoolExecutor详解","lang":"zh-CN","frontmatter":{"order":630,"category":["Java","并发"],"description":"0. 面试题 ScheduledThreadPoolExecutor要解决什么样的问题?; ScheduledThreadPoolExecutor相比ThreadPoolExecutor有哪些特性?; ScheduledThreadPoolExecutor有什么样的数据结构，核心内部类和抽象类?; ScheduledThreadPoolExecutor...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/java/thread/java-thread-x-juc-executor-ScheduledThreadPoolExecutor.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"JUC线程池: ScheduledThreadPoolExecutor详解"}],["meta",{"property":"og:description","content":"0. 面试题 ScheduledThreadPoolExecutor要解决什么样的问题?; ScheduledThreadPoolExecutor相比ThreadPoolExecutor有哪些特性?; ScheduledThreadPoolExecutor有什么样的数据结构，核心内部类和抽象类?; ScheduledThreadPoolExecutor..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"0. 面试题","slug":"_0-面试题","link":"#_0-面试题","children":[]},{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[{"level":3,"title":"1.1 应用场景","slug":"_1-1-应用场景","link":"#_1-1-应用场景","children":[]}]},{"level":2,"title":"2. 数据结构","slug":"_2-数据结构","link":"#_2-数据结构","children":[{"level":3,"title":"2.1 继承ThreadPoolExecutor","slug":"_2-1-继承threadpoolexecutor","link":"#_2-1-继承threadpoolexecutor","children":[]},{"level":3,"title":"2.2 两个内部类 ScheduledFutureTask 和 DelayedWorkQueue","slug":"_2-2-两个内部类-scheduledfuturetask-和-delayedworkqueue","link":"#_2-2-两个内部类-scheduledfuturetask-和-delayedworkqueue","children":[]}]},{"level":2,"title":"3. 源码解析","slug":"_3-源码解析","link":"#_3-源码解析","children":[{"level":3,"title":"3.1 内部类ScheduledFutureTask","slug":"_3-1-内部类scheduledfuturetask","link":"#_3-1-内部类scheduledfuturetask","children":[]},{"level":3,"title":"3.2 核心属性","slug":"_3-2-核心属性","link":"#_3-2-核心属性","children":[]},{"level":3,"title":"3.3 构造函数","slug":"_3-3-构造函数","link":"#_3-3-构造函数","children":[]},{"level":3,"title":"3.4 核心方法:Schedule","slug":"_3-4-核心方法-schedule","link":"#_3-4-核心方法-schedule","children":[]},{"level":3,"title":"3.5 核心方法:scheduleAtFixedRate 和 scheduleWithFixedDelay","slug":"_3-5-核心方法-scheduleatfixedrate-和-schedulewithfixeddelay","link":"#_3-5-核心方法-scheduleatfixedrate-和-schedulewithfixeddelay","children":[]},{"level":3,"title":"3.6 核心方法:shutdown()","slug":"_3-6-核心方法-shutdown","link":"#_3-6-核心方法-shutdown","children":[]}]},{"level":2,"title":"4. 问题","slug":"_4-问题","link":"#_4-问题","children":[{"level":3,"title":"4.1 为什么ThreadPoolExecutor 的调整策略却不适用于 ScheduledThreadPoolExecutor？","slug":"_4-1-为什么threadpoolexecutor-的调整策略却不适用于-scheduledthreadpoolexecutor","link":"#_4-1-为什么threadpoolexecutor-的调整策略却不适用于-scheduledthreadpoolexecutor","children":[]},{"level":3,"title":"4.2 Executors 提供了哪几种方法来构造 ScheduledThreadPoolExecutor？","slug":"_4-2-executors-提供了哪几种方法来构造-scheduledthreadpoolexecutor","link":"#_4-2-executors-提供了哪几种方法来构造-scheduledthreadpoolexecutor","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":10.63,"words":3190},"filePathRelative":"java/thread/java-thread-x-juc-executor-ScheduledThreadPoolExecutor.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
