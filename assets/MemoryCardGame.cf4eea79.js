import{s as u,d as N,o as r,c,a as e,l as X,x as F,F as K,p as L,b as y,q as b,u as j,_ as Z,e as _,g as q,j as G,y as ee,z as se,h as x,A as ae,m as I,B as A,C as te,f as oe,D as R,w as M,T as P,v as z}from"./index.29d9790c.js";import{_ as re}from"./plugin-vue_export-helper.21dcd24c.js";var J="/joy-toys/assets/back.b39828d7.jpg",le="/joy-toys/assets/club_1.9f526916.jpg",ce="/joy-toys/assets/club_10.18df5cb8.jpg",ne="/joy-toys/assets/club_11.96368a3a.jpg",ie="/joy-toys/assets/club_12.5a96402b.jpg",de="/joy-toys/assets/club_13.4110cc95.jpg",_e="/joy-toys/assets/club_2.a7069933.jpg",me="/joy-toys/assets/club_3.4b6ccaf5.jpg",ue="/joy-toys/assets/club_4.5dd26e56.jpg",pe="/joy-toys/assets/club_5.5cac519e.jpg",ge="/joy-toys/assets/club_6.b0efbfd8.jpg",ye="/joy-toys/assets/club_7.30255c7c.jpg",ve="/joy-toys/assets/club_9.3dfaee9c.jpg",W="/joy-toys/assets/cover.d76f7e5a.jpg",be="/joy-toys/assets/diamond_1.587f3d76.jpg",fe="/joy-toys/assets/diamond_10.8b928304.jpg",je="/joy-toys/assets/diamond_11.ab91ed26.jpg",he="/joy-toys/assets/diamond_12.ab57c31a.jpg",ke="/joy-toys/assets/diamond_13.f4f9e100.jpg",$e="/joy-toys/assets/diamond_2.27ffd6b3.jpg",we="/joy-toys/assets/diamond_3.ce542990.jpg",Ce="/joy-toys/assets/diamond_4.adabb18c.jpg",Re="/joy-toys/assets/diamond_5.bb8a7af9.jpg",Me="/joy-toys/assets/diamond_6.a26854d7.jpg",Pe="/joy-toys/assets/diamond_7.aa188346.jpg",Te="/joy-toys/assets/diamond_8.8029c115.jpg",Ge="/joy-toys/assets/diamond_9.940337fa.jpg",Oe="/joy-toys/assets/heart_1.b350a950.jpg",Be="/joy-toys/assets/heart_11.c59fd848.jpg",Se="/joy-toys/assets/heart_12.e32756e9.jpg",xe="/joy-toys/assets/heart_2.8b0d551c.jpg",Fe="/joy-toys/assets/heart_3.5ea41b59.jpg",Ie="/joy-toys/assets/heart_4.95089233.jpg",ze="/joy-toys/assets/heart_5.2fde5397.jpg",Ae="/joy-toys/assets/heart_8.e3ff6799.jpg",Ee="/joy-toys/assets/spade_1.4a4ffee5.jpg",Ne="/joy-toys/assets/spade_10.5838be9f.jpg",Ke="/joy-toys/assets/spade_13.a04d7ea7.jpg",Le="/joy-toys/assets/spade_2.105e57fc.jpg",Ue="/joy-toys/assets/spade_3.44b48f5f.jpg",Ve="/joy-toys/assets/spade_4.9da7f7ab.jpg",De="/joy-toys/assets/spade_5.c6b0e989.jpg",He="/joy-toys/assets/spade_6.88b537c0.jpg",qe="/joy-toys/assets/spade_7.5ffcbe24.jpg",Je="/joy-toys/assets/spade_8.c1ac1c98.jpg",We="/joy-toys/assets/spade_9.6527ff1b.jpg",Ye="/joy-toys/assets/\u3042\u306A\u305F\u306E\u597D\u304D\u306A\u3068\u3053\u308D_piano.134add7f.mp3",Qe="/joy-toys/assets/start.18828009.ogg",Xe="/joy-toys/assets/correct.7e158d90.wav",Ze="/joy-toys/assets/incorrect.2dfeec65.wav",es="/joy-toys/assets/flipping.68f896f7.wav";const ss={class:"modal-wrap loading-warp"},as=e("div",{class:"modal-inner-warp"}," Loading... ",-1),ts=[as],os={__name:"MemoryCardGameLoading",setup(n){const t=u("isLoading"),a=u("cardKinds");async function l(){function o(s){let d=new Image;d.src=s}for(let s=0;s<a.value.length;s++)o(a.value[s].imgUrl)}return N(()=>{l().then(function(){function o(){switch(console.log("Loading..."),document.readyState){case"interactive":case"complete":t.value=!1,clearInterval(s),console.log("Ready!");break}}let s=setInterval(o,500)})}),(o,s)=>(r(),c("div",ss,ts))}},rs={},ls={class:"warn-size-wrap modal-wrap"},cs=e("div",{class:"modal-inner-warp"},[e("div",{class:"notice-wrap"},[e("span",{class:"material-symbols-outlined"},"screen_rotation"),e("p",null,"Please rotate your phone to landscape mode.")])],-1),ns=[cs];function is(n,t){return r(),c("div",ls,ns)}var ds=re(rs,[["render",is]]);const _s={class:"modal-wrap bg-music-warp"},ms={class:"modal-inner-warp"},us={class:"btn-wrap"},ps={__name:"MemoryCardGameBeginBGMusic",emits:["eventControlBGMusic"],setup(n,{emit:t}){const a=t;return u("isbgMusicPlaying"),(l,o)=>(r(),c("div",_s,[e("div",ms,[X(" Background Music "),e("div",us,[e("div",{onClick:o[0]||(o[0]=s=>a("eventControlBGMusic","on")),class:"btn style-black style-round size-large"},"ON"),e("div",{onClick:o[1]||(o[1]=s=>a("eventControlBGMusic","off")),class:"btn style-black style-round size-large"},"OFF")])])]))}};function U(n){for(let t=n.length-1;t>0;t--){let a=Math.floor(Math.random()*(t+1));[n[t],n[a]]=[n[a],n[t]]}}function gs(n,t){return n.second-t.second}const ys={class:"ready-bg-wrap card-wrap ready-bg-column"},vs={class:"card"},bs=["src"],fs={__name:"MemoryCardGameRandomBg",setup(n){const t=u("cardKinds"),a=F(()=>{document.documentElement.style.setProperty("--ready-bg-column",16/2);const o=t.value.slice();return U(o),o.slice(0,16)});return(l,o)=>(r(),c("div",ys,[(r(!0),c(K,null,L(a.value,s=>(r(),c("div",vs,[e("img",{src:s.imgUrl,alt:"card"},null,8,bs)]))),256))]))}},js={class:"ready-warp modal-wrap"},hs={class:"modal-inner-warp"},ks=e("img",{class:"front",src:W,alt:"card",rel:"preload"},null,-1),$s=e("img",{class:"back",src:Z,alt:"card",rel:"preload"},null,-1),ws=[ks,$s],Cs=e("h1",{class:"ready-caption"},"Cards Memory Game",-1),Rs={class:"bg-music-wrap"},Ms={__name:"MemoryCardGameReady",emits:["eventControlBGMusic","eventPlayAudio"],setup(n,{emit:t}){const a=t,l=u("isReady"),o=u("isRanksOpen"),s=u("isRulesOpen"),d=u("isIntroOpen"),p=u("isbgMusicPlaying");function m(){a("eventPlayAudio","start"),l.value=!1}function g(){a("eventPlayAudio","start"),o.value=!0}function O(){a("eventPlayAudio","start"),s.value=!0}function k(){a("eventPlayAudio","start"),d.value=!0}return(S,h)=>(r(),c("div",js,[e("div",hs,[y(fs),e("div",{onClick:m,class:"game-cover"},ws),Cs,e("div",{class:"btn-wrap"},[e("div",{onClick:O,class:"btn style-black style-round size-large"},"Rules"),e("div",{onClick:k,class:"btn style-black style-round size-large"},"View Cards"),e("div",{onClick:g,class:"btn style-black style-round size-large"},"Ranks")]),e("div",Rs,[e("div",{onClick:h[0]||(h[0]=B=>a("eventControlBGMusic","on")),class:b(["btn style-red style-round size-small",{active:j(p)}])},"ON",2),e("div",{onClick:h[1]||(h[1]=B=>a("eventControlBGMusic","off")),class:b(["btn style-red style-round size-small",{active:!j(p)}])},"OFF",2)])])]))}},Ps={class:"rules-warp modal-wrap"},Ts={class:"modal-inner-warp"},Gs={class:"language-btn-wrap"},Os={class:"game-rule-wrap"},Bs=q('<h2 class="rule-caption">\u7FFB\u7FFB\u724C\u5C0D\u5C0D\u78B0 \u6CE8\u610F\u4E8B\u9805</h2><ul class="rule-list"><li class="rule-item">3 \u5217 8 \u6B04 (24\u5F35) 12 \u7A2E\u5716\u6848\u7684\u7FFB\u7FFB\u724C\u5C0D\u5C0D\u78B0\u904A\u6232\u3002</li><li class="rule-item">\u904A\u6232\u898F\u5247\uFF1A\u5FC5\u9808\u9023\u7E8C\u7FFB\u958B\u5169\u5F35\u4E00\u6A23\u7684\u5716\u6848\uFF0C\u624D\u80FD\u6D88\u9664\u5361\u7247\u3002\u5834\u4E0A\u6240\u6709\u5361\u7247\u90FD\u6D88\u5931\u5F8C\u5373\u53EF\u7372\u52DD\u3002</li><li class="rule-item">\u8A08\u6642\u5236\uFF1A\u6309\u4E0B\u958B\u59CB\u904A\u6232\u5F8C\u5373\u958B\u59CB\u8A08\u6642\uFF0C\u82B1\u8CBB\u79D2\u6578\u8D8A\u5C11\u7684\u8A71\u6392\u540D\u8D8A\u9AD8\u3002</li><li class="rule-item">\u91CD\u65B0\u958B\u59CB\uFF1A\u6BCF\u6B21\u91CD\u65B0\u958B\u59CB\u90FD\u6703\u91CD\u65B0\u9078\u51FA 12 \u7A2E\u5716\u6848\u4E26\u6253\u4E82\u6392\u5E8F\u3002</li></ul>',2),Ss=[Bs],xs=q('<h2 class="rule-caption">Game rules</h2><ul class="rule-list"><li class="rule-item">3 rows and 8 columns (24 cards) 12 patterns.</li><li class="rule-item">The rules of the game: You must open two of the same patterns in a row to eliminate the cards. Win after all the cards on the field disappear.</li><li class="rule-item">Timing system: The timing will start after you press the start button to start the game. The less seconds it takes, the higher the ranking.</li><li class="rule-item">Restart: Each time you restart, 12 patterns will be re-selected and the order will be random.</li></ul>',2),Fs=[xs],Is={__name:"MemoryCardGameRule",setup(n){const t=u("isRulesOpen"),a=_(!1);return(l,o)=>(r(),c("div",Ps,[e("div",Ts,[e("div",Gs,[e("div",{onClick:o[0]||(o[0]=s=>a.value=!1),class:b(["language-btn btn style-red style-square size-small",{active:!a.value}])},"\u4E2D",2),e("div",{onClick:o[1]||(o[1]=s=>a.value=!0),class:b(["language-btn btn style-red style-square size-small",{active:a.value}])},"EN",2)]),e("div",Os,[e("div",{class:b(["game-rule",{active:!a.value}])},Ss,2),e("div",{class:b(["game-rule",{active:a.value}])},Fs,2)]),e("div",{onClick:o[2]||(o[2]=s=>t.value=!1),class:"btn style-red style-round size-small"},"Back")])]))}},zs={class:"card-intro-warp modal-wrap"},As={class:"modal-inner-warp"},Es={class:"card-intro-inner-wrap"},Ns=["onClick"],Ks=["src"],Ls={__name:"MemoryCardGameCardIntro",setup(n){const t=u("isIntroOpen"),a=u("cardKinds"),l=_(null);return(o,s)=>(r(),c("div",zs,[e("div",As,[e("div",Es,[(r(!0),c(K,null,L(j(a),(d,p)=>(r(),c("div",{class:b(["card",{active:l.value==p}]),onClick:m=>l.value==null?l.value=p:l.value=null},[e("img",{src:d.imgUrl,alt:"card"},null,8,Ks)],10,Ns))),256))]),e("div",{onClick:s[0]||(s[0]=d=>t.value=!1),class:"btn style-red style-round size-small"},"Back")])]))}};var Us="/joy-toys/assets/reward_color.8ff89724.png",Vs="/joy-toys/assets/reward.974f3a4c.jpg";const Ds={class:"modal-inner-warp"},Hs={class:"left-wrap"},qs={class:"reward-content"},Js=e("img",{src:Us,alt:"color",rel:"preload"},null,-1),Ws=e("img",{src:Vs,alt:"line",class:"line-img",rel:"preload"},null,-1),Ys=[Js,Ws],Qs={class:"right-wrap"},Xs=e("h2",{class:"modal-caption"},"Ranks",-1),Zs={class:"history-wrap"},ea={key:0},sa={key:1},aa={key:0,class:"material-symbols-outlined"},ta={key:1,class:"material-symbols-outlined"},oa={class:"item-name"},ra={class:"item-time"},la={__name:"MemoryCardGameRanks",setup(n){const t=u("playerScores"),a=u("isRanksOpen"),l=_(!1);return(o,s)=>(r(),c("div",{class:b(["game-rank-wrap modal-wrap",{show:j(a)}])},[e("div",Ds,[e("div",Hs,[e("div",qs,[e("div",{class:b(["image-wrap",{"line-ver":l.value}]),onMouseenter:s[0]||(s[0]=d=>l.value=!0),onMouseleave:s[1]||(s[1]=d=>l.value=!1)},Ys,34)])]),e("div",Qs,[Xs,e("div",Zs,[j(t).length<=0?(r(),c("p",ea,"No record")):(r(),c("ul",sa,[(r(!0),c(K,null,L(j(t),(d,p)=>(r(),c("li",null,[p<3?(r(),c("span",aa,"trophy")):(r(),c("span",ta,"person")),e("span",oa,G(d.playerName),1),e("span",ra,G(d.second)+"s",1)]))),256))]))]),e("div",{onClick:s[2]||(s[2]=d=>a.value=!1),class:"btn style-red style-round size-small"},"Back")])])],2))}};var ca="/joy-toys/assets/kana_2.2e8977d6.png",na="/joy-toys/assets/kana_3.a6d0ee05.png";function E(n){return n<10?`0${n}`:n}const ia={class:"modal-inner-warp"},da=e("div",{class:"modal-header"},[e("h2",{class:"modal-caption"},"Time Up!")],-1),_a={class:"modal-content"},ma={class:"modal-image"},ua={key:0,src:ca,alt:"kana",rel:"preload"},pa={key:1,src:na,alt:"kana",rel:"preload"},ga={class:"modal-text"},ya={class:"js-game-over-des modal-des"},va=e("label",{for:"player-name"},"Please enter your name:",-1),ba={__name:"MemoryCardGameFinish",props:ee({isRecordScore:Boolean,timeRecords:Object},{isReady:{},isReadyModifiers:{}}),emits:["update:isReady"],setup(n){const t=n,a=se(n,"isReady"),l=u("playerScores"),o=u("isRanksOpen"),s=_({name:"",level:"",spend_secs:""});function d(){if(s.name==""){alert("Please enter your name!");return}const p={playerName:s.value.name,second:s.value.spend_secs};l.value.push(p),l.value.sort(gs),localStorage.setItem("scores",JSON.stringify(l.value)),a.value=!0,o.value=!0}return N(()=>{s.value.spend_secs=t.timeRecords.min*60+t.timeRecords.sec,s.value.spend_secs<=50?s.value.level="Excellent!!":s.value.spend_secs<=65?s.value.level="Good!":s.value.spend_secs<=70?s.value.level="Fair!":s.value.spend_secs<=100?s.value.level="Poor...":s.value.level="Bad..."}),(p,m)=>(r(),c("div",{class:b(["game-over-wrap modal-wrap",{show:n.isRecordScore}])},[e("div",ia,[da,e("div",_a,[e("div",ma,[s.value.spend_secs<99?(r(),c("img",ua)):(r(),c("img",pa))]),e("div",ga,[e("p",ya,G(s.value.level)+" You spend "+G(j(E)(t.timeRecords.min))+" minute(s) "+G(j(E)(t.timeRecords.sec))+"second(s)! ",1),va,x(e("input",{type:"text","onUpdate:modelValue":m[0]||(m[0]=g=>s.value.name=g)},null,512),[[ae,s.value.name]])])]),e("div",{class:"modal-footer"},[e("div",{onClick:d,class:"btn style-black style-round size-large"},"Submit")])])],2))}},fa={class:"game-wrap"},ja={class:"main-panel"},ha={key:0,class:"loading-notice"},ka=["onClick"],$a=e("img",{class:"card-back",src:J,draggable:"false",rel:"preload"},null,-1),wa=["src"],Ca={class:"control-panel"},Ra={class:"time-wrap"},Ma=e("span",null,"Spend Time",-1),Pa={class:"timer"},Ta=12,Ga={__name:"MemoryCardGamePlaying",emits:["eventPlayAudio"],setup(n,{emit:t}){const a=t,l=u("isReady"),o=u("cardKinds"),s=_(null),d=_([]),p=_(null),m=_({min:0,sec:0}),g=F(()=>d.value.filter(v=>v.isHide==!1&&v.isOpen==!0)),O=F(()=>d.value.filter(v=>v.isHide==!1)),k=_(!1),S=F(()=>!(O.value.length>0)),h=_(!1);async function B(){const v=o.value.slice();U(v);let $=v.slice(0,Ta);const i=$.concat($);U(i),i.forEach((C,H)=>{d.value.push({id:H,type:C.imgName,url:C.imgUrl,isOpen:!1,isFlippedToFront:!1,isFlippedToBack:!1,isHide:!1})})}function w(v,$){d.value.forEach(i=>{if(i.id==v)switch($){case"open":i.isFlippedToBack=!1,i.isFlippedToFront=!0,setTimeout(()=>{i.isOpen=!0},100);break;case"closed":i.isFlippedToFront=!1,i.isFlippedToBack=!0,setTimeout(()=>{i.isOpen=!1},100);break;case"show":i.isHide=!1;break;case"hide":i.isHide=!0;break}})}function f(v,$){g.value.length<2&&(w($,"open"),a("eventPlayAudio","flipping"),setTimeout(()=>{if(g.value.length==2){const i=g.value[0].id,C=g.value[1].id;g.value[0].type==g.value[1].type?setTimeout(()=>{w(i,"hide"),w(C,"hide"),a("eventPlayAudio","correct"),S.value&&(T("end"),h.value=!0)},500):setTimeout(()=>{w(i,"closed"),w(C,"closed"),a("eventPlayAudio","incorrect")},500)}},150))}function T(v){switch(v){case"start":p.value=setInterval(function(){m.value.sec++,m.value.sec>=60&&(m.value.sec=0,m.value.min++)},1e3);break;case"end":clearInterval(p.value);break}}async function V(){await B(),oe(()=>{k.value=!0,T("start")})}function D(){k.value=!1,d.value=[],T("end"),m.value.sec=0,m.value.min=0}function Y(){a("eventPlayAudio","start"),D(),setTimeout(()=>{V()},500)}function Q(){a("eventPlayAudio","start"),D(),l.value=!0}return N(async()=>{console.log("game onMounted"),V()}),(v,$)=>(r(),c("div",null,[e("div",fa,[e("section",ja,[k.value?I("",!0):(r(),c("h2",ha,"Loading...")),e("div",{class:b(["card-wrap game-column",{show:k.value}])},[(r(!0),c(K,null,L(d.value,(i,C)=>(r(),c("div",{key:C,onClick:H=>f(C,i.id),ref_for:!0,ref_key:"cardItems",ref:s,class:b(["card",{open:i.isOpen,hide:i.isHide,"flipped-b-to-f":i.isFlippedToFront,"flipped-f-to-b":i.isFlippedToBack}])},[$a,e("img",{class:"card-front",src:i.url,draggable:"false",rel:"preload"},null,8,wa)],10,ka))),128))],2)]),e("section",Ca,[e("div",Ra,[Ma,e("span",Pa,G(j(E)(m.value.min))+":"+G(j(E)(m.value.sec)),1)]),e("div",{class:"btn-wrap"},[e("div",{onClick:Y,class:"btn style-black style-round size-large"},"RESTART"),e("div",{onClick:Q,class:"btn style-black style-round size-large"},"BACK")])])]),h.value?(r(),A(ba,{key:0,isRecordScore:h.value,timeRecords:m.value,isReady:j(l),"onUpdate:isReady":$[0]||($[0]=i=>te(l)?l.value=i:null)},null,8,["isRecordScore","timeRecords","isReady"])):I("",!0)]))}},Oa="cover",Ba="back",Sa=["club_1","club_2","club_3","club_4","club_5","club_6","club_7","club_9","club_10","club_11","club_12","club_13","diamond_1","diamond_2","diamond_3","diamond_4","diamond_5","diamond_6","diamond_7","diamond_8","diamond_9","diamond_10","diamond_11","diamond_12","diamond_13","heart_1","heart_2","heart_3","heart_4","heart_5","heart_8","heart_11","heart_12","spade_1","spade_2","spade_3","spade_4","spade_5","spade_6","spade_7","spade_8","spade_9","spade_10","spade_13"];var xa={game_cover:Oa,card_back:Ba,card_fronts:Sa};const Fa={class:"memory-card-game"},Ia=e("source",{src:Ye,type:"audio/mpeg"},null,-1),za=[Ia],Aa=e("source",{src:Qe,type:"audio/ogg"},null,-1),Ea=[Aa],Na=e("source",{src:Xe,type:"audio/wav"},null,-1),Ka=[Na],La=e("source",{src:Ze,type:"audio/wav"},null,-1),Ua=[La],Va=e("source",{src:es,type:"audio/wav"},null,-1),Da=[Va],Ja={__name:"MemoryCardGame",setup(n){const t=_(null),a=_(null),l=_(null),o=_(null),s=_(null),d=F(()=>{const f=[];return xa.card_fronts.forEach(T=>{f.push({imgName:T,imgUrl:new URL({"/src/assets/images/memory-card-game/card/back.jpg":J,"/src/assets/images/memory-card-game/card/club_1.jpg":le,"/src/assets/images/memory-card-game/card/club_10.jpg":ce,"/src/assets/images/memory-card-game/card/club_11.jpg":ne,"/src/assets/images/memory-card-game/card/club_12.jpg":ie,"/src/assets/images/memory-card-game/card/club_13.jpg":de,"/src/assets/images/memory-card-game/card/club_2.jpg":_e,"/src/assets/images/memory-card-game/card/club_3.jpg":me,"/src/assets/images/memory-card-game/card/club_4.jpg":ue,"/src/assets/images/memory-card-game/card/club_5.jpg":pe,"/src/assets/images/memory-card-game/card/club_6.jpg":ge,"/src/assets/images/memory-card-game/card/club_7.jpg":ye,"/src/assets/images/memory-card-game/card/club_9.jpg":ve,"/src/assets/images/memory-card-game/card/cover.jpg":W,"/src/assets/images/memory-card-game/card/diamond_1.jpg":be,"/src/assets/images/memory-card-game/card/diamond_10.jpg":fe,"/src/assets/images/memory-card-game/card/diamond_11.jpg":je,"/src/assets/images/memory-card-game/card/diamond_12.jpg":he,"/src/assets/images/memory-card-game/card/diamond_13.jpg":ke,"/src/assets/images/memory-card-game/card/diamond_2.jpg":$e,"/src/assets/images/memory-card-game/card/diamond_3.jpg":we,"/src/assets/images/memory-card-game/card/diamond_4.jpg":Ce,"/src/assets/images/memory-card-game/card/diamond_5.jpg":Re,"/src/assets/images/memory-card-game/card/diamond_6.jpg":Me,"/src/assets/images/memory-card-game/card/diamond_7.jpg":Pe,"/src/assets/images/memory-card-game/card/diamond_8.jpg":Te,"/src/assets/images/memory-card-game/card/diamond_9.jpg":Ge,"/src/assets/images/memory-card-game/card/heart_1.jpg":Oe,"/src/assets/images/memory-card-game/card/heart_11.jpg":Be,"/src/assets/images/memory-card-game/card/heart_12.jpg":Se,"/src/assets/images/memory-card-game/card/heart_2.jpg":xe,"/src/assets/images/memory-card-game/card/heart_3.jpg":Fe,"/src/assets/images/memory-card-game/card/heart_4.jpg":Ie,"/src/assets/images/memory-card-game/card/heart_5.jpg":ze,"/src/assets/images/memory-card-game/card/heart_8.jpg":Ae,"/src/assets/images/memory-card-game/card/spade_1.jpg":Ee,"/src/assets/images/memory-card-game/card/spade_10.jpg":Ne,"/src/assets/images/memory-card-game/card/spade_13.jpg":Ke,"/src/assets/images/memory-card-game/card/spade_2.jpg":Le,"/src/assets/images/memory-card-game/card/spade_3.jpg":Ue,"/src/assets/images/memory-card-game/card/spade_4.jpg":Ve,"/src/assets/images/memory-card-game/card/spade_5.jpg":De,"/src/assets/images/memory-card-game/card/spade_6.jpg":He,"/src/assets/images/memory-card-game/card/spade_7.jpg":qe,"/src/assets/images/memory-card-game/card/spade_8.jpg":Je,"/src/assets/images/memory-card-game/card/spade_9.jpg":We}[`/src/assets/images/memory-card-game/card/${T}.jpg`],self.location)})}),f}),p=_(!0),m=_(null),g=_(!0),O=_(!1),k=_(!1),S=_(!1);R("isLoading",p),R("isbgMusicPlaying",m),R("isReady",g),R("isRulesOpen",O),R("isIntroOpen",k),R("isRanksOpen",S),R("cardKinds",d);const h=_(JSON.parse(localStorage.getItem("scores"))||[]);R("playerScores",h);function B(f){switch(f){case"on":t.value.play(),m.value=!0;break;case"off":t.value.pause(),m.value=!1;break}}function w(f){switch(f){case"start":a.value.currentTime=0,a.value.play();break;case"correct":l.value.currentTime=0,l.value.play();break;case"incorrect":o.value.currentTime=0,o.value.play();break;case"flipping":s.value.currentTime=0,s.value.play();break}}return N(()=>{window.addEventListener("contextmenu",f=>{f.preventDefault()})}),(f,T)=>(r(),c("div",Fa,[y(P,null,{default:M(()=>[y(ds)]),_:1}),y(P,null,{default:M(()=>[p.value?(r(),A(os,{key:0})):I("",!0)]),_:1}),y(P,null,{default:M(()=>[m.value==null?(r(),A(ps,{key:0,onEventControlBGMusic:B})):I("",!0)]),_:1}),y(P,null,{default:M(()=>[x(y(Is,null,null,512),[[z,O.value]])]),_:1}),y(P,null,{default:M(()=>[x(y(Ls,null,null,512),[[z,k.value]])]),_:1}),y(P,null,{default:M(()=>[x(y(Ms,{onEventControlBGMusic:B,onEventPlayAudio:w},null,512),[[z,g.value]])]),_:1}),y(P,null,{default:M(()=>[g.value?I("",!0):(r(),A(Ga,{key:0,onEventPlayAudio:w}))]),_:1}),y(P,null,{default:M(()=>[x(y(la,null,null,512),[[z,S.value]])]),_:1}),e("audio",{ref_key:"bgPlayer",ref:t,loop:"",preload:"auto"},za,512),e("audio",{ref_key:"startPlayer",ref:a,preload:"auto"},Ea,512),e("audio",{ref_key:"correctPlayer",ref:l,preload:"auto"},Ka,512),e("audio",{ref_key:"incorrectPlayer",ref:o,preload:"auto"},Ua,512),e("audio",{ref_key:"flippingPlayer",ref:s,preload:"auto"},Da,512)]))}};export{Ja as default};
