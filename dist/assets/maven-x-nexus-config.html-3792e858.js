const e=JSON.parse('{"key":"v-4c535c63","path":"/develop/maven/maven-x-nexus-config.html","title":"Maven配置nexus私服","lang":"zh-CN","frontmatter":{"description":"1. 简介 Maven配置nexus私服，将远程仓库设置成本地搭建的Nexus私服 maven 默认的settings.xml地址。可以通过idea查看 image-20211004220055672 2. 修改maven的settings.xml 编辑内容如下 3. maven项目测试 1. 创建项目 构建项目，可以看到在构建的过程中使用的是nexu...","head":[["meta",{"property":"og:url","content":"http://www.mr-monster.site/develop/maven/maven-x-nexus-config.html"}],["meta",{"property":"og:site_name","content":"Java学习笔记"}],["meta",{"property":"og:title","content":"Maven配置nexus私服"}],["meta",{"property":"og:description","content":"1. 简介 Maven配置nexus私服，将远程仓库设置成本地搭建的Nexus私服 maven 默认的settings.xml地址。可以通过idea查看 image-20211004220055672 2. 修改maven的settings.xml 编辑内容如下 3. maven项目测试 1. 创建项目 构建项目，可以看到在构建的过程中使用的是nexu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-03-30T07:30:48.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-03-30T07:30:48.000Z"}]]},"headers":[{"level":2,"title":"1. 简介","slug":"_1-简介","link":"#_1-简介","children":[]},{"level":2,"title":"2. 修改maven的settings.xml","slug":"_2-修改maven的settings-xml","link":"#_2-修改maven的settings-xml","children":[]},{"level":2,"title":"3. maven项目测试","slug":"_3-maven项目测试","link":"#_3-maven项目测试","children":[]},{"level":2,"title":"4. 配置认证，将打包好的项目上传到nexus中","slug":"_4-配置认证-将打包好的项目上传到nexus中","link":"#_4-配置认证-将打包好的项目上传到nexus中","children":[{"level":3,"title":"4.1 在setting.xml中添加server","slug":"_4-1-在setting-xml中添加server","link":"#_4-1-在setting-xml中添加server","children":[]},{"level":3,"title":"4.2 修改项目的pom.xml文件：","slug":"_4-2-修改项目的pom-xml文件","link":"#_4-2-修改项目的pom-xml文件","children":[]},{"level":3,"title":"4.3 上传到私服","slug":"_4-3-上传到私服","link":"#_4-3-上传到私服","children":[]},{"level":3,"title":"4.4 在web界面确认上传成功：","slug":"_4-4-在web界面确认上传成功","link":"#_4-4-在web界面确认上传成功","children":[]}]},{"level":2,"title":"5. 上传到maven-release仓库","slug":"_5-上传到maven-release仓库","link":"#_5-上传到maven-release仓库","children":[{"level":3,"title":"5.1 修改 pom.xml","slug":"_5-1-修改-pom-xml","link":"#_5-1-修改-pom-xml","children":[]},{"level":3,"title":"5.2 继续 mvn deploy","slug":"_5-2-继续-mvn-deploy","link":"#_5-2-继续-mvn-deploy","children":[]},{"level":3,"title":"5.3 在web界面中查看，如下：","slug":"_5-3-在web界面中查看-如下","link":"#_5-3-在web界面中查看-如下","children":[]}]},{"level":2,"title":"参考文章","slug":"参考文章","link":"#参考文章","children":[]}],"git":{"createdTime":1680161448000,"updatedTime":1680161448000,"contributors":[{"name":"fanweihua","email":"littlemonster163@163.com","commits":1}]},"readingTime":{"minutes":2.59,"words":777},"filePathRelative":"develop/maven/maven-x-nexus-config.md","localizedDate":"2023年3月30日","autoDesc":true}');export{e as data};