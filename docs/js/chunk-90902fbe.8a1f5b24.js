(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90902fbe"],{1302:function(e,t,n){},"2f5f":function(e,t,n){},"733e":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),s=n("96fc"),r=n.n(s);const a=Object(o["H"])("data-v-bbb726ee");Object(o["t"])("data-v-bbb726ee");const i={id:"Test",class:"setList"},c=Object(o["h"])("p",{class:"txt-title"},"請選擇版本:",-1),l=Object(o["h"])("p",{class:"txt-title"},"請選擇模組平台:",-1),b={style:{"text-align":"center"}},f={key:0},d=Object(o["g"])(" Q: "),p=Object(o["h"])("span",{style:{color:"red"}},[Object(o["g"])("什麼是模組平台(Mod Loader)"),Object(o["h"])("br")],-1),m=Object(o["g"])(" A: 模組平台就類似蘋果手機與安卓手機的概念，不同的架構製作而成，可以依據你需要的平台來下載。 "),h={key:0,class:"txt-des"},O=Object(o["h"])("p",null,[Object(o["g"])(" 按下上方下載按鈕後 將會進入一個網頁 找到 "),Object(o["h"])("span",{style:{color:"red"}}," Download "),Object(o["g"])(" 按鈕即可下載 ")],-1),v=Object(o["h"])("img",{src:r.a,alt:""},null,-1),j={key:1,class:"txt-description"},u={style:{color:"red"}},L=Object(o["g"])(" 如果您沒有安裝RPMTW的前置模組 Fabric API，請務必記得安裝歐!!"),A=Object(o["h"])("br",null,null,-1),w={key:2,class:"txt-des"},g={style:{"foot-size":"18pt"}},S=Object(o["h"])("br",null,null,-1),D=Object(o["g"])(" 那麼請將此檔案放入該資料夾下的 mods 資料夾裡面即可！ ");Object(o["r"])();const Q=a((e,t,n,s,r,Q)=>{const q=Object(o["y"])("Gate");return Object(o["q"])(),Object(o["d"])("div",i,[Object(o["h"])(q,{nowLen:r.nowLen,okLen:"1",class:"nowLenData setVersion"},{default:a(()=>[c,(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(r.datas.versions,(e,n)=>(Object(o["q"])(),Object(o["d"])("div",{key:n,version:n,class:[{select:e.select},"div-button"],onClick:t[1]||(t[1]=(...e)=>Q.versionSetSelect&&Q.versionSetSelect(...e))},Object(o["A"])(n),11,["version"]))),128))]),_:1},8,["nowLen"]),Object(o["h"])(q,{nowLen:r.nowLen,okLen:"2",class:"nowLenData"},{default:a(()=>[l,(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(r.datas.versions[r.finish.version]&&r.datas.versions[r.finish.version].platform,e=>(Object(o["q"])(),Object(o["d"])("div",{key:e,platform:e,class:[{select:r.datas.versions[r.finish.version].platformSelect===e},"div-button"],onClick:t[2]||(t[2]=(...e)=>Q.platformSetSelect&&Q.platformSetSelect(...e))},Object(o["A"])(e),11,["platform"]))),128)),Object(o["h"])("strong",b,[!r.finish.platform&&r.finish.version?(Object(o["q"])(),Object(o["d"])("a",f,[d,p,m])):Object(o["e"])("",!0)])]),_:1},8,["nowLen"]),Object(o["h"])(q,{nowLen:r.nowLen,okLen:"3",class:"nowLenData output"},{default:a(()=>[Object(o["G"])(Object(o["h"])("a",{target:"_blank",href:r.datas.versions[r.finish.version]&&r.datas.versions[r.finish.version][r.finish.platform],class:"div-button"}," 點我下載: "+Object(o["A"])(`${r.finish.version} (${r.finish.platform})`),9,["href"]),[[o["D"],r.datas.versions[r.finish.version]&&r.datas.versions[r.finish.version][r.finish.platform]]]),r.finish.platform?(Object(o["q"])(),Object(o["d"])("div",h,[O,v])):Object(o["e"])("",!0),"fabric"===r.finish.platform?(Object(o["q"])(),Object(o["d"])("div",j,[Object(o["h"])("p",u,[L,A,Object(o["h"])("a",{target:"_blank",style:{color:"var(--strong-color)"},href:{"1.16.x":"https://cdn.modrinth.com/data/P7dR8mSH/versions/0.36.0+1.16/fabric-api-0.36.0+1.16.jar","1.17.x":"https://cdn.modrinth.com/data/P7dR8mSH/versions/0.37.0+1.17/fabric-api-0.37.0+1.17.jar"}[r.finish.version]}," 點我安裝 Fabric API ",8,["href"])])])):Object(o["e"])("",!0),r.finish.platform?(Object(o["q"])(),Object(o["d"])("div",w,[Object(o["h"])("p",g,[Object(o["g"])(" 模組下載完成後，請確定你已經安裝了 "+Object(o["A"])(r.finish.platform)+" ，並且沒有修改預設模組儲存位置，",1),S,D])])):Object(o["e"])("",!0)]),_:1},8,["nowLen"])])});var q=n("ba64"),y=n("8de4");for(let x in y)y[x].select=!1,y[x].platformSelect=!1;var k={name:"Test",data(){return{nowLen:1,datas:{versions:y},finish:{version:null,platform:null}}},components:{Gate:q["default"]},methods:{addLen(e){this.nowLen<=parseInt(e.parent(".nowLenData").attr("okLen"))&&(this.nowLen+=1)},versionSetSelect(e){let t=this.datas.versions;e=$(e.target),Object.keys(t).forEach(e=>{t[e].select=!1}),t[e.attr("version")].select=!0,this.finish.platform=null,this.finish.version=e.attr("version"),this.addLen(e)},platformSetSelect(e){let t=this.datas.versions;e=$(e.target),Object.keys(t).forEach(e=>{t[e].platformSelect=null}),t[this.finish.version].platformSelect=e.attr("platform"),this.finish.platform=null,this.finish.platform=e.attr("platform"),this.addLen(e)}}};n("9617");k.render=Q,k.__scopeId="data-v-bbb726ee";t["default"]=k},"8b99":function(e,t,n){"use strict";n("2f5f")},"8de4":function(e){e.exports=JSON.parse('{"1.12.2":{"platform":["forge"],"forge":"https://modrinth.com/mod/rpmtw-update-mod/version/O0yjj2pa"},"1.16.x":{"platform":["forge","fabric"],"fabric":"https://modrinth.com/mod/rpmtw-update-mod/version/iJltMonl","forge":"https://modrinth.com/mod/rpmtw-update-mod/version/EJu0VuJg"},"1.17.x":{"platform":["forge","fabric"],"fabric":"https://modrinth.com/mod/rpmtw-update-mod/version/L2lMyX5i","forge":"https://modrinth.com/mod/rpmtw-update-mod/version/frGQy5Js"}}')},9617:function(e,t,n){"use strict";n("1302")},"96fc":function(e,t){e.exports="data:image/png;base64,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"},ba64:function(e,t,n){"use strict";n.r(t);var o=n("7a23");function s(e,t,n,s,r,a){return Object(o["q"])(),Object(o["d"])("div",{class:["gate",{complete:parseInt(n.okLen)<n.nowLen,nowadays:parseInt(n.okLen)===n.nowLen,disable:parseInt(n.okLen)>n.nowLen}],okLen:n.okLen},[Object(o["x"])(e.$slots,"default")],10,["okLen"])}var r={name:"Gate",data(){return{}},methods:{},props:{okLen:String,nowLen:Number},mounted(){}};n("8b99");r.render=s;t["default"]=r}}]);
//# sourceMappingURL=chunk-90902fbe.8a1f5b24.js.map