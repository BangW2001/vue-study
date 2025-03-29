---

---

# Vue快速入门

[vue](https://cn.vuejs.org/)是一个用于构建用户界面的渐进式`JavaScript`框架

## vue快速上手

#### 创建Vue实例并初始化渲染

1. 准备容器，即Vue所管理的元素范围
2. 引包，可以从官方文档找到引用的链接地址（开发版本/生产版本）
3. 创建实例
4. 添加配置，完成渲染

```html
<body>
    <!--准备容器-->
    <div id="app">
        <!--这里会编写用于渲染的代码逻辑-->
        {{message}}
    </div>
    <!--导包-->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.7.16/dist/vue.js"></script>
    <script>
        //实例化对象
        let app = new Vue({
            el:"#app",//通过el配置选择器，指定挂载点，即Vue管理的元素范围
            data:{ //data提供渲染的数据
                message:"hello world!!!"
            }
        })
    </script>
</body>
```



### 插值表达式

插值表达式`{{表达式}}`是一种`Vue`的模板语法，利用表达式进行插值，可以把对应的数据渲染到页面，这里面的表达式可以是被求值的代码，`JS`引擎会将其进行算法得出结果

使用插值表达式应注意的点：

- 使用的数据必须存在，在`vue`对象的`data`中能够找的到
- 只支持表达式，而非语句，比如`if`、`for`等不支持
- 不能在标签的属性中使用插值表达式，一般是用于标签的文本位置用于展示

```html
<body>
    <div id="app">
        <p>{{userName}}</p>
        <p>{{userName.toUpperCase()}}</p>
        <p>{{age>=18?"成年":"未成年"}}</p>
        <p>{{student.name}}</p>
        <p>{{student.age}}</p>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el:"#app",
            data:{
                userName:"bob",
                age:18,
                student:{
                    name:"李白",
                    age:27
                }
            }
        })
    </script>
</body>
```



































## vue指令



## 综合案例--记事本

