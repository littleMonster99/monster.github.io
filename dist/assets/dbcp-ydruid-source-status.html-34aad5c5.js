import{_ as t,W as d,X as e,a0 as a}from"./framework-f64bc974.js";const o={},r=a('<h1 id="druid源码学习-九-druiddatasource和druidconnection中的状态" tabindex="-1"><a class="header-anchor" href="#druid源码学习-九-druiddatasource和druidconnection中的状态" aria-hidden="true">#</a> Druid源码学习（九）-DruidDataSource和DruidConnection中的状态</h1><h2 id="_1-druidpooledconnection中的状态" tabindex="-1"><a class="header-anchor" href="#_1-druidpooledconnection中的状态" aria-hidden="true">#</a> 1. DruidPooledConnection中的状态：</h2><table><thead><tr><th>字段</th><th>类型</th><th>所在类</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>closed</td><td>volatile boolean</td><td>DruidPooledConnection</td><td>FALSE</td><td>关闭状态，recycle到连接池中的连接会修改为true。但是这个状态通常只在checkStateInternal中单独使用。判断连接是否关闭需要结合(closed or disable)</td></tr><tr><td>disable</td><td>volatile boolean</td><td>DruidPooledConnection</td><td>FALSE</td><td>不可用状态，当连接出现异常调用handleFatalError之后，将此状态设置为true.之后连接处于不可用状态。</td></tr><tr><td>traceEnable</td><td>volatile boolean</td><td>DruidPooledConnection</td><td>FALSE</td><td>traceEnable跟踪开关，默认为false,这个开关配合abandoned使用，当DruidDataSource开启removeAbandoned之后，这个状态设置为true,当连接从activeConnections中取出的时候，设置为false.</td></tr><tr><td>abandoned</td><td>volatile boolean</td><td>DruidPooledConnection</td><td>FALSE</td><td>连接泄露检测状态，默认为false,当removeAbandoned开始执行之后，对符合条件的连接，将其设置为true的时候开启连接泄露检测。</td></tr><tr><td>running</td><td>volatile boolean</td><td>DruidPooledConnection</td><td>FALSE</td><td>运行状态，执行Statement之前的beforeExecute设置为true,执行完成之后afterExecute方法设置为false.</td></tr><tr><td>active</td><td>volatile boolean</td><td>DruidConnectionHolder</td><td>FALSE</td><td>活动状态,默认值为false,getConnectionInternal之后设置为true,discardConnection设置为false,recycle如果物理连接被关闭或者测试连接不通，以及回收成功，都修改为false。这是连接被用户线程调用的持有状态。标识连接被用户线程持有。</td></tr><tr><td>discard</td><td>volatile boolean</td><td>DruidConnectionHolder</td><td>FALSE</td><td>关闭状态，默认为false,调用discardConnection方法 或者recycle出现异常的时候改为true,之后关闭连接，</td></tr></tbody></table><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220525225828469.png" alt="image-20220525225828469" tabindex="0" loading="lazy"><figcaption>image-20220525225828469</figcaption></figure><h2 id="_2-druiddatasource中的状态" tabindex="-1"><a class="header-anchor" href="#_2-druiddatasource中的状态" aria-hidden="true">#</a> 2. DruidDataSource中的状态：</h2><table><thead><tr><th>字段</th><th>类型</th><th>所在类</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>closing</td><td>volatile boolean</td><td>DruidDataSource</td><td>FALSE</td><td>关闭中状态，调用close方法设置为true，如果关闭完成，则这个状态设置为false.</td></tr><tr><td>closed</td><td>volatile boolean</td><td>DruidDataSource</td><td>FALSE</td><td>关闭完成状态,close方法调用完成为true.这样连接池将不可使用。</td></tr><tr><td>enable</td><td>volatile boolean</td><td>DruidDataSource</td><td>TRUE</td><td>可用状态，默认为true,当调用close完成之后，设置为false。这样连接池将不可用。</td></tr><tr><td>keepAlive</td><td>volatile boolean</td><td>DruidDataSource</td><td>FALSE</td><td>keepAlive开关，由用户自行设置，如果开启了keepAlive，则在shrink方法中将符合条件的连接回收到keepAliveConnections中，并进行复用。</td></tr><tr><td>inited</td><td>volatile boolean</td><td>DruidDataSource</td><td>FALSE</td><td>初始化状态，默认为false,调用init之后设置为true标识初始化完成，之后调用restart设置为false。</td></tr></tbody></table><p>各状态关系：</p><figure><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/6cbb8cdd3d29cf99c3e4f012a37640a2.png" alt="6cbb8cdd3d29cf99c3e4f012a37640a2" tabindex="0" loading="lazy"><figcaption>6cbb8cdd3d29cf99c3e4f012a37640a2</figcaption></figure><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2><p><a href="Druid%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB9-DruidDataSource%E5%92%8CDruidConnection%E4%B8%AD%E7%9A%84%E7%8A%B6%E6%80%81">https://blog.csdn.net/dhaibo1986/article/details/121407085?spm=1001.2014.3001.5502</a></p>',10),i=[r];function n(c,l){return d(),e("div",null,i)}const s=t(o,[["render",n],["__file","dbcp-ydruid-source-status.html.vue"]]);export{s as default};
