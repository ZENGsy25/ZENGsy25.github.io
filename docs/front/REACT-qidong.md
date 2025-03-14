# REACT基础
[[toc]]

## 安装脚手架
使用指令 npm i create-react-app -g，新建一个文件夹，使用指令全局安装在根目录下
## 创建项目
使用指令 create-react-app 1.react，然后在命令行创建项目，生成1.react项目文件夹和默认需要使用的包
## 启动项目文件
使用指令进入创建的项目 cd 1.react，
启动项目指令 npm start
## 什么是JSX
是一种JS和HTML混合语法，将组件的结构、数据甚至样式都聚合在一起定义组件

# Typescript
## 安装
- 首先必须再node环境运行
- npm install -g typescript 或者cnpm install -g typescript 或者 yarn global add typescript
## 创建tsconfig.json文件，并实现自动编译
- tsc --init 生成配置文件tsconfig.json；修改"outDir": "./dist",对应的地址文件夹
- 再点击终端->运行任务->typescript->tsc:监视-tsconfig.json实现自动编译
```js
ReactDOM.render(
    <h1>hellow</h1>,
    document.getElementById('root')
);
```
## 底部路由
- 代码结构
```js
├── package.json 
├── public 
│ └── index.html //根元素
├── src 
│   ├── style //公共样式文件
│   │     └── common.less //全局样式
│   ├── components //组件
│   │       └── Tabs //导航条
│   │             ├── index.less 
│   │             └── index.tsx 
│   ├── index.tsx 
│   ├── routes //路由组件
│   │     ├── Home //首页
│   │     │     └── index.tsx //首页组件
│   │     ├── Cart //购物车
│   │     │     └── index.tsx //购物车组件
│   │     └── Profile //个人中心
│   │           └── index.tsx //个人中心组件
│   └── store //仓库
│         ├── action-types.tsx 
│         ├── history.tsx 
│         ├── index.tsx 
│         └── reducers 
│                 ├── home.tsx 
│                 ├── index.tsx 
│                 ├── cart.tsx 
│                 └── profile.tsx 
├── tsconfig.json 
├── webpack.config.js

//要实现图片轮播功能，先写一个接口api，然后在接口里面写一个方法（getSliders）,拿到响应体；然后加了一个cation-type叫GET_SLIDERS获取轮播图数据，然后把响应体给到actionCreators里面的getsliders方法，getsliders返回了一个对象（包含type和payload），然后给到仓库的reducers/home.tsx，然后返回slider:action.payload.data。最后传入到组件里面，在组件里面调用方法获取数据并渲染出效果
```

//实现下拉加载功能
1、写一个接口api
2、写一个actionCreator
3、写一个reducer
4、写一个组件，在组件里面调用方法获取数据并渲染