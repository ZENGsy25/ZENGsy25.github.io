# 工具函数（收集中）

[[toc]]

- 宁的时代外仓翻包系统

## 防抖与节流

- **防抖**：在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。
- **节流**：规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。

```js
//使用箭头函数封装一个防抖函数，包括参数函数和延迟时间
const debounce = (fn, delay) => {
  //声明一个变量timer
  let timer = null;
  //返回一个函数，这个函数会在一个时间区间结束后的delay毫秒时执行fn函数
  return (...args) => {
    //每次这个返回的函数被调用，就清除定时器，以保证不执行fn
    clearTimeout(timer);
    //当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），再过delay毫秒就执行fn
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
//用法示例
const fn = debounce(() => {
  //处理函数
  console.log("防抖");
}, 1000);
element.addEventListener("scroll", fn); //监听滚动事件
```

```js
//使用箭头函数封装一个节流函数，包括参数函数和延迟时间
const throttle = (fn, interval) => {
  //声明一个变量timer
  let timer = 0;
  //返回一个函数，这个函数会在一个时间区间结束后的delay毫秒时执行fn函数
  return (...args) => {
    const now = Date.now();
    //如果当前时间与上一次执行fn函数的时间差大于delay毫秒，则执行fn函数
    if (now - timer > interval) {
      fn.apply(this, args);
      timer = now;
    }
  };
};
//用法示例
const fn = throttle(() => {
  //处理函数
  console.log("节流");
}, 1000);
element.addEventListener("scroll", fn); //监听滚动事件
```
