const e=JSON.parse('{"key":"v-4d1780c2","path":"/java/io/java-io-bio.html","title":"Java IO - BIO 详解","lang":"zh-CN","frontmatter":{"order":80,"category":["Java","IO"],"description":"BIO就是: blocking IO。最容易理解、最容易实现的IO工作方式，应用程序向操作系统请求网络IO操作，这时应用程序会一直等待；另一方面，操作系统收到请求后，也会等待，直到网络上有数据传到监听端口；操作系统在收集数据后，会把数据发送给应用程序；最后应用程序受到数据，并解除等待状态。 1. 几个重要概念 阻塞IO 和 非阻塞IO; 这两个概念是程...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/java/io/java-io-bio.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Java IO - BIO 详解"}],["meta",{"property":"og:description","content":"BIO就是: blocking IO。最容易理解、最容易实现的IO工作方式，应用程序向操作系统请求网络IO操作，这时应用程序会一直等待；另一方面，操作系统收到请求后，也会等待，直到网络上有数据传到监听端口；操作系统在收集数据后，会把数据发送给应用程序；最后应用程序受到数据，并解除等待状态。 1. 几个重要概念 阻塞IO 和 非阻塞IO; 这两个概念是程..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 几个重要概念","slug":"_1-几个重要概念","link":"#_1-几个重要概念","children":[]},{"level":2,"title":"2. 传统的BIO通信方式简介","slug":"_2-传统的bio通信方式简介","link":"#_2-传统的bio通信方式简介","children":[{"level":3,"title":"2.1 传统的BIO的问题","slug":"_2-1-传统的bio的问题","link":"#_2-1-传统的bio的问题","children":[]},{"level":3,"title":"2.2 多线程方式 - 伪异步方式","slug":"_2-2-多线程方式-伪异步方式","link":"#_2-2-多线程方式-伪异步方式","children":[]}]},{"level":2,"title":"3. BIO通信方式深入分析","slug":"_3-bio通信方式深入分析","link":"#_3-bio通信方式深入分析","children":[{"level":3,"title":"3.1 模拟20个客户端并发请求，服务器端使用单线程:","slug":"_3-1-模拟20个客户端并发请求-服务器端使用单线程","link":"#_3-1-模拟20个客户端并发请求-服务器端使用单线程","children":[]},{"level":3,"title":"3.2 多线程来优化服务器端","slug":"_3-2-多线程来优化服务器端","link":"#_3-2-多线程来优化服务器端","children":[]},{"level":3,"title":"3.3 看看服务器端的执行效果","slug":"_3-3-看看服务器端的执行效果","link":"#_3-3-看看服务器端的执行效果","children":[]},{"level":3,"title":"3.4 问题根源","slug":"_3-4-问题根源","link":"#_3-4-问题根源","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":9.78,"words":2934},"filePathRelative":"java/io/java-io-bio.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
