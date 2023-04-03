const e=JSON.parse('{"key":"v-4fad20d2","path":"/db/redis/redis-z-interview-persistence.html","title":"Redis面试 - 持久化和内存","lang":"zh-CN","frontmatter":{"order":1050,"category":["数据库","Redis"],"description":"1 Redis 的持久化机制是什么？各自的优缺点？一般怎么用？ 1. RDB持久化是把当前进程数据生成快照保存到磁盘上的过程; 针对RDB不适合实时持久化的问题，Redis提供了AOF持久化方式来解决. 2. AOF是“写后”日志，Redis先执行命令，把数据写入内存，然后才记录日志。日志里记录的是Redis收到的每一条命令，这些命令是以文本形式保存。...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/db/redis/redis-z-interview-persistence.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Redis面试 - 持久化和内存"}],["meta",{"property":"og:description","content":"1 Redis 的持久化机制是什么？各自的优缺点？一般怎么用？ 1. RDB持久化是把当前进程数据生成快照保存到磁盘上的过程; 针对RDB不适合实时持久化的问题，Redis提供了AOF持久化方式来解决. 2. AOF是“写后”日志，Redis先执行命令，把数据写入内存，然后才记录日志。日志里记录的是Redis收到的每一条命令，这些命令是以文本形式保存。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1 Redis 的持久化机制是什么？各自的优缺点？一般怎么用？","slug":"_1-redis-的持久化机制是什么-各自的优缺点-一般怎么用","link":"#_1-redis-的持久化机制是什么-各自的优缺点-一般怎么用","children":[]},{"level":2,"title":"2 RDB 触发方式?","slug":"_2-rdb-触发方式","link":"#_2-rdb-触发方式","children":[]},{"level":2,"title":"3 那么如何保证数据一致性呢？","slug":"_3-那么如何保证数据一致性呢","link":"#_3-那么如何保证数据一致性呢","children":[]},{"level":2,"title":"4 在进行RDB快照操作的这段时间，如果发生服务崩溃怎么办？","slug":"_4-在进行rdb快照操作的这段时间-如果发生服务崩溃怎么办","link":"#_4-在进行rdb快照操作的这段时间-如果发生服务崩溃怎么办","children":[]},{"level":2,"title":"5 可以每秒做一次RDB快照吗？","slug":"_5-可以每秒做一次rdb快照吗","link":"#_5-可以每秒做一次rdb快照吗","children":[]},{"level":2,"title":"6 AOF是写前日志还是写后日志？","slug":"_6-aof是写前日志还是写后日志","link":"#_6-aof是写前日志还是写后日志","children":[]},{"level":2,"title":"7 如何实现AOF的？","slug":"_7-如何实现aof的","link":"#_7-如何实现aof的","children":[]},{"level":2,"title":"8 三种写回策略的优缺点","slug":"_8-三种写回策略的优缺点","link":"#_8-三种写回策略的优缺点","children":[]},{"level":2,"title":"9 什么是AOF重写？","slug":"_9-什么是aof重写","link":"#_9-什么是aof重写","children":[]},{"level":2,"title":"10 AOF重写会阻塞吗？","slug":"_10-aof重写会阻塞吗","link":"#_10-aof重写会阻塞吗","children":[]},{"level":2,"title":"11 AOF日志何时会重写？","slug":"_11-aof日志何时会重写","link":"#_11-aof日志何时会重写","children":[]},{"level":2,"title":"12 AOF重写日志时，有新数据写入咋整？","slug":"_12-aof重写日志时-有新数据写入咋整","link":"#_12-aof重写日志时-有新数据写入咋整","children":[]},{"level":2,"title":"13 主线程fork出子进程的是如何复制内存数据的？","slug":"_13-主线程fork出子进程的是如何复制内存数据的","link":"#_13-主线程fork出子进程的是如何复制内存数据的","children":[]},{"level":2,"title":"14 在重写日志整个过程时，主线程有哪些地方会被阻塞？","slug":"_14-在重写日志整个过程时-主线程有哪些地方会被阻塞","link":"#_14-在重写日志整个过程时-主线程有哪些地方会被阻塞","children":[]},{"level":2,"title":"15 为什么AOF重写不复用原AOF日志？","slug":"_15-为什么aof重写不复用原aof日志","link":"#_15-为什么aof重写不复用原aof日志","children":[]},{"level":2,"title":"16 Redis 过期键的删除策略有哪些?","slug":"_16-redis-过期键的删除策略有哪些","link":"#_16-redis-过期键的删除策略有哪些","children":[]},{"level":2,"title":"17 Redis 内存淘汰算法有哪些?","slug":"_17-redis-内存淘汰算法有哪些","link":"#_17-redis-内存淘汰算法有哪些","children":[]},{"level":2,"title":"18 Redis的内存用完了会发生什么？","slug":"_18-redis的内存用完了会发生什么","link":"#_18-redis的内存用完了会发生什么","children":[]},{"level":2,"title":"19 Redis如何做内存优化？","slug":"_19-redis如何做内存优化","link":"#_19-redis如何做内存优化","children":[]},{"level":2,"title":"20  Redis key 的过期时间和永久有效分别怎么设置？","slug":"_20-redis-key-的过期时间和永久有效分别怎么设置","link":"#_20-redis-key-的过期时间和永久有效分别怎么设置","children":[]},{"level":2,"title":"21 Redis 中的管道有什么用？","slug":"_21-redis-中的管道有什么用","link":"#_21-redis-中的管道有什么用","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":18.03,"words":5410},"filePathRelative":"db/redis/redis-z-interview-persistence.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};
