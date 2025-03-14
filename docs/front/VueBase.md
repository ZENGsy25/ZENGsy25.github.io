# vue2.0 基础

[[toc]]

## 初始化安装

### 安装 yarn

- npm i -g yarn

### 生成 webpack 初始化配置

- npm init -y
- yarn init -y
- 不写-y 就手动配置初始化参数

### 安装 vue

- npm i vue
- npm i vue@2.7.8
- yarn add vue 默认按照最新版本
- yarn add vue@2.7.8 官网公布最稳定的 vue2

## 引用 vue

```js
<script src="./node_modules/vue/dist/vue.js" />
```

## mustache

- 小胡子语法 mustache，可做运算、取值、输出、三元、不能写 JS 语法
- 只要使用 vue 的数据，就需要在 data 中先声明在使用

```js
<div id='root'>
  {{msg}}
  {{name}}
  {{info.a}}
  {{ {} }}
  {{flag?1:2}}
  {{(function () {
    return 123
  })() }}
  {{msg + '123'}}
</div>
//所有数据都会合并到vm实例上，会被data覆盖掉，不要声明相同的名字
let vm = new Vue({
  el: '#root',
  data: {
    name: 'saturn',
    msg: 'hello',
    info: {},
    flag: true,
  },
})
```

## 数据响应式原理

- vue2.0 实现数据响应式变化，自动调用对象的 Object.defineProperty,不支持数组
- 会把数组的方法重写
- 如果给对象新增属性，是不会被监控的，
- 如果想给对象新增一个不存在的属性，obj.location = {...obj.location,a:1}。或者使用 vm.\$set 方法

## api

### 1、vm.\$el

- 代表的是就是当前的元素

```js
console.log(vm.msg)
console.log(vm.name)
```

### 2、vm.\$nextTick

- 延迟更新

```js
vm.msg:'zsy';
vm.msg:'abc';//dom更新是异步的
vm.$nextTick(function(){//dom操作时，延迟执行
  console.log(vm.$el.innerHTML);
})
```

### 3、vm.\$watch

- 监控

```js
//监控某个数据，数据发生变化后触发函数
vm.$watch('msg', function(newValue, oldValue) {
  console.log(newValue, oldValue)
})
```

### 4、vm.\$date

- 当前数据对象

### 5、vm.\$option

- 所有的选项

### 6、vm.\$set

### 7、vm.\$mount

- 挂载容器 单元测试，在容器中挂载 vue 实例时使用

## 指令

- v-开头的都是 vue 指令，有特定功能，操作 dom 元素

### v-for

- 循环时需要添加 key 属性，为了做 domdiff 操作
- vue2.5+版本要求循环的时候，必须增加 key 属性，为了做 domdiff

### v-bind

- 简写为：是单向动态绑定属性，所有指令中的值都是变量，如果是字符串需要加双引号

### template

- 是 vue 自带的标签，无意义幽灵标签，template 不能添加 key 属性，需要给真实的元素添加 key 属性

### v-if\v-else\v-show

- v-if 和 v-show 区别：if 处理是否增加到页面上，show 处理 style 的操作，(show 不支持 remplate 写法)

### v-on

- 绑定事件，可以简写成@符号，并且事件参数是\$event

### v-noce

- 只渲染一次，渲染以后会产生缓存，下次更新时会直接从缓存中获取，可以防止重复渲染

### v-html

- 可以把数据解析成一个 dom 然后通过 innerHTml 方式插入到容器中（不推荐使用）

```js
v-for
v-bind
v-modl
template
v-if\v-else\v-show
v-on
```

- 数据都需要循环来操作

```js
// 对象{} 数组[] 数字5 字符串string
<div id="root">

    <template v-for="(a,index) in arr">
      <!-- 有多个元素，需要区分名称，而且可以使用模板字符串 -->
      <li :key="index+'_1'" :a="index+'_1'">
        {{index}}{{a}}
      </li>
      <li :key=`${index}_2` :a=`${index}_2`>
        {{index}}{{a}}
      </li>
    </template>
    // 对象
    <template v-for="(key,value) in {a:1}">
      <li>对象：{{key}} {{value}}</li>
    </template>
    //数字
    <template v-for="(key,value) in 5">
      <li>数字：{{key}} {{value}}</li>
    </template>
    {{flag}}
    <button @click='fn'>切换</button>
  </div>
</div>
<script>
  let vm = new Vue({
    el:'#root',
    data:{
      arr:[1,2,3,4],
      flag:true,
    },
    methods: {//方法需要放到methods里面
        fn (e) {
          console.log(e)
          this.flag = !this.flag
        }
      }
  })
</script>
```

### v-model 表单元素数据绑定

- 双向数据绑定，（把 value 值绑定给元素，并且添加 input 事件）可以放到任何地方（不光是输入框）
- checkbox 单选框有两个值 true 和 false
- checkbox 复选框需要给 value 值
- radio 的分组
- select 下拉选择框
- textarea...

```JS
//指令测试
<div id="root">
    <!-- 不用指令写法 -->
    <input type="text" :value="msg" @input="change($event)">

    <!-- v-model指令写法 -->
    <input type="text" v-model="msg">
    {{msg}}
    <br>
    <!-- checkbox单选\复选框  两个值true\false -->
    <input type="checkbox" v-model="check">{{check}}
    <!-- 多个 []-->
    <input type="checkbox" v-model="checks" value="吃饭">
    <input type="checkbox" v-model="checks" value="睡觉">
    <input type="checkbox" v-model="checks" value="打豆豆">
    {{checks}}
    <br>
    <!-- 实现radio的分组，也是用过v-model -->
    男<input type="radio" v-model="gender" value="男">女<input type="radio" v-model="gender" value="女">
    <br>
    <!-- select下拉选择框 -->
    <select v-model="select" multiple>
      <option value="001" disabled>请选择</option>
      <option v-for="i in options" :value="i.id" :key="i.id">{{i.title}}</option>
    </select>
    {{select}}
  </div>
  <script>
    let vm = new Vue({
      el: '#root',
      data: {
        msg: 'hello',
        check: true,
        checks: [],
        gender: '男',
        select: [],
        options: [
          { title: "语文", id: "1" },
          { title: "数学", id: "2" },
          { title: "英语", id: "3" },
        ],
      },
      methods: {
        change (e) {
          console.log(e)
          this.msg = e.target.value
        }
      }
    });
  </script>
```

### 自定义指令

- 指令的作用就是操作 dom，有特定功能
- 全局指令，不需要每个组件都去引用，只需要全局引用即可
- 局部指令，在实例内部使用，之作用在当前实例上

```js
// popover 弹出框
<div id="root">
    <div v-color="'red'">红色</div>
    <!-- popover 弹出框 -->
    <!-- 获取输入框焦点就弹出文本框，失去输入框焦点使文本框消失 -->
    <!-- 添加一个父级，并添加事件 -->
    <div v-click-outside="hide">
      <input type="text" @focus="show">
      <div class="content" v-if="isSHow">
        content
      </div>
    </div>

  </div>
  <script src="./node_modules/vue/dist/vue.js"></script>
  <script>
    //全局指令，不需要每个组件都去引用，只需要全局引用即可
    //el:表示当前元素
    //bingdings:表示一些绑定的属性
    //vnode:表示当前的虚拟节点，常用属性vnode.context(当前上下文)
    Vue.directive('color', function (el, bingdings, vnode) {//vnode.context 上下文
      el.style.border = `1px solid  ${bingdings.value}`
    })
    let vm = new Vue({
      el: '#root',
      //局部指令，
      directives: {
        'click-outside' (el, bingdings, vnode) {
          //事件绑定给document，捕获到事件发生在谁的身上
          document.addEventListener('click', (e) => {
            //判断当前点击元素是不是包含在el元素里面
            if (!el.contains(e.target)) {
              console.log('失去焦点')
              console.log(bingdings.expression)//hide
              //vnode.context表示vm实例
              //取值vnode.context[bingdings.expression]？
              vnode.context[bingdings.expression]()//  相当于 vm.hide()

            }
          })
        }
      },
      data: {
        msg: 'hello',
        isShow: false,
      },
      methods: {
        show () {
          this.isShow = true
        },
        hide () {
          this.isSHow = false
        }
      }
    });
  </script>
```

```js
// 刷新页面时，输入框获取焦点
<div id="root">
    <div v-color="'red'">红色</div>
    <!-- 刷新页面获取焦点 -->
    <input type="text" v-focus="">
    {{xxx}}
  </div>
  <script>
    let vm = new Vue({
      el: '#root',
      //局部指令，
      directives: {
        focus: {//focus默认调用bind和update方法
          bing (el) {//绑定时执行

          },
          inserted (el) {//元素插入到页面的时候执行
            //获取焦点
            el.focus()
          },
          //所有的数据发生变化时，都会重新执行
          update (el) {//依赖的数据发生变化的时候执行
            console.log(123)
          }
        }
      },
      data: {
        msg: 'hello',
        isShow: false,
        xxx: 'context'
      },
      methods: {
        show () {
          this.isShow = true
        },
        hide () {
          this.isSHow = false
        }
      }
    });
  </script>
```

### filter 过滤

- 对展现的数据进行包装，不改变原来的数据
- 过滤器和指令都是没有 this 指向的

```js
// 字母大写过滤
<div id="root">
    <!-- | 管道符，用来过滤 -->
    {{xxx | toUpper()}}
  </div>
  <script src="./node_modules/vue/dist/vue.js"></script>
  <script>
    //全局过滤器
    Vue.filter('toUpper', function (value, count = 1) {
      return value.slice(0, count).toUpperCase() + value.slice(count)
    })
    let vm = new Vue({
      el: '#root',
      //局部过滤器
      // filters: {
      //   toUpper (value, count = 1) {
      //     return value.slice(0, count).toUpperCase() + value.slice(count)
      //   }
      // },
      data: {
        msg: 'hello',
        isShow: false,
        xxx: 'helloqqqqq'
      },
    });
  </script>
```
