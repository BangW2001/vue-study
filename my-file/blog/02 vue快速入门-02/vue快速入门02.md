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
### v-bind对于样式控制的增强

为便于开发者进行样式控制，Vue扩展了`v-bind`语法，可以针对`class类名`和`style行内样式`进行控制

#### v-bind操作class
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
#### v-bind操作style
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

### 计算属性介绍

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

### computed计算属性 vs methods方法

#### computed计算属性

功能：封装了一段对于数据的处理，求得一个结果

语法：

- 写在`computed`配置项中
- 作为属性，直接使用`this.计算属性`或者`{{计算属性}}`

缓存特性：

- 能够一定程度上提升性能，计算属性会对计算出来的结果进行缓存，再次使用时直接读取缓存，如果依赖项发生了变化，会自动计算新的结果并再次缓存

#### methods方法

功能：封装了处理业务逻辑，给实例提供一个方法

语法：

- 写在`methods`配置项中
- 作为方法，需要调用`this.方法名()`或者`@事件名=方法名`

### 计算属性完整写法

上述是计算属性的简写，这种情况下只能访问，不能修改属性，如果要修改属性，则需要写计算属性的完整写法

**计算属性的完整写法**

```html
computed:{
	计算属性名:{
		get(){
			代码逻辑（数据计算逻辑）
			return 结果
		},
		set(){
			代码逻辑（数据修改逻辑）
		}
	}
}
```

**实例**

```html
<body>
  <div id="app">
    <div class="box">
      <label>姓:</label><input type="text" v-model="firstName" />
      <label>名:</label><input type="text" v-model=lastName />
      <span>={{name}}</span>
    </div>
    <input type="text" placeholder="输入新的名字" v-model="inputName" />
    <button @click="alertName">改名</button>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script>
    const app = new Vue({
      el: "#app",
      data: {
        firstName: "李",
        lastName: "白",
        inputName: ""
      },
      methods: {
        alertName() {
          this.name = this.inputName
        }
      },
      computed: {
        name: {
          get() {
            return this.firstName + this.lastName
          },
          //修改赋值时，value极为传入的新赋予的值
          set(value) {
            this.firstName = value.substring(0, 1)
            this.lastName = value.substring(1, value.length)
          }
        }
      }
    })
  </script>
</body>
```

## watch监听器

### 概述

功能：监视一些数据变化，执行相应的业务逻辑或者异步操作

应用场景分析：在线翻译栏，左边用户输入内容，右边会实时显示翻译内容

语法：

- 简单写法：监听简单类型数据

- 完整写法：需要添加额外的配置

### 简单写法

**语法**

```html
<!--示例-->
data:{
	words:"苹果",
	obj:{
		words:"苹果"
	}
}
<!--监视器-->
watch:{
	//数据变化时会触发对应的操作
	//newValue为新值，oldValue为老值
	数据属性名(newValue,oldValue){
		对应数据变化的业务逻辑或者异步操作
	},
	'对象.属性名'(newValue,oldValue){
		对应数据变化的业务逻辑或者一部操作
	}
}
```

**实例**

```html
<body>
  <div id="app">
    <div>
      <label>输入内容</label><br />
      <textarea v-model="words"></textarea>
    </div>
    <div>
      <label>翻译内容</label><br />
      <textarea v-model="translateWords"></textarea>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script>
    const app = new Vue({
      el: "#app",
      data: {
        words: "",
        translateWords: ""
      },
      watch: {
        words(newValue, oldValue) {
          this.translateWords = newValue.toUpperCase()
        }
      }

    })
  </script>
</body>
```

如何是调用后端API接口进行相关的操作，这时候要注意性能的影响，采取**防抖**，来避免频繁触发调用

### 完整写法

完整写法需要额外配置项

- deep:true，对复杂数据类型深度监视 ，
- immediate:true，初始化立刻执行一次handler方法

应用场景分析：仍然是文本翻译场景，但是，不仅用户输入内容，实时显示当前文本翻译结果，当用户切换语言类型时，也需要翻译当前文本内容，这时就需要同时监听一个对象的多个属性

**语法**

```html
data:{
	obj:{
		words:"苹果",
		lang:"En"
	}
},
watch:{
	数据属性名:{
		deep:true,
		handler(newValue){

		}
	}
}
```

**实例**

```html
<body>
  <div id="app">
    <div>
      <select v-model="transObj.lang">
        <option value="大写">大写</option>
        <option value="小写">小写</option>
      </select>
    </div>
    <div>
      <label>输入内容</label><br />
      <textarea v-model="transObj.words"></textarea>
    </div>
    <div>
      <label>翻译内容</label><br />
      <textarea v-model="translateWords"></textarea>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script>
    const app = new Vue({
      el: "#app",
      data: {
        transObj: {
          words: "",
          lang: ""
        },
        translateWords: ""
      },
      watch: {
        transObj: {
          deep: true,
          handler(newValue) {
            if (newValue.lang == "大写") {
              this.translateWords = newValue.words.toUpperCase()
            } else if (newValue.lang == "小写") {
              this.translateWords = newValue.words.toLowerCase()
            }
          }
        }
      }

    })
  </script>
</body>
```
## 综合案例：购物车

实现下图中的购物车功能

<img src="C:\Users\19854\AppData\Roaming\Typora\typora-user-images\image-20250403164138551.png" alt="image-20250403164138551" style="zoom:50%;" />

功能分析：

- 页面列表渲染：`v-for`
- 删除功能
- 修改个数
- 全选反选
- 统计选中商品的数目和总价：`computed`属性
- 持久化到本地：`localStorage`

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>购物车</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }

    .header {
      background-color: #fff;
      padding: 20px;
      text-align: center;
    }

    .header img {
      width: 100px;
      border-radius: 50%;
    }

    .header h1 {
      margin: 0;
      font-size: 24px;
    }

    .cart {
      background-color: #fff;
      margin: 20px;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th,
    td {
      padding: 10px;
      text-align: center;
      border-bottom: 1px solid #ddd;
    }

    th {
      background-color: #f2f2f2;
    }

    .total {
      text-align: right;
      margin-top: 20px;
    }

    .total span {
      font-size: 24px;
      color: red;
    }

    .button {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    .button:hover {
      background-color: #0056b3;
    }

    .delete {
      background-color: #dc3545;
    }

    .delete:hover {
      background-color: #c82333;
    }

    .footer {
      display: flex;
      justify-content: space-around;
    }
  </style>
</head>

<body>

  <div id="app">
    <div class="header">
      <img src="https://via.placeholder.com/100" alt="Logo">
      <h1>水果</h1>
    </div>

    <div class="cart">
      <h2>购物车</h2>
      <table>
        <thead>
          <tr v-if="goods.length>0">
            <th>选中</th>
            <th>图片</th>
            <th>单价</th>
            <th>个数</th>
            <th>小计</th>
            <th>操作</th>
          </tr>
          <tr v-else>
            <th>没有商品，购物车为空</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in goods" :key="item.id">
            <td><input type="checkbox" v-model="item.checked"></td>
            <td><img src="https://via.placeholder.com/50" :alt="item.name"></td>
            <td>{{item.price}}</td>
            <td>
              <button :disabled="item.num<0" @click="item.num=1">-</button>
              <span>{{item.num}}</span>
              <button @click="item.num+=1">+</button>
            </td>
            <td>{{item.price*item.num}}</td>
            <td><button class="delete" @click="del(item.id)">删除</button></td>
          </tr>
        </tbody>
      </table>
      <div class="total">
        总价：<span>¥{{totalPrice}}</span>
      </div>
      <div class="footer">
        <div><label>全选:</label><input type="checkbox" id="selectAll" v-model="isAll" /></div>
        <button class="button">结算{{totalNum}}</button>
      </div>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
  <script>
    const defaultArr = []
    const app = new Vue({
      el: "#app",
      data: {
        // goods: [{ id: 1, name: "火龙果", price: 6, num: 2, checked: false },
        // { id: 2, name: "草莓", price: 7, num: 1, checked: false }
        // ]
        //从本地存储读取，如果为空，则用默认值
        goods: JSON.parse(localStorage.getItem("goods")) || defaultArr
      }, computed: {
        totalPrice() {
          return this.goods.reduce((sum, item) => {
            if (item.checked) {
              return sum + item.price * item.num
            } else {
              return sum
            }
          }, 0)
        }, totalNum() {
          return this.goods.reduce((sum, item) => {
            if (item.checked) {
              return sum + item.num
            } else {
              return sum
            }
          }, 0)
        },
        isAll: {
          get() {
            for (let index = 0; index < this.goods.length; index++) {
              if (!this.goods[index].checked) {
                return false
              }
            }
            if (this.goods.length == 0) return false
            return true
          }, set(value) {
            this.goods.forEach(item => {
              item.checked = value
            })
          }
        }
      },
      methods: {
        del(id) {
          this.goods = this.goods.filter(item => item.id != id)
        }
      },
      //数据持久化，localstorage
      watch: {
        goods: {
          deep: true,
          handler(newValue) {
            localStorage.setItem("goods", JSON.stringify(newValue))
          }
        }
      }
    })
  </script>

</body>

</html>
```























