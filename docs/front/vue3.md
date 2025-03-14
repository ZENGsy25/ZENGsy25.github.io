# vue3 基础汇总

[[toc]]

## 生命周期

- setup vue3 新增
- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeUnmount
- unmounted
- 最常用的 mounted、update、unmounted

### setup

- setup() 钩子是在组件中使用组合式 API 的入口
- setup()钩子的执行时机在 beforeCreate 之前，this 是 undefined
- 我们可以使用响应式 API 来声明响应式的状态，在 setup() 函数中返回的对象会板和组件实例。
- 其他的选项也可以通过组件实例来获取 setup() 暴露的属性：

```js
export default {
  props: {
    title: String,
  },
  //代替vue2中的data
  setup(props, context) {
    const count = ref(0);
    // 返回值会暴露给模板和其他的选项式 API 钩子
    return {
      count,
    };
  },
  mounted() {
    console.log(this.count); // 0
  },
};
```

### props

- setup 函数的第一个参数是组件的
- 值为对象，包含：组件外部传递过来，且组建内部声明接收了的属性

### context

- 上下文对象
- setup 函数的第二个参数是组件的

  - - attrs 值为对象，包含：组件外部传递过来的，且没有在 props 配置中声明的属性，相当于 vue2 中的 this.\$attrs
  - - emit 自定义事件的函数，相当于 vue2 中的 this.\$emit
  - - slots 收到的插槽内容，相当于 vue2 中的 this.\$slots
  - - 注意：attrs 和 slots 的属性都不是响应式的。如果你想要基于 attrs 或 slots 的改变来执行副作用，那么你应该在 onBeforeUpdate 生命周期钩子中编写相关逻辑
  - - expose 函数用于显式地限制该组件暴露出的属性，当父组件通过模板引用访问该组件的实例时，将仅能访问 expose 函数暴露出的内容

  ```js
  export default {
    setup(props, { expose }) {
      // 让组件实例处于 “关闭状态”
      // 即不向父组件暴露任何东西
      expose();

      const publicCount = ref(0);
      const privateCount = ref(0);
      // 有选择地暴露局部状态
      expose({ count: publicCount });
    },
  };
  ```

### ref

- 需要单独引入
- ref 自定义的数据：一般为基本数据类型；操作数据需要.value.读取数据时，模版中直接读取，不需要.value

```js
import { ref } from "vue";
export default {
  name:'Demo'
  setup(props, context) {
    let name = ref("曾税有");
    return {
      name
    }
  },
};
```

### reactive

- 需要单独引入
- reactive 定义的数据：一般为对象或者数组等复杂数据类型；操作和读取数据时均不需要.value

```js
import { reactive } from "vue";
export default {
  name:'Demo'
  setup(props, context) {
    let person = reactive({
      name:'曾税有',
      age:18
    });
    return {
      person
    }
  },
};
```

### 计算属性 computed

- 可以兼容 vue2 中写法

```js
import { computed } from "vue";
export default {
  name:'Demo'
  setup(props, context) {
    let person = reactive({
      name:'曾税有',
      age:18
    });
    //计算属性(不考虑修改的情况)
    person.msg = computed(()=>{
      return person.name + '-' + person.age
    })
    //计算属性(考虑修改的情况)
    person.msg = computed({
      get(){
      return person.name + '-' + person.age
      },
      set(value){
        const fullMsg = value.split('-')
        person.name = fullMsg[0]
        person.age = fullMsg[1]
      }
    })
    return {
      person
    }
  },
};
```

### 监视属性 watch 函数

- 可以兼容 vue2 中写法

### watchEffect 函数

- vue3 新增

### 自定义 hook、hooks

### toRef、torefs

### shallowReactive 和 shallowRef

### readonly 和 shallowReadonly
