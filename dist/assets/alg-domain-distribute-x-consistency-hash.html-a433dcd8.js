const e=JSON.parse('{"key":"v-42e67ce2","path":"/develop/algorithm/alg-domain-distribute-x-consistency-hash.html","title":"分布式算法-一致性Hash算法","lang":"zh-CN","frontmatter":{"description":"一致性Hash算法是个经典算法，Hash环的引入是为解决单调性(Monotonicity)的问题；虚拟节点的引入是为了解决平衡性(Balance)问题。 1. 一致性Hash算法引入 在分布式集群中，对机器的添加删除，或者机器故障后自动脱离集群这些操作是分布式集群管理最基本的功能。如果采用常用的hash(object)%N算法，那么在有机器添加或者删除...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/develop/algorithm/alg-domain-distribute-x-consistency-hash.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"分布式算法-一致性Hash算法"}],["meta",{"property":"og:description","content":"一致性Hash算法是个经典算法，Hash环的引入是为解决单调性(Monotonicity)的问题；虚拟节点的引入是为了解决平衡性(Balance)问题。 1. 一致性Hash算法引入 在分布式集群中，对机器的添加删除，或者机器故障后自动脱离集群这些操作是分布式集群管理最基本的功能。如果采用常用的hash(object)%N算法，那么在有机器添加或者删除..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 一致性Hash算法引入","slug":"_1-一致性hash算法引入","link":"#_1-一致性hash算法引入","children":[]},{"level":2,"title":"2.一致性Hash算法简介","slug":"_2-一致性hash算法简介","link":"#_2-一致性hash算法简介","children":[]},{"level":2,"title":"3. 一致性Hash算法","slug":"_3-一致性hash算法","link":"#_3-一致性hash算法","children":[{"level":3,"title":"3.1 Hash环","slug":"_3-1-hash环","link":"#_3-1-hash环","children":[]},{"level":3,"title":"3.2 删除节点","slug":"_3-2-删除节点","link":"#_3-2-删除节点","children":[]},{"level":3,"title":"3.3 增加节点","slug":"_3-3-增加节点","link":"#_3-3-增加节点","children":[]},{"level":3,"title":"3.4 不平衡的问题","slug":"_3-4-不平衡的问题","link":"#_3-4-不平衡的问题","children":[]},{"level":3,"title":"3.5 虚拟节点","slug":"_3-5-虚拟节点","link":"#_3-5-虚拟节点","children":[]}]},{"level":2,"title":"4. 一致性Hash的应用","slug":"_4-一致性hash的应用","link":"#_4-一致性hash的应用","children":[{"level":3,"title":"4.1 nginx负载均衡","slug":"_4-1-nginx负载均衡","link":"#_4-1-nginx负载均衡","children":[]},{"level":3,"title":"4.2 Redis集群模式","slug":"_4-2-redis集群模式","link":"#_4-2-redis集群模式","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":7.77,"words":2330},"filePathRelative":"develop/algorithm/alg-domain-distribute-x-consistency-hash.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
