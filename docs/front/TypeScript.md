# TypeScript 基础

[[toc]]

**编译指令**

- tsc --init 生成 tsconfig.json 文件
- tsc -w 监听 ts 文件变化，自动编译
- tsc -t es6 -m commonjs 编译成 es6 并且模块化为 commonjs
- interfacehe type 区别
- - interface 只能定义对象类型 可以继承和扩展
- - type 可以定义基础类型，联合类型，元组类型，枚举类型，对象类型

```js
// type联合类型定义函数或者字符串
type type = (x: number, y: number) => number | string;
let fun1: type = (x: number, y: number): number => x + y;
let fun1: type = "123";
interface type2 {
  (x: number, y: number): number | string;
}
```

## ts 中的冒号后面表示数据类型

```js
const str: string = "abc";
const num: number = 123;
const boolean: boolean = true;
const n: null = null;
const un: undefined = undefined;
// null 和 undefined 是所有类型的子类型,可以赋值给其他类型
// 如果tsconfig.json配置文件的strictNullChecks为true,则不能把null 和 undefined赋值给其他类型
let num2: number;
num2 = 123;
num2 = null;
num2 = undefined;

- **never**
//never 表示永远不会返回结果,一般用于抛出异常或者死循环;never是所有类型的子类型,可以赋值给其他类型但是其他类型不能赋值给never
function error(message: string): never {
  //抛出异常
  throw new Error("报错了");
}
function loop(): never {
  //死循环
  while (true) {}
}

- **void**
//  void是所有类型的子类型表示没有任何类型,一般用于函数没有返回值;
//void是所有类型的子类型,可以赋值给其他类型但是其他类型不能赋值给void (null 和undefined 除外))
function fn(): void {
  //没有返回值
  // return undefined;
  return null;
}
- **symbol**

//symbol 表示唯一的值
const s1: symbol = Symbol("key");
const s2: symbol = Symbol("key");
// console.log(s1 === s2); // false

- **bigint**
// bigint 表示大整数
const max = BigInt(Number.MAX_SAFE_INTEGER);

// 类型推导
const str2 = "abc";
type Str = typeof str2; //string类型，类型自动推导

//类型断言
const name:string| number;
console.log((name! as string).length);  // !表示name一定有值,非空断言
console.log((name! as number).toFixed(2));
//双重断言
console.log((name! as any) as boolean);

//字面量类型和类型字面量
const up: "up" = "up"; //字面量类型
const number:1 = 1;
type Direction = "up" | "down" | "left" | "right"; //类型字面量;type定义类型,类型别名
function move(direction: Direction) {
  console.log(direction);
}
move("up"); //只能是up down left right,类似枚举
const arr1: number[] = [1, 2, 3];
const arr2: Arry<number> = [4, 5, 6]; // 泛型
const arr3: Arry<string> = ["a", "b", "c"]; // 泛型
const zsy: [string, number] = ["zsy", 18]; // 元组类型
```

## 联合类型

```js
// 取值可以为多种类型中的一种
// 用 | 分隔每个类型
const name: string | number = 123;
const table: boolean | unmber | string = true;
let name3: string | number;
console.log(name3.toString()); // 报错
//字符串字面量类型
type EventNames = "click" | "scroll" | "mousemove";
//联合类型
type EventNames2 = string | number | boolean;
function handleEvent(value: EventNames) {
  console.log(value);
}
function handleEvent2(value: EventNames2) {
  console.log(value);
}
handleEvent("scroll"); // 没问题
handleEvent2(123); // 没问题
handleEvent2(true); // 没问题
handleEvent2("123"); // 没问题
```

## 元组类型

- 标识数组里面每个元素的类型，必须**一一对应** tuple

```js
const tuple: [string, number, boolean] = ["abc", 123, true];
```

## 枚举类型

```js
enum USER_ROLE {
  USER = 'user',
  ADMIN = 'admin',
  MANAGER = 'manager',
}
CONSOLE.LOG(USER_ROLE.USER);  // user
CONSOLE.LOG(USER_ROLE.ADMIN); // admin
CONSOLE.LOG(USER_ROLE.MANAGER); // manager
//普通枚举
enum USER {
  USER,
  ADMIN,
  MANAGER,
}
//常量枚举
const enum USER {
  USER,
  ADMIN,
  MANAGER,
}
let user = [USER!.USER, USER！.ADMIN, USER！.MANAGER];  //USER!非空断言感叹号，表示次此类型必定是有值的

```

## 任意类型 any

```js
const any: any = "123";
```

## object

- 除了基础类型，其他都是 object 类型比如对象数组等

```js
const obj: object = {};
const create = (obj: object) => {};
create({}); //传递对象
create([]); //传递数组
create(function() {}); // 传递函数
```

## 对象类型

- 用来约束对象属性的类型,类似元组约束数组的功能 interface
- 接口可以继承和扩展

```js
interface Person {
  name: string;
  age: number;
  readonly id: number; // readonly只读属性,不可修改
}
const setPerson: Person = {
  name: "zsy",
  age: 18,
  id: 123,
};
setPerson.id = 456; // 报错
interface Teacher extends Person {
 type: string;// 扩展属性
 [key: string]: any;// 扩展任意属性
}
let teacher: Teacher = {
  ...setPerson,
  type: "teacher", // 扩展属性
  a: 1, // 扩展任意属性
  b: 2, // 扩展任意属性
};
//类型断言 as 语法 类型断言 有两种写法 1、<类型>值 2、值 as 类型(强制转换类型)
let teacher2: Person = {
  ...setPerson,
  type: "teacher", // 扩展属性
  a: 1, // 扩展任意属性
  b: 2, // 扩展任意属性
  name: ["zsy","sg"], // 类型断言
} as Person;  // 类型断言

```

## 函数类型

- 函数主要关心返回值和参数

```js
// 函数声明
function add(x: number, y: number): number {
  return x + y;
}
add(1, 2);
// 函数表达式
const add2 = function(x: number, y: number): number {
  return x + y;
};
add2(1, 2);
// 箭头函数
const add3 = (x: number, y: number): number => {
  return x + y;
};
//声明函数类型
type type = (x: number, y: number) => number;
const add5: type = (x: number, y: number): number => {
  return x + y;
};
//  函数重载
//  重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
//  重载的函数必须用 function 关键字定义，与普通函数定义区分开来。
//  重载的函数必须在函数的前面，否则会报错。
function add6(...rest: number[]): number;
function add6(...rest: string[]): string;
function add6(...rest: any[]): any {
  let first = rest[0];
  if (typeof first === "string") {
    return rest.join("");
  }
  if (typeof first === "number") {
    return rest.reduce((pre, cur) => pre + cur);
  }
}
```

## 类

```js
export {}; // 解决全局变量冲突,使得每个文件都是一个模块
class Person {
  name: string = "zsy";
  function(): void {
    console.log(this.name);
  }
}
let person1 = new Person();
person1.name = "saturn";
person1.function();
//定义存取器
class Person2 {
  private _name: string = "zsy";
  get name() {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
}

```

## 泛型

- 泛型就是解决类型的复用性，用来在代码执行时传入的类型，不指定类型，使用时指定类型

```js
// 泛型就是解决类型的复用性
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
createArray < string > (3, "x"); // 规定传入的类型
createArray(3, "x"); // 不规定传入的类型，自动识别传入的类型

//多个泛型 元组的交换 [string,number] => [number,string]
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
swap[(7, "seven")]; // ['seven', 7]
```
