(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{197:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频","aria-hidden":"true"}},[t._v("#")]),t._v(" 视频")]),t._v(" "),a("h2",{attrs:{id:"直播原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直播原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 直播原理")]),t._v(" "),a("ul",[a("li",[t._v("1、pc/android/ios 采集")]),t._v(" "),a("li",[t._v("2、压缩编码(视频h264/音频AAC)")]),t._v(" "),a("li",[t._v("3、字幕叠加")]),t._v(" "),a("li",[t._v("4、推流")]),t._v(" "),a("li",[t._v("5、CDN\n"),a("ul",[a("li",[t._v("可以直接给播放时使用")])])])]),t._v(" "),a("h2",{attrs:{id:"视频格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 视频格式")]),t._v(" "),a("ul",[a("li",[t._v("mp4   浏览器一般都识别")]),t._v(" "),a("li",[t._v("webm  Chorme/Fifox 识别")]),t._v(" "),a("li",[t._v("hls   Safari 识别")]),t._v(" "),a("li",[t._v("flv   (B站)")])]),t._v(" "),a("h2",{attrs:{id:"直播协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直播协议","aria-hidden":"true"}},[t._v("#")]),t._v(" 直播协议")]),t._v(" "),a("ul",[a("li",[t._v("HLS协议(格式HLS)")]),t._v(" "),a("li",[t._v("RTMP协议(格式也是ts)")]),t._v(" "),a("li",[t._v("HTTP-FLV协议(格式.flv)")])]),t._v(" "),a("h2",{attrs:{id:"hls协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hls协议","aria-hidden":"true"}},[t._v("#")]),t._v(" HLS协议")]),t._v(" "),a("ul",[a("li",[t._v("m3u8是一个纯文本文件")]),t._v(" "),a("li",[t._v("m3u8文件里面可以放ts文件 也可m3u8文件")]),t._v(" "),a("li",[t._v("m3u8分类\n"),a("ul",[a("li",[t._v("live playlist 动态列表\n"),a("ul",[a("li",[t._v("直播 几秒后重新请求m3u8文件 有新的文件")])])]),t._v(" "),a("li",[t._v("event playlist 静态列表(基本没人用)")]),t._v(" "),a("li",[t._v("vod playlist  全量列表\n"),a("ul",[a("li",[t._v("点播  拿到一刻起 不变化")])])])])]),t._v(" "),a("li",[t._v("原理(通讯:http协议)\n"),a("ul",[a("li",[t._v("对应HLS协议来说 他会先下发一个M3U8文件，M3U8文件会有很多的索引,告诉你有哪些片段,这些片段是可以播放的,之后就是更新问题,片段会有一个时段,他会在在所有片段播放前,重新请求新的m3u8文件(这个是浏览器默认行为)")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" segment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("ts\nvideo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("M3U8")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" segment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("ts\n             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" segment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("ts\n             "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" segment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.")]),t._v("ts\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 总结: 对应HLS协议来说 他会先下发一个M3U8文件\n         M3U8文件会有很多的索引,告诉你有哪些片段,\n         这些片段是可以播放的,之后就是更新问题,\n         片段会有一个时段,他会在在所有片段播放前\n         重新请求新的m3u8文件(这个是浏览器默认行为)\n*/")]),t._v("\n")])])]),a("ul",[a("li",[t._v("live playlist 动态列表")]),t._v(" "),a("li",[t._v("m3u8文件")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("#"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXTM3U")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//版本")]),t._v("\n#"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VERSION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//版本的声明")]),t._v("\n#"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TARGETDURATUION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认的时长")]),t._v("\n#"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MEDIA")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SEQUENCE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//序号 没变化一次他就会加1")]),t._v("\n#"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXTINF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//告诉下面时长是多少")]),t._v("\nhttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxxx\n\n")])])]),a("ul",[a("li",[t._v("vod playlist  全量列表")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("#"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXTM3U")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//版本")]),t._v("\n#"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VERSION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//版本的声明")]),t._v("\n#"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TARGETDURATUION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//默认的时长")]),t._v("\n#"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MEDIA")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SEQUENCE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//序号 没变化一次他就会加1")]),t._v("\n#"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PLAYLIST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VOD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表明是点播")]),t._v("\n#"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXTINF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//告诉下面时长是多少")]),t._v("\nhttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxxx\n#"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EXT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENDLIST")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表面结束")]),t._v("\n")])])]),a("h3",{attrs:{id:"hls协议-ts文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hls协议-ts文件","aria-hidden":"true"}},[t._v("#")]),t._v(" hls协议-ts文件")]),t._v(" "),a("ul",[a("li",[t._v("ts文件")]),t._v(" "),a("li",[t._v("先要找一个PAT的包 他告诉你去找PMT")]),t._v(" "),a("li",[t._v("PMT 他会告诉你下面TS哪些是视频和音频")]),t._v(" "),a("li",[t._v("所有的TS 组成一个PES")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PAT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("包"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PMT")]),t._v("     \n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TS")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TS")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TS")]),t._v("\n")])])]),a("h2",{attrs:{id:"rtmp协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rtmp协议","aria-hidden":"true"}},[t._v("#")]),t._v(" RTMP协议")]),t._v(" "),a("ul",[a("li",[t._v("原理(通讯:tcp协议)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("pc\nAndriod  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TCP")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CDN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 源\nios\n")])])]),a("h2",{attrs:{id:"http-flv协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-flv协议","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP-FLV协议")]),t._v(" "),a("ul",[a("li",[t._v("原理(通信:http协议)")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("pc\nAndriod  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CDN")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 源\nios\n")])])]),a("h2",{attrs:{id:"video详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video详解","aria-hidden":"true"}},[t._v("#")]),t._v(" video详解")]),t._v(" "),a("h2",{attrs:{id:"播放器选型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#播放器选型","aria-hidden":"true"}},[t._v("#")]),t._v(" 播放器选型")]),t._v(" "),a("ul",[a("li",[t._v("video.js")]),t._v(" "),a("li",[t._v("hls.js")]),t._v(" "),a("li",[t._v("flv.js")])])])}],!1,null,null,null);s.default=r.exports}}]);