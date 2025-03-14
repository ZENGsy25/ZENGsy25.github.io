## XMLHttpRequest和Fetch
- XMLHttpRequest和fetch是什么，有什么用，有哪些使用场景；
- XMLHttpRequest怎么使用，使用流程有哪些步骤；
- fetch怎么使用，使用流程有哪些步骤；
- XMLHttpRequest和fetch优缺点，它们的区别，之前有了XMLHttpRequest为什么还要发明fetch api；
- XMLHttpRequest请求怎么中断；
- 了解promise
### XMLHttpRequest和fetch是什么，有什么用，有哪些使用场景
- 发送http请求给服务器，在不刷新网页的前提下实现局部页面的更新
- 在不刷新页面的情况下发送请求，并且将结果显示在页面中；现代所有的浏览器都通过XMLHttpRequest构造函数原生支持XHR。
```js
//创建ajax对象
let xhr = new XMLHttpRequest();
```
- Fetch API能够执行所有XMLHttpRequest对象的所有任务，Fetch API必须是异步执行，fetch()方法是暴露在全局作用域中的，包括主页面执行线程、模块和工程线程。
### XMLHttpRequest怎么使用，使用流程有哪些步骤
- 使用XHR首先要调用open()方法建立连接，接收三个参数：1、请求类型（"get"，"post"等）、2、请求URL、3、表示请求是否异步的布尔值（默认为"ture"异步）；
- 在使用send()方法发送HTTP请求，send()方法接收一个参数：作为请求体发送的数据，如果不需要发送请求体这传参数"null"。
```js
xhr.open("get","example.php","false");
xhr.send(null);
```
- 收到响应后，第一步需要检查status属性以确保响应成功返回。HTTP的状态码为200+表示成功，304表示从缓存中直接拿去，为修改过资源。然后再查看respoonseText文本。
- stastus服务状态码：
200+表示成功；304表示从缓存中直接拿去，未修改过资源；404表示文件没有找到；500表示服务器内部错误。
- onreadystatechange事件来检查readyState的值，XHR对象有一个readyState属性，表示当前处于请求\响应的过程的哪个阶。（onreadystatechange事件处理程序必须在调用open()方法之前赋值）readyStates属性：0：未初始化；1：已打开；2：已发送；3：接收响应中；4：接收响应完成。
- 通过以下代码检查状态码：
```js
// 同步请求
let xhr = XMLHttpRequest();
xhr.open("get","example.txt","false");
xhr.send(null);
if ((xhr.status >= 200 && xhr.status <= 300) || xhr.status = 304 ){
    alert(xhr.responseText);
}else {
    alert("ruquest was unsuccessful:" + xhr.status);
}
// 异步请求，onreadystatechange事件，会在状态码发生改变的时候执行
let xhr = XMLHttpRequest();
xhr.onreadystatechange = function (){
    if ((xhr.readystate = 4 && xhr.status >= 200 && xhr.status <= 300) || (xhr.readystae = 4 && xhr.status = 304)){
        alert(xhr.responseText);
    }else {
        alert("ruquest was unsuccessful:" + xhr.status);
    };
};
xhr.open("get","example.txt","ture");
xhr.send(null);
```
- 请求头设置和查询
需要增加额外的请求头可以调用setRequestHeader()方法，（必须在open()之后，send()之前调用）
```js
let xhr = XMLHttpRequest();
xhr.open("get","example.txt","ture");
xhr.setRequestHeader("header","value");
xhr.send(null);
```
- 获取请求头部
getRequestHeader()方法获取请求头部;getAllRequestHeader()方法获取全部请求头部。
```js
let header = getRequestHeader("header");
let allHeader = getAllRequestHeader();
```
- 中断请求，可以调用abort()方法；
```js
xhr.abort();
```
### fetch怎么使用，使用流程有哪些步骤
- fetch()请求方法只有一个必须的参数input（也就是url）并返回一个期约。请求完成、资源可用时，期约会解决为一个Response对象，此对象是API的封装，可以通过Response对象对应额属性和方法获取相应的资源。
```js
let r = fetch('www.baidu.com');
```
- 读取响应需要用到text()方法，此方法返回一个期约。
```js
let r = fetch('www.baidu.com');
.then((response) >= {
    response.text().then((data) >= {
        console.log(data);
    });
});
// 返回内容为'www.baidu.com'的文本类容
```
- 处理状态码和请求失败
fetch API 支持通过Response的status（状态码）和statusText（状态文本）属性检查响应状态，成功会产生值有200的状态码：
200：请求响应成功；
304：重定向；
404：请求资源不存在；
500：服务器错误。
```js
let r = fetch('www.baidu.com');
.then((response) => {
    console.log(response.status);// 200
    console.log(response.statusText);// OK
})
```
- 请求模式，请求内容，请求头部
通常fetch()方法默认为get请求，如果需要修改请求方式需要添加第二个参数
```js
let r = fetch('www.baidu.com'，{
    // 请求方式为post
    method: 'POST',
    // 请求体，格式必须是http发送的请求体格式，所以需要将JSON字符串转换成js对象
    body:JSON.stringify({
        name:zsy,
        age:18,
    }),
    // 请求头
    headers:'jsonHeaders'
});
```
### XMLHttpRequest和fetch优缺点
###



