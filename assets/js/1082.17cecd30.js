(window.webpackJsonp=window.webpackJsonp||[]).push([[1082],{1486:function(t,e,n){"use strict";n.r(e);var a=n(2),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("Boxx"),t._v(" "),e("h3",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介：")]),t._v(" "),e("p",[t._v("Nine AI."),e("a",{attrs:{href:"https://www.xmzyw.cn/tag/ChatGPT",title:"View all posts in ChatGPT",target:"_blank",rel:"noopener noreferrer"}},[t._v("ChatGPT"),e("OutboundLink")],1),t._v("是基于ChatGPT开发的一个人工智能技术驱动的自然语言处理工具，它能够通过学习和理解人类的语言来进行对话，还能根据聊天的上下文进行互动，真正像人类一样来聊天交流，甚至能完成撰写邮件、视频脚本、文案、翻译、代码，写论文等任务。")]),t._v(" "),e("p",[t._v("必要环境")]),t._v(" "),e("p",[t._v("nodejs version > 16    pnpm version > 6    mysql version >= 5.7    redis")]),t._v(" "),e("p",[t._v("目录结构")]),t._v(" "),e("p",[t._v("chat 用户端代码")]),t._v(" "),e("p",[t._v("admin 管理端代码")]),t._v(" "),e("p",[t._v("service 服务端代码")]),t._v(" "),e("p",[t._v("本地开发")]),t._v(" "),e("p",[t._v("三端统一命令")]),t._v(" "),e("p",[t._v("pnpm install 安装依赖")]),t._v(" "),e("p",[t._v("pnpm dev 启动项目")]),t._v(" "),e("p",[t._v("pnpm build 打包项目")]),t._v(" "),e("p",[t._v("启动项目")]),t._v(" "),e("p",[t._v("分别安装依赖 pnpm i")]),t._v(" "),e("p",[t._v("首先启动服务端进入service 创建.env文件 在其中修改 测试数据库信息和redis 配置完成后 pnpm dev")]),t._v(" "),e("p",[t._v("数据库通过orm映射 启动项目会自动创建数据库")]),t._v(" "),e("p",[t._v("启动完成后可以打开chat admin pnpm dev启动")]),t._v(" "),e("p",[t._v("关于授权")]),t._v(" "),e("p",[t._v("授权模块在 src/modules/globalConfig/globalConfig.service.ts 文件下")]),t._v(" "),e("p",[t._v("对函数 "),e("a",{attrs:{href:"https://www.xmzyw.cn/tag/NineAi",title:"View all posts in NineAi",target:"_blank",rel:"noopener noreferrer"}},[t._v("NineAi"),e("OutboundLink")],1),t._v("CheckAuth 移除其中内容就并且移除onModuleInit的NineAiCheckAuth就可以移除授权")]),t._v(" "),e("p",[t._v("对应的 src/modules/task/task.service.ts中的定时任务也可以移除掉 checkauth 定时任务")]),t._v(" "),e("p",[t._v("打包路径问题")]),t._v(" "),e("p",[t._v("service")]),t._v(" "),e("p",[t._v("后端服务直接 pnpm build 即可 .env为环境变量文件 需要后续自己挂载或者创建 项目有 示例文件.env.example")]),t._v(" "),e("p",[t._v("打包命令会对代码混淆，打包之后 只需要下图这些文件即可、其他文件不再需要")]),t._v(" "),e("p",[t._v("后端服务打包后需要这七个文件")]),t._v(" "),e("p",[t._v("chat")]),t._v(" "),e("p",[t._v("前端项目打包的配置文件是.env.production 和admin相同")]),t._v(" "),e("p",[t._v("只需要改变这个变量 如果分开部署的则填写你的线上后端服务地址 建议分开 第一行地址填写这个自己的线上地址就行")]),t._v(" "),e("p",[t._v("admin")]),t._v(" "),e("p",[t._v("管理端是同理、一样修改这个文件")]),t._v(" "),e("p",[t._v("同样分离部署只需要打开红框的内容即可、替换为自己的线上地址 其余配置并不需要修改 也暂时用不到")]),t._v(" "),e("p",[t._v("其他文件")]),t._v(" "),e("p",[t._v("刷新404问题")]),t._v(" "),e("p",[t._v("前端history项目刷新都会404 需要对Nginx进行配置")]),t._v(" "),e("h3",{attrs:{id:"图片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#图片"}},[t._v("#")]),t._v(" 图片：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.xmzyw.cn/wp-content/uploads/2024/02/349adf3fcb02045a7a90a9f1fcecfa80.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://www.xmzyw.cn/wp-content/uploads/2024/02/349adf3fcb02045a7a90a9f1fcecfa80.png",alt:"NineAi 新版AI系统网站源码 ChatGPT"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.xmzyw.cn/wp-content/uploads/2024/02/8c3c97c4d7b52b53e0a11c14fb6fd701.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://www.xmzyw.cn/wp-content/uploads/2024/02/8c3c97c4d7b52b53e0a11c14fb6fd701.png",alt:"NineAi 新版AI系统网站源码 ChatGPT"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.xmzyw.cn/wp-content/uploads/2024/02/506f2b5ac746bb08ffba4a2facdb5f7d.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://www.xmzyw.cn/wp-content/uploads/2024/02/506f2b5ac746bb08ffba4a2facdb5f7d.png",alt:"NineAi 新版AI系统网站源码 ChatGPT"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.xmzyw.cn/wp-content/uploads/2024/02/fbeb23e426fd31b7765baa609cfa60ce.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://www.xmzyw.cn/wp-content/uploads/2024/02/fbeb23e426fd31b7765baa609cfa60ce.png",alt:"NineAi 新版AI系统网站源码 ChatGPT"}}),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"下载地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载地址"}},[t._v("#")]),t._v(" 下载地址：")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://www.xmzyw.cn/18060.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("NineAi 新版AI系统网站源码 ChatGPT"),e("OutboundLink")],1)])],1)}),[],!1,null,null,null);e.default=r.exports}}]);