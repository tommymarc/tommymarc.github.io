(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{697:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"element-ui-upload组件-data-data-上传文件额外参数，后台无法获取到参数问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-ui-upload组件-data-data-上传文件额外参数，后台无法获取到参数问题"}},[t._v("#")]),t._v(" element UI upload组件:data=“data”,上传文件额外参数，后台无法获取到参数问题")]),t._v(" "),s("p",[t._v("用element UI的upload上传组件上传文件，上传文件没有问题，但是通过data传参时，nodejs后台怎么也接收不到参数，一直显示"),s("code",[t._v("“{}”")]),t._v("；")]),t._v(" "),s("blockquote",[s("p",[t._v("详细文章可见我的博客"),s("a",{attrs:{href:"https://www.cnblogs.com/tommymarc/p/12190522.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客园"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("data 参数， 是后台上传如果有额外的其他参数的时候所post 的参数\n并且，upload组件中上传的文件，默认参数名为file 所以上传后台的时候，需要自己将其处理")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" formdata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FormData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nformdata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'newImages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nformdata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CardId'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("editId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nformdata"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imgType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("后台所接文件格式为form-data， 所以我们需要创建一个FormData()， 然后将我们将后台所需要的参数(newImages, CardId, type) 全部都append 到formdata中，然后通过axios.post将它传给后台即可")])])}),[],!1,null,null,null);a.default=e.exports}}]);