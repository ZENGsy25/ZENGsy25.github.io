# 复习 React 全家桶

[[toc]]

## 表达式

- 用大括号包裹所有的表达式：{ JS 表达式 }
- 常用的表达式

```js
// 字符串、数值、布尔值、null、undefined、object（ [] / {} ）
// 1 + 2、'abc'.split('')、['a', 'b'].join('-')
// fn()
// if 语句/ switch-case 语句/ 变量声明语句，这些叫做语句，不是表达式，不能出现在 {} 中
const name = saturn;
export function App() {
  return <div className="App">{name}</div>;
}
export default App;
```

## 列表渲染

- 技术方案：数组的 map()方法，return 一个需要重复渲染的模板
- 注意：遍历时需要设定一个类型为 number\string 的 key 属性，提高 fidd 性能
- key 属性仅在内部使用，不会出现在真是 DOM 结构中

```js
const songs = [
  { id: "1", name: "痴心绝对" },
  { id: "2", name: "华为信箱" },
  { id: "3", name: "至少还有你" },
];

export function App() {
  return (
    <div className="App">
      <div>
        {songs.map((song) => (
          <div key={song.id}>{song.name}</div>
        ))}
      </div>
    </div>
  );
}
```

## 条件渲染

- 技术方案：三元表达式、逻辑&&运算
- 多分支的赋值逻辑时，收敛为一个函数，通过函数的来写分支逻辑，模板中值调用函数

```js
const flag = true;

export function App() {
  return (
    <div className="App">
      <div>
        {flag ? <div>hellow!</div> : null}
        {true && <div>hellow! world</div>}
      </div>
    </div>
  );
}

export default App;
```

## 函数组件

- 函数名首字母大写，必须有返回值
- 返回的内容就是函数组件渲染的内容
- 渲染时使用函数名称作为组件标签名称，标签可以成对出现也可以自闭合

```js
function Hello() {
  //绑定事件
  //语法：on + 事件名称 = {事件处理程序}
  //事件处理程序需要抽离单独用函数包裹
  const clickHandler = () => {
    console.log("事件触发");
  };
  return <div onClick={clickHandler}>hello</div>;
}

export function App() {
  return (
    <div className="App">
      {/** 渲染函数组件 */}
      <Hello />
    </div>
  );
}

export default App;
```

## 类组件

- 使用 ES6 的 class 创建的组件，叫做类（class）组件
- 类组件应该继承 React.Component 父类，从而使用父类中提供的方法或属性
- 类组件必须提供 render() 方法 render() 方法必须有返回值
- 返回值就是需要渲染的内容

```js
import { Component } from "react";

class Hello extends Component {
  //绑定事件
  //语法：on + 事件名称 = {事件处理程序}
  //事件处理程序需要抽离单独用函数包裹
  //类组件标准写法（事件回调函数，避免this指向问题）
  clickHandler = () => {
    console.log("事件触发");
  };
  render() {
    // {this.clickHandler}这样写的原因：箭头函数的this永远指向其父类（clickHandler），
    // clickHandler的this又是指向当前组件的实例对象
    return <div onClick={this.clickHandler}>hello</div>;
  }
}

export function App() {
  return (
    <div className="App">
      {/** 渲染类组件 */}
      <Hello />
    </div>
  );
}

export default App;
```

## 事件对象

- 通过事件处理程序的参数获取事件对象 event（e）

```js
function HelloFn() {
  // 定义事件回调函数
  const clickHandler = (e) => {
    //阻止事件对象的默认行为（a标签的跳转）
    e.preventDefault();
    console.log("事件被触发了", e);
  };
  return (
    // 绑定事件
    <a href="http://www.baidu.com/" onClick={clickHandler}>
      百度
    </a>
  );
}
```

## 事件传参

- 通过事件传递自定义参数
- 1、只需要一个额外参数时，将事件处理程序改成箭头函数的处理方式:
  - {clickHandler}改成() => clickHandler('这是传递的参数')
- 2、既需要事件对象 e，又需要额外参数时：

  - (e) => clickHandler(e,'这是传递的参数')

  ```js
  function Hello() {
    const clickHandler = (e, props) => {
      console.log("事件触发", e, props);
    };
    return <div onClick={(e) => clickHandler(e, "这是传递的参数")}>hello</div>;
  }

  export function App() {
    return (
      <div className="App">
        {/** 渲染函数组件 */}
        <Hello />
      </div>
    );
  }

  export default App;
  ```

## 组件的状态 state

- 定义状态必须使用 state，state 的值是一个对象结构，表示一个组件可以有多个数据状态
- 修改 state 中的属性不可以通过直接赋值，必须通过 setState 方法进行修改

```js
class App extends React.Component {
  // 初始化状态
  state = {
    count: 0,
  };
  //不要直接修改state中的值，必须通过setState方法进行修改
  setCount = () => {
    console.log("123");
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.setCount}>+1</button>
      </>
    );
  }
}

export default App;
```

## 组件状态修改，通过...语法展开原有属性

- 通过...语法先展开原来的状态，然后在此基础上添加属性

```js
class App extends React.Component {
  // 初始化状态
  state = {
    count: 0,
    list: [1, 2, 3],
    person: {
      name: "jack",
      age: 18,
    },
  };
  //不要直接修改state中的值，必须通过setState方法进行修改
  changeState = () => {
    this.setState({
      //通过...语法先展开原来的list，然后在此基础上添加属性4,5
      list: [...this.state.list, 4, 5],
      person: {
        //通过...语法先展开原来的person，
        ...this.state.person,
        //在新的person的基础上修改属性
        name: "saturn",
        age: 20,
      },
    });
  };
  render() {
    const list = this.state.list;
    return (
      <>
        <div>
          {list.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div>
          {this.state.person.name}
          {this.state.person.age}
        </div>
        <button onClick={this.changeState}>修改</button>
      </>
    );
  }
}

export default App;
```

## 受控表单

- 1、在组件的 state 中声明一个组件的状态数据

- 2、将状态数据设置为 input 标签元素的 value 属性的值

- 3、为 input 添加 change 事件，在事件处理程序中，通过事件对象 e 获取到当前文本框的值（即用户当前输入的值）

- 4、调用 setState 方法，将文本框的值作为 state 状态的最新值

```js
class App extends React.Component {
  state = {
    message: "默认内容",
  };
  changeState = (e) => {
    console.log("事件对象", e);
    this.setState({
      message: e.target.value,
    });
  };
  render() {
    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.message}
            onChange={this.changeState}
          />
        </div>
      </>
    );
  }
}

export default App;
```

## 非受控表单 createRef 函数

- 导入 createRef 函数
- 调用 createRef 函数，创建一个 ref 对象，存储到名为 inptRef 的实例属性中
- 为 input 添加 ref 属性，值为 inptRef
- 在按钮的事件处理程序中，通过 inptRef.current 即可拿到 input 对应的 dom 元素，而其中 inptRef.current.value 拿到的就是文本框的值

```js
class App extends React.Component {
  //使用createRef产生一个存放dom的对象容器
  inptRef = createRef();

  changeState = () => {
    console.log("123456");
    console.log(this.inptRef.current);
    console.log(this.inptRef.current.value);
  };
  render() {
    return (
      <>
        <div>
          {/* ref绑定 获取真实dom */}
          <input type="text" ref={this.inptRef} />
          <button onClick={this.changeState}>获取输入框</button>
        </div>
      </>
    );
  }
}

export default App;
```

## 组件通讯-父传子

- 父组件提供要传递的数据 - state

- 给子组件标签添加属性值为 state 中的数据
- 子组件中通过 props 接收父组件中传过来的数据

- 类组件使用 this.props 获取 props 对象
- 函数式组件直接通过参数获取 props 对象

- 注意:props 是只读对象（readonly）
- 根据单项数据流的要求，子组件只能读取 props 中的数据，不能进行修改，可通过父组件修改
- props 可以传递任意数据：数字、字符串、布尔值、数组、对象、函数、JSX

```js
function SonA(props) {
  //结构赋值，拿到props下面的各种属性
  const { message, age, fn, list, obj, span } = props;
  return (
    //props是一个对象，里面存放通过父组件传递过来的所有属性
    <div>
      函数子组件
      {message}
      {age}
      {fn}
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {obj.name}
      {span}
    </div>
  );
}
class SonB extends React.Component {
  render() {
    return (
      //类组件必须通过this关键字获取props属性
      <div>
        类子组件
        {this.props.message}
      </div>
    );
  }
}

class App extends React.Component {
  //父组件需要传递的数据在state里
  //可以传递任意数据
  state = {
    message: "传递属性",
    list: [1, 2, 3, "传递数组"],
    obj: { name: "saturn", age: "20" },
    span: "span标签",
  };
  fn = () => {
    console.log("传递函数");
  };
  render() {
    return (
      <div>
        {/*在子组件身上绑定需要传递的属性，属性名可以自定义*/}
        <SonA
          message={this.state.message}
          list={this.state.list}
          obj={this.state.obj}
          fn={this.fn}
          span={<span>{this.state.span}</span>}
        />
        <SonB message={this.state.message} />
      </div>
    );
  }
}

export default App;
```

## 组件通讯-子传父（回调函数）

- 父组件提供一个回调函数 - 用于接收数据
- 将函数作为属性的值，传给子组件
- 子组件通过 props 调用 回调函数
- 将子组件中的数据作为参数传递给回调函数

```js
function SonA(props) {
  const { fn } = props;
  function childFn() {
    //调用父组件时，传递实参message
    const message = "子组件传递给父组件的数据";
    fn(message);
  }
  return (
    //props是一个对象，里面存放通过父组件传递过来的所有属性
    <div>
      <div>
        函数子组件
        {fn}
      </div>
      <button onClick={childFn}>子传父</button>
    </div>
  );
}

class App extends React.Component {
  //形参childMessage用于接收子组件传递过来的属性
  fn = (childMessage) => {
    console.log(childMessage);
  };
  render() {
    return (
      <div>
        {/*在子组件身上绑定需要传递的属性，属性名可以自定义*/}
        <SonA fn={this.fn} />
      </div>
    );
  }
}

export default App;
```

## 组件通讯-跨组件通讯

- 1、创建 Context 对象 导出 Provider 和 Consumer 对象
- 2、使用 Provider 包裹根组件提供数据
- 3、需要用到数据的组件使用 Consumer 包裹获取数据

```js
import React, { createContext } from "react";
//创建Context对象 导出 Provider 和 Consumer对象
const context = createContext();
const { Provider, Consumer } = context;
function SonB() {
  return (
    <>
      <div>SonB</div>
      {/*需要用到数据的组件使用Consumer包裹获取数据*/}
      <Consumer>{(value) => <span> {value}</span>}</Consumer>
    </>
  );
}

function SonA() {
  return (
    <>
      <div>SonA</div>
      <SonB />
    </>
  );
}

class App extends React.Component {
  state = {
    message: "传递信息",
  };
  render() {
    return (
      <>
        {/*使用Provider包裹根组件并提供value数据*/}
        <Provider value={this.state.message}>
          <div>
            <SonA />
          </div>
        </Provider>
      </>
    );
  }
}

export default App;
```

## 组件通讯-children

- 1、props 中 children 属性的用法
- 2、children 属性表示该组件的子节点
- 3、只要组件内部有子节点，props 中就有 childeren 属性包含这些子节点
- children 可以是什么：
  - 1、普通文本
  - 2、普通标签元素
  - 3、函数
  - 4、JSX
- ···

```js
function SonA({ children, msg }) {
  console.log("children", children);
  children.forEach((element) => {
    //forEach循环遍历数组，判断children里面的每一项，如果是一个函数就执行这个函数
    if (typeof element === "function") {
      element();
    }
    console.log("element", element);
  });
  //拿到不是函数类型的每一项
  const p = children.filter((item) => typeof item !== "function");
  console.log("pppp", p);
  return (
    <>
      <div>
        SonA
        {p}
        {msg}
        {/* 此处只能写表达式，不能写函数 */}
        {/* <p>{children}</p> */}
      </div>
    </>
  );
}

class App extends React.Component {
  state = {
    message: "传递信息",
  };
  render() {
    return (
      <>
        <div>
          <SonA msg={this.state.message}>
            children 属性
            {<p>p 标签</p>}
            {() => console.log("函数属性")}
            {
              <div>
                <p>JSX</p>
              </div>
            }
          </SonA>
        </div>
      </>
    );
  }
}

export default App;
```

## props 类型（已淘汰，可以使用 TX 替代）

- 1、安装属性校验包：npm i prop-types
- 2、导入 prop-types 包
- 3、使用 组件名.propTypes = {} 给组件添加校验规则
  - 1.常见类型：array、bool、func、number、object、string
  - 2.React 元素类型：element
  - 3.必填项：isRequired
  - 4.特定的结构对象：shape({})
- 4、默认值设置
  - 通过 defaultProps 可以给组件定义出入属性的默认值（不推荐）
  - 函数组件直接在接收属性处定义：如{ msg = '函数组件默认属性' }
  - 类组件用 static 类静态属性定义

```js
import PropTypes from "prop-types";
function SonA({ msg = "函数组件默认属性2" }) {
  //{ msg = '函数组件默认属性' },这表示接收属性的默认值
  return (
    <>
      <div>
        SonA
        {msg}
      </div>
    </>
  );
}
//定义传递props的类型（此方法基本已经淘汰，不推荐）
SonA.propTypes = {
  msg: PropTypes.string,
};
//此方法设置默认值（不推荐）
SonA.defaultProps = {
  msg: "函数默认值1",
};
class SonB extends React.Component {
  //类组件接收属性默认值设置
  static defaultProps = {
    msg: "类组件默认属性2",
  };
  render() {
    return <div>{this.props.msg}</div>;
  }
}

class App extends React.Component {
  state = {
    message: "传递信息",
  };
  render() {
    return (
      <>
        <div>
          <SonA msg={this.state.message} />
          <SonB />
        </div>
      </>
    );
  }
}

export default App;
```

## REACT-HOOKS

- hooks 是 React 16.8.0 版本新增的特性
- 作用：让函数组件具有类组件的功能

### useState

- useState 可以弥补函数组件没有 **state** 的缺陷。useState 可以接受一个**初识值**，也可以是一个**函数 action** ，action 返回值作为新的 state。返回一个数组，第一个值为 state 读取值，第二个值为改变 state 的 dispatchAction 函数。
- setState 不能立即改变 state 的值，因为默认情况下 setState 是**异步的**，如果想要立即改变 state 的值，可以使用**函数的形式**，函数的参数为 state 的值，返回值为新的 state 值。

```js
const DemoState = (props) => {
  /* number为此时state读取值 ，setNumber为派发更新的函数 */
  let [number, setNumber] = useState(0); /* 0为初始值 */
  return (
    <div>
      <span>{number}</span>
      <button
        onClick={() => {
          setNumber(number + 1); /* 写法一 */
          setNumber((number) => number + 1); /* 写法二 */ //函数的参数为state的值，返回值为新的state值
          console.log(number); /* 这里的number是不能够即时改变的  */
        }}
      >
        num++
      </button>
    </div>
  );
};
```

### useEffect

- useEffect 用于在函数组件中执行副作用操作，副作用操作：操作 **DOM**、**发送网络请求**、手动修**改 state** 等。useEffect 接受一个函数作为参数，函数的返回值为清除副作用的函数，如果没有副作用则返回一个空函数。
- 依赖项：useEffect 的第二个参数，是一个数组，数组中的值为依赖项，当依赖项发生变化时，useEffect 会重新执行，如果没有依赖项，则只在初始化的时候执行一次。

```js
/* 模拟数据交互 */
function getUserInfo(a) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: a,
        age: 16,
      });
    }, 500);
  });
}
const DemoEffect = ({ a }) => {
  const [userMessage, setUserMessage]: any = useState({});
  const div = useRef();
  const [number, setNumber] = useState(0);
  /* 模拟事件监听处理函数 */
  const handleResize = () => {};
  /* useEffect使用 ，这里如果不加限制 ，会使函数重复执行，陷入死循环*/
  useEffect(() => {
    /* 请求数据 */
    getUserInfo(a).then((res) => {
      setUserMessage(res);
    });
    /* 操作dom  */
    console.log(div.current); /* div */
    /* 事件监听等 */
    window.addEventListener("resize", handleResize);
    /* 只有当props->a和state->number改变的时候 ,useEffect副作用函数重新执行 ，如果此时数组为空[]，证明函数只有在初始化的时候执行一次相当于componentDidMount */
  }, [a, number]); //这里如果不加限制 ，会使函数重复执行，陷入死循环
  return (
    <div ref={div}>
      <span>{userMessage.name}</span>
      <span>{userMessage.age}</span>
      <div onClick={() => setNumber(1)}>{number}</div>
    </div>
  );
};
```

### useLayoutEffect

- useLayoutEffect 与 useEffect 的使用方法一样，但是执行时机不同，useLayoutEffect 会在浏览器 dom 绘制之前执行，而 useEffect 会在浏览器 dom 绘制之后执行。
- useEffect 执行顺序： 组件更新挂载完成 -> 浏览器 dom 绘制完成 -> 执行 **useEffect** 回调。
- useLayoutEffect 执行顺序： 组件更新挂载完成 -> 执行 **useLayoutEffect** 回调-> 浏览器 dom 绘制完成。
- useLayoutEffect 可以避免加载页面时的屏幕闪烁问题。

### useContext

- 来获取父级组件传递过来的 context 值，这个当前值就是最近的父级组件 Provider 设置的 value 值，useContext 参数一般是由 createContext 方式引入 ,也可以父级上下文 context 传递 ( 参数为 context )。useContext 可以代替 context.Consumer 来获取 Provider 中保存的 value 值。
- useContext 用于在函数组件中使用 context，useContext 接受一个 context 对象作为参数，返回值为 context 的 value 值。

```js
/* 用useContext方式 */
//创建上下文
const DemoContext = () => {
  const value: any = useContext(Context);
  /* my name is alien */
  return <div> my name is {value.name}</div>;
};
/* 用Context.Consumer 方式 */
//子级组件
const DemoContext1 = () => {
  return (
    <Context.Consumer>
      {/*  my name is alien  */}
      {(value) => <div> my name is {value.name}</div>}
    </Context.Consumer>
  );
};
//父级组件
export default () => {
  return (
    <div>
      <Context.Provider value={{ name: "alien", age: 18 }}>
        <DemoContext />
        <DemoContext1 />
      </Context.Provider>
    </div>
  );
};
```

### useRef

- useRef 可以用来获取 **DOM 节点**或者 **class 组件实例**，还可以**保存变量**（因为使用 useRef 会创建一个原始对象，只要函数组件不销毁，这个对象就会一直存在）
- useRef 用于在函数组件中创建一个 ref 对象，返回值为一个对象，对象的 current 属性为 ref 对象，可以通过 ref.current 来获取 ref 对象保存的值。

```js
const DemoUseRef = () => {
  const dom = useRef(null);
  const handerSubmit = () => {
    /*  <div >表单组件</div>  dom 节点 */
    console.log(dom.current);
  };
  return (
    <div>
      {/* ref 标记当前dom节点 */}
      <div ref={dom}>表单组件</div>
      <button onClick={() => handerSubmit()}>提交</button>
    </div>
  );
};
```

### useMemo 和 useCallback

- useMemo 接受两个参数，第一个参数是一个函数，返回值用于产生保存值。 第二个参数是一个数组，作为 dep 依赖项，数组里面的依赖项发生变化，重新执行第一个函数，产生新的值。
- useCallback 接受两个参数，第一个参数是一个函数，第二个参数是一个数组，作为 dep 依赖项，数组里面的依赖项发生变化，重新执行第一个函数，产生新的函数。
- useMemo 和 useCallback 接收的参数都是一样，都是在其依赖项发生变化后才执行，都是返回缓存的值，区别在于 useMemo 返回的是**函数运行的结果**， useCallback 返回的是**函数**。 返回的 callback 可以作为 props 回调函数传递给子组件。
- useMemo 和 useCallback 都是用来优化性能的。useMemo 可以减少子组件的渲染次数，useCallback 可以减少函数的创建次数。

```js
// 缓存一些值，避免重新执行上下文
const number = useMemo(() => {
  /** ....大量的逻辑运算 **/
  return number;
}, [props.number]); // 只有 props.number 改变的时候，重新计算number的值。

// 减少子组件的渲染次数
/* 只有当props中，list列表改变的时候，子组件才渲染 */
const goodListChild = useMemo(() => <GoodList list={props.list} />, [
  props.list,
]);

//  减少不必要的dom循环
/* 用 useMemo包裹的list可以限定当且仅当list改变的时候才更新此list，这样就可以避免selectList重新循环 */
{
  useMemo(
    () => (
      <div>
        {selectList.map((i, v) => (
          <span className={style.listSpan} key={v}>
            {i.patentName}
          </span>
        ))}
      </div>
    ),
    [selectList]
  );
}
```

### useReducer

- useReducer 是 useState 的替代方案，useState 是基于 useReducer 实现的。useState 底层就是一个简单版的 useReducer。
- useReducer 接受的第一个参数是一个**函数**，我们可以认为它就是一个 reducer , reducer 的参数就是常规 reducer 里面的 state 和 action ,返回改变后的 state , useReducer 第二个参数为 **state 的初始值** ,useReducer 返回一个数组，数组的第一项就是更新之后 state 的值 ，第二个参数是派发更新的 dispatch 函数。

```js
const DemoUseReducer = () => {
  /* number为更新后的state值,  dispatchNumbner 为当前的派发函数 */
  const [number, dispatchNumbner] = useReducer((state, action) => {
    const { payload, name } = action;
    /* return的值为新的state */
    switch (name) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      case "reset":
        return payload;
    }
    return state;
  }, 0);
  return (
    <div>
      当前值：{number}
      {/* 派发更新 */}
      <button onClick={() => dispatchNumbner({ name: "add" })}>增加</button>
      <button onClick={() => dispatchNumbner({ name: "sub" })}>减少</button>
      <button onClick={() => dispatchNumbner({ name: "reset", payload: 666 })}>
        赋值
      </button>
      {/* 把dispatch 和 state 传递给子组件  */}
      <MyChildren dispatch={dispatchNumbner} State={{ number }} />
    </div>
  );
};
```

### useImperativeHandle

- useImperativeHandle 可以配合 forwardRef 自定义暴露给父组件的实例值。这个很有用，我们知道，对于子组件，如果是 class 类组件，我们可以通过 ref 获取类组件的实例，但是在子组件是函数组件的情况，如果我们不能直接通过 ref 的，那么此时 useImperativeHandle 和 forwardRef 配合就能达到效果。
- useImperativeHandle 接收三个参数，第一个参数是 ref 对象，第二个参数是一个函数，函数的第一个参数是 ref 对象，第二个参数是一个函数，函数的返回值就是暴露给父组件的实例值。第三个参数是一个数组，数组里面的值是依赖项，当依赖项发生变化的时候，重新执行第二个参数的函数，产生新的实例值。

```js
function Son(props, ref) {
  console.log(props);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  useImperativeHandle(
    ref,
    () => {
      const handleRefs = {
        /* 声明方法用于聚焦input框 */
        onFocus() {
          inputRef.current.focus();
        },
        /* 声明方法用于改变input的值 */
        onChangeValue(value) {
          setInputValue(value);
        },
      };
      return handleRefs;
    },
    []
  );
  return (
    <div>
      <input placeholder="请输入内容" ref={inputRef} value={inputValue} />
    </div>
  );
}

const ForwarSon = forwardRef(Son);

class Index extends React.Component {
  inputRef = null;
  handerClick() {
    const { onFocus, onChangeValue } = this.cur;
    onFocus();
    onChangeValue("let us learn React!");
  }
  render() {
    return (
      <div>
        <ForwarSon ref={(node) => (this.inputRef = node)} />
        <button onClick={this.handerClick.bind(this)}>操控子组件</button>
      </div>
    );
  }
}
```

###
