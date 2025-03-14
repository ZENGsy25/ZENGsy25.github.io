# REACT 笔记

[[toc]]

## 创建项目

- create-react-app zhufengreact
- cd zhufengreact
- yarn add cross-env

## 元素

JSX 其实只是一种语法糖,最终会通过 babeljs 转译成 React.createElement 语法
React.createElement 会返回一个 React 元素
React 元素事实上是普通的 JS 对象，用来描述你在屏幕上看到的内容
ReactDOM 来确保浏览器中的真实 DOM 数据和 React 元素保持一致

### JSX

```js
<h1 className="title" style={{ color: 'red' }}>
  hello
</h1>
```

### 转译后的代码

```js
React.createElement(
  'h1',
  {
    className: 'title',
    style: {
      color: 'red',
    },
  },
  'hello'
)
```

### 返回的结果

```js
{
  type:'h1',
  props:{
    className: "title",
    style: {
      color: 'red'
    }
  },
  children:"hello"
}
```

## JSX 实现

### `npm start`调试

- "start": "react-scripts start",启动
- "start": "cross-env DISABLE_NEW_JSX_TRANSFORM=true react-scripts start",
  cross-env DISABLE_NEW_JSX_TRANSFORM=true//禁用 jsx 的转换器（17.0.0 版本之后的禁用）

### `npm test`调试

- "test": "react-scripts test",测试
- "test": "cross-env DISABLE_NEW_JSX_TRANSFORM=true react-scripts test",
  cross-env DISABLE_NEW_JSX_TRANSFORM=true//禁用 jsx 的转换器（17.0.0 版本之后的禁用）

### `npm run build`调试

- "build": "react-scripts build",编译

### `npm run eject`调试

- "eject": "react-scripts eject"弹出 webpack 配置文件

### package.json

```js
{
    "name": "zhufengreact",
    "version": "0.1.0",
    "scripts": {
        + "start": "cross-env DISABLE_NEW_JSX_TRANSFORM=true react-scripts start",
        + "build": "cross-env DISABLE_NEW_JSX_TRANSFORM=true react-scripts build",
        + "test": "cross-env DISABLE_NEW_JSX_TRANSFORM=true react-scripts test",
        + "eject": "cross-env DISABLE_NEW_JSX_TRANSFORM=true react-scripts eject"
    },
}
```

### src\index.js

```js
import React from './react'
import ReactDOM from './react-dom'
let element1 = (
  <div className="title" style={{ color: 'red' }}>
    <span>hello</span>world
  </div>
)
console.log(JSON.stringify(element1, null, 2))
ReactDOM.render(element1, document.getElementById('root'))
```

### constants.js

```js
export const REACT_TEXT = Symbol('REACT_TEXT') //文本节点
export const REACT_ELEMENT = Symbol('react.element')
```

### src\utils.js

```js
/**
 * 把虚拟DOM进行节点化包装
 * 如果此虚拟DOM是一个文本（字符串或者数字），就包装成一个虚拟DOM节点对象，否则就返回他自身
 * @param {*} element 虚拟DOM
 */
import { REACT_TEXT } from './constants'
export function wrapToVdom(element) {
  //包裹一个虚拟dom
  return typeof element === 'string' || typeof element === 'number' //typeof运算符，判断一个变量的类型
    ? { type: REACT_TEXT, props: element } //
    : element
}
```

### react.js

```js
import { wrapToVdom } from './utils'
import { REACT_ELEMENT } from './constants'
/**
 * 用来创建react元素的工厂方法
 * @param {*} type 元素类型
 * @param {*} config 配置对象
 * @param {*} children 儿子们（可以有多个）
 */
function createElement(type, config, children) {
  let ref
  let key
  if (config) {
    delete config.__source
    delete config.__self
    ref = config.ref
    delete config.ref
    key = config.key
    delete config.key
  }
  let props = { ...config }
  //如果createElement的长度大于3，说明有多个儿子
  if (arguments.length > 3) {
    //props.children就是一个数组
    props.children = Array.prototype.slice.call(arguments, 2).map(wrapToVdom)
    //createElement的长度小于等于3，说明只有一个儿子
  } else {
    props.children = wrapToVdom(children)
  }
  return {
    $$typeof: REACT_ELEMENT, //引用
    type,
    ref,
    key,
    props,
  }
}
const React = {
  createElement,
}
export default React
```

### react-dom

```js
import { REACT_TEXT } from './constants'
function render(vdom, container) {
  mount(vdom, container)
}
/**
 * 把虚拟DOM转成真实DOM并插入到容器里
 * @param {*}vdom 虚拟DOM
 * @param {*}container 容器
 */
export function mount(vdom, container) {
  let newDOM = createDOM(vdom)
  container.appendChild(newDOM)
}
/**
 * 把虚拟DOM转成真实DOM
 * @param {*}vdom 虚拟DOM
 */
export function createDOM(vdom) {
  let { type, props } = vdom
  let dom //真实DOM
  if (type === REACT_TEXT) {
    //如果是文本节点，就通过createTextNode方法创建文本节点
    dom = document.createTextNode(props)
  } else {
    //否则就是一个元素DOM节点，通过createElement方法创建元素DOM节点
    dom = document.createElement(type)
  }
  if (props) {
    //如果props有值，就更新props属性
    updateProps(dom, {}, props)
    if (typeof props.children == 'object' && props.children.type) {
      mount(props.children, dom) //挂载props.children到dom上
    } else if (Array.isArray(props.children)) {
      //
      reconcileChildren(props.children, dom)
    }
  }
  //让vdom的dom属性指向它创建的真实DOM
  vdom.dom = dom
  return dom
}
/**
 * 更新真实DOM的属性
 * @param {*}dom 真实DOM
 * @param {*}oldProps 老属性
 * @param {*}newProps 新属性
 */
function updateProps(dom, oldProps = {}, newProps = {}) {
  //拿到现存的所有key，然后循环
  for (let key in newProps) {
    //属性中的children属性不在此处处理
    if (key === 'children') {
      continue
      //如果key是一个样式对象
    } else if (key === 'style') {
      //拿到新的样式对象
      let styleObj = newProps[key]
      for (let attr in styleObj) {
        dom.style[attr] = styleObj[attr]
      }
    } else {
      //如果是一个普通的属性
      dom[key] = newProps[key]
    }
  }
  //如果属性再老的属性里有，新的属性没有，需要从真实DOM中删除
  for (let key in oldProps) {
    if (!newProps.hasOwnProperty(key)) {
      dom[key] = null //删除
    }
  }
}
function reconcileChildren(childrenVdom, parentDOM) {
  for (let i = 0; i < childrenVdom.length; i++) {
    let childVdom = childrenVdom[i]
    mount(childVdom, parentDOM)
  }
}
const ReactDOM = {
  render,
}
export default ReactDOM
```

## 组件

### 函数组件的定义

```js
import React from "./react";
import ReactDOM from "./react-dom";

/**
 * 函数组件
 * 1.必须接收一个props对象，并返回一个React元素
 * 2.函数组件的名称必须大写开头
 * 3.必须先定义在使用
 * 4.函数组件能且只能返回一个根节点，JSX 表达式必须具有一个父元素
 * 5.React元素不但可以是DOM标签字符串，也可以是函数
*/
function FunctionComponent(props){
    return (
        <div className="title" style={{ color: 'red' }}>
            <span>{props.name}</span>
            {props.children}
        </div>;
    )
}
//let props = {name="hello"}
//let peops.children = world
//React元素可能是字符串表示原生组件
//也有可能是函数，表示函数组件
let element = <FunctionComponent name="hello">world</FunctionComponent>;
ReactDOM.render(element, document.getElementById("root"));
```

### 类组件的定义

```js
import React from "./react";
import ReactDOM from "./react-dom";

/**
 * 组件的数据来源有两个
 * 1.父级传递过来的属性，一般是不能改变的
 * 2.自己的，是可以改变的，组件的状态state
 * 3.再类组件里有些方法里的this绑定为组件实例了，比如：render的this指向组件实例
 * 1.异步更新
 * 2.dom dif
 *
*/
class ClassComponent extends React.Component{
    //不写逻辑就不需要写这个构造函数，默认会调用constructory构造函数
    constructory(props){
        super(props);
        //构造函数是唯一能给state直接赋值的地方
        this.state = {number:0};
    }
    //绑定事件执行函数
    //首选写法：写一个类的属性，指向一个箭头函数，这样此方法的this就永远指向类的实例
    handleClick = (event)=>{
        //通过setState来改变state状态
        this.setState({number:this.state.number + 1});
        //此处打印的state是再vdom插入到容器之前的state
        console.log(this.state);
    }
    render(){
        return (
            <div className="title" style={{ color: 'red' }}>
                <span>{this.props.name}</span>
                {this.props.children}
                //绑定事件
                <button onClick={this.handleClick}>+</button>
            </div>;
        )
    }
}
let element = <ClassComponent name="hello">world</ClassComponent>;
ReactDOM.render(element, document.getElementById("root"));
```

## 合成事件和批量更新

- State 的更新会被合并 当你调用 setState() 的时候，React 会把你提供的对象合并到当前的 state
- State 的更新可能是异步的
  - 出于性能考虑，React 可能会把多个 setState() 调用合并成一个调用
  - 因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态
  - 可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数
- 事件处理
  - React 事件的命名采用小驼峰式(camelCase),而不是纯小写
  - 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串
  - 你不能通过返回  false  的方式阻止默认行为。你必须显式的使用 preventDefault

### src\index.js

```js
import React from './react'
import ReactDOM from './react-dom'
/**
 * 1.再React能管理的地方this.state更新是异步的，批量的
 * 2.再React管理不到的地方this.state更新是同步的，非批量
 */
class Counter extends React.Component {
  constructor(props) {
    super(props)
    //构造函数是唯一能给state直接赋值的地方
    this.state = {
      number: 0,
    }
  }
  //event合成事件对象，并不是原生的事件对象
  handleClick = () => {
    //事件处理函数执行前
    //在handleClick方法中执行是批量的，是异步的，会在方法执行结束之后在更新this.state
    this.setState({ number: this.state.number + 1 })
    console.log(this.state) // 0
    this.setState({ number: this.state.number + 1 })
    console.log(this.state) // 0
    setTimeout(() => {
      //在setTimeout方法中执行是非批量的，是同步的，会在方法执行时同步更新this.state
      this.setState({ number: this.state.number + 1 })
      console.log(this.state) // 2
      this.setState({ number: this.state.number + 1 })
      console.log(this.state) // 3
    })
  }
  render() {
    return (
      <div>
        <p>{this.props.title}</p>
        <p>number:{this.state.number}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
ReactDOM.render(<Counter title="计数器" />, document.getElementById('root'))
```

## ref

### 为 DOM 元素添加 Ref

- 可以使用 ref 去存储 DOM 节点的引用
- 当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性

```js
import React from 'react'
import ReactDOM from 'react-dom'

class Sum extends React.Component {
  constructor() {
    super()
    //React.createRef方法返回一个对象：{current:null}；再input框输出值之后，拿到inputA的真实DOM；也就是input框的输入值
    this.a = React.createRef() //inputA的真实DOM
    this.b = React.createRef() //inputB的真实DOM
    this.c = React.createRef() //inputC的真实DOM
    this.result = React.createRef() //inputRseult的真实DOM
  }
  handleClick = (event) => {
    let a = this.a.current.value
    let b = this.b.current.value
    let c = this.c.current.value
    this.result.current.value = a + b + c
  }
  render() {
    return (
      <div>
        <input ref={this.a} />+<input ref={this.b} />+<input ref={this.c} />
        <button onclick={this.handleClick}>=</button>
        <input ref={this.result} />
      </div>
    )
  }
}
ReactDOM.render(<Sum />, document.getElementById('root'))
```

### 为 class 组件添加 Ref

```js
import React from 'react'
import ReactDOM from 'react-dom'

class Form extends React.Component {
  constructor() {
    super()
    this.textInputRef = React.createRef()
  }
  getFocus = () => {
    //此处会调用TextInput组件的getFocus方法，因为this.textInputRef是指向TextInput组件的实例
    this.textInputRef.current.getFocus()
  }
  render() {
    return (
      <div>
        <TextInput ref={this.textInputRef} />
        <button onClick={this.getFocus}>获取焦点</button>
      </div>
    )
  }
}
class TextInput extends React.Component {
  constructor() {
    super()
    this.inputRef = React.createRef()
  }
  getFocus = () => {
    this.inputRef.current.focus()
  }
  render() {
    return <input ref={this.inputRef} />
  }
}
ReactDOM.render(<Form />, document.getElementById('root'))
```

### Ref 转发

- 你不能在函数组件上使用 ref 属性，因为他们没有实例
- Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧
- Ref 转发允许某些组件接收 ref，并将其向下传递给子组件

```js
import React from 'react'
import ReactDOM from 'react-dom'
//函数组件不能直接使用ref，因为没有实例，需要使用React.forwareRef方法转发得到一个新的组件
const ForwardeTextInput = React.forwareRef((props, forwareRef) => {
  ;<input ref={forwareRef} />
})
class Form extends React.Component {
  constructor() {
    super()
    this.textInputRef = React.createRef()
  }
  getFocus = () => {
    //此处会调用TextInput组件的getFocus方法，因为this.textInputRef.current是指向ForwardeTextInput组件的实例
    this.textInputRef.current.focus()
  }
  render() {
    return (
      <div>
        <ForwardeTextInput ref={this.textInputRef} />
        <button onClick={this.getFocus}>获取焦点</button>
      </div>
    )
  }
}
ReactDOM.render(<Form />, document.getElementById('root'))
```

## 基本的生命周期

### src\index.js

- 生命周期图

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
  static defaultProps={
    name:'珠峰架构';
  };
  //1.设置默认属性
  constructor(props){
    super(props);
    this.state={number:0};
    console.log(`Counter,1.constructor`);
  }
  //2.组件将要挂载
  componentWillMount(){
    console.log(`Counter,2.componentWillMount`);
  }
  //4.组件挂载完成
  componentDidMount(){
    console.log(`Counter,4.componentDidMount`);
  }
  //5.组件是否更新
  shouldCpmponentUpdate(nextProps,nextState){
    console.log(`Counter,5.shouldCpmponentUpdate`);
    //this.state的值会改变
    //奇数不更新组件，偶数更新组件；不管组件是否更新，this.state的值都会更新
    return nextState.number%2 === 0;
  }
  //组件将要更新
  componentWillUpdate(){
    console.log(`Counter,6.componentWillUpdate`);
  }
  //组件更新完成
  componentDidUpdate(){
    console.log(`Counter,7.componentDidUpdate`);
  }
  handleClick(){
    this.setState({number:this.state.number + 1})
  }
render(){
  //3.render渲染
  console.log(`Counter,3.render`);
  return (
    <div>
      <p>{this.state.number}</p>
      <buttom onClick={this.handleClick}>+</buttom>
    </div>
  )
}
}
ReactDOM.render(
  <Counter/>,document.getElementById('root')
);
/** 生命周期顺序
 * Counter 1.constructor 、
 * Counter 2.componentWillMount
 * Counter 3.render
 * Counter 4.componentDidMount
 * 2 Counter 5.shouldComponentUpdate
 * 2 Counter 5.shouldComponentUpdate
 * Counter 6.componentWillUpdate
 * Counter 3.render
 * Counter 7.componentDidUpdate
 * */
```

## 子组件生命周期

### src\index.js

- 生命周期图

```js
import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {
  static defaultProps = {
    name: '珠峰架构',
  }
  //1.设置默认属性
  constructor(props) {
    super(props)
    this.state = { number: 0 }
    console.log(`Counter,1.constructor`)
  }
  //2.组件将要挂载
  componentWillMount() {
    console.log(`Counter,2.componentWillMount`)
  }
  //4.组件挂载完成
  componentDidMount() {
    console.log(`Counter,4.componentDidMount`)
  }
  handleClick = () => {
    this.setState({ number: this.state.number + 1 })
  }
  //5.组件是否更新
  shouldComponentUpdate(nextProps, nextState) {
    console.log(`Counter,5.shouldCpmponentUpdate`)
    //this.state的值会改变
    //奇数不更新组件，偶数更新组件；不管组件是否更新，this.state的值都会更新
    return nextState.number % 2 === 0
  }
  //组件将要更新
  componentWillUpdate() {
    console.log(`Counter,6.componentWillUpdate`)
  }
  //组件更新完成
  componentDidUpdate() {
    console.log(`Counter,7.componentDidUpdate`)
  }

  render() {
    //3.render渲染
    console.log(`Counter,3.render`)
    return (
      <div id="counter">
        <p>{this.state.number}</p>
        {this.state.number === 4 ? null : (
          <ChildCounter count={this.state.number} />
        )}
        <buttom onClick={this.handleClick}>+</buttom>
      </div>
    )
  }
}
class ChildCounter extends React.Component {
  //2.子组件将要挂载
  componentWillMount() {
    console.log(`ChildCounter,1.componentWillMount`)
  }
  //4.子组件挂载完成
  componentDidMount() {
    console.log(`ChildCounter,3.componentDidMount`)
  }
  componentWillReceiveProps() {
    //组件将要收到新的属性（父组件传递给子组件属性时）
    console.log(`ChildCounter,4.componentWillReceiveProps`)
  }
  shouldComponentUpdate(nextProps, nextState) {
    //子组件是否更新
    console.log(`ChildCounter,5.shouldComponentUpdate`)
    return nextProps.count % 3 === 0
  }
  componentWillUnmount() {
    //子组件将要销毁
    console.log(`ChildCounter,6.componentWillUnmount`)
  }
  render() {
    //子组件将要执行render方法渲染
    console.log(`ChildCounter,2.render`)
    return <div id="sub-Counter">{this.props.count}</div>
  }
}
ReactDOM.render(<Counter />, document.getElementById('root'))
/** click 1
 * Counter 1.constructor
 * Counter 2.componentWillMount
 * Counter 3.render
 * ChildCounter 1.componentWillMount
 * ChildCounter 2.render
 * ChildCounter 3.componentDidMount
 * Counter 4.componentDidMount
 *
 * click 2
 * Counter 5.shouldComponentUpdate
 *
 * click 3
 * Counter 5.shouldComponentUpdate
 * Counter 6.componentWillUpdate
 * Counter 3.render
 * ChildCounter 4.componentWillReceiveProps
 * Counter 5.shouldComponentUpdate
 * Counter 7.componentDidUpdate
 * click3
 * Counter 5.shouldComponentUpdate
 *
 * click4
 * Counter 5.shouldComponentUpdate
 * Counter 6.componentWillUpdate
 * Counter 3.render
 * ChildCounter 6.componentWillUnmount
 * Counter 7.componentDidUpdate
 *
 * click5
 * Counter 5.shouldComponentUpdate
 *
 * click6
 * Counter 5.shouldComponentUpdate
 * Counter 6.componentWillUpdate
 * Counter 3.render
 * ChildCounter 1.componentWillMount
 * ChildCounter 2.render
 * ChildCounter 3.componentDidMount
 * Counter 7.componentDidUpdate
 *
 * click7
 * Counter 5.shouldComponentUpdate
 *
 * click8
 * Counter 5.shouldComponentUpdate
 * Counter 6.componentWillUpdate
 * Counter 3.render
 * ChildCounter 4.componentWillReceiveProps
 * Counter 5.shouldComponentUpdate
 * Counter 7.componentDidUpdate
 */
```

## Context(上下文)

- React.createContext()
- 在某些场景下，你想在整个组件树中传递数据，但却不想手动地在每一层传递属性。你可以直接在 React 中使用强大的 contextAPI 解决上述问题
- 在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（
  - 例如：地区偏好，UI 主题），这些属性是应用程序中许多组件都需要的。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props

### src\index.js

```js
import React from 'react'
import ReactDOM from 'react-dom'

//定义Context上下文，需要调用React.createContext()方法，返回一个ThemeContext对象
let ThemeContext = React.createContext()
//console.log(ThemeContext);//返回一个对象：
/**
 * $$typeof:Symbol(react.context)Symbol类型
 * Consumer:{$$typeof：Symnol(react.context),}消费者
 * Provider:{$$typeof: Symbol(react.provider),}供应商
 * _currentValue:undefined当前的值
 *
 */
//结构赋值ThemeContext，拿到Consumer,Provider
const { Consumer, Provider } = ThemeContext
let style = { margin: '5px', padding: '5px' }
function Title(props) {
  //函数组件拿到context的值；再返回的组件里面包裹函数来实现
  return (
    //消费者
    <Consumer>
      {(contextValue) => (
        <div style={{ ...style, border: `5px solid ${contextValue.color}` }}>
          Title
        </div>
      )}
    </Consumer>
  )
}
class Header extends React.Component {
  //如果想在类组件中拿到context的值，就添加一个静态的属性contextType,它的值为ThemeContext即可
  static contextType = ThemeContext
  render() {
    //类组件已经拿到context的值，就可以通过this.context取值
    return (
      <div style={{ ...style, border: `5px solid ${this.context.color}` }}>
        Header
        <Title />
      </div>
    )
  }
}
function Content() {
  //函数组件拿到context的值；再返回的组件里面包裹函数来实现
  return (
    //消费者
    <Consumer>
      {(contextValue) => (
        <div style={{ ...style, border: `5px solid ${contextValue.color}` }}>
          Content
          <button
            onClick={() => contextValue.changeColor('red')}
            style={{ color: 'red' }}>
            变红
          </button>
          <button
            onClick={() => contextValue.changeColor('yellow')}
            style={{ color: 'yellow' }}>
            变黄
          </button>
        </div>
      )}
    </Consumer>
  )
}
class Main extends React.Component {
  //如果想在类组件中拿到context的值，就添加一个静态的属性contextType,它的值为ThemeContext即可
  static contextType = ThemeContext
  render() {
    return (
      <div style={{ ...style, border: `5px solid ${this.context.color}` }}>
        Header
        <Content />
      </div>
    )
  }
}
class Page extends React.Component {
  constructor(props) {
    super(props)
    this.props = props
    this.state = { color: 'red' }
  }
  changeColor = (color) => {
    this.setState({ color })
  }
  render() {
    let contextValue = {
      color: this.state.color,
      changeColor: this.changeColor,
    }
    return (
      //供应商
      <Provider value={contextValue}>
        <div
          style={{
            ...style,
            width: '300px',
            border: `5px solid ${this.context.color}`,
          }}>
          <Header />
          <Main />
        </div>
      </Provider>
    )
  }
}
ReactDOM.render(<Page />, document.getElementById('root'))
```

## DOM-DIFF

- 只对同级节点进行对比，如果 DOM 节点跨层级移动，则 React 不会复用
- 不同类型的元素会产出不同的结构 ，会销毁老结构，创建新结构
- 可以通过 key 标识移动的元素

```js
import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: ['A', 'C', 'D', 'E', 'F', 'G'],
    }
  }
  handleClick = (event) => {
    this.setState({
      list: ['A', 'C', 'E', 'R', 'G', 'O'],
    })
  }
  //view试图
  render() {
    return (
      //片段
      //通过数组的map方法遍历组件
      <React.Fragment>
        <ul>
          {this.state.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <button onClick={this.handleClick}>+</button>
        </ul>
      </React.Fragment>
    )
  }
}
ReactDOM.render(<Counter />, document.getElementById('root'))
```

## React Hoooks

- Hook 可以让你在不编写  class  的情况下使用  state  以及其他的 React 特性(使用函数组件)

### useState

- useState 就是一个 Hook
- 通过在函数组件里调用它来给组件添加一些内部 state,React 会在重复渲染时保留这个 state
- useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。它类似 class 组件的
- this.setState，但是它不会把新的 state 和旧的 state 进行合并
- useState 唯一的参数就是初始 state
- 返回一个 state，以及更新 state 的函数
  - 在初始渲染期间，返回的状态 (state) 与传入的第一个参数 (initialState) 值相同
  - setState 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入队列

```js
import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  //useState返回一对值：当前状态和一个修改当前状态的函数，可以再事件处理函数中或者其他一些地方调用这个函数
  //useState接受一个唯一参数，就是初始的state
  //在初始渲染期间，返回的state与传入的参数相同
  const [number, setNumber] = React.useState(0)
  const handleClick = () => {
    setNumber(number + 1)
  }
  return (
    <div>
      <p>{number}</p>
      <button onClick={handleClick}>+</button>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
```

### useCallback + useMemo

- 把内联回调函数及依赖项数组作为参数传入  useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新
- 把创建函数和依赖项数组作为参数传入  useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算

```js
import React from 'react'
import ReactDOM from 'react-dom'

function Child({ data, handleClick }) {
  //此时在input里面修改name的值是Child组件也会重新渲染，
  console.log('Child render')
  return <button onClick={handleClick}>{data.number}</button>
}
//Child组件在属性未发生变化时不进行渲染，需要使用memo包裹Child函数组件
//MemoChild的属性有变化就会进行渲染，如果属性没有变化即不进行渲染
const MemoChild = React.memo(Child)
function App() {
  console.log('App render')
  const [number, setNumber] = React.useState(0)
  const [name, setName] = React.useState('zsy')
  //希望data在App组件重新渲染的时候，如果number没有变化返回老data，number变了就变成新data
  //React.usememo里面放一个工厂函数和一个依赖项数组
  //()=>({number})这是一个工厂函数，用于返回对象，
  //[number]这是依赖数项，依赖number变化了就执行工厂函数，返回新对象；依赖number没变化就返回老对象
  let data = React.useMemo(() => ({ number }), [number])
  //原来写法
  // let data = {number};
  //希望handleClick在App组件重新渲染的时候，如果number没有变化就返回老data，number变了就返回新handleClick
  //React.useCallback里面放一个工厂函数和一个依赖项数组
  let handleClick = React.useCallback(() => setNumber(number + 1), [number])
  //原来写法
  // let handleClick = ()=>{
  //   setNumber(number + 1);
  // }
  return (
    //onChange={event => setNumber(event.target.value)拿到onChange事件源的值，然后传给number
    // onChange={event => setNumber(event.target.value)}
    <div>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <MemoChild data={data} handleClick={handleClick} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
```

## 性能优化

- 减少渲染次数
- React.PureComponent
- React.memo()

### src\index.js

```js
import React from 'react'
import ReactDOM from 'react-dom'
//让ClassCounter组件继承自React.PureComponent，在组件的状态和属性没有改变时，不需要重新渲染ClassCounter组件
class ClassCounter extends React.PureComponent {
  render() {
    console.log('ClassCounter render')
    return <div>ClassCounter:{this.props.count}</div>
  }
}
function FunctionCounter(props) {
  console.log('FunctionCounter render')
  debugger
  return <div>FunctionCounter:{props.count}</div>
}
//新组建就类似于PureComponent功能，函数组件没有状态，只需要比较属性就可以了
const MemoFunctionCounter = React.memo(FunctionCounter)
class App extends React.Component {
  state = { number: 0 }
  amountRef = React.createRef()
  handleClick = () => {
    //parseInt() 函数可解析一个字符串，并返回一个整数。
    let nextNumber = this.state.number + parseInt(this.amountRef.current.value)
    this.setState({ number: nextNumber })
  }
  render() {
    return (
      <div>
        <ClassCounter count={this.state.number} />
        <MemoFunctionCounter count={this.state.number} />
        <input ref={this.amountRef} />
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
```

## useReducer

- useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法
- 在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等

```js
import React from 'react'
import ReactDOM from 'react-dom'

function reducer(state = { number: 0 }, action) {
  //判断动作类型action.type为'ADD'则返回 + 1
  switch (action.type) {
    case 'ADD':
      return { number: state.number + 1 }
    //判断action.type为'ADD'则返回 - 1
    case 'MINUS':
      return { number: state.number - 1 }
    //默认返回state
    default:
      return state
  }
}
function Counter() {
  //定义useReducer需要两个参数：
  //1、改变状态的函数reducer
  //2、初始状态{number:0}
  const [state, dispatch] = React.useReducer(reducer, { number: 0 })
  return (
    //点击按钮触发回调函数，派发一个action动作，然后根据reducer函数修改状态
    <div>
      <p>{state.number}</p>
      <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>-</button>
    </div>
  )
}

ReactDOM.render(<Counter />, document.getElementById('root'))
```

## useContext

- 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值
- 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定
- 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值
- useContext(MyContext) 相当于 class 组件中的  static contextType = MyContext  或者  <MyContext.Consumer>
- useContext(MyContext) 只是让你能够读取 context 的值以及订阅 context 的变化。你仍然需要在上层组件树中使用 <MyContext.Provider> 来为下层组件提供 context

```js
import React from 'react'
import ReactDOM from 'react-dom'

const CounterContext = React.createContext()
function reducer(state = { number: 0 }, action) {
  //判断动作类型action.type为'ADD'则返回 + 1
  switch (action.type) {
    case 'ADD':
      return { number: state.number + 1 }
    //判断action.type为'ADD'则返回 - 1
    case 'MINUS':
      return { number: state.number - 1 }
    //默认返回state
    default:
      return state
  }
}
function Counter() {
  //这里想要拿到{state,dispatch}就需要使用到Reac.useContext(),然后把CounterContext传进去
  let { state, dispatch } = React.useContext(CounterContext)
  // const [state,dispatch] = React.useReducer(reducer,{number:0});
  return (
    //点击按钮触发回调函数，派发一个action动作，然后根据reducer函数修改状态
    <div>
      <p>{state.number}</p>
      <button onClick={() => dispatch({ type: 'ADD' })}>+</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>-</button>
    </div>
  )
}
function App() {
  //定义useReducer需要两个参数：
  //1、改变状态的函数reducer
  //2、初始状态{number:0}
  const [state, dispatch] = React.useReducer(reducer, { number: 0 })
  return (
    //渲染一个Provider供应商
    //
    <CounterContext.Provider value={{ state, dispatch }}>
      <Counter />
    </CounterContext.Provider>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
```

## useEffect

- 在函数组件主体内（这里指在 React 渲染阶段）改变 DOM、添加订阅、设置定时器、记录日志以及执行其他包含副作用的操作都是不被允许的，因为这可能会产生莫名其妙的 bug 并破坏 UI 的一致性
- 使用 useEffect 完成副作用操作。赋值给 useEffect 的函数会在组件渲染到屏幕之后执行。你可以把 effect 看作从 React 的纯函数式世界通往命令式世界的逃生通道
- useEffect 就是一个 Effect Hook，给函数组件增加了操作副作用的能力。它跟 class 组件中的  componentDidMount、componentDidUpdate  和  componentWillUnmount  具有相同的用途，只不过被合并成了一个 API
- 该 Hook 接收一个包含命令式、且可能有副作用代码的函数

```js
import React from 'react'
import ReactDOM from 'react-dom'

function Counter(props) {
  let [number, setNumber] = React.useState(0)
  //创建一个副作用
  //接收两个参数：1、第一个参数时回调函数；2、第二个依赖项（依赖项为赋值的参数）,依赖项发生改变才会执行useEffect回调函数
  //此函数会在组件和DOM渲染之后执行，可以执行一些副作用的代码
  React.useEffect(() => {
    console.log('开启定时器')
    const timer = setInterval(() => {
      //setNumber里面可以放函数、状态
      setNumber((number) => number + 1)
    }, 1000)
    //需要在setInterval（）执行函数的末尾添加一个空数组依赖项[]，依赖项没有变化就返回老对象
    //或者useEffect返回一个销毁函数，会在瑕疵执行useEffect回调之前执行
    // return ()=>{
    //   console.log('清除定时器');
    //   clearInterval(timer);
    // }
  }, [])
  return <div>{number}</div>
}
ReactDOM.render(<Counter />, document.getElementById('root'))
```

## useLayoutEffect + useRef

- 其函数签名与  useEffect  相同，但它会在所有的  DOM  变更之后同步调用 effect
- useEffect 不会阻塞浏览器渲染，而  useLayoutEffect  会浏览器渲染
- useEffect 会在浏览器渲染结束后执行,useLayoutEffect  则是在  DOM  更新完成后,浏览器绘制之前执行

```js
import React from 'react'
import ReactDOM from 'react-dom'

function Animation(props) {
  const ref = React.useRef()
  let style = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    bbackgroundColor: 'red',
  }
  React.useEffect(() => {
    //渲染之后执行，可以看到动画
    // React.useLayoutEffect(() => { //和浏览器同步渲染，没有动画效果
    //移动动画
    ref.current.style.transform = `translate(500px)`
    ref.current.style.transition = 'all 500ms'
  })
  return <div style={style} ref={ref} />
}
ReactDOM.render(<Animation />, document.getElementById('root'))
```

## forwardRef + useImperativeHandle

- forwardRef 将 ref 从父组件中转发到子组件中的 dom 元素上,子组件接受 props 和 ref 作为参数
- useImperativeHandle  可以让你在使用 ref 时自定义暴露给父组件的实例值

```js
import React from 'react'
import ReactDOM from 'react-dom'

function Child(props, forwardRef) {
  //为子组件做一个保护功能(useImperativeHandle)，防止被父组件删除等
  const inputRef = React.useRef()
  React.useImperativeHandle(forwardRef, () => ({
    focus() {
      inputRef.current.focus()
    },
  }))
  return <input ref={inputRef} />
}
const ForwardedChild = React.forwardRef(Child)

function Parent() {
  let [number, setNumber] = React.useState(0)
  let inputRef = React.useRef()
  let getFocus = () => {
    inputRef.current.focus() //通过父组件转发至子组件
    // inputRef.current.remove();//
  }
  return (
    <div>
      <ForwardedChild ref={inputRef} />
      <button onClick={getFocus}>获取焦点</button>
      <p>{number}</p>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  )
}
ReactDOM.render(<Parent />, document.getElementById('root'))
```

## 路由

###

### 嵌套路由

- src.index.js

-
