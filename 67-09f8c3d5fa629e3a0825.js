webpackJsonp([67],{1512:function(a,n,s){"use strict";function t(a){return a&&a.__esModule?a:{default:a}}function o(a){return h.default.createElement(a.tag,(0,f.default)({},a.attributes,{dangerouslySetInnerHTML:{__html:a.html}}))}function p(a){return h.default.createElement(o,{tag:"section",html:a.html,attributes:{className:"zandoc-react-markdown"}})}function e(a){return h.default.createElement(o,{tag:"style",html:a.style})}function c(a,n){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(n+=a.offsetTop),c(a.parentNode,n);return n}Object.defineProperty(n,"__esModule",{value:!0});var l=s(1),u=t(l),r=s(4),i=t(r),k=s(2),d=t(k),g=s(3),F=t(g),m=s(7),f=t(m),b=s(0),h=t(b),C=s(229),v=t(C),y=s(353),E=function(){var a=y.Layout.Row,n=y.Layout.Col;return h.default.createElement("div",{className:"layout-demo-basic"},h.default.createElement(a,null,h.default.createElement(n,{span:24},"Col 24")),h.default.createElement(a,null,h.default.createElement(n,{span:8},"Col 8"),h.default.createElement(n,{span:8},"Col 8"),h.default.createElement(n,{span:8},"Col 8")),h.default.createElement(a,null,h.default.createElement(n,{span:8},"Col 8"),h.default.createElement(n,{span:8,offset:8},"Col 8, Offset 8")),h.default.createElement(a,null,h.default.createElement(n,{span:4},"Col 4"),h.default.createElement(n,{span:4,offset:4},"Col 4, Offset 4"),h.default.createElement(n,{span:4,offset:4},"Col 4, Offset 4")))},_=function(a){function n(){var a,s,t,o;(0,u.default)(this,n);for(var p=arguments.length,e=Array(p),c=0;c<p;c++)e[c]=arguments[c];return s=t=(0,d.default)(this,(a=n.__proto__||Object.getPrototypeOf(n)).call.apply(a,[this].concat(e))),t.state={showCode:!1},t.toggle=function(){t.setState({showCode:!t.state.showCode})},o=s,(0,d.default)(t,o)}return(0,F.default)(n,a),(0,i.default)(n,[{key:"render",value:function(){var a=this.state.showCode,n=this.props,s=n.title,t=n.src,p=n.children;return h.default.createElement("div",{className:"zandoc-react-demo"},h.default.createElement("div",{className:"zandoc-react-demo__preview"},p),h.default.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},h.default.createElement("div",{className:"zandoc-react-demo__title"},h.default.createElement("p",null,s||"")),h.default.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle "+(a?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),a&&h.default.createElement("pre",{className:"zandoc-react-demo__code"},h.default.createElement(o,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),n}(b.Component),w=function(a){function n(){return(0,u.default)(this,n),(0,d.default)(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return(0,F.default)(n,a),(0,i.default)(n,[{key:"componentDidMount",value:function(){var a=location.hash;if(a){var n=document.querySelector('a[href="'+a+'"]');n&&(0,v.default)(document.documentElement,0,c(n,-9))}}},{key:"render",value:function(){return h.default.createElement("div",{className:"zandoc-react-container",key:null},h.default.createElement(e,{style:".layout-demo-basic .zent-row {\n\t    background: -webkit-gradient(linear, left top, right top, color-stop(4.16666667%, #F5F5F5), color-stop(4.16666667%, rgba(0, 0, 0, 0)), color-stop(8.33333333%, rgba(0, 0, 0, 0)), color-stop(8.33333333%, #F5F5F5), color-stop(12.5%, #F5F5F5), color-stop(12.5%, rgba(0, 0, 0, 0)), color-stop(16.66666667%, rgba(0, 0, 0, 0)), color-stop(16.66666667%, #F5F5F5), color-stop(20.83333333%, #F5F5F5), color-stop(20.83333333%, rgba(0, 0, 0, 0)), color-stop(25%, rgba(0, 0, 0, 0)), color-stop(25%, #F5F5F5), color-stop(29.16666667%, #F5F5F5), color-stop(29.16666667%, rgba(0, 0, 0, 0)), color-stop(33.33333333%, rgba(0, 0, 0, 0)), color-stop(33.33333333%, #F5F5F5), color-stop(37.5%, #F5F5F5), color-stop(37.5%, rgba(0, 0, 0, 0)), color-stop(41.66666667%, rgba(0, 0, 0, 0)), color-stop(41.66666667%, #F5F5F5), color-stop(45.83333333%, #F5F5F5), color-stop(45.83333333%, rgba(0, 0, 0, 0)), color-stop(50%, rgba(0, 0, 0, 0)), color-stop(50%, #F5F5F5), color-stop(54.16666667%, #F5F5F5), color-stop(54.16666667%, rgba(0, 0, 0, 0)), color-stop(58.33333333%, rgba(0, 0, 0, 0)), color-stop(58.33333333%, #F5F5F5), color-stop(62.5%, #F5F5F5), color-stop(62.5%, rgba(0, 0, 0, 0)), color-stop(66.66666667%, rgba(0, 0, 0, 0)), color-stop(66.66666667%, #F5F5F5), color-stop(70.83333333%, #F5F5F5), color-stop(70.83333333%, rgba(0, 0, 0, 0)), color-stop(75%, rgba(0, 0, 0, 0)), color-stop(75%, #F5F5F5), color-stop(79.16666667%, #F5F5F5), color-stop(79.16666667%, rgba(0, 0, 0, 0)), color-stop(83.33333333%, rgba(0, 0, 0, 0)), color-stop(83.33333333%, #F5F5F5), color-stop(87.5%, #F5F5F5), color-stop(87.5%, rgba(0, 0, 0, 0)), color-stop(91.66666667%, rgba(0, 0, 0, 0)), color-stop(91.66666667%, #F5F5F5), color-stop(95.83333333%, #F5F5F5), color-stop(95.83333333%, rgba(0, 0, 0, 0)));\n\t    background: linear-gradient(90deg, #F5F5F5 4.16666667%, rgba(0, 0, 0, 0) 4.16666667%, rgba(0, 0, 0, 0) 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 0) 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, rgba(0, 0, 0, 0) 20.83333333%, rgba(0, 0, 0, 0) 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, rgba(0, 0, 0, 0) 29.16666667%, rgba(0, 0, 0, 0) 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, rgba(0, 0, 0, 0) 45.83333333%, rgba(0, 0, 0, 0) 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, rgba(0, 0, 0, 0) 54.16666667%, rgba(0, 0, 0, 0) 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, rgba(0, 0, 0, 0) 70.83333333%, rgba(0, 0, 0, 0) 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, rgba(0, 0, 0, 0) 79.16666667%, rgba(0, 0, 0, 0) 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, rgba(0, 0, 0, 0) 95.83333333%);\n\t}\n\t.layout-demo-basic .zent-row > div {\n\t    padding: 40px 0;\n\t    background: rgba(0, 0, 222, 0.5);\n\t    color: #fff;\n\t    text-align: center;\n\t}\n\t.layout-demo-basic .zent-row > div:nth-child(even) {\n\t    background: rgba(0, 0, 222, 0.6);\n\t}"}),h.default.createElement(p,{html:'<h2 class="anchor-heading"><a href="#layout-bu-ju">¶</a><a href="javascript:void(0)" id="layout-bu-ju" class="anchor-point"></a>Layout 布局</h2>\n<p>24栅格布局组件</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),h.default.createElement(_,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Layout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Row<span class="token punctuation">,</span> Col <span class="token punctuation">}</span> <span class="token operator">=</span> Layout\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>layout-demo-basic<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">24</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">24</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">8</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">8</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">8</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">8</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">8</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">8</span><span class="token punctuation">,</span> Offset <span class="token number">8</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Row</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">4</span><span class="token punctuation">,</span> Offset <span class="token number">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Col</span> <span class="token attr-name">span</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span> <span class="token attr-name">offset</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Col <span class="token number">4</span><span class="token punctuation">,</span> Offset <span class="token number">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Col</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Row</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},h.default.createElement(E)),h.default.createElement(p,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<h4 class="anchor-heading"><a href="#row">¶</a><a href="javascript:void(0)" id="row" class="anchor-point"></a>Row</h4>\n<table class="table">\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>额外的样式名</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>UI 前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#col">¶</a><a href="javascript:void(0)" id="col" class="anchor-point"></a>Col</h4>\n<table class="table">\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>span</td>\n<td>col所占的栅格数</td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td>offset</td>\n<td>col左偏移的栅格数</td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外的样式名</td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>UI 前缀</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n</tbody>\n</table>'}))}}]),n}(b.Component);n.default=w}});