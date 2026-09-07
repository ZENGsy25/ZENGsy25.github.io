# C#语言基础学习指南

[[toc]]

# 语法篇

### C#代码基础格式

- **基础语法格式**

```c#
/*
[修饰符] class 类名{
  程序代码
}
*/
public class HelloWorld{
  public static void Main(){}
  public static void AppendLine(string str){}
}
```

- **结构定义语句和功能执行语句**
- 每条功能执行语句的最后都必须用分号(;)结束。

```c#
public class HelloWorld{
  public static void Main(){
    AppendLine("Hello World");
  }
  public static void AppendLine(string str){
    Console.WriteLine(str);
  }
}
```

- C#语言是严格区分大小写的
- 类名、方法名和属性名中的每个单词的首字母要大写（大驼峰命名法）；
- 字段名、变量名的首字母要小写，之后的每个单词的首字母均为大写（小驼峰命名法）、
- **常量**名中的所有字母都大写，单词之间用下划线连接
- 在程序中，应该尽量使用有意义的英文单词来定义标识符，使得程序便于阅读。例如使用userName表示用户名，password表示密码。

### 注释

- 单行注释：//
- 多行注释：/* */
- 文档注释：///

### 标识符

- 标识符：标识符是C#中的名称，可以是类名、方法名、变量名、属性名、参数名、枚举名、接口名、命名空间名等等
- 标识符可以有任意顺序的大小写字母、数字、下划线_、$、@符号组成，**不能以数字开头，不能是关键字**

### 关键字

- 关键字：C#中的关键字，如int、if、else、for、while、do、switch、case、default、class、struct、interface、enum、delegate、void、bool、char、string、object、int[]、double[]、float[]、long[]、short[]、byte[]、char[]、string[]、object[]、int?、double?、float?、long?、short?、byte?、char?、string?、object?、int[,]、double[,]、float[,]、
- 所有关键字都是小写，程序中的标识符不能以关键字开头

### C#命名规范

- 类名、方法和属性必须首字母大写（大驼峰命名法）
- 字段名、变量名的首字母小写（小驼峰命名法）
- 常量名必须大写（全大写命名法）

## 常量

- 常量就是在程序中固定不变的值，是不能改变的数据。
**常量定义格式**
- 使用**const** 关键字 定义常量
- 必须指定：整型常量、浮点数常量、字符常量、字符串常量、布尔常量、null常量

### 常量的类型

- **整型常量**是整数类型的数据，有二进制、八进制、十进制和十六进制4种表示形式；

```c#
public const int AGE = 18;
```

- **浮点数常量**就是在数学中用到的小数；**float**单精度浮点数：后面以F或f结尾；**double**双精度浮点数：后面以以D或d结尾;,结尾不加任何的后缀，此时虚拟机会默认为double双精度浮点数；

```c#
public const double D1 = 3.14;
public const double D2 = 123.456d;
public const double D3 = 123.456D;
//
public const float F1 = 3.14f;
public const float F2 = 123.456F;
```

- **字符常量**用于表示一个字符，一个字符常量要用一对英文半角格式的单引号（' '）引起来，他可以是英文字母、数字、标点符号以及由转义序列来表示的特殊字符。

```c#
public const char C1 = 'a';
public const char C2 = '好';
```

- **字符串常量**用于表示一串连续的字符，一个字符串常量要用一对英文半角格式的双引号（“ ”）引起来。

```c#
public const string S1 = "hello world";
public const string S2 = "hello\tworld";
```

- **布尔常量**布尔常量即布尔型的两个值true和false，该常量用于区分一个事物的真与假。

```c#
public const bool B1 = true;
public const bool B2 = false;
```

- **null常量**null常量只有一个值null，表示对象的引用为空。

```c#
public const object N1 = null;
```

## 变量

### 变量的数据类型

- C#是一门强类型的编程语言，在定义变量时必须声明变量的类型，在为变量赋值时必须赋予和变量同一种类型的值，否则程序会报错。
- **值类型**：值类型变量保存的值是具体的数据，比如int（整型数值）、byte（字节型数值）、short(短整型数值)、long(长整型树枝)、double（数值-小数）、char（字符-单字符）、bool（布尔）、enum(枚举)、struct(结构)等
- byte 类型：1字节，范围：-2^7 ~ 2^7-1
- short 类型：2字节，范围：-2^15 ~ 2^15-1
- int 类型：4字节，范围：-2^31 ~ 2^31-1
- long 类型：8字节，范围：-2^63 ~ 2^63-1
- float 类型：4字节，范围：1.46E-45 ~ 3.4E+38;-1.45E-45 ~ -3.4E+38
- double 类型：8字节，范围：4.907E-324 ~ 1.797E+308;-4.940E-324 ~ -1.797E+308
- **引用类型**：引用类型变量保存的是内存地址，比如类(class)、接口(interface)、字符串-多字符(string)、数组([])等

### 变量类型转化

- 强制转化：将一个数据类型转换为另一个数据类型

```c#
//有趣的案例
public static void ChangeNUmber() {
    byte a;                
    int b = 298; // 298 的二进制：0000 0001 0010 1010 (16位)
    a = (byte)b;// 强制转换为 byte（只保留低8位）：0010 1010 = 42
    Console.WriteLine("b=" + b);// 输出 b 的值298
    Console.WriteLine("a=" + a);// 输出 a 的值42（因为 298 超过了 byte 的范围，发生了溢出；二进制计算中，丢弃高位：0000 0001,保留：0010 1010 = 42）
    Console.ReadKey();//停留在控制台界面，等待用户输入
}
```

- 变量的作用域：程序中，变量一定会被定义在某一对大括号中，该大括号所包含的代码区域便是这个变量的作用域。
- 一对大括号就是一个作用域，**里**作用域**可以调用外**作用域资源，**外**作用域**不可调用里**作用域资源

## C#运算符

- 算术运算符，赋值运算符，比较运算符，逻辑运算符，000位运算符，三元运算符
- **算术运算符**，如+、-、*、/、%、++、--
- **赋值运算符**，如=、+=、-=、*=、/=、%=
- **比较运算符**，如==、!=、>、<、>=、<=
- **逻辑运算符**，如&&、||、!、^、|、&
- **000位运算符**，如&、|、^、~、<<、>>
- **三元运算符**，如a?b:c

```C#
//前置++
int a = 10;
int b = ++a;
Console.WriteLine(a);//11
Console.WriteLine(b);//11
//后置++
int a = 10;
int b = a++;
Console.WriteLine(a);//10
Console.WriteLine(b);//11

```

## 选择结构语句

### while语句

- **while语句**循环语句：在C#中有一种可以重复执行同一代码块的语句，
- 循环语句分为while循环语句、do…while循环语句和for循环语句
- while语句格式：while(条件表达式) { 循环体 }

```c#
while('循环条件表达式') {
  //循环体;
}
```

- **do while**语句:先要执行一次大括号内的代码再判断循环条件
- do while语句格式：do { 循环体 } while(条件表达式);

```c#
//do while语句无论循环条件是否满足，循环至少执行一次
do {
  //循环体;
}while('循环条件表达式');

public class Program{
  public static void Main(){
    AppendLine([1,2,3,4,5,6]);
  }
  public static void AppendLine(int[] arr){
    int x = 0;
    do{
      Console.WriteLine('X=' += arr[x]);
      x++;
    }while(x <= 4)
  }
}
```

- **for语句**通常用于循环次数已知的情况。
- for语句格式：for(初始化表达式;循环条件表达式;迭代表达式) { 循环体 }

```c#
using System;
namespace Program13{
    class Program{
        static void Main(string[] args){
            int sum = 0;   //定义变量sum，用于记住累加的和
            for (int i = 1; i <= 4; i++) {//i的值会在1~4之间变化
                sum += i; //实现sum与i的累加
            }
            Console.WriteLine("sum = " + sum); //打印累加的和
            Console.ReadKey();//停留在控制台界面，等待用户输入
        }
    }
}

```

### if else语句

### switch case语句

### try catch语句

### for语句

### 跳转语句

- 跳转语句：用于跳转到指定位置，break、continue、return、goto.
- break：跳出当前循环
- continue：跳过当前循环，继续下一次循环
- return：返回当前方法，结束当前方法
- goto：跳转到指定位置(少用可能会产生错误)

```c#
using System;
namespace Program13{//命名空间
    class Program{
        static void Main(string[] args){
          int[] arr1 = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 };
          int number = AddNumbers(arr1)
        }
      public static int AddNumbers(int[] numbers)
      {
          int res = 0;
          for (int i = 0; i < numbers.Length; i++)// 遍历数组
          {
              if (numbers[i] % 2 == 0)// 如果是偶数，跳过
              {
                Console.WriteLine("偶数：" + numbers[i]);
                continue;
              }else if (numbers[i] % 3 == 0)// 如果是3的倍数，跳出循环
              {
                Console.WriteLine("3的倍数：" + numbers[i]);
                continue;
              }else if (numbers[i] % 10 == 0)// 如果是13的倍数，跳出循环
              {
                Console.WriteLine("13的倍数：" + numbers[i]);
                break;
              }
              res += numbers[i];//相加操作
          }
          return res;
      }
    }
}
```

## 方法

- 在程序中，将可以完成一定特定功能的代码段提出来用一个方法来表示。例如一个段求两个数之和代码，我们可以用以Add()方法来表示，需要求和时，只需调用Add()方法即可。
方法的语法格式：[修饰符] 返回值类型 方法名([[参数类型 参数名1],[参数类型 参数名2] ,……]){
  方法体
  return 返回值;
}

```c#
class Program{
  static void Main(string[] args){
      int product = Multiply(3, 5);    
      Console.WriteLine("num1*num2=" + product);
      Console.ReadKey();//停留在控制台界面，等待用户输入
  }
  //定义两个数相乘的方法
  public static int Multiply(int num1, int num2){
      int sum = num1 * num2;
      return sum;
  }
}
```

### 方法的重找

- C#中允许在一个程序中定义多个**同名方法**，但是**参数的类型或个数必须不同**，这种方式被称作方法的重载。

## 数组

- 数组中的元素会被自动赋予一个默认值，根据元素类型的不同，默认初始化的值也是不同的
- byte、short、int、long类型的初始值：0
- float、double类型的初始值：0.0
- char 类型的初始值：一个空字符，即’\u0000’
- bool类型的初始值：false
- 引用类型类型的初始值：null

### 数组的定义

- 数组是指一组数据的集合，数组中的每个数据被称作元素。在数组中可以存放任意类型的元素，但同一个数组里存放的元素类型必须一致。
- 数组类型：一维数组和多维数组。
- 数组初始化类型：动态初始化、静态初始化
```c#
//动态初始化：在定义数组时只指定数组的长度，由系统自动为元素赋初值的方式。
int[] x;	        //声明一个int[]类型的变量x
x = new int[100];	//创建一个长度为100的int类型型数组

int[] arr = new int[4]; //定义可以存储4个整数的数组
arr[0] = 1; //为第1个元素赋值1
arr[1] = 2; //为第2个元素赋值2

//静态初始化：定义数组的同时就为数组的每个元素赋值。
//数组的静态初始化有两种方式：
//1、类型[] 数组名 = new 类型[]{元素，元素，……};
//2、类型[] 数组名 = {元素，元素，元素，……};
int[] arr = new int[]{1,2,3,4};
int[] arr = {1,2,3,4};//常用
```

### 数组的遍历

- 使用for循环遍历数组的元素
```c#
class Program{
  static void Main(string[] args){
      int[] arr = { 1, 2, 3, 4, 5 };  //定义数组
      //使用for循环遍历数组的元素
      for (int i = 0; i < arr.Length; i++){
          Console.WriteLine(arr[i]);   //通过索引访问元素
      }
      Console.ReadKey();//停留在控制台界面，等待用户输入
  } 
}
```

# 面向对象基础

- 面向对象则是把解决的问题按照一定的规则划分为多个独立的对象，然后通过调用对象的方法来解决问题。
- 面向对象思想有三大特征：封装性、继承性和多态性。
- **封装性**面向对象的核心思想，他将对象的特征和行为封装起来，不需要让外界知道具体实现细节，这就是封装思想。
- **继承性**主要描述的是类与类之间的关系，通过继承，可以在无需重新编写原有类的情况下，对原有类的功能进行扩展。
- **多态性**指的是同一操作用于不同的对象，会产生不同的执行结果。

## 类与对象
- 类是对某一类事物的抽象描述。
- 对象用于表示现实中该类事物的个体。

### 类的定义
```c#
 using System; 
 namespace Progrom01 {
    public class Person{        //定义Person类，public为访问修饰符
        public int age;               //定义int类型的字段age        
        public void Speak(){    //定义 Speak() 方法
            Console.WriteLine("大家好，我今年" + age + "岁!");
        }
    }
}
```

### 类的使用

- 在C#中，对象是通过类创建出来的。因此，在程序设计时，最重要的就是类的设计。
- 假设要在程序中描述一个学校所有学生的信息，可以先设计一个学生类（Student），在这个类中定义两个字段name和age分别表示学生的姓名和年龄，定义一个方法Introduce()表示学生做自我介绍。
```c#
namespace Program03{
  class Student{
    public string name;//定义字段name属性
    public int age;//定义字段age属性
    public void Introduce(){
      //方法中打印字段name和age的值
      Console.WriteLine("大家好，我叫" + name + ",我今年" + age + "岁!");
    }
  }
}
```

- **属性**对字段的访问作出一些限定，不允许外界随意访问。
- 在程序中，使用属性封装字段时，需要将字段访问级别设为**private**，并通过属性的get和set访问器来对字段进行读写操作，从而保证类**内部数据安全**。
- 属性的分类：
  - 读写属性：同时有get、set访问器的属性。
```c#
public [数据类型] [属性名] {    
  get { "返回参数值" }
  set { "设置隐式参数value给字段赋值" } 
}
```

  - 只读属性：只有get访问器。
```c#
public [数据类型] [属性名]{     
  get { "返回参数值" }    
}
```

  - 只写属性即只有set访问器。
```c#
public [数据类型] [属性名] {     
  set { "设置隐式参数value给字段赋值" }   
}
```

- 示例
```c#
public class Student{
  private string name = "张三";//定义私有字段name
  public string Name  {//定义公有属性Name封装name
    get { return name; }        
  }
  private int age;//定义私有字段age
  public int Age{//定义公有属性Age封装age字段
    get { return age; }//通过访问共有字段Age的get访问器，返回字段age的值
    set {……}
  }
  public string Gender{//定义表示性别的 自动属性
    get;
    set;
  }
  public void Introduce(){……}
}
```

### 对象的创建和使用

- 创建对象：通过new关键字来实现
- 类名 对象名称 = new 类名();

```c#
Person p = new Person();//创建一个类型为Person的对象
//用例
class Program{
  static void Main(string[] args){
    Person p2 = new Person();  //创建p2对象
    p2.Say();     //调用Say()方法
    p2 = null;    //释放对象，将p2对象设置为null,表示该p2变量不指向任何一个对象
    p2.Say();     //抛出异常，P2为null，不能引用Person类中的Say()方法，程序会抛出异常
    Console.ReadKey();
  }
}
public class Person{
  public void Say(){//创建Say()方法，输出一句话
    Console.WriteLine("Welcome to itcast!");
  }
}
```

  - program.cs

```c#
using System;
public class Program
{
  public static void Main()
  {
    Console.WriteLine(Student.Introduce());//大家好，我是张三，今年0岁，性别
  }
}
```

  - Student.cs

```c#
using System;
public class Student
{
    private static string name = "张三";//定义私有字段name
    public static string Name
    {//定义公有属性Name封装name
        get { return name; }
    }
    private static int age;//定义私有字段age
    public static int Age
    {//定义公有属性Age封装age字段
        get { return age; }//通过访问共有字段Age的get访问器，返回字段age的值
        set { }
    }
    public static string Gender
    {//定义表示性别的 自动属性
        get;
        set;
    }
    public static string Introduce()
    {
        string student = $"大家好，我是{Student.Name}，今年{Student.Age}岁，性别{Student.Gender}";
        return student;
    }
}
```

### 访问修饰符

- 用于控制类成员变量、方法、构造方法的访问权限
- 分类：public、private、protected、internal、protected internal、private protected
- **public**：公共的，类成员变量、方法、构造方法都可以被其他类访问,最高访问级别，访问**不受限制**。
- **private**：私有的，类成员变量、方法、构造方法只能在**当前类**中访问,最低访问级别。
- **protected**：受保护的，类成员变量、方法、构造方法只能在**当前类和子类**中访问。
- **internal**：内部的，类成员变量、方法、构造方法只能在**当前程序集**中访问。
- protected internal：受保护的内部，类成员变量、方法、构造方法只能在当前程序集和子类中访问
- private protected：受保护的私有，类成员变量、方法、构造方法只能在当前类和子类中访问。
- **partial** ：部分类，可以修饰多个文件中的相同类名，实际效果是一个类；编译时会自动拼接。
换一句话说就是可以把一个类，拆分为多个同名的类群（多个文件），编译时会自动拼接成一个类。

## 构造方法

- 构造方法是类的一个特殊成员，他会在类实例化对象时自动调用，为对象开辟内存空间，用于初始化类的静态成员和实例成员。
- 构造方法名称必须与类名称相同
- 构造方法不能有返回值，不能有参数
- 在方法中不能使用return语句返回一个值

```c#
public class Person{
  // 下面是Person类的构造方法
  //方法名与类名相同，没有返回值类型的声明,没有参数，因此为有参构造方法
  public Person(){
    Console.WriteLine("无参的构造方法被调用了...");
  }
}
class Program{
  static void Main(string[] args){
    Person p = new Person();  //实例化Person 对象
    Console.ReadKey();
  }
}

public class Person{
  int age;
  public int Age { get; set; }
  //下面是Person类的构造方法
  //方法名与类名相同，没有返回值类型的声明,该构造方法中有1个int类型的参数，因此为有参构造方法
  public Person(int a){
    Age = a;   
  }
  public void Speak(){
    Console.WriteLine("I am " + Age + " years old.!");
  } 
}
public static void Main(string[] args){
  Person p = new Person(20);    //实例化 Person 对象
  p.Speak();
  Console.ReadKey();
}
```

### 构造方法的重载

- 构造方法重载：在一个类中可以定义多个构造方法，只要每个构造方法的参数类型或参数个数不同即可。

```c#
public class Person{
  //定义两个参数的构造方法
  public Person(string conName, int conAge){
    Name = conName;	           //为name字段赋值
    Age = conAge; 	           //为age字段赋值
  }
  // 定义一个参数的构造方法
  public Person(string conName){
    Name = conName; 	         //为name字段赋值
  }
}
```

## this 关键字

- this 用于表示对当前实例的引用
- this.属性名:访问当前类的属性，解决与局部变量名称冲突的问题。
- this.方法名():访问当前对象的方法
- this() ：构造方法在实例化对象时会被.Net运行环境自动调用，因此，在程序中不能像调用其他方法一样去调用构造方法，但可以用“：this([参数1,参数2…])”的形式来调用其他的构造方法。

```c#
public class Person{
  private int age = 10;
  public int Age{
    get;
    set;
  }
  public Person(int Age){
    this.Age = Age;//this.Age调用的Age为成员属性
  }
  public void Say(){
    Console.WriteLine("大家好，我今年" + this.Age + "岁了");
  }
}
```

```c#
public class Person{
  int age = 10;
  public int Age  {//定义Age属性
    get;
    set;
  }
  public void Test(){//定义Test()方法
    Console.WriteLine("这是一个测试方法");
    this.Say(); //使用this关键字调用Say()方法
  }
  public void Say(){
    Console.WriteLine("大家好，我今年" + this.Age + "岁了");
  }
}
```

```c#
 public class Student{
  //构造方法1
  public Student(){
    Console.WriteLine("无参的构造方法");
  }
  //构造方法2
  public Student(string name) : this(){//带一个参数的构造方法,这里的this()指的是**构造方法1**
    Console.WriteLine("一个参数的构造方法");
  }
  //构造方法3
  public Student(string name, int age) : this("abc"){//带两个参数的构造方法，这里的this()指的是**构造方法2**
    Console.WriteLine("两个参数的构造方法");
  }
}
```

## 垃圾回收

- 在C#中，当一个对象成为垃圾后仍会占用内存空间，时间一长，就会导致内存空间的不足。为了清除这些无用的垃圾对象，释放一定的内容空间，C#中引入了垃圾回收机制。
- 在这种机制下，程序员不需要过多关心垃圾对象回收的问题，.Net运行环境会启动垃圾回收器将这些垃圾对象从内存中释放，从而使程序获得更多可用的内存空间。
- 除了等待运行环境进行自动垃圾回收，还可以通过调用**GC.Collect()**方法来通知运行环境立即进行垃圾回收。

```c#
class Program{
  static void Main(string[] args){
    Student s1 = new Student();
    Student s2 = new Student();
    s1.Name = "s1";
    s2.Name = "s2";
    s1 = null;//释放对象s1此刻的s1变量为垃圾对象
    Console.WriteLine("执行GC.Collect方法:");
    GC.Collect(); //显式调用垃圾回收器,立即进行垃圾回收操作
    Console.ReadKey();
  }
}
```

## static 关键字
- 被static修饰的类称为静态类。
- static 关键字用于修饰类成员变量、方法、构造方法,
- 被static修饰的成员称为静态成员。静态成员包括**静态字段**、**静态属性**、**静态类**、**静态方法**、**静态构造方法**。
- 这些字段被static修饰过后称为静态字段，他不属于任何对象，只属于类，而且只能通过“**类名.静态字段名**”的方式访问。
- **静态字段**，有时候，我们希望某些特定的数据在内存中只有一份，并且可以被类的所有实例对象所共享。此时我们就需要使用到静态字段，调用方法：**类名.静态字段名**
```c#
class Student{
  public static string schoolName = "传智播客"; //使用static修饰schoolName字段，该字段为静态字段
  public string Name { get; set; }
}
class Program{
  static void Main(string[] args){
    Student stu1 = new Student();               //创建学生对象
    stu1.Name = "小白";
    Student stu2 = new Student();
    stu2.Name = "张三";
    Console.WriteLine(stu1.Name+"的学校是:" + Student.schoolName);//静态字段可以使用类名直接调用
    Console.WriteLine(stu2.Name+"的学校是:" + Student.schoolName);//静态字段可以使用类名直接调用
    Console.ReadKey();
  }
}
```

- **静态属性**使用static修饰的属性被称为静态属性，静态属性可以读写静态字段的值，并保证静态字段值的合法性。调用方法：**类名.静态属性名**
```c#
class Student{
  private static string schoolName = "传智播客";  //定义静态字段schoolName
  public static string SchoolName{//使用static定义静态属性SchoolName
    set { schoolName = value; }
    get { return schoolName; }
  }
  public string Name { get; set; }
}
class Program{
  static void Main(string[] args){
    Student stu1 = new Student();    //创建学生对象
    stu1.Name = "小白";
    Console.WriteLine(stu1.Name + "的学校是:" + Student.SchoolName);//调用静态属性SchoolName
    Console.ReadKey();
  }
}
```

- **静态方法**使用static修饰的方法称为静态方法，静态方法只能访问静态字段，不能访问实例字段。调用方法：**类名.静态方法名**
  - 需要注意的是，由于静态方法在类加载时就会被初始化，而实例对象的初始化晚于静态方法，因此在静态方法中不能引用在其方法体外创建的实例对象。
```c#
namespace Program13{
  class StaticClass{
    public static void Test(){  //定义Test静态方法的
      Console.WriteLine("我是StaticClass类的静态方法");
    }
  }
  class Program{
    static void Main(string[] args){
      StaticClass.Test();      
      Console.ReadKey();
    }
  }
}
```

- **静态类**当类中的成员全部是静态成员时，就可以把这个类声明为静态类。
  - 因此静态类不能有实例对象，不能创建静态类的对象。
```c#
public static class StaticClass{//使用static定义静态类StaticClass
  //声明静态字段并赋值
  private static string name = "传智";
  //定义静态方法ShowName()
  public static void ShowName(){
  //静态方法的方法体
  Console.WriteLine("我的名字是:" + name);
}}
static void Main(string[] args){
  StaticClass.ShowName();
  Console.ReadKey();
}
```

- **静态构造方法**静态构造方法，用于初始化静态成员；在类加载时执行，只执行一次
  - 一个类只能有一个静态构造方法，该静态构造方法没有任何修饰符，也没有参数，可以被定义在静态类或非静态类中。
  - 用户无法像使用普通构造方法那样直接使用静态构造方法，静态构造方法会在程序创建第一个实例或引用任何静态成员之前，完成类中静态成员的初始化。
```c#
class StaticClass{
  //声明静态字段
  public static string staticName;
  static StaticClass(){//使用static定义静态构造方法，并在该方法中为静态字段staticName赋值
    staticName = "LiXiang";
  }
}
class Program{
  static void Main(string[] args){
    //调用StaticClass的staticName静态字段
    Console.WriteLine("我的名字是" + StaticClass.staticName);
    Console.ReadKey(); 
  }
}
```

### 单例模式
- 单例模式是C#中的一种设计模式，他是指在设计一个类时，需要保证整个程序在运行期间**只存在一个实例对象**，并提供一个全局访问点。
- 单例模式在C#中实现方式有很多，这里介绍一种最简单的单例模式。
```c#
//单例类
/*
单例模式的特点:
在类的内部创建一个该类的实例对象，并使用静态变量singleInstance引用该对象，由于变量应该禁止外界直接访问，因此使用private修饰，声明为私有成员。
类的构造方法使用private修饰，声明为私有，这样就不能在类的外部使用new关键字来创建实例对象。
为了在类的外部能够获得类的实例对象，需要定义一个静态方法SingleMethod()，用于返回该类实例singleInstance。
*/
public class SingleClass{
  private static SingleClass singleInstance;//声明静态字段singleInstance
  private SingleClass() { }//私有构造方法
  public static SingleClass SingleMethod(){//创建公用的静态的方法SingleMethod
    if (singleInstance == null){
      singleInstance = new SingleClass();//调用私有的构造方法创建单例对象singleInstance
    }
    return singleInstance;
  }
}
class Program{
  static void Main(string[] args){
    //用SingleMethod()方法创建SingleClass类的对象ic1和ic2
    SingleClass ic1 = SingleClass.SingleMethod();
    SingleClass ic2 = SingleClass.SingleMethod();
    if (ic1 == ic2){//比较变量ic1与ic2中存的地址是否相同
      Console.WriteLine("变量ic1与变量ic2所存储的地址相同");
    }
    Console.ReadKey();
  }
}

```

## 嵌套类

- 嵌套类：嵌套类属于外部类，外部类可以访问嵌套类
- 外部类与嵌套类的成员可以重名，当访问非静态成员时，需要先创建他所在类的对象。
- 在嵌套类内部可以声明静态成员，嵌套类可以直接引用外部类的静态成员。
- 当在作用域范围之外引用嵌套类时,需要使用类似“Outer.OuterMethod”的完整限定名的方式。
```c#
class Outer{//外部类
  class Nesting{//嵌套类
    public int num = 10;
  }
  public void OuterMethod(){//外部类方法
    Nesting nesting = new Nesting(); //创建嵌套类的对象
    Console.WriteLine("调用嵌套类的字段num=" + nesting.num); //调用嵌套类的字段num
  }}
class Program{
  static void Main(string[] args){
    Outer outer = new Outer();
    outer.OuterMethod();
    Console.ReadKey();
  } 
}
```

### 匿名类
- 匿名类：匿名类属于外部类，外部类可以访问匿名类
- 有时候某个类的实例只会用到一次，这时可以使用匿名类的方式创建实例，即无需显式定义一个类，就可以将一组只读属性封装到单个对象中。
```c#
class Program{
  static void Main(string[] args){
    var Anon = new { Name = "小明",Sex = '男',Age = 3,};//创建匿名类
    Console.WriteLine("我的名字是:{0}岁,性别为:{1},年龄是:{2}岁",Anon.Name, Anon.Sex, Anon.Age);//直接调用并输出匿名类的属性
    Console.ReadKey();
  }
}
```

## 对象的初始化
- 在一个类中，通常是使用构造方法来为属性赋值，当一个类中属性过多时，不可能为每种情况都创建一个构造方法，此时可以使用对象初始化器来为属性赋值。
- 对象初始化器可以同时为类的多个属性赋值，从而大大减少对象初始化的代码。
- 对象初始化器的语法格式：类名 变量名=new 类名(){属性名=值,属性名=值……};
```c#
class Person{
  //在Person类中定义Age、Gender、Name属性
  public int Age;
  public char Gender;
  public string Name;
}
static void Main(string[] args){
  Person p1 = new Person() { Name = "小明", Age = 3, Gender = '男' };
  Console.WriteLine("我的名字是:" + p1.Name + ",性别为:" +
  p1.Gender + ",年龄是:"+ p1.Age + "岁");
  Console.ReadKey();
}
```

# 面向对象高级

## 类的继承
- 在C#中，类的继承是指在一个现有类的基础上去构建一个新的类，构建出来的新类被称作子类，现有的类被称作父类，子类会自动拥有父类所有可继承的属性和方法。
```c#
public class A{
}
public class B : A
public class C : A

//动物和犬科的继承关系
class Animal{
}
class Dog : Animal{ //Dog类继承Animal类
  //Dog类可以自动拥有Animal类的属性和方法
}
```

- 继承：子类继承父类的属性和方法，子类可以扩展父类的功能，也可以覆盖父类的方法
  - 一个类只能有一个直接的父类，多个类可以继承同一个父类。
  - 多层继承是可以的，即一个类的父类可以再去继承其他类
```c#
class A{}
class B : A{}  //B类继承自A类，B类是A类的子类
class C : B{}  //C类继承自B类，C类是B类的子类
```

### 构造方法的执行过程
- 当一个类的对象被创建时，如果该类拥有父类的话，在调用自身构造方法的同时还会调用父类的构造方法。
- 构造方法执行顺序：**先执行父类的构造方法，再执行子类的构造方法**。

### new 关键字隐藏基类的方法
- 子类在继承父类时可以对父类的成员进行扩展，如果子类中出现与父类同名的方法，那么在调用该方法时程序就不能明确该方法是属于父类还是子类，这时编译器就会提示使用**new关键字**隐藏基类方法。
```c#
useing System;
namespace Program{ 
  class Animal{
    public void Shout(){
      Console.WriteLine("--->动物叫");
    }
  }
  class Dog : Aniaml{
    // public void Shout(){//此方法与父方法同名
    //   Console.WriteLine("--->汪汪汪1");
    // }
    public new void Shout(){//因为Shout()与基类Shout()同名，使用new关键字隐藏基类方法，后续被调用时才知道该方法属于父类还是子类
      Console.WriteLine("--->汪汪汪2");
    }
  }
  class Program{//构造方法
    static viod Main(string[] args){//args表示命令行参数；//string[]表示参数的类型
      Dog dog = new Dog();
      dog.Shout();//此时调用子类方法Shout()会打印--->汪汪汪2,而不是--->动物叫

      Console.ReadKey();
    }
  }
}
```

### 装箱、拆箱

- 装箱：将数值类型转换为对象类型；
- 拆箱：将对象类型转换为数值类型；
- 需要注意的是，装箱与拆箱过程本质上是**数据存储在栈与堆之间的变更**，如果频繁的进行装箱与拆箱操作势必会影响程序的运算效率，所以建议尽量减少相关操作。
```c#
useing System;
namespace Program04{
  class Program{
    static void Main(string[] args){
      int num = 100;
      object obj = num; //对象obj保存了变量num的值--装箱
      Console.WriteLine("对象obj的值为{0}", obj);
      num = (int)obj;//将对象obj的值保存到变量num--拆箱
      Console.WriteLine("变量num的值为{0}", num);
      Console.ReadKey();
    }
  }
}
```

## sealed 关键字
- 在C#中，使用sealed关键字修饰的类不可以被继承，也就是不能派生子类，这样的类通常被称为密封类。
- sealed 关键字用于修饰类、方法、属性、索引器、事件、结构体、枚举、接口、委托。
```c#
useing System;
namespace Program{ 
  sealed class Animal{
    public void Shout(){
      Console.WriteLine("动物叫");
    }
  }
  class Dog : Aniaml{
    public void Shout(){
      Console.WriteLine("汪汪汪");
    }
  }
  class Program{
    static viod Main(string[] args){//args表示命令行参数；//string[]表示参数的类型
      Dog dog = new Dog();
      dog.Shout();//此时调用子类方法Shout()会报错，因为Dog类继承自Animal类，Animal类被sealed修饰，不能被继承
      Console.ReadKey();
    }
  }
}
```

### virtual 虚拟方法
- virtual 关键字：修饰方法，表示该方法可以被子类继承并重写

### virtual+override 覆盖方法
- override ：修饰方法，表示该方法被重写，子类必须重写该方法

```c#
class Animal{
  public virtual void Shout(){//使用virtual关键字修饰，表示该方法可以被子类继承并重写
    Console.WriteLine("动物的叫声");
  }
}
class Dog : Animal{
  public sealed override void Shout(){//使用override关键字修饰，表示该方法被重写，子类必须重写该方法
    Console.WriteLine("狗的叫声");
  }
}
class BlackDog : Dog{
  public override void Shout(){//覆盖父类方法,但是父类的方法被sealed修饰，不能被覆盖
    Console.WriteLine("黑色狗的叫声");
  }
}
class Program{
  static void Main(string[] args){
    Dog dog = new Dog();//创建Dog类对象
    dog.Shout();//这里会抛出异常，因为BlackDog类继承自Dog类，Dog类被sealed修饰，不能被继承
    Console.ReadKey();
  }
}
```

### 重写方法
- 使用new 关键字隐藏基类的方法，表示该方法被重写，但是不能覆盖父类方法，上面有示例 to **new 关键字隐藏基类的方法**
- **virtual+override** 关键字：父类方法必须使用virtual关键字修饰，子类方法必须使用override关键字修饰。 
```c#
namespace Program07{
  class Animal{
    public virtual void Shout(){//使用virtual关键字修饰，表示该方法可以被子类继承并重写
      Console.WriteLine("动物发出叫声");
    }
  }
  class Dog : Animal{
    public override void Shout(){//使用override关键字修饰，表示该方法被重写，子类必须重写该方法
      Console.WriteLine("汪汪......");
    }
  }
}
```

## 多态
- 所谓多态就是当调用同一个方法时，由于传入的参数类型不同而导致执行效果各异的现象。
- 多态：父类引用指向子类对象，父类对象调用子类方法，子类对象调用子类方法

```c#
namespace Program08{
  class Animal{
    public virtual void Shout(){
      Console.WriteLine("动物叫......");
    }
  }
  class Cat : Animal{
    public override void Shout(){
      Console.WriteLine("喵喵......");
    }
  }
}
class Dog : Animal{
    public override void Shout(){
    Console.WriteLine("汪汪......");
  }
}
class Program{
  static void Main(string[] args){
    Animal an1 = new Cat(); //创建Cat对象，使用Animal类型的变量an1引用
    Animal an2 = new Dog(); //创建Dog对象，使用Animal类型的变量an2引用
    animalShout(an1);  //调用animalShout()方法，将an1作为参数传入
    animalShout(an2);  //调用animalShout()方法，将an2作为参数传入
    Console.ReadKey();
  }
  public static void animalShout(Animal an){//接收一个Animal类型的参数
    //分别调用animalShout()方法，传入an1和an2对象，输出：喵喵...... 汪汪......
    an.Shout();    //调用实际参数的shout()方法
  }
}
```

## base 关键字
- base 引用父类对象
- base.成员变量：访问父类的成员变量
- base.方法：调用父类的方法
```c#
useing System;
namespace Program09{
  class Animal{
    public string name = "动物类";
    public virtual void Shout(){//virtual修饰符，表示该方法可以被子类继承并重写
      Console.WriteLine("动物的叫声");
    }
  }
  class Dog : Animal{
    public override void Shout(){  //override重写父类的shout()方法
      base.Shout();                 //访问父类的成员方法
    }
    public void PrintName(){    //定义打印name的方法
      Console.WriteLine("name=" + base.name); //访问父类的成员变量
    }
  }
}

```
- base():调用父类默认的构造方法；继承关系中，在创建子类的对象时，父类的构造方法是默认执行的。
- : base():调用顺序是**先父类构造方法，再执行子类的构造方法**。
```c#
useing System;
namespace Program10{
  class Animal{
    //父类默认构造方法
    public Animal(){
      Console.WriteLine("默认构造方法");
    }
    //重载父类的构造方法
    public Animal(string action){ //定义Animal类的有参构造方法
      Console.WriteLine("Animal类的有参构造方法被" + action);
    }
  }
  class Dog : Animal{
    public Dog(string action) : base(action){ //定义Dog类的有参构造方法,直接调用父类的有参构造方法
      Console.WriteLine("Dog类的有参构造方法被" + action);
    }
  }
  class Program{
    static void Main(string[] args){
      Dog dog = new Dog("执行"); //实例化子类
      Console.ReadKey();
    }
  }
}
```

### 里氏转换原则
- 父类引用指向子类对象，父类对象调用子类方法，子类对象调用子类方法
```c#
//Cat类与Dog类都是Animal类的子类，在实例化对象时可以将子类对象赋值给父类变量。
Animal an1 = new Cat(); //将Cat类的对象赋值给Animal类的变量
Animal an2 = new Dog(); //将Dog类的对象赋值给Animal类的变量
```
- 但是将父类对象赋值给子类变量时需要进行**强制类型转换**。
```c#
namespace Program12{
  class Animal{
    public void Shout(){
      Console.WriteLine("Animal类中Shout()方法被调用");
    }
  }
  class Dog : Animal{
    public void Run(){
      Console.WriteLine("Dog类中的Run()方法被调用");
    }
  }
  class Program{
      static void Main(string[] args){
        Animal animal = new Dog(); //子类Dog指向父类Animal
        animal.Shout();
        Dog dog = (Dog)animal;     //父类对象animal强制转换为子类类型
        dog.Run();
        Console.ReadKey();
    }
  }
}
```

### object类
- 在C#中提供了一个Object类，它是所有类的父类，也就是每个类都直接或间接继承自该类。

# 抽象类和接口
- 由abstract关键字修饰的类为抽象类，抽象类中的方法不用写方法体，抽象类中可以有抽象方法，也可以有不是抽象的方法。然而接口必须使用interface关键字来声明，接口中的方法都为抽象方法，抽象方法与接口是面向对象中必须要学习的内容。

## 抽象类
- C#允许在定义方法时不写方法体，不包含方法体的方法为抽象方法，抽象方法必须使用abstract关键字来修饰。
- 当一个类中包含了抽象方法，该类也必须使用**abstract**关键字来修饰，使用abstract关键字修饰的类为抽象类。
```c#
//定义抽象类Animal，使用abstract关键字修饰
abstract class Animal {
  abstract void Shout();//定义抽象方法Shout()
}

```

- 定义抽象类：**abstract**关键字
- 抽象类是不可以被实例化的，因为抽象类中有可能包含抽象方法，抽象方法是没有方法体的，不可以被调用。如果想调用抽象类中定义的方法，则需要创建一个子类，在子类中实现抽象类中的抽象方法。
```c#
namespace Program16{
  abstract class Animal{
    public abstract void Shout(); //定义抽象方法Shout()
  }
  //子类Dog通过override关键字实现了父类Animal中的抽象方法后，可以进行正常的实例化，并通过实例化对象调用子类中重写的Shout()方法。
  class Dog : Animal{
    //实现抽象方法Shout()
    public override void Shout(){
      Console.WriteLine("汪汪......");
    }
  }
  class Program{
    static void Main(string[] args){
      Dog dog = new Dog(); //创建Dog类的实例对象
      dog.Shout();
      Console.ReadKey();
    }
  }
}
```

## 接口

- 如果一个抽象类中额所有方法都是抽象方法，那么这个抽象类就可以被定义为接口；在定义接口时，需要使用interface关键字来声明。
```c#
interface Animal{
  void Breathe(); //定义抽象方法
  void Run();      //定义抽象方法
}
```
- 由于接口中的方法都是抽象方法，因此不能通过实例化对象的方式来调用接口中的方法。此时需要定义一个类来实现接口中的所有方法。
```c#
namespace Program17{
  interface Animal{
    void Breathe();
    void Run();
  }
  class Dog : Animal{
    //实现Breathe()方法
    public void Breathe(){
      Console.WriteLine("狗在呼吸");
    }
    //实现Run()方法
    public void Run(){
      Console.WriteLine("狗在跑");
    }
  }
  class Program{
    static void Main(string[] args){
      Dog dog = new Dog(); //创建Dog类的实例对象
      dog.Breathe();        //调用Dog类的Breathe()方法
      dog.Run();             //调用Dog类的Run()方法
      Console.ReadKey();
    }
  }
}
```
- 一个接口可以继承多个接口，接口之间用**逗号隔开**，具体示例如下:
```c#
interface Running {
　　//程序代码．．．．．．
}
interface Flying {
　　//程序代码．．．．．．
}
Interface  Eating :Running, Flying {
　　//程序代码．．．．．．
}
```

- 一个类可以实现多个接口，被实现的多个接口之间要用**逗号隔开**，具体示例如下：
```c#
interface Run {
　　//程序代码．．．．．．
}
interface Fly {
　　//程序代码．．．．．．
}
class Bird :Run, Fly {
　　//程序代码．．．．．．
}
```

# 异常
- Message:异常信息，此属性含有解释异常原因的消息
- StackTrace:异常堆栈信息，此属性含有描述异常发生在位置信息
- InnerException:异常内部异常，如果当前异常是由另一个异常引起的，此属性包含前一个异常的引用
- HelpLink:异常帮助链接，此属性为异常原因信息提供URN或者URL
- Source:异常源，此属性含有异常起源所在的程序集的名称

## try catch和finally
- 如果程序发生了异常并立即终止，无法继续向下执行。为了解决这样的问题，C#程序中提供了一种对异常进行处理的方式——异常捕获。异常捕获通常使用try…catch语句。
- try catch finally：try catch finally语句用于处理异常

## throw
- throw：throw语句用于抛出异常
- finally：finally语句用于处理异常
```c#
namespace Program22{
  class Program{
    static void Main(string[] args){
      //创建一个异常对象并抛出
      throw new Exception("这是一个异常");
    }
  }
}
```

## 命名空间
- C#中引入了命名空间的概念，可以将命名空间理解为程序定义的一个目录，使用命名空间可以有效避免类名冲突的问题。
```c#
//namespace表示命名空间的关键字，Example表示命名空间的名称
namespace Example{
  class Animal{
    void Shout(){
      Console.WriteLine("动物的叫声");
    }
  }
}
```
- 在实例化对象、调用方法、属性时都要使用“命名空间名.成员”的方式
```c#
static void Main(string[] args){
  Example.Animal animal= new Example.Animal();
  Console.ReadKey();
}
```

### 引入命名空间
- 引入命名空间：using
```c#
using System;//System表示系统命名空间
using System.Collections.Generic;//引入命名空间
using System.Linq;//引入命名空间
using System.Text;//引入命名空间
using Example;   //引用命名空间
namespace Test{ 
  class Test{ 
    static void Main(string[] args){
      Animal = new Animal();
      Console.ReadKey();
    }
  }
}
```
## 程序集
- 所谓的程序集就是包含一个或多个类型的定义文件和资源文件的集合，该程序集中的文件可以被其他程序使用。
- 程序集文件可分为四个部分，分别是**程序集清单**、**元数据**、**CIL**、**资源集**。
  - 程序集清单：包含描述该程序集中各元素彼此如何关联的数据集合，还包含指定该程序集的版本信息、安全标识所需的元数据、定义该程序集的范围以及解析对资源和类应用所需的元数据。
  - 元数据：提供有关程序集中定义的类型信息，包括类型的名称、基类和类型所实现的接口等。
  - CIL：程序类型中所有的中间代码。CIL（Common Intermediate Language）是Microsoft .NET Framework定义的通用中间语言，CIL代码可以运行在任何兼容.NET Framework的计算机上。
  - 资源集：程序集可以包含资源，如图像、指针、图标、文本文件、音频文件、视频文件等等。