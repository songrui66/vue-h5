# vue-h5

> vue移动端项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


<!--  搭建项目说明
  1. 安装 cnpm   npm install -g cnpm --registry=https://registry.npm.taobao.org
  2. 安装 vue    cnpm install vue
///////////////////////////////////////////////////////////////////////////////
  3. 安装vue-cli脚手架构建工具   cnpm install --global vue-cli

  4. 创建一个基于 webpack 模板的新项目  vue init webpack vue-h5   // 项目的名称不能大写   (直接创建)


Project name (my-project) # 项目名称（我的项目）
Project description (A Vue.js project) # 项目描述一个Vue.js 项目
Author 作者（你的名字）
Install vue-router? (Y/n) # 是否安装Vue路由，也就是以后是spa（但页面应用需要的模块）
Use ESLint to lint your code? (Y/n) # 使用 ESLint 到你的代码？ （Y [ yes ] / N [ no ]）
Pick an ESLint preset (Use arrow keys) # 选择一个预置ESLint（使用箭头键）
Setup unit tests with Karma + Mocha? (Y/n) # 设置单元测Karma + Mocha？ （Y/ N）
Setup e2e tests with Nightwatch? (Y/n) # 设置端到端测试，Nightwatch？ （Y/ N）

5. 安装项目所需要的依赖

cd my-project
git init
cnpm install

6. 运行项目
cnpm run dev

 -->
<!-- ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->


<!--
     vux 简单使用   // 网址  https://blog.csdn.net/jinyt_/article/details/80423567

 1.   npm install vux --save

 2.  npm install vux-loader --save-dev
    vux2必须配合vux-loader使用, 请在build/webpack.base.conf.js里参照如下代码进行配置：

    const vuxLoader = require('vux-loader')
    const webpackConfig = originalConfig // 原来的 module.exports 代码赋值给变量 webpackConfig

    module.exports = vuxLoader.merge(webpackConfig, {
      plugins: ['vux-ui']
    })
    安装less-loader以正确编译less源码

 3.   npm install less less-loader --save-dev
    安装 yaml-loader 以正确进行语言文件读取

 4.   npm install yaml-loader --save-dev


 5. 举例：

      import { XHeader } from 'vux'


      export default {
        components: {
          XHeader
        }

 -->
