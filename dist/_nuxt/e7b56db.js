(window.webpackJsonp=window.webpackJsonp||[]).push([[15,11],{257:function(e,t,r){e.exports=r.p+"img/placeholder.ef09bcb.png"},259:function(e,t,r){var content=r(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(107).default)("da4638ba",content,!0,{sourceMap:!1})},261:function(e,t,r){"use strict";r.r(t);var c={name:"Title",props:{isUnderline:{type:Boolean,required:!1,default:!1}}},o=(r(268),r(46)),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.isUnderline?r("p",{staticClass:"underline"},[e._t("default")],2):r("p",[e._t("default")],2)])}),[],!1,null,"13535caa",null);t.default=component.exports},268:function(e,t,r){"use strict";r(259)},269:function(e,t,r){var c=r(106)(!1);c.push([e.i,"p[data-v-13535caa]{color:#000;font-size:12px;font-weight:700}.underline[data-v-13535caa]{text-decoration:underline}",""]),e.exports=c},286:function(e,t,r){var content=r(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(107).default)("1af4b262",content,!0,{sourceMap:!1})},299:function(e,t,r){"use strict";r(286)},300:function(e,t,r){var c=r(106)(!1);c.push([e.i,"textarea[data-v-29ee35c5]{resize:vertical;width:100%;height:60px}input[data-v-29ee35c5],textarea[data-v-29ee35c5]{background-color:#c4c4c4;border-radius:4px}.profiles[data-v-29ee35c5]{padding:0 10%;text-align:center}.profiles .profile[data-v-29ee35c5]{padding:10px 5%;border-radius:5px;margin:20px 0;box-shadow:0 0 16px -3px rgba(0,0,0,.6);font-size:15px}.profiles .profile table[data-v-29ee35c5]{width:100%}.profiles .profile-value[data-v-29ee35c5]{padding-left:20px}.profiles .profile-value select[data-v-29ee35c5]{border-radius:4px;border:none;background-color:#c4c4c4;height:29px;width:100%;font-weight:700}.profiles .profile-issues[data-v-29ee35c5]{display:grid;grid-template-columns:50% 50%;background-color:#f3f3f3;padding:12px}.profiles .profile-issues input[data-v-29ee35c5]{display:none}.profiles .profile-issues input:checked+label[data-v-29ee35c5]{background-color:#f1da8a}.profiles .profile-issues .issue[data-v-29ee35c5]{background-color:#d9d9d9;height:22px;width:95%;margin:5px auto;font-weight:700;border-radius:10px}header[data-v-29ee35c5]{text-align:center}header h2[data-v-29ee35c5]{font-size:18px;margin:9px,0}.header-imgs[data-v-29ee35c5]{text-align:center;height:240px}.header-imgs .header-img[data-v-29ee35c5]{height:130px;width:100%;-o-object-fit:cover;object-fit:cover}.header-imgs .header-icon[data-v-29ee35c5]{position:relative;top:-60px;height:100px;width:100px;-o-object-fit:cover;object-fit:cover;border-radius:50px}.header-imgs .shop-name[data-v-29ee35c5]{margin:0;position:relative;top:-50px}",""]),e.exports=c},309:function(e,t,r){"use strict";r.r(t);var c=r(10),o=(r(60),r(28),r(188),r(40),r(261)),n=r(272),l=r(271),d=r(260),v={name:"IndexPage",components:{Title:o.default},data:function(){return{show:!1,uid:"",message:"",shop_name:"",representative:"",industry:"",address:"",line_administrator:"",line_furigana:"",introduction:"",headerUrl:"",iconUrl:"",QrUrl:"",issues:[]}},mounted:function(){this.checkIsSucceeded(),this.getData()},methods:{getData:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,c,o,l,q,v,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$route.params.uid,c=Object(d.c)(),o=Object(d.e)(c,"/"+r),Object(d.d)(o).then((function(t){for(var i=0;t.items.length>i;i++){var o=t.items[i].name.split(".")[0],n=r+"/"+t.items[i].name;"Header"==o?Object(d.b)(Object(d.e)(c,n)).then((function(t){e.headerUrl=t})).catch((function(e){console.error(e)})):"Icon"==o?Object(d.b)(Object(d.e)(c,n)).then((function(t){e.iconUrl=t})).catch((function(e){console.error(e)})):"QR"==o&&Object(d.b)(Object(d.e)(c,n)).then((function(t){e.QrUrl=t})).catch((function(e){console.error(e)}))}})),l=Object(n.e)(),q=Object(n.f)(Object(n.b)(l,"users"),Object(n.i)("uid","==",r)),t.next=8,Object(n.d)(q);case 8:v=t.sent,h=v.docs[0].data(),e.message=h.message,e.shop_name=h.shop_name,e.shop_nameChild=h.shop_name,e.representative=h.representative,e.industry=h.industry,e.address=h.address,e.line_administrator=h.line_administrator,e.line_furigana=h.line_furigana,e.introduction=h.introduction,h.attracting_customers&&e.issues.push("1"),h.awareness&&e.issues.push("2"),h.branding&&e.issues.push("3"),h.employee_training&&e.issues.push("4"),h.expansion&&e.issues.push("5"),h.frequency&&e.issues.push("6"),h.human_resources&&e.issues.push("7"),h.new_customers&&e.issues.push("8"),h.outflow&&e.issues.push("9"),h.purchases&&e.issues.push("10"),h.repeat_rate&&e.issues.push("11"),h.sales&&e.issues.push("12"),h.unit_price&&e.issues.push("13");case 32:case"end":return t.stop()}}),t)})))()},checkIsSucceeded:function(){this.$route.params.is_succeeded&&(this.show=!0)},interestOffer:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.show=!0,r=Object(n.e)(),t.next=4,Object(n.h)(Object(n.c)(r,"offers_test",e.$route.params.offerID),{is_succeeded:!0});case 4:case"end":return t.stop()}}),t)})))()},passOffer:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(n.e)(),t.next=3,Object(n.h)(Object(n.c)(r,"offers_test",e.$route.params.offerID),{is_rejected:!0});case 3:e.returnBeforePage();case 4:case"end":return t.stop()}}),t)})))()},submitOffer:function(){var e=this,t=Object(l.b)();Object(l.c)(t,function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(r){var c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=7;break}return e.uid=r.uid,c=Object(n.e)(),t.next=5,Object(n.a)(Object(n.b)(c,"offers_test"),{date:Object(n.g)(),from:e.uid,is_rejected:!1,is_succeeded:!1,to:e.$route.params.uid});case 5:alert("オファーを送信しました。"),e.returnBeforePage();case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},returnBeforePage:function(){this.$router.push({name:"offer",params:{displayType:this.$route.params.displayType}})}}},h=v,f=(r(299),r(46)),component=Object(f.a)(h,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",[e._m(0),e._v(" "),c("section",{staticClass:"header-imgs"},[c("img",{staticClass:"header-img",attrs:{src:this.headerUrl?this.headerUrl:r(257),alt:"ヘッダーイメージ"}}),e._v(" "),c("img",{staticClass:"header-icon",attrs:{src:this.iconUrl?this.iconUrl:r(257),alt:"ヘッダーアイコン"}}),e._v(" "),c("p",{staticClass:"shop-name"},[e._v(e._s(e.shop_name))])]),e._v(" "),c("section",{staticClass:"profiles"},[c("div",{staticClass:"profile"},[c("Title",[e._v(" コラボ願望 ")]),e._v("\n      "+e._s(e.message)+"\n    ")],1),e._v(" "),c("div",{staticClass:"profile"},[c("Title",{attrs:{isUnderline:!0}},[e._v(" プロフィール ")]),e._v(" "),c("table",[c("tr",[c("td",{staticClass:"profile-title"},[e._v("店舗名")]),e._v(" "),c("td",{staticClass:"profile-value"},[e._v(e._s(e.shop_name))])]),e._v(" "),c("tr",[c("td",{staticClass:"profile-title"},[e._v("代表者名")]),e._v(" "),c("td",{staticClass:"profile-value"},[e._v(e._s(e.representative))])]),e._v(" "),c("tr",[c("td",{staticClass:"profile-title"},[e._v("業種")]),e._v(" "),c("td",{staticClass:"profile-value"},[e._v(e._s(e.industry))])]),e._v(" "),c("tr",[c("td",{staticClass:"profile-title"},[e._v("店舗住所")]),e._v(" "),c("td",{staticClass:"profile-value"},[e._v(e._s(e.address))])]),e._v(" "),c("tr",[c("td",{staticClass:"profile-title"},[e._v("LINE管理者")]),e._v(" "),c("td",{staticClass:"profile-value"},[e._v(e._s(e.line_administrator))])]),e._v(" "),c("tr",[c("td",{staticClass:"profile-title"},[e._v("管理者フリガナ")]),e._v(" "),c("td",{staticClass:"profile-value"},[e._v(e._s(e.line_furigana))])])])],1),e._v(" "),c("div",{staticClass:"profile"},[c("Title",[e._v(" お店紹介 ")]),e._v("\n      "+e._s(e.introduction)+"\n    ")],1),e._v(" "),c("div",{staticClass:"profile"},[c("Title",[e._v(" 経営課題 ")]),e._v(" "),c("div",{staticClass:"profile-issues"},[c("input",{directives:[{name:"model",rawName:"v-model",value:e.issues,expression:"issues"}],staticClass:"issue-checkbox",attrs:{id:"1",type:"checkbox",value:"1",disabled:""},domProps:{checked:Array.isArray(e.issues)?e._i(e.issues,"1")>-1:e.issues},on:{change:function(t){var r=e.issues,c=t.target,o=!!c.checked;if(Array.isArray(r)){var n=e._i(r,"1");c.checked?n<0&&(e.issues=r.concat(["1"])):n>-1&&(e.issues=r.slice(0,n).concat(r.slice(n+1)))}else e.issues=o}}}),e._v(" "),c("label",{staticClass:"issue",attrs:{for:"1"}},[e._v("集客")]),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:e.issues,expression:"issues"}],staticClass:"issue-checkbox",attrs:{id:"2",type:"checkbox",value:"2",disabled:""},domProps:{checked:Array.isArray(e.issues)?e._i(e.issues,"2")>-1:e.issues},on:{change:function(t){var r=e.issues,c=t.target,o=!!c.checked;if(Array.isArray(r)){var n=e._i(r,"2");c.checked?n<0&&(e.issues=r.concat(["2"])):n>-1&&(e.issues=r.slice(0,n).concat(r.slice(n+1)))}else e.issues=o}}}),e._v(" "),c("label",{staticClass:"issue",attrs:{for:"2"}},[e._v("認知度")]),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:e.issues,expression:"issues"}],staticClass:"issue-checkbox",attrs:{id:"3",type:"checkbox",value:"3",disabled:""},domProps:{checked:Array.isArray(e.issues)?e._i(e.issues,"3")>-1:e.issues},on:{change:function(t){var r=e.issues,c=t.target,o=!!c.checked;if(Array.isArray(r)){var n=e._i(r,"3");c.checked?n<0&&(e.issues=r.concat(["3"])):n>-1&&(e.issues=r.slice(0,n).concat(r.slice(n+1)))}else e.issues=o}}}),e._v(" "),c("label",{staticClass:"issue",attrs:{for:"3"}},[e._v("ブランディング")]),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:e.issues,expression:"issues"}],staticClass:"issue-checkbox",attrs:{id:"4",type:"checkbox",value:"4",disabled:""},domProps:{checked:Array.isArray(e.issues)?e._i(e.issues,"4")>-1:e.issues},on:{change:function(t){var r=e.issues,c=t.target,o=!!c.checked;if(Array.isArray(r)){var n=e._i(r,"4");c.checked?n<0&&(e.issues=r.concat(["4"])):n>-1&&(e.issues=r.slice(0,n).concat(r.slice(n+1)))}else e.issues=o}}}),e._v(" "),c("label",{staticClass:"issue",attrs:{for:"4"}},[e._v("社員教育")]),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:e.issues,expression:"issues"}],staticClass:"issue-checkbox",attrs:{id:"5",type:"checkbox",value:"5",disabled:""},domProps:{checked:Array.isArray(e.issues)?e._i(e.issues,"5")>-1:e.issues},on:{change:function(t){var r=e.issues,c=t.target,o=!!c.checked;if(Array.isArray(r)){var n=e._i(r,"5");c.checked?n<0&&(e.issues=r.concat(["5"])):n>-1&&(e.issues=r.slice(0,n).concat(r.slice(n+1)))}else e.issues=o}}}),e._v(" "),c("label",{staticClass:"issue",attrs:{for:"5"}},[e._v("販路拡大")]),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:e.issues,expression:"issues"}],staticClass:"issue-checkbox",attrs:{id:"6",type:"checkbox",value:"6",disabled:""},domProps:{checked:Array.isArray(e.issues)?e._i(e.issues,"6")>-1:e.issues},on:{change:function(t){var r=e.issues,c=t.target,o=!!c.checked;if(Array.isArray(r)){var n=e._i(r,"6");c.checked?n<0&&(e.issues=r.concat(["6"])):n>-1&&(e.issues=r.slice(0,n).concat(r.slice(n+1)))}else e.issues=o}}}),e._v(" "),c("label",{staticClass:"issue",attrs:{for:"6"}},[e._v("来店頻度")]),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:e.issues,expression:"issues"}],staticClass:"issue-checkbox",attrs:{id:"7",type:"checkbox",value:"7",disabled:""},domProps:{checked:Array.isArray(e.issues)?e._i(e.issues,"7")>-1:e.issues},on:{change:function(t){var r=e.issues,c=t.target,o=!!c.checked;if(Array.isArray(r)){var n=e._i(r,"7");c.checked?n<0&&(e.issues=r.concat(["7"])):n>-1&&(e.issues=r.slice(0,n).concat(r.slice(n+1)))}else e.issues=o}}}),e._v(" "),c("label",{staticClass:"issue",attrs:{for:"7"}},[e._v("人材確保")]),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:e.issues,expression:"issues"}],staticClass:"issue-checkbox",attrs:{id:"8",type:"checkbox",value:"8",disabled:""},domProps:{checked:Array.isArray(e.issues)?e._i(e.issues,"8")>-1:e.issues},on:{change:function(t){var r=e.issues,c=t.target,o=!!c.checked;if(Array.isArray(r)){var n=e._i(r,"8");c.checked?n<0&&(e.issues=r.concat(["8"])):n>-1&&(e.issues=r.slice(0,n).concat(r.slice(n+1)))}else e.issues=o}}}),e._v(" "),c("label",{staticClass:"issue",attrs:{for:"8"}},[e._v("新規顧客")]),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:e.issues,expression:"issues"}],staticClass:"issue-checkbox",attrs:{id:"9",type:"checkbox",value:"9",disabled:""},domProps:{checked:Array.isArray(e.issues)?e._i(e.issues,"9")>-1:e.issues},on:{change:function(t){var r=e.issues,c=t.target,o=!!c.checked;if(Array.isArray(r)){var n=e._i(r,"9");c.checked?n<0&&(e.issues=r.concat(["9"])):n>-1&&(e.issues=r.slice(0,n).concat(r.slice(n+1)))}else e.issues=o}}}),e._v(" "),c("label",{staticClass:"issue",attrs:{for:"9"}},[e._v("流失客")]),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:e.issues,expression:"issues"}],staticClass:"issue-checkbox",attrs:{id:"10",type:"checkbox",value:"10",disabled:""},domProps:{checked:Array.isArray(e.issues)?e._i(e.issues,"10")>-1:e.issues},on:{change:function(t){var r=e.issues,c=t.target,o=!!c.checked;if(Array.isArray(r)){var n=e._i(r,"10");c.checked?n<0&&(e.issues=r.concat(["10"])):n>-1&&(e.issues=r.slice(0,n).concat(r.slice(n+1)))}else e.issues=o}}}),e._v(" "),c("label",{staticClass:"issue",attrs:{for:"10"}},[e._v("購入点数")]),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:e.issues,expression:"issues"}],staticClass:"issue-checkbox",attrs:{id:"11",type:"checkbox",value:"11",disabled:""},domProps:{checked:Array.isArray(e.issues)?e._i(e.issues,"11")>-1:e.issues},on:{change:function(t){var r=e.issues,c=t.target,o=!!c.checked;if(Array.isArray(r)){var n=e._i(r,"11");c.checked?n<0&&(e.issues=r.concat(["11"])):n>-1&&(e.issues=r.slice(0,n).concat(r.slice(n+1)))}else e.issues=o}}}),e._v(" "),c("label",{staticClass:"issue",attrs:{for:"11"}},[e._v("リピート率")]),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:e.issues,expression:"issues"}],staticClass:"issue-checkbox",attrs:{id:"12",type:"checkbox",value:"12",disabled:""},domProps:{checked:Array.isArray(e.issues)?e._i(e.issues,"12")>-1:e.issues},on:{change:function(t){var r=e.issues,c=t.target,o=!!c.checked;if(Array.isArray(r)){var n=e._i(r,"12");c.checked?n<0&&(e.issues=r.concat(["12"])):n>-1&&(e.issues=r.slice(0,n).concat(r.slice(n+1)))}else e.issues=o}}}),e._v(" "),c("label",{staticClass:"issue",attrs:{for:"12"}},[e._v("売上")]),e._v(" "),c("input",{directives:[{name:"model",rawName:"v-model",value:e.issues,expression:"issues"}],staticClass:"issue-checkbox",attrs:{id:"13",type:"checkbox",value:"13",disabled:""},domProps:{checked:Array.isArray(e.issues)?e._i(e.issues,"13")>-1:e.issues},on:{change:function(t){var r=e.issues,c=t.target,o=!!c.checked;if(Array.isArray(r)){var n=e._i(r,"13");c.checked?n<0&&(e.issues=r.concat(["13"])):n>-1&&(e.issues=r.slice(0,n).concat(r.slice(n+1)))}else e.issues=o}}}),e._v(" "),c("label",{staticClass:"issue",attrs:{for:"13"}},[e._v("商品単価")])])],1),e._v(" "),c("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"profile"},[c("Title",[e._v(" LINE QRコード ")]),e._v(" "),c("img",{attrs:{src:this.QrUrl,height:"155px",weight:"155px"}})],1),e._v(" "),1==e.$route.params.displayType?c("section",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}],staticClass:"profile"},[c("ota-Button",{attrs:{buttonStyle:"interest"},on:{click:e.interestOffer}},[e._v("\n        興味ある\n      ")]),e._v(" "),c("ota-Button",{attrs:{buttonStyle:"pass"},on:{click:e.passOffer}},[e._v(" パス ")])],1):e._e(),e._v(" "),2==e.$route.params.displayType?c("section",{staticClass:"profile"},[c("ota-Button",{attrs:{buttonStyle:"offer"},on:{click:e.submitOffer}},[e._v("\n        オファー送信\n      ")])],1):e._e(),e._v(" "),c("section",{staticClass:"profile"},[c("ota-Button",{attrs:{buttonStyle:"return"},on:{click:e.returnBeforePage}},[e._v("一覧に戻る")])],1)])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("p",[e._v("OTA collab.")])])}],!1,null,"29ee35c5",null);t.default=component.exports;installComponents(component,{Title:r(261).default})}}]);