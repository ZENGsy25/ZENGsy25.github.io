# 列表渲染与key问题
[[toc]]
## 准备工作
- 1:vue文档
  [vue2x](https://v2.cn.vuejs.org/)
- 2: 编辑器(vscode)

## 指令语法学习
- 指令： v-开头 有特定能的 操作dom元素
### v-bind
- 动态地绑定一个或多个 attribute。
- 数据绑定 v-bind:key  v-bind:key 可以替换成 :key
```js
<img v-bind:src="imageSrc">
---------------------------------------------
new Vue({
    el:'#app',
    data:{
        imageSrc: 'https://www.baidu.com/img/flexible/logo/pc/result.png'
    }
})
```
### v-for
- `v-for`指令是 用来遍历数据(数组或者对象)
- 我们可以用 v-for 指令基于一个数组来渲染一个列表。v-for 指令需要使用 `item in items` 形式的特殊语法，其中 items 是源数据数组，而 item 则是被迭代的数组元素的别名。
- 基础用法
```html
<ul id="app">
  <li v-for="item in items" >
    {{ item.message }}
  </li>
</ul>
---------------------------------------------
<script>
    var example1 = new Vue({
        el: '#app',
        data: {
            items: [
                {
                    message: 'one'
                },
                {
                    message: 'two'
                }
            ]
        }
    })
</script>
```
## 列表渲染相关
### 索引使用
```html
<ul id="app">
  <li v-for="(item, index) in items" >
     {{ index }} - {{ item.message }}
  </li>
</ul>
---------------------------------------------
<script>
    var example1 = new Vue({
        el: '#app',
        data: {
            items: [
               {
                    message: 'one'
                },
                {
                    message: 'two'
                }
            ]
        }
    })
</script>
```
### 用`of`替代`in`
- 你也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法：
```html
<div v-for="item of items"></div>
```
### 遍历对象
- 可以用 v-for 来遍历一个对象的 property。
```html
<ul id="app" class="demo">
  <li v-for="value in object">
    {{ value }}
  </li>
</ul>
---------------------------------
<script>
    new Vue({
    el: '#app',
    data: {
            object: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            }
    }
    })
</script>
```
- 可以提供第二个的参数为 property 名称 (也就是键名)：
```html
<div v-for="(value, name) in object">
  {{ name }}: {{ value }}
</div>
```

## key的使用
- 2.2.0+ 的版本里，当在组件上使用 `v-for` 时，`key` 现在是必须的。
```html
<ul id="app">
  <li v-for="(item,index) in items" :key="item.id">
    {{ item.message }}
  </li>
</ul>
---------------------------------------------
<script>
    var example1 = new Vue({
        el: '#app',
        data: {
            items: [
                { message: 'one',index:1 },
                { message: 'two', index:2 }
            ]
        }
    })
</script>
```
## 项目常遇的问题
### 注意尽量不要使用index(索引)作为可以
- 下面例子使用index 会出现异常问题 
-  一般不要给动态的数据 用做key值
```html
<div id="app">
    <ul id="example-1">
        <li v-for="(item,index) in items" :key="index">
            {{ item.message }}  <input type="text">
        </li>
        <!--
            <li key='1'>one  <input type="text"> </li>
            <li key='2'>two  <input type="text"> </li>
            <li key='3'>three  <input type="text"> </li>
        -->
    </ul>
    <button @click="sortFn">反转</button>
</div>
<script>
let vm = new Vue({
        el:'#app',
        data:{
            items: [
                { message: 'one' },
                { message: 'two' },
                { message: 'three' },
            ]
        },
        methods:{
            sortFn(){
                this.items.reverse()
            }
        }
    })
</script>
```

## 欢迎语:
- hello 各位小伙伴大家晚上好，我是今天的讲师宋格，欢迎大家的到来。这次给大家带来的课程是`列表渲染与key的问题`。
为兼容各位同学的基础，我会由浅入深，从基础用法到实际的工作场景，采用一讲一问一答的形式为大家讲解本次课程.每小节都会留一个提问环节,如果在讲解过程中遇到问题，在提问环节统一为大家解答，为了增加课程的趣味性，我也会与大家进行互动
