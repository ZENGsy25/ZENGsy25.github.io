# 语言基础笔记
[[toc]]

## 语法
### 语句
- 语句以分号结尾(;)，省略分号意味着由解析器确定语句在哪里结束。
```js
let sun = a + b;
let sun = a + b;
```
- 多条语句可以合并到同一个C语言风格的代码中，由{}包裹
```js
if (test){
    test = false;
    console.log(test);
}
```
### 关键字与保留字
- 关键字：case、catch、do、else、if、for、in、new、var、let、const、function、this等
### 变量
- 变量可以保存任何的数据类型，有3个关键字可以声明变量
```js
var
let
const
```
- var声明的作用域与作用域提升。
```js
// 局部作用域
function test(){
    var message = "hi";
console.log(message);// 打印正常
    var message2 = "hello";// 作用域提升到顶部
}
console.log(message);// 打印出错
```
- let 声明。1、let声明的范围是块作用域，而var声明的的范围是函数作用域。2、let不允许同一个块作用域中出现冗余声明。3、let声明的变量不会在作用域中内提升。4、使用let在全局作用域中声明的变量不会成为windos对象的属性。
```js
// 作用域在函数内部
if(ture){
    let age = 18;
    console.log(age);// 18
}
console.log(age);// ReferrenceError:age 没有定义
```ui
```js
// 不允许出现冗余声明
let age = 18;
let age = 18;// SyntaxError;标识符age已经声明过了
```
```js
// 声明不会在作用域中提升
console.log(age);// undefined
var age = 18;

console.log(name);// ReferenceError
let name = "acac"
```
```js
// let在全局作用域声明不会成为window对象的属性
var name = "acac";
console.log(window.name);// "acac"

let age = 18;
console.log(age);// 18
```
- const 声明。const的行为与let基本相同，唯一一个重要区别是用它声明变量时必须同时初始化变量，且尝试修改const声明的变量会导致运行时错误；如果const变量引用的是一个对象，那么修改这个对象内部的属性并不违反const的限制；不能声明迭代变量；
```js
// 修改变量出错
const age = 20;
age = 18;// TypeError:给常量赋值
```
```js
// 对象内部属性赋值
const person = {}
person.name = 'sg'// 给对象的属性赋值
console.log(person.name);// 'sg'
```
```js
// 不能声明迭代
for (const i = 0,i < 5,i++){}// TypeError
```

## 数据类型(7种)
6种简单数据类型：undefined、null、Boolean、number、string、symbol
1种复杂数据类型：object
### typeof 操作符
确定任意变量的数据类型，使用typeof操作符可以返回数据类型的字符串。
```js
let message = "some string";
console.log(typeof);// "string"
console.log(typeof 100);// "number"
```
- Undefined类型
- Unll类型
- Boolean类型
```js
// Boollean()函数可以将其他类型的值转换成布尔值。
let message = "Hello";
let message2 = Boolean(message);
```
- Unmber类型
NaN 是一个特殊的数值表示返回数值的操作失败了，NaN不等于包括NaN之内的任何值。使用isNaN()函数判断这个参数是否不是数值。
```js
console.log(isNaN(NaN));// ture
console.log(isNaN(10));// false(10是数值)
```
非数值转换成数值 有三个函数：nunmber()转换成数值;pareInt()转换成整数;parseFloat()带一个小数点的数值;
- String类型
- Symbol类型 符号数据类型

## 操作符
数学操作符、位操作符、关系操作符、相等操作符；ES中的操作符是独特的，因为他们可用于各种值，包括字符串、数值、布尔值和对象，应用给对象时，操作符会调用valueOf()和toString()方法来取直。
### 一元操作符
只操作一个值的操作符叫一元操作符
- 递增/递减操作符(前缀版和后缀版)(++)(--)
前缀递增操作符会给数值加1
前缀递减操作符会给数值减1
```js
let num = 20;
num1 = ++num; //给数值加1
num2 = --num; //给数值减1
console.log(num1); //21
console.log(num2); //19
```
前缀递增或递减在语句中优先级是相等的，因此会从左到右一次求值。比如：
```js
let num1 = 2;
let num2 = 20;
let num3 = --num1 + num2;
let num4 = num1 + num2;
console.log(num3); //21
console.log(num4); //21
//num4也等于21是因为第二个num1在使用时，也是递减后的取值（1）
```
后缀递增/递减的语法(++/--)，需要放在变量后面，区别在于，后缀版递增/递减在语句被求值后才发生。
```js
let num1 = 2;
let num2 = 20;
let num3 = num1-- + num2; //后缀递减操作符放在变量后面不会影响语句执行的结果；
let num4 = num1 + num2;
console.log(num3); //22
console.log(num4); //21
//num3等于22，是因为num1的后缀递减操作符并不会影响语句的执行；num4等于21，是因为num1已经执行了递减操作符的-1操作。
```
- 一元加和减，有(+)(-)表示
一元加放在变量前面，对数值没有任何影响；如果变量是非数值，则会调用number()函数转换数据类型。
```js
let s1 = "01";
let s2 = "false";
let s3 = "2";
let s4 = {
    valueOf(){
        reture 1;
    };
};
let s5 = "z";
s1 = +s1; //值变成了数值1
s2 = +s2; //值变成了数值0
s3 = +s3; //不变，还是2
s4 = +s4; //值变成了1
s5 = +s5; //值变成了NaN
```
一元减放在变量前面，主要用于吧变量的数值变成负值，如果变量是非变量，则先调用number()函数进行转换，然后再去负值。
```js
let s1 = "01";
let s2 = "false";
let s3 = "2";
let s4 = {
    valueOf(){
        reture 1;
    };
};
let s5 = "z";
s1 = -s1; //值变成了-1
s2 = -s2; //值变成了0
s3 = -s3; //值变成了-2
s4 = -s4; //值变成了-1
s5 = -s5; //值变成了NaN
```
### 位操作符
- 按位非(~),作用是返回数值的一补数，也就是数值的反码在减1的结果
```js
let num1 = 25;    //二进制00000000000000000000000000011001
let num2 = ~num1; //二进制11111111111111111111111111100110
console.log(num2); //-26
```
- 按位与(&),本质上，按位与就是将两个数的每一位对齐，然后在两位都是1时返回1，在任何一位是0时返回0
```js
let result = 25 & 3;
console.log(result); //1
//25 =00000000000000000000000000011001 
// 3 =00000000000000000000000000000011
//执行与操作后结果为1
//   =00000000000000000000000000000001
```
- 按位或(|),本质上，按位或也是将两个数的每一位对齐，然后在至少一位是1时返回1，在两位都是0时返回0
- 按位异或(^),区别在于，按位异或在比较时，只有一位是1时返回1，两位都是1或者两位都是0时返回0
- 左移(<<)
- 有符号右移(>>)
- 无符号右移(>>>)
### 布尔操作符
- 逻辑非(!),首先将操作数转换为布尔值，然后再对其取反（同时使用两个感叹号(!!)，相当于点用了Boolean()函数，转换变量为布尔值）
```js
console.log(!false); //ture
console.log(!"red"); //false
console.log(!0); //ture
console.log(!NaN); //ture
console.log(!1234); //false
```
- 逻辑与(&&),本质上，对两个变量执行逻辑与操作，会比较两个变量的操作数，同时为ture时返货ture，有一个为false时返回false（短路特性，如果第一个操作数决定了结果，那么永远不会对第二个操作数求值）
- 逻辑或(||)，本质上，同时为false时返回false，有一个为ture时返回ture（短路特性）
### 乘性操作符
- 乘法操作符(*),用于计算两个数的乘积
```js
let result = 10 * 5;//等于50
```
- 除性操作符(/)，用于计算第一个操作数除以第二个操作数的商
```js
let result = 55 / 11;//等于5
```
- 取模操作符(%)，也叫余数操作符，执行除法运算，然会余数
```js
let result = 26 % 5;//等于1
```
### 指数操作符
- 指数操作符(**)
```js
console.log(3**2); //9
```
- 指数赋值操作符(**=)
```js
let squared = 3;
squared **= 2;
cpnsole.log(squared); //9
```
### 加性操作符
也就是加法和减法操作符
- 加法操作符(+)，用于求两个数的和
```js
let result = 1 + 2;
console.log(result); //3
```
如果有任意操作数是字符串，则会将两一个操作数转换成字符串，再将两个字符串拼接到一起；并且有任意数是对象、数值或者布尔值，就会调用toString()方法获取字符串，比如：
```js
let result = 5 + "5"; //数值和字符串相加
console.log(result); //"55"
```
- 减法操作符(-),用于求两个数的差
### 关系操作符
执行比较两个值的操作符，包括(>),(<),(>=),(<=),都返回布尔值。
### 相等操作符
用于判断两个变量是否相等
- 等于和不等于(==)(!=),比较时会转换操作数
- 全等和不全等(===)(!==),比较时不会转换操作数
### 条件操作符
使用最广发的操作符之一
```js
variable = boolean_expression ? ture_value : false_vlue;
let max = (num1 > num2) ? num1 : num2;
//如果num1大于num2，则给max赋值num1，否则给max赋值num2
```
### 赋值操作符
- 简单的赋值操作符(=)，将等号右边的值赋值给左边的变量
- 复合赋值操作符，使用乘性、加性、位操作符后跟等于号表示，比如：
```js
let num = 10;
num = num + 10; // 20
// 以上代码第二行可以通过复合赋值来完成：
let num = 10;
num += 10; //20
```
乘后赋值(*=)
除后赋值(/=)
取模后赋值(%=)
加后赋值(+=)
减后赋值(-=)
左移后赋值(<<=)
右移后赋值(>>=)
无符号右移后赋值(>>>=)
### 逗号操作符
用来在一个语句中执行多个操作，比如：
```js
let num1 = 1, num2 = 2, num3 = 3;
//同时声明多个变量
```

## 语句
也称为流控制语句，大多数的语法都体现在语句中。语句通常使用一个或多个关键字完成既定的任务。
### if 语句
```js
if (condition) statement1 else statement2
// condition 可以是任何的表达式，求值结果不一定是布尔值，ES会自动调用Boolean()函数将求值结果转换位布尔值。如果求值结果位ture则执行语句statement1，如果求值结果位false，则执行语句statement2.
```
比如：
```js
if (i > 25)//condition
    console.log("Greater than 25.");//statement11
else {
    console.log("Less than or equal to 25.")//statement2
}
```
连续使用多个if语句
```js
if (condition1) statement1
else if (condition2) statement2
    else statement3
```
比如
```js
if (i > 25){
    console.log("Greater than 25.");
} else if (i < 0){
    console.log("Less than 0.");
} else {
    console.log("Between 0 and 25,inclusive.");
};
```
### do-while 语句
do-while语句是一种后测试循环语句，执行完循环体内部代码才会对推出任务条件求值，循环体内部代码至少执行一次。
```js
do {
    statement// 内部循环
} while (expression);//推出循环的条件
```
比如:
```js
let i = 0
do {
    i += 2;
}while (i < 10);
//只要i小于10，循环就会重复执行，每次循环+2。
```
### while语句
while语句是一种先测试循环语句，即先检测退出循环的条件，再执行循环体内的代码。因此循环体内部代码可能一次都不执行。
```js
while(expression) statement
```
比如
```js
let i = 0
while (i < 10) {
    i += 2;
}//这里从0开始，先检测i是否小于10，然后再执行循环递增操作。
```
### for语句
for语句也是先测试语句，只不过增加了进入循环之前的初始化代码，以及循环执行后要执行的表达式。
```js
for (initialization; expression; post-loop-experssion) statement
```
比如：
```js
let count = 0;
for (let i = 0;i < count; i++){
    console.log(i);
}
```
### for-in语句
for-in语句是一种严格的迭代语句，用于枚举对象中的非符号键属性
```js
for (property in experssion) statement
//为了确保局部变量不被修改，一般使用const
```
比如
```js
for (const propName in window) {
    document.write(propName);
}
// 这个例子使用for-in循环显示了BOM对象window的所有属性。每次执行循环，都会给变量propName赋予一个window对象的属性作为值，只有window的所有属性都被枚举一遍。
```
### for-of语句
for-of语句是一种严格的迭代语句，用于遍历可迭代对象的元素。
```js
for (property of experssion) statement
//为了确保局部变量不被修改，一般使用const
```
比如：
```js
for (const el of [2,4,6,8]) {
    document.write(el);
}
//这个使用了for-of语句显示了一个包含4个元素的数组中的所有元素。循环会持续到将所有元素都迭代完。
```
### 标签语句
用于给语句添加标签，语法如下：
```js
label: statement
```
比如：
```js
start: for (let i = 0;i < count;i++){
    console.log(i);
}
// 这里start就是一个标签，可以通过break或者continue语句引用。一般应用到嵌套场景
```
### break和continue语句
break和continue语句位执行循环代码提供了更严格的控制手段。break语句用于立即退出循环强制执行循环后的下一条语句。continue语句也用于立即退出循环，但是会再次从循环顶部开始执行。
```js
let num = 0
for (i = 0;i < 10;i++){
    if (i % 5 == 0){//i能否被5整除，余数为0
        break;//立即退出循环，然后执行后面语句
    }else{
        num++;
    };
}
console.log(num);//结果为4，即循环在退出之前执行了4次（分别为i=1、2、3、4）
```
```js
let num = 0
for (i = 1;i < 10;i++){
    if (i % 5 ==0){
        continue;//，立即退出当前当次循环，然后再次从循环顶部开始执行接下来的循环
    }else{
        num++;
    }
}
console.log(num);//结果为8，即循环在退出之前执行了8次（分别为i=1、2、3、4、6、7、8、9；i=5时被continue终止了一次循环，并没有走到num++那一步）
```
- 嵌套循环
```js
let num = 0;
outermost:
for (i = 0;i < 10;i++){
    for (j = 0;j < 10;j++){
        if (i == 5 && j == 5){
            break outermost;
        }else{
            num++;
        }
    }
}
console.log(num);//结果为55（ij的值分别为00-09、10-19、20-29、30-39、40-49、50-54这55次循环）
```
如果换成continue时
```js
let num = 0;
outermost:
for (i = 0;i < 10;i++){
    for (j = 0;j < 10;j++){
        if (i == 5 && j == 5){
            continue outermost;
        }else{
            num++;
        }
    }
}
console.log(num);//结果为95，（因为当ij的值为55时，重新从顶部开始接下来的循环，i的值变成了6，j的值变成了0；省掉了ij值为55、56、57、58、59的5次循环）
```
### with语句
with语句的用途时将代码的作用域设置为特定的对象。
```js
with (expression) statement;
//主要场景时针对一个对象反复操作
//严格模式下禁止使用with语句
```
比如：
```js
let qs = location.search.substring(1);
let hostName = location.hostname;
let url = location.href;
//以上代码中每一行都使用到了location对象，于是可以使用到wiht语句简化代码
with(location){
    let qs = search.substring(1);
    let hostName = hostname;
    let url = href;
}
```
### switch语句
switch语句时与if语句紧密相关的一种流控制语句。可以用于所有数据类型（字符串或者对象都可以），条件的值不需要是常量，也可以是变量或者表达式
```js
switch(expression) {
    //下面的每一个case相当于满足条件就执行后面的语句
    case value1:
        statement;
        break;//这里会让满足case条件时终止switch语句的继续执行，不会继续匹配下一个条件
    case value2:
        statement;
        break;
    case value3:
        statement;
        break;
    case value4:
        statement;
        break;
    default://default关键字用于不满足任何以上条件时，指定默认执行的语句，相当于（else语句）
        statement
}
```
```js
switch(i){
    case 25:
        console.log("25");
        break;
    case 35:
        console.log("35");
        break;
    case 45:
        console.log("45");
        break;
    default:
        console.log("other");
}
```
## 函数
## 函数基本语法
```js
function functionName(arg0,arg1,arg2,...,argN) {
    statements
}
```
比如：
```js
function sayHi(name,message) {
    console.log("Hellow" + name + "," +message);
}
//这只是一个函数的声明，并没有实际调用它，要调用函数需要通过函数名来调用，要传给函数的参数放在括号里（多个参数用逗号隔开），比如：
sayHi("zsy","how are you today?")
//在ES中函数不需要指定是否返回值，可以使用return语句来返回函数的值，
```
如果需要有返回值，则调用return语句，比如：
```js
function sum(num1, num2){
    return num1 + num2;//此时函数sum会将num1和num2两个值相加并返回结果
    //只要碰到return语句后面的代码就不会被执行
    //return语句也可以不带返回值，这样就只是为了提前终止函数，并不是为了返回值
}
//调用函数
let result = sum(5,10);
console.log(result);//结果为15
```







