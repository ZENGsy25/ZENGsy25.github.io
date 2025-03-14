# js基础笔记
[[toc]]

# node脚本执行命令
- 首先寻找当前的package.json文件中对应的scripts脚本，里面的key值就是可以执行的命令npm run +（"dev"、"build"、"deploy"），对应的value值就是真正执行的命令（"vuepress dev docs"、"vuepress build docs"、"bash deploy.sh"），vuepress的执行文件在node_modules/.bin文件里面可以找到。
- npm run dev 'npm':代表执行node环境；'run':回去找package.json里面的scripts脚本；'dev':对应脚本里的key值
npm run bulid
```js
"scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs",
    "deploy": "bash deploy.sh"
  },
```

## Object 对象
### 对象的创建
- 1、使用new操作符和Object构造函数创建对象
```js
let obj1 = new Object();
let person = new Object();
person.name = "zsy";
person.age = 18;
```
- 2、对象字面量表示法（常用）
```js
// 字面量
let obj2 = {};
let person = {
    name: "zsy",
    age: 18
};
//对象字面量表示法中，属性名可以是字符串或者数组。
```
### 对象的（增、删、改、查）
- 增加属性
```js
let obj1 = {
    name: "zsy",
    age: 18,
}
obj1.gender = "男";// 方法一
obj1['number'] = 7;// 方法二
console.log(obj1);
//{ name: 'zsy', age: 18, gender: '男', number: 7 }
```
- 删除属性
```js
let obj1 = {
    name: "zsy",
    age: 18,
    gender: '男'
}
delete obj1.gender;// 删除属性
console.log(obj1);
// { name: 'zsy', age: 18}
```
- 修改属性
```js
let obj1 = {
    name: "zsy",
    age: 18,
    gender: '男'
};
obj1.age = 20;// 方法一
obj1["gender"] = "女";// 方法二
console.log(obj1);
// { name: 'zsy', age: 20, gender: '女', number: 7 }
```
- 查询属性
```js

```
## 对象的遍历
### 1、for in
```js
let person = {
    name: "zsy",
    age: 18,
    number: 7
};
for(let i in person){
    console.log(i,person[i])
    // name zsy
    // age 18
    // number 7
}
```
### 2、Object.keys  Object.values  Object.entries
```js
let person = {
    name: "zsy",
    age: 18,
    number: 7
};
let a1 = Object.keys(person)// 返回对象key值的数组
let a2 = Object.values(person)// 返回对象值的数组
let a3 = Object.entries(person)// 返回键/值对的数组
consoloe.log(a1);// [ 'name', 'age', 'number' ]
consoloe.log(a2);// [ 'zsy', 18, 7 ]
consoloe.log(a3);// [ [ 'name', 'zsy' ], [ 'age', 18 ], [ 'number', 7 ] ]
```

### for循环
```js
let person = ['s','d','f']
for(let i=0;i<person.length;i++){
    console.log(i)
}
```

## Object属性的类型

### 1、数据属性
- 1.[Configurable]:表示属性是否可以通过delete删除并重新定义，时候可以修改它的特性，以及是否可以把他改为访问器属性；默认情况下为ture。
- 2.[Enumerable]：表示属性是否可以通过for-in循环返回；默认情况下为ture。
- 3.[Writable]：表示属性值时是否可以被修改；默认情况下是ture。
- 4.[Value]：包含属性实际的值。（对象所有保存的值都在这个里）。

- 注意：需要修改属性的默认特性，必须要使用Object.defineProperty()方法，此方法接收三个参数：（对象名、属性名、描述符对象）。在调佣Object.defineProperty()时，如果不指定前三个数据属性的值，则默认均为false。
```js
let person = {};
    Object.definePropty(person,"name",{
        Writable:false;
        value: "zsy"
    });
    person.name = "sg";//修改的属性不会生效
    console.log(person.name);
    //打印结果为"zsy"
```

### 2、访问器属性
- 1.[Configurable]:表示属性是否可以通过delete删除并重新定义，时候可以修改它的特性，以及是否可以把他改为访问器属性；默认情况下为ture。
- 2.[Enumerable]：表示属性是否可以通过for-in循环返回；默认情况下为ture。
- 3.[Get]：获取函数，在读取属性时调用；默认为undefined。
- 4.[Set]：设置函数，在写入属性时调用；默认为undefined。
- 注意：访问器属性时不能够直接定义的，必须使用Object.defineProperty()方法。
```js
let book = {
    year_: 2017,
    edition: 1
};
Object.definePropoty(boook,"year",{
    get (){
        return this.year_;
    },
    set (newValue) {
        if (newValue > 2017) {
            this.year_ = newValue;
            this.edition += newValue - 2017; 
        }
    }
});
book.year = 2018;
consolo.log(book.edition);
//打印结果为2
```

### 定义多个属性的方法
- Object.defineProperties()方法，此方法接收两个参数：（需要添加或者修改属性的对象，描述符对象）。
- 区别：此方法的所有属性都是同时定义的，并且数据额属性的Configurable、Enumerable、Writable特性值都是false。

### 合并对象
- Object.assgin()方法，此方法接收两个参数：（一个目标对象和一个或者多个源对象）。俗称浅复制，不能在两个对象之间转移获取函数和设置函数。
    - 单源合并
    ```js
    let dest,src,result;
    dest = {};
    src = {id: 'src'};
    result = Object.assgin(dest,src);
    console.log(result);
    //打印结果为{id:src}
    ```
    - 多源合并
    ```js
    let dest,result;
    dest = {};
    result = Object.assgin(dest,{a: 'foo'},{b: 'bar'});
    console.log(result)
    //打印结果为{a: foo,b :bar}
    ```
### 对象标识符相等判断（类似"==="）
- Object.is()方法，此方法接收两个参数
```js
console.log(Object.is("2",2))//false
console.log(Object.is(ture,1))//false
console.log(Object.is(NaN,NaN))//ture
```

## 数组方法Array

- push() 接收任意参数，并添加到数组末尾，返回数组的最新长度
```js
let colors = new Array();
let a = colors.push('red','green');
alert(a);// 2
console.log(colors);// [ 'red', 'green' ]原数组改变
console.log(a);// 2
// 改变原数组，返回新数组长度
```
- pop()用于删除数组最后一项，同时减少数组的length值，返回被删除的项
```js
let colors = new Array();
let a = colors.push('red','green','black');
let b = colors.pop();
alert(b);// black
alert(colors.length);// 2
console.log(colors);// [ 'red', 'green' ]原数组改变
console.log(a);// 3
console.log(b);// black
// 改变原数组，返回被删除的项
```
- shift()用于删除数组的第一项，同时减少数组的length值，返回被删除的项
```js
let a = [1,2,3,4,5];
let b = a.shift();
alert(b);// 1
console.log(a);// [ 2, 3, 4, 5 ]原数组改变
console.log(b);// 1
// 改变原数组，返回被删除项
```
- unshift()接收任意参数，在数组开头添加任意多个值，返回新的数组长度
```js
let colors = new Array();
let a = colors.unshift('red','green');
alert(a);// 2
console.log(colors);// [ 'red', 'green' ]原数组改变
console.log(a);// 2 
// 改变原数组，返回新数组长度
```
- concat()在现有数组全部元素的基础上创建一个新数组，把参数添加到原数组副本的末尾，返回新构建的数组
```js
let a = [1,2,3];
let b = a.cancat('a',['b','c']);
console.log(a);// [1,2,3]原数组不变
console.log(b);// [1,2,3,'a','b','c']
// 不改变原数组，返回新数组
```
- join()
```js
// 不改变原数组，返回新数组
```
- slice()用于创建一个包含原有数组中一个或者多个子元素的新数组，返回元素的开始索引的元素到结束索引的元素。(如果只有一个参数，则返回该索引参数到数组末尾的所有元素；如果有两个参数，则返回开始索引到结束索引的所有元素。*注意：其中不包含结束索引对应的元素)
```js
let colors = ['red','green','bule','yellow','pink'];
let a = colors.slice(1);
let b = colors.slice(1,4);
console.log(colors);// ['red','green','bule','yellow','pink']原数组不变
console.log(a);// ['green','bule','yellow','pink']
console.log(b);// ['green','bule','yellow']不包括结束索引
// 不改变原数组，返回新数组
```
- splice()*接受三个参数，主要目的是在数组中间删除、插入、替换元素。删除、插入、替换
```js
//删除：接收两个参数，删除元素的索引、以及要删除元素的数量
let a = [1,2,3,4,5];
let removed = a.splice(0,1);
alert(a);// 2,3,4,5
alert(removed);// 1
//插入：接收3个参数，删除元素的索引、删除元素的数量必须为0、插入的任意多个元素
removed2 = a.splice(0,0,6,7);
alert(a);// 6,7,2,3,4,5
alert(removed2);// 空数组
//替换：接收三个参数，删除元素的索引、删除元素的数量、插入的任意多个元素
removed3 = a.splice(1,1,8,9);
alert(a);// 6,8,9,2,3,4,5
alert(removed3);// 7
console.log(a);// [6,8,9,2,3,4,5]原数组改变
console.log(removed);// [1]
console.log(removed2);// []
console.log(removed3);// [7]
//改变原数组，返回新数组
```
- reverse()将数组的所有元素反向排序
```js
let a = [1,2,3,4,5];
let b = a.reverse();
alert(a);// 5,4,3,2,1
console.log(a)// [ 5, 4, 3, 2, 1 ]原数组改变
console.log(b)// [ 5, 4, 3, 2, 1 ]
// 改变原数组，返回新数组
```
- sort()按照升序重新排列数组元素，最小的在前面，最大的在后面。*注意：会在每一项上调用String()转型函数，然后比较字符串来决定顺序
```js
let a = [0,1,5,10,15];
let b = a.sort();
alert(a);// 0,1,10,15,5
console.log(a)// [ 0, 1, 10, 15, 5 ]原数组改变
console.log(b)// [ 0, 1, 10, 15, 5 ]
// 改变元数组，返回新数组
```
- forEach()该方法指挥对每一项运行传入的函数，没有返回值；本质上，forEach()方法相当于使用了for()循环遍历数组。
```js
let a = [1,2,3,4,5,6];
a.forEach((item,index,array) => {
    //item:数组中的元素
    //index:当前元素的索引
    //array:数组本身
});
```
### 迭代方法
- 5个迭代方法都接收两个参数：以每一项为参数运行些函数，以及可选的作为函数运行上下文的作用域对象（影响函数中this的值）;
传入每个方法的函数接收3个参数：item：数组元素、index：元素索引、array：数组本身。
- every()每一项都运行传入函数，如果每一项都返回ture，则这个方法返回ture。
- filter()每一项都运行传入函数，函数返回ture的项会组成数组并返回。
- forEach()每一项都运行传入函数，没有返回值。
- map()每一项都运行传入函数，返回每次函数调用的结果构成的数组。
- some()每一项都运行传入函数，如果有意向返回ture，则这个方法发挥ture。
```js
let number = [1,2,3,4,5,6,7,8,9,0];
let a = number.every((item,index,array) => item > 2);
console.log(a);// false

let b = number.some((item,index,array) => item > 2);
console.log(b);// ture

let c =  number.filter((item,index,array) => item > 2);
console.log(c);// [3,4,5,6,7,8,9,]返回所有大于2的项所组成的新数组

let d = number.map((item,index,array) => item * 2);
console.log(d);//[2,4,6,8,10,12,14,16,18,0]返回运行结果后组成的数组

let e = {};
let f = [];
number.forEach((item,index,array) =>{
    e = item;
    f = item;
})
console.log(e);
console.log(f);

```
## 三级联动题
- 要求：1、每个元素的id都有对应的子对象，即子元素的parent_id；
2、创建一个新的对象map{id:{当前id元素}}；
3、遍历数组，只要有查找map[parent_id],新增chaildren往里面添加儿子元素，因为children添加的是引用地址，先添加id3，再添加id2的时候，都会挂到一起；
4、最后删除parent_id非0的即可
```js
let array = [
    {
        id: 1,
        parent_id: 0,
        name: "四川省",
    },
    {
        id: 2,
        parent_id: 0,
        name: "广东省",
    },
    {
        id: 3,
        parent_id: 0,
        name: "江西省",
    },
    {
        id: 5,
        parent_id: 1,
        name: "成都市",
    },
    {
        id: 6,
        parent_id: 5,
        name: "锦江区",
    },
    {
        id: 7,
        parent_id: 6,
        name: "九眼桥",
    },
    {
        id: 8,
        parent_id: 6,
        name: "兰桂坊",
    },
    {
        id: 9,
        parent_id: 2,
        name: "东莞市",
    },
    {
        id: 10,
        parent_id: 2,
        name: "长安镇",
    },
    {
        id: 11,
        parent_id: 3,
        name: "南昌市",
    },
]
function fn(_array){
    let mapObj = {};
    let arr = [];
    // item =>
    // {
    //     id: 1,
    //     parent_id: 0,
    //     name: "四川省",
    // },
    // console.log(_array)
    // console.log(arr)

    _array.forEach((item,index) =>{
        // console.log(`item${index} id => ${item.id}`,item)
        mapObj[item.id] = item
    })
    // '' "" ``
    // mapObj {
    //     children:{},
    //     '1': { id: 1, parent_id: 0, name: '四川省' },
    //     '2': { id: 2, parent_id: 0, name: '广东省' },
    //     '3': { id: 3, parent_id: 0, name: '江西省' },
    //     '5': { id: 5, parent_id: 1, name: '成都市' },
    //     '6': { id: 6, parent_id: 5, name: '锦江区' },
    //     '7': { id: 7, parent_id: 6, name: '九眼桥' },
    //     '8': { id: 8, parent_id: 6, name: '兰桂坊' },
    //     '9': { id: 9, parent_id: 2, name: '东莞市' },
    //     '10': { id: 10, parent_id: 2, name: '长安镇' },
    //     '11': { id: 11, parent_id: 3, name: '南昌市' }
    //     }

    // console.log('mapObj', mapObj);
    // 
    _array.forEach(item =>{
        //     parent_id: 0,
        let parent_id = item.parent_id
        // 非省区域 全部进来
        if (parent_id !== 0){
            // console.log('parent_id',item)
                //     {
                //     id: 1,
                //     parent_id: 0,
                //     name: "四川省",
                //     // 引用地址的关系 children :{}
                //         children:{
                //         id: 5
                //         name: "成都市"
                //         parent_id: 1
                //     }
                // },
                // {
                //     id: 5
                //     name: "成都市"
                //     parent_id: 1
                //     children: [
                //         {
                //         id: 6
                //         name: "锦江区"
                //         parent_id: 6
                //         children: [item]
                //         }
                //     ]
                // }

                // {
                //     id: 6
                //     name: "锦江区"
                //     parent_id: 6
                //     children: [item]
                // }
           //三目表达式语法
           // 判断mapObj[parent_id]是否存在children，存在就执行（:）前面的语句，不存在就执行（:）后面的语句，给他加上一个children
            mapObj[parent_id].children? mapObj[parent_id].children.push(item): mapObj[parent_id].children = [item]
        }
    })
    // console.log('new mapObj', mapObj);
    // console.log('new  Object.values(mapObj)',  Object.values(mapObj));
    for(let key of Object.values(mapObj)){
        // console.log('Object.values(mapObj)', key);
        if(key.parent_id == 0){
            arr.push(key)
        }
    }
    console.log(arr)
}
fn(array)
```
## 二维数组转换对象树题
- 要求：把二维数组里面的string转换成对象，再把后面的对象往前面push并过滤
```js
let input = [
    ["新闻","体育","网球","国外"],
    ["新闻","体育","网球","国内"],
    ["产品","互联网","金融"],
    ["新闻","房产","深圳"],
    ["新闻","体育","羽毛球"],
    ["产品","互联网","保险"],
]

function creatTreeFromArray(arr) {
    let cache = {};
    let root = [];
    // arr.leng => 6
    for (let i=0;i<arr.length;i++){
        // 
        for(let j=0;j<arr[i].length;j++){
            let element = arr[i][j];
            // cache[element] 取缓存值
            if(!cache[element]){
                // 没有会进来  赋值
                cache[element] = {
                    name: element
                }
            }
                // console.log('+++', cache)
            if(j>0){
                // j = 1 => cache[arr[0][0]] 新闻.child = []
                let parent = cache[arr[i][j-1]];
                parent.child ? '' : parent.child = [];
                // indexOf 查找到了  就返回 当前的索引值  若没有则返回 -1
                if(parent.child.indexOf(cache[element])<0){
                    // 没有找到
                    parent.child.push(cache[element])
                }
            }else{
                // j = 0
                if(root.indexOf(cache[element])<0){
                    root.push(cache[element]) 
                }
            }
        }  
    }
    return root
}

console.log('creatTreeFromArray',creatTreeFromArray(input))
```

```js
//  pop() push shift() unshift()
//  concat join slice
//  forEach
//  splice reverse sort
//  filter map some every 
//  find finfIndex reduce reduceRight

let arr = [1,2,3,4,5]
const rer=  arr.reduce((a,b)=> a+b)
console.log(rer)
```


## 栈和堆
- 栈 是一种数据结构，特点是先进后出，里面保存所有的基础数据类型,包括（string,unmber,undefined,布尔值，null，symbol,）。
- 堆 也是一种数据结构，特点是无序，保存复杂数据类型，包含对象(hash结构)、数组、函数、正则。。。。
- 对象的存储过程：对象是存在堆中的，存在一个引用地址指向栈

```js
let obj2 = {
    age: 1
}
let newobj2 = obj2
obj2.age = 18
console.log(newobj2)// { age: 18 }
```
## DOM
- DOM基础  //401页
DOM描绘了一个层次化的节点树，允许开发人员直接添加、移除和修改页面的一部分内容。
DOM对很多东西做了抽象，提供了丰富的API：取得元素、css样式、事件、运动、元素尺寸位置、节点操作等。
### NodeList 类数组获取
```js
let obj = {}
for (i = 0; i < father.childNodes.length; i++) {
    let element = i
    obj[element] = father.childNodes[i]
}
console.log(obj)
```


### Document 类型
    document表示文档对象（整个页面）。ducument对象具有页面几乎所有的方法或者属性。
        通过点语法获取元素对象：
            document.title  //获取页面标题
            document.head  //获取页面头部
        通过等号来给元素赋值：
            document.title = abcd；  //页面标题赋值为abcd
        通过ID属性获取元素对象：
            var a = duocument.getElementById('');  
        点语法只能读取或者设置元素自带的属性，不能设置或者读取元素的自定义属性。
        点语法操作某些属性名需要修改名字：
            class对应className;
            for对应htmlFor;
            rowspan对应rowSpan;
            colspan对应colSpan。
        需要读取或者修改元素的自定义属性，需要使用到getAttribute()和setAttribute()来操作。
### Node 类型
- 12种节点类型:
        1、Node.ELEMENT_NODE   //元素节点
        2、Node.ATTRIBUTE_NODE   //属性节点
        3、Node.TEXT_NODE  //文本节点
        8、Node.COMMENT_NODE  //注释节点
        9、Node.DOCUMENT_NODE  //文档节点
        通过nodetype来判断节点类型
    查看节点个数
        a.childNode.length;
    低版本的IE浏览器会吧换行符当做节点来看待，为了解决兼容性问题，让所有浏览器显示一致，忽略这些换行符(获取有效元素)：
```js
function getNode(dom){
    //返回包含所有节点的数组
    var arr = []
    //定义正则，前后都是空白符
    var reg = /^\s*$/
    //遍历所有节点，过滤掉换行符文本节点
    for (var i = 0,i < dom.childNodes.length;i++) {
        //如果是文本节点，过滤掉换行符
        if (dom.childNodes[i].nodeType === 3) {
            //判断文本的类容，data或者nodeValue
            if (!reg.test(dom.childNodes[i].data)) {
                //不是换行符，储存节点
                arr.push(dom.childNodes[i])
            }
        }else {
            //储存节点
        arr.push(dom.chileNodes[i])
        }
        
    }
    //返回结果
    return arr;
}
//打印
console.log(getNodes(a));
```
- 节点属性
    nodeType:节点类型
    nodeName:节点名称
    nodeValue:节点的值
- 节点总结：
    节点名称
        如果是元素    //元素名称大写
        如果是文本    //#text
        如果是注释    //#comment
    节点的值
        如果是元素    //null
        如果是文本    //文本内容
        如果是注释    //注释的内容
- 节点关系
```js
        <div id="app">
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
            </ul>
        </div>
        //获取元素
        var app = document.getElmentById("app");
        //获取ul
        var ul = app.getElmentByTagName("ul")[0];
        //获取第三个li
        var li = ul.childNodes[2];

        //节点关系
        //ul的所有子节点
        console.log(ul.childNodes)
        //第一个子节点
        console.log(ul.firstChild)
        //最后一个子节点
        console.log(ul.lastChild)
        //li的父节点
        console.log(li.parentNode)
        //li的上一个兄弟节点
        console.log(li.previousSibling)
        //li的下一个兄弟节点
        console.log(li.nextSibling)
        //通过节点关系修改元素属性
        li.nextSibling.style.backgroundColor = 'red';
```
- 操作元素节点
    创建元素
        使用方法：document.createElement(type)  //type表示创建的类型，是一个字符串；返回值是创建出来的元素
    创建文本
        使用方法：document.createTextNode(content)  //content表示创建的文本
    操作节点
        元素末尾添加节点：appendChild()  //father.appendChild(child); father表示父元素；child表示要添加的子元素；
    删除节点：removeChild()  //father.removeChild(child); father表示父元素；child表示要删除的子元素；
    元素前面添加节点：insertBefore()  //father.insertBefore(newChild,oldChild)；newChild表示需要添加的元素；oldChild表示参照元素；注意：如果没有参照元素，会被添加到最后面！
    *元素后面添加节点：
        function insertAfter(father,newChild,oldChild) {
            return father.insertBefore(newChild,oldChild.nextSibling)
        }
        insertAfter(father,newChild,oldChild.childNodes[])
        //newChild表示需要添加的元素；oldChild.nextSibling表示获取oldChild的下一个兄弟元素来作为参照元素；oldChild.childNodes[]表示索引值；

- appendChild()方法---末尾添加
```js
<div id='id'>111
    <div class="div1">1</div>
    <div class="div2">2</div>
    <div class="div3">3</div>
</div>
<div id='_id'>222</div>

let father = document.getElementById('id');
let child = document.getElementById('_id');
father.appendChild(child)
console.log(father)
``` 
- insertBefor()方法---在特定位置插入，接收两个参数（要插入的节点和参照节点）,插入的节点在参照节点的前一个同胞位置
```js
<div id='id'>00
    <div class="div1">1</div>
    <div  id= 'child' class="div2">2</div>
    <div class="div3">3</div>
</div>
<div id='child1'>11</div>
<div id='child2'>22</div>
let father = document.getElementById('id');
let child = document.getElementById('child');
let child1 = document.getElementById('child1');
let child2 = document.getElementById('child2');
let newNode = father.insertBefore(child2, null);
// 参照节点为null，则插入效果与appendChild()方法相同，插入节点为父节点的lastChild节点。
let newNode = father.insertBefore(child2, child);
// 插入节点的在参照节点之前
```
- replaceChild()方法---替换节点，接收两个参数（要插入的节点和要替换的节点）
```js
<div id='id'>00
    <div class="div1">1</div>
    <div  id= 'child' class="div2">2</div>
    <div class="div3">3</div>
</div>
<div id='child1'>11</div>
<div id='child2'>22</div>
let father = document.getElementById('id');
let child = document.getElementById('child');
let child1 = document.getElementById('child1');
let child2 = document.getElementById('child2');
let newNode = father.replaceChild(child2,child);
// 取而代之
```
- removeChild()方法---删除节点
```js
<div id='id'>00
    <div class="div1">1</div>
    <div  id= 'child' class="div2">2</div>
    <div class="div3">3</div>
</div>
<div id='child1'>11</div>
<div id='child2'>22</div>
let father = document.getElementById('id');
let child = document.getElementById('child');
let child1 = document.getElementById('child1');
let child2 = document.getElementById('child2');
let removeChild = father.removeChild(child);// 删除成功
let removeChild = father.removeChild(father.firstChild);// 文本节点"00"被删除
```
- 元素定位
Document 类型提供的两个定位方法：
getElementById("")和getElementByTagName("")
### Element 类型
可以通过nodeName或者tagName属性来获取元素的标签名
```js
<div id='id'>00
    <div class="div1">1</div>
    <div  id= 'child' class="div2">2</div>
    <div class="div3">3</div>
</div>
let name = document.getElementById('id');
console.log(name.nodeName);// "DIV"
console.log(newname.nodeName == newname.tagName);// ture
```
- HTML元素
标准属性：
id：文档中唯一标识；
title：包含元素额外信息，同城一提示条形式出现；
lang：元素内容的语言代码；
dir：语言的书写方向，（"ltr"表示从左到右，"rtl"表示从右到左）；
className：相当于class属性，用于指定元素的CSS类，（因为"class"是JS的关键字，所以不能直接使用）。
- 取得属性
与属性相关的DOM方法有三种：
getAttribute();获取对应属性名的值
setAttribute();接收两个参数（设置的属性名和属性的值），如果属性已经存在，就会替换之前的值，如果不存在则创建该属性。**注意：自定义属性名应该加前缀"data-"。
removeAttribute();删除整个属性名和对应的属性值
```js
// 获取属性
getAttribute();
<div  id= 'id' class="_class">00</div>
let div = document.getElementById('id');
console.log(div.getAttribute("id"));
console.log(div.getAttribute("class"));
console.log(div.getAttribute("title"));
console.log(div.getAttribute("lang"));
```
```js
// 设置属性
setAttribute();
<div id= 'id'></div>
let div = document.getElementById('id');
div.setAttribute("id","someid");
div.setAttribute("class","someclass");
div.setAttribute("id","someid");
div.setAttribute("data-my_style","hello");
```
```js
// 删除属性
removeAttribute();
<div id='someid' class="someclass" data-my_style="hello"></div>
let div = document.getElementById('someid');
div.removeAttribute('class');// 删除'class'以及对应的值
```
- attribute属性
NameNodeMap对象
Elementlei类型是唯一使用了attribute属性的DOM节点类型。attribute属性包含一个NameNodeMap实例，是一个类似NodeList的“实时”集合。
attributes属性中的每一个节点的nodeName是对应属性的名字，nodeValue是属性的值。
getNamedItem(name):返回nodeName属性等于name的节点;
removeNamedItem(name):删除name属性等于name的节点；
setNamedItem(node):向列表中添加node节点，以其nodeName为索引；
item(pos)：返回索引位置pos处的节点。
```js
getNamedItem(name);// 返回nodeName属性等于name的节点
<div  id= 'someid' class="_class">00</div>
let div = document.getElementById('someid');
let id = div.attributes.getNamedItem("id").nodeValue;
let id = div.attribute["id"].nodeValue;// 简写
// someid
```
```js
removeNamedItem(name);// 删除指定属性名字的属性
<div  id= 'someid' class="_class">00</div>
let div = document.getElementById('someid');
let remove = div.attribute.removeNamedItem("class")
console.log(div);//<div  id= 'someid'>00</div>
```
```js
setNamedItem(node);// 接收一个属性节点，然后给元素添加一个新属性
<div  id= 'someid'>00</div>
let div = document.getElementById('someid');
var typ = document.createAttribute("class");// 创建一个属性名为'class'的属性
typ.nodeValue = 'democlass';// 给属性添加属性值
div.attributes.setNamedItem(typ);// 元素添加一个新属性
console.log(div);
// <div  id= 'someid' class="democlass">00</div>
```
## 事件
### 事件流
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
DOM事件流分为三个阶段：事件捕获、到达目标、事件冒泡。事件捕获最先发生（书上492页）。
### 事件处理程序
事件意味着用户或者浏览器执行的某种动作：单击（click）、加载（load）、鼠标悬停（mouseover）。为了相应这些时间而被调用的函数被称为事件处理程序。以"on-"开头。
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
- DOM2事件处理程序**
DOM2 Event为事件处理程序的赋值和移除定义了两个方法：addEventListener()和removeEventListener()。接收三个参数：事件名、事件处理函数和一个布尔值，默认为false，（ture表示在捕获阶段调用事件处理程序；false表示在冒泡阶段调用事件处理程序）。
```js
<div id="myBtn">Dom2事件</div>
let btn = document.getElementById('myBtn');
btn.addEventListener("click",(event)=>{
    console.log('btn',event)
},false);
```

## 网络请求
- 网络请求与远程资源
### XMLHttpRequest 对象
- 所有现代浏览器都原生支持XMLHttpRequest构造函数源生支持XHR对象；
```js
let xhr = new XMLHttpRequest();
```
### 使用XHR
- 使用XHR首先要调用open()方法，接收三个参数：1、请求类型（"get"，"post"等）、2、请求URL、3、表示请求是否异步的布尔值（默认为"ture"异步）；
```js
xhr.open("get","example.php","false");
```
调用open()方法实际不会发送请求，只是为发送做好准备。
*URL只能访问同源地址（域名相同、端口相同、协议相同）。
- 发送定义好的请求，必须调用send()方法,接收一个参数：作为请求体发送的数据。如果不需要发送请求体这传参数"null"。
```js
xhr.open("get","example.php","false");
xhr.send(null);
```
收到响应后XHR对象的一下属性会被填充数据：
responseText:作为响应体返回的文本；
responseXML:如果响应内容类型是"text\xml"或者"application\xml"，那就是包含响应数据的XML DOM文档；
status:响应的HTTP状态；
statuaText:响应的HTTP状态描述。     
- 收到响应后，第一步需要检查status属性以确保响应成功返回。HTTP的状态码为200+表示成功，304表示从缓存中直接拿去，为修改过资源。然后再查看respoonseText文本。如下检查状态码：
```js
// 同步请求
let xhr = new XMLHttpRequest();
xhr.open("get","example","false");
xhr.send(null);
if ((xhr.status >=200 && xhr.status <= 300) || xhr.status = 304){
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
收到响应之前如果想要取消异步请求，可以调用abort()方法：
```js
xhr.abort();
```
### HTTP头部
- 如果需要发送额外的请求头部，可以调用setRequestHeader()方法。接收两个参数：1、头部字段的名称2、头部字段的值。
*必须在open()之后send()之前调用setRequestHeader()方法
```js
let xhr = new XMLHttpRequest();
xhr.open("get","example","false");
xhr.setRequestHeader("header","value");
xhr.send(bull);
```
- 可以使用getRequestHeader()方法，从XHR对象获取响应头部，接收一个参数：1、要获取的头部名称；
如果想要拿到所有头部则使用getAllRequestHeader()方法，此方法返回所有响应头部的字符串。
```js
let header = getRequestHeader();
let allheaders = getAllRequestHeader();
```
### GET请求

## 变量、作用域与内存

### 原始值和引用值
变量可以包含两种属性：原始值（最简单的属性）、引用值（有多个值构成的对象）。
- 动态属性；

## 搭建服务器
接收请求的服务器
### 静态服务器
- 静态资源
html、css、js、jpg、jpeg等
- 动态资源
实现登陆、注册等发送的请求


## 函数的三种定义写法
- 1、函数声明
```js
function sum (num1,num2) {
    return num1 + num2;
}
```
- 2、函数表达式
```js
let sum = function(num1,num2){
    return num1 + num2;
};
```
- 3、箭头函数
```js
let sum = (num1,num2)=>{
    return num1 + num2;
};
```
## 箭头函数
