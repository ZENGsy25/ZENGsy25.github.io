# 网络请求

[[toc]]

## jquery

- 默认发送 get 请求

```js
$.ajax({
  url: 'https://api.github.com/users/saturn77',
  success: function(result) {
    console.log(result)
  },
})
```

- 如果需要指定请求类型，需要添加 method 属性

```js
$.ajax({
  url: 'https://api.github.com/users/saturn77',
  method: 'POST',
  success: function(result) {
    console.log(result)
  },
})
```

- 发送请求参数需增加 data 字段，有请求头需增加 headers 字段，有错误处理需增加 error 字段
- data 默认按照表单格式提交 post 方法，data 中虽然是 json 但是提交时转成表单

```js
$.ajax({
  url: 'https://api.github.com/users/saturn77',
  data: { a: 123 },
  success: function(result) {
    console.log(result)
  },
  error: function(xhr, status, error) {
    console.log(error)
  },
})
```

- data 在 post 下是表单格式，在 get 下是 querystring 格式
- 如果需要发送 json 格式数据请求，需要在 data 里转换成 JSON 格式，在 headers 里设置{contentType: "application/json"})

```js
$.ajax({
  url: 'https://api.github.com/users/saturn77',
  headers: { contentType: 'application/json' },
  method: 'POST',
  data: JSON.stringify({ a: 123 }),
  success: function(result) {
    console.log(result)
  },
})
```

## fetch

- fetch()返回 Promise 对象，不使用回调函数
- fetch()接收一个 URL 字符串作为参数，默认向该网址发出 GET 请求
- fetch()默认按照表单格式提交请求

```js
fetch('https://api.github.com/users/saturn77')
```

- POST 请求需增加 method 属性，有请求头需增加 headers 属性，发送请求参数需增加 body 参数

```js
let response = fetch('https://api.github.com/users/saturn77', {
  method: 'POST',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
  body: 'a=123&b=456',
})
//拿到请求回应的数据
//通过then函数调用，拿到res（响应的数据），把res转换成json格式，再利用then调用
response.then((res) => res.json()).then((data) => console.log(res))
```

- 如果需要发送 json 格式数据请求,headers 的 Content-Type 要设成’application/json;charset=utf-8’。然后在 body 里面调用 JSON.stringify()方法转换成 JSON 字符串

```js
fetch('https://api.github.com/users/saturn77', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({ a: 123 }),
})
```

- 利用 querystring 的方式发送的请求,在 URL 后面添加问号和请求内容（?b=456）

```js
fetch('https://api.github.com/users/saturn77?b=456', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({ a: 123 }),
})
```

## axios

- axios 默认按照 JSON 格式提交请求

```js
axios({
  url: 'https://api.github.com/users/saturn77?b=456',
  method: 'POST',
  data: { a: 123 },
})
  //拿到请求回应的数据
  //通过then方法拿到res（响应的数据），然后直接通过res.data对象返回
  .then((res) => console.log(res.data))
```

- 如果想改成表单格式发送，需修改 headers 和 data 格式

```js
axios({
  url: 'https://api.github.com/users/saturn77?b=456',
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  data: 'a=123&c=xxx',
}).then((res) => console.log(res.data))
```
