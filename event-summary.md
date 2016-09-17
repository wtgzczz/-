
### 事件冒泡
    
IE的事件叫事件冒泡，由最具体的元素接收，逐级向上传播到最不具体的元素。现代浏览器都支持。假设点击<div>元素

    1.<div>
    2.<body>
    3.<html>
    4.document
    
所有现代浏览器都支持事件冒泡
    
### 事件捕获

netscape提出的事件捕获,由最不具体的元素document,逐级向下传播到最具体的节点。ie9以下不支持

    1.document
    2.<html>
    3.<body>
    4.<div>
    
### dom事件流

* dom事件流有3个阶段：事件捕获阶段、处于目标阶段、事件冒泡阶段。
    
### 事件处理程序

* html事件处理程序（嵌入html）缺点：没有做到结构与行为分离
* DOM0级事件处理程序（如onclick）this指向当前dom元素 
* 缺点：只能绑定一次处理程序，及旧绑定的会被新绑定的代替
* DOM2级事件处理程序（addEventListener）可绑定多个事件，按照绑定的事件顺序依次触发
* 缺点：不支持ie8，只能通过removeListener来取消绑定
* IE事件处理程序（attachEvent） 会被添加到冒泡阶段，按照绑定的事件的相反顺序依次触发  回调函数中的this指向window,而不是所属元素的作用域
* 缺点：只支持ie和opera，只能通过detachEvent来取消绑定

### 事件对象event
* event.type 事件的类型名称 如：click,mousedown,mouseover 
* event.target event.srcElement 事件的实际目标
* event.currentTarget 事件处理程序注册的元素，this与该值相等
* event.preventDefault() event.returnValue = true 取消事件的默认行为
* event.stopPropagation() event.cancelBubble 取消事件的冒泡或捕获，从而避免事件继续传播

### 事件分类
* ui类 load resize scroll
* 焦点类 blur focus
* 鼠标类 click dbclick mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup mousewheel
* 键盘类 keydown keyup keypress

### 事件委托（代理）

为什么要用事件委托

* 每个函数都是对象，都会占用内存；内存中的对象越多，性能就越差。
* 每增加一个事件监听，载入页面时都会增加一次对被监听节点的访问，要便遍历这个节点的所有属性(从原型继承)，从而导致的DOM访问次数增加，会延迟整个页面的就绪时间。

优点

* document对象很快就可以访问，而且可以在页面生命周期的任何时间点上为它添加事件处理程序(无需等待DOMContentLoaded或load事件)。换句话说，只要可单击的元素呈现在页面上，就可以立即具备适当的功能。
* 在页面中设置事件处理程序所需的时间更少。只添加一个事件处理程序所需的Dom引用更少，所花的时间也更少。如果之后再动态添加了dom节点，由于不是绑定在这个节点上的，也就不会访问这个节点
* 整个页面占用的内存空间更少，能够提升整体性能。
    