(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},a={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"2a84":function(t,e,n){"use strict";n("aab2")},"30fa":function(t,e,n){},"347d":function(t,e,n){"use strict";n("c0b9")},"48e1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"content"}},[n("Header",{attrs:{liClick:t.switchPage}}),n("Main",{attrs:{page:t.pageNumber}}),n("Footer")],1)])},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"main"}},[n("transition",{attrs:{name:"pagetrans",mode:"out-in"}},[0===t.page?n("AboutMe"):t._e(),1===t.page?n("Portfolio"):t._e(),2===t.page?n("Resume"):t._e(),3===t.page?n("ContactMe"):t._e()],1)],1)},o=[],c=(n("a9e3"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"about-me"}},[i("div",{staticClass:"left"},[i("img",{attrs:{id:"portrait",src:n("8c58")}})]),i("article",{staticClass:"right"},[i("h1",{staticClass:"font-cartar"},[t._v("WHO AM I")]),i("h5",[t._v(" A passionate, creative, and hard-working Chinese guy. A guy who has a crazy big dream -- to change the world! ")]),i("h5",[t._v(" In reality, this guy is a programmer. Jack of all trades, but especially good at machine learning and software programming. ")]),i("h6",[t._v(" Check my videos on my "),i("a",{attrs:{href:"https://space.bilibili.com/598976578"}},[t._v("Bilibili")]),t._v(" channel. ")])])])}],u={name:"AboutMe"},p=u,d=(n("2a84"),n("2877")),m=Object(d["a"])(p,c,l,!1,null,"208ae780",null),f=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"portfolio"}},[t._m(0),t._l(t.tp,(function(t){return n("div",{key:t.id},[n("ProjectItem",{attrs:{imgsrcs:t.imgsrcs,projName:t.projName,description:t.description,details:t.details}})],1)})),t._m(1),t._l(t.pp,(function(t){return n("div",{key:t.id},[n("ProjectItem",{attrs:{imgsrcs:t.imgsrcs,projName:t.projName,description:t.description,details:t.details}})],1)}))],2)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"groupname"},[n("b",{staticClass:"Sanchez"},[t._v("Team Project")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"groupname"},[n("b",{staticClass:"Sanchez"},[t._v("Personal Project")])])}],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"line",attrs:{id:"project-box"},on:{click:function(e){return t.hideshowdetails()}}},[t._l(t.imgsrcs,(function(t){return n("img",{key:t.id,staticClass:"project-img",attrs:{src:t}})})),n("div",{staticStyle:{"margin-left":"12px"}},[n("div",{staticClass:"project-name"},[t._v(t._s(t.projName))]),n("div",{staticClass:"project-description"},[t._v(t._s(t.description))]),n("transition",{attrs:{name:"detail-trans"}},[t.detail?n("p",[t._v(t._s(t.details))]):t._e()])],1)],2)},b=[],_={name:"ProjectItem",props:{imgsrcs:Array,projName:String,description:String,details:String},methods:{hideshowdetails:function(){0==this.detail?this.detail=!0:this.detail=!1}},data:function(){return{detail:!1}}},y=_,w=(n("8a9c"),Object(d["a"])(y,v,b,!1,null,"eb8b7dd2",null)),j=w.exports,C=[{imgsrcs:["Images/fiserv.png"],projName:"Fiserv's Credit Buster",description:"A machine learning project with a nice webpage.",details:"A website build with React and NodeJS that runs machine learning tasks in the backend.       It's created to classify which transaction is legitimate."},{imgsrcs:["Images/receptify.jpg"],projName:"Receiptify",description:"Take a photo of your receipt and the program will record the data.",details:"The app will open a camera and user takes a picture of his/her receipts, then an    OCR will turn the picture into words. Fields such as price, item name, quantity, on the receipt     will be recorded."},{imgsrcs:["Images/ls.png"],projName:"Lightning Smash",description:"An App That Improves Your Reactions in Fighting Games.",details:"Details are shown here."},{imgsrcs:["Images/data.png"],projName:"Dataset Analysis",description:"A hackathon project. Some data processing and engineering.",details:"Details are shown here."}],k=[{imgsrcs:["Images/em1.png","Images/em2.png","Images/em3.png"],projName:"Empire Monopoly",description:"A monopoly game made with Unity. You can find it on Play Store.",details:"Details are shown here."},{imgsrcs:["Images/ezanno.png"],projName:"EZAnno",description:"An annotation tool made with Unity. You can find it on my Github.",details:"Details are shown here."}],x={name:"Portfolio",components:{ProjectItem:j},data:function(){return{tp:C,pp:k}}},M=x,P=(n("e2f1"),Object(d["a"])(M,h,g,!1,null,"1ca729b4",null)),N=P.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"resume"}},[n("h2",[t._v("Resume")]),n("div",{staticClass:"line-segment"}),n("div",[n("h3",[t._v("Experience")]),n("div",{staticClass:"text-box"},[n("p",[t._v("Rutgers CoDas Voluntary Assistant (2019.1 - 2019.10)")]),n("p",[t._v(" I've been doing some voluntary work related to machine learning. I worked together with my supervisor Dr. Scott, and I wrote Python scripts to help his research. ")])])]),n("div",{staticClass:"text-box"}),n("div",{staticClass:"line-segment"}),n("div",[n("h3",[t._v("Education")]),n("div",{staticClass:"text-box"},[n("p",[t._v("Rutgers University - Newark (2018-2021)")]),n("p",[t._v("Major: Computer Science Minor: Mathematics")])]),n("div",{staticClass:"text-box"},[n("p",[t._v("Qingdao University of Technology (2014-2017)")]),n("p",[t._v("Major: Civil Engineering")])])])])}],A={name:"Resume"},E=A,I=(n("b283"),Object(d["a"])(E,O,S,!1,null,"0222c4ce",null)),$=I.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contact"}},[n("h2",[t._v("Contact Me")]),n("div",{staticStyle:{display:"flex"}},[n("img",{staticClass:"icon",attrs:{src:"icons/email.svg"},on:{click:function(e){return t.SendMail()}}}),n("div",{staticClass:"white",staticStyle:{"margin-left":"10px"}},[t._v("kevinofcathay@gmail.com")])])])},T=[],D={name:"ContactMe",methods:{SendMail:function(){window.location.href="mailto:kevinofcathay@gmail.com"}}},F=D,U=(n("347d"),Object(d["a"])(F,R,T,!1,null,"6a7fdd2c",null)),L=U.exports,z={name:"Main",components:{AboutMe:f,Portfolio:N,ContactMe:L,Resume:$},props:{page:Number}},H=z,J=(n("f961"),Object(d["a"])(H,s,o,!1,null,"33b62b76",null)),K=J.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{attrs:{id:"header"}},[t._m(0),n("nav",{attrs:{id:"topright-navbar"}},[n("ul",{attrs:{id:"nav-container"}},t._l(t.navlist,(function(e){return n("li",{key:e.id,staticClass:"inline navitem white-bottom",on:{click:function(n){return t.liClick(e.pageNumber)}}},[t._v(" "+t._s(e.title)+" ")])})),0)])])},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"font-orbitron",attrs:{id:"title"}},[n("b",[t._v("Kevin's Portfolio")])])}],G={name:"Header",props:{liClick:Function},data:function(){return{navlist:[{title:"About Me",pageNumber:0},{title:"Portfolio",pageNumber:1},{title:"Resume",pageNumber:2},{title:"Contact Me",pageNumber:3}]}}},Z=G,q=(n("65b7"),Object(d["a"])(Z,Y,B,!1,null,"fb929a0a",null)),Q=q.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{id:"footer"}},[n("div",{staticClass:"line-segment"}),n("ul",t._l(t.srcList,(function(e){return n("li",{key:e.id},[n("img",{attrs:{src:e.imagesrc},on:{click:function(n){return t.openURL(e.link)}}})])})),0)])},W=[],X=[{imagesrc:"icons/github.png",link:"https://github.com/KevinOfCathay"},{imagesrc:"icons/devpost.png",link:"https://devpost.com/KevinofCathay"},{imagesrc:"icons/twitter.png",link:"https://twitter.com/KevinZh45641809"}],tt={name:"Footer",methods:{openURL:function(t){window.open(t,"_blank")}},data:function(){return{srcList:X}}},et=tt,nt=(n("be92"),Object(d["a"])(et,V,W,!1,null,"66a1bf4e",null)),it=nt.exports,at={name:"App",components:{Header:Q,Main:K,Footer:it},data:function(){return{pageNumber:0}},methods:{switchPage:function(t){this.pageNumber=t,console.log("switchPage")}}},rt=at,st=(n("034f"),Object(d["a"])(rt,a,r,!1,null,null,null)),ot=st.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(ot)}}).$mount("#app")},"5ef3":function(t,e,n){},"65b7":function(t,e,n){"use strict";n("7829")},7829:function(t,e,n){},"85ec":function(t,e,n){},"8a9c":function(t,e,n){"use strict";n("48e1")},"8c58":function(t,e,n){t.exports=n.p+"img/portrait.b66c83e4.png"},aab2:function(t,e,n){},b283:function(t,e,n){"use strict";n("f20b")},be92:function(t,e,n){"use strict";n("c6c3")},c0b9:function(t,e,n){},c6c3:function(t,e,n){},e2f1:function(t,e,n){"use strict";n("30fa")},f20b:function(t,e,n){},f961:function(t,e,n){"use strict";n("5ef3")}});
//# sourceMappingURL=app.a1dfb0d9.js.map