(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{259:function(e,t,n){e.exports=n.p+"img/placeholder.ef09bcb.png"},399:function(e,t,n){var content=n(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(107).default)("0f6a9d99",content,!0,{sourceMap:!1})},512:function(e,t,n){"use strict";n(399)},513:function(e,t,n){var r=n(106)(!1);r.push([e.i,"header[data-v-1918fe18]{text-align:center}header h2[data-v-1918fe18]{font-size:18px;margin:9px,0}.header-imgs[data-v-1918fe18]{text-align:center;height:240px}.header-imgs .header-img[data-v-1918fe18]{height:130px;width:100%;-o-object-fit:cover;object-fit:cover}.header-imgs .header-icon[data-v-1918fe18]{position:relative;top:-60px;height:100px;width:100px;-o-object-fit:cover;object-fit:cover;border-radius:50px}.header-imgs .shop-name[data-v-1918fe18]{margin:0;position:relative;top:-50px}",""]),e.exports=r},521:function(e,t,n){"use strict";n.r(t);var r=n(10),c=(n(40),n(28),n(188),n(60),n(275)),o=n(402),d=n(285),l=n(303),h=n(262),f={name:"IndexPage",components:{Title:c.default,profiles:o.default},data:function(){return{shop_name:"",userName:"田中",isInputMode:!1,isEditing:!1,userNum:"",headerUrl:"",iconUrl:""}},created:function(){},mounted:function(){this.checklogin(),this.getData()},methods:{Edit:function(){this.isEditing=!this.isEditing},checklogin:function(){var e=this,t=Object(l.b)();Object(l.c)(t,function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n||e.$router.push({name:"login",params:{returnPage:"index"}});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n="",c=Object(l.b)(),Object(l.c)(c,function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(r){var c,o,l,f,m,v;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=15;break}return n=r.uid,c=Object(d.f)(),o=Object(h.b)(),t.next=6,Object(d.d)(Object(d.c)(c,"uid_to_num",n));case 6:return(l=t.sent).exists()?e.userNum=l.data().num:console.log("No such document."),f=Object(h.d)(o,"/"+e.userNum),console.log("test",e.userNum),Object(h.c)(f).then((function(t){console.log(t.items);for(var i=0;t.items.length>i;i++){console.log(t.items[i].name);var n=t.items[i].name.split(".")[0];"Header"==n?Object(h.a)(Object(h.d)(o,e.userNum+"/"+t.items[i].name)).then((function(t){e.headerUrl=t})).catch((function(e){})):"Icon"==n&&Object(h.a)(Object(h.d)(o,e.userNum+"/"+t.items[i].name)).then((function(t){e.iconUrl=t})).catch((function(e){}))}})).catch((function(e){})),t.next=13,Object(d.d)(Object(d.c)(c,"users",e.userNum));case 13:(m=t.sent).exists()?(v=m.data(),e.shop_name=v.shop_name):console.log("No such document.");case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return t.stop()}}),t)})))()}}},m=f,v=(n(512),n(46)),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("header",[r("p",[e._v("OTA collab.")]),e._v(" "),r("ota-Button",{attrs:{buttonStyle:"cancel"},on:{click:e.Edit}},[e._v("Edit")])],1),e._v(" "),r("section",{staticClass:"header-imgs"},[r("img",{staticClass:"header-img",attrs:{src:this.headerUrl?this.headerUrl:n(259),alt:"ヘッダーイメージ"}}),e._v(" "),r("img",{staticClass:"header-icon",attrs:{src:this.iconUrl?this.iconUrl:n(259),alt:"ヘッダーアイコン"}}),e._v(" "),r("p",{staticClass:"shop-name"},[e._v(e._s(e.shop_name))])]),e._v(" "),r("profiles",{attrs:{isEditing:e.isEditing}})],1)}),[],!1,null,"1918fe18",null);t.default=component.exports;installComponents(component,{Profiles:n(402).default})}}]);