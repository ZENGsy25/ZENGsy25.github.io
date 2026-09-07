/*
 * @Author: ZENGsy25 510064377@qq.com
 * @Date: 2023-12-19 15:09:10
 * @LastEditors: ZENGsy25 510064377@qq.com
 * @LastEditTime: 2024-04-11 13:34:20
 * @FilePath: \线上_blog\docs\.vuepress\config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  title: "Saturn-blog",
  base: "/",
  themeConfig: {
    editLinkText: "编辑此页",
    lastUpdated: "上次更新",
    nav: [
      {
        text: "前端",
        link: "/front/",
      },
      {
        text: "基础",
        link: "/base/",
      },
    ],
    sidebar: {
      "/base/": [
        {
          title: "js",
          children: ["js", "ask"],
        },
      ],
      "/front/": [
        {
          title: "CSS基础",
          collapsable: false,
          children: ["css"],
        },
        {
          title: "js",
          collapsable: false,
          children: ["jsBase"],
        },
        {
          title: "学习",
          collapsable: false,
          children: ["study"],
        },
        {
          title: "JS笔记",
          collapsable: false,
          children: ["JSbase1"],
        },
        {
          title: "语言基础笔记",
          collapsable: false,
          children: ["LANbase"],
        },
        {
          title: "GIT笔记",
          collapsable: false,
          children: ["GIT"],
        },
        {
          title: "练习笔记",
          collapsable: false,
          children: ["STnote"],
        },
        {
          title: "REACT",
          collapsable: false,
          children: ["REACT-qidong"],
        },
        {
          title: "网络请求",
          collapsable: false,
          children: ["XHRHttpRequest"],
        },
        {
          title: "REACT全家桶",
          collapsable: false,
          children: ["ReactNote", "React-2022", "REACT-ketang"],
        },
        {
          title: "Vue 基础",
          collapsable: false,
          children: ["VueNew"],
        },
        {
          title: "Vue3 基础",
          collapsable: false,
          children: ["vue3"],
        },
        {
          title: "Ant Design",
          collapsable: false,
          children: ["Antd"],
        },
        {
          title: "Type Script",
          collapsable: false,
          children: ["TypeScript"],
        },
        {
          title: "C# 基础1",
          collapsable: false,//是否可以折叠
          children: ["C#Base","C#Base2"],
        },
        {
          title: "JAVA 基础",
          collapsable: false,
          children: ["JAVA"],
        },
      ],
    },
  },
};
