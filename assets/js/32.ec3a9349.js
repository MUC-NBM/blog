(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{463:function(v,_,t){"use strict";t.r(_);var o=t(2),s=Object(o.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"从输入-url-到页面展示-这中间发生了什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#从输入-url-到页面展示-这中间发生了什么"}},[v._v("#")]),v._v(" 从输入 URL 到页面展示，这中间发生了什么？")]),v._v(" "),_("ol",[_("li",[v._v("用户输入")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("如果输入的是内容，地址栏会使用浏览器默认的搜索引擎，来合成新的带搜索关键字的 URL。")])]),v._v(" "),_("li",[_("p",[v._v("如果输入的是 URL，那么地址栏会根据规则，把这段内容加上"),_("strong",[v._v("协议")]),v._v("，合成为完整的 URL。")])])]),v._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[v._v("URL 请求过程")])]),v._v(" "),_("p",[v._v("浏览器进程会通过进程间通信（IPC）把 URL 请求发送至网络进程，网络进程接收到 URL 请求后，会在这里发起真正的 URL 请求流程。那具体流程是怎样的呢？")]),v._v(" "),_("blockquote",[_("p",[v._v("网络进程会查找本地缓存是否缓存了该资源。如果有缓存资源，那么直接返回资源给浏览器进程；如果在缓存中没有查找到资源，那么直接进入网络请求流程。这请求前的第一步是要进行 DNS 解析，以获取请求域名的服务器 IP 地址。如果请求协议是 HTTPS，那么还需要建立 TLS 连接。")]),v._v(" "),_("p",[v._v("接下来就是利用 IP 地址和服务器建立 TCP 连接。连接建立之后，浏览器端会构建请求行、请求头等信息，并把和该域名相关的 Cookie 等数据附加到请求头中，然后向服务器发送构建的请求信息。")]),v._v(" "),_("p",[v._v("服务器接收到请求信息后，会根据请求信息生成响应数据（包括响应行、响应头和响应体等信息），并发给网络进程。等网络进程接收了响应行和响应头之后，就开始解析响应头的内容了。")])]),v._v(" "),_("p",[_("code",[v._v("Content-Type")]),v._v(" 是 HTTP 头中一个非常重要的字段， 它告诉浏览器服务器返回的响应体数据是什么类型，然后浏览器会根据 "),_("code",[v._v("Content-Type")]),v._v(" 的值来决定如何显示响应体的内容。")]),v._v(" "),_("p",[v._v("如果 "),_("code",[v._v("Content-Type")]),v._v(" 字段的值被浏览器判断为下载类型，那么该请求会被提交给浏览器的下载管理器，同时该 URL 请求的导航流程就此结束。但如果是 HTML，那么浏览器则会继续进行导航流程。")]),v._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[v._v("准备渲染进程")])]),v._v(" "),_("p",[v._v("如果"),_("strong",[v._v("协议")]),v._v("和"),_("strong",[v._v("根域名")]),v._v("相同，则属于同一站点。")]),v._v(" "),_("p",[v._v("Chrome 的默认策略是，每个标签对应一个渲染进程。官方把这个默认策略叫 process-per-site-instance。但如果从一个页面打开了另一个新页面，而新页面和当前页面属于同一站点的话，那么新页面会"),_("strong",[v._v("复用")]),v._v("父页面的渲染进程。")]),v._v(" "),_("p",[v._v("渲染进程准备好之后，还不能立即进入文档解析状态，因为此时的文档数据还在网络进程中，并没有提交给渲染进程，所以下一步就进入了提交文档阶段。")]),v._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[v._v("提交文档")])]),v._v(" "),_("p",[v._v("所谓提交文档，就是指"),_("strong",[v._v("浏览器进程")]),v._v("将"),_("strong",[v._v("网络进程")]),v._v("接收到的 HTML 数据提交给"),_("strong",[v._v("渲染进程")]),v._v("，具体流程是这样的：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("首先当浏览器进程接收到网络进程的响应头数据之后，便向渲染进程发起“提交文档”的消息。")])]),v._v(" "),_("li",[_("p",[v._v("渲染进程接收到“提交文档”的消息后，会和网络进程建立传输数据的“管道”。")])]),v._v(" "),_("li",[_("p",[v._v("等文档数据传输完成之后，渲染进程会返回“确认提交”的消息给浏览器进程。")])]),v._v(" "),_("li",[_("p",[v._v("浏览器进程在收到“确认提交”的消息后，会更新浏览器界面状态，包括了安全状态、地址栏的 URL、前进后退的历史状态，并更新 Web 页面。")])])]),v._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[v._v("渲染阶段")])]),v._v(" "),_("p",[v._v("一旦文档被提交，渲染进程便开始页面解析和子资源加载。")])])}),[],!1,null,null,null);_.default=s.exports}}]);