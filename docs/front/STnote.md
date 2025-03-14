# 复习（CSS+JS）
[[toc]]
## CSS基础
### 所有选择器
### 背景api
### 边框api
### 字体+行高
### 布局
- float
- flex
- position
### 裁剪 clip-path
### 动画
- 过度动画
- 关键帧动画
- 逐帧动画
### 盒子模型
### 浏览器渲染的过程
### 浏览器加载的过程
### src和href
### 图片对应的api
- onload 
- complete



## JS基础

### JS数据类型
- 有哪几种数据类型？
    8种数据类型：
    undefined 
    null
    number
    string
    boolean
    symbol
    object
    bigint 
```js
//Bigint数据类型为Transact-SQL的系统数据类型，当整数值超过int数据范围时才可以使用，比Number类型支持更大的整数值，
```
- 怎么区别复杂数据类型？
    - 内存分配不同：
        基本数据类型存储再栈中；
        复杂数据类型存储再堆中，栈中存储的变量，是指向堆中的引用地址
    - 访问机制不同：
        基本数据类型是按值访问的
        复杂数据类型按引用访问的，JS不允许直接访问存储在堆中的对象，必须通过引用地址来获得这个对象中的值
    - 复制变量时不同：
        基本数据类型：a = b，是将b中保存的原始值的副本赋值给新变量a，a和b完全独立，互不影响
        复杂数据类型：a = b，是将b中保存的对象内存的引用地址赋值给了新变量a，a和b指向同一个堆内存地址，其中一个值发生改变，另一个值也发生改变
- 判断数据类型的方法？
    - typeof()方法
        - 返回的结果只能包括（number,boolean,string,function,object,undefined）
        - typeof运算符无论引用的对象是什么类型，它都返回object
    - instanceof方法
    因为A instanceof B 可以判断A是不是B的实例，返回一个布尔值，由构造类型判断出数据类型
    ```js
    console.log(arr instanceof Array);//true
    console.log(fn instanceof Function);//true
    ```
    - 通过Object下的toString.call()方法来判断
    ```js
    //toSting.call()原理实际上就是 Object.prototype.toSting.call():改变方法中的this指向，指向传递进去的参数
    toString.call(function(){})
    // "[object Function]"

    toString.call(null)
    //"[object Null]"
    
    toString.call([123])
    //"[object Array]"

    toString.call(true)
    //"[object Boolean]"
 
    toString.call(Symbol(123))
    // "[object Symbol]"

    ```
    - 根据对象的constructor判断
    ```js
    console.log(arr.constructor === Array);//true
    console.log(fn.constructor === Function);//true
    ```
    - jQuery
        - jQuery提供了一系列的方法，用来判断数据类型，
```js

```

### 数据类型转换
- toString()方法用来将其他数据类型转换为String类型
    支持：number、boolean、string、object
    不支持：null、undefined
- String()方法也是将其他数据类型转换为String类型
    什么类型都可以转换成string
```js
console.log(string(null));//"null"
```
- Number()方法将任意值转换成数值，如果有一个不是数值，就返回NaN
- parseInt()方法从第一位开始解析为整数，直到遇到非数字结束,如果第一位是非数字则返回NaN
- parseFloat()方法从第一位开始解析为两位小数，直到遇到非数字结束,如果第一位是非数字则返回NaN
```js
console.log(parseInt(13.14abc));//13.14
```
- Boolean()方法将任意值转换成布尔值，null、undefined、NaN会被转换成false，其他都会转换成true
```js
console.log(Boolean(123));//true
console.log(Boolean(undefined));//false
```
- 隐式转换
```js
num = "123"
num1 = 123
console.log(num1 + num);//字符串123123
console.log(+num);//数字123
console.log(typeof(+num));//number
console.log(typeof(num1 + num));//string
```
### JSON
- JSON是什么？
    - JSON指的是JS对象表示法
    - JSON是轻量级的文本数据交换格式
    - JSON独立于语言
    - JSON具有组我描述性，更易理解
- JSON的格式？
    - JSON对象是一个无序的“名称”/“值”对集合。用大括号{}包裹，名称和值之间使用冒号：，名称/值对之间用逗号，。
    - JSON字符串
- JSON常用的api？
    - JSON.stringify()//把JS对象序列化（不包含空格和缩进）为JSON字符串
    - JSON.parse()//把JSON字符串转换成JS对象
```js
console.log(JSON.stringify({ a: 1, b: 2 }));//{"a":1,"b":2}//打印结果是一个JSON字符串，不是表面看起来的对象
console.log(JSON.parse('{"a":123}'));//{ a: 123 }//{"a":123}需要加单引号才不会报错
```
- JSON数值
    格式：{"key":value}
```js
{  
    "key1":123, 
    "key2":456}
```
- JSON字符串
    格式：{"key":"value"}
```js
{
    "key1":"张三",
    "key2":"李四"
}
```
- JSON数组
    格式：{"key1":[value]}
```js
'{"key1":[123,456]}'
```
- JSON对象
    格式：{"key":{value}}
```js
{
    "key1":{a:123,b:456}
}
```

### 继承
- 什么是继承？
    继承就是子类具有父类的各种方法和属性
- 常用的继承方法？
    - 原型链继承
    ```js

    ```
    - 构造函数继承（借助call）
    - 原型式继承
    - 寄生式继承
    - 以上各种的组合继承
- 继承的作用
### 原型和原型链
- 原型：每一个函数都会创建一个prototype属性，这个属性是一个对象，这个对象就是通过调用构造函数创建的对象的原型；原型对象上面定义的属性和方法可以被对象实例共享
- 原型链：每一个对象都拥有一个原型对象，通过_proto_属性指向其原型对象，并从中继承属性和方法
```js
function Person(){}
//直接给原型赋值
Person.prototype.name = "saturn";
Person.prototype.age = 30;
Person.prototype.job = "SE";
Person.prototype.sayName = function(){
    console.log(this.name);
};
let person1 = new Person();
let person2 = new Person();
console.log(person1.sayName());//"saturn"
console.log(person2.sayName());//"saturn"
console.log(person1.sayName == person2.sayName);//true
//prototype属性
console.log(Person.prototype);//{ name: 'saturn', age: 30, job: 'SE', sayName: [Function (anonymous)] }
```
- Object.isPrototypeOf(),接收一个对象参数，判断当前对象是否是传入对象的原型，如果是则返回true，否则返回false
- Object.getPrototypeOf(),返回传入对象的原型
- Object.setPrototypeOf(),给实例的私有特性传入一个新的属性！！！谨慎使用
- Object.create(),创建一个新对象，同时为其指定原型
```js
let person = {
    name:"saturn" 
};
let person1 = Object.create(person);
person1.age = 20;
console.log(person1.name);//saturn
console.log(person1.age);//20
```
- Object.hasOwnProperty(),确定传入的属性是在实例上（自有属性）还是在原型对象上（非自由属性），如果存在调用它的对象实例上时，返回true,否则返回false
- Object.hasOwnProperty()方法是Object的原型方法（也称实例方法），它定义在Object.prototype对象之上，所有Object的实例对象都会继承hasOwnProperty() 方法。
### new的过程
```js
let a = new fn();
```
- new 作用是通过类或者构造函数来创建新的对象（复杂数据类型）   
- 内部干了三件事
    - 1、执行 构造函数  在内部创建一个hash对象{} 关联原型 (把这个空对象的隐式原型_proto_属性赋值给构造函数的显示原型prototype属性)
    - 2、将this指向我们创建的hash对象{}，给此对象添加属性
    - 3、执行返回新对象的结果，如果是一个对象，那么返回这个对象；如果不是一个对象，那么返回第一步我创建的hash对象{}
### this问题
- 有对象就指向调用的对象，没有对象就指向全局对象
```js
var name = 'zsy', age = 18;
var obj = {
    name: '张三',
    age: 20,
    fn: function () { 
        console.log(this.name + "年龄" + this.age);
        console.log(this.age);//20,说明this指向的是obj
    }
}

obj.fn()//张三年龄20
```
- 用new构造新对象（复杂数据类型），this就指向新对象

```js

```
- 通过apply、call、bind来改变this的指向(后面有讲)
- 箭头函数的this在申明时就已经绑定到内部，不会被外部影响，call和apply方法对箭头函数无效
### call apply bind
- 都是用来重新定义对象的指向的
- call()方法，第一个参数时this的指向对象，后面跟其他参数，使用逗号隔开
- apply()方法，第一个参数时this的指向对象，后面的参数必须放在数组[]里传进去
- bind()方法，第一个参数时this的指向对象，后面参数和call()方法一样
- 注意bind()方法返回一个新函数，不调用时，不会执行
```js
let obj = {
    age: 18,
    name: '张三',
    fn: function (a,b) { 
        console.log(this.name + "年龄" + this.age,"性别"+a+"爱好"+b);
    }
}
obj.fn('男','实战')//张三年龄18 性别男爱好实战
let test = {
    name: '李四',
    age:20
}
let test2 = {
    name: '小艺',
    age:20
}
let test3 = {
    name: 'sg',
    age:18
}
// obj.fn()//张三年龄18  性别难爱好实战
obj.fn.call(test, '男', '妹妹');//李四年龄100 性别男爱好妹妹
obj.fn.apply(test2, ['女', '哥哥']);//小艺年龄20 性别女爱好哥哥
obj.fn.bind(test3, '男', '网恋');//注意：在没有调用新返回的函数时，不会执行
obj.fn.bind(test3, '男', '网恋')();//sg年龄18 性别男爱好网恋
```
### 闭包
- 作用是为了延长生命周期
- 闭包是一个对象，这个对象的属性是子函数执行时访问到的父函数的变量
- 闭包的概念：1、函数嵌套函数；2、子函数访问了父函数的变量
- 垃圾回收机制：当前作用域的变量不在被其他地方引用时，JS引擎就会将此变量垃圾回收。
- 闭包指的是那些引用了另一个函数作用域中变量的函数，通常在嵌套函数中实现的
```js
function fn() { 
    var a = 1
    var b = 2
    return () => { 
        console.log(a);
    }
}
const test = fn();
test();//1
```
### 日期的常用api
- let now = new Date();
### math的使用
- math对象作为保存数学公式、信息和计算的地方
- 在math中计算要比直接在JS上实现的块，
- Math.min()、Math.max()
    - Math.ceil()方法，向上取整
    - Math.floor()方法，向下取整
    - Math.round()方法，四舍五入
    - Math.fround()方法，取最接近的单精度（32位）浮点值
    ```js
    console.log(Math.ceil(6.66));//7
    console.log(Math.floor(6.66));//6
    console.log(Math.round(6.66));//7
    ```
- Math.random()方法，返回一个0~1范围内的随机数（包含0，不包含1），此方法始终返回小数
```js
//1~10之间的随机数
let num = Math.floor(Math.random() * 10 + 1);
console.log(num);
```
### 对象的遍历
- 方法一：for...in 循环遍历，得到对象的所有属性，包括实例和原型上的属性和方法
- （包含继承、不包含是不可枚举、不包含symbol）
```js
let obj = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd'
}
Object.prototype.name = '张三';
Object.prototype.fn = function () { 
    console.log('原型方法');
}
for (let i in obj) { 
    console.log(i+':'+obj[i]);
}
//1:a
//2:b
//3:c
//4:d
//name:张三
/* fn:function () { 
    console.log('原型方法');
}
*/
```
- 方法二：Object.keys(obj)、Object.vallues(obj)、Object.entries(obj)遍历，接收一个对象作为参数，返回该对象所有可枚举属性名称或value组成的数组
- （不包含继承、不包含不可枚举、不包含symbol）
- 然后可以使用数组的forEach()方法遍历所得到的数组
```js
//Object.keys(obj).forEach(function (key) {
//    console.log(key+':'+obj[key]);
//Object.values(obj).forEach(function (key) {
//    console.log(key+':'+obj[key]);
let obj = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd'
}
Object.prototype.name = '张三';//原型上的属性不会被遍历出来
console.log(Object.keys(obj));//[ '1', '2', '3', '4' ]
console.log(Object.values(obj));//[ 'a', 'b', 'c', 'd' ]
console.log(Object.entries(obj));//[ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]
```
- 方法三：Object.getOwnPropertyNames()方法可以遍历出所有属性，无论是否可以枚举，
（不包含继承、包含不可枚举、不包含symbol）
```js
//Object.getOwnPropertyNames(obj).forEach(function (key) {
//    console.log(key+':'+obj[key]);
const obj = Object.create({
    1:'a'
}, {
    2: {//此属性是不可枚举的?
        11: 'aa',
        22: 'bb',
    }
})
obj.fn = 'fn'
console.log("key",Object.keys(obj));//[ 'fn' ]
console.log("get",Object.getOwnPropertyNames(obj));//[ '2', 'fn' ]
```
- 方法四：Object.getOwnPropertySymbols()方法返回对象自身的Symbol属性组成的数组，
- （不包含继承、包含不可枚举、包含symbol）
```js
//Object.getOwnPropertySymbols(obj).forEach(function (key) {
//    console.log(key+':'+obj[key]);
let obj = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd'
}
console.log(Object.getOwnPropertySymbols(obj));//[]空数组，因为obj没有Symbols属性
let obj2 = {
    1: 'a',
    2: 'b',
    3: 'c',
    4: 'd'
}
obj2[Symbol('fn')] = "Symbol fn";//给对下添加一个Symbol属性
console.log(Object.getOwnPropertySymbols(obj2));//[ Symbol(fn) ]
```
- 方法五：Reflect.ownKeys(obj),接收一个对象作为参数，可以得到对象自己的所有属性，包括不可枚举属性，返回该对象所有属性名称和value组成的数组
- （不包含继承、包含不可枚举、包含symbol）
```js
const obj = {
    a: 1,
    b: 2,
    c: 3,
    1: 4,
    [Symbol("xx")]: 5,
    d: 6,
    2: 7,
    3:'123',
    [Symbol("dd")]: 6,
    [Symbol("qq")]: "7"
}
Object.prototype.name = 'saturn';
console.log(Object.getOwnPropertySymbols(obj));
console.log("get", Object.getOwnPropertyNames(obj));
console.log(Reflect.ownKeys(obj)); 
for (let i in obj) {
    console.log("for in",i+":"+obj[i]);
}
```
### 数组的所有api
- 不改变原数组
    - 1、array.join(),将数组的所有元素转换成字符串。（转换字符串）
    ```js
    //join(),默认每个元素之间用逗号隔开
    //join('-'),自定义分隔符，每隔元素之间用 - 隔开
    let arr = [1, 2, '123', { 1: 'a' }]
    let str = arr.join();
    console.log(arr);//[ 1, 2, '123', { '1': 'a' } ]
    console.log(str);//1,2,123,[object Object]
    ```
    - 2、array.concat(),在现有数组全部元素的基础上末尾添加并创建一个新数组。(数组拼接)
    ```js
    let arr1 = [1, 2, 'abc', '123'];
    let arr2 = arr1.concat('456', '789');
    console.log(arr1);//[ 1, 2, 'abc', '123' ]
    console.log(arr2);//[ 1, 2, 'abc', '123', '456', '789' ]
    ```
    - 3、array.slice(),用于创建一个包含原素组中一个或多个元素的新数组；此方法接收一个或两个参数，如果是两个参数，就返回开始索引到结束索引对应的所有元素(不包含结束索引)，如果只有一个参数，就返回该索引到数组末尾的所有元素。（数组截取）
    ```js
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    let arr2 = arr1.slice(5, 9);
    let arr3 = arr1.slice(7);
    console.log(arr1);//[1, 2, 3, 4, 5,6, 7, 8, 9, 0]
    console.log(arr2);//[ 6, 7, 8, 9 ]
    console.log(arr3);//[ 8, 9, 0 ]
    ```
    - 4、array.indexOf(),array.lastIndexOf(),array.includes()搜索元素，接收两个参数：要查找的元素和一个可选的起始搜索位置，前两者如果找到元素则返回元素的索引值，没有找到则返回-1，includes()返回布尔值。注意：在比较需要查找的参数时，使用的是全等比较（===），（元素搜索）
    ```js
    let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    console.log(numbers.indexOf(4));//3
    console.log(numbers.lastIndexOf(4));//5
    console.log(numbers.includes(4));//true
    console.log(numbers.indexOf(4,4));//5
    console.log(numbers.lastIndexOf(4,4));//3
    console.log(numbers.includes(4, 6));//false
    console.log(numbers.indexOf(6));//-1
    console.log(numbers.lastIndexOf(6));//-1
    ```
- 改变原数组
    - splice(),在数组中插入、替换或删除元素，始终返回被删除元素组成的新数组。有3中不同的方式使用：
        - 1、删除。需要传入2个参数：1、需要删除的第一个元素索引；2、要删除的元素数量，比如：array.splice(0,3).
        - 2、插入。需要传入3个参数：1、开始插入的位置索引，2、0；3、要插入的元素。需要插入的元素可以有很多
        - 3、替换。需要传入3个参数：1、开始位置索引；2、要删除元素的数量；3、插入的任意多个元素
        ```js
        let arr1 = ['a', 'b', 'c', 'd'];
        let arr2 = arr1.splice(0, 2);
        let arr3 = arr1.splice(1, 0, 'ab');
        let arr4 = arr1.splice(1, 1, 'bb');

        console.log(arr1);//[ 'c', 'bb', 'd' ]原数组改变
        console.log(arr2);//[ 'a', 'b' ]返回被删除的元素组成的数组
        console.log(arr3);//[]没有被删除的元素，所以时空数组
        console.log(arr4);//[ 'ab' ]返回被删除的元素组成的数组
        ```
    - 排序方法：
        - reverse(),将数组元素反向排列
        - sort(),按照升序重新排列数组元素，会在每一项上调用String()方法转型函数，然后比较字符串来决定顺序
        ```js
        let num = [1, 2, 3, 4, 5,10,15];
        console.log(num.reverse());//[15,10,5,4,3,2,1]
        console.log(num.sort());//[1, 10, 15, 2,3,  4,  5]
        ```
    - 增删方法：
        - 1、push()方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度（末尾增加）
        - 2、pop()方法用于删除数组的最后一项，同时减少数组的hength值，返回被删除的元素（末尾删除）
        - 3、shift()方法用于删除数组的第一项，同时减少数组的length值，返回被删除的元素（开头删除）
        - 4、unshift()方法接收任意数量的参数，并在数组开头添加任意多个值，返回数组的最新长度（开头增加）
        ```js
        let num = [1, 2, 3, 4, 5];
        console.log(num.push(6,7));//7（新的length）
        console.log(num.unshift(0));//8（新的length）
        console.log(num);//[1,2,3,4,5,6,7]
        let num2 = [1, 2, 3, 4, 5, 6];
        let num3 = num2.pop();
        let num4 = num2.shift();
        console.log(num2);//[2,3,4,5]
        console.log(num3);//6时被删除项
        console.log(num4);//1是被删除项
        ```
    - 
- 数组迭代方法
    - for循环
    ```js
    let arr = [1,2,3,4,5,6,7,8,9,0]
    for (i = 0; i < arr.length; i++){   

    }
    ```
    - 传入每个方法的函数接收3个参数：item：数组元素、index：元素索引、array：数组本身。
    - every()方法对数组的每一项运行传入的函数，若每个运行结果都是true，则这个方法返回true
    - filter()方法对数组的每一项运行传入函数，返回所有运行结果为true的项
    - forEach()方法没有返回值，是最常用的数组遍历方法，他提供一个回调函数，可用于处理数组的每一个元素
    - map()方法对数组的每一项运行传入函数，返回由每次函数调用的结果构成的数组
    - some()方法对数组的每一项运行传入函数，如果有一项运行结果返回true，则这个方法返回true
### 字符串的所有api
- 1、toLocaleLowerCase 小写字母
```js
    let a = 'aSa';
    let b = a.toLocaleLowerCase();
    console.log(b);//asa
```
- 2、toUpperCase 大写字母
- 3、charAt 下标字符
- 4、charCOdeAt 下标字符编码
- 5、slice 截取 两个参数（start end） 两个参数为负数的情况下，直接会加上字符串的length
- 6、substring 两个参数（start end） 第一个参数为负数时直接看成0
- 7、substr 两个参数（start length） 第一个参数可以为负数，为负数时会加上字符串的length；第二个参数为负数时看成0
- 8、concat 末尾拼接类似数组方法
- 9、trim 去除首位空格
- 10、trimStart 去除首空格
- 11、trinEnd 去除尾空格
- 12、replace 替换可以加入正则
```js

```
- 13、split 分割 转成数组
- 14、indexOf 下标
- 15、lastIndexOf 下标
### DOM的操作方法
- DOM节点的创建
    - 元素节点
    ```js
    //创建一个div元素
    let div = document.createElement('div');
    cnosole.log(div);
    //创建一个span元素
    let span = document.createElement('span');
    ```
    - 属性节点
        属性节点包含两类:
        - 一类是DOM元素的基本属性，基本属性既可以通过如下方式设置，也可以通过createAttribute方式设置。
        ```js
        //创建一个div元素
        let div = document.createElement('div');
        //创建div的id属性为'id'
        document.div.id = 'id';
        ```
        - 还有一类是自定义属性。自定义属性一定要使用createAttribute方式来创建的。
        ```js
        //创建一个自定义属性custom
        var Attribute = document.createAttribute('custom');
        cnosole.log(dataAttribute); 
        ```
    - 文本节点
    创建文本节点
    ```js
    //document.createTextNode()
    let text = document.createTextNode('hello')
    ```
    - 注释节点
    创建注释节点
    ```js
    //document.createComment()
    let comment = document.createComment('添加注释');
    console.log(comment);
    ```
    - 节点克隆
    通过复制已存在的节点来创建新的文档节点。传参数true表示深复制，false表示浅复制
    ```js
    <body>
        <div id="parent">
            <h1 class="title">你好，世界</h1>
        </div>
    </body>
    <script>
    //获取id为parent的元素节点
    let parent = document.querySelector('#parent');
    //获取class为title的元素节点
    let child1 = document.querySelector('.title');
    //克隆child1元素节点
    let child2 = child1.cloneNode(true);
    //吧child2元素节点添加到parent容器里
    parent.append(child2);
    </script>
    
    ```
- DOM删除和替换
    - 删除子节点：removeChild(),在父节点上调用，参数是需要删除的子节点
    ```js
    <body>
        <div id="parent">
            <h1 class="title">你好，世界</h1>
        </div>
    </body>
    <script>
    //获取到类名为title的元素节点
    let h1 = document.querySelector('.title');
    //删除节点
    h1.parentNode.removeChild(h1);
    </script>
    ```
    - 替换子节点：replaceChild(),在父节点上调用,第一参数是新节点,第二个参数是需要替换的节点
    ```js
    <body>
        <div id="parent">
            <h1 class="title">你好，世界</h1>
        </div>
    </body>
    <script>
    //获取元素节点
    let child1 = document.querySelector('.title');
    //创建一个元素节点
    let h1 = document.createElement('h1');
    //给创建的元素节点添加文本
    h1.textContent = "hellow world";
    //替换元素节点
    child1.parentNode.replaceChild(h1,child1);
    </script>
    ```
- DOM属性修改
    - 标准属性：表示HTML文档元素的HTMLElement对象定义了读/写属性，它们对应于元素的HTML属性。 HTMLElement定义的通用HTML属性，包括id、lang、dir、事件处理程序onclick及表单相关属性等。
    ```js
    <head>
        <meta charset="utf-8">
        <title>三十课 - JavaScript DOM操作之标准属性</title>
        <script src="http://res.30ke.cn/res/js/console.js"></script>
    </head>
    <body>
    <form id="myform">
        <input type="text" value="毛瑞" />  
    </form>
    <div id="main"></div>
    <script>
        var form = document.querySelector("#myform");
        form.action = "http://30ke.cn";
        form.method = "post";
        console.log(form.id);
        console.log(form.action);
        console.log(form.method);
    </script>
    ```
    - 非标准属性
        - 获取属性值:getAttribute()
        ```js
        <body>
            <img id="img" src="http://res.30ke.cn/res/image/30ke.png" width="200px" />
            <div id="main"></div>
        <script>
            var img = document.querySelector("#img");
            //获取属性值
            console.log(img.getAttribute("width"));
        </script>
        </body>
        ```
        - 属性值设置:setAttribute()
        ```js
        <body>
            <img id="img" src="http://res.30ke.cn/res/image/30ke.png" width="200px" />
            <div id="main"></div>
        <script>
            var img = document.querySelector("#img");
            //设置属性值
            img.setAttribute("wieth","400px");
            console.log(img.getAttribute("width"));
        </script>
        </body>
        ```
        - 属性存在检测:hasAttribute()
        ```js
        <body>
            <img id="img" src="http://res.30ke.cn/res/image/30ke.png" width="200px" />
            <div id="main"></div>
        <script>
            var img = document.querySelector("#img");
            //检测属性存在
            console.log(img.hasAttribute("width"));
            console.log(img.hasAttribute("height"));
        </script>
        </body>
        ```
        - 删除属性:removeAttribute()
        ```js
        <body>
            <img id="img" src="http://res.30ke.cn/res/image/30ke.png" width="200px" />
            <div id="main"></div>
        <script>
            var img = document.querySelector("#img");
            //删除属性值
            img.removeAttribute("width");
            //检测属性存在
            console.log(img.hasAttribute("width"));
        </script>
        </body>
        ```
    - 数据集属性：dataset
    - 元素属性：attributes
    - 元素内容
        - 元素的内容：innerHTML
        innerHTML 属性以字符串形式返回这个元素的内容，也可以用来替换元素当前内容
        ```js
        <body>
            <div id="div1">1234567890</div>
        </body>
        <script>
            let parent = document.querySelector('#div1');
            parent.innerHTML = "<h1>你好！！</h1>";
        </script>
        ```
        - 元素及内容：outerHTML
        outerHTML 属性以字符串形式返回这个元素及内容。 也可以用来替换元素及当前内容
        ```js
        <body>
            <div id="div1">1234567890</div>
            <div class='class'></div>
        </body>
        <script>
            let parent = document.querySelector('#div1');
            parent.innerHTML = "<h1>你好！！</h1>";
            let perent2 = document.querySelector('.class');
            perent2.outerHTML = "<h1>你好！！</h1>";
            //注意观察替换后的标签结构变化
        </script>
        ```
        - 纯文本元素内容：textContent
        查询或替换纯文本元素内容的标准方法是用Node的textContent属性来实现。 在IE中，可以用Element的innerText属性来代替
        ```js
        body>
            <div id="div1">1234567890</div>
            <div class='class'></div>
        </body>
        <script>
            var title = document.querySelector("#div1");
            console.log(title.textContent); //1234567890
            title.textContent = "1234567890";
        </script>
        ```
- DOM属性查找
    -  id属性查找：
        - document.getElementById()查找拥有指定id的第一个元素节点,ID不存在，则返回nul
    - class属性查找:
        - document.getElementsByClassName()
    - name属性查找:
        - document.getElementsByName()
            - 一： name属性值 不是必须惟一，多个元素可能有同样的名称；
            - 二： name属性只在少数HTML元素中有效，包括表单、表单元素、iframe以及img 元素
    - 标签名查找:
        - document.getElementsByTagName()
    - css选择器查找:
        - document.querySelector()返回第一个匹配的元素;document.querySelectorAll()返回元素是类数组
- DOM插入
    - 插入子节点：appendChild()
    在指定元素上插入子节点，并使其成为该节点的最后一个子节点
    ```js
    <body>
        <div id="div1">1234567890</div>
        <div class='class'></div>
    </body>
    <script>
        let parent = document.querySelector('.class');
        let h1 = document.createElement('h1');
        h1.textContent = "你好~~"
        //在末尾添加新的节点
        parent.appendChild(h1);
    </script>
    ```
    - 节点前插入：insertBefore()
    在父节点上调用本方法,第一参数表示待插入的节点,第二参数是父节点中已经存在的子节点,新节点插入到该节点的前面
    ```js
    <body>
        <div id="div1">1234567890</div>
        <div class='class'>0</div>
    </body>
    <script>
        let child = document.querySelector('.class');
        let a = document.createElement('h1');
        a.textContent = "7777777";
        //在child节点之前添加新的a节点
        child.parentNode.insertBefore(a, child);
    </script>
    ```
- DOM遍历
    - 节点相关
        - 父节点：parentNode
        - 子节点：childNodes
        返回所有子节点，即NodeList对象
        ```js
        var parent = document.querySelector("#parent");
        var children = parent.childNodes;
        for(var i =0; i< children.length; i++) {
            console.log(i+"="+children[i].nodeName);
        }
        console.log(children.length);
        ```
        - 首子节点：firstChild
        - 尾子节点：lastChild
        - 下一兄弟节点：nextSibling
        - 前一兄弟节点：previousSibling
        - 节点类型：nodeType
        ```js
        <!-- 返回节点类型的数字表示
        1-代表Element元素节点
        3-代表Text文本节点
        8-代表Comment注释节点
        9-代表Document文档节点
        11-代表DocumentFragment文档片段节点 -->
        ```
        - 节点值：nodeValue
        - 节点名：nodeName
    - 元素相关
        - 子元素：children
        - 首子元素：firstElementChild
        - 尾子元素：lastElementChild
        - 下一兄弟元素：nextElementSibling
        - 前一兄弟元素：previousElementSibling
        - 子元素数量：parent.childElementCount
### BOM的操作方法
- BOM（浏览器对象模型）的对象用于访问浏览器的功能，提供了当前窗口中加载的文档有关的信息，和一些导航功能。
    - BOM主要用于管理窗口与窗口之间的通讯，因此其核心对象是window
    - BOM由一些列相关对象构成，并且每个对象提供 很多方法与属性
- 浏览器对象模型
```js
<body>
    <img src="../front/img/BOM模型.png" alt="">
</body>
```
- 上图的结构关系：
    - location对象：浏览器当前的URL信息。
    - navigator对象：浏览器本身信息。
    - history对象：浏览器的浏览历史记录信息。
    - screen对象：浏览器的屏幕信息。
    - document对象：代表当前窗口的网页文档。
- window对象（核心对象）
    - window对象 ：表示浏览器窗口，是JS的顶层对象。
    window对象表示一个浏览器窗口或一个frame框架，它处于对象层次的最顶端，它提供了处理浏览器窗口的方法和属性。
    window对象是浏览器对象中的默认对象，所以可以隐式地引用window对象的属性和方法。
    在浏览器环境中，添加到window对象中的方法、属性等，其作用域都是全局的。
    JavaScript中的标准内置对象，在浏览器环境中也是做为window的方法和属性出现的。
    ```js
    var age = 30;
    var sayAge = () => console.log(this.age);//30
    sayAge(); 
    console.log("1", window.age); //30
    console.log("2", window.sayAge); //30
    ```
- DOM（document）相关对象：
    - DOM可以认为是BOM的一个子集，DOM中文档操作相关对象，如：Node、Document、Element等DOM节点类型对象，都是做为window对象的子属性出现的。
    - document是window对象的一个属性，它是一个Document对象实例，表示当前窗口中文档对象。通过该对象，可以对文档和文档中元素、节点等进行操作。
- frames对象：
    frames对象是一个集合，表示当前页面中使用的子框架。
    如果页面中使用了框架，将产生一个框架集合frames，在集合中可以用数字下标（从0开始）或名字索引框架。
    集合中的每一个对象，包含了框架的页面布局信息，以及每一个框架所对应的window对象。
- navigator对象：
    navigator 是指浏览器对象，该对象提供了当前正在使用的浏览器的信息。
    navigator 对象中的属性是只读的，W3C在HTML5标准中，对该对象进行了规范。
    由于浏览器的不同，该对象的具体值可能有所区别。
- history对象：
    history对象来保存浏览器历史记录信息，也就是用户访问过的页面。
    浏览器的前进与后退功能本质上就是history的操作。history对象记录了用户浏览过的页面，通过该对象提供的API可以实现与浏览器前进/后退类似的导航功能。
- location对象：
    location是一个静态对象，该对象是对当前窗口URL地址的解析。
    该对象提供了可以访问URL中不同部分的信息属性，通过location对象也可以实现页面或锚点跳转等功能。
- screen对象：
    screen对象中包含了用户显示器屏幕相关信息。通过该对象，可以访问用户显示器屏幕宽、高、色深等信息。

- navigator
  - 检测浏览器
```JS
var ua = navigator.userAgent
var isChrome = ua.indexOf('Chrome')
console.log(isChrome)
```
- screen
  - screen.width
  - screen.height
- location
  - location.href 整个url
  - location.protocal 协议 'http':'https'
  - location.host 域名 www.baidu.com
  - location.pathname 路径  /a.html
  - location.search ?后面的 /a.html?name='sg'
  - location.hash  #后面的 /a.html#name='sg'
- history
  - history.back() 后退
  - history.forward() 前进
- 可视区域的宽/高(dom)
  - DOM.clientWidth
  - document.documentElement.clientWidth
  - document.documentElement.clientHeight
- 可视区域的宽/高(Bom)
  - window.innerWidth
  - window.innerHeight
- 滚动条的距离(dom)
  - 谷歌浏览器 有点问题
    - document.body.scrollTop 纵向
    - document.body.scrollLeft 横向
- 其他浏览器
    - document.documentElement.scrollTop
    - document.documentElement.scrollLeft
- 滚动条的距离(bom)
    - window.pageYOffset 
    - window.pageXOffset 
- 设置滚动的距离
    - window.scrollTo(x,y)
- 滚动设置  
    - 两个参数必需同时出现
    - onscroll和onresize
    - window.onscroll = ()=>{} 滚动条触发这个方法
    - window.onresize = ()=>{} 窗口改变大小触发整个方法
- 缓存
    - localstorage（暂存，关闭浏览器就会被清除）
    - sessionstorage（临时存储，不会因为关闭浏览器而清除）
### 事件和事件流
- JS与HTML的交互是通过事件实现的，事件代表文档或浏览窗口中某个有意义的时刻，可以使用仅在事件发生时执行的监听器（事件处理程序）订阅事件。
- 事件流
事件流描述了页面接收事件的顺序，分为事件冒泡和事件捕获
- 事件冒泡（IE事件流）
```js
<div class="div1">
        div1
        <div class="div2">
            div2
            <div class="div3">
                div3点击我

            </div>
        </div>
    </div>
let dom1 = document.querySelector('.div1');
let dom2 = document.querySelector('.div2');
let dom3 = document.querySelector('.div3');
dom1.onclick = function(event){
    console.log('dom1',event)
}
dom2.onclick = function(event) {
    console.log('dom2', event)
}
dom3.onclick = function(event) {
    console.log('dom3', event)
}
// 当在浏览器中用鼠标点击"div3"元素时，会触发事件并打印如下结果：
// dom3{}
// dom2{}
// dom1{}
// 事件从最具体的元素开始触发，然后向上传播（由里向外）。
```
- 事件捕获（谷歌事件流）
```js
// 与事件冒泡完全相反的传递方向（由外向里）。
```
- DOM事件流
DOM事件流分为三个阶段：事件捕获、到达目标、事件冒泡。事件捕获最先发生,为提前拦截事件提供了可能。然后实际的目标元素接收到事件。最后一个阶段是事件冒泡，最迟要在这个阶段响应事件（书上492页）。
### 事件处理程序
事件意味着用户或者浏览器执行的某种动作：单击（click）、加载（load）、鼠标悬停（mouseover）。为了响应这些事件而被调用的函数被称为事件处理程序。以"on-"开头。
```js
// onclick
// onload
// onmouseup等等
```
- 移除事件
把事件处理程序设置为null
```js
btn.onclick = null;// 移除事件处理程序
```
- DOM0事件处理程序:
把一个函数赋值给一个事件处理程序（DOM元素的）属性
```js
<body>
        <div id="btn">
            <button type="">按钮</button>
        </div>
</body>
<script>
    let btn = document.getElementById('btn');
    btn.onclick = function(){
        console.log('123')
    }
<script/>
```
- DOM2事件处理程序:
DOM2 Event为事件处理程序的赋值和移除定义了两个方法：addEventListener()和removeEventListener()。接收三个参数：事件名、事件处理函数和一个布尔值，默认为false，（ture表示在捕获阶段调用事件处理程序；false表示在冒泡阶段调用事件处理程序）。使用DOM2方式主要优势是可以为同一个事件添加多个处理程序
```js
<div id="myBtn">Dom2事件</div>
let btn = document.getElementById('myBtn');
btn.addEventListener("click",(event)=>{
    console.log('btn',event)
},false);
```
- 移除事件：使用removeEventListener()方法，需要传入与添加时同样的参数来移除
    - 注意：使用addEventListener()方法添加的匿名函数事件，无法被removeEventListener()方法移除
### 网络请求
- 常用的库 axios
### ajax(axios) 和 fetch  
- ajax网络请求与远程资源
    - XMLHttpRequest 对象
    - 所有现代浏览器都通过XMLHttpRequest构造函数源生支持XHR对象；
    ```js
    let xhr = new XMLHttpRequest();
    ```
    - 使用XHR
    - 使用XHR首先要调用open()方法，接收三个参数：1、请求类型（"get"，"post"等）、2、请求URL、3、表示请求是否异步的布尔值（默认为"ture"异步）；
    ```js
    xhr.open("get","example.php","false");
    ```
    调用open()方法实际不会发送请求，只是为发送做好准备。
    *URL只能访问同源地址（域名相同、端口相同、协议相同）。
    - 发送定义好的请求，必须调用send()方法,接收一个参数：作为请求体发送的数据。如果不需要发送请求体，则传参数"null"。
    ```js
    xhr.open("get","example.php","false");
    xhr.send(null);
    ```
    - 收到响应后XHR对象的以下属性会被填充数据：
        - responseText:作为响应体返回的文本；
        - responseXML:如果响应内容类型是"text\xml"或者"application\xml"，那就是包含响应数据的XML DOM文档；
        - status:响应的HTTP状态；
        - statuaText:响应的HTTP状态描述。     
    - 收到响应后，第一步需要检查status属性以确保响应成功返回。HTTP的状态码为200+表示成功，304表示从缓存中直接拿去，为修改过资源。然后再查看respoonseText文本。如下检查状态码：
    ```js
    // 同步请求
    let xhr = new XMLHttpRequest();
    xhr.open("get","example","false");
    xhr.send(null);
    if ((xhr.status >=200 && xhr.status <= 300) || xhr.status = 304){
        <!-- 10s 后接收到消息 -->
        alert(xhr.responseText);
    }else{
        alert("request was unsuccessful:" + xhr.status);
    }

    ```
    XHR对象有一个readyState属性，表示当前处于请求\响应的过程的哪个阶段。
    0：未初始化；
    1：已打开；
    2：已发送；
    3：接收中；
    4：完成响应。
    ```js
    // 异步请求，可以不阻塞JS代码继续执行。
    let xhr = new XMLHttpRequest();
    xhr.onReadyStateChange = function(){
        if(xhr.readState = 4){
            if((xhr.status >= 200 && xhr.status <= 300) || xhr.status = 304) {
                alert(xhr.responseText);
            }else {
                alrt.("Requset was unsuccesful:" + xhr.status);
            }
        }
    };
    xhr.open("get","example","false");
    xhr.send(null);
    ```
    可以写成一下简便格式
    ```js
    let xhr = new XMLHttpRequest();
    xhr.onReadyStateChange = function(){
        if((xhr.readState = 4 && xhr.status >= 200 && xhr.status <= 300) || (xhr.readState = 4 && xhr.status = 304)){ 
            alert(xhr.responseText);
        };
    };
    xhr.open("get","example","false");
    xhr.send(null);
    ```
    以上代码可能显示服务器返回的内容，也有可能显示错误消息，取决于HTTP响应的状态码。
    收到响应之前如果想要取消异步请求，可以调用abort()方法，终止请求：
    ```js
    xhr.abort();
    ```
- fetch
    - 地址：https://api.github.com/users/saturn9999
    - fetch()使用 Promise，不使用回调函数，因此大大简化了写法，写起来更简洁。
    - fetch()采用模块化设计，API 分散在多个对象上（Response 对象、Request 对象、Headers 对象）
    - fetch()接收一个 URL 字符串作为参数，默认向该网址发出 GET 请求，返回一个 Promise 对象
    - Response 对象：
        - fetch()请求成功以后，得到的是一个 Response 对象。它对应服务器的 HTTP 回应;response.status和response.statusText就是 Response 的同步属性，可以立即读取。
        ```js
        async function fetchText() {
            let response = await fetch('/readme.txt');
            //同步属性response.status和response.statusText
            console.log(response.status); 
            console.log(response.statusText);
            // fetch()发出请求以后只有网络错误，或者无法连接时，fetch()才会报错,通过Response.status属性，得到 HTTP 回应的真实状态码，才能判断请求是否成功
            if (response.status >= 200 && response.status < 300) {
                return await response.text();
            } else {
                throw new Error(response.statusText);
            }
        }
        ```
    - Response.headers 属性：
        - Response 对象还有一个Response.headers属性，指向一个 Headers 对象，对应 HTTP 回应的所有标头。
        Headers 对象可以使用for…of循环进行遍历
        ```js
        async function fetchText() {
            let response = await fetch('/readme.txt');
            for (let [key, value] of response.headers) { 
            console.log(`${key} : ${value}`);  
            }

            // 或者
            for (let [key, value] of response.headers.entries()) { 
            console.log(`${key} : ${value}`);
            }
        }
        ```
    - fetch()的第二个参数：定制 HTTP 请求方式：
    ```js
    const response = await fetch(url, {
        //method：HTTP 请求的方法，POST、DELETE、PUT都在这个属性设置。
        method: 'POST',
        //headers：一个对象，用来定制 HTTP 请求的标头。
        headers: {
            //标头Content-Type要设成’application/json;charset=utf-8’。因为默认发送的是纯文本，Content-Type的默认值是’text/plain;charset=UTF-8’
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        //body：POST 请求的数据体。
        body: 'foo=bar&lorem=ipsum',
    });
    ```
    - fetch()配置对象的完整 API
    ```js
    const response = fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "text/plain;charset=UTF-8"
        },
        body: undefined,
        referrer: "about:client",
        referrerPolicy: "no-referrer-when-downgrade",
        mode: "cors", 
        credentials: "same-origin",
        cache: "default",
        redirect: "follow",
        integrity: "",
        keepalive: false,
        signal: undefined
    });
    ```
```js
// Fetch
// 天然返回  promise 对应
//try await
async function getJSON() {
    let url = 'https://api.github.com/users/songge7777';
    try {
        let response = await fetch(url);
        console.log(123, response)
        const rs = await response.json();
        console.log(rs)
    } catch (error) {
        console.log('Request Failed', error);
    }
}
getJSON()
```
### promise和async await
- promise
```js
let p1 = new Promise((resolve, reject) => {
    // 异步............
    setTimeout(() => {
        resolve(1)
    }, 2000)
});
//promise 核心是处理回调地域问题
function fn() {
    // 1....
    console.log('a','第一步')
    p1.then((e) => {
            // 2....
            console.log('c', '第二步');
            console.log('成功', e)
            return p1
        }, (e) => {
            console.log('失败', e)
        })
        .then((e) => {
            console.log('链式调用', e)
        })
    console.log('b','第一步')
}
fn()
```
- then 方法：所有的promise对象实例里都有一个then方法，它是用来跟这个promise进行交互的。首先then方法会缺省调用resolve()函数
- catch 方法：当一个promise被拒绝(reject)时,catch 方法会被执行
- 通常我们在reject方法里处理执行失败的结果，而在catch里执行异常结果：
```js
reject(Error('Data could not be found'));
```
- async await
```js
let p1 = new Promise((resolve, reject) => {
    console.log('----------------')
        // 异步............
    setTimeout(() => {
        reject(1)
    }, 3000)
})
async function fn() {
    try {
        // 1....
        const a = await p1
        console.log('a', a)
    } catch (error) {
        console.log('error', error)
    }
}
fn()
```
### 事件代理
- 利用事件传播机制，在外层容器上绑定事件处理程序，然后通过event.target去寻找目标源。
    - event是事件触发时生成的对象
    - event.target是目标源（具体的DOM元素）
```js
<body>
    <div class= 'div1'>
        div1
        <div class='div2'>
            div2
            <div class='div3'>div3</div>
        </div>
    </div>
</body>

body.addEventListener('click',async function  (event){
        const target = event.target;
        console.log('target',target);
        console.log('event',event);
        console.log('className',target.className);
        console.log('dom1 false',target.className)
        if(target === document.querySelector('.div3')){
        console.log('div3触发了')
        }
        if(target.className === 'div2'){
            console.log('div2出发了')
        }
        if(target.className === 'div3'){
            console.log('div3出发了')
        }
    },false)
```

### 浏览器数据存储
- localStorage 本地永久存储，存储空间有限5m，必须要手动清除
    - 只能存放文本（字符串）
```js
let newPerson = {
            name: 'sg',
            age: 18
        }
const saveData = ()=>{
    const data = JSON.stringify(newPerson)
    localStorage.setItem('person',data)
}
const removeData = () => {
    localStorage.removeItem('person')
}
```
- seassionStorage 本地临时缓存，存储空间有限5m，关闭窗口自动清除
    - 只能存放文本（字符串）
- cookies 

### Event Loop
### 正则
- 
### CommonJS 和ES6模块
- -------
### 递归
- 递归函数通常的形式是一个函数通过名称调用自己
```js
function fn(number) {
    if (number < 1) {
        return 1;
    } else {
        return number * fn(number - 1);
    }
}
console.log(fn(0.1));//1
console.log(fn(4));//4* (3*(2*1))
//把这个递归函数赋值给其他变量时会报错，
let fn1 = fn;
fn = null;//?这一步是啥意思 //赋值时改变了引用地址的指向，所以会报错
console.log(fn1(4));//报错
```
- 解决办法
```js
//在递归函数时使用arguments.callee
function fn(number) { 
    if (number < 1) {
        return 1;
    } else { 
        return number * arguments.callee(number - 1);//使用arguments.callee(非严格模式下)
    }
}
console.log(fn(0.1));
console.log(fn(4));
let fn2 = fn;
fn = null;
console.log(fn2(3));//6
//解决办法2
//使用命名函数表达式
const fn = (function fn2(number) {
    if (number <= 1) {
        return 1;
    } else {
        return number * fn2(number - 1);
    }
});
console.log(fn(3));//6
```





