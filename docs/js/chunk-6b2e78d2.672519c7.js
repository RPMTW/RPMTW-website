(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b2e78d2"],{"2f5f":function(e,t,n){},"733e":function(e,t,n){"use strict";n.r(t);var s=n("7a23"),o=n("96fc"),r=n.n(o),a=n("8019"),i=n.n(a);Object(s["v"])("data-v-63877a94");const c={id:"Test",class:"setList"},l=Object(s["f"])("p",{class:"txt-title"},"請選擇版本:",-1),f=["version"],b=Object(s["f"])("p",{class:"txt-title"},"請選擇模組平台:",-1),d=["platform"],p={style:{"text-align":"center"}},m={key:0},O=Object(s["h"])(" Q: "),v=Object(s["f"])("span",{style:{color:"red"}},[Object(s["h"])("什麼是模組平台(Mod Loader)"),Object(s["f"])("br")],-1),h=Object(s["h"])(" A: 模組平台就類似蘋果手機與安卓手機的概念，不同的架構製作而成，可以依據你需要的平台來下載。 "),j=[O,v,h],u=["href"],L={key:0,class:"txt-des"},A=Object(s["f"])("p",null,[Object(s["h"])(" 按下上方下載按鈕後 將會進入一個網頁 找到 "),Object(s["f"])("span",{style:{color:"red"}}," Download "),Object(s["h"])(" 按鈕即可下載 ")],-1),w=Object(s["f"])("img",{src:r.a,alt:""},null,-1),g=[A,w],D={key:1,class:"txt-description"},S={style:{color:"red"}},x=Object(s["h"])(" 如果您沒有安裝 RPMTW 的前置模組 Fabric API，請務必記得安裝歐!!"),y=Object(s["f"])("br",null,null,-1),k=["href"],Q=Object(s["f"])("img",{src:i.a,style:{width:"15em"},alt:""},null,-1),P=[Q],J={key:2,class:"txt-des"},B={style:{"foot-size":"18pt"}},F=Object(s["f"])("br",null,null,-1),q=Object(s["h"])(" 那麼請將此檔案放入該資料夾下的 mods 資料夾裡面即可！ ");function H(e,t,n,o,r,a){const i=Object(s["A"])("Gate");return Object(s["s"])(),Object(s["e"])("div",c,[Object(s["i"])(i,{nowLen:r.nowLen,okLen:"1",class:"nowLenData setVersion"},{default:Object(s["H"])(()=>[l,(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(r.datas.versions,(e,n)=>(Object(s["s"])(),Object(s["e"])("div",{key:n,version:n,class:Object(s["o"])([{select:e.select},"div-button"]),onClick:t[0]||(t[0]=(...e)=>a.versionSetSelect&&a.versionSetSelect(...e))},Object(s["C"])(n),11,f))),128))]),_:1},8,["nowLen"]),Object(s["i"])(i,{nowLen:r.nowLen,okLen:"2",class:"nowLenData"},{default:Object(s["H"])(()=>[b,(Object(s["s"])(!0),Object(s["e"])(s["a"],null,Object(s["y"])(r.datas.versions[r.finish.version]&&r.datas.versions[r.finish.version].platform,e=>(Object(s["s"])(),Object(s["e"])("div",{key:e,platform:e,class:Object(s["o"])([{select:r.datas.versions[r.finish.version].platformSelect===e},"div-button"]),onClick:t[1]||(t[1]=(...e)=>a.platformSetSelect&&a.platformSetSelect(...e))},Object(s["C"])(e),11,d))),128)),Object(s["f"])("strong",p,[!r.finish.platform&&r.finish.version?(Object(s["s"])(),Object(s["e"])("a",m,j)):Object(s["d"])("",!0)])]),_:1},8,["nowLen"]),Object(s["i"])(i,{nowLen:r.nowLen,okLen:"3",class:"nowLenData output"},{default:Object(s["H"])(()=>[Object(s["I"])(Object(s["f"])("a",{target:"_blank",href:r.datas.versions[r.finish.version]&&r.datas.versions[r.finish.version][r.finish.platform],class:"div-button",style:{"--styleMode-background-color":"rgb(45, 212, 191)",color:"black"}}," 點我下載: "+Object(s["C"])(`${r.finish.version} (${r.finish.platform})`),9,u),[[s["F"],r.datas.versions[r.finish.version]&&r.datas.versions[r.finish.version][r.finish.platform]]]),r.finish.platform?(Object(s["s"])(),Object(s["e"])("div",L,g)):Object(s["d"])("",!0),"Fabric"===r.finish.platform?(Object(s["s"])(),Object(s["e"])("div",D,[Object(s["f"])("p",S,[x,y,Object(s["f"])("a",{target:"_blank",style:{color:"var(--strong-color)"},class:"flex flex-down flex-item-center",href:{"1.16.x":"https://cdn.modrinth.com/data/P7dR8mSH/versions/0.36.0+1.16/fabric-api-0.36.0+1.16.jar","1.17.x":"https://cdn.modrinth.com/data/P7dR8mSH/versions/0.37.0+1.17/fabric-api-0.37.0+1.17.jar"}[r.finish.version]},P,8,k)])])):Object(s["d"])("",!0),r.finish.platform?(Object(s["s"])(),Object(s["e"])("div",J,[Object(s["f"])("p",B,[Object(s["h"])(" 模組下載完成後，請確定你已經安裝了 "+Object(s["C"])(r.finish.platform)+" ，並且沒有修改預設模組儲存位置，",1),F,q])])):Object(s["d"])("",!0)]),_:1},8,["nowLen"])])}Object(s["t"])();var V=n("ba64"),W=n("8de4");for(let E in W)W[E].select=!1,W[E].platformSelect=!1;var T={name:"Test",data(){return{nowLen:1,datas:{versions:W},finish:{version:null,platform:null}}},components:{Gate:V["default"]},methods:{addLen(e){this.nowLen<=parseInt(e.parent(".nowLenData").attr("okLen"))&&(this.nowLen+=1)},versionSetSelect(e){let t=this.datas.versions;e=$(e.target),Object.keys(t).forEach(e=>{t[e].select=!1}),t[e.attr("version")].select=!0,this.finish.platform=null,this.finish.version=e.attr("version"),this.addLen(e)},platformSetSelect(e){let t=this.datas.versions;e=$(e.target),Object.keys(t).forEach(e=>{t[e].platformSelect=null}),t[this.finish.version].platformSelect=e.attr("platform"),this.finish.platform=null,this.finish.platform=e.attr("platform"),this.addLen(e)}}};n("e56c");T.render=H,T.__scopeId="data-v-63877a94";t["default"]=T},8019:function(e,t,n){e.exports=n.p+"img/fabric_api_requires.3d882bd9.png"},"8b99":function(e,t,n){"use strict";n("2f5f")},"8de4":function(e){e.exports=JSON.parse('{"1.12.2":{"platform":["Forge"],"Forge":"https://modrinth.com/mod/rpmtw-update-mod/version/TaD9iJ3x"},"1.16.x":{"platform":["Forge","Fabric"],"Fabric":"https://modrinth.com/mod/rpmtw-update-mod/version/bVxgFBtx","Forge":"https://modrinth.com/mod/rpmtw-update-mod/version/eU9iYyKL"},"1.17.x":{"platform":["Forge","Fabric"],"Fabric":"https://modrinth.com/mod/rpmtw-update-mod/version/ZDL6TJc5","Forge":"https://modrinth.com/mod/rpmtw-update-mod/version/wtOKTD6j"}}')},"96fc":function(e,t){e.exports="data:image/png;base64,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"},ba64:function(e,t,n){"use strict";n.r(t);var s=n("7a23");const o=["okLen"];function r(e,t,n,r,a,i){return Object(s["s"])(),Object(s["e"])("div",{class:Object(s["o"])(["gate",{complete:parseInt(n.okLen)<n.nowLen,nowadays:parseInt(n.okLen)===n.nowLen,disable:parseInt(n.okLen)>n.nowLen}]),okLen:n.okLen},[Object(s["z"])(e.$slots,"default")],10,o)}var a={name:"Gate",data(){return{}},methods:{},props:{okLen:String,nowLen:Number},mounted(){}};n("8b99");a.render=r;t["default"]=a},e56c:function(e,t,n){"use strict";n("eca6")},eca6:function(e,t,n){}}]);
//# sourceMappingURL=chunk-6b2e78d2.672519c7.js.map