(function(e){function t(t){for(var a,c,s=t[0],d=t[1],i=t[2],u=0,l=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);b&&b(t);while(l.length)l.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=d(d.s=n[0]))}return e}var a={},c={app:0},o={app:0},r=[];function s(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-07debdde":"04bbdd0b","chunk-10c327a7":"bf1e6d79","chunk-1164a354":"0ad4bc63","chunk-298855ed":"2af9d127","chunk-2d0da7d0":"13ce16ba","chunk-2d225de6":"43b520f2","chunk-3d99be86":"58401947","chunk-4bf2bc4a":"106d9b0d","chunk-69975d27":"46bf0084","chunk-89cd81f2":"41d9e68a","chunk-b0f7d498":"3f1dc7ee","chunk-b4ebc04c":"4cc46bf3","chunk-b7ba9570":"f24ac1f2","chunk-bf5182e2":"dae1a5b7","chunk-ed3fac88":"bb369159"}[e]+".js"}function d(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"chunk-07debdde":1,"chunk-10c327a7":1,"chunk-1164a354":1,"chunk-298855ed":1,"chunk-3d99be86":1,"chunk-4bf2bc4a":1,"chunk-69975d27":1,"chunk-b4ebc04c":1,"chunk-b7ba9570":1,"chunk-bf5182e2":1,"chunk-ed3fac88":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-07debdde":"d9065f95","chunk-10c327a7":"f34769e3","chunk-1164a354":"d22e2d79","chunk-298855ed":"dd7a3983","chunk-2d0da7d0":"31d6cfe0","chunk-2d225de6":"31d6cfe0","chunk-3d99be86":"2a0d4b48","chunk-4bf2bc4a":"b56e6ab2","chunk-69975d27":"c997b76a","chunk-89cd81f2":"31d6cfe0","chunk-b0f7d498":"31d6cfe0","chunk-b4ebc04c":"67a766d9","chunk-b7ba9570":"61450788","chunk-bf5182e2":"5d0faf5f","chunk-ed3fac88":"344fb43d"}[e]+".css",o=d.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var i=r[s],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===a||u===o))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){i=l[s],u=i.getAttribute("data-href");if(u===a||u===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],b.parentNode.removeChild(b),n(r)},b.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(b)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,d.nc&&u.setAttribute("nonce",d.nc),u.src=s(e);var l=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,n[1](l)}o[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},d.m=e,d.c=a,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)d.d(n,a,function(t){return e[t]}.bind(null,a));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/RPMTW-Website/",d.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var b=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f82":function(e,t,n){"use strict";n("3b09")},"10ee":function(e){e.exports=JSON.parse('{"public.Game.version":"遊戲版本","public.goto.discord":"加入官方社群 (Discord)","plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name.0":"ATR 1 - All The RPMTW","Home.include.atr.name.1":"模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.title":"公告","Home.announcement.datas":["文言文：菘之幻界->白話文：白菜的幻想世界!?!?","網頁的手機頁面??Emm在等等八~~"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"],"ProgressQuery.please.enter.CurseForgeID":"請輸入CurseForgeID","ProgressQuery.title":"RPMTW 模組個別翻譯進度查詢器","ProgressQuery.description.0":"不知道自己喜歡的模組有沒有被翻譯呢?或者想了解模組的翻譯進度，那用這個工具就對了","ProgressQuery.description.1":"(目前仍處測試版狀態，資料庫尚未齊全，因此部分模組查無資料屬正常現象)","ProgressQuery.Filter.condition":"過濾條件","RPMTWUpdateMod.buttons.Participate":"參與模組翻譯","RPMTWUpdateMod.main.title":"體驗前所未見的模組繁中化","RPMTWUpdateMod.schedule.Full.version":"全版本模組翻譯進度"}')},"11de":function(e,t,n){},"18a7":function(e,t,n){e.exports=n.p+"img/autoTranslation.1a4e811f.png"},"3b09":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");const c=Object(a["h"])("div",{class:"FooterAir"},null,-1);function o(e,t,n,o,r,s){const d=Object(a["y"])("Header"),i=Object(a["y"])("router-view"),u=Object(a["y"])("Footer");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["h"])(d),Object(a["h"])(i,{class:"wrapper"}),c,Object(a["h"])(u)],64)}const r=Object(a["I"])("data-v-ac2abf2a");Object(a["t"])("data-v-ac2abf2a");const s={id:"header",class:"Header"},d={class:"inside-header"},i={class:"header-nav"},u={class:"header-nav-left"},l=Object(a["h"])("a",{href:"#"},[Object(a["h"])("div",{class:"menuStyle"})],-1),b=Object(a["f"])('<div class="links" data-v-ac2abf2a><div class="list-links" data-v-ac2abf2a><a href="https://discord.com/invite/5xApZtgV2u" data-v-ac2abf2a><img src="https://discord.com/assets/847541504914fd33810e70a0ea73177e.ico" alt="" data-v-ac2abf2a></a><a href="https://github.com/RPMTW" data-v-ac2abf2a><img src="https://github.com/fluidicon.png" alt="" data-v-ac2abf2a></a><a href="https://modrinth.com/mod/rpmtw-update-mod" data-v-ac2abf2a><img src="https://modrinth.com/favicon.ico" alt="" data-v-ac2abf2a></a><a href="https://www.curseforge.com/minecraft/modpacks/atr1" data-v-ac2abf2a><img src="https://media.forgecdn.net/avatars/thumbnails/396/29/64/64/637595082272657724.png" alt="" data-v-ac2abf2a></a></div></div>',1),h={class:"div-select"},m=Object(a["h"])("div",{class:"blurry"},null,-1),p=Object(a["h"])("div",{class:"header-nav-title user-select"},[Object(a["h"])("strong",{class:"main-title"},[Object(a["h"])("span",{class:"notranslate",style:{color:"#ff9900"}},"RPM"),Object(a["h"])("span",{style:{color:"#00ffff"},class:"notranslate"},"TW")])],-1),f={class:"header-nav-right"},g=Object(a["f"])('<span class="mode-dark" data-v-ac2abf2a><i class="fas fa-sun" data-v-ac2abf2a></i></span><span class="mode-bright" data-v-ac2abf2a><i class="fas fa-sun" data-v-ac2abf2a></i></span><div class="mode-rod" data-v-ac2abf2a></div>',3);Object(a["r"])();const O=r((e,t,n,c,o,O)=>{const v=Object(a["y"])("router-link");return Object(a["q"])(),Object(a["d"])("header",s,[Object(a["h"])("div",d,[Object(a["h"])("div",i,[Object(a["h"])("div",u,[Object(a["h"])("div",{class:"menuButton",onClick:t[4]||(t[4]=(...e)=>O.menuButtonHtmlToggle&&O.menuButtonHtmlToggle(...e))},[l,Object(a["h"])("div",{class:"menu",onMouseleave:t[3]||(t[3]=(...e)=>O.menuButtonHtmlToggle&&O.menuButtonHtmlToggle(...e))},[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.menuList,e=>(Object(a["q"])(),Object(a["d"])("div",{key:e,class:[{active:o.breadcrumb===e.breadcrumb},"activeBreadcrumb"]},[Object(a["h"])(v,{to:e.to},{default:r(()=>[Object(a["g"])(Object(a["A"])(e.name),1)]),_:2},1032,["to"])],2))),128)),b,Object(a["h"])("div",h,[Object(a["h"])("h1",{class:"nowLang notranslate langMenu",onClick:t[1]||(t[1]=(...e)=>O.showLangOptions&&O.showLangOptions(...e))},Object(a["A"])(o.lang),1),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.langs,(e,n)=>(Object(a["q"])(),Object(a["d"])("div",{class:"div-option langMenu notranslate",value:n,key:n,onClick:t[2]||(t[2]=(...e)=>O.setChoose&&O.setChoose(...e))},Object(a["A"])(e),9,["value"]))),128))])],32),m])]),p,Object(a["h"])("div",f,[Object(a["h"])("div",{class:"header-nav-setMode",onClick:t[5]||(t[5]=(...e)=>O.headerSetMode_click&&O.headerSetMode_click(...e)),rod:""},[g])])])])])});var v=n("9225"),j=n("8b64");function k(e,t=""){return v["a"].i18nData[v["a"].getLang()][e]||v["a"].i18nData[v["a"].set.main][e]||t}let T=0;var y={name:"Header",data(){return{langs:v["a"].set.langs,lang:`${v["a"].set.langs[v["a"].getLang()]} (${v["a"].getLang()})`,menuList:j,breadcrumb:null}},methods:{i18n:k,showLangOptions(){$("div.div-option.langMenu").toggleClass("block")},setChoose(e){let t=$(e.target).attr("value");this.lang=`${v["a"].set.langs[t]} (${t})`,v["a"].setLang(t)},headerSetMode_click(){let e=$("html").toggleClass("bright").attr("class").split(" ");e.includes("bright")?document.cookie="mode=bright":document.cookie="mode=dark"},menuButtonHtmlToggle(){$("html").toggleClass("is-menu")},setBreadcrumb(){this.breadcrumb=this.$route.meta.breadcrumb}},mounted(){$((function(){function e(){let e=Math.floor($(window).scrollTop()),t=$("#header"),n="slider--up",a="slider--down";0===e?(setTimeout(()=>{t.addClass(n)},250),t.removeClass(a)):T>e?(t.addClass(n),t.removeClass(a)):$("html").hasClass("is-menu")||(t.addClass(a),t.removeClass(n)),T=e}$(window).on("scroll",()=>e()),e()})),this.setBreadcrumb();let e=("; "+document.cookie).split("; mode=");2===e.length&&"bright"===e.pop().split(";").shift()?$("html").addClass("bright"):document.cookie="mode=dark",document.cookie.length<=0&&alert("建議開啟 cookie 已獲得更好的體驗")},watch:{$route(){this.setBreadcrumb()}}};n("5a72"),n("9231");y.render=O,y.__scopeId="data-v-ac2abf2a";var M=y;const P=Object(a["I"])("data-v-8749b2a8");Object(a["t"])("data-v-8749b2a8");const w={key:0,class:"Footer"},C=Object(a["h"])("footer",null,[Object(a["h"])("p",null,"Copyright © RPMTW 2021-2021 Powered by The RPMTW Team and 猴子#3807")],-1);Object(a["r"])();const H=P((e,t,n,c,o,r)=>o.notFooter?(Object(a["q"])(),Object(a["d"])("div",w,[C])):Object(a["e"])("",!0));var W={name:"Footer",data(){return{notFooter:!0}},watch:{$route(){this.notFooter=!this.$route.meta.notFooter}}};n("0f82");W.render=H,W.__scopeId="data-v-8749b2a8";var A=W,R=(n("11de"),{name:"Main",components:{Header:M,Footer:A}});n("7702");R.render=o;var _=R,F=n("6c02"),S=n("18a7"),L=n.n(S);const x={id:"AssistTranslation",class:"wiki"},B={class:"content"},I=Object(a["h"])("section",{class:"section",id:"what-is-RPMTW"},[Object(a["h"])("h1",null,"什麼是 RPMTW 自動中文化更新模組?"),Object(a["h"])("p",null," 此模組是一個Minecraft模組繁體中文化的新興模組，主打「方便、快速、簡單、合作」，希望能夠打破傳統翻譯模組的方式，以及解決許多新/老手想翻譯模組但卻覺得很難/遊玩模組時被看不懂的文字困惑。 ")],-1),Q={class:"section",id:"install-method"},E=Object(a["h"])("h1",null,"這模組要如何安裝?",-1),D=Object(a["g"])("<<點我查看教學>>"),q=Object(a["h"])("section",{class:"section",id:"server-need-install"},[Object(a["h"])("h1",null,"伺服器端需要安裝嗎?"),Object(a["h"])("p",null," 伺服器不用安裝，因為伺服器端不會顯示內容並不需要安裝此模組，只需客戶端安裝就能享受漢化體驗。 ")],-1),N=Object(a["h"])("section",{class:"section",id:"RPMTW-version"},[Object(a["h"])("h1",null,"RPMTW 支援 1.12.2 以下的版本嗎? RPMTW支援那些Minecraft版本?"),Object(a["h"])("p",null,[Object(a["g"])(" RPMTW 「不打算」支援 1.12.2 以下的Minecraft版本。"),Object(a["h"])("br"),Object(a["g"])(" 目前RPMTW支援的版本有 1.12、1.16、1.17，未來有新版本釋出也會盡快更新。 ")])],-1),U=Object(a["h"])("section",{class:"section",id:"support-forge-or-fabric"},[Object(a["h"])("h1",null,"RPMTW 支援Forge嗎? 支援Fabric嗎?"),Object(a["h"])("p",null,[Object(a["h"])("span",{style:{"text-decoration":"line-through"}},"小孩子才做選擇，RPMTW 全都要"),Object(a["g"])(" (Forge/Fabric雙平台都支援)。 ")])],-1),J={class:"section",id:"discord-or-line"},z=Object(a["h"])("h1",null,"有Discord或Line嗎? 我想詢問相關問題/建議",-1),V=Object(a["g"])(" 如果需要聯繫我們 "),G=Object(a["g"])(" <<點我查看聯繫方式>> "),K=Object(a["g"])("。 "),Z=Object(a["h"])("section",{class:"section",id:"translation-process"},[Object(a["h"])("h1",null,"這什麼原理，可以全自動化的翻譯流程?"),Object(a["h"])("p",null,"下方有一張簡易的示意圖喔w"),Object(a["h"])("br"),Object(a["h"])("img",{src:L.a,alt:"簡易的示意圖"})],-1);function X(e,t,n,c,o,r){const s=Object(a["y"])("router-link");return Object(a["q"])(),Object(a["d"])("div",x,[Object(a["h"])("div",B,[I,Object(a["h"])("section",Q,[E,Object(a["h"])(s,{to:"/install/version"},{default:Object(a["F"])(()=>[D]),_:1})]),q,N,U,Object(a["h"])("section",J,[z,Object(a["h"])("p",null,[V,Object(a["h"])(s,{to:"/About"},{default:Object(a["F"])(()=>[G]),_:1}),K])]),Z])])}var Y={name:"QandA",data(){return{}}};Y.render=X;var ee=Y;const te=[{path:"/",name:"Home",component:()=>n.e("chunk-07debdde").then(n.bind(null,"bb51")),meta:{breadcrumb:"Home"}},{path:"/about",name:"About",component:()=>n.e("chunk-b4ebc04c").then(n.bind(null,"f820")),meta:{breadcrumb:"About"}},{path:"/Contributor",name:"Contributor",component:()=>n.e("chunk-1164a354").then(n.bind(null,"dd86")),meta:{breadcrumb:"Contributor"}},{path:"/Translation-assistance",name:"Assistance",component:()=>n.e("chunk-bf5182e2").then(n.bind(null,"f74e")),meta:{breadcrumb:"Assistance"}},{path:"/Translation-assistance/Translation-Tutorials",name:"Tutorials",component:()=>n.e("chunk-3d99be86").then(n.bind(null,"2d34"))},{path:"/ProgressQuery",name:"ProgressQuery",component:()=>n.e("chunk-b7ba9570").then(n.bind(null,"964f")),meta:{breadcrumb:"ProgressQuery",notFooter:!0}},{path:"/Wiki",name:"WikiMenuList",meta:{title:"目前還在測試中",breadcrumb:"Wiki",notFooter:!0},component:()=>n.e("chunk-69975d27").then(n.bind(null,"c89e")),children:[{path:"",components:{data:ee}},{path:"QandA",components:{data:ee}},{path:"AssistTranslation",components:{data:()=>n.e("chunk-89cd81f2").then(n.bind(null,"1b8e"))}},{path:"InstallAndUse",components:{data:()=>n.e("chunk-2d225de6").then(n.bind(null,"e5dd"))}},{path:"ModInfo",components:{data:()=>n.e("chunk-b0f7d498").then(n.bind(null,"38c0"))}},{path:"OtherInfo",components:{data:()=>n.e("chunk-2d0da7d0").then(n.bind(null,"6c8e"))}}]},{path:"/RPMTWUpdateMod",name:"RPMTWUpdateMod",component:()=>n.e("chunk-298855ed").then(n.bind(null,"752c"))},{path:"/install/version",name:"Version",component:()=>n.e("chunk-10c327a7").then(n.bind(null,"733e")),meta:{breadcrumb:"Version",notFooter:!0}},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>n.e("chunk-4bf2bc4a").then(n.bind(null,"4b62")),meta:{breadcrumb:"ProgressQuery"}},{path:"/atr1",name:"ATR1",component:()=>n.e("chunk-ed3fac88").then(n.bind(null,"a951"))}],ne=Object(F["a"])({history:Object(F["b"])("/RPMTW-Website/"),routes:te});ne.beforeEach((e,t,n)=>{document.title=e.meta.title||document.title,n()});var ae=ne,ce=n("5502"),oe=Object(ce["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(_).use(oe).use(oe).use(ae).mount("#app")},"5a72":function(e,t,n){"use strict";n("df95")},"5aad":function(e){e.exports=JSON.parse('{"plug.header.menu.home":"首頁","plug.header.menu.assistance":"協助翻譯","plug.header.menu.Wikipedia":"維基百科","plug.header.menu.tool":"實用工具","plug.header.menu.rank":"翻譯者排名","plug.header.menu.about":"關於我們","Home.include.public.DL-STAT":"立即下載","Home.include.public.read-more":"閱讀更多","Home.include.mod.name":"自動中文化更新模組","Home.include.mod.description":"體驗前所未見的模組翻譯，讓你的模組通通變中文吧！","Home.include.atr.name.0":"ATR 1 - All The RPMTW","Home.include.atr.name.1":"模組包","Home.include.atr.description":"1.17 全新模組包，結合各種元素，盡情在織物上探險吧！","Home.top12.title":"翻譯貢獻者前12名 - 感謝你們的貢獻","Home.top12.show-more":"查看更多翻譯貢獻者","Home.announcement.datas":["Classical Chinese: The Illusionary World of Siong -> Vernacular Chinese: The Fantasy World of Cabbage!?!?"],"Home.scroll.texts":["前所未見的模組繁中化","社群協力合作","翻譯全自動更新","跳脫傳統框架","遊戲內翻譯模組","專屬為您設計","與我們一起當個創世神！"]}')},6742:function(e){e.exports=JSON.parse("{}")},7702:function(e,t,n){"use strict";n("923e")},"8b64":function(e){e.exports=JSON.parse('[{"to":"/","name":"首頁","breadcrumb":"Home"},{"to":"/Translation-assistance","name":"協助翻譯","breadcrumb":"Assistance"},{"to":"/Wiki","name":"維基百科","breadcrumb":"Wiki"},{"to":"/ProgressQuery","name":"實用工具","breadcrumb":"ProgressQuery"},{"to":"/Contributor","name":"翻譯貢獻者排名","breadcrumb":"Contributor"},{"to":"/About","name":"關於我們","breadcrumb":"About"},{"to":"/install/version","name":"下載本模組","breadcrumb":"Version"}]')},9225:function(e,t,n){"use strict";var a=n("10ee"),c=n("6742"),o=n("5aad");t["a"]={set:{main:"zh_tw",langs:{zh_tw:"繁體中文",zh_cn:"简体中文",en_us:"English"}},getLang(){return localStorage.getItem("lang")||this.set.main},setLang(e){return localStorage.setItem("lang",e),window.location.reload()},i18nData:{zh_tw:a,zh_cn:c,en_us:o}}},9231:function(e,t,n){"use strict";n("fb69")},"923e":function(e,t,n){},df95:function(e,t,n){},fb69:function(e,t,n){}});
//# sourceMappingURL=app.72ae2e1c.js.map