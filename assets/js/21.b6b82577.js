(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{455:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("我们在谈 React 生命周期时，主要谈的是 "),s("strong",[t._v("类式组件的生命周期")]),t._v("，因为函数式组件是没有生命周期函数的。(我们可以通过 hooks 来模拟一些生命周期的回调)")]),t._v(" "),s("p",[t._v("React 生命周期在各个阶段的执行顺序是有所差异的，接下来我们将解析 React 在各个阶段生命周期的执行顺序，以及各个生命周期在组件中充当的作用。(以下生命周期指的是 React 16.4 之后的版本)")]),t._v(" "),s("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/26f6f2f2be6d43f88f22dc4d58ddc943~tplv-k3u1fbpfcp-watermark.image?",width:"700px"}}),t._v(" "),s("p",[t._v("React 生命周期图："),s("a",{attrs:{href:"https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 生命周期图"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"组件挂载时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件挂载时"}},[t._v("#")]),t._v(" 组件挂载时")]),t._v(" "),s("p",[t._v("当组件实例被创建并插入 "),s("code",[t._v("DOM")]),t._v(" 中时，其生命周期调用顺序如下：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("constructor()")])])]),t._v(" "),s("li",[s("p",[t._v("static getDerivedStateFromProps()")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("render()")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("componentDidMount()")])])])]),t._v(" "),s("h3",{attrs:{id:"constructor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" constructor()")]),t._v(" "),s("p",[t._v("如果不初始化 "),s("code",[t._v("state")]),t._v(" 或不进行方法绑定，则不需要为 class 组件实现构造函数。在 React 中，通常构造函数仅用于以下两种情况：")]),t._v(" "),s("blockquote",[s("ol",[s("li",[s("p",[t._v("通过给  "),s("code",[t._v("this.state")]),t._v("  赋值对象来初始化内部 "),s("code",[t._v("state")]),t._v("。")])]),t._v(" "),s("li",[s("p",[t._v("为事件处理函数绑定实例。")])])])]),t._v(" "),s("p",[t._v("在 React 组件挂载之前，会调用它的构造函数。在为子类实现构造函数时，应在其他语句之前调用  "),s("code",[t._v("super(props)")]),t._v("。否则，"),s("code",[t._v("this.props")]),t._v("  在构造函数中可能会出现未定义的 bug。")]),t._v(" "),s("p",[t._v("在  "),s("code",[t._v("constructor()")]),t._v("  函数中不要调用  "),s("code",[t._v("setState()")]),t._v("  方法，如果你的组件需要使用内部 "),s("code",[t._v("state")]),t._v("，请直接在构造函数中为 "),s("code",[t._v("this.state")]),t._v("  赋值初始 "),s("code",[t._v("state")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"render"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#render"}},[t._v("#")]),t._v(" render()")]),t._v(" "),s("p",[s("code",[t._v("render()")]),t._v("  方法是 class 组件中唯一必须实现的方法。"),s("code",[t._v("render()")]),t._v("  函数应该为"),s("strong",[t._v("纯函数")]),t._v("，这意味着在不修改组件 "),s("code",[t._v("state")]),t._v(" 的情况下，每次调用时都返回相同的结果，并且它不会直接与浏览器交互。如需与浏览器进行交互，请在  "),s("code",[t._v("componentDidMount()")]),t._v("  或其他生命周期方法中执行操作。")]),t._v(" "),s("h3",{attrs:{id:"componentdidmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentdidmount"}},[t._v("#")]),t._v(" componentDidMount()")]),t._v(" "),s("p",[s("code",[t._v("componentDidMount()")]),t._v("  会在组件挂载后（插入 DOM 树中）立即调用。依赖于 "),s("code",[t._v("DOM")]),t._v(" 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。")]),t._v(" "),s("p",[t._v("你可以在  "),s("code",[t._v("componentDidMount()")]),t._v("  中直接调用 "),s("code",[t._v("setState()")]),t._v("  方法。")]),t._v(" "),s("h3",{attrs:{id:"hooks-模拟-componentdidmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hooks-模拟-componentdidmount"}},[t._v("#")]),t._v(" hooks 模拟 componentDidMount()")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mounted"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("当 "),s("code",[t._v("useEffect")]),t._v(" 的第二个参数是一个空数组时，回调只会被触发一次，类似于 "),s("code",[t._v("componentDidMount()")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"组件更新时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件更新时"}},[t._v("#")]),t._v(" 组件更新时")]),t._v(" "),s("p",[t._v("当组件的 "),s("code",[t._v("props")]),t._v(" 或 "),s("code",[t._v("state")]),t._v(" 发生变化时会触发更新。组件更新的生命周期调用顺序如下：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("static getDerivedStateFromProps()")])]),t._v(" "),s("li",[s("p",[t._v("shouldComponentUpdate()")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("render()")])])]),t._v(" "),s("li",[s("p",[t._v("getSnapshotBeforeUpdate()")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("componentDidUpdate()")])])])]),t._v(" "),s("h3",{attrs:{id:"componentdidupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentdidupdate"}},[t._v("#")]),t._v(" componentDidUpdate()")]),t._v(" "),s("p",[s("code",[t._v("componentDidUpdate()")]),t._v("  会在更新后会被立即调用。首次渲染不会执行此方法。")]),t._v(" "),s("p",[t._v("当组件更新后，可以在此处对 "),s("code",[t._v("DOM")]),t._v(" 进行操作。如果你对更新前后的 "),s("code",[t._v("props")]),t._v(" 进行了比较，也可以选择在此处进行网络请求。（当 "),s("code",[t._v("props")]),t._v(" 未发生变化时，则不会执行网络请求）。")]),t._v(" "),s("p",[t._v("你也可以在  "),s("code",[t._v("componentDidUpdate()")]),t._v("  中直接调用  "),s("code",[t._v("setState()")]),t._v(" 方法，但需注意 "),s("strong",[t._v("它必须被包裹在一个条件语句里")]),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"hooks-模拟-componentdidupdate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hooks-模拟-componentdidupdate"}},[t._v("#")]),t._v(" hooks 模拟 componentDidUpdate()")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mounted "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("mounted"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mounted"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I am didUpdate"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("useRef")]),t._v(" 在组件中创建实例。它作为一个标志来指示组件是否处于挂载或更新阶段。当组件更新完成后在会执行 "),s("code",[t._v("else")]),t._v(" 里面的内容，以此来模拟  "),s("code",[t._v("componentDidUpdate()")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"组件卸载时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件卸载时"}},[t._v("#")]),t._v(" 组件卸载时")]),t._v(" "),s("p",[t._v("当组件从 "),s("code",[t._v("DOM")]),t._v(" 中移除时会调用方法："),s("strong",[t._v("componentWillUnmount()")])]),t._v(" "),s("h3",{attrs:{id:"componentwillunmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentwillunmount"}},[t._v("#")]),t._v(" componentWillUnmount()")]),t._v(" "),s("p",[s("code",[t._v("componentWillUnmount()")]),t._v("  会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如清除定时器，取消网络请求或者清除在  "),s("code",[t._v("componentDidMount()")]),t._v("  中创建的订阅等。")]),t._v(" "),s("p",[s("code",[t._v("componentWillUnmount()")]),t._v("  中不应调用  "),s("code",[t._v("setState()")]),t._v("，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。")]),t._v(" "),s("h3",{attrs:{id:"hooks-模拟-componentwillunmount"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hooks-模拟-componentwillunmount"}},[t._v("#")]),t._v(" hooks 模拟 componentWillUnmount()")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useEffect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"will unmount"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("当在 "),s("code",[t._v("useEffect")]),t._v(" 的回调函数中返回一个函数时，这个函数会在组件卸载前被调用。我们可以在这里面清除定时器或事件监听器。")]),t._v(" "),s("h2",{attrs:{id:"错误处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[t._v("#")]),t._v(" 错误处理")]),t._v(" "),s("p",[t._v("在渲染过程中，生命周期或子组件的构造函数中抛出错误时，会调用如下方法：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("static getDerivedStateFromError()")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("componentDidCatch()")])])])]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/react-component.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://zh-hans.reactjs.org/docs/react-component.html"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);