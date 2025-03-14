//  pop() push shift() unshift()
//   concat join slice
// forEach
//  splice reverse sort
// filter sort  map some very findIndex  reduce
// let arr = []
// arr.reverse
// push()

// let r = [52,21,31]
// let r1 = r.sort()
// console.log(r, r1)
// 接受任意参数，并添加到数组末尾，返回最新的数组

// pop()
// 用于删除数组最后一项，同时减少数组的length值，返回被删除的项

// shift()
// 用于删除数组的第一项，同时减少数组的length值，返回被删除的项

// unshift()
// 接收任意参数，在数组开头添加任意多个值，返回新的数组长度

// concat()
// 在现有数组全部元素的基础上创建一个新数组，把参数添加到原数组副本的末尾，返回新构建的数组

// join()
//

// slice()
// 用于创建一个包含原有数组中一个或者多个子元素的新数组，返回元素的开始索引的元素到结束索引的元素
// (如果只有一个参数，则返回该索引参数到数组末尾的所有元素；如果有两个参数，则返回开始索引到结束索引的所有元素。*注意：其中不包含结束索引对应的元素)

// forEach()
// 该方法指挥对每一项运行传入的函数，没有返回值

// splice()*
// 接受三个参数，主要目的是在数组中间删除、插入、替换元素
// 删除
// 插入
// 替换

// reverse()
// 将数组的所有元素反向排序

// sort()
// 按照升序重新排列数组元素，最小的在前面，最大的在后面。*注意：会在每一项上调用String()转型函数，然后比较字符串来决定顺序

//
//

//  pop() push shift() unshift()
//   concat join slice
// forEach
//  splice reverse sort
// filter sort  map some very findIndex  reduce

/* 三级联动考题
// 1、每个元素的id都有对应的子对象，即子元素的parent_id
// 2、创建一个新的对象map{id:{当前id元素}}
// 3、遍历数组，只要有查找map[parent_id],新增chaildren往里面添加儿子元素，因为children添加的是引用地址，先添加id3，再添加id2的时候，都会挂到一起
// 4、最后删除parent_id非0的即可
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
    
    mapObj {
        children:{},
        '1': { id: 1, parent_id: 0, name: '四川省' },
        '2': { id: 2, parent_id: 0, name: '广东省' },
        '3': { id: 3, parent_id: 0, name: '江西省' },
        '5': { id: 5, parent_id: 1, name: '成都市' },
        '6': { id: 6, parent_id: 5, name: '锦江区' },
        '7': { id: 7, parent_id: 6, name: '九眼桥' },
        '8': { id: 8, parent_id: 6, name: '兰桂坊' },
        '9': { id: 9, parent_id: 2, name: '东莞市' },
        '10': { id: 10, parent_id: 2, name: '长安镇' },
        '11': { id: 11, parent_id: 3, name: '南昌市' }
        }
    
    
    // console.log('mapObj', mapObj);
    // 
    _array.forEach(item =>{
        //     parent_id: 0,
        let parent_id = item.parent_id
        // 非省区域 全部进来
        if (parent_id !== 0){
            // console.log('parent_id',item)
            

                    {
                    id: 1,
                    parent_id: 0,
                    name: "四川省",
                    // 引用地址的关系 children :{}
                        children:{
                        id: 5
                        name: "成都市"
                        parent_id: 1
                    }
                },
                {
                    id: 5
                    name: "成都市"
                    parent_id: 1
                    children: [
                        {
                        id: 6
                        name: "锦江区"
                        parent_id: 6
                        children: [item]
                        }
                    ]
                }

                {
                    id: 6
                    name: "锦江区"
                    parent_id: 6
                    children: [item]
                }
            
           //三目表达式语法
            mapObj[parent_id].children? mapObj[parent_id].children.push(item): mapObj[parent_id].children = [item]
        }
    })
    // console.log('new mapObj', mapObj);
    console.log('new  Object.values(mapObj)',  Object.values(mapObj));
    for(let key of Object.values(mapObj)){
        // console.log('Object.values(mapObj)', key);
        if(key.parent_id == 0){
            arr.push(key)
        }
    }
    // console.log(arr)
}
fn(array)
*/
// 把二维数组里面的string转换成对象，再把后面的对象往前面push并过滤
// let input = [
//     ["新闻","体育","网球","国外"],
//     ["新闻","体育","网球","国内"],
//     ["产品","互联网","金融"],
//     ["新闻","房产","深圳"],
//     ["新闻","体育","羽毛球"],
//     ["产品","互联网","保险"],
// ]

// function creatTreeFromArray(arr) {
//     // 会所名单
//     /*
//         { '新闻': { name: '新闻' }, child:[{ '体育': { name: '体育' }, child:[{"网球":{name: "网球"},child:[{"国外":{name: "国外"}},{"国内":{name: "国内"}}]}]},] },
//         { '体育': { name: '体育' }, child:[{"网球":{name: "网球"},child:[{"国外":{name: "国外"},{"国内":{name: "国内"}}}]}]},
//         {"网球":{name: "网球"},child:[{"国外":{name: "国外"}},{"国内":{name: "国内"}}]}
//         {"国外":{name: "国外"}}
//         {"国内":{name: "国内"}}

//     */
//     let cache = {

//     };
//     let root = [];
//     /*
//        [
//            { '新闻': { name: '新闻' } },
//         ]
//     */
//     // arr.leng => 6
//     for (let i=0;i<arr.length;i++){
//         //
//         for(let j=0;j<arr[i].length;j++){
//             // 临时保存 每一个遍历后的数据 取的每一个客人
//             let element = arr[i][j];
//             // [] 和. 是对 对象取值, 如果动态取值 只能用[]
//             // cache[element] cache.element 取缓存值
//             if(!cache[element]){
//                 // 没有消费过的客人会进来 登记  赋值
//                 /*
//                 { '新闻': { name: '新闻' } },
//                 { '体育': { name: '体育' } },

//                 */
//                 cache[element] = {
//                     name: element
//                 }
//                 // console.log(cache);//第一条属性为：{ '新闻': { name: '新闻' } }
//             }
//             // console.log('+++', cache)
//             if(j>0){
//                 // j = 1 => cache[arr[0][0]] 新闻
//                 let parent = cache[arr[i][j-1]];// 第一次是新闻
//                 // { '新闻': { name: '新闻' }, child:[] }
//                 parent.child ? '' : parent.child = [];
//                 // indexOf 查找到了  就返回 当前的索引值  若没有则返回 -1
//                 if(parent.child.indexOf(cache[element])<0){
//                     // 没有找到
//                     parent.child.push(cache[element])
//                 }
//             }else{
//                 // j = 0
//                 if(root.indexOf(cache[element])<0){
//                     root.push(cache[element])
//                 }
//             }
//         }
//     }
//     return root
// }

// console.log('creatTreeFromArray',creatTreeFromArray(input))

// {产品
//     [互联网
//         {
//             金融
//         }，{
//             保险
//         }
//     ]
// }
// console.log('window', window)
// this = window  浏览器
// this = {}  node
// let r1 = window.document.getElementById('zsy')
// console.log(r1.className);
// console.log(r1.getAttribute('class'));
// r1.setAttribute(class, "aasd")

// let a1 = document.getElementById('zsy')
// let a2 = document.getElementsByTagName('div')
// console.log(a1)
// console.log(a2[0])

// let a3 = document.createElement('div')
// a3.innerHTML = '123'
// a3.setAttribute('color', 'red')
// let a4 = document.createTextNode('卡视角话费卡')
// console.log(a3)
// console.log(a4)

// // let a5 = a1.appendChild(a)
// let a6 = a1.insertBefore(a3, null)
// let father = document.getElementById('id');
// let child = document.getElementById('child');
// let child1 = document.getElementById('child1');
// let child2 = document.getElementById('child2');

// father.appendChild(child)

// father.insertBefore(child2, null);
// let newNode = father.insertBefor(child2, null);？？？
// let newNode = father.insertBefore(child2, null)
// let newNode = father.insertBefore(child2, child);
// let newNode = father.replaceChild(child2, father.firstElementChild); //
// let newNode = father.replaceChild(child2, child);
// let newNode = father.replaceChild(child2, father.lastChild);//
// // let removeChild = father.removeChild(child);
// let removeChild = father.removeChild(father.firstChild);
// console.log(father)
//     // console.log(child)
// console.log(child1)
// console.log(child2)
// console.log(newNode)
// console.log(removeChild)

// let obj = {}
// for (i = 0; i < father.childNodes.length; i++) {
//     let element = i
//         // console.log(i)
//     obj[element] = father.childNodes[i]
// }
// console.log(obj)

// let newname = document.getElementById('id');
// console.log(newname.nodeName)
// console.log(newname.nodeName == newname.tagName);
// // console.log(i)
// let div = document.getElementById('child1');
// let div2 = document.getElementById('child2');
// console.log("id", div.getAttribute("id"));
// console.log("class", div.getAttribute("class"));
// console.log("title", div.getAttribute("title"));
// console.log("lang", div.getAttribute("lang"));
// console.log(div)
//     // let id = div.attributes.getNamedItem("id").nodeValue;
//     // div.attributes.setNamedItem(div,"class");

// var typ = document.createAttribute("class");
// // console.log(typ.nodeType)
// typ.nodeValue = "democlass";
// div.attributes.setNamedItem(typ);

// console.log(id)

// // createDocumentFragment 空白的文档片段。

// let d = document.getElementById('child1')
// console.log(d.getAttribute('data-nameq'))

// // console.log(d.)

// // d.id = '12'
// d.setAttribute('class', 12)
// console.log(d.getAttribute('class'))
// console.log(d.className)

//6.7
// let div = document.createElement('div');
// cnosole.log(div);
// let r1 = document.getElementById(div1)
// // console.log(r1);
// // document.getElementsByClassName(div3).id = 'child2';
// var dataAttribute = document.createAttribute('custom');
// cnosole.log(dataAttribute);

//代理
// const target = {
//   id: "111",
//   name: "zsy",
// };
// const handler = {
//   get(trapTarget, property, receiver) {
//     //trapTarget 目标对象 property 属性 receiver 代理对象
//     return trapTarget[property];
//   },
// };
// const proxy = new Proxy(target, handler);

let arr = [1, 2, 3];

function fn() {
  //查询3是否在数组arr中
  console.log("---", arr.includes(3));
  console.log("+++", arr.includes(0));
  //删除arr中的等于2的项   返回被删除的项
    //   console.log(arr.splice(arr.findIndex((item) => item === 2), 1));
  //   console.log(arr.findIndex((item) => item === 2));
}
fn();
