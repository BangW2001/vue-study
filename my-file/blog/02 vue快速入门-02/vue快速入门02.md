---

---

# Vue入门02

## 指令补充

### 指令修饰符

通过`"."`指明一些指令后缀，不同后缀封装了不同的处理操作，便于简化代码

#### 按键修饰符

`@keyup.enter`：键盘回车监听

语法：`@keyup.enter=事件处理函数`

- `@keyup`是任何按键时都会触发事件

#### v-model修饰符

`v-model.trim`：去除首尾空格

`v-model.number`：转数字

语法：与`v-model`语法一致，后面接双向绑定的vue数据

#### 时间修饰符

`@事件名.stop`：阻止冒泡

`@事件名.prevent`：阻止默认行为



## v-bind对于样式控制的增强

为便于开发者进行样式控制，Vue扩展了`v-bind`语法，可以针对`class类名`和`style行内样式`进行控制

### v-bind操作class

语法：`:class="对象/数组"`

- 对象，键就是类名，值是布尔值，如果值为`true`，则有这个类，否则没有

```html
<!-- 例如 -->
<div class="box" :class="{类名1:布尔值,类名2:布尔值,...}"></div>
```

- 数组，数组中所有的类都会添加到盒子上，本质就是一个`class列表`

```html
<div class="box" :class="[类名1,类名2,类名3,...]"></div>
```

这样通过给标签设置不同的类名，便于其根据情况切换不同的样式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            margin: 10px auto;
            width: 300px;
            height: 300px;
            border: 1px solid;
        }
        .pink{
            background-color: pink;
        }
        .big{
            width: 600px;
            height: 600px;
        }
    </style>
</head>
<body>
    <div id="app">
        <div class="box" :class="{pink:true,big:true}">样式切换</div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el:"#app",
            data:{

            }
        })
    </script>
</body>
</html>
```

实际应用场景：

网页tab页面高亮，比如不同的栏目模块

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>导航栏示例</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .navbar {
            display: flex;
            background-color: #f8f8f8;
            border-bottom: 1px solid #ddd;
        }

        .navbar-item {
            padding: 10px 20px;
            cursor: pointer;
            text-align: center;
        }

        .navbar-item.active {
            background-color: #e2231a;
            color: white;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div id="app">
        <div class="navbar">
            <div class="navbar-item" v-for="item in tabList" :class="{active:item.isActive}"
            @click="add(item.id)">{{item.name}}</div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el:"#app",
            data:{
                tabList:[{"id":1,"name":"京东秒杀","isActive":false}
                    ,{"id":2,"name":"每日特价","isActive":false}
                    ,{"id":3,"name":"品类秒杀","isActive":false}
                ]
            },
            methods:{
                add(id){
                    this.tabList.forEach(item => {
                        item.isActive = item.id==id
                    });
                }
            }
        })
    </script>

</body>

</html>
```

![](./vue快速入门02/tab-change.gif)



### v-bind操作style

语法：`:style="样式对象"`

```html
<!--示例-->
<div class="box" :style="{ccs属性名1：css属性值,css属性名2：css属性值}"></div>
```

```html
<body>
    <div id="app">
        <p :style='{color:"red",width:"100px",height:"30px",border:"1px solid"}'>style样式</p>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el:"#app",
            data:{

            }
        })
    </script>
</body>
```

### v-model应用于其他表单元素

所有常见的表单元素均可以用`v-model`绑定关联，进行双向绑定，能够快速获取或者设定表单元素的值

`v-model`能够根据控件类型，自动选取正确的方法来更新元素

```html
<body>
    <div id="app">
        <input type="text" placeholder="用户名" v-model="inputText"/>
        <br/>
        <textarea placeholder="长文本" v-model="textArea"></textarea>
        <br/>
        <label>篮球</label><input type="checkbox" value="篮球" name="hobby" v-model="hobby"/>
        <label>足球</label><input type="checkbox" value="足球" name="hobby"v-model="hobby"/>
        <label>乒乓球</label><input type="checkbox" value="乒乓球" name="hobby" v-model="hobby"/>
        <br/>
        <label>男</label><input type="radio" value="男" name="gender" v-model="gender"/>
        <label>女</label><input type="radio" value="女" name="gender" v-model="gender"/>
        <br/>
        <select v-model="nation">
            <option value="中国">中国</option>
            <option value="韩国">韩国</option>
            <option value="日本">日本</option>
        </select>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el:"#app",
            data:{
                inputText:"啦啦啦啦啦",
                textArea:"好好看看啦啦啦",
                hobby:["篮球","乒乓球"],
                gender:"女",
                nation:"日本"
            }
        })
    </script>
</body>
```



## computed属性

计算属性：基于现有的数据，计算出来的新属性，依赖的数据发生变化，会自动重新计算

语法：

- 声明在`computed`配置项中，一个计算属性对应一个函数
- 使用起来和普通属性一样使用`{{计算属性名}}`

```html
computed:{
	计算属性名(){
		基于现有数据，编写求值逻辑
		return 结果
	}
}
```

```html
<body>
    <div id="app">
        <h1>礼物清单</h1>
        <table>
            <tr v-for="item in goods" :key="item.id">
                <td>{{item.name}}</td>
                <td>{{item.num}}个</td>
            </tr>
        </table>
        <div class="count">礼物总数:{{allCount}}</div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script>
        const app = new Vue({
            el: "#app",
            data: {
                goods: [{ id: 1, name: "篮球", num: 1 }
                    , { id: 2, name: "玩具", num: 2 }
                    , { id: 3, name: "足球", num: 6 }
                ]
            },
            computed: {
                allCount(){
                    return this.goods.reduce((sum,item)=>
                        sum+item.num,0)
                }
            }
        })
    </script>
</body>
```









## watch监听器







## 综合案例：购物车



