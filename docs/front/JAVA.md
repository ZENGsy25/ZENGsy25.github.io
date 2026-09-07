# JAVA学习指南

[[toc]]

## 语法篇

```java
//当前的类定义在com.sy.test包下
package com.sy.test;
//当前的类定义为HelloWorld
//public: 公共的
//class: 类
//HelloWorld: 类名
public class HelloWorld {
    //当前的类的main方法
    //表示java程序的主入口
    //main方法必须有，不能没有
    public static void main() {
        //输出Hello World
        System.out.println("Hello World");
    }
}
```
### 字面量类型
**字面量：程序中的数据**
- 整数类型
- byte 类型:取值范围为-128~127，占用内存1字节
- short 类型:取值范围为-32768~32767，占用内存2字节
- int 类型:取值范围为-2147483648~2147483647，占用内存4字节
- long 类型:取值范围为-9223372036854775808~9223372036854775807，占用内存8字节
```java
byte a = 10;
short b = 200;
int c = 100000000;
long d = 1000000000000000000L;//long类型需要添加L作为后缀
System.out.println(a);  
System.out.println(b);
System.out.println(c);
System.out.println(d);
```
- 小数类型
- byte 类型:取值范围为-128~127，占用内存1字节
- short 类型:取值范围为-32768~32767，占用内存2字节
- float 类型:取值范围任意，占用内存4字节
- double 类型:取值范围任意，占用内存8字节
```java
float a = 1.11F;//float类型需要添加f或者F作为后缀
double b = 2.22;
System.out.println(a);
System.out.println(b);
```
- 字符串类型
```java
char name = "张三";
System.out.println(name);
```
- 字符类型
```java
char gender1 = '男';
char gender2 = '女';
System.out.println(gender1);
System.out.println(gender2);
```
- 布尔类型
```java
boolean flag = true;
System.out.println(flag);
```
- 空类型
```java
String name = null;
System.out.println(name);
```

### 变量
- 变量定义格式
**数据类型 变量名 = 数据值;**
- 只能存在一个值；
- 变量名不允许重复定义；
- 变量在使用之前一定要赋值；
- 一条一语句可以定义多个变量，也可以对多个变量进行连续赋值；
```java
int a = 10;
char name = "张三";
double b = 1.11;
```

**加粗**  ** ** 两边*是加粗