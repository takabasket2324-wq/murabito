(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const ys=[{id:"name",text:"名前は？"},{id:"job",text:"仕事は？"},{id:"yesterday",text:"きのう なにしてた？"}],Bn={guard:{label:"門番",color:9279918,speedMul:.8,replyMs:[350,650],gestureWord:"じろ じろ",lines:{name:["わたしは {name}。 この村の 門番だ。","……{name}だ。 用が ないなら 通りなさい。"],job:["門番だ。 あやしい者は ここを 通さん。","見ての とおり 門の 見張りだ。"],yesterday:["きのうも 一日 ここに 立っていた。","夜まで 門の番を していた。 異常は なかったぞ。"]}},shopkeeper:{label:"店番",color:15320170,speedMul:.8,replyMs:[250,550],gestureWord:"ふき ふき",lines:{name:["{name}よ。 道具屋を やってるの。","いらっしゃい！ {name}の 店へ ようこそ。"],job:["道具屋よ。 やくそうなら 安く しとくわ。","店番ね。 きょうは お客が 少なくて。"],yesterday:["きのうは 仕入れの 帳簿を つけてたわ。","一日じゅう 店に いたわよ。 ひまだったけど。"]}},blacksmith:{label:"鍛冶屋",color:6050928,speedMul:.8,replyMs:[450,850],gestureWord:"カン カン",lines:{name:["{name}だ。 鍛冶屋を やってる。","おう {name}だ。 なにか 打ってほしいのか？"],job:["鍛冶屋だ。 剣でも クワでも 打つぞ。","見りゃ わかるだろ。 鉄を 打つのが 仕事だ。"],yesterday:["きのうは クワを 三本 打った。 腕が いてえ。","炉の火を 一日じゅう 見てた。"]}},peddler:{label:"行商人",color:16032353,speedMul:1.15,replyMs:[200,450],gestureWord:"よいしょ",lines:{name:["{name}と 申します。 旅の 行商人で ございます。","{name}です。 お安く しときますよ。"],job:["行商人です。 村じゅうを まわって 売り歩いてます。","商いですよ。 きょうは 布と 塩を。"],yesterday:["きのうは となり町から 荷を はこんで きました。","村を ひとまわりして 酒場で 一杯 やりました。"]}},child:{label:"子ども",color:16756684,speedMul:1.6,replyMs:[150,350],gestureWord:"ぴょん ぴょん",lines:{name:["{name}だよ！","えー {name}！ おじさん だれ？"],job:["しごと？ ないよ！ あそぶのが しごと！","おてつだい！ たまにね。"],yesterday:["きのうはね 井戸の まわりで かけっこした！","ともだちと かくれんぼ してたよ！"]}},drunk:{label:"酔っぱらい",color:11868062,speedMul:.7,replyMs:[900,1900],gestureWord:"ヒック",lines:{name:["ヒック…… {name}…… だったかな。","なまえぇ？ {name}だよぉ…… たぶん。"],job:["しごとぉ？ 飲むのが 仕事だぁ…… ヒック。","むかしは…… なんだったかなぁ。"],yesterday:["きのう？ ……おぼえてねぇ…… ヒック。","酒場に いた…… それだけは たしかだ……。"]}},farmer:{label:"農夫",color:9485933,speedMul:1,replyMs:[450,900],gestureWord:"ザク ザク",lines:{name:["{name}だ。 畑を やってる。","{name}だよ。 土いじりが 専門さ。"],job:["農夫だ。 麦と イモを 育ててる。","畑仕事だ。 ことしは 出来が いい。"],yesterday:["きのうは 朝から 畑で 草とりさ。","井戸から 水を くんで 畑に まいてた。"]}},priest:{label:"神父",color:16316922,speedMul:.8,replyMs:[600,1100],gestureWord:"いのり…",lines:{name:["{name}と 申します。 教会の 者です。","神父の {name}です。 神の ご加護を。"],job:["この教会で 神に お仕えして おります。","神父です。 朝と 夕に 鐘を ならします。"],yesterday:["きのうは 祈りを ささげ 鐘を ならしました。","村人の 相談に のって おりました。"]}},innkeeper:{label:"女将",color:15167313,speedMul:.9,replyMs:[250,550],gestureWord:"キュッ キュッ",lines:{name:["{name}よ。 酒場の おかみ。","あら {name}よ。 一杯 どう？"],job:["酒場を きりもり してるわ。","おかみよ。 酔っぱらいの 世話で 大いそがし。"],yesterday:["きのうも 夜おそくまで 店を あけてたわ。","酔っぱらいが 飲みすぎて たいへんだったわよ。"]}},elder:{label:"長老",color:13481179,speedMul:.5,replyMs:[1e3,1800],gestureWord:"うむ うむ",lines:{name:["わしは {name}。 この村の 長老じゃ。","{name}じゃ。 耳が 遠くてのう。"],job:["長老じゃよ。 村の まとめ役じゃ。","もう 隠居の 身じゃ。 若い者に まかせておる。"],yesterday:["きのうは 家で 昔話を 聞かせておった。","井戸まで 散歩した くらいかのう。"]}},fisher:{label:"漁師",color:4770532,speedMul:1,replyMs:[500,950],gestureWord:"ひゅんっ",lines:{name:["{name}だ。 池で 魚を とってる。","おれか？ {name}だ。"],job:["漁師だ。 池の 魚を とって 売ってる。","魚とりさ。 さいきんは つれねえが。"],yesterday:["きのうは 朝から 池に 網を はってた。","池の ほとりで 一日じゅう つりを してた。"]}},housewife:{label:"主婦",color:16766629,speedMul:1,replyMs:[300,650],gestureWord:"ふう…",lines:{name:["{name}よ。 そこの 家に 住んでるの。","{name}です。 なにか ご用？"],job:["主婦よ。 家の ことで 手いっぱい。","家事と 子育てね。"],yesterday:["きのうは 洗たくと 井戸の 水くみ。","一日じゅう 家の そうじを してたわ。"]}},innhost:{label:"宿屋のあるじ",color:7166330,speedMul:.9,replyMs:[350,700],gestureWord:"ごし ごし",lines:{name:["{name}だ。 宿屋の あるじを やってる。","ようこそ 旅の人。 {name}と いいます。"],job:["宿屋だよ。 一晩 とまって いくかい？","宿の あるじさ。 ベッドを ととのえるのが 仕事だ。"],yesterday:["きのうは 旅人が ふたり とまって いったよ。","一日じゅう シーツを 洗って ほしていた。"]}},stablehand:{label:"馬番",color:12348453,speedMul:1.1,replyMs:[300,600],gestureWord:"ザッ ザッ",lines:{name:["{name}っす。 馬小屋の 世話を してます。","おいら {name}。 馬番だよ。"],job:["馬番っす。 エサやりと ブラシがけが 仕事で。","馬小屋の 番さ。 干し草を はこぶのが 大変でね。"],yesterday:["きのうは 一日 干し草を つんでたっす。","馬小屋の そうじで 日が くれたよ。"]}},vendor:{label:"屋台の店主",color:13935475,speedMul:.9,replyMs:[250,500],gestureWord:"らっしゃい",lines:{name:["{name}だよ。 そこの 屋台を やってるんだ。","らっしゃい！ {name}の 屋台へ ようこそ。"],job:["屋台だよ。 とれたての 野菜と くだものさ。","物売りさ。 きょうは リンゴが おすすめだよ。"],yesterday:["きのうは 朝から 屋台で 声を からしてたよ。","畑で 仕入れを して 屋台に ならべてた。"]}}},it=(s,t,e,n)=>({tx:s,ty:t,wait:e,face:n}),dl=[{id:"v01",name:"ガルド",role:"guard",route:[it(3,13,5e3,"E"),it(3,15,5e3,"E")]},{id:"v02",name:"ボルグ",role:"guard",route:[it(51,13,6e3,"W"),it(51,15,4e3,"W")]},{id:"v03",name:"マーサ",role:"shopkeeper",route:[it(9,7,9e3,"S"),it(9,10,4e3,"S")]},{id:"v04",name:"ドワン",role:"blacksmith",route:[it(35,8,7e3,"W"),it(34,11,4e3,"S"),it(33,9,3e3)]},{id:"v05",name:"ピッポ",role:"peddler",route:[it(5,6,2e3),it(13,6,1e3),it(20,7,2e3),it(28,7,1e3),it(31,4,2500),it(37,10,2e3),it(45,8,2e3),it(35,18,1e3),it(28,18,2e3),it(20,18,1e3),it(25,29,2500),it(13,17,2e3),it(5,17,1e3),it(5,11,1500)]},{id:"v06",name:"ミミ",role:"child",route:[it(18,12,500),it(23,12,300),it(23,16,500),it(18,16,300),it(20,11,800)]},{id:"v07",name:"タロ",role:"child",route:[it(14,24,500),it(20,25,300),it(27,24,500),it(20,23,300)]},{id:"v08",name:"ゲン",role:"drunk",route:[it(8,21,4e3),it(10,23,1500),it(15,23,1500),it(13,18,2e3),it(11,21,3e3)]},{id:"v09",name:"ハンス",role:"farmer",route:[it(30,19,3e3),it(27,15,500),it(22,15,4e3),it(27,17,500),it(32,19,3e3)]},{id:"v10",name:"オリガ",role:"farmer",route:[it(30,21,3e3),it(35,21,3e3),it(35,24,3e3),it(30,24,3e3)]},{id:"v11",name:"ヨハン",role:"priest",route:[it(19,2,8e3,"N"),it(20,6,4e3,"S"),it(20,12,3e3)]},{id:"v12",name:"ローザ",role:"innkeeper",route:[it(9,19,9e3,"S"),it(11,21,3e3),it(10,23,3e3,"S")]},{id:"v13",name:"ジジ",role:"elder",route:[it(25,9,7e3),it(25,11,3e3),it(22,13,4e3)]},{id:"v14",name:"カイ",role:"fisher",route:[it(4,5,7e3),it(6,5,2500),it(18,14,3e3)]},{id:"v15",name:"エマ",role:"housewife",route:[it(15,9,4e3),it(19,14,2500),it(15,20,4e3),it(19,14,1e3)]},{id:"v16",name:"バルト",role:"innhost",route:[it(43,3,9e3,"S"),it(45,8,4e3,"S"),it(45,5,3e3)]},{id:"v17",name:"トビー",role:"stablehand",route:[it(45,19,7e3),it(44,16,4e3),it(48,16,3e3)]},{id:"v18",name:"ゴン",role:"farmer",route:[it(41,30,3e3),it(46,30,3e3),it(46,33,3e3),it(41,33,3e3)]},{id:"v19",name:"ココ",role:"child",route:[it(12,28,500),it(18,29,300),it(12,33,500),it(6,30,300)]},{id:"v20",name:"リサ",role:"housewife",route:[it(9,30,4e3),it(24,29,3e3),it(20,20,2500)]},{id:"v21",name:"モモ",role:"vendor",route:[it(22,31,9e3,"N"),it(23,31,6e3,"N"),it(24,29,3e3,"S")]},{id:"v22",name:"ダン",role:"vendor",route:[it(27,31,9e3,"N"),it(26,31,6e3,"N"),it(28,29,3e3,"S")]}];function gu(s){return s[Math.floor(Math.random()*s.length)]}function pa(s,t,e){return gu(Bn[s].lines[t]).replace("{name}",e)}function Nd(s,t,e){const n=Object.keys(Bn).filter(i=>i!==s);return pa(gu(n),t,e)}const tt={tile:32,world:{width:1728,height:1152},camera:{distance:4.6,lookAbove:.7,fovDeg:62,mouseSensitivity:.0026,keyTurnDegPerSec:150,defaultPitchDeg:16,pitchMinDeg:-8,pitchMaxDeg:55,indoorPitchDeg:62,indoorDistance:6.2},visibility:{nameLabelTiles:11,fogNearTiles:12,fogFarTiles:40},phases:{previewSec:60,blackoutSec:4,mainSec:480},demonCount:2,player:{speed:135,radius:11,interactRange:60,slashCooldownMs:600},villager:{speed:55,hesitateChance:.12},dialogue:{maxQuestionsPerVillager:3,allowTalkInPreview:!0,typeCharsPerSec:32},audio:{volume:.8,musicVolume:.7,tempoUpPerRuin:.1},demon:{routeDeviationChance:.3,deviationRadiusTiles:6,deviationWaitMsRange:[1500,3500],hesitateChance:.35,hesitateMsRange:[350,900],offRoleLineChance:.45,noGestureChance:.3,otherRoleGestureChance:.15,sabotage:{firstDelayMsRange:[4e4,7e4],cooldownMsRange:[8e4,12e4],minPlayerDistance:230,startMinDistanceFromPlayer:110,durationMs:6e3,abortDistance:180,retryDelayMs:15e3}},ruin:{gaugeMax:4},misjudgeLimit:3,hide:{searchCooldownMs:1e3,npcHideChance:.25,npcSeekTiles:8,npcStayMsRange:[4e3,15e3]},panic:{durationMs:8e3,speedMul:2,radiusTiles:6,words:["ひええ！","たいへんだ！","にげろー！","きゃー！","うわあ！","たすけてー！"],restlessSpeedPerRuin:.15,restlessWaitPerRuin:.2}},st=tt.tile,fs=[{tx0:2,ty0:1,tx1:6,ty1:4,label:"池",color:3829413,blocks:!0},{tx0:17,ty0:1,tx1:22,ty1:5,label:"教会",color:14274753,blocks:!0},{tx0:29,ty0:2,tx1:33,ty1:5,label:"食料庫",color:9139029,blocks:!0},{tx0:7,ty0:7,tx1:11,ty1:9,label:"道具屋",color:11887901,blocks:!0},{tx0:14,ty0:8,tx1:16,ty1:10,label:"家",color:12880474,blocks:!0},{tx0:24,ty0:8,tx1:26,ty1:10,label:"家",color:12880474,blocks:!0},{tx0:32,ty0:7,tx1:36,ty1:10,label:"鍛冶屋",color:7035731,blocks:!0},{tx0:0,ty0:12,tx1:1,ty1:15,label:"西門",color:7829367,blocks:!0},{tx0:52,ty0:12,tx1:53,ty1:15,label:"東門",color:7829367,blocks:!0},{tx0:7,ty0:19,tx1:12,ty1:22,label:"酒場",color:10178367,blocks:!0},{tx0:14,ty0:19,tx1:16,ty1:21,label:"家",color:12880474,blocks:!0},{tx0:24,ty0:19,tx1:26,ty1:21,label:"家",color:12880474,blocks:!0},{tx0:29,ty0:20,tx1:36,ty1:25,label:"畑",color:6986062,blocks:!1},{tx0:42,ty0:3,tx1:47,ty1:6,label:"宿屋",color:11887901,blocks:!0},{tx0:41,ty0:9,tx1:43,ty1:11,label:"家",color:12880474,blocks:!0},{tx0:46,ty0:9,tx1:48,ty1:11,label:"家",color:12880474,blocks:!0},{tx0:42,ty0:18,tx1:46,ty1:20,label:"馬小屋",color:9139029,blocks:!0},{tx0:48,ty0:18,tx1:50,ty1:20,label:"家",color:12880474,blocks:!0},{tx0:8,ty0:29,tx1:10,ty1:31,label:"家",color:12880474,blocks:!0},{tx0:14,ty0:29,tx1:16,ty1:31,label:"家",color:12880474,blocks:!0},{tx0:22,ty0:30,tx1:23,ty1:30,label:"屋台",color:12597547,blocks:!0},{tx0:26,ty0:30,tx1:27,ty1:30,label:"屋台",color:4165514,blocks:!0},{tx0:40,ty0:29,tx1:47,ty1:33,label:"畑",color:6986062,blocks:!1}],Ud=tt.world.width/st,ao=[{x:-30,z:13,w:Ud+60,d:3},{x:19.5,z:6,w:2,d:22},{x:3,z:28,w:34,d:1},{x:44,z:7,w:2,d:6},{x:44,z:16,w:2,d:2}];function ma(s,t,e=0){return ao.some(n=>s>n.x-e&&s<n.x+n.w+e&&t>n.z-e&&t<n.z+n.d+e)}const nn=.2;function fl(s){return s.blocks&&s.label!=="池"&&s.label!=="屋台"&&!s.label.endsWith("門")}function Fd(s){if(s.label==="酒場")return"S";const t=tt.world.height/st;return(s.ty0+s.ty1+1)/2<t/2?"S":"N"}function mo(s){const t=Fd(s),e=t==="N"||t==="S",n=e?s.tx1-s.tx0+1:s.ty1-s.ty0+1,i=e?s.tx0:s.ty0,r=n%2===1?[i+(n-1)/2]:[i+n/2-1,i+n/2],o=r.map(a=>t==="S"?{inside:{tx:a,ty:s.ty1},outside:{tx:a,ty:s.ty1+1}}:t==="N"?{inside:{tx:a,ty:s.ty0},outside:{tx:a,ty:s.ty0-1}}:t==="W"?{inside:{tx:s.tx0,ty:a},outside:{tx:s.tx0-1,ty:a}}:{inside:{tx:s.tx1,ty:a},outside:{tx:s.tx1+1,ty:a}});return{face:t,width:r.length===2?2:1.4,pairs:o}}function Od(s){const t=Qs(s),e=nn*st,n=mo(s),i=n.width*st,r=[],o=(l,c)=>{if(!c)r.push({x:t.x,y:l,w:t.w,h:e});else{const h=(t.w-i)/2;r.push({x:t.x,y:l,w:h,h:e},{x:t.x+h+i,y:l,w:h,h:e})}},a=(l,c)=>{if(!c)r.push({x:l,y:t.y,w:e,h:t.h});else{const h=(t.h-i)/2;r.push({x:l,y:t.y,w:e,h},{x:l,y:t.y+h+i,w:e,h})}};return o(t.y,n.face==="N"),o(t.y+t.h-e,n.face==="S"),a(t.x,n.face==="W"),a(t.x+t.w-e,n.face==="E"),r}const vt=(s,t,e,n)=>({tx:s,ty:t,kind:e,face:n}),_u=[vt(14,8,"bed"),vt(16,8,"table"),vt(26,8,"bed"),vt(24,8,"table"),vt(14,21,"bed"),vt(16,21,"table"),vt(26,21,"bed"),vt(24,21,"table"),vt(8,8,"counter"),vt(9,8,"counter"),vt(10,8,"counter"),vt(10,7,"shelf"),vt(11,7,"shelf"),vt(11,9,"barrel"),vt(8,20,"counter"),vt(9,20,"counter"),vt(10,20,"counter"),vt(7,19,"barrel"),vt(8,19,"shelf"),vt(12,19,"barrel"),vt(7,22,"table"),vt(12,22,"table"),vt(36,7,"forge"),vt(36,8,"forge"),vt(34,8,"anvil"),vt(35,10,"rack","N"),vt(36,10,"rack","N"),vt(19,1,"altar"),vt(20,1,"altar"),vt(17,3,"pew","N"),vt(18,3,"pew","N"),vt(21,3,"pew","N"),vt(22,3,"pew","N"),vt(17,4,"pew","N"),vt(18,4,"pew","N"),vt(21,4,"pew","N"),vt(22,4,"pew","N"),vt(29,2,"crate"),vt(30,2,"crate"),vt(33,2,"crate"),vt(33,3,"barrel"),vt(29,3,"sack"),vt(29,5,"barrel"),vt(42,4,"counter"),vt(43,4,"counter"),vt(42,3,"shelf"),vt(46,3,"bed"),vt(47,3,"bed"),vt(47,5,"table"),vt(42,20,"sack"),vt(43,20,"sack"),vt(46,20,"barrel"),vt(46,18,"crate"),vt(41,9,"bed"),vt(43,9,"table"),vt(48,9,"bed"),vt(46,9,"table"),vt(48,20,"bed"),vt(50,20,"table"),vt(8,31,"bed"),vt(10,31,"table"),vt(14,31,"bed"),vt(16,31,"table")],xu=[{tx:12,ty:2},{tx:14,ty:4},{tx:25,ty:2},{tx:27,ty:4},{tx:38,ty:6},{tx:37,ty:2},{tx:2,ty:8},{tx:2,ty:22},{tx:4,ty:26},{tx:23,ty:27},{tx:33,ty:17},{tx:30,ty:10},{tx:10,ty:26},{tx:37,ty:26},{tx:17,ty:26},{tx:40,ty:2},{tx:50,ty:3},{tx:51,ty:8},{tx:39,ty:20},{tx:51,ty:23},{tx:48,ty:25},{tx:50,ty:31},{tx:4,ty:33},{tx:12,ty:34},{tx:20,ty:33},{tx:30,ty:33},{tx:34,ty:30},{tx:38,ty:31}],en={tx:20,ty:14,radius:18},Bd={tx:20,ty:15},Zl=s=>fs.findIndex(t=>t.label===s),kd=[{kind:"well",spot:Bd,facing:Math.PI,building:-1,damageAt:{x:(en.tx+.5)*st,y:(en.ty+.5)*st},message:"井戸の 水が にごった…… 滅びが すすんだ！"},{kind:"storehouse",spot:{tx:32,ty:3},facing:Math.PI/2,building:Zl("食料庫"),damageAt:{x:33.5*st,y:3*st},message:"食料庫から 火の手が あがった！ 滅びが すすんだ！"},{kind:"church",spot:{tx:21,ty:5},facing:-Math.PI/2,building:Zl("教会"),damageAt:{x:22*st,y:6.9*st},message:"教会の 鐘が こわされた…… 滅びが すすんだ！"}],Jl={tx:7,ty:14},Ql={barrel:"タル",bush:"茂み",hay:"干し草",closet:"タンス"},Qn=[{id:0,kind:"barrel",tx:22,ty:17},{id:1,kind:"hay",tx:28,ty:6},{id:2,kind:"bush",tx:16,ty:5},{id:3,kind:"hay",tx:40,ty:20},{id:4,kind:"hay",tx:49,ty:32},{id:5,kind:"bush",tx:31,ty:32},{id:6,kind:"barrel",tx:17,ty:31},{id:7,kind:"bush",tx:4,ty:32},{id:8,kind:"bush",tx:7,ty:3},{id:9,kind:"closet",tx:17,ty:2},{id:10,kind:"closet",tx:42,ty:5},{id:11,kind:"closet",tx:7,ty:21}];function Ke(s,t){return{x:s*st+st/2,y:t*st+st/2}}function Yi(s,t){return{tx:Math.floor(s/st),ty:Math.floor(t/st)}}function Qs(s){return{x:s.tx0*st,y:s.ty0*st,w:(s.tx1-s.tx0+1)*st,h:(s.ty1-s.ty0+1)*st}}const lr={demonCount:3,misjudgeLimit:2,demon:{routeDeviationChance:.05,hesitateChance:tt.villager.hesitateChance,offRoleLineChance:.06,noGestureChance:.04,otherRoleGestureChance:.02},sabotage:{firstDelayMsRange:[25e3,7e4],cooldownMsRange:[6e4,9e4],minPlayerDistance:260,abortDistance:220,retryDelayMs:8e3}},cr={demonCount:tt.demonCount,misjudgeLimit:tt.misjudgeLimit,demon:{...tt.demon,sabotage:{...tt.demon.sabotage}}};function tc(s){tt.demonCount=cr.demonCount,tt.misjudgeLimit=cr.misjudgeLimit,Object.assign(tt.demon,cr.demon,{sabotage:tt.demon.sabotage}),Object.assign(tt.demon.sabotage,cr.demon.sabotage),s==="hard"&&(tt.demonCount=lr.demonCount,tt.misjudgeLimit=lr.misjudgeLimit,Object.assign(tt.demon,lr.demon),Object.assign(tt.demon.sabotage,lr.sabotage))}class zd{constructor(t,e){this.cols=t,this.rows=e,this.passages=new Set,this.blocked=new Uint8Array(t*e),this.region=new Uint16Array(t*e)}setRegion(t,e,n,i,r){for(let o=e;o<=i;o++)for(let a=t;a<=n;a++)this.region[o*this.cols+a]=r}regionAt(t,e){return t<0||e<0||t>=this.cols||e>=this.rows?0:this.region[e*this.cols+t]}addPassage(t,e){const n=this.cols*this.rows,i=t.ty*this.cols+t.tx,r=e.ty*this.cols+e.tx;this.passages.add(i*n+r),this.passages.add(r*n+i)}blockRect(t,e,n,i){for(let r=e;r<=i;r++)for(let o=t;o<=n;o++)o>=0&&r>=0&&o<this.cols&&r<this.rows&&(this.blocked[r*this.cols+o]=1)}isWalkable(t,e){return t>=0&&e>=0&&t<this.cols&&e<this.rows&&this.blocked[e*this.cols+t]===0}nearestWalkable(t){if(this.isWalkable(t.tx,t.ty))return t;for(let e=1;e<=8;e++)for(let n=-e;n<=e;n++)for(let i=-e;i<=e;i++)if(Math.max(Math.abs(i),Math.abs(n))===e&&this.isWalkable(t.tx+i,t.ty+n))return{tx:t.tx+i,ty:t.ty+n};return t}findPath(t,e){const n=this.nearestWalkable(t),i=this.nearestWalkable(e);if(n.tx===i.tx&&n.ty===i.ty)return[];const r=this.cols,o=r*this.rows,a=new Float32Array(o).fill(1/0),l=new Float32Array(o).fill(1/0),c=new Int32Array(o).fill(-1),h=new Uint8Array(o),u=new Uint8Array(o),d=n.ty*r+n.tx,f=i.ty*r+i.tx,g=m=>{const p=Math.abs(m%r-i.tx),M=Math.abs(Math.floor(m/r)-i.ty);return Math.max(p,M)+.414*Math.min(p,M)},_=[d];for(u[d]=1,a[d]=0,l[d]=g(d);_.length>0;){let m=0;for(let x=1;x<_.length;x++)l[_[x]]<l[_[m]]&&(m=x);const p=_[m];if(_[m]=_[_.length-1],_.pop(),u[p]=0,p===f){const x=[];let I=p;for(;I!==d;)x.push({tx:I%r,ty:Math.floor(I/r)}),I=c[I];return x.reverse()}h[p]=1;const M=p%r,v=Math.floor(p/r);for(let x=-1;x<=1;x++)for(let I=-1;I<=1;I++){if(I===0&&x===0)continue;const A=M+I,w=v+x;if(!this.isWalkable(A,w))continue;const T=I!==0&&x!==0,S=w*r+A,y=this.region[p];if(this.region[S]!==y){if(T||!this.passages.has(p*o+S))continue}else if(T&&(!this.isWalkable(M+I,v)||!this.isWalkable(M,v+x)||this.region[v*r+M+I]!==y||this.region[(v+x)*r+M]!==y))continue;if(h[S])continue;const P=a[p]+(T?1.414:1);P<a[S]&&(a[S]=P,l[S]=P+g(S),c[S]=p,u[S]||(u[S]=1,_.push(S)))}}return[]}}const hr=56,ec=1.7;function nc(s,t){try{s.setPointerCapture(t)}catch{}}class Hd{constructor(t){this.input=t,this.root=document.createElement("div"),this.knob=document.createElement("div"),this.base=document.createElement("div"),this.stickId=null,this.stickX0=0,this.stickY0=0,this.lookId=null,this.lookX=0,this.lookY=0,this.root.id="touch";const e=this.zone("touch-stick-zone"),n=this.zone("touch-look-zone");this.base.className="touch-stick-base hidden",this.knob.className="touch-stick-knob",this.base.appendChild(this.knob),e.appendChild(this.base),this.root.append(e,n),this.button("touch-a","A","z"),this.button("touch-b","B","x"),this.button("touch-sound","♪","m"),document.body.appendChild(this.root);const i=document.createElement("div");i.id="rotate",i.textContent="スマホを 横に してね",document.body.appendChild(i),e.addEventListener("pointerdown",a=>{this.stickId===null&&(a.preventDefault(),this.stickId=a.pointerId,nc(e,a.pointerId),this.stickX0=a.clientX,this.stickY0=a.clientY,this.base.style.left=`${a.clientX}px`,this.base.style.top=`${a.clientY}px`,this.base.classList.remove("hidden"),this.moveKnob(0,0))}),e.addEventListener("pointermove",a=>{if(a.pointerId!==this.stickId)return;let l=(a.clientX-this.stickX0)/hr,c=(a.clientY-this.stickY0)/hr;const h=Math.hypot(l,c);h>1&&(l/=h,c/=h),this.moveKnob(l,c),this.input.setStick(l,-c)});const r=a=>{a.pointerId===this.stickId&&(this.stickId=null,this.base.classList.add("hidden"),this.input.setStick(0,0))};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),n.addEventListener("pointerdown",a=>{this.lookId===null&&(a.preventDefault(),this.lookId=a.pointerId,nc(n,a.pointerId),this.lookX=a.clientX,this.lookY=a.clientY)}),n.addEventListener("pointermove",a=>{a.pointerId===this.lookId&&(this.input.addLook((a.clientX-this.lookX)*ec,(a.clientY-this.lookY)*ec),this.lookX=a.clientX,this.lookY=a.clientY)});const o=a=>{a.pointerId===this.lookId&&(this.lookId=null)};n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o)}zone(t){const e=document.createElement("div");return e.className=t,e}button(t,e,n){const i=document.createElement("div");i.id=t,i.className="touch-btn",i.textContent=e,i.addEventListener("pointerdown",o=>{o.preventDefault(),o.stopPropagation(),i.classList.add("down"),this.input.press(n)});const r=()=>i.classList.remove("down");i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r),i.addEventListener("pointerleave",r),this.root.appendChild(i)}moveKnob(t,e){this.knob.style.transform=`translate(${t*hr}px, ${e*hr}px)`}}function pl(){return new URLSearchParams(location.search).get("touch")==="1"?!0:typeof matchMedia=="function"&&matchMedia("(pointer: coarse)").matches}const Gd=.25,Vd={ArrowUp:"up",KeyW:"up",ArrowDown:"down",KeyS:"down",KeyZ:"z",Enter:"z",KeyX:"x",KeyT:"t",KeyM:"m",KeyG:"g",KeyC:"c",KeyV:"v",KeyF:"f",KeyE:"e"},Wd=new Set(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"]);function ic(s){if(s.code)return s.code;const t=s.key;if(t===" ")return"Space";if(t.length===1){const e=t.toUpperCase();if(e>="A"&&e<="Z")return`Key${e}`}return t}class Xd{constructor(t){this.canvas=t,this.held=new Set,this.presses=[],this.mouseDX=0,this.mouseDY=0,this.stickX=0,this.stickY=0,this.touch=null,pl()&&this.enableTouch(),window.addEventListener("pointerdown",e=>{e.pointerType==="touch"&&!this.touch&&this.enableTouch()}),window.addEventListener("keydown",e=>{const n=ic(e);Wd.has(n)&&e.preventDefault(),this.held.add(n);const i=Vd[n];i&&!e.repeat&&this.presses.push(i)}),window.addEventListener("keyup",e=>this.held.delete(ic(e))),window.addEventListener("blur",()=>this.held.clear()),t.addEventListener("click",()=>{if(document.pointerLockElement===t)return;const e=t.requestPointerLock();e instanceof Promise&&e.catch(()=>{})}),document.addEventListener("mousemove",e=>{document.pointerLockElement===this.canvas&&(this.mouseDX+=e.movementX,this.mouseDY+=e.movementY)})}enableTouch(){document.body.classList.add("touch"),this.touch=new Hd(this)}get touchMode(){return this.touch!==null}setStick(t,e){this.stickX=t,this.stickY=e}addLook(t,e){this.mouseDX+=t,this.mouseDY+=e}press(t){this.presses.push(t)}moveAxis(){const t=(this.isDown("KeyW")||this.isDown("ArrowUp")?1:0)-(this.isDown("KeyS")||this.isDown("ArrowDown")?1:0),e=(this.isDown("KeyD")?1:0)-(this.isDown("KeyA")?1:0);if(t!==0||e!==0)return{fwd:t,strafe:e};const n=Math.hypot(this.stickX,this.stickY);return n<Gd?{fwd:0,strafe:0}:{fwd:this.stickY/n,strafe:this.stickX/n}}isDown(t){return this.held.has(t)}drainPresses(){const t=this.presses;return this.presses=[],t}consumeMouse(){const t={dx:this.mouseDX,dy:this.mouseDY};return this.mouseDX=0,this.mouseDY=0,t}}const qd={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function Yd(s){const t=/^([A-G])([#b]?)(\d)$/.exec(s);if(!t)throw new Error(`音名が読めません: ${s}`);const e=qd[t[1]]+(t[2]==="#"?1:t[2]==="b"?-1:0),n=(Number(t[3])+1)*12+e;return 440*Math.pow(2,(n-69)/12)}function ur(s,t){const e=[];return t.forEach((n,i)=>{let r=0;for(const o of n.trim().split(/\s+/)){const[a,l]=o.split(":"),c=Number(l);r+=c,a==="R"?e.push({freq:0,beats:c}):a==="K"||a==="N"?e.push({freq:0,beats:c,drum:a}):e.push({freq:Yd(a),beats:c})}Math.abs(r-4)>.001&&console.warn(`BGM「${s}」の ${i+1}小節目が ${r}拍です（4拍のはず）`)}),e}const Kd={C:["C3","G3","C4","E4","G4"],Am:["A2","E3","A3","C4","E4"],F:["F2","C3","F3","A3","C4"],G:["G2","D3","G3","B3","D4"],Dm:["D3","A3","D4","F4","A4"],Bb:["Bb2","F3","Bb3","D4","F4"],E:["E2","B2","E3","G#3","B3"]};function $d(s,t,e){const n=[],i=[];for(const r of s){const o=r.split(" "),a=o.length===2,l=[],c=[];for(const h of o){const u=Kd[h];if(!u)throw new Error(`和音がありません: ${h}`);const[d,f,g,_,m]=u;t==="walk"?l.push(a?`${d}:1 ${f}:1`:`${d}:1 ${f}:1 ${d}:1 ${f}:1`):t==="slow"?l.push(a?`${d}:2`:`${d}:2 ${f}:2`):l.push(a?`${d}:.5 R:.5 ${f}:.5 R:.5`:`${d}:.5 R:.5 ${d}:.5 R:.5 ${f}:.5 R:.5 ${d}:.5 R:.5`);const p=e==="arp"?`${g}:.5 ${_}:.5 ${m}:.5 ${_}:.5`:`${g}:.5 ${m}:.5 ${g}:.5 ${m}:.5`;c.push(a?p:`${p} ${p}`)}n.push(l.join(" ")),i.push(c.join(" "))}return{bass:n,arp:i}}function wo(s,t,e,n,i,r,o,a){e.length!==n.length&&console.warn(`BGM「${s}」：メロディ ${e.length}小節、和音 ${n.length}小節で合っていません`);const l=$d(n,i,r),c=[{wave:"square",vol:.055,gate:o,notes:ur(`${s} メロディ`,e)},{wave:"triangle",vol:.06,gate:.8,notes:ur(`${s} 伴奏`,l.arp)},{wave:"triangle",vol:.15,gate:i==="stab"?.9:.85,notes:ur(`${s} ベース`,l.bass)}];return a&&c.push({wave:"sine",vol:1,gate:1,notes:ur(`${s} 打楽器`,[a])}),{bpm:t,tracks:c}}const jd={title:wo("タイトル",96,["C5:1 F5:1 A5:1.5 G5:.5","G5:1 E5:1 C5:2","D5:1 F5:1 A5:1.5 G5:.5","F5:1 D5:1 Bb4:2","C5:1 F5:1 A5:1 C6:1","C6:1.5 Bb5:.5 G5:1 E5:1","D5:1 F5:1 E5:1 G5:1","F5:3 R:1"],["F","C","Dm","Bb","F","C","Bb C","F"],"slow","arp",.92),village:wo("村",108,["E5:.5 G5:.5 C6:1 B5:.5 G5:.5 E5:1","A5:1.5 G5:.5 E5:1 C5:1","F5:.5 A5:.5 C6:1 A5:.5 F5:.5 A5:1","G5:1.5 F5:.5 D5:2","E5:.5 G5:.5 C6:1 D6:.5 C6:.5 G5:1","A5:1 C6:1 B5:.5 A5:.5 E5:1","F5:1 A5:1 G5:.5 B5:.5 D6:1","C6:3 R:1","A5:1 C6:1 A5:1 F5:1","G5:1.5 E5:.5 C5:1 E5:1","A5:.5 G5:.5 F5:1 A5:1 C6:1","B5:1.5 A5:.5 G5:2","C6:1 B5:.5 A5:.5 E5:1 A5:1","F5:.5 G5:.5 A5:1 C6:1 A5:1","D5:.5 F5:.5 A5:1 G5:.5 F5:.5 D5:1","C5:.5 E5:.5 G5:.5 C6:.5 C6:1 R:1"],["C","Am","F","G","C","Am","Dm G","C","F","C","F","G","Am","F","Dm G","C"],"walk","arp",.9),hunt:wo("本番",122,["A4:.5 R:.5 C5:.5 R:.5 E5:.5 R:.5 D5:.5 C5:.5","B4:.5 R:.5 C5:.5 R:.5 A4:1 R:1","F4:.5 R:.5 A4:.5 R:.5 C5:.5 R:.5 B4:.5 A4:.5","G#4:.5 R:.5 B4:.5 R:.5 E5:1 R:1","A4:.5 C5:.5 E5:.5 A5:.5 G5:.5 E5:.5 C5:.5 E5:.5","D5:.5 F5:.5 A5:.5 F5:.5 E5:.5 D5:.5 C5:.5 D5:.5","E5:1 G#4:.5 B4:.5 E5:.5 D5:.5 C5:.5 B4:.5","A4:2 R:2","C5:.5 R:.5 A4:.5 R:.5 F4:.5 A4:.5 C5:1","D5:.5 R:.5 B4:.5 R:.5 G4:.5 B4:.5 D5:1","E5:.5 R:.5 C5:.5 R:.5 A4:.5 C5:.5 E5:1","A5:.5 G5:.5 E5:.5 C5:.5 A4:1 R:1","F5:.5 E5:.5 D5:.5 C5:.5 A4:.5 C5:.5 F5:1","G5:.5 F5:.5 E5:.5 D5:.5 B4:.5 D5:.5 G5:1","G#5:.5 R:.5 E5:.5 R:.5 B4:.5 R:.5 G#4:.5 R:.5","E5:1 R:1 E4:.5 G#4:.5 B4:.5 D5:.5"],["Am","Am","F","E","Am","Dm","E","Am","F","G","Am","Am","F","G","E","E"],"stab","pulse",.85,"K:.5 N:.5 N:.5 N:.5 K:.5 N:.5 N:.5 N:.5")},Zd=.3,dr=.25;class Jd{constructor(t){this.sfx=t,this.scheduled=0,this.gain=null,this.song=null,this.current=null,this.wanted=null,this.startAt=0,this.waiting=!1,this.t0=0,this.bps=2,this.tempoScale=1,this.cursors=[]}play(t,e=dr){this.wanted===t&&(this.waiting||this.current===t)||(this.wanted=t,this.tempoScale=1,this.beginSwitch(e))}stop(){this.wanted=null,this.beginSwitch(dr)}setTempoScale(t){if(t===this.tempoScale)return;this.tempoScale=t;const e=this.sfx.context;if(!e||!this.song)return;const n=e.currentTime,i=(n-this.t0)*this.bps;this.bps=this.song.bpm/60*t,this.t0=n-i/this.bps}beginSwitch(t){this.waiting=!0;const e=this.sfx.context;this.startAt=e?e.currentTime+Math.max(dr,t):0,this.song=null,this.current=null,e&&this.gain&&this.gain.gain.setTargetAtTime(0,e.currentTime,.05)}update(){const t=this.sfx.context,e=this.sfx.output;if(!t||!e||tt.audio.musicVolume<=0)return;this.gain||(this.gain=t.createGain(),this.gain.gain.value=0,this.gain.connect(e));const n=t.currentTime;if(this.waiting){if(this.startAt===0&&(this.startAt=n+dr),n<this.startAt||(this.waiting=!1,!this.wanted))return;this.song=jd[this.wanted],this.current=this.wanted,this.bps=this.song.bpm/60*this.tempoScale,this.t0=n+.06,this.cursors=this.song.tracks.map(()=>({index:0,beat:0})),this.gain.gain.cancelScheduledValues(n),this.gain.gain.setValueAtTime(tt.audio.musicVolume,n)}const i=this.song;if(!i)return;const r=Math.min(...this.cursors.map(l=>l.beat)),o=this.t0+r/this.bps;o<n-.02&&(this.t0+=n-o+.06);const a=n+Zd;i.tracks.forEach((l,c)=>{const h=this.cursors[c];for(;;){const u=this.t0+h.beat/this.bps;if(u>=a)break;const d=l.notes[h.index];this.playNote(t,l,d,u,d.beats/this.bps),h.beat+=d.beats,h.index=(h.index+1)%l.notes.length}})}playNote(t,e,n,i,r){const o=this.gain;if(!o)return;if(n.drum==="K"){const h=t.createOscillator(),u=t.createGain();h.type="sine",h.frequency.setValueAtTime(130,i),h.frequency.exponentialRampToValueAtTime(45,i+.1),u.gain.setValueAtTime(.2,i),u.gain.exponentialRampToValueAtTime(.001,i+.12),h.connect(u),u.connect(o),h.start(i),h.stop(i+.14),this.scheduled++;return}if(n.drum==="N"){const h=Math.floor(t.sampleRate*.03),u=t.createBuffer(1,h,t.sampleRate),d=u.getChannelData(0);for(let _=0;_<h;_++)d[_]=(Math.random()*2-1)*(1-_/h);const f=t.createBufferSource();f.buffer=u;const g=t.createGain();g.gain.value=.035,f.connect(g),g.connect(o),f.start(i),this.scheduled++;return}if(n.freq<=0)return;const a=Math.max(.03,r*e.gate),l=t.createOscillator(),c=t.createGain();l.type=e.wave,l.frequency.setValueAtTime(n.freq,i),c.gain.setValueAtTime(1e-4,i),c.gain.linearRampToValueAtTime(e.vol,i+.008),c.gain.linearRampToValueAtTime(e.vol*.65,i+a*.85),c.gain.linearRampToValueAtTime(1e-4,i+a),l.connect(c),c.connect(o),l.start(i),l.stop(i+a+.02),this.scheduled++}}class Qd{constructor(){this.muted=!1,this.ctx=null,this.master=null,this.primed=!1}unlock(){if(!this.ctx){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=tt.audio.volume,this.master.connect(this.ctx.destination)}if(this.ctx.state!=="running"&&this.ctx.resume(),!this.primed){this.primed=!0;const t=this.ctx.createBufferSource();t.buffer=this.ctx.createBuffer(1,1,this.ctx.sampleRate),t.connect(this.ctx.destination),t.start(0)}}get context(){return this.ctx}get output(){return this.master}toggleMute(){return this.muted=!this.muted,this.master&&(this.master.gain.value=this.muted?0:tt.audio.volume),this.muted}tone(t,e,n,i="square",r=.12,o){const{ctx:a,master:l}=this;if(!a||!l||this.muted)return;const c=a.currentTime+e,h=a.createOscillator(),u=a.createGain();h.type=i,h.frequency.setValueAtTime(t,c),o!==void 0&&h.frequency.exponentialRampToValueAtTime(Math.max(20,o),c+n),u.gain.setValueAtTime(1e-4,c),u.gain.linearRampToValueAtTime(r,c+.006),u.gain.setValueAtTime(r,c+Math.max(.006,n*.7)),u.gain.linearRampToValueAtTime(1e-4,c+n),h.connect(u),u.connect(l),h.start(c),h.stop(c+n+.02)}noise(t,e,n){const{ctx:i,master:r}=this;if(!i||!r||this.muted)return;const o=Math.max(1,Math.floor(i.sampleRate*e)),a=i.createBuffer(1,o,i.sampleRate),l=a.getChannelData(0);for(let u=0;u<o;u++)l[u]=(Math.random()*2-1)*(1-u/o);const c=i.createBufferSource();c.buffer=a;const h=i.createGain();h.gain.value=n,c.connect(h),h.connect(r),c.start(i.currentTime+t)}melody(t,e,n){let i=0;for(const[r,o]of t)r>0&&this.tone(r,i,o*.95,e,n),i+=o}blip(){this.tone(980,0,.028,"square",.045)}cursor(){this.tone(700,0,.045,"square",.07)}confirm(){this.tone(700,0,.05,"square",.08),this.tone(1050,.05,.08,"square",.08)}cancel(){this.tone(520,0,.05,"square",.07),this.tone(390,.05,.08,"square",.07)}start(){this.melody([[392,.09],[523,.09],[659,.09],[784,.22]],"square",.09)}slash(){this.noise(0,.14,.3),this.tone(1400,0,.12,"sawtooth",.07,180)}demonSlain(){this.melody([[0,.16],[587,.08],[740,.08],[880,.08],[1175,.26]],"square",.09),this.tone(294,.4,.26,"triangle",.14)}villagerSlain(){this.melody([[0,.16],[415,.14],[330,.14],[247,.34]],"triangle",.16)}ruin(t=0){this.tone(130,t,.55,"sawtooth",.12,82),this.tone(138,t,.55,"sawtooth",.1,87),this.tone(65,t+.1,.6,"triangle",.2)}poison(){const t=[[0,520],[.11,660],[.2,580],[.32,780],[.41,690],[.54,920],[.63,820]];for(const[e,n]of t)this.tone(n,e,.075,"sine",.2,n*1.7)}fire(){this.noise(0,.7,.28),this.noise(.25,.6,.2),this.tone(180,0,.7,"sawtooth",.07,520)}bellBreak(){this.tone(784,0,1.1,"sine",.16),this.tone(1175,0,.9,"sine",.09),this.tone(1568,0,.5,"triangle",.06),this.tone(740,.45,.9,"sine",.14,520),this.noise(.95,.25,.3),this.tone(110,.95,.4,"triangle",.2,60)}night(){this.melody([[440,.22],[392,.22],[330,.22],[262,.5]],"triangle",.14)}win(){this.melody([[392,.12],[523,.12],[659,.12],[784,.12],[0,.06],[698,.12],[784,.12],[1047,.5]],"square",.09),this.tone(262,.78,.5,"triangle",.16),this.tone(659,.78,.5,"square",.05)}lose(){this.melody([[392,.2],[370,.2],[311,.2],[233,.3],[196,.7]],"triangle",.16),this.tone(98,.9,.7,"sawtooth",.08)}}class tf{constructor(){this.hits={well:0,storehouse:0,church:0},this.busy=new Set}}class ef{constructor(){this.occupied=new Map}isFree(t){return!this.occupied.has(t)}take(t,e){return this.occupied.has(t)?!1:(this.occupied.set(t,e),!0)}release(t){this.occupied.delete(t)}ownerOf(t){return this.occupied.get(t)??null}}function vu(s,t,e){const n=Qn[t],i=[];for(const[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])s.isWalkable(n.tx+r,n.ty+o)&&i.push(Ke(n.tx+r,n.ty+o));return i.sort((r,o)=>Math.hypot(r.x-e.x,r.y-e.y)-Math.hypot(o.x-e.x,o.y-e.y))}const nf={N:Math.PI,S:0,E:Math.PI/2,W:-Math.PI/2};function Ms([s,t]){return s+Math.random()*(t-s)}function sc(s,t){return s+Math.floor(Math.random()*(t-s+1))}class sf{constructor(t,e,n=null){this.board=n,this.facing=0,this.moving=!1,this.isDemon=!1,this.alive=!0,this.paused=!1,this.gesture=null,this.gestureStartedAt=0,this.panicUntil=0,this.hideBoard=null,this.hidingIn=-1,this.path=[],this.waitUntil=0,this.mode="route",this.sabotageEndsAt=0,this.nextSabotageAt=Number.POSITIVE_INFINITY,this.target=null,this.hideGoal=-1,this.hideExitAt=0,this.hideFrom={x:0,y:0},this.restless=0,this.def=t,this.grid=e,this.wpIndex=Math.floor(Math.random()*t.route.length);const i=t.route[this.wpIndex],r=Ke(i.tx,i.ty);this.x=r.x,this.y=r.y,this.facing=Math.random()*Math.PI*2,this.speed=tt.villager.speed*Bn[t.role].speedMul}get roleLabel(){return Bn[this.def.role].label}setRestless(t){this.restless=Math.max(0,t)}get walkSpeed(){return this.speed*(1+tt.panic.restlessSpeedPerRuin*this.restless)}waitFor(t){return t*Math.max(.3,1-tt.panic.restlessWaitPerRuin*this.restless)}panic(t,e){if(this.alive){if(this.panicUntil=e,this.hidingIn>=0){this.hideExitAt=Math.max(this.hideExitAt,e+Ms(tt.hide.npcStayMsRange));return}(this.mode==="toTarget"||this.mode==="sabotaging")&&(this.releaseTarget(),this.nextSabotageAt=Math.max(this.nextSabotageAt,e+tt.demon.sabotage.retryDelayMs)),this.mode="panic",this.path=[],this.waitUntil=t,this.hideGoal=-1,this.hideBoard&&Math.random()<tt.hide.npcHideChance&&this.seekHideSpot()}}get hidden(){return this.hidingIn>=0}seekHideSpot(){const t=this.hideBoard;if(!t)return;const e=tt.tile;let n=-1,i=tt.hide.npcSeekTiles*e;for(const o of Qn){if(!t.isFree(o.id))continue;const a=Ke(o.tx,o.ty),l=Math.hypot(a.x-this.x,a.y-this.y);l<i&&(n=o.id,i=l)}if(n<0)return;const r=vu(this.grid,n,this)[0];r&&(this.hideGoal=n,this.path=this.grid.findPath(Yi(this.x,this.y),Yi(r.x,r.y)).map(o=>Ke(o.tx,o.ty)))}leaveHideSpot(t,e){var n;(n=this.hideBoard)==null||n.release(this.hidingIn),this.hidingIn=-1,this.x=e.x,this.y=e.y,this.mode="returning",this.goTo(this.def.route[this.wpIndex],t)}pullOut(t,e){this.hidingIn<0||this.leaveHideSpot(t,e)}becomeDemon(t){this.isDemon=!0,this.nextSabotageAt=t+Ms(tt.demon.sabotage.firstDelayMsRange)}slay(){this.alive=!1,this.paused=!0,this.releaseTarget()}releaseTarget(){var t;this.target&&((t=this.board)==null||t.busy.delete(this.target.kind)),this.target=null}isWatched(t,e,n,i,r){if(t.building>=0)return i===t.building;if(i>=0)return!1;const o=Ke(t.spot.tx,t.spot.ty);return Math.hypot(o.x-e,o.y-n)<r}pickTarget(t,e,n){const i=tt.demon.sabotage.minPlayerDistance,r=kd.filter(c=>{var h;return!((h=this.board)!=null&&h.busy.has(c.kind))&&!this.isWatched(c,t,e,n,i)});if(r.length===0)return null;const o=c=>{var h;return((h=this.board)==null?void 0:h.hits[c.kind])??0},a=Math.min(...r.map(o)),l=r.filter(c=>o(c)===a);return l[Math.floor(Math.random()*l.length)]}faceWaypoint(){const t=this.def.route[this.wpIndex].face;t&&(this.facing=nf[t])}faceToward(t,e){this.facing=Math.atan2(t-this.x,e-this.y)}gestureAt(t){return!this.alive||this.paused||this.mode!=="route"||this.path.length>0||t<this.panicUntil||this.hidingIn>=0||t>=this.waitUntil?null:this.gesture}chooseGesture(t){this.gestureStartedAt=t;const e=this.def.role;if(!this.isDemon){this.gesture=e;return}const n=tt.demon,i=Math.random();if(i<n.noGestureChance)this.gesture=null;else if(i<n.noGestureChance+n.otherRoleGestureChance){const r=Object.keys(Bn).filter(o=>o!==e);this.gesture=r[Math.floor(Math.random()*r.length)]}else this.gesture=e}tick(t,e,n,i,r,o=-1){var l,c;if(this.moving=!1,!this.alive||this.paused)return;if(this.hidingIn>=0){t>=this.hideExitAt&&this.leaveHideSpot(t,this.hideFrom);return}if(this.mode==="panic"){if(t>=this.panicUntil){this.hideGoal=-1,this.mode="returning",this.goTo(this.def.route[this.wpIndex],t);return}if(this.hideGoal>=0){if(this.path.length>0){this.moveAlong(e,this.speed*tt.panic.speedMul);return}const h=this.hideGoal;if(this.hideGoal=-1,(l=this.hideBoard)!=null&&l.take(h,this)){this.hidingIn=h,this.hideFrom={x:this.x,y:this.y};const u=Qn[h],d=Ke(u.tx,u.ty);this.facing=Math.atan2(d.x-this.x,d.y-this.y),this.x=d.x,this.y=d.y,this.hideExitAt=this.panicUntil+Ms(tt.hide.npcStayMsRange);return}}if(this.path.length===0){const h=this.randomNearbyTile(tt.panic.radiusTiles);if(h){const u=Yi(this.x,this.y);this.path=this.grid.findPath(u,h).map(d=>Ke(d.tx,d.ty))}}this.moveAlong(e,this.speed*tt.panic.speedMul);return}const a=Math.hypot(this.x-n,this.y-i);if(this.mode==="sabotaging"){const h=tt.demon.sabotage,u=this.target;if(!u||this.isWatched(u,n,i,o,h.abortDistance))this.releaseTarget(),this.nextSabotageAt=t+h.retryDelayMs,this.mode="returning",this.goTo(this.def.route[this.wpIndex],t);else if(t>=this.sabotageEndsAt){if(this.board&&this.board.hits[u.kind]++,(c=this.onSabotage)==null||c.call(this,this,u),this.releaseTarget(),this.nextSabotageAt=t+Ms(h.cooldownMsRange),t<this.panicUntil)return;this.mode="returning",this.goTo(this.def.route[this.wpIndex],t)}return}if(this.path.length>0){this.moveAlong(e,this.walkSpeed),this.path.length===0&&this.onArrived(t);return}t<this.waitUntil||this.decide(t,n,i,a,r,o)}moveAlong(t,e){let n=e*t/1e3;for(;n>0&&this.path.length>0;){const i=this.path[0],r=i.x-this.x,o=i.y-this.y,a=Math.hypot(r,o);if(a>.001&&(this.facing=Math.atan2(r,o),this.moving=!0),a<=n)this.x=i.x,this.y=i.y,this.path.shift(),n-=a;else{const l=n/a;this.x+=r*l,this.y+=o*l,n=0}}}onArrived(t){switch(this.mode){case"route":this.waitUntil=t+this.waitFor(this.def.route[this.wpIndex].wait),this.faceWaypoint(),this.chooseGesture(t);break;case"detour":this.waitUntil=t+Ms(tt.demon.deviationWaitMsRange);break;case"returning":this.mode="route",this.waitUntil=t+this.waitFor(this.def.route[this.wpIndex].wait),this.faceWaypoint(),this.chooseGesture(t);break;case"toTarget":this.mode="sabotaging",this.sabotageEndsAt=t+tt.demon.sabotage.durationMs,this.target&&(this.facing=this.target.facing);break}}decide(t,e,n,i,r,o){var a;if(this.mode==="detour"){this.mode="returning",this.goTo(this.def.route[this.wpIndex],t);return}if(this.mode!=="route"){this.mode="route";return}if(this.isDemon){const l=tt.demon.sabotage;if(r&&t>=this.nextSabotageAt&&t>=this.panicUntil&&i>=l.startMinDistanceFromPlayer){const c=this.pickTarget(e,n,o);if(c){this.target=c,(a=this.board)==null||a.busy.add(c.kind),this.mode="toTarget",this.goTo(c.spot,t);return}}if(Math.random()<tt.demon.routeDeviationChance){const c=this.randomNearbyTile();if(c){this.mode="detour",this.goTo(c,t);return}}}this.wpIndex=(this.wpIndex+1)%this.def.route.length,this.goTo(this.def.route[this.wpIndex],t)}goTo(t,e){const n=Yi(this.x,this.y),i=this.grid.findPath(n,t);this.path=i.map(r=>Ke(r.tx,r.ty)),this.path.length===0&&this.onArrived(e)}randomNearbyTile(t=tt.demon.deviationRadiusTiles){const e=Yi(this.x,this.y);for(let n=0;n<12;n++){const i=e.tx+sc(-t,t),r=e.ty+sc(-t,t);if((i!==e.tx||r!==e.ty)&&this.grid.isWalkable(i,r))return{tx:i,ty:r}}return null}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ml="170",rf=0,rc=1,of=2,yu=1,Mu=2,Un=3,xn=0,We=1,$e=2,ni=0,Ji=1,Qi=2,oc=3,ac=4,af=5,xi=100,lf=101,cf=102,hf=103,uf=104,df=200,ff=201,pf=202,mf=203,ga=204,_a=205,gf=206,_f=207,xf=208,vf=209,yf=210,Mf=211,Sf=212,bf=213,wf=214,xa=0,va=1,ya=2,is=3,Ma=4,Sa=5,ba=6,wa=7,gl=0,Ef=1,Af=2,ii=0,Tf=1,Rf=2,Cf=3,Pf=4,If=5,Lf=6,Df=7,lc="attached",Nf="detached",Su=300,ss=301,rs=302,Ea=303,Aa=304,go=306,si=1e3,ti=1001,lo=1002,Ue=1003,bu=1004,Us=1005,Ve=1006,Zr=1007,Sn=1008,zn=1009,wu=1010,Eu=1011,Ws=1012,_l=1013,yi=1014,_n=1015,tr=1016,xl=1017,vl=1018,os=1020,Au=35902,Tu=1021,Ru=1022,rn=1023,Cu=1024,Pu=1025,ts=1026,as=1027,yl=1028,Ml=1029,Iu=1030,Sl=1031,bl=1033,Jr=33776,Qr=33777,to=33778,eo=33779,Ta=35840,Ra=35841,Ca=35842,Pa=35843,Ia=36196,La=37492,Da=37496,Na=37808,Ua=37809,Fa=37810,Oa=37811,Ba=37812,ka=37813,za=37814,Ha=37815,Ga=37816,Va=37817,Wa=37818,Xa=37819,qa=37820,Ya=37821,no=36492,Ka=36494,$a=36495,Lu=36283,ja=36284,Za=36285,Ja=36286,Du=2200,Uf=2201,Ff=2202,Xs=2300,qs=2301,Eo=2302,Ki=2400,$i=2401,co=2402,wl=2500,Of=2501,Bf=0,Nu=1,Qa=2,kf=3200,zf=3201,El=0,Hf=1,Jn="",we="srgb",ze="srgb-linear",_o="linear",le="srgb",Ai=7680,cc=519,Gf=512,Vf=513,Wf=514,Uu=515,Xf=516,qf=517,Yf=518,Kf=519,tl=35044,hc="300 es",On=2e3,ho=2001;class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uc=1234567;const Bs=Math.PI/180,ls=180/Math.PI;function ln(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[s&255]+De[s>>8&255]+De[s>>16&255]+De[s>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Ie(s,t,e){return Math.max(t,Math.min(e,s))}function Al(s,t){return(s%t+t)%t}function $f(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function jf(s,t,e){return s!==t?(e-s)/(t-s):0}function ks(s,t,e){return(1-e)*s+e*t}function Zf(s,t,e,n){return ks(s,t,1-Math.exp(-e*n))}function Jf(s,t=1){return t-Math.abs(Al(s,t*2)-t)}function Qf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function tp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function ep(s,t){return s+Math.floor(Math.random()*(t-s+1))}function np(s,t){return s+Math.random()*(t-s)}function ip(s){return s*(.5-Math.random())}function sp(s){s!==void 0&&(uc=s);let t=uc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rp(s){return s*Bs}function op(s){return s*ls}function ap(s){return(s&s-1)===0&&s!==0}function lp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hp(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ae(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const io={DEG2RAD:Bs,RAD2DEG:ls,generateUUID:ln,clamp:Ie,euclideanModulo:Al,mapLinear:$f,inverseLerp:jf,lerp:ks,damp:Zf,pingpong:Jf,smoothstep:Qf,smootherstep:tp,randInt:ep,randFloat:np,randFloatSpread:ip,seededRandom:sp,degToRad:rp,radToDeg:op,isPowerOfTwo:ap,ceilPowerOfTwo:lp,floorPowerOfTwo:cp,setQuaternionFromProperEuler:hp,normalize:ae,denormalize:gn};class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,i,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],v=i[4],x=i[7],I=i[2],A=i[5],w=i[8];return r[0]=o*_+a*M+l*I,r[3]=o*m+a*v+l*A,r[6]=o*p+a*x+l*w,r[1]=c*_+h*M+u*I,r[4]=c*m+h*v+u*A,r[7]=c*p+h*x+u*w,r[2]=d*_+f*M+g*I,r[5]=d*m+f*v+g*A,r[8]=d*p+f*x+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ao.makeScale(t,e)),this}rotate(t){return this.premultiply(Ao.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ao=new zt;function Fu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ys(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function up(){const s=Ys("canvas");return s.style.display="block",s}const dc={};function Fs(s){s in dc||(dc[s]=!0,console.warn(s))}function dp(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function fp(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pp(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:ze,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(s.r=es(s.r),s.g=es(s.g),s.b=es(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?_o:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function kn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const fc=[.64,.33,.3,.6,.15,.06],pc=[.2126,.7152,.0722],mc=[.3127,.329],gc=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[ze]:{primaries:fc,whitePoint:mc,transfer:_o,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:pc,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:fc,whitePoint:mc,transfer:le,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:pc,outputColorSpaceConfig:{drawingBufferColorSpace:we}}});let Ti;class mp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ti===void 0&&(Ti=Ys("canvas")),Ti.width=t.width,Ti.height=t.height;const n=Ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ys("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gp=0;class Ou{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=ln(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(To(i[o].image)):r.push(To(i[o]))}else r=To(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function To(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?mp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _p=0;class Ee extends bi{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=ti,i=ti,r=Ve,o=Sn,a=rn,l=zn,c=Ee.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=ln(),this.name="",this.source=new Ou(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case si:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case si:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=Su;Ee.DEFAULT_ANISOTROPY=1;class ee{constructor(t=0,e=0,n=0,i=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,x=(f+1)/2,I=(p+1)/2,A=(h+d)/4,w=(u+_)/4,T=(g+m)/4;return v>x&&v>I?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=w/n):x>I?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=T/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=w/r,i=T/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xp extends bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ee(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ou(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends xp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bu extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vp extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class be{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,M=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const I=Math.sqrt(v),A=Math.atan2(I,p*M);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}const x=a*M;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ro.copy(this).projectOnVector(t),this.sub(Ro)}reflect(t){return this.sub(Ro.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new C,xc=new be;class Hn{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fr.copy(n.boundingBox)),fr.applyMatrix4(t.matrixWorld),this.union(fr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),pr.subVectors(this.max,Ss),Ri.subVectors(t.a,Ss),Ci.subVectors(t.b,Ss),Pi.subVectors(t.c,Ss),Xn.subVectors(Ci,Ri),qn.subVectors(Pi,Ci),ci.subVectors(Ri,Pi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ci.z,ci.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ci.z,0,-ci.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ci.y,ci.x,0];return!Co(e,Ri,Ci,Pi,pr)||(e=[1,0,0,0,1,0,0,0,1],!Co(e,Ri,Ci,Pi,pr))?!1:(mr.crossVectors(Xn,qn),e=[mr.x,mr.y,mr.z],Co(e,Ri,Ci,Pi,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new C,new C,new C,new C,new C,new C,new C,new C],dn=new C,fr=new Hn,Ri=new C,Ci=new C,Pi=new C,Xn=new C,qn=new C,ci=new C,Ss=new C,pr=new C,mr=new C,hi=new C;function Co(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){hi.fromArray(s,r);const a=i.x*Math.abs(hi.x)+i.y*Math.abs(hi.y)+i.z*Math.abs(hi.z),l=t.dot(hi),c=e.dot(hi),h=n.dot(hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const yp=new Hn,bs=new C,Po=new C;class bn{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(bs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(Po)),this.expandByPoint(bs.copy(t.center).sub(Po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new C,Io=new C,gr=new C,Yn=new C,Lo=new C,_r=new C,Do=new C;class er{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Io.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Io);const r=t.distanceTo(e)*.5,o=-this.direction.dot(gr),a=Yn.dot(this.direction),l=-Yn.dot(gr),c=Yn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Io).addScaledVector(gr,d),f}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),i=Pn.dot(Pn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,i,r){Lo.subVectors(e,t),_r.subVectors(n,t),Do.crossVectors(Lo,_r);let o=this.direction.dot(Do),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const l=a*this.direction.dot(_r.crossVectors(Yn,_r));if(l<0)return null;const c=a*this.direction.dot(Lo.cross(Yn));if(c<0||l+c>o)return null;const h=-a*Yn.dot(Do);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),o=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mp,t,Sp)}lookAt(t,e,n){const i=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Kn.crossVectors(n,qe),Kn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Kn.crossVectors(n,qe)),Kn.normalize(),xr.crossVectors(qe,Kn),i[0]=Kn.x,i[4]=xr.x,i[8]=qe.x,i[1]=Kn.y,i[5]=xr.y,i[9]=qe.y,i[2]=Kn.z,i[6]=xr.z,i[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],v=n[7],x=n[11],I=n[15],A=i[0],w=i[4],T=i[8],S=i[12],y=i[1],P=i[5],F=i[9],B=i[13],X=i[2],K=i[6],W=i[10],Z=i[14],H=i[3],at=i[7],ft=i[11],At=i[15];return r[0]=o*A+a*y+l*X+c*H,r[4]=o*w+a*P+l*K+c*at,r[8]=o*T+a*F+l*W+c*ft,r[12]=o*S+a*B+l*Z+c*At,r[1]=h*A+u*y+d*X+f*H,r[5]=h*w+u*P+d*K+f*at,r[9]=h*T+u*F+d*W+f*ft,r[13]=h*S+u*B+d*Z+f*At,r[2]=g*A+_*y+m*X+p*H,r[6]=g*w+_*P+m*K+p*at,r[10]=g*T+_*F+m*W+p*ft,r[14]=g*S+_*B+m*Z+p*At,r[3]=M*A+v*y+x*X+I*H,r[7]=M*w+v*P+x*K+I*at,r[11]=M*T+v*F+x*W+I*ft,r[15]=M*S+v*B+x*Z+I*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,v=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,I=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,A=e*M+n*v+i*x+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=M*w,t[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*w,t[2]=(a*m*r-_*l*r+_*i*c-n*m*c-a*i*p+n*l*p)*w,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*w,t[4]=v*w,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*w,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*p-e*l*p)*w,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*w,t[8]=x*w,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*w,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*w,t[12]=I*w,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*w,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*w,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,M=l*c,v=l*h,x=l*u,I=n.x,A=n.y,w=n.z;return i[0]=(1-(_+p))*I,i[1]=(f+x)*I,i[2]=(g-v)*I,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(g+v)*w,i[9]=(m-M)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ii.set(i[0],i[1],i[2]).length();const o=Ii.set(i[4],i[5],i[6]).length(),a=Ii.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],fn.copy(this);const c=1/r,h=1/o,u=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=On){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===On)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ho)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=On){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,f=(n+i)*h;let g,_;if(a===On)g=(o+r)*u,_=-2*u;else if(a===ho)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ii=new C,fn=new Lt,Mp=new C(0,0,0),Sp=new C(1,1,1),Kn=new C,xr=new C,qe=new C,vc=new Lt,yc=new be;class vn{constructor(t=0,e=0,n=0,i=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yc.setFromEuler(this),this.setFromQuaternion(yc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class Tl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let bp=0;const Mc=new C,Li=new be,In=new Lt,vr=new C,ws=new C,wp=new C,Ep=new be,Sc=new C(1,0,0),bc=new C(0,1,0),wc=new C(0,0,1),Ec={type:"added"},Ap={type:"removed"},Di={type:"childadded",child:null},No={type:"childremoved",child:null};class he extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new C,e=new vn,n=new be,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Lt},normalMatrix:{value:new zt}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(Sc,t)}rotateY(t){return this.rotateOnAxis(bc,t)}rotateZ(t){return this.rotateOnAxis(wc,t)}translateOnAxis(t,e){return Mc.copy(t).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sc,t)}translateY(t){return this.translateOnAxis(bc,t)}translateZ(t){return this.translateOnAxis(wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(ws,vr,this.up):In.lookAt(vr,ws,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Li.setFromRotationMatrix(In),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ec),Di.child=t,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ap),No.child=t,this.dispatchEvent(No),No.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ec),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,wp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Ep,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}he.DEFAULT_UP=new C(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new C,Ln=new C,Uo=new C,Dn=new C,Ni=new C,Ui=new C,Ac=new C,Fo=new C,Oo=new C,Bo=new C,ko=new ee,zo=new ee,Ho=new ee;class sn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),pn.subVectors(t,e),i.cross(pn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){pn.subVectors(i,e),Ln.subVectors(n,e),Uo.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(Ln),l=pn.dot(Uo),c=Ln.dot(Ln),h=Ln.dot(Uo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(o,Dn.y),l.addScaledVector(a,Dn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ko.setScalar(0),zo.setScalar(0),Ho.setScalar(0),ko.fromBufferAttribute(t,e),zo.fromBufferAttribute(t,n),Ho.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ko,r.x),o.addScaledVector(zo,r.y),o.addScaledVector(Ho,r.z),o}static isFrontFacing(t,e,n,i){return pn.subVectors(n,e),Ln.subVectors(t,e),pn.cross(Ln).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),pn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Ni.subVectors(i,n),Ui.subVectors(r,n),Fo.subVectors(t,n);const l=Ni.dot(Fo),c=Ui.dot(Fo);if(l<=0&&c<=0)return e.copy(n);Oo.subVectors(t,i);const h=Ni.dot(Oo),u=Ui.dot(Oo);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ni,o);Bo.subVectors(t,r);const f=Ni.dot(Bo),g=Ui.dot(Bo);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ui,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ac.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Ac,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Ni,o).addScaledVector(Ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Go(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Tt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=Al(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Go(o,r,t+1/3),this.g=Go(o,r,t),this.b=Go(o,r,t-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const n=ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return Yt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Ie(Ne.r*255,0,255))*65536+Math.round(Ie(Ne.g*255,0,255))*256+Math.round(Ie(Ne.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,i=Ne.g,r=Ne.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=we){Yt.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,i=Ne.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(yr);const n=ks($n.h,yr.h,e),i=ks($n.s,yr.s,e),r=ks($n.l,yr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Tt;Tt.NAMES=ku;let Tp=0;class cn extends bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ln(),this.name="",this.blending=Ji,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ga,this.blendDst=_a,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ga&&(n.blendSrc=this.blendSrc),this.blendDst!==_a&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ce extends cn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new C,Mr=new rt;class ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mr.fromBufferAttribute(this,e),Mr.applyMatrix3(t),this.setXY(e,Mr.x,Mr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==tl&&(t.usage=this.usage),t}}class zu extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Hu extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rp=0;const Qe=new Lt,Vo=new he,Fi=new C,Ye=new Hn,Es=new Hn,Ce=new C;class Re extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fu(t)?Hu:zu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Vo.lookAt(t),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(Ye.min,Es.min),Ye.expandByPoint(Ce),Ce.addVectors(Ye.max,Es.max),Ye.expandByPoint(Ce)):(Ye.expandByPoint(Es.min),Ye.expandByPoint(Es.max))}Ye.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ce.fromBufferAttribute(a,c),l&&(Fi.fromBufferAttribute(t,c),Ce.add(Fi)),i=Math.max(i,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new C,l[T]=new C;const c=new C,h=new C,u=new C,d=new rt,f=new rt,g=new rt,_=new C,m=new C;function p(T,S,y){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,T),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[T].add(_),a[S].add(_),a[y].add(_),l[T].add(m),l[S].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let T=0,S=M.length;T<S;++T){const y=M[T],P=y.start,F=y.count;for(let B=P,X=P+F;B<X;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const v=new C,x=new C,I=new C,A=new C;function w(T){I.fromBufferAttribute(i,T),A.copy(I);const S=a[T];v.copy(S),v.sub(I.multiplyScalar(I.dot(S))).normalize(),x.crossVectors(A,S);const P=x.dot(l[T])<0?-1:1;o.setXYZW(T,v.x,v.y,v.z,P)}for(let T=0,S=M.length;T<S;++T){const y=M[T],P=y.start,F=y.count;for(let B=P,X=P+F;B<X;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new ke(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tc=new Lt,ui=new er,Sr=new bn,Rc=new C,br=new C,wr=new C,Er=new C,Wo=new C,Ar=new C,Cc=new C,Tr=new C;class gt extends he{constructor(t=new Re,e=new ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Wo.fromBufferAttribute(u,t),o?Ar.addScaledVector(Wo,h):Ar.addScaledVector(Wo.sub(e),h))}e.add(Ar)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),ui.copy(t.ray).recast(t.near),!(Sr.containsPoint(ui.origin)===!1&&(ui.intersectSphere(Sr,Rc)===null||ui.origin.distanceToSquared(Rc)>(t.far-t.near)**2))&&(Tc.copy(r).invert(),ui.copy(t.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ui)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,I=v;x<I;x+=3){const A=a.getX(x),w=a.getX(x+1),T=a.getX(x+2);i=Rr(this,p,t,n,c,h,u,A,w,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);i=Rr(this,o,t,n,c,h,u,M,v,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,I=v;x<I;x+=3){const A=x,w=x+1,T=x+2;i=Rr(this,p,t,n,c,h,u,A,w,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const M=m,v=m+1,x=m+2;i=Rr(this,o,t,n,c,h,u,M,v,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Cp(s,t,e,n,i,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===xn,a),l===null)return null;Tr.copy(a),Tr.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Tr);return c<e.near||c>e.far?null:{distance:c,point:Tr.clone(),object:s}}function Rr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,br),s.getVertexPosition(l,wr),s.getVertexPosition(c,Er);const h=Cp(s,t,e,n,br,wr,Er,Cc);if(h){const u=new C;sn.getBarycoord(Cc,br,wr,Er,u),i&&(h.uv=sn.getInterpolatedAttribute(i,a,l,c,u,new rt)),r&&(h.uv1=sn.getInterpolatedAttribute(r,a,l,c,u,new rt)),o&&(h.normal=sn.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new C,materialIndex:0};sn.getNormal(br,wr,Er,d.normal),h.face=d,h.barycoord=u}return h}class Ht extends Re{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(_,m,p,M,v,x,I,A,w,T,S){const y=x/w,P=I/T,F=x/2,B=I/2,X=A/2,K=w+1,W=T+1;let Z=0,H=0;const at=new C;for(let ft=0;ft<W;ft++){const At=ft*P-B;for(let Wt=0;Wt<K;Wt++){const Rt=Wt*y-F;at[_]=Rt*M,at[m]=At*v,at[p]=X,c.push(at.x,at.y,at.z),at[_]=0,at[m]=0,at[p]=A>0?1:-1,h.push(at.x,at.y,at.z),u.push(Wt/w),u.push(1-ft/T),Z+=1}}for(let ft=0;ft<T;ft++)for(let At=0;At<w;At++){const Wt=d+At+K*ft,Rt=d+At+K*(ft+1),G=d+(At+1)+K*(ft+1),Q=d+(At+1)+K*ft;l.push(Wt,Rt,Q),l.push(Rt,G,Q),H+=6}a.addGroup(f,H,S),f+=H,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ht(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cs(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Oe(s){const t={};for(let e=0;e<s.length;e++){const n=cs(s[e]);for(const i in n)t[i]=n[i]}return t}function Pp(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Gu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const Ip={clone:cs,merge:Oe};var Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends cn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=Pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Vu extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new C,Pc=new rt,Ic=new rt;class Be extends Vu{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Pc,Ic),e.subVectors(Ic,Pc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,Bi=1;class Np extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Be(Oi,Bi,t,e);i.layers=this.layers,this.add(i);const r=new Be(Oi,Bi,t,e);r.layers=this.layers,this.add(r);const o=new Be(Oi,Bi,t,e);o.layers=this.layers,this.add(o);const a=new Be(Oi,Bi,t,e);a.layers=this.layers,this.add(a);const l=new Be(Oi,Bi,t,e);l.layers=this.layers,this.add(l);const c=new Be(Oi,Bi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wu extends Ee{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ss,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Up extends Mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Wu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ve}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ht(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:ni});r.uniforms.tEquirect.value=e;const o=new gt(i,r),a=e.minFilter;return e.minFilter===Sn&&(e.minFilter=Ve),new Np(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Xo=new C,Fp=new C,Op=new zt;class gi{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Xo.subVectors(n,e).cross(Fp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Op.getNormalMatrix(t),i=this.coplanarPoint(Xo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new bn,Cr=new C;class Rl{constructor(t=new gi,e=new gi,n=new gi,i=new gi,r=new gi,o=new gi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],M=i[13],v=i[14],x=i[15];if(n[0].setComponents(l-r,d-c,m-f,x-p).normalize(),n[1].setComponents(l+r,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+g,x+M).normalize(),n[3].setComponents(l-o,d-h,m-g,x-M).normalize(),n[4].setComponents(l-a,d-u,m-_,x-v).normalize(),e===On)n[5].setComponents(l+a,d+u,m+_,x+v).normalize();else if(e===ho)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(t){return di.center.set(0,0,0),di.radius=.7071067811865476,di.applyMatrix4(t.matrixWorld),this.intersectsSphere(di)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Cr.x=i.normal.x>0?t.max.x:t.min.x,Cr.y=i.normal.y>0?t.max.y:t.min.y,Cr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Bp(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class wi extends Re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const M=p*d-o;for(let v=0;v<c;v++){const x=v*u-r;g.push(x,-M,0),_.push(0,0,1),m.push(v/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const v=M+c*p,x=M+c*(p+1),I=M+1+c*(p+1),A=M+1+c*p;f.push(v,x,A),f.push(x,I,A)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wi(t.width,t.height,t.widthSegments,t.heightSegments)}}var kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,em=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,lm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_m=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ym=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Em=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Im=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Om=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Bm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,km=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ym=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Km=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,i0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,p0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,b0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,A0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,R0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,D0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,X0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,q0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Y0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ig=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,og=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ag=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_g=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:kp,alphahash_pars_fragment:zp,alphamap_fragment:Hp,alphamap_pars_fragment:Gp,alphatest_fragment:Vp,alphatest_pars_fragment:Wp,aomap_fragment:Xp,aomap_pars_fragment:qp,batching_pars_vertex:Yp,batching_vertex:Kp,begin_vertex:$p,beginnormal_vertex:jp,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:Qp,clipping_planes_fragment:tm,clipping_planes_pars_fragment:em,clipping_planes_pars_vertex:nm,clipping_planes_vertex:im,color_fragment:sm,color_pars_fragment:rm,color_pars_vertex:om,color_vertex:am,common:lm,cube_uv_reflection_fragment:cm,defaultnormal_vertex:hm,displacementmap_pars_vertex:um,displacementmap_vertex:dm,emissivemap_fragment:fm,emissivemap_pars_fragment:pm,colorspace_fragment:mm,colorspace_pars_fragment:gm,envmap_fragment:_m,envmap_common_pars_fragment:xm,envmap_pars_fragment:vm,envmap_pars_vertex:ym,envmap_physical_pars_fragment:Im,envmap_vertex:Mm,fog_vertex:Sm,fog_pars_vertex:bm,fog_fragment:wm,fog_pars_fragment:Em,gradientmap_pars_fragment:Am,lightmap_pars_fragment:Tm,lights_lambert_fragment:Rm,lights_lambert_pars_fragment:Cm,lights_pars_begin:Pm,lights_toon_fragment:Lm,lights_toon_pars_fragment:Dm,lights_phong_fragment:Nm,lights_phong_pars_fragment:Um,lights_physical_fragment:Fm,lights_physical_pars_fragment:Om,lights_fragment_begin:Bm,lights_fragment_maps:km,lights_fragment_end:zm,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Vm,logdepthbuf_vertex:Wm,map_fragment:Xm,map_pars_fragment:qm,map_particle_fragment:Ym,map_particle_pars_fragment:Km,metalnessmap_fragment:$m,metalnessmap_pars_fragment:jm,morphinstance_vertex:Zm,morphcolor_vertex:Jm,morphnormal_vertex:Qm,morphtarget_pars_vertex:t0,morphtarget_vertex:e0,normal_fragment_begin:n0,normal_fragment_maps:i0,normal_pars_fragment:s0,normal_pars_vertex:r0,normal_vertex:o0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:l0,clearcoat_normal_fragment_maps:c0,clearcoat_pars_fragment:h0,iridescence_pars_fragment:u0,opaque_fragment:d0,packing:f0,premultiplied_alpha_fragment:p0,project_vertex:m0,dithering_fragment:g0,dithering_pars_fragment:_0,roughnessmap_fragment:x0,roughnessmap_pars_fragment:v0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:M0,shadowmap_vertex:S0,shadowmask_pars_fragment:b0,skinbase_vertex:w0,skinning_pars_vertex:E0,skinning_vertex:A0,skinnormal_vertex:T0,specularmap_fragment:R0,specularmap_pars_fragment:C0,tonemapping_fragment:P0,tonemapping_pars_fragment:I0,transmission_fragment:L0,transmission_pars_fragment:D0,uv_pars_fragment:N0,uv_pars_vertex:U0,uv_vertex:F0,worldpos_vertex:O0,background_vert:B0,background_frag:k0,backgroundCube_vert:z0,backgroundCube_frag:H0,cube_vert:G0,cube_frag:V0,depth_vert:W0,depth_frag:X0,distanceRGBA_vert:q0,distanceRGBA_frag:Y0,equirect_vert:K0,equirect_frag:$0,linedashed_vert:j0,linedashed_frag:Z0,meshbasic_vert:J0,meshbasic_frag:Q0,meshlambert_vert:tg,meshlambert_frag:eg,meshmatcap_vert:ng,meshmatcap_frag:ig,meshnormal_vert:sg,meshnormal_frag:rg,meshphong_vert:og,meshphong_frag:ag,meshphysical_vert:lg,meshphysical_frag:cg,meshtoon_vert:hg,meshtoon_frag:ug,points_vert:dg,points_frag:fg,shadow_vert:pg,shadow_frag:mg,sprite_vert:gg,sprite_frag:_g},ot={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Mn={basic:{uniforms:Oe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Oe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Oe([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Oe([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Oe([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Oe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Oe([ot.points,ot.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Oe([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Oe([ot.common,ot.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Oe([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Oe([ot.sprite,ot.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Oe([ot.common,ot.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Oe([ot.lights,ot.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Mn.physical={uniforms:Oe([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Pr={r:0,b:0,g:0},fi=new vn,xg=new Lt;function vg(s,t,e,n,i,r,o){const a=new Tt(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const x=g(M);x===null?p(a,l):x&&x.isColor&&(p(x,1),v=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,v){const x=g(v);x&&(x.isCubeTexture||x.mapping===go)?(h===void 0&&(h=new gt(new Ht(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:cs(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),fi.copy(v.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xg.makeRotationFromEuler(fi)),h.material.toneMapped=Yt.getTransfer(x.colorSpace)!==le,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new gt(new wi(2,2),new ri({name:"BackgroundMaterial",uniforms:cs(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(x.colorSpace)!==le,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(Pr,Gu(s)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m}}function yg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(y,P,F,B,X){let K=!1;const W=u(B,F,P);r!==W&&(r=W,c(r.object)),K=f(y,B,F,X),K&&g(y,B,F,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(y,P,F,B),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,P,F){const B=F.wireframe===!0;let X=n[y.id];X===void 0&&(X={},n[y.id]=X);let K=X[P.id];K===void 0&&(K={},X[P.id]=K);let W=K[B];return W===void 0&&(W=d(l()),K[B]=W),W}function d(y){const P=[],F=[],B=[];for(let X=0;X<e;X++)P[X]=0,F[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:B,object:y,attributes:{},index:null}}function f(y,P,F,B){const X=r.attributes,K=P.attributes;let W=0;const Z=F.getAttributes();for(const H in Z)if(Z[H].location>=0){const ft=X[H];let At=K[H];if(At===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(At=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(At=y.instanceColor)),ft===void 0||ft.attribute!==At||At&&ft.data!==At.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(y,P,F,B){const X={},K=P.attributes;let W=0;const Z=F.getAttributes();for(const H in Z)if(Z[H].location>=0){let ft=K[H];ft===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor));const At={};At.attribute=ft,ft&&ft.data&&(At.data=ft.data),X[H]=At,W++}r.attributes=X,r.attributesNum=W,r.index=B}function _(){const y=r.newAttributes;for(let P=0,F=y.length;P<F;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const F=r.newAttributes,B=r.enabledAttributes,X=r.attributeDivisors;F[y]=1,B[y]===0&&(s.enableVertexAttribArray(y),B[y]=1),X[y]!==P&&(s.vertexAttribDivisor(y,P),X[y]=P)}function M(){const y=r.newAttributes,P=r.enabledAttributes;for(let F=0,B=P.length;F<B;F++)P[F]!==y[F]&&(s.disableVertexAttribArray(F),P[F]=0)}function v(y,P,F,B,X,K,W){W===!0?s.vertexAttribIPointer(y,P,F,X,K):s.vertexAttribPointer(y,P,F,B,X,K)}function x(y,P,F,B){_();const X=B.attributes,K=F.getAttributes(),W=P.defaultAttributeValues;for(const Z in K){const H=K[Z];if(H.location>=0){let at=X[Z];if(at===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(at=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(at=y.instanceColor)),at!==void 0){const ft=at.normalized,At=at.itemSize,Wt=t.get(at);if(Wt===void 0)continue;const Rt=Wt.buffer,G=Wt.type,Q=Wt.bytesPerElement,yt=G===s.INT||G===s.UNSIGNED_INT||at.gpuType===_l;if(at.isInterleavedBufferAttribute){const lt=at.data,Ct=lt.stride,Ft=at.offset;if(lt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<H.locationSize;Xt++)p(H.location+Xt,lt.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Xt=0;Xt<H.locationSize;Xt++)m(H.location+Xt);s.bindBuffer(s.ARRAY_BUFFER,Rt);for(let Xt=0;Xt<H.locationSize;Xt++)v(H.location+Xt,At/H.locationSize,G,ft,Ct*Q,(Ft+At/H.locationSize*Xt)*Q,yt)}else{if(at.isInstancedBufferAttribute){for(let lt=0;lt<H.locationSize;lt++)p(H.location+lt,at.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let lt=0;lt<H.locationSize;lt++)m(H.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Rt);for(let lt=0;lt<H.locationSize;lt++)v(H.location+lt,At/H.locationSize,G,ft,At*Q,At/H.locationSize*lt*Q,yt)}}else if(W!==void 0){const ft=W[Z];if(ft!==void 0)switch(ft.length){case 2:s.vertexAttrib2fv(H.location,ft);break;case 3:s.vertexAttrib3fv(H.location,ft);break;case 4:s.vertexAttrib4fv(H.location,ft);break;default:s.vertexAttrib1fv(H.location,ft)}}}}M()}function I(){T();for(const y in n){const P=n[y];for(const F in P){const B=P[F];for(const X in B)h(B[X].object),delete B[X];delete P[F]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const F in P){const B=P[F];for(const X in B)h(B[X].object),delete B[X];delete P[F]}delete n[y.id]}function w(y){for(const P in n){const F=n[P];if(F[y.id]===void 0)continue;const B=F[y.id];for(const X in B)h(B[X].object),delete B[X];delete F[y.id]}}function T(){S(),o=!0,r!==i&&(r=i,c(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Mg(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Sg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==rn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const T=w===tr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==zn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==_n&&!T)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:I,maxSamples:A}}function bg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new gi,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,v=M*4;let x=p.clippingState||null;l.value=x,x=h(g,d,v,f);for(let I=0;I!==v;++I)x[I]=e[I];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,x=f;v!==_;++v,x+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function wg(s){let t=new WeakMap;function e(o,a){return a===Ea?o.mapping=ss:a===Aa&&(o.mapping=rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ea||a===Aa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Up(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Cl extends Vu{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ji=4,Lc=[.125,.215,.35,.446,.526,.582],vi=20,qo=new Cl,Dc=new Tt;let Yo=null,Ko=0,$o=0,jo=!1;const _i=(1+Math.sqrt(5))/2,ki=1/_i,Nc=[new C(-_i,ki,0),new C(_i,ki,0),new C(-ki,0,_i),new C(ki,0,_i),new C(0,_i,-ki),new C(0,_i,ki),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Uc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Yo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yo,Ko,$o),this._renderer.xr.enabled=jo,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:tr,format:rn,colorSpace:ze,depthBuffer:!1},i=Fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eg(r)),this._blurMaterial=Ag(r,t,e)}return i}_compileMaterial(t){const e=new gt(this._lodPlanes[0],t);this._renderer.compile(e,qo)}_sceneToCubeUV(t,e,n,i){const a=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Dc),h.toneMapping=ii,h.autoClear=!1;const f=new ce({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new gt(new Ht,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(Dc),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const v=this._cubeSize;Ir(i,M*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ss||t.mapping===rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ir(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,qo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Nc[(i-r-1)%Nc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new gt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const p=[];let M=0;for(let w=0;w<vi;++w){const T=w/_,S=Math.exp(-T*T/2);p.push(S),w===0?M+=S:w<m&&(M+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const x=this._sizeLods[i],I=3*x*(i>v-ji?i-v+ji:0),A=4*(this._cubeSize-x);Ir(e,I,A,3*x,2*x),l.setRenderTarget(e),l.render(u,qo)}}function Eg(s){const t=[],e=[],n=[];let i=s;const r=s-ji+1+Lc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-ji?l=Lc[o-s+ji-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),v=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,T=A>2?0:-1,S=[w,T,0,w+2/3,T,0,w+2/3,T+1,0,w,T,0,w+2/3,T+1,0,w,T+1,0];M.set(S,_*g*A),v.set(d,m*g*A);const y=[A,A,A,A,A,A];x.set(y,p*g*A)}const I=new Re;I.setAttribute("position",new ke(M,_)),I.setAttribute("uv",new ke(v,m)),I.setAttribute("faceIndex",new ke(x,p)),t.push(I),i>ji&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fc(s,t,e){const n=new Mi(s,t,e);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ir(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ag(s,t,e){const n=new Float32Array(vi),i=new C(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Oc(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Bc(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ea||l===Aa,h=l===ss||l===rs;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Uc(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Uc(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Rg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Cg(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let v=0,x=M.length;v<x;v+=3){const I=M[v+0],A=M[v+1],w=M[v+2];d.push(I,A,A,w,w,I)}}else if(g!==void 0){const M=g.array;_=g.version;for(let v=0,x=M.length/3-1;v<x;v+=3){const I=v+0,A=v+1,w=v+2;d.push(I,A,A,w,w,I)}}else return;const m=new(Fu(d)?Hu:zu)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Pg(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ig(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Lg(s,t,e){const n=new WeakMap,i=new ee;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let y=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let I=a.attributes.position.count*x,A=1;I>t.maxTextureSize&&(A=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const w=new Float32Array(I*A*4*u),T=new Bu(w,I,A,u);T.type=_n,T.needsUpdate=!0;const S=x*4;for(let P=0;P<u;P++){const F=p[P],B=M[P],X=v[P],K=I*A*4*P;for(let W=0;W<F.count;W++){const Z=W*S;g===!0&&(i.fromBufferAttribute(F,W),w[K+Z+0]=i.x,w[K+Z+1]=i.y,w[K+Z+2]=i.z,w[K+Z+3]=0),_===!0&&(i.fromBufferAttribute(B,W),w[K+Z+4]=i.x,w[K+Z+5]=i.y,w[K+Z+6]=i.z,w[K+Z+7]=0),m===!0&&(i.fromBufferAttribute(X,W),w[K+Z+8]=i.x,w[K+Z+9]=i.y,w[K+Z+10]=i.z,w[K+Z+11]=X.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new rt(I,A)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Dg(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class qu extends Ee{constructor(t,e,n,i,r,o,a,l,c,h=ts){if(h!==ts&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ts&&(n=yi),n===void 0&&h===as&&(n=os),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ue,this.minFilter=l!==void 0?l:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Yu=new Ee,kc=new qu(1,1),Ku=new Bu,$u=new vp,ju=new Wu,zc=[],Hc=[],Gc=new Float32Array(16),Vc=new Float32Array(9),Wc=new Float32Array(4);function ps(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=zc[i];if(r===void 0&&(r=new Float32Array(i),zc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Te(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function xo(s,t){let e=Hc[t];e===void 0&&(e=new Int32Array(t),Hc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Ng(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ug(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),Te(e,t)}}function Fg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),Te(e,t)}}function Og(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),Te(e,t)}}function Bg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ae(e,n))return;Wc.set(n),s.uniformMatrix2fv(this.addr,!1,Wc),Te(e,n)}}function kg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ae(e,n))return;Vc.set(n),s.uniformMatrix3fv(this.addr,!1,Vc),Te(e,n)}}function zg(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ae(e,n))return;Gc.set(n),s.uniformMatrix4fv(this.addr,!1,Gc),Te(e,n)}}function Hg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Gg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),Te(e,t)}}function Vg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),Te(e,t)}}function Wg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),Te(e,t)}}function Xg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),Te(e,t)}}function Yg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),Te(e,t)}}function Kg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),Te(e,t)}}function $g(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(kc.compareFunction=Uu,r=kc):r=Yu,e.setTexture2D(t||r,i)}function jg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||$u,i)}function Zg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ju,i)}function Jg(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ku,i)}function Qg(s){switch(s){case 5126:return Ng;case 35664:return Ug;case 35665:return Fg;case 35666:return Og;case 35674:return Bg;case 35675:return kg;case 35676:return zg;case 5124:case 35670:return Hg;case 35667:case 35671:return Gg;case 35668:case 35672:return Vg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}function t_(s,t){s.uniform1fv(this.addr,t)}function e_(s,t){const e=ps(t,this.size,2);s.uniform2fv(this.addr,e)}function n_(s,t){const e=ps(t,this.size,3);s.uniform3fv(this.addr,e)}function i_(s,t){const e=ps(t,this.size,4);s.uniform4fv(this.addr,e)}function s_(s,t){const e=ps(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function r_(s,t){const e=ps(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function o_(s,t){const e=ps(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function a_(s,t){s.uniform1iv(this.addr,t)}function l_(s,t){s.uniform2iv(this.addr,t)}function c_(s,t){s.uniform3iv(this.addr,t)}function h_(s,t){s.uniform4iv(this.addr,t)}function u_(s,t){s.uniform1uiv(this.addr,t)}function d_(s,t){s.uniform2uiv(this.addr,t)}function f_(s,t){s.uniform3uiv(this.addr,t)}function p_(s,t){s.uniform4uiv(this.addr,t)}function m_(s,t,e){const n=this.cache,i=t.length,r=xo(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Yu,r[o])}function g_(s,t,e){const n=this.cache,i=t.length,r=xo(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||$u,r[o])}function __(s,t,e){const n=this.cache,i=t.length,r=xo(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ju,r[o])}function x_(s,t,e){const n=this.cache,i=t.length,r=xo(e,i);Ae(n,r)||(s.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ku,r[o])}function v_(s){switch(s){case 5126:return t_;case 35664:return e_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return r_;case 35676:return o_;case 5124:case 35670:return a_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return d_;case 36295:return f_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return __;case 36289:case 36303:case 36311:case 36292:return x_}}class y_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qg(e.type)}}class M_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v_(e.type)}}class S_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function Xc(s,t){s.seq.push(t),s.map[t.id]=t}function b_(s,t,e){const n=s.name,i=n.length;for(Zo.lastIndex=0;;){const r=Zo.exec(n),o=Zo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Xc(e,c===void 0?new y_(a,s,t):new M_(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new S_(a),Xc(e,u)),e=u}}}class so{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);b_(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function qc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const w_=37297;let E_=0;function A_(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Yc=new zt;function T_(s){Yt._getMatrix(Yc,Yt.workingColorSpace,s);const t=`mat3( ${Yc.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case _o:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Kc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+A_(s.getShaderSource(t),o)}else return i}function R_(s,t){const e=T_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function C_(s,t){let e;switch(t){case Tf:e="Linear";break;case Rf:e="Reinhard";break;case Cf:e="Cineon";break;case Pf:e="ACESFilmic";break;case Lf:e="AgX";break;case Df:e="Neutral";break;case If:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Lr=new C;function P_(){Yt.getLuminanceCoefficients(Lr);const s=Lr.x.toFixed(4),t=Lr.y.toFixed(4),e=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function I_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function L_(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function D_(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Os(s){return s!==""}function $c(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N_=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(s){return s.replace(N_,F_)}const U_=new Map;function F_(s,t){let e=Vt[t];if(e===void 0){const n=U_.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return el(e)}const O_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(s){return s.replace(O_,B_)}function B_(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function k_(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===yu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Mu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function z_(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case go:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H_(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case rs:t="ENVMAP_MODE_REFRACTION";break}return t}function G_(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case gl:t="ENVMAP_BLENDING_MULTIPLY";break;case Ef:t="ENVMAP_BLENDING_MIX";break;case Af:t="ENVMAP_BLENDING_ADD";break}return t}function V_(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function W_(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=k_(e),c=z_(e),h=H_(e),u=G_(e),d=V_(e),f=I_(e),g=L_(r),_=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(m=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ii?"#define TONE_MAPPING":"",e.toneMapping!==ii?Vt.tonemapping_pars_fragment:"",e.toneMapping!==ii?C_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,R_("linearToOutputTexel",e.outputColorSpace),P_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),o=el(o),o=$c(o,e),o=jc(o,e),a=el(a),a=$c(a,e),a=jc(a,e),o=Zc(o),a=Zc(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+m+o,x=M+p+a,I=qc(i,i.VERTEX_SHADER,v),A=qc(i,i.FRAGMENT_SHADER,x);i.attachShader(_,I),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(P){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),B=i.getShaderInfoLog(I).trim(),X=i.getShaderInfoLog(A).trim();let K=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,I,A);else{const Z=Kc(i,I,"vertex"),H=Kc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+Z+`
`+H)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||X==="")&&(W=!1);W&&(P.diagnostics={runnable:K,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(I),i.deleteShader(A),T=new so(i,_),S=D_(i,_)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,w_)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=E_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=A,this}let X_=0;class q_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Y_(t),e.set(t,n)),n}}class Y_{constructor(t){this.id=X_++,this.code=t,this.usedTimes=0}}function K_(s,t,e,n,i,r,o){const a=new Tl,l=new q_,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,F,B){const X=F.fog,K=B.geometry,W=S.isMeshStandardMaterial?F.environment:null,Z=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),H=Z&&Z.mapping===go?Z.image.height:null,at=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ft=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,At=ft!==void 0?ft.length:0;let Wt=0;K.morphAttributes.position!==void 0&&(Wt=1),K.morphAttributes.normal!==void 0&&(Wt=2),K.morphAttributes.color!==void 0&&(Wt=3);let Rt,G,Q,yt;if(at){const oe=Mn[at];Rt=oe.vertexShader,G=oe.fragmentShader}else Rt=S.vertexShader,G=S.fragmentShader,l.update(S),Q=l.getVertexShaderID(S),yt=l.getFragmentShaderID(S);const lt=s.getRenderTarget(),Ct=s.state.buffers.depth.getReversed(),Ft=B.isInstancedMesh===!0,Xt=B.isBatchedMesh===!0,xe=!!S.map,Zt=!!S.matcap,Me=!!Z,U=!!S.aoMap,Ze=!!S.lightMap,Kt=!!S.bumpMap,$t=!!S.normalMap,It=!!S.displacementMap,fe=!!S.emissiveMap,Pt=!!S.metalnessMap,R=!!S.roughnessMap,b=S.anisotropy>0,O=S.clearcoat>0,$=S.dispersion>0,J=S.iridescence>0,Y=S.sheen>0,wt=S.transmission>0,ht=b&&!!S.anisotropyMap,mt=O&&!!S.clearcoatMap,Jt=O&&!!S.clearcoatNormalMap,et=O&&!!S.clearcoatRoughnessMap,_t=J&&!!S.iridescenceMap,Dt=J&&!!S.iridescenceThicknessMap,Nt=Y&&!!S.sheenColorMap,xt=Y&&!!S.sheenRoughnessMap,jt=!!S.specularMap,Gt=!!S.specularColorMap,ue=!!S.specularIntensityMap,L=wt&&!!S.transmissionMap,ct=wt&&!!S.thicknessMap,V=!!S.gradientMap,j=!!S.alphaMap,pt=S.alphaTest>0,ut=!!S.alphaHash,Bt=!!S.extensions;let ye=ii;S.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ye=s.toneMapping);const Le={shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:Rt,fragmentShader:G,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:yt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Xt,batchingColor:Xt&&B._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&B.instanceColor!==null,instancingMorph:Ft&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ze,alphaToCoverage:!!S.alphaToCoverage,map:xe,matcap:Zt,envMap:Me,envMapMode:Me&&Z.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:Ze,bumpMap:Kt,normalMap:$t,displacementMap:d&&It,emissiveMap:fe,normalMapObjectSpace:$t&&S.normalMapType===Hf,normalMapTangentSpace:$t&&S.normalMapType===El,metalnessMap:Pt,roughnessMap:R,anisotropy:b,anisotropyMap:ht,clearcoat:O,clearcoatMap:mt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:et,dispersion:$,iridescence:J,iridescenceMap:_t,iridescenceThicknessMap:Dt,sheen:Y,sheenColorMap:Nt,sheenRoughnessMap:xt,specularMap:jt,specularColorMap:Gt,specularIntensityMap:ue,transmission:wt,transmissionMap:L,thicknessMap:ct,gradientMap:V,opaque:S.transparent===!1&&S.blending===Ji&&S.alphaToCoverage===!1,alphaMap:j,alphaTest:pt,alphaHash:ut,combine:S.combine,mapUv:xe&&_(S.map.channel),aoMapUv:U&&_(S.aoMap.channel),lightMapUv:Ze&&_(S.lightMap.channel),bumpMapUv:Kt&&_(S.bumpMap.channel),normalMapUv:$t&&_(S.normalMap.channel),displacementMapUv:It&&_(S.displacementMap.channel),emissiveMapUv:fe&&_(S.emissiveMap.channel),metalnessMapUv:Pt&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:ht&&_(S.anisotropyMap.channel),clearcoatMapUv:mt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(S.sheenRoughnessMap.channel),specularMapUv:jt&&_(S.specularMap.channel),specularColorMapUv:Gt&&_(S.specularColorMap.channel),specularIntensityMapUv:ue&&_(S.specularIntensityMap.channel),transmissionMapUv:L&&_(S.transmissionMap.channel),thicknessMapUv:ct&&_(S.thicknessMap.channel),alphaMapUv:j&&_(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&($t||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!K.attributes.uv&&(xe||j),fog:!!X,useFog:S.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ct,skinning:B.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Wt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&Yt.getTransfer(S.map.colorSpace)===le,decodeVideoTextureEmissive:fe&&S.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(S.emissiveMap.colorSpace)===le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===$e,flipSided:S.side===We,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Bt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&S.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(M(y,S),v(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function v(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const y=g[S.type];let P;if(y){const F=Mn[y];P=Ip.clone(F.uniforms)}else P=S.uniforms;return P}function I(S,y){let P;for(let F=0,B=h.length;F<B;F++){const X=h[F];if(X.cacheKey===y){P=X,++P.usedTimes;break}}return P===void 0&&(P=new W_(s,y,S,r),h.push(P)),P}function A(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function w(S){l.remove(S)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:T}}function $_(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function j_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Qc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function th(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||j_),n.length>1&&n.sort(d||Qc),i.length>1&&i.sort(d||Qc)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Z_(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new th,s.set(n,[o])):i>=r.length?(o=new th,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function J_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Tt};break;case"SpotLight":e={position:new C,direction:new C,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":e={color:new Tt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function Q_(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let tx=0;function ex(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function nx(s){const t=new J_,e=Q_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new Lt,o=new Lt;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,v=0,x=0,I=0,A=0,w=0;c.sort(ex);for(let S=0,y=c.length;S<y;S++){const P=c[S],F=P.color,B=P.intensity,X=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*B,u+=F.g*B,d+=F.b*B;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],B);w++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,H=e.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=W,f++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(F).multiplyScalar(B),W.distance=X,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;const Z=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,Z.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=Z.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=K,x++}_++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(F).multiplyScalar(B),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Z=P.shadow,H=e.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=P.shadow.matrix,v++}n.point[g]=W,g++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(B),W.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==f||T.pointLength!==g||T.spotLength!==_||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==M||T.numPointShadows!==v||T.numSpotShadows!==x||T.numSpotMaps!==I||T.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,T.directionalLength=f,T.pointLength=g,T.spotLength=_,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=M,T.numPointShadows=v,T.numSpotShadows=x,T.numSpotMaps=I,T.numLightProbes=w,n.version=tx++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const v=c[p];if(v.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(v.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(v.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function eh(s){const t=new nx(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ix(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new eh(s),t.set(i,[a])):r>=o.length?(a=new eh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class sx extends cn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=kf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rx extends cn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ax=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lx(s,t,e){let n=new Rl;const i=new rt,r=new rt,o=new ee,a=new sx({depthPacking:zf}),l=new rx,c={},h=e.maxTextureSize,u={[xn]:We,[We]:xn,[$e]:$e},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:ox,fragmentShader:ax}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Re;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yu;let p=this.type;this.render=function(A,w,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),F=s.state;F.setBlending(ni),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=p!==Un&&this.type===Un,X=p===Un&&this.type!==Un;for(let K=0,W=A.length;K<W;K++){const Z=A[K],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const at=H.getFrameExtents();if(i.multiply(at),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/at.x),i.x=r.x*at.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/at.y),i.y=r.y*at.y,H.mapSize.y=r.y)),H.map===null||B===!0||X===!0){const At=this.type!==Un?{minFilter:Ue,magFilter:Ue}:{};H.map!==null&&H.map.dispose(),H.map=new Mi(i.x,i.y,At),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ft=H.getViewportCount();for(let At=0;At<ft;At++){const Wt=H.getViewport(At);o.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),F.viewport(o),H.updateMatrices(Z,At),n=H.getFrustum(),x(w,T,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Un&&M(H,T),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,y,P)};function M(A,w){const T=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Mi(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,T,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,T,f,_,null)}function v(A,w,T,S){let y=null;const P=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=T.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=y.uuid,B=w.uuid;let X=c[F];X===void 0&&(X={},c[F]=X);let K=X[B];K===void 0&&(K=y.clone(),X[B]=K,w.addEventListener("dispose",I)),y=K}if(y.visible=w.visible,y.wireframe=w.wireframe,S===Un?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,T.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=s.properties.get(y);F.light=T}return y}function x(A,w,T,S,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Un)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);const B=t.update(A),X=A.material;if(Array.isArray(X)){const K=B.groups;for(let W=0,Z=K.length;W<Z;W++){const H=K[W],at=X[H.materialIndex];if(at&&at.visible){const ft=v(A,at,S,y);A.onBeforeShadow(s,A,w,T,B,ft,H),s.renderBufferDirect(T,null,B,ft,A,H),A.onAfterShadow(s,A,w,T,B,ft,H)}}}else if(X.visible){const K=v(A,X,S,y);A.onBeforeShadow(s,A,w,T,B,K,null),s.renderBufferDirect(T,null,B,K,A,null),A.onAfterShadow(s,A,w,T,B,K,null)}}const F=A.children;for(let B=0,X=F.length;B<X;B++)x(F[B],w,T,S,y)}function I(A){A.target.removeEventListener("dispose",I);for(const T in c){const S=c[T],y=A.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const cx={[xa]:va,[ya]:ba,[Ma]:wa,[is]:Sa,[va]:xa,[ba]:ya,[wa]:Ma,[Sa]:is};function hx(s,t){function e(){let L=!1;const ct=new ee;let V=null;const j=new ee(0,0,0,0);return{setMask:function(pt){V!==pt&&!L&&(s.colorMask(pt,pt,pt,pt),V=pt)},setLocked:function(pt){L=pt},setClear:function(pt,ut,Bt,ye,Le){Le===!0&&(pt*=ye,ut*=ye,Bt*=ye),ct.set(pt,ut,Bt,ye),j.equals(ct)===!1&&(s.clearColor(pt,ut,Bt,ye),j.copy(ct))},reset:function(){L=!1,V=null,j.set(-1,0,0,0)}}}function n(){let L=!1,ct=!1,V=null,j=null,pt=null;return{setReversed:function(ut){if(ct!==ut){const Bt=t.get("EXT_clip_control");ct?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const ye=pt;pt=null,this.setClear(ye)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?lt(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(ut){V!==ut&&!L&&(s.depthMask(ut),V=ut)},setFunc:function(ut){if(ct&&(ut=cx[ut]),j!==ut){switch(ut){case xa:s.depthFunc(s.NEVER);break;case va:s.depthFunc(s.ALWAYS);break;case ya:s.depthFunc(s.LESS);break;case is:s.depthFunc(s.LEQUAL);break;case Ma:s.depthFunc(s.EQUAL);break;case Sa:s.depthFunc(s.GEQUAL);break;case ba:s.depthFunc(s.GREATER);break;case wa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=ut}},setLocked:function(ut){L=ut},setClear:function(ut){pt!==ut&&(ct&&(ut=1-ut),s.clearDepth(ut),pt=ut)},reset:function(){L=!1,V=null,j=null,pt=null,ct=!1}}}function i(){let L=!1,ct=null,V=null,j=null,pt=null,ut=null,Bt=null,ye=null,Le=null;return{setTest:function(oe){L||(oe?lt(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(oe){ct!==oe&&!L&&(s.stencilMask(oe),ct=oe)},setFunc:function(oe,hn,Tn){(V!==oe||j!==hn||pt!==Tn)&&(s.stencilFunc(oe,hn,Tn),V=oe,j=hn,pt=Tn)},setOp:function(oe,hn,Tn){(ut!==oe||Bt!==hn||ye!==Tn)&&(s.stencilOp(oe,hn,Tn),ut=oe,Bt=hn,ye=Tn)},setLocked:function(oe){L=oe},setClear:function(oe){Le!==oe&&(s.clearStencil(oe),Le=oe)},reset:function(){L=!1,ct=null,V=null,j=null,pt=null,ut=null,Bt=null,ye=null,Le=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,v=null,x=null,I=null,A=null,w=new Tt(0,0,0),T=0,S=!1,y=null,P=null,F=null,B=null,X=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Z=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=Z>=2);let at=null,ft={};const At=s.getParameter(s.SCISSOR_BOX),Wt=s.getParameter(s.VIEWPORT),Rt=new ee().fromArray(At),G=new ee().fromArray(Wt);function Q(L,ct,V,j){const pt=new Uint8Array(4),ut=s.createTexture();s.bindTexture(L,ut),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Bt=0;Bt<V;Bt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,j,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(ct+Bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return ut}const yt={};yt[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(s.DEPTH_TEST),o.setFunc(is),Kt(!1),$t(rc),lt(s.CULL_FACE),U(ni);function lt(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Ct(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Ft(L,ct){return u[L]!==ct?(s.bindFramebuffer(L,ct),u[L]=ct,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ct),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function Xt(L,ct){let V=f,j=!1;if(L){V=d.get(ct),V===void 0&&(V=[],d.set(ct,V));const pt=L.textures;if(V.length!==pt.length||V[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Bt=pt.length;ut<Bt;ut++)V[ut]=s.COLOR_ATTACHMENT0+ut;V.length=pt.length,j=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,j=!0);j&&s.drawBuffers(V)}function xe(L){return g!==L?(s.useProgram(L),g=L,!0):!1}const Zt={[xi]:s.FUNC_ADD,[lf]:s.FUNC_SUBTRACT,[cf]:s.FUNC_REVERSE_SUBTRACT};Zt[hf]=s.MIN,Zt[uf]=s.MAX;const Me={[df]:s.ZERO,[ff]:s.ONE,[pf]:s.SRC_COLOR,[ga]:s.SRC_ALPHA,[yf]:s.SRC_ALPHA_SATURATE,[xf]:s.DST_COLOR,[gf]:s.DST_ALPHA,[mf]:s.ONE_MINUS_SRC_COLOR,[_a]:s.ONE_MINUS_SRC_ALPHA,[vf]:s.ONE_MINUS_DST_COLOR,[_f]:s.ONE_MINUS_DST_ALPHA,[Mf]:s.CONSTANT_COLOR,[Sf]:s.ONE_MINUS_CONSTANT_COLOR,[bf]:s.CONSTANT_ALPHA,[wf]:s.ONE_MINUS_CONSTANT_ALPHA};function U(L,ct,V,j,pt,ut,Bt,ye,Le,oe){if(L===ni){_===!0&&(Ct(s.BLEND),_=!1);return}if(_===!1&&(lt(s.BLEND),_=!0),L!==af){if(L!==m||oe!==S){if((p!==xi||x!==xi)&&(s.blendEquation(s.FUNC_ADD),p=xi,x=xi),oe)switch(L){case Ji:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qi:s.blendFunc(s.ONE,s.ONE);break;case oc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ac:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ji:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case oc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ac:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,v=null,I=null,A=null,w.set(0,0,0),T=0,m=L,S=oe}return}pt=pt||ct,ut=ut||V,Bt=Bt||j,(ct!==p||pt!==x)&&(s.blendEquationSeparate(Zt[ct],Zt[pt]),p=ct,x=pt),(V!==M||j!==v||ut!==I||Bt!==A)&&(s.blendFuncSeparate(Me[V],Me[j],Me[ut],Me[Bt]),M=V,v=j,I=ut,A=Bt),(ye.equals(w)===!1||Le!==T)&&(s.blendColor(ye.r,ye.g,ye.b,Le),w.copy(ye),T=Le),m=L,S=!1}function Ze(L,ct){L.side===$e?Ct(s.CULL_FACE):lt(s.CULL_FACE);let V=L.side===We;ct&&(V=!V),Kt(V),L.blending===Ji&&L.transparent===!1?U(ni):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const j=L.stencilWrite;a.setTest(j),j&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),fe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(L){y!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),y=L)}function $t(L){L!==rf?(lt(s.CULL_FACE),L!==P&&(L===rc?s.cullFace(s.BACK):L===of?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),P=L}function It(L){L!==F&&(W&&s.lineWidth(L),F=L)}function fe(L,ct,V){L?(lt(s.POLYGON_OFFSET_FILL),(B!==ct||X!==V)&&(s.polygonOffset(ct,V),B=ct,X=V)):Ct(s.POLYGON_OFFSET_FILL)}function Pt(L){L?lt(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function R(L){L===void 0&&(L=s.TEXTURE0+K-1),at!==L&&(s.activeTexture(L),at=L)}function b(L,ct,V){V===void 0&&(at===null?V=s.TEXTURE0+K-1:V=at);let j=ft[V];j===void 0&&(j={type:void 0,texture:void 0},ft[V]=j),(j.type!==L||j.texture!==ct)&&(at!==V&&(s.activeTexture(V),at=V),s.bindTexture(L,ct||yt[L]),j.type=L,j.texture=ct)}function O(){const L=ft[at];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(L){Rt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Rt.copy(L))}function xt(L){G.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),G.copy(L))}function jt(L,ct){let V=c.get(ct);V===void 0&&(V=new WeakMap,c.set(ct,V));let j=V.get(L);j===void 0&&(j=s.getUniformBlockIndex(ct,L.name),V.set(L,j))}function Gt(L,ct){const j=c.get(ct).get(L);l.get(ct)!==j&&(s.uniformBlockBinding(ct,j,L.__bindingPointIndex),l.set(ct,j))}function ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},at=null,ft={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,v=null,x=null,I=null,A=null,w=new Tt(0,0,0),T=0,S=!1,y=null,P=null,F=null,B=null,X=null,Rt.set(0,0,s.canvas.width,s.canvas.height),G.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Ct,bindFramebuffer:Ft,drawBuffers:Xt,useProgram:xe,setBlending:U,setMaterial:Ze,setFlipSided:Kt,setCullFace:$t,setLineWidth:It,setPolygonOffset:fe,setScissorTest:Pt,activeTexture:R,bindTexture:b,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:J,texImage2D:_t,texImage3D:Dt,updateUBOMapping:jt,uniformBlockBinding:Gt,texStorage2D:Jt,texStorage3D:et,texSubImage2D:Y,texSubImage3D:wt,compressedTexSubImage2D:ht,compressedTexSubImage3D:mt,scissor:Nt,viewport:xt,reset:ue}}function nh(s,t,e,n){const i=ux(n);switch(e){case Tu:return s*t;case Cu:return s*t;case Pu:return s*t*2;case yl:return s*t/i.components*i.byteLength;case Ml:return s*t/i.components*i.byteLength;case Iu:return s*t*2/i.components*i.byteLength;case Sl:return s*t*2/i.components*i.byteLength;case Ru:return s*t*3/i.components*i.byteLength;case rn:return s*t*4/i.components*i.byteLength;case bl:return s*t*4/i.components*i.byteLength;case Jr:case Qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case to:case eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ra:case Pa:return Math.max(s,16)*Math.max(t,8)/4;case Ta:case Ca:return Math.max(s,8)*Math.max(t,8)/2;case Ia:case La:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Da:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Fa:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ka:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case za:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ga:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Va:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case qa:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ya:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case no:case Ka:case $a:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Lu:case ja:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Za:case Ja:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ux(s){switch(s){case zn:case wu:return{byteLength:1,components:1};case Ws:case Eu:case tr:return{byteLength:2,components:1};case xl:case vl:return{byteLength:2,components:4};case yi:case _l:case _n:return{byteLength:4,components:1};case Au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function dx(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):Ys("canvas")}function _(R,b,O){let $=1;const J=Pt(R);if((J.width>O||J.height>O)&&($=O/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor($*J.width),wt=Math.floor($*J.height);u===void 0&&(u=g(Y,wt));const ht=b?g(Y,wt):u;return ht.width=Y,ht.height=wt,ht.getContext("2d").drawImage(R,0,0,Y,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+wt+")."),ht}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){s.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(R,b,O,$,J=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=b;if(b===s.RED&&(O===s.FLOAT&&(Y=s.R32F),O===s.HALF_FLOAT&&(Y=s.R16F),O===s.UNSIGNED_BYTE&&(Y=s.R8)),b===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.R8UI),O===s.UNSIGNED_SHORT&&(Y=s.R16UI),O===s.UNSIGNED_INT&&(Y=s.R32UI),O===s.BYTE&&(Y=s.R8I),O===s.SHORT&&(Y=s.R16I),O===s.INT&&(Y=s.R32I)),b===s.RG&&(O===s.FLOAT&&(Y=s.RG32F),O===s.HALF_FLOAT&&(Y=s.RG16F),O===s.UNSIGNED_BYTE&&(Y=s.RG8)),b===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RG8UI),O===s.UNSIGNED_SHORT&&(Y=s.RG16UI),O===s.UNSIGNED_INT&&(Y=s.RG32UI),O===s.BYTE&&(Y=s.RG8I),O===s.SHORT&&(Y=s.RG16I),O===s.INT&&(Y=s.RG32I)),b===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),O===s.UNSIGNED_INT&&(Y=s.RGB32UI),O===s.BYTE&&(Y=s.RGB8I),O===s.SHORT&&(Y=s.RGB16I),O===s.INT&&(Y=s.RGB32I)),b===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),O===s.UNSIGNED_INT&&(Y=s.RGBA32UI),O===s.BYTE&&(Y=s.RGBA8I),O===s.SHORT&&(Y=s.RGBA16I),O===s.INT&&(Y=s.RGBA32I)),b===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),b===s.RGBA){const wt=J?_o:Yt.getTransfer($);O===s.FLOAT&&(Y=s.RGBA32F),O===s.HALF_FLOAT&&(Y=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Y=wt===le?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function x(R,b){let O;return R?b===null||b===yi||b===os?O=s.DEPTH24_STENCIL8:b===_n?O=s.DEPTH32F_STENCIL8:b===Ws&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===yi||b===os?O=s.DEPTH_COMPONENT24:b===_n?O=s.DEPTH_COMPONENT32F:b===Ws&&(O=s.DEPTH_COMPONENT16),O}function I(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ue&&R.minFilter!==Ve?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){const b=R.target;b.removeEventListener("dispose",A),T(b),b.isVideoTexture&&h.delete(b)}function w(R){const b=R.target;b.removeEventListener("dispose",w),y(b)}function T(R){const b=n.get(R);if(b.__webglInit===void 0)return;const O=R.source,$=d.get(O);if($){const J=$[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&S(R),Object.keys($).length===0&&d.delete(O)}n.remove(R)}function S(R){const b=n.get(R);s.deleteTexture(b.__webglTexture);const O=R.source,$=d.get(O);delete $[b.__cacheKey],o.memory.textures--}function y(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(b.__webglFramebuffer[$]))for(let J=0;J<b.__webglFramebuffer[$].length;J++)s.deleteFramebuffer(b.__webglFramebuffer[$][J]);else s.deleteFramebuffer(b.__webglFramebuffer[$]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[$])}else{if(Array.isArray(b.__webglFramebuffer))for(let $=0;$<b.__webglFramebuffer.length;$++)s.deleteFramebuffer(b.__webglFramebuffer[$]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let $=0;$<b.__webglColorRenderbuffer.length;$++)b.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[$]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=R.textures;for(let $=0,J=O.length;$<J;$++){const Y=n.get(O[$]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(O[$])}n.remove(R)}let P=0;function F(){P=0}function B(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function X(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function K(R,b){const O=n.get(R);if(R.isVideoTexture&&It(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(O,R,b);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+b)}function W(R,b){const O=n.get(R);if(R.version>0&&O.__version!==R.version){G(O,R,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+b)}function Z(R,b){const O=n.get(R);if(R.version>0&&O.__version!==R.version){G(O,R,b);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+b)}function H(R,b){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Q(O,R,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+b)}const at={[si]:s.REPEAT,[ti]:s.CLAMP_TO_EDGE,[lo]:s.MIRRORED_REPEAT},ft={[Ue]:s.NEAREST,[bu]:s.NEAREST_MIPMAP_NEAREST,[Us]:s.NEAREST_MIPMAP_LINEAR,[Ve]:s.LINEAR,[Zr]:s.LINEAR_MIPMAP_NEAREST,[Sn]:s.LINEAR_MIPMAP_LINEAR},At={[Gf]:s.NEVER,[Kf]:s.ALWAYS,[Vf]:s.LESS,[Uu]:s.LEQUAL,[Wf]:s.EQUAL,[Yf]:s.GEQUAL,[Xf]:s.GREATER,[qf]:s.NOTEQUAL};function Wt(R,b){if(b.type===_n&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ve||b.magFilter===Zr||b.magFilter===Us||b.magFilter===Sn||b.minFilter===Ve||b.minFilter===Zr||b.minFilter===Us||b.minFilter===Sn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,at[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,at[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,at[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ft[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ft[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,At[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ue||b.minFilter!==Us&&b.minFilter!==Sn||b.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Rt(R,b){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));const $=b.source;let J=d.get($);J===void 0&&(J={},d.set($,J));const Y=X(b);if(Y!==R.__cacheKey){J[Y]===void 0&&(J[Y]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),J[Y].usedTimes++;const wt=J[R.__cacheKey];wt!==void 0&&(J[R.__cacheKey].usedTimes--,wt.usedTimes===0&&S(b)),R.__cacheKey=Y,R.__webglTexture=J[Y].texture}return O}function G(R,b,O){let $=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&($=s.TEXTURE_3D);const J=Rt(R,b),Y=b.source;e.bindTexture($,R.__webglTexture,s.TEXTURE0+O);const wt=n.get(Y);if(Y.version!==wt.__version||J===!0){e.activeTexture(s.TEXTURE0+O);const ht=Yt.getPrimaries(Yt.workingColorSpace),mt=b.colorSpace===Jn?null:Yt.getPrimaries(b.colorSpace),Jt=b.colorSpace===Jn||ht===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let et=_(b.image,!1,i.maxTextureSize);et=fe(b,et);const _t=r.convert(b.format,b.colorSpace),Dt=r.convert(b.type);let Nt=v(b.internalFormat,_t,Dt,b.colorSpace,b.isVideoTexture);Wt($,b);let xt;const jt=b.mipmaps,Gt=b.isVideoTexture!==!0,ue=wt.__version===void 0||J===!0,L=Y.dataReady,ct=I(b,et);if(b.isDepthTexture)Nt=x(b.format===as,b.type),ue&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,Nt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Nt,et.width,et.height,0,_t,Dt,null));else if(b.isDataTexture)if(jt.length>0){Gt&&ue&&e.texStorage2D(s.TEXTURE_2D,ct,Nt,jt[0].width,jt[0].height);for(let V=0,j=jt.length;V<j;V++)xt=jt[V],Gt?L&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,xt.width,xt.height,_t,Dt,xt.data):e.texImage2D(s.TEXTURE_2D,V,Nt,xt.width,xt.height,0,_t,Dt,xt.data);b.generateMipmaps=!1}else Gt?(ue&&e.texStorage2D(s.TEXTURE_2D,ct,Nt,et.width,et.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,_t,Dt,et.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,et.width,et.height,0,_t,Dt,et.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Gt&&ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Nt,jt[0].width,jt[0].height,et.depth);for(let V=0,j=jt.length;V<j;V++)if(xt=jt[V],b.format!==rn)if(_t!==null)if(Gt){if(L)if(b.layerUpdates.size>0){const pt=nh(xt.width,xt.height,b.format,b.type);for(const ut of b.layerUpdates){const Bt=xt.data.subarray(ut*pt/xt.data.BYTES_PER_ELEMENT,(ut+1)*pt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,ut,xt.width,xt.height,1,_t,Bt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,xt.width,xt.height,et.depth,_t,xt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,Nt,xt.width,xt.height,et.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,xt.width,xt.height,et.depth,_t,Dt,xt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,V,Nt,xt.width,xt.height,et.depth,0,_t,Dt,xt.data)}else{Gt&&ue&&e.texStorage2D(s.TEXTURE_2D,ct,Nt,jt[0].width,jt[0].height);for(let V=0,j=jt.length;V<j;V++)xt=jt[V],b.format!==rn?_t!==null?Gt?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(s.TEXTURE_2D,V,Nt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?L&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,xt.width,xt.height,_t,Dt,xt.data):e.texImage2D(s.TEXTURE_2D,V,Nt,xt.width,xt.height,0,_t,Dt,xt.data)}else if(b.isDataArrayTexture)if(Gt){if(ue&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Nt,et.width,et.height,et.depth),L)if(b.layerUpdates.size>0){const V=nh(et.width,et.height,b.format,b.type);for(const j of b.layerUpdates){const pt=et.data.subarray(j*V/et.data.BYTES_PER_ELEMENT,(j+1)*V/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,j,et.width,et.height,1,_t,Dt,pt)}b.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,_t,Dt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,et.width,et.height,et.depth,0,_t,Dt,et.data);else if(b.isData3DTexture)Gt?(ue&&e.texStorage3D(s.TEXTURE_3D,ct,Nt,et.width,et.height,et.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,_t,Dt,et.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,et.width,et.height,et.depth,0,_t,Dt,et.data);else if(b.isFramebufferTexture){if(ue)if(Gt)e.texStorage2D(s.TEXTURE_2D,ct,Nt,et.width,et.height);else{let V=et.width,j=et.height;for(let pt=0;pt<ct;pt++)e.texImage2D(s.TEXTURE_2D,pt,Nt,V,j,0,_t,Dt,null),V>>=1,j>>=1}}else if(jt.length>0){if(Gt&&ue){const V=Pt(jt[0]);e.texStorage2D(s.TEXTURE_2D,ct,Nt,V.width,V.height)}for(let V=0,j=jt.length;V<j;V++)xt=jt[V],Gt?L&&e.texSubImage2D(s.TEXTURE_2D,V,0,0,_t,Dt,xt):e.texImage2D(s.TEXTURE_2D,V,Nt,_t,Dt,xt);b.generateMipmaps=!1}else if(Gt){if(ue){const V=Pt(et);e.texStorage2D(s.TEXTURE_2D,ct,Nt,V.width,V.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Dt,et)}else e.texImage2D(s.TEXTURE_2D,0,Nt,_t,Dt,et);m(b)&&p($),wt.__version=Y.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function Q(R,b,O){if(b.image.length!==6)return;const $=Rt(R,b),J=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+O);const Y=n.get(J);if(J.version!==Y.__version||$===!0){e.activeTexture(s.TEXTURE0+O);const wt=Yt.getPrimaries(Yt.workingColorSpace),ht=b.colorSpace===Jn?null:Yt.getPrimaries(b.colorSpace),mt=b.colorSpace===Jn||wt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Jt=b.isCompressedTexture||b.image[0].isCompressedTexture,et=b.image[0]&&b.image[0].isDataTexture,_t=[];for(let j=0;j<6;j++)!Jt&&!et?_t[j]=_(b.image[j],!0,i.maxCubemapSize):_t[j]=et?b.image[j].image:b.image[j],_t[j]=fe(b,_t[j]);const Dt=_t[0],Nt=r.convert(b.format,b.colorSpace),xt=r.convert(b.type),jt=v(b.internalFormat,Nt,xt,b.colorSpace),Gt=b.isVideoTexture!==!0,ue=Y.__version===void 0||$===!0,L=J.dataReady;let ct=I(b,Dt);Wt(s.TEXTURE_CUBE_MAP,b);let V;if(Jt){Gt&&ue&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,jt,Dt.width,Dt.height);for(let j=0;j<6;j++){V=_t[j].mipmaps;for(let pt=0;pt<V.length;pt++){const ut=V[pt];b.format!==rn?Nt!==null?Gt?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,ut.width,ut.height,Nt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,jt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,0,0,ut.width,ut.height,Nt,xt,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt,jt,ut.width,ut.height,0,Nt,xt,ut.data)}}}else{if(V=b.mipmaps,Gt&&ue){V.length>0&&ct++;const j=Pt(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,jt,j.width,j.height)}for(let j=0;j<6;j++)if(et){Gt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,_t[j].width,_t[j].height,Nt,xt,_t[j].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,jt,_t[j].width,_t[j].height,0,Nt,xt,_t[j].data);for(let pt=0;pt<V.length;pt++){const Bt=V[pt].image[j].image;Gt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,Bt.width,Bt.height,Nt,xt,Bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,jt,Bt.width,Bt.height,0,Nt,xt,Bt.data)}}else{Gt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Nt,xt,_t[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,jt,Nt,xt,_t[j]);for(let pt=0;pt<V.length;pt++){const ut=V[pt];Gt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,0,0,Nt,xt,ut.image[j]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+j,pt+1,jt,Nt,xt,ut.image[j])}}}m(b)&&p(s.TEXTURE_CUBE_MAP),Y.__version=J.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function yt(R,b,O,$,J,Y){const wt=r.convert(O.format,O.colorSpace),ht=r.convert(O.type),mt=v(O.internalFormat,wt,ht,O.colorSpace),Jt=n.get(b),et=n.get(O);if(et.__renderTarget=b,!Jt.__hasExternalTextures){const _t=Math.max(1,b.width>>Y),Dt=Math.max(1,b.height>>Y);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,Y,mt,_t,Dt,b.depth,0,wt,ht,null):e.texImage2D(J,Y,mt,_t,Dt,0,wt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),$t(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,J,et.__webglTexture,0,Kt(b)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,J,et.__webglTexture,Y),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(R,b,O){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){const $=b.depthTexture,J=$&&$.isDepthTexture?$.type:null,Y=x(b.stencilBuffer,J),wt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=Kt(b);$t(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,Y,b.width,b.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,Y,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Y,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,R)}else{const $=b.textures;for(let J=0;J<$.length;J++){const Y=$[J],wt=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),mt=v(Y.internalFormat,wt,ht,Y.colorSpace),Jt=Kt(b);O&&$t(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,mt,b.width,b.height):$t(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,mt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,mt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(b.depthTexture);$.__renderTarget=b,(!$.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const J=$.__webglTexture,Y=Kt(b);if(b.depthTexture.format===ts)$t(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(b.depthTexture.format===as)$t(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ft(R){const b=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),$){const J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=$}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ct(b.__webglFramebuffer,R)}else if(O){b.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[$]),b.__webglDepthbuffer[$]===void 0)b.__webglDepthbuffer[$]=s.createRenderbuffer(),lt(b.__webglDepthbuffer[$],R,!1);else{const J=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),lt(b.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,J)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(R,b,O){const $=n.get(R);b!==void 0&&yt($.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Ft(R)}function xe(R){const b=R.texture,O=n.get(R),$=n.get(b);R.addEventListener("dispose",w);const J=R.textures,Y=R.isWebGLCubeRenderTarget===!0,wt=J.length>1;if(wt||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=b.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[ht]=[];for(let mt=0;mt<b.mipmaps.length;mt++)O.__webglFramebuffer[ht][mt]=s.createFramebuffer()}else O.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let ht=0;ht<b.mipmaps.length;ht++)O.__webglFramebuffer[ht]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(wt)for(let ht=0,mt=J.length;ht<mt;ht++){const Jt=n.get(J[ht]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&$t(R)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ht=0;ht<J.length;ht++){const mt=J[ht];O.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ht]);const Jt=r.convert(mt.format,mt.colorSpace),et=r.convert(mt.type),_t=v(mt.internalFormat,Jt,et,mt.colorSpace,R.isXRRenderTarget===!0),Dt=Kt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,_t,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,O.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(O.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,b);for(let ht=0;ht<6;ht++)if(b.mipmaps&&b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)yt(O.__webglFramebuffer[ht][mt],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,mt);else yt(O.__webglFramebuffer[ht],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(b)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ht=0,mt=J.length;ht<mt;ht++){const Jt=J[ht],et=n.get(Jt);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),Wt(s.TEXTURE_2D,Jt),yt(O.__webglFramebuffer,R,Jt,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),m(Jt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,$.__webglTexture),Wt(ht,b),b.mipmaps&&b.mipmaps.length>0)for(let mt=0;mt<b.mipmaps.length;mt++)yt(O.__webglFramebuffer[mt],R,b,s.COLOR_ATTACHMENT0,ht,mt);else yt(O.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,ht,0);m(b)&&p(ht),e.unbindTexture()}R.depthBuffer&&Ft(R)}function Zt(R){const b=R.textures;for(let O=0,$=b.length;O<$;O++){const J=b[O];if(m(J)){const Y=M(R),wt=n.get(J).__webglTexture;e.bindTexture(Y,wt),p(Y),e.unbindTexture()}}}const Me=[],U=[];function Ze(R){if(R.samples>0){if($t(R)===!1){const b=R.textures,O=R.width,$=R.height;let J=s.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(R),ht=b.length>1;if(ht)for(let mt=0;mt<b.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let mt=0;mt<b.length;mt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[mt]);const Jt=n.get(b[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,O,$,0,0,O,$,J,s.NEAREST),l===!0&&(Me.length=0,U.length=0,Me.push(s.COLOR_ATTACHMENT0+mt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Me.push(Y),U.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let mt=0;mt<b.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[mt]);const Jt=n.get(b[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Kt(R){return Math.min(i.maxSamples,R.samples)}function $t(R){const b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function It(R){const b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function fe(R,b){const O=R.colorSpace,$=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==ze&&O!==Jn&&(Yt.getTransfer(O)===le?($!==rn||J!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function Pt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Xt,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=$t}function fx(s,t){function e(n,i=Jn){let r;const o=Yt.getTransfer(i);if(n===zn)return s.UNSIGNED_BYTE;if(n===xl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Au)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===wu)return s.BYTE;if(n===Eu)return s.SHORT;if(n===Ws)return s.UNSIGNED_SHORT;if(n===_l)return s.INT;if(n===yi)return s.UNSIGNED_INT;if(n===_n)return s.FLOAT;if(n===tr)return s.HALF_FLOAT;if(n===Tu)return s.ALPHA;if(n===Ru)return s.RGB;if(n===rn)return s.RGBA;if(n===Cu)return s.LUMINANCE;if(n===Pu)return s.LUMINANCE_ALPHA;if(n===ts)return s.DEPTH_COMPONENT;if(n===as)return s.DEPTH_STENCIL;if(n===yl)return s.RED;if(n===Ml)return s.RED_INTEGER;if(n===Iu)return s.RG;if(n===Sl)return s.RG_INTEGER;if(n===bl)return s.RGBA_INTEGER;if(n===Jr||n===Qr||n===to||n===eo)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ta||n===Ra||n===Ca||n===Pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===La||n===Da)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ia||n===La)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Da)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===ka||n===za||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Na)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ua)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ba)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ka)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ha)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ga)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===qa)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ya)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===Ka||n===$a)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===no)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lu||n===ja||n===Za||n===Ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===no)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===os?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class px extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class re extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mx={type:"move"};class Jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new re,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new re,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new re,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new re;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ee,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ri({vertexShader:gx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new gt(new wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vx extends bi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new xx,m=e.getContextAttributes();let p=null,M=null;const v=[],x=[],I=new rt;let A=null;const w=new Be;w.viewport=new ee;const T=new Be;T.viewport=new ee;const S=[w,T],y=new px;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=v[G];return Q===void 0&&(Q=new Jo,v[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=v[G];return Q===void 0&&(Q=new Jo,v[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=v[G];return Q===void 0&&(Q=new Jo,v[G]=Q),Q.getHandSpace()};function B(G){const Q=x.indexOf(G.inputSource);if(Q===-1)return;const yt=v[Q];yt!==void 0&&(yt.update(G.inputSource,G.frame,c||o),yt.dispatchEvent({type:G.type,data:G.inputSource}))}function X(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",K);for(let G=0;G<v.length;G++){const Q=x[G];Q!==null&&(x[G]=null,v[G].disconnect(Q))}P=null,F=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,Rt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",X),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Mi(f.framebufferWidth,f.framebufferHeight,{format:rn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,yt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?as:ts,yt=m.stencil?os:yi);const Ct={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Ct),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Mi(d.textureWidth,d.textureHeight,{format:rn,type:zn,depthTexture:new qu(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Rt.setContext(i),Rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(G){for(let Q=0;Q<G.removed.length;Q++){const yt=G.removed[Q],lt=x.indexOf(yt);lt>=0&&(x[lt]=null,v[lt].disconnect(yt))}for(let Q=0;Q<G.added.length;Q++){const yt=G.added[Q];let lt=x.indexOf(yt);if(lt===-1){for(let Ft=0;Ft<v.length;Ft++)if(Ft>=x.length){x.push(yt),lt=Ft;break}else if(x[Ft]===null){x[Ft]=yt,lt=Ft;break}if(lt===-1)break}const Ct=v[lt];Ct&&Ct.connect(yt)}}const W=new C,Z=new C;function H(G,Q,yt){W.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(yt.matrixWorld);const lt=W.distanceTo(Z),Ct=Q.projectionMatrix.elements,Ft=yt.projectionMatrix.elements,Xt=Ct[14]/(Ct[10]-1),xe=Ct[14]/(Ct[10]+1),Zt=(Ct[9]+1)/Ct[5],Me=(Ct[9]-1)/Ct[5],U=(Ct[8]-1)/Ct[0],Ze=(Ft[8]+1)/Ft[0],Kt=Xt*U,$t=Xt*Ze,It=lt/(-U+Ze),fe=It*-U;if(Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(fe),G.translateZ(It),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ct[10]===-1)G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Pt=Xt+It,R=xe+It,b=Kt-fe,O=$t+(lt-fe),$=Zt*xe/R*Pt,J=Me*xe/R*Pt;G.projectionMatrix.makePerspective(b,O,$,J,Pt,R),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function at(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;let Q=G.near,yt=G.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),y.near=T.near=w.near=Q,y.far=T.far=w.far=yt,(P!==y.near||F!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,F=y.far),w.layers.mask=G.layers.mask|2,T.layers.mask=G.layers.mask|4,y.layers.mask=w.layers.mask|T.layers.mask;const lt=G.parent,Ct=y.cameras;at(y,lt);for(let Ft=0;Ft<Ct.length;Ft++)at(Ct[Ft],lt);Ct.length===2?H(y,w,T):y.projectionMatrix.copy(w.projectionMatrix),ft(G,y,lt)};function ft(G,Q,yt){yt===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(yt.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ls*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let At=null;function Wt(G,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){const yt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let lt=!1;yt.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let Ft=0;Ft<yt.length;Ft++){const Xt=yt[Ft];let xe=null;if(f!==null)xe=f.getViewport(Xt);else{const Me=u.getViewSubImage(d,Xt);xe=Me.viewport,Ft===0&&(t.setRenderTargetTextures(M,Me.colorTexture,d.ignoreDepthValues?void 0:Me.depthStencilTexture),t.setRenderTarget(M))}let Zt=S[Ft];Zt===void 0&&(Zt=new Be,Zt.layers.enable(Ft),Zt.viewport=new ee,S[Ft]=Zt),Zt.matrix.fromArray(Xt.transform.matrix),Zt.matrix.decompose(Zt.position,Zt.quaternion,Zt.scale),Zt.projectionMatrix.fromArray(Xt.projectionMatrix),Zt.projectionMatrixInverse.copy(Zt.projectionMatrix).invert(),Zt.viewport.set(xe.x,xe.y,xe.width,xe.height),Ft===0&&(y.matrix.copy(Zt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(Zt)}const Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Ft=u.getDepthInformation(yt[0]);Ft&&Ft.isValid&&Ft.texture&&_.init(t,Ft,i.renderState)}}for(let yt=0;yt<v.length;yt++){const lt=x[yt],Ct=v[yt];lt!==null&&Ct!==void 0&&Ct.update(lt,Q,c||o)}At&&At(G,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Rt=new Xu;Rt.setAnimationLoop(Wt),this.setAnimationLoop=function(G){At=G},this.dispose=function(){}}}const pi=new vn,yx=new Lt;function Mx(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Gu(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,v,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===We&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===We&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),v=M.envMap,x=M.envMapRotation;v&&(m.envMap.value=v,pi.copy(x),pi.x*=-1,pi.y*=-1,pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),m.envMapRotation.value.setFromMatrix4(yx.makeRotationFromEuler(pi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===We&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Sx(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const x=v.program;n.uniformBlockBinding(M,x)}function c(M,v){let x=i[M.id];x===void 0&&(g(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",m));const I=v.program;n.updateUBOMapping(M,I);const A=t.render.frame;r[M.id]!==A&&(d(M),r[M.id]=A)}function h(M){const v=u();M.__bindingPointIndex=v;const x=s.createBuffer(),I=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=i[M.id],x=M.uniforms,I=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,w=x.length;A<w;A++){const T=Array.isArray(x[A])?x[A]:[x[A]];for(let S=0,y=T.length;S<y;S++){const P=T[S];if(f(P,A,S,I)===!0){const F=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let K=0;K<B.length;K++){const W=B[K],Z=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,F+X,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,v,x,I){const A=M.value,w=v+"_"+x;if(I[w]===void 0)return typeof A=="number"||typeof A=="boolean"?I[w]=A:I[w]=A.clone(),!0;{const T=I[w];if(typeof A=="number"||typeof A=="boolean"){if(T!==A)return I[w]=A,!0}else if(T.equals(A)===!1)return T.copy(A),!0}return!1}function g(M){const v=M.uniforms;let x=0;const I=16;for(let w=0,T=v.length;w<T;w++){const S=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,P=S.length;y<P;y++){const F=S[y],B=Array.isArray(F.value)?F.value:[F.value];for(let X=0,K=B.length;X<K;X++){const W=B[X],Z=_(W),H=x%I,at=H%Z.boundary,ft=H+at;x+=at,ft!==0&&I-ft<Z.storage&&(x+=I-ft),F.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=x,x+=Z.storage}}}const A=x%I;return A>0&&(x+=I-A),M.__size=x,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class bx{constructor(t={}){const{canvas:e=up(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=we,this.toneMapping=ii,this.toneMappingExposure=1;const x=this;let I=!1,A=0,w=0,T=null,S=-1,y=null;const P=new ee,F=new ee;let B=null;const X=new Tt(0);let K=0,W=e.width,Z=e.height,H=1,at=null,ft=null;const At=new ee(0,0,W,Z),Wt=new ee(0,0,W,Z);let Rt=!1;const G=new Rl;let Q=!1,yt=!1;const lt=new Lt,Ct=new Lt,Ft=new C,Xt=new ee,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function Me(){return T===null?H:1}let U=n;function Ze(E,D){return e.getContext(E,D)}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ml}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),U===null){const D="webgl2";if(U=Ze(D,E),U===null)throw Ze(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Kt,$t,It,fe,Pt,R,b,O,$,J,Y,wt,ht,mt,Jt,et,_t,Dt,Nt,xt,jt,Gt,ue,L;function ct(){Kt=new Rg(U),Kt.init(),Gt=new fx(U,Kt),$t=new Sg(U,Kt,t,Gt),It=new hx(U,Kt),$t.reverseDepthBuffer&&d&&It.buffers.depth.setReversed(!0),fe=new Ig(U),Pt=new $_,R=new dx(U,Kt,It,Pt,$t,Gt,fe),b=new wg(x),O=new Tg(x),$=new Bp(U),ue=new yg(U,$),J=new Cg(U,$,fe,ue),Y=new Dg(U,J,$,fe),Nt=new Lg(U,$t,R),et=new bg(Pt),wt=new K_(x,b,O,Kt,$t,ue,et),ht=new Mx(x,Pt),mt=new Z_,Jt=new ix(Kt),Dt=new vg(x,b,O,It,Y,f,l),_t=new lx(x,Y,$t),L=new Sx(U,fe,$t,It),xt=new Mg(U,Kt,fe),jt=new Pg(U,Kt,fe),fe.programs=wt.programs,x.capabilities=$t,x.extensions=Kt,x.properties=Pt,x.renderLists=mt,x.shadowMap=_t,x.state=It,x.info=fe}ct();const V=new vx(x,U);this.xr=V,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Kt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Kt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(W,Z,!1))},this.getSize=function(E){return E.set(W,Z)},this.setSize=function(E,D,k=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,Z=D,e.width=Math.floor(E*H),e.height=Math.floor(D*H),k===!0&&(e.style.width=E+"px",e.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(W*H,Z*H).floor()},this.setDrawingBufferSize=function(E,D,k){W=E,Z=D,H=k,e.width=Math.floor(E*k),e.height=Math.floor(D*k),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(At)},this.setViewport=function(E,D,k,z){E.isVector4?At.set(E.x,E.y,E.z,E.w):At.set(E,D,k,z),It.viewport(P.copy(At).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(Wt)},this.setScissor=function(E,D,k,z){E.isVector4?Wt.set(E.x,E.y,E.z,E.w):Wt.set(E,D,k,z),It.scissor(F.copy(Wt).multiplyScalar(H).round())},this.getScissorTest=function(){return Rt},this.setScissorTest=function(E){It.setScissorTest(Rt=E)},this.setOpaqueSort=function(E){at=E},this.setTransparentSort=function(E){ft=E},this.getClearColor=function(E){return E.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(E=!0,D=!0,k=!0){let z=0;if(E){let N=!1;if(T!==null){const nt=T.texture.format;N=nt===bl||nt===Sl||nt===Ml}if(N){const nt=T.texture.type,dt=nt===zn||nt===yi||nt===Ws||nt===os||nt===xl||nt===vl,Mt=Dt.getClearColor(),St=Dt.getClearAlpha(),Ut=Mt.r,kt=Mt.g,bt=Mt.b;dt?(g[0]=Ut,g[1]=kt,g[2]=bt,g[3]=St,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ut,_[1]=kt,_[2]=bt,_[3]=St,U.clearBufferiv(U.COLOR,0,_))}else z|=U.COLOR_BUFFER_BIT}D&&(z|=U.DEPTH_BUFFER_BIT),k&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),mt.dispose(),Jt.dispose(),Pt.dispose(),b.dispose(),O.dispose(),Y.dispose(),ue.dispose(),L.dispose(),wt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Vl),V.removeEventListener("sessionend",Wl),li.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=fe.autoReset,D=_t.enabled,k=_t.autoUpdate,z=_t.needsUpdate,N=_t.type;ct(),fe.autoReset=E,_t.enabled=D,_t.autoUpdate=k,_t.needsUpdate=z,_t.type=N}function ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Bt(E){const D=E.target;D.removeEventListener("dispose",Bt),ye(D)}function ye(E){Le(E),Pt.remove(E)}function Le(E){const D=Pt.get(E).programs;D!==void 0&&(D.forEach(function(k){wt.releaseProgram(k)}),E.isShaderMaterial&&wt.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,k,z,N,nt){D===null&&(D=xe);const dt=N.isMesh&&N.matrixWorld.determinant()<0,Mt=Id(E,D,k,z,N);It.setMaterial(z,dt);let St=k.index,Ut=1;if(z.wireframe===!0){if(St=J.getWireframeAttribute(k),St===void 0)return;Ut=2}const kt=k.drawRange,bt=k.attributes.position;let Qt=kt.start*Ut,de=(kt.start+kt.count)*Ut;nt!==null&&(Qt=Math.max(Qt,nt.start*Ut),de=Math.min(de,(nt.start+nt.count)*Ut)),St!==null?(Qt=Math.max(Qt,0),de=Math.min(de,St.count)):bt!=null&&(Qt=Math.max(Qt,0),de=Math.min(de,bt.count));const pe=de-Qt;if(pe<0||pe===1/0)return;ue.setup(N,z,Mt,k,St);let Ge,ne=xt;if(St!==null&&(Ge=$.get(St),ne=jt,ne.setIndex(Ge)),N.isMesh)z.wireframe===!0?(It.setLineWidth(z.wireframeLinewidth*Me()),ne.setMode(U.LINES)):ne.setMode(U.TRIANGLES);else if(N.isLine){let Et=z.linewidth;Et===void 0&&(Et=1),It.setLineWidth(Et*Me()),N.isLineSegments?ne.setMode(U.LINES):N.isLineLoop?ne.setMode(U.LINE_LOOP):ne.setMode(U.LINE_STRIP)}else N.isPoints?ne.setMode(U.POINTS):N.isSprite&&ne.setMode(U.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ne.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))ne.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Et=N._multiDrawStarts,Rn=N._multiDrawCounts,ie=N._multiDrawCount,un=St?$.get(St).bytesPerElement:1,Ei=Pt.get(z).currentProgram.getUniforms();for(let Xe=0;Xe<ie;Xe++)Ei.setValue(U,"_gl_DrawID",Xe),ne.render(Et[Xe]/un,Rn[Xe])}else if(N.isInstancedMesh)ne.renderInstances(Qt,pe,N.count);else if(k.isInstancedBufferGeometry){const Et=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Rn=Math.min(k.instanceCount,Et);ne.renderInstances(Qt,pe,Rn)}else ne.render(Qt,pe)};function oe(E,D,k){E.transparent===!0&&E.side===$e&&E.forceSinglePass===!1?(E.side=We,E.needsUpdate=!0,ar(E,D,k),E.side=xn,E.needsUpdate=!0,ar(E,D,k),E.side=$e):ar(E,D,k)}this.compile=function(E,D,k=null){k===null&&(k=E),p=Jt.get(k),p.init(D),v.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==k&&E.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const z=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const nt=N.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){const Mt=nt[dt];oe(Mt,k,N),z.add(Mt)}else oe(nt,k,N),z.add(nt)}),v.pop(),p=null,z},this.compileAsync=function(E,D,k=null){const z=this.compile(E,D,k);return new Promise(N=>{function nt(){if(z.forEach(function(dt){Pt.get(dt).currentProgram.isReady()&&z.delete(dt)}),z.size===0){N(E);return}setTimeout(nt,10)}Kt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let hn=null;function Tn(E){hn&&hn(E)}function Vl(){li.stop()}function Wl(){li.start()}const li=new Xu;li.setAnimationLoop(Tn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(E){hn=E,V.setAnimationLoop(E),E===null?li.stop():li.start()},V.addEventListener("sessionstart",Vl),V.addEventListener("sessionend",Wl),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,D,T),p=Jt.get(E,v.length),p.init(D),v.push(p),Ct.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),G.setFromProjectionMatrix(Ct),yt=this.localClippingEnabled,Q=et.init(this.clippingPlanes,yt),m=mt.get(E,M.length),m.init(),M.push(m),V.enabled===!0&&V.isPresenting===!0){const nt=x.xr.getDepthSensingMesh();nt!==null&&bo(nt,D,-1/0,x.sortObjects)}bo(E,D,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(at,ft),Zt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Zt&&Dt.addToRenderList(m,E),this.info.render.frame++,Q===!0&&et.beginShadows();const k=p.state.shadowsArray;_t.render(k,E,D),Q===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,N=m.transmissive;if(p.setupLights(),D.isArrayCamera){const nt=D.cameras;if(N.length>0)for(let dt=0,Mt=nt.length;dt<Mt;dt++){const St=nt[dt];ql(z,N,E,St)}Zt&&Dt.render(E);for(let dt=0,Mt=nt.length;dt<Mt;dt++){const St=nt[dt];Xl(m,E,St,St.viewport)}}else N.length>0&&ql(z,N,E,D),Zt&&Dt.render(E),Xl(m,E,D);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(x,E,D),ue.resetDefaultState(),S=-1,y=null,v.pop(),v.length>0?(p=v[v.length-1],Q===!0&&et.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function bo(E,D,k,z){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){z&&Xt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ct);const dt=Y.update(E),Mt=E.material;Mt.visible&&m.push(E,dt,Mt,k,Xt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){const dt=Y.update(E),Mt=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Xt.copy(E.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Xt.copy(dt.boundingSphere.center)),Xt.applyMatrix4(E.matrixWorld).applyMatrix4(Ct)),Array.isArray(Mt)){const St=dt.groups;for(let Ut=0,kt=St.length;Ut<kt;Ut++){const bt=St[Ut],Qt=Mt[bt.materialIndex];Qt&&Qt.visible&&m.push(E,dt,Qt,k,Xt.z,bt)}}else Mt.visible&&m.push(E,dt,Mt,k,Xt.z,null)}}const nt=E.children;for(let dt=0,Mt=nt.length;dt<Mt;dt++)bo(nt[dt],D,k,z)}function Xl(E,D,k,z){const N=E.opaque,nt=E.transmissive,dt=E.transparent;p.setupLightsView(k),Q===!0&&et.setGlobalState(x.clippingPlanes,k),z&&It.viewport(P.copy(z)),N.length>0&&or(N,D,k),nt.length>0&&or(nt,D,k),dt.length>0&&or(dt,D,k),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function ql(E,D,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Mi(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?tr:zn,minFilter:Sn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const nt=p.state.transmissionRenderTarget[z.id],dt=z.viewport||P;nt.setSize(dt.z,dt.w);const Mt=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(X),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),Zt&&Dt.render(k);const St=x.toneMapping;x.toneMapping=ii;const Ut=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),Q===!0&&et.setGlobalState(x.clippingPlanes,z),or(E,k,z),R.updateMultisampleRenderTarget(nt),R.updateRenderTargetMipmap(nt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let bt=0,Qt=D.length;bt<Qt;bt++){const de=D[bt],pe=de.object,Ge=de.geometry,ne=de.material,Et=de.group;if(ne.side===$e&&pe.layers.test(z.layers)){const Rn=ne.side;ne.side=We,ne.needsUpdate=!0,Yl(pe,k,z,Ge,ne,Et),ne.side=Rn,ne.needsUpdate=!0,kt=!0}}kt===!0&&(R.updateMultisampleRenderTarget(nt),R.updateRenderTargetMipmap(nt))}x.setRenderTarget(Mt),x.setClearColor(X,K),Ut!==void 0&&(z.viewport=Ut),x.toneMapping=St}function or(E,D,k){const z=D.isScene===!0?D.overrideMaterial:null;for(let N=0,nt=E.length;N<nt;N++){const dt=E[N],Mt=dt.object,St=dt.geometry,Ut=z===null?dt.material:z,kt=dt.group;Mt.layers.test(k.layers)&&Yl(Mt,D,k,St,Ut,kt)}}function Yl(E,D,k,z,N,nt){E.onBeforeRender(x,D,k,z,N,nt),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,D,k,z,E,nt),N.transparent===!0&&N.side===$e&&N.forceSinglePass===!1?(N.side=We,N.needsUpdate=!0,x.renderBufferDirect(k,D,z,N,E,nt),N.side=xn,N.needsUpdate=!0,x.renderBufferDirect(k,D,z,N,E,nt),N.side=$e):x.renderBufferDirect(k,D,z,N,E,nt),E.onAfterRender(x,D,k,z,N,nt)}function ar(E,D,k){D.isScene!==!0&&(D=xe);const z=Pt.get(E),N=p.state.lights,nt=p.state.shadowsArray,dt=N.state.version,Mt=wt.getParameters(E,N.state,nt,D,k),St=wt.getProgramCacheKey(Mt);let Ut=z.programs;z.environment=E.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(E.isMeshStandardMaterial?O:b).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?D.environmentRotation:E.envMapRotation,Ut===void 0&&(E.addEventListener("dispose",Bt),Ut=new Map,z.programs=Ut);let kt=Ut.get(St);if(kt!==void 0){if(z.currentProgram===kt&&z.lightsStateVersion===dt)return $l(E,Mt),kt}else Mt.uniforms=wt.getUniforms(E),E.onBeforeCompile(Mt,x),kt=wt.acquireProgram(Mt,St),Ut.set(St,kt),z.uniforms=Mt.uniforms;const bt=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(bt.clippingPlanes=et.uniform),$l(E,Mt),z.needsLights=Dd(E),z.lightsStateVersion=dt,z.needsLights&&(bt.ambientLightColor.value=N.state.ambient,bt.lightProbe.value=N.state.probe,bt.directionalLights.value=N.state.directional,bt.directionalLightShadows.value=N.state.directionalShadow,bt.spotLights.value=N.state.spot,bt.spotLightShadows.value=N.state.spotShadow,bt.rectAreaLights.value=N.state.rectArea,bt.ltc_1.value=N.state.rectAreaLTC1,bt.ltc_2.value=N.state.rectAreaLTC2,bt.pointLights.value=N.state.point,bt.pointLightShadows.value=N.state.pointShadow,bt.hemisphereLights.value=N.state.hemi,bt.directionalShadowMap.value=N.state.directionalShadowMap,bt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,bt.spotShadowMap.value=N.state.spotShadowMap,bt.spotLightMatrix.value=N.state.spotLightMatrix,bt.spotLightMap.value=N.state.spotLightMap,bt.pointShadowMap.value=N.state.pointShadowMap,bt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=kt,z.uniformsList=null,kt}function Kl(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=so.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function $l(E,D){const k=Pt.get(E);k.outputColorSpace=D.outputColorSpace,k.batching=D.batching,k.batchingColor=D.batchingColor,k.instancing=D.instancing,k.instancingColor=D.instancingColor,k.instancingMorph=D.instancingMorph,k.skinning=D.skinning,k.morphTargets=D.morphTargets,k.morphNormals=D.morphNormals,k.morphColors=D.morphColors,k.morphTargetsCount=D.morphTargetsCount,k.numClippingPlanes=D.numClippingPlanes,k.numIntersection=D.numClipIntersection,k.vertexAlphas=D.vertexAlphas,k.vertexTangents=D.vertexTangents,k.toneMapping=D.toneMapping}function Id(E,D,k,z,N){D.isScene!==!0&&(D=xe),R.resetTextureUnits();const nt=D.fog,dt=z.isMeshStandardMaterial?D.environment:null,Mt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ze,St=(z.isMeshStandardMaterial?O:b).get(z.envMap||dt),Ut=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,kt=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),bt=!!k.morphAttributes.position,Qt=!!k.morphAttributes.normal,de=!!k.morphAttributes.color;let pe=ii;z.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(pe=x.toneMapping);const Ge=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ne=Ge!==void 0?Ge.length:0,Et=Pt.get(z),Rn=p.state.lights;if(Q===!0&&(yt===!0||E!==y)){const Je=E===y&&z.id===S;et.setState(z,E,Je)}let ie=!1;z.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Rn.state.version||Et.outputColorSpace!==Mt||N.isBatchedMesh&&Et.batching===!1||!N.isBatchedMesh&&Et.batching===!0||N.isBatchedMesh&&Et.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Et.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Et.instancing===!1||!N.isInstancedMesh&&Et.instancing===!0||N.isSkinnedMesh&&Et.skinning===!1||!N.isSkinnedMesh&&Et.skinning===!0||N.isInstancedMesh&&Et.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Et.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Et.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Et.instancingMorph===!1&&N.morphTexture!==null||Et.envMap!==St||z.fog===!0&&Et.fog!==nt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==et.numPlanes||Et.numIntersection!==et.numIntersection)||Et.vertexAlphas!==Ut||Et.vertexTangents!==kt||Et.morphTargets!==bt||Et.morphNormals!==Qt||Et.morphColors!==de||Et.toneMapping!==pe||Et.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Et.__version=z.version);let un=Et.currentProgram;ie===!0&&(un=ar(z,D,N));let Ei=!1,Xe=!1,xs=!1;const me=un.getUniforms(),yn=Et.uniforms;if(It.useProgram(un.program)&&(Ei=!0,Xe=!0,xs=!0),z.id!==S&&(S=z.id,Xe=!0),Ei||y!==E){It.buffers.depth.getReversed()?(lt.copy(E.projectionMatrix),fp(lt),pp(lt),me.setValue(U,"projectionMatrix",lt)):me.setValue(U,"projectionMatrix",E.projectionMatrix),me.setValue(U,"viewMatrix",E.matrixWorldInverse);const Vn=me.map.cameraPosition;Vn!==void 0&&Vn.setValue(U,Ft.setFromMatrixPosition(E.matrixWorld)),$t.logarithmicDepthBuffer&&me.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&me.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Xe=!0,xs=!0)}if(N.isSkinnedMesh){me.setOptional(U,N,"bindMatrix"),me.setOptional(U,N,"bindMatrixInverse");const Je=N.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),me.setValue(U,"boneTexture",Je.boneTexture,R))}N.isBatchedMesh&&(me.setOptional(U,N,"batchingTexture"),me.setValue(U,"batchingTexture",N._matricesTexture,R),me.setOptional(U,N,"batchingIdTexture"),me.setValue(U,"batchingIdTexture",N._indirectTexture,R),me.setOptional(U,N,"batchingColorTexture"),N._colorsTexture!==null&&me.setValue(U,"batchingColorTexture",N._colorsTexture,R));const vs=k.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0)&&Nt.update(N,k,un),(Xe||Et.receiveShadow!==N.receiveShadow)&&(Et.receiveShadow=N.receiveShadow,me.setValue(U,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(yn.envMap.value=St,yn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(yn.envMapIntensity.value=D.environmentIntensity),Xe&&(me.setValue(U,"toneMappingExposure",x.toneMappingExposure),Et.needsLights&&Ld(yn,xs),nt&&z.fog===!0&&ht.refreshFogUniforms(yn,nt),ht.refreshMaterialUniforms(yn,z,H,Z,p.state.transmissionRenderTarget[E.id]),so.upload(U,Kl(Et),yn,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(so.upload(U,Kl(Et),yn,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&me.setValue(U,"center",N.center),me.setValue(U,"modelViewMatrix",N.modelViewMatrix),me.setValue(U,"normalMatrix",N.normalMatrix),me.setValue(U,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Je=z.uniformsGroups;for(let Vn=0,Wn=Je.length;Vn<Wn;Vn++){const jl=Je[Vn];L.update(jl,un),L.bind(jl,un)}}return un}function Ld(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Dd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,D,k){Pt.get(E.texture).__webglTexture=D,Pt.get(E.depthTexture).__webglTexture=k;const z=Pt.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,D){const k=Pt.get(E);k.__webglFramebuffer=D,k.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,k=0){T=E,A=D,w=k;let z=!0,N=null,nt=!1,dt=!1;if(E){const St=Pt.get(E);if(St.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(U.FRAMEBUFFER,null),z=!1;else if(St.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(St.__hasExternalTextures)R.rebindTextures(E,Pt.get(E.texture).__webglTexture,Pt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const bt=E.depthTexture;if(St.__boundDepthTexture!==bt){if(bt!==null&&Pt.has(bt)&&(E.width!==bt.image.width||E.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Ut=E.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(dt=!0);const kt=Pt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(kt[D])?N=kt[D][k]:N=kt[D],nt=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?N=Pt.get(E).__webglMultisampledFramebuffer:Array.isArray(kt)?N=kt[k]:N=kt,P.copy(E.viewport),F.copy(E.scissor),B=E.scissorTest}else P.copy(At).multiplyScalar(H).floor(),F.copy(Wt).multiplyScalar(H).floor(),B=Rt;if(It.bindFramebuffer(U.FRAMEBUFFER,N)&&z&&It.drawBuffers(E,N),It.viewport(P),It.scissor(F),It.setScissorTest(B),nt){const St=Pt.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,St.__webglTexture,k)}else if(dt){const St=Pt.get(E.texture),Ut=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,St.__webglTexture,k||0,Ut)}S=-1},this.readRenderTargetPixels=function(E,D,k,z,N,nt,dt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){It.bindFramebuffer(U.FRAMEBUFFER,Mt);try{const St=E.texture,Ut=St.format,kt=St.type;if(!$t.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-z&&k>=0&&k<=E.height-N&&U.readPixels(D,k,z,N,Gt.convert(Ut),Gt.convert(kt),nt)}finally{const St=T!==null?Pt.get(T).__webglFramebuffer:null;It.bindFramebuffer(U.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(E,D,k,z,N,nt,dt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){const St=E.texture,Ut=St.format,kt=St.type;if(!$t.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=E.width-z&&k>=0&&k<=E.height-N){It.bindFramebuffer(U.FRAMEBUFFER,Mt);const bt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,bt),U.bufferData(U.PIXEL_PACK_BUFFER,nt.byteLength,U.STREAM_READ),U.readPixels(D,k,z,N,Gt.convert(Ut),Gt.convert(kt),0);const Qt=T!==null?Pt.get(T).__webglFramebuffer:null;It.bindFramebuffer(U.FRAMEBUFFER,Qt);const de=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await dp(U,de,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,bt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,nt),U.deleteBuffer(bt),U.deleteSync(de),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,D=null,k=0){E.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-k),N=Math.floor(E.image.width*z),nt=Math.floor(E.image.height*z),dt=D!==null?D.x:0,Mt=D!==null?D.y:0;R.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,dt,Mt,N,nt),It.unbindTexture()},this.copyTextureToTexture=function(E,D,k=null,z=null,N=0){E.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],D=arguments[2],N=arguments[3]||0,k=null);let nt,dt,Mt,St,Ut,kt,bt,Qt,de;const pe=E.isCompressedTexture?E.mipmaps[N]:E.image;k!==null?(nt=k.max.x-k.min.x,dt=k.max.y-k.min.y,Mt=k.isBox3?k.max.z-k.min.z:1,St=k.min.x,Ut=k.min.y,kt=k.isBox3?k.min.z:0):(nt=pe.width,dt=pe.height,Mt=pe.depth||1,St=0,Ut=0,kt=0),z!==null?(bt=z.x,Qt=z.y,de=z.z):(bt=0,Qt=0,de=0);const Ge=Gt.convert(D.format),ne=Gt.convert(D.type);let Et;D.isData3DTexture?(R.setTexture3D(D,0),Et=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(R.setTexture2DArray(D,0),Et=U.TEXTURE_2D_ARRAY):(R.setTexture2D(D,0),Et=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);const Rn=U.getParameter(U.UNPACK_ROW_LENGTH),ie=U.getParameter(U.UNPACK_IMAGE_HEIGHT),un=U.getParameter(U.UNPACK_SKIP_PIXELS),Ei=U.getParameter(U.UNPACK_SKIP_ROWS),Xe=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,pe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,St),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,kt);const xs=E.isDataArrayTexture||E.isData3DTexture,me=D.isDataArrayTexture||D.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const yn=Pt.get(E),vs=Pt.get(D),Je=Pt.get(yn.__renderTarget),Vn=Pt.get(vs.__renderTarget);It.bindFramebuffer(U.READ_FRAMEBUFFER,Je.__webglFramebuffer),It.bindFramebuffer(U.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Wn=0;Wn<Mt;Wn++)xs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(E).__webglTexture,N,kt+Wn),E.isDepthTexture?(me&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(D).__webglTexture,N,de+Wn),U.blitFramebuffer(St,Ut,nt,dt,bt,Qt,nt,dt,U.DEPTH_BUFFER_BIT,U.NEAREST)):me?U.copyTexSubImage3D(Et,N,bt,Qt,de+Wn,St,Ut,nt,dt):U.copyTexSubImage2D(Et,N,bt,Qt,de+Wn,St,Ut,nt,dt);It.bindFramebuffer(U.READ_FRAMEBUFFER,null),It.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else me?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Et,N,bt,Qt,de,nt,dt,Mt,Ge,ne,pe.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Et,N,bt,Qt,de,nt,dt,Mt,Ge,pe.data):U.texSubImage3D(Et,N,bt,Qt,de,nt,dt,Mt,Ge,ne,pe):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,N,bt,Qt,nt,dt,Ge,ne,pe.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,N,bt,Qt,pe.width,pe.height,Ge,pe.data):U.texSubImage2D(U.TEXTURE_2D,N,bt,Qt,nt,dt,Ge,ne,pe);U.pixelStorei(U.UNPACK_ROW_LENGTH,Rn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie),U.pixelStorei(U.UNPACK_SKIP_PIXELS,un),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ei),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Xe),N===0&&D.generateMipmaps&&U.generateMipmap(Et),It.unbindTexture()},this.copyTextureToTexture3D=function(E,D,k=null,z=null,N=0){return E.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,E=arguments[2],D=arguments[3],N=arguments[4]||0),Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,D,k,z,N)},this.initRenderTarget=function(E){Pt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),It.unbindTexture()},this.resetState=function(){A=0,w=0,T=null,It.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class Il{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Tt(t),this.near=e,this.far=n}clone(){return new Il(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wx extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Zu{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=tl,this.updateRanges=[],this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new C;class Ks{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ks(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ju extends cn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zi;const As=new C,Hi=new C,Gi=new C,Vi=new rt,Ts=new rt,Qu=new Lt,Dr=new C,Rs=new C,Nr=new C,ih=new rt,Qo=new rt,sh=new rt;class Ex extends he{constructor(t=new Ju){if(super(),this.isSprite=!0,this.type="Sprite",zi===void 0){zi=new Re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Zu(e,5);zi.setIndex([0,1,2,0,2,3]),zi.setAttribute("position",new Ks(n,3,0,!1)),zi.setAttribute("uv",new Ks(n,2,3,!1))}this.geometry=zi,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),Qu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Gi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Ur(Dr.set(-.5,-.5,0),Gi,o,Hi,i,r),Ur(Rs.set(.5,-.5,0),Gi,o,Hi,i,r),Ur(Nr.set(.5,.5,0),Gi,o,Hi,i,r),ih.set(0,0),Qo.set(1,0),sh.set(1,1);let a=t.ray.intersectTriangle(Dr,Rs,Nr,!1,As);if(a===null&&(Ur(Rs.set(-.5,.5,0),Gi,o,Hi,i,r),Qo.set(0,1),a=t.ray.intersectTriangle(Dr,Nr,Rs,!1,As),a===null))return;const l=t.ray.origin.distanceTo(As);l<t.near||l>t.far||e.push({distance:l,point:As.clone(),uv:sn.getInterpolation(As,Dr,Rs,Nr,ih,Qo,sh,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ur(s,t,e,n,i,r){Vi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Ts.x=r*Vi.x-i*Vi.y,Ts.y=i*Vi.x+r*Vi.y):Ts.copy(Vi),s.copy(t),s.x+=Ts.x,s.y+=Ts.y,s.applyMatrix4(Qu)}const rh=new C,oh=new ee,ah=new ee,Ax=new C,lh=new Lt,Fr=new C,ta=new bn,ch=new Lt,ea=new er;class Tx extends gt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lc,this.bindMatrix=new Lt,this.bindMatrixInverse=new Lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Hn),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fr),this.boundingBox.expandByPoint(Fr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Fr),this.boundingSphere.expandByPoint(Fr)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(i),t.ray.intersectsSphere(ta)!==!1&&(ch.copy(i).invert(),ea.copy(t.ray).applyMatrix4(ch),!(this.boundingBox!==null&&ea.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ea)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ee,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===lc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Nf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;oh.fromBufferAttribute(i.attributes.skinIndex,t),ah.fromBufferAttribute(i.attributes.skinWeight,t),rh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=ah.getComponent(r);if(o!==0){const a=oh.getComponent(r);lh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Ax.copy(rh).applyMatrix4(lh),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class td extends he{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ed extends Ee{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Ue,h=Ue,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hh=new Lt,Rx=new Lt;class Ll{constructor(t=[],e=[]){this.uuid=ln(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Lt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Lt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:Rx;hh.multiplyMatrices(a,e[r]),hh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ll(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new ed(e,t,t,rn,_n);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new td),this.bones.push(o),this.boneInverses.push(new Lt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class nl extends ke{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wi=new Lt,uh=new Lt,Or=[],dh=new Hn,Cx=new Lt,Cs=new gt,Ps=new bn;class on extends gt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Cx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Hn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),dh.copy(t.boundingBox).applyMatrix4(Wi),this.boundingBox.union(dh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),Ps.copy(t.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),t.ray.intersectsSphere(Ps)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Wi),uh.multiplyMatrices(n,Wi),Cs.matrixWorld=uh,Cs.raycast(t,Or);for(let o=0,a=Or.length;o<a;o++){const l=Or[o];l.instanceId=r,l.object=this,e.push(l)}Or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ed(new Float32Array(i*this.count),i,this.count,yl,_n));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class nd extends cn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const uo=new C,fo=new C,fh=new Lt,Is=new er,Br=new bn,na=new C,ph=new C;class Dl extends he{constructor(t=new Re,e=new nd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)uo.fromBufferAttribute(e,i-1),fo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=uo.distanceTo(fo);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(i),Br.radius+=r,t.ray.intersectsSphere(Br)===!1)return;fh.copy(i).invert(),Is.copy(t.ray).applyMatrix4(fh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),M=h.getX(_+1),v=kr(this,t,Is,l,p,M);v&&e.push(v)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=kr(this,t,Is,l,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=c){const p=kr(this,t,Is,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=kr(this,t,Is,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function kr(s,t,e,n,i,r){const o=s.geometry.attributes.position;if(uo.fromBufferAttribute(o,i),fo.fromBufferAttribute(o,r),e.distanceSqToSegment(uo,fo,na,ph)>n)return;na.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(na);if(!(l<t.near||l>t.far))return{distance:l,point:ph.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const mh=new C,gh=new C;class Px extends Dl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)mh.fromBufferAttribute(e,i),gh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+mh.distanceTo(gh);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ix extends Dl{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class id extends cn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const _h=new Lt,il=new er,zr=new bn,Hr=new C;class Lx extends he{constructor(t=new Re,e=new id){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(i),zr.radius+=r,t.ray.intersectsSphere(zr)===!1)return;_h.copy(i).invert(),il.copy(t.ray).applyMatrix4(_h);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=c.getX(g);Hr.fromBufferAttribute(u,m),xh(Hr,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Hr.fromBufferAttribute(u,g),xh(Hr,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xh(s,t,e,n,i,r,o){const a=il.distanceSqToPoint(s);if(a<e){const l=new C;il.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class sd extends Ee{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new rt:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,i=[],r=[],o=[],a=new C,l=new Lt;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ie(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ie(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Nl extends wn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new rt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Dx extends Nl{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ul(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Gr=new C,ia=new Ul,sa=new Ul,ra=new Ul;class rd extends wn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Gr.subVectors(i[0],i[1]).add(i[0]),c=Gr);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Gr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Gr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ia.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),sa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),ra.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ia.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),sa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ra.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(ia.calc(l),sa.calc(l),ra.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vh(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function Nx(s,t){const e=1-s;return e*e*t}function Ux(s,t){return 2*(1-s)*s*t}function Fx(s,t){return s*s*t}function zs(s,t,e,n){return Nx(s,t)+Ux(s,e)+Fx(s,n)}function Ox(s,t){const e=1-s;return e*e*e*t}function Bx(s,t){const e=1-s;return 3*e*e*s*t}function kx(s,t){return 3*(1-s)*s*s*t}function zx(s,t){return s*s*s*t}function Hs(s,t,e,n,i){return Ox(s,t)+Bx(s,e)+kx(s,n)+zx(s,i)}class od extends wn{constructor(t=new rt,e=new rt,n=new rt,i=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new rt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hs(t,i.x,r.x,o.x,a.x),Hs(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Hx extends wn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Hs(t,i.x,r.x,o.x,a.x),Hs(t,i.y,r.y,o.y,a.y),Hs(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ad extends wn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gx extends wn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ld extends wn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(zs(t,i.x,r.x,o.x),zs(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cd extends wn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(zs(t,i.x,r.x,o.x),zs(t,i.y,r.y,o.y),zs(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hd extends wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(vh(a,l.x,c.x,h.x,u.x),vh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new rt().fromArray(i))}return this}}var sl=Object.freeze({__proto__:null,ArcCurve:Dx,CatmullRomCurve3:rd,CubicBezierCurve:od,CubicBezierCurve3:Hx,EllipseCurve:Nl,LineCurve:ad,LineCurve3:Gx,QuadraticBezierCurve:ld,QuadraticBezierCurve3:cd,SplineCurve:hd});class Vx extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new sl[i.type]().fromJSON(i))}return this}}class yh extends Vx{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ad(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new ld(this.currentPoint.clone(),new rt(t,e),new rt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new od(this.currentPoint.clone(),new rt(t,e),new rt(n,i),new rt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new hd(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Nl(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $s extends Re{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new C,h=new rt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _e extends Re{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function M(){const x=new C,I=new C;let A=0;const w=(e-t)/n;for(let T=0;T<=r;T++){const S=[],y=T/r,P=y*(e-t)+t;for(let F=0;F<=i;F++){const B=F/i,X=B*l+a,K=Math.sin(X),W=Math.cos(X);I.x=P*K,I.y=-y*n+m,I.z=P*W,u.push(I.x,I.y,I.z),x.set(K,w,W).normalize(),d.push(x.x,x.y,x.z),f.push(B,1-y),S.push(g++)}_.push(S)}for(let T=0;T<i;T++)for(let S=0;S<r;S++){const y=_[S][T],P=_[S+1][T],F=_[S+1][T+1],B=_[S][T+1];(t>0||S!==0)&&(h.push(y,P,B),A+=3),(e>0||S!==r-1)&&(h.push(P,F,B),A+=3)}c.addGroup(p,A,0),p+=A}function v(x){const I=g,A=new rt,w=new C;let T=0;const S=x===!0?t:e,y=x===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const P=g;for(let F=0;F<=i;F++){const X=F/i*l+a,K=Math.cos(X),W=Math.sin(X);w.x=S*W,w.y=m*y,w.z=S*K,u.push(w.x,w.y,w.z),d.push(0,y,0),A.x=K*.5+.5,A.y=W*.5*y+.5,f.push(A.x,A.y),g++}for(let F=0;F<i;F++){const B=I+F,X=P+F;x===!0?h.push(X,X+1,B):h.push(X+1,X,B),T+=3}c.addGroup(p,T,x===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gn extends _e{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Gn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vo extends Re{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new C,x=new C,I=new C;for(let A=0;A<e.length;A+=3)f(e[A+0],v),f(e[A+1],x),f(e[A+2],I),l(v,x,I,M)}function l(M,v,x,I){const A=I+1,w=[];for(let T=0;T<=A;T++){w[T]=[];const S=M.clone().lerp(x,T/A),y=v.clone().lerp(x,T/A),P=A-T;for(let F=0;F<=P;F++)F===0&&T===A?w[T][F]=S:w[T][F]=S.clone().lerp(y,F/P)}for(let T=0;T<A;T++)for(let S=0;S<2*(A-T)-1;S++){const y=Math.floor(S/2);S%2===0?(d(w[T][y+1]),d(w[T+1][y]),d(w[T][y])):(d(w[T][y+1]),d(w[T+1][y+1]),d(w[T+1][y]))}}function c(M){const v=new C;for(let x=0;x<r.length;x+=3)v.x=r[x+0],v.y=r[x+1],v.z=r[x+2],v.normalize().multiplyScalar(M),r[x+0]=v.x,r[x+1]=v.y,r[x+2]=v.z}function h(){const M=new C;for(let v=0;v<r.length;v+=3){M.x=r[v+0],M.y=r[v+1],M.z=r[v+2];const x=m(M)/2/Math.PI+.5,I=p(M)/Math.PI+.5;o.push(x,1-I)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){const v=o[M+0],x=o[M+2],I=o[M+4],A=Math.max(v,x,I),w=Math.min(v,x,I);A>.9&&w<.1&&(v<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),I<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,v){const x=M*3;v.x=t[x+0],v.y=t[x+1],v.z=t[x+2]}function g(){const M=new C,v=new C,x=new C,I=new C,A=new rt,w=new rt,T=new rt;for(let S=0,y=0;S<r.length;S+=9,y+=6){M.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),A.set(o[y+0],o[y+1]),w.set(o[y+2],o[y+3]),T.set(o[y+4],o[y+5]),I.copy(M).add(v).add(x).divideScalar(3);const P=m(I);_(A,y+0,M,P),_(w,y+2,v,P),_(T,y+4,x,P)}}function _(M,v,x,I){I<0&&M.x===1&&(o[v]=M.x-1),x.x===0&&x.z===0&&(o[v]=I/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.vertices,t.indices,t.radius,t.details)}}class Fl extends vo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fl(t.radius,t.detail)}}class ud extends yh{constructor(t){super(t),this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new yh().fromJSON(i))}return this}}const Wx={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=dd(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=$x(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return js(r,o,e,a,l,f,0),o}};function dd(s,t,e,n,i){let r,o;if(i===ov(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Mh(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Mh(r,s[r],s[r+1],o);return o&&yo(o,o.next)&&(Js(o),o=o.next),o}function Si(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(yo(e,e.next)||ve(e.prev,e,e.next)===0)){if(Js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function js(s,t,e,n,i,r,o){if(!s)return;!o&&r&&tv(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?qx(s,n,i,r):Xx(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Js(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=Yx(Si(s),t,e),js(s,t,e,n,i,r,2)):o===2&&Kx(s,t,e,n,i,r):js(Si(s),t,e,n,i,r,1);break}}}function Xx(s){const t=s.prev,e=s,n=s.next;if(ve(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,f=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Zi(i,a,r,l,o,c,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qx(s,t,e,n){const i=s.prev,r=s,o=s.next;if(ve(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=rl(f,g,t,e,n),M=rl(_,m,t,e,n);let v=s.prevZ,x=s.nextZ;for(;v&&v.z>=p&&x&&x.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Zi(a,h,l,u,c,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Zi(a,h,l,u,c,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&Zi(a,h,l,u,c,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Zi(a,h,l,u,c,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Yx(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!yo(i,r)&&fd(i,n,n.next,r)&&Zs(i,r)&&Zs(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Js(n),Js(n.next),n=s=r),n=n.next}while(n!==s);return Si(n)}function Kx(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&iv(o,a)){let l=pd(o,a);o=Si(o,o.next),l=Si(l,l.next),js(o,t,e,n,i,r,0),js(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function $x(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=dd(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(nv(c));for(i.sort(jx),r=0;r<i.length;r++)e=Zx(i[r],e);return e}function jx(s,t){return s.x-t.x}function Zx(s,t){const e=Jx(s,t);if(!e)return t;const n=pd(e,s);return Si(n,n.next),Si(e,e.next)}function Jx(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Zi(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Zs(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Qx(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Qx(s,t){return ve(s.prev,s,t.prev)<0&&ve(t.next,s,s.next)<0}function tv(s,t,e,n){let i=s;do i.z===0&&(i.z=rl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ev(i)}function ev(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function rl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function nv(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Zi(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function iv(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!sv(s,t)&&(Zs(s,t)&&Zs(t,s)&&rv(s,t)&&(ve(s.prev,s,t.prev)||ve(s,t.prev,t))||yo(s,t)&&ve(s.prev,s,s.next)>0&&ve(t.prev,t,t.next)>0)}function ve(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function yo(s,t){return s.x===t.x&&s.y===t.y}function fd(s,t,e,n){const i=Wr(ve(s,t,e)),r=Wr(ve(s,t,n)),o=Wr(ve(e,n,s)),a=Wr(ve(e,n,t));return!!(i!==r&&o!==a||i===0&&Vr(s,e,t)||r===0&&Vr(s,n,t)||o===0&&Vr(e,s,n)||a===0&&Vr(e,t,n))}function Vr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Wr(s){return s>0?1:s<0?-1:0}function sv(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&fd(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Zs(s,t){return ve(s.prev,s,s.next)<0?ve(s,t,s.next)>=0&&ve(s,s.prev,t)>=0:ve(s,t,s.prev)<0||ve(s,s.next,t)<0}function rv(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function pd(s,t){const e=new ol(s.i,s.x,s.y),n=new ol(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Mh(s,t,e,n){const i=new ol(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Js(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ol(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ov(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Gs{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Gs.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Sh(t),bh(n,t);let o=t.length;e.forEach(Sh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,bh(n,e[l]);const a=Wx.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Sh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function bh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class oi extends vo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oi(t.radius,t.detail)}}class nr extends Re{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new C,g=new rt;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const M=p+m,v=M,x=M+n+1,I=M+n+2,A=M+1;a.push(v,x,A),a.push(x,I,A)}}this.setIndex(a),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ol extends Re{constructor(t=new ud([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(i,3)),this.setAttribute("normal",new te(r,3)),this.setAttribute("uv",new te(o,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;Gs.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const M=g[m];Gs.isClockWise(M)===!0&&(g[m]=M.reverse())}const _=Gs.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){const M=f[m];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,p=_.length;m<p;m++){const M=_[m],v=M[0]+u,x=M[1]+u,I=M[2]+u;n.push(v,x,I),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return av(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Ol(n,t.curveSegments)}}function av(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class je extends Re{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new C,d=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],v=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let I=0;I<=e;I++){const A=I/e;u.x=-t*Math.cos(i+A*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+A*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+x,1-v),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const v=h[p][M+1],x=h[p][M],I=h[p+1][M],A=h[p+1][M+1];(p!==0||o>0)&&f.push(v,x,A),(p!==n-1||l<Math.PI)&&f.push(x,I,A)}this.setIndex(f),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bl extends Re{constructor(t=new cd(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,c=new rt;let h=new C;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function _(){for(let v=0;v<e;v++)m(v);m(r===!1?e:0),M(),p()}function m(v){h=t.getPointAt(v/e,h);const x=o.normals[v],I=o.binormals[v];for(let A=0;A<=i;A++){const w=A/i*Math.PI*2,T=Math.sin(w),S=-Math.cos(w);l.x=S*x.x+T*I.x,l.y=S*x.y+T*I.y,l.z=S*x.z+T*I.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let x=1;x<=i;x++){const I=(i+1)*(v-1)+(x-1),A=(i+1)*v+(x-1),w=(i+1)*v+x,T=(i+1)*(v-1)+x;g.push(I,A,T),g.push(A,w,T)}}function M(){for(let v=0;v<=e;v++)for(let x=0;x<=i;x++)c.x=v/e,c.y=x/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Bl(new sl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Mo extends cn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class En extends Mo{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class an extends cn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=El,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Xr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function lv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function cv(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function wh(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function md(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}class ir{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hv extends ir{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ki,endingEnd:Ki}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case $i:r=t,a=2*e-n;break;case co:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case $i:o=t,l=2*n-e;break;case co:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let I=0;I!==a;++I)r[I]=p*o[h+I]+M*o[c+I]+v*o[l+I]+x*o[u+I];return r}}class gd extends ir{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class uv extends ir{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class An{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xr(e,this.TimeBufferType),this.values=Xr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xr(t.times,Array),values:Xr(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new uv(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hv(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Xs:e=this.InterpolantFactoryMethodDiscrete;break;case qs:e=this.InterpolantFactoryMethodLinear;break;case Eo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xs;case this.InterpolantFactoryMethodLinear:return qs;case this.InterpolantFactoryMethodSmooth:return Eo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&lv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Eo,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=qs;class ms extends An{constructor(t,e,n){super(t,e,n)}}ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Xs;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;class _d extends An{}_d.prototype.ValueTypeName="color";class hs extends An{}hs.prototype.ValueTypeName="number";class dv extends ir{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)be.slerpFlat(r,0,o,c-a,o,c,l);return r}}class us extends An{InterpolantFactoryMethodLinear(t){return new dv(this.times,this.values,this.getValueSize(),t)}}us.prototype.ValueTypeName="quaternion";us.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends An{constructor(t,e,n){super(t,e,n)}}gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Xs;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends An{}ds.prototype.ValueTypeName="vector";class al{constructor(t="",e=-1,n=[],i=wl){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=ln(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(pv(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(An.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=cv(l);l=wh(l,1,h),c=wh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new hs(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];md(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const v=d[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new hs(".morphTargetInfluence["+_+"]",m,p))}l=f.length*o}else{const f=".bones["+e[u].name+"]";n(ds,f+".position",d,"pos",i),n(us,f+".quaternion",d,"rot",i),n(ds,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function fv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hs;case"vector":case"vector2":case"vector3":case"vector4":return ds;case"color":return _d;case"quaternion":return us;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function pv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=fv(s.type);if(s.times===void 0){const e=[],n=[];md(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const ei={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class mv{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const gv=new mv;class _s{constructor(t){this.manager=t!==void 0?t:gv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}_s.DEFAULT_MATERIAL_NAME="__DEFAULT";const Nn={};class _v extends Error{constructor(t,e){super(t),this.response=e}}class xd extends _s{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ei.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Nn[t]!==void 0){Nn[t].push({onLoad:e,onProgress:n,onError:i});return}Nn[t]=[],Nn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Nn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){u.read().then(({done:v,value:x})=>{if(v)p.close();else{_+=x.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,w=h.length;A<w;A++){const T=h[A];T.onProgress&&T.onProgress(I)}p.enqueue(x),M()}},v=>{p.error(v)})}}});return new Response(m)}else throw new _v(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ei.add(t,c);const h=Nn[t];delete Nn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Nn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Nn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class xv extends _s{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ei.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Ys("img");function l(){h(),ei.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class vv extends _s{constructor(t){super(t)}load(t,e,n,i){const r=new Ee,o=new xv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class So extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class yv extends So{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const oa=new Lt,Eh=new C,Ah=new C;class kl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Eh),Ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ah),e.updateMatrixWorld(),oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Mv extends kl{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=ls*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Sv extends So{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Mv}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Th=new Lt,Ls=new C,aa=new C;class bv extends kl{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ls),aa.copy(n.position),aa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(aa),n.updateMatrixWorld(),i.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Th)}}class vd extends So{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class wv extends kl{constructor(){super(new Cl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yd extends So{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new wv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vs{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Ev extends _s{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=ei.get(t);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ei.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),ei.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});ei.add(t,l),r.manager.itemStart(t)}}class Av{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){be.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;be.multiplyQuaternionsFlat(t,o,t,e,t,n),be.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const zl="\\[\\]\\.:\\/",Tv=new RegExp("["+zl+"]","g"),Hl="[^"+zl+"]",Rv="[^"+zl.replace("\\.","")+"]",Cv=/((?:WC+[\/:])*)/.source.replace("WC",Hl),Pv=/(WCOD+)?/.source.replace("WCOD",Rv),Iv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hl),Lv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hl),Dv=new RegExp("^"+Cv+Pv+Iv+Lv+"$"),Nv=["material","materials","bones","map"];class Uv{constructor(t,e,n){const i=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class se{constructor(t,e,n){this.path=e,this.parsedPath=n||se.parseTrackName(e),this.node=se.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new se.Composite(t,e,n):new se(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Tv,"")}static parseTrackName(t){const e=Dv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Nv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=se.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}se.Composite=Uv;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Fv{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),l={endingStart:Ki,endingEnd:Ki};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Uf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Of:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case wl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===Ff;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Du){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=$i,i.endingEnd=$i):(t?i.endingStart=this.zeroSlopeAtStart?$i:Ki:i.endingStart=co,e?i.endingEnd=this.zeroSlopeAtEnd?$i:Ki:i.endingEnd=co)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}}const Ov=new Float32Array(1);class Bv extends bi{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=e&&e._propertyBindings[u].binding.parsedPath;g=new Av(se.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new gd(new Float32Array(2),new Float32Array(2),1,Ov),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?al.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=wl),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Fv(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?al.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Rh=new Lt;class kv{constructor(t,e,n=0,i=1/0){this.ray=new er(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Rh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rh),this}intersectObject(t,e=!0,n=[]){return ll(t,this,n,e),n.sort(Ch),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)ll(t[i],this,n,e);return n.sort(Ch),n}}function Ch(s,t){return s.distance-t.distance}function ll(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)ll(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);function ro(s,t){const e=s.x+s.w/2,n=s.z+s.d/2;return t==="S"?{ox:e,oz:s.z+s.d,ux:1,uz:0,nx:0,nz:1,rot:0,len:s.w}:t==="N"?{ox:e,oz:s.z,ux:-1,uz:0,nx:0,nz:-1,rot:Math.PI,len:s.w}:t==="E"?{ox:s.x+s.w,oz:n,ux:0,uz:-1,nx:1,nz:0,rot:Math.PI/2,len:s.d}:{ox:s.x,oz:n,ux:0,uz:1,nx:-1,nz:0,rot:-Math.PI/2,len:s.d}}const zv={S:0,N:Math.PI,E:Math.PI/2,W:-Math.PI/2};function sr(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ge(s,t,e,n){const i=new Ht(s,t,e),r=i.attributes.uv,o=[[e,t],[e,t],[s,e],[s,e],[s,t],[s,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){const c=a*4+l;r.setXY(c,r.getX(c)*o[a][0]/n,r.getY(c)*o[a][1]/n)}return i}function Hv(s,t,e){const n=new wi(s,t),i=n.attributes.uv;for(let r=0;r<i.count;r++)i.setXY(r,i.getX(r)*s/e,i.getY(r)*t/e);return n.rotateX(-Math.PI/2),n}function Gv(s,t,e,n,i,r){const o=s/2+n,a=t/2,l=a+n,c=-e*n/a,h=Math.hypot(l,e-c),u=2*o/i,d=h/i,f=(v,x)=>{const I=new Re;return I.setAttribute("position",new te(v,3)),I.setAttribute("uv",new te(x,2)),I.computeVertexNormals(),I},g=f([-o,c,l,o,c,l,o,e,0,-o,c,l,o,e,0,-o,e,0,o,c,-l,-o,c,-l,-o,e,0,o,c,-l,-o,e,0,o,e,0],[0,0,u,0,u,d,0,0,u,d,0,d,0,0,u,0,u,d,0,0,u,d,0,d]),_=s/2,m=t/r,p=e/r,M=f([_,0,a,_,0,-a,_,e,0,-_,0,-a,-_,0,a,-_,e,0],[0,0,m,0,m/2,p,0,0,m,0,m/2,p]);return{slopes:g,ends:M}}const Gl=new Gn(Math.SQRT1_2,1,4);Gl.rotateY(Math.PI/4);function Vv(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ai(s,t){const e=Math.min(255,Math.round((s>>16&255)*t)),n=Math.min(255,Math.round((s>>8&255)*t)),i=Math.min(255,Math.round((s&255)*t));return`rgb(${e},${n},${i})`}function He(s,t,e,n,i=!0){const r=document.createElement("canvas");r.width=s,r.height=t;const o=r.getContext("2d");n(o,s,t,Vv(e));const a=new sd(r);return a.colorSpace=we,a.magFilter=Ue,a.minFilter=Sn,i&&(a.wrapS=si,a.wrapT=si),a}function rr(s,t,e,n,i,r){for(let o=0;o<e;o++)for(let a=0;a<t;a++)s.fillStyle=ai(i,1+(n()-.5)*r),s.fillRect(a,o,1,1)}const Wv=He(64,64,11,(s,t,e,n)=>{rr(s,t,e,n,6201162,.16);for(let i=0;i<70;i++){const r=Math.floor(n()*t),o=Math.floor(n()*e);s.fillStyle=n()<.5?"#4a8a3c":"#77bd5c",s.fillRect(r,o,1,2)}}),Xv=He(64,64,23,(s,t,e,n)=>{rr(s,t,e,n,13349763,.12);for(let i=0;i<40;i++)s.fillStyle=n()<.5?"#a8926a":"#dcc89c",s.fillRect(Math.floor(n()*t),Math.floor(n()*e),2,1)}),qv=He(32,32,31,(s,t,e,n)=>{s.fillStyle="#5f626c",s.fillRect(0,0,t,e);for(let i=0;i<4;i++){const r=i%2===0?0:8;for(let o=-1;o<2;o++){const a=o*16+r,l=i*8,c=10132904;s.fillStyle=ai(c,.9+n()*.25),s.fillRect(a+1,l+1,15,7),s.fillStyle="rgba(255,255,255,0.18)",s.fillRect(a+1,l+1,15,1),s.fillStyle="rgba(0,0,0,0.18)",s.fillRect(a+1,l+7,15,1)}}}),Yv=He(32,32,41,(s,t,e,n)=>{rr(s,t,e,n,15721154,.07);const i="#5b3b22",r="#74502f";s.fillStyle=i,s.fillRect(0,0,3,e),s.fillRect(0,0,t,3),s.fillStyle=r,s.fillRect(1,3,1,e-3),s.fillRect(3,1,t-3,1),s.fillStyle=i;for(let o=0;o<26;o++)s.fillRect(4+o,30-o,2,2)});function Md(s,t){return He(32,32,t,(e,n,i,r)=>{for(let o=0;o<4;o++){const a=.88+r()*.24;for(let l=0;l<i;l++)for(let c=0;c<8;c++)e.fillStyle=ai(s,a*(1+(r()-.5)*.08)),e.fillRect(o*8+c,l,1,1);e.fillStyle="rgba(0,0,0,0.35)",e.fillRect(o*8,0,1,i)}for(let o=0;o<10;o++)e.fillStyle="rgba(0,0,0,0.25)",e.fillRect(Math.floor(r()*n),Math.floor(r()*i),1,3)})}const Kv=Md(10119999,51),$v=Md(6178352,53),jv=He(32,32,61,(s,t,e,n)=>{s.fillStyle="#d8c7a8",s.fillRect(0,0,t,e);for(let i=0;i<8;i++){const r=i%2===0?0:4;for(let o=-1;o<4;o++)s.fillStyle=ai(11031098,.85+n()*.3),s.fillRect(o*8+r+1,i*4+1,7,3)}}),Zv=He(32,32,71,(s,t,e,n)=>{rr(s,t,e,n,4163276,.08);for(let i=0;i<14;i++)s.fillStyle="rgba(190,225,255,0.75)",s.fillRect(Math.floor(n()*t),Math.floor(n()*e),3+Math.floor(n()*4),1)}),Jv=He(32,32,81,(s,t,e,n)=>{rr(s,t,e,n,8018486,.14);for(let i=0;i<e;i+=8)s.fillStyle="rgba(0,0,0,0.28)",s.fillRect(0,i,t,2),s.fillStyle="rgba(255,255,255,0.1)",s.fillRect(0,i+2,t,1)}),Ph=new Map;function Qv(s){let t=Ph.get(s);return t||(t=He(32,32,90+(s&255),(e,n,i,r)=>{e.fillStyle=ai(s,.55),e.fillRect(0,0,n,i);for(let o=0;o<4;o++){const a=o%2===0?0:4;for(let l=-1;l<5;l++){const c=l*8+a,h=o*8;e.fillStyle=ai(s,.9+r()*.22),e.fillRect(c+1,h,7,7),e.fillStyle="rgba(255,255,255,0.22)",e.fillRect(c+1,h+5,7,1)}}}),Ph.set(s,t)),t}const ty=He(16,24,101,(s,t,e,n)=>{s.fillStyle="#3a2413",s.fillRect(0,0,t,e);for(let i=0;i<3;i++)s.fillStyle=ai(8015659,.9+n()*.2),s.fillRect(1+i*5,1,4,e-1);s.fillStyle="#2b2b33",s.fillRect(1,5,14,2),s.fillRect(1,17,14,2),s.fillStyle="#e9c46a",s.fillRect(12,12,2,2)},!1),ey=He(16,16,111,(s,t,e)=>{s.fillStyle="#4a2f1b",s.fillRect(0,0,t,e),s.fillStyle="#8fd0ee",s.fillRect(2,2,12,12),s.fillStyle="#c9ecfb",s.fillRect(3,3,3,2),s.fillRect(9,3,3,2),s.fillStyle="#4a2f1b",s.fillRect(7,2,2,12),s.fillRect(2,7,12,2),s.fillStyle="#6b4a2e",s.fillRect(0,14,t,2)},!1),ny=He(16,32,121,(s,t,e,n)=>{s.fillStyle="#3a3d47",s.fillRect(0,0,t,e);const i=["#e63946","#ffd166","#48cae4","#90be6d","#b565f0"];for(let r=2;r<e-2;r+=4)for(let o=2;o<t-2;o+=4){const a=o+2-t/2;r<8&&a*a+(r-8)*(r-8)>44||(s.fillStyle=i[Math.floor(n()*i.length)],s.fillRect(o,r,3,3))}},!1),iy=He(32,32,131,(s,t,e,n)=>{s.clearRect(0,0,t,e);for(let i=0;i<e;i++)for(let r=0;r<t;r++){const o=r+.5-t/2;if(!(i>=14?Math.abs(o)<14:o*o+(i-14)*(i-14)<196))continue;const l=Math.floor(r/4);s.fillStyle=r%4===0?"#2e1d10":ai(7030054,.85+l*37%10/40+n()*.05),s.fillRect(r,i,1,1)}s.fillStyle="#2b2b33",s.fillRect(3,18,26,2),s.fillRect(3,27,26,2)},!1),Sd=He(4,128,141,(s,t,e)=>{const n=s.createLinearGradient(0,0,0,e);n.addColorStop(0,"#3f8fdc"),n.addColorStop(.55,"#8cc8f0"),n.addColorStop(1,"#d6eefa"),s.fillStyle=n,s.fillRect(0,0,t,e)},!1);Sd.magFilter=Ve;const Ih=new Map;function sy(s){let t=Ih.get(s);return t||(t=He(16,16,150,(e,n,i)=>{e.fillStyle="#4a2f1b",e.fillRect(0,0,n,i),e.fillStyle="#b98a52",e.fillRect(1,1,n-2,i-2),s==="potion"?(e.fillStyle="#f1f1f1",e.fillRect(7,3,2,3),e.fillStyle="#7a4f2b",e.fillRect(6,2,4,1),e.fillStyle="#e63946",e.fillRect(5,7,6,5),e.fillRect(6,6,4,7),e.fillStyle="#ff9aa5",e.fillRect(6,8,1,2)):s==="mug"?(e.fillStyle="#f7f1e0",e.fillRect(4,4,7,3),e.fillStyle="#e0a030",e.fillRect(4,7,7,6),e.fillStyle="#7a4f2b",e.fillRect(11,8,2,1),e.fillRect(12,9,1,2),e.fillRect(11,11,2,1)):s==="bed"?(e.fillStyle="#5b3b22",e.fillRect(2,6,2,7),e.fillRect(3,10,11,2),e.fillRect(12,9,2,4),e.fillStyle="#f7f1e0",e.fillRect(4,8,3,2),e.fillStyle="#3a6ea5",e.fillRect(7,7,6,3)):(e.fillStyle="#5c6068",e.fillRect(4,4,8,4),e.fillStyle="#8a8e96",e.fillRect(4,4,8,1),e.fillStyle="#6b4526",e.fillRect(7,8,2,6))},!1),Ih.set(s,t)),t}const Ot={grass:Wv,path:Xv,stone:qv,timber:Yv,wood:Kv,darkWood:$v,brick:jv,water:Zv,soil:Jv,roof:Qv,door:ty,window:ey,stainedGlass:ny,gateDoor:iy,sky:Sd,sign:sy},Lh={教会:{floor:"stone",wall:"stone",tile:2,height:4.2,roofHeight:2.6,roofColor:5205402},食料庫:{floor:"wood",wall:"wood",tile:1.6,height:3,roofHeight:1.3,roofColor:8018490},道具屋:{floor:"wood",wall:"timber",tile:1.3,height:2.6,roofHeight:1.4,roofColor:12597547,sign:"potion"},家:{floor:"wood",wall:"timber",tile:1.2,height:2.4,roofHeight:1.3,roofColor:14254635,chimney:!0},鍛冶屋:{floor:"stone",wall:"stone",tile:2,height:2.6,roofHeight:1.2,roofColor:4474703,sign:"hammer",chimney:!0},酒場:{floor:"wood",wall:"brick",tile:1.6,height:2.9,roofHeight:1.5,roofColor:9318191,sign:"mug",chimney:!0},宿屋:{floor:"wood",wall:"timber",tile:1.4,height:3.1,roofHeight:1.7,roofColor:3494e3,sign:"bed",chimney:!0},馬小屋:{floor:"wood",wall:"darkWood",tile:1.6,height:2.6,roofHeight:1.2,roofColor:8018490}},Dh=[14254635,4165514,11883578,7049018],ry=.9;function oy(s,t){for(const[e,n]of s){const i=e===t;n.upper.visible=!i,n.walls.scale.y=i?ry/n.height:1}}function qr(s,t,e,n,i,r,o,a,l,c){const h=r-i;if(h<=.001||a-o<=.001)return;const u=(i+r)/2,d=n.ux!==0,f=new gt(ge(d?h:nn,a-o,d?nn:h,c),l);f.position.set(n.ox+n.ux*u-n.nx*nn/2,(o+a)/2,n.oz+n.uz*u-n.nz*nn/2),f.castShadow=!0,f.receiveShadow=!0,f.userData.building=e,t.add(f),s.occluders.push(f)}function ay(s,t,e,n,i,r){const{x:o,z:a,w:l,d:c}=i,h=o+l/2,u=a+c/2,d=s.mat(Ot[r.wall]),f=r.height,g=e.label==="教会",_=mo(e),m=_.face,p=_.width,M=g?2.7:2,v=new re,x=new re;s.scene.add(v,x),t.houses.set(n,{upper:x,walls:v,height:f});for(const Rt of["N","S","E","W"]){const G=ro(i,Rt);Rt===m?(qr(s,v,n,G,-G.len/2,-p/2,0,f,d,r.tile),qr(s,v,n,G,p/2,G.len/2,0,f,d,r.tile),qr(s,x,n,G,-p/2,p/2,M,f,d,r.tile)):qr(s,v,n,G,-G.len/2,G.len/2,0,f,d,r.tile)}const I=r.floor==="stone"?s.mat(Ot.stone,14211294):s.mat(Ot.wood,14862239);s.floor(o,a,l,c,.03,I,r.floor==="stone"?2:1.6),g&&s.floor(h-1,a+.6,2,c-.6,.04,s.mat(null,10753562),1);const A=new gt(new Ht(m==="N"||m==="S"?p:nn,M,m==="N"||m==="S"?nn:p)),w=ro(i,m);A.position.set(w.ox-w.nx*nn/2,M/2,w.oz-w.nz*nn/2),A.visible=!1,A.userData.building=n,s.scene.add(A),s.occluders.push(A);const T=ro(i,m),S=s.mat(Ot.door),y=p>1.6?2:1,P=p/y-.03,F={x:T.ox,z:T.oz,leaves:[],amount:0};for(let Rt=0;Rt<y;Rt++){const G=new re,Q=Rt===0?-1:1;G.position.set(T.ox+T.ux*Q*(p/2)-T.nx*nn/2,0,T.oz+T.uz*Q*(p/2)-T.nz*nn/2);const yt=Rt===0?T.rot:T.rot+Math.PI,lt=Rt===0?yt-1.75:yt+1.75;G.rotation.y=yt;const Ct=new gt(new Ht(P,M-.05,.08),S);Ct.position.set(P/2,(M-.05)/2,0),Ct.castShadow=!0,Ct.receiveShadow=!0,G.add(Ct),v.add(G),F.leaves.push({hinge:G,closed:yt,open:lt})}t.doors.push(F);const B=m==="N"||m==="S"?c:l,X=m==="N"?"S":m==="S"?"N":m==="E"?"W":"E",K=m==="N"||m==="S"?["E","W"]:["N","S"],W=s.mat(Ot.window);if(T.len>=4.4)for(const Rt of[-1,1])s.onFace(i,m,Rt*(T.len/2-.8),1.45,.72,.72,W,!0,x);if(g){const Rt=s.mat(Ot.stainedGlass);for(const G of K)for(const Q of[-1.3,0,1.3])s.onFace(i,G,Q,2.3,.7,1.5,Rt,!0,x);s.onFace(i,m,0,3.45,.9,.9,Rt,!0,x),s.onFace(i,X,0,2.6,1,1.8,Rt,!0,x)}else{for(const Rt of K)B>=2.5&&s.onFace(i,Rt,0,1.45,.72,.72,W,!0,x);for(const Rt of[-1,1])s.onFace(i,X,Rt*(T.len/4),1.45,.72,.72,W,!0,x)}const Z=x,H=l>=c,at=Gv(H?l:c,H?c:l,r.roofHeight,.35,1,r.tile),ft=new re,At=new gt(at.slopes,s.mat(Ot.roof(r.roofColor),16777215,!0)),Wt=new gt(at.ends,s.mat(Ot[r.wall],16777215,!0));for(const Rt of[At,Wt])Rt.castShadow=!0,Rt.receiveShadow=!0,ft.add(Rt);if(ft.position.set(h,f,u),H||(ft.rotation.y=Math.PI/2),Z.add(ft),r.chimney){const Rt=H?l*.28:0,G=H?0:c*.28,Q=new gt(ge(.45,1.1,.45,1.2),s.mat(Ot.brick));Q.position.set(h+Rt,f+r.roofHeight*.75,u+G),Q.castShadow=!0,Z.add(Q),s.fx.addChimney(Z,Q.position.x,Q.position.y+.6,Q.position.z)}g&&(t.tower=ly(s,Z,h,a+c-1.15,f)),r.sign&&cy(s,i,m,r.sign),e.label==="酒場"&&hy(s,o-.45,a+1.2),e.label==="食料庫"&&uy(s,o+l+.5,a+1.2),e.label==="鍛冶屋"&&dy(s,o-.6,a-.6)}function ly(s,t,e,n,i){const r=s.mat(Ot.stone),o=1.9,a=4.2,l=(_,m,p,M,v)=>{const x=new gt(_,m);return x.position.set(p,M,v),x.castShadow=!0,x.receiveShadow=!0,t.add(x),x};l(ge(o,a,o,2),r,e,i+a/2,n);const c=new ce({color:1776934}),h={x:e-o/2,z:n-o/2,w:o,d:o};for(const _ of["N","S","E","W"])s.onFace(h,_,0,i+a-1.1,.7,1,c,!1,t);const u=l(new _e(.16,.3,.42,8),s.mat(null,15320170),e,i+a-1.05,n);u.castShadow=!1;const d=l(Gl,s.mat(Ot.roof(5205402)),e,i+a+1.1,n);d.scale.set(o+.5,2.2,o+.5);const f=s.mat(null,16765286),g=[l(new Ht(.14,1.1,.14),f,e,i+a+2.7,n),l(new Ht(.62,.14,.14),f,e,i+a+2.85,n)];return{bell:u,cap:d,cross:g,x:e,z:n,top:i+a}}function cy(s,t,e,n){const i=t.x+t.w/2,r=t.z+t.d/2,o=t.w/2-.5;let a=i,l=r,c=0;const h=.45;e==="S"?(a=i+o,l=t.z+t.d+h,c=Math.PI/2):e==="N"?(a=i+o,l=t.z-h,c=Math.PI/2):e==="W"?(a=t.x-h,l=r-(t.d/2-.5)):(a=t.x+t.w+h,l=r-(t.d/2-.5));const u=new re,d=new gt(new Ht(.06,.06,.9),s.mat(null,3811868));d.position.set(0,.36,0),d.rotation.y=Math.PI/2;const f=new gt(new Ht(.62,.62,.06),s.mat(Ot.sign(n)));f.castShadow=!0,u.add(d,f),u.position.set(a,2,l),u.rotation.y=c,s.scene.add(u)}function hy(s,t,e){const n=s.mat(Ot.wood),i=new _e(.3,.3,.75,10);s.put(i,n,t,.375,e),s.put(i,n,t,.375,e+.7),s.put(i,n,t-.05,1.1,e+.35)}function uy(s,t,e){const n=s.mat(Ot.wood,14731680);s.put(ge(.7,.7,.7,.7),n,t,.35,e),s.put(ge(.6,.6,.6,.6),n,t+.05,.3,e+.8).rotation.y=.3,s.put(ge(.5,.5,.5,.5),n,t,.95,e+.1).rotation.y=.5,s.put(new je(.3,8,6),s.mat(null,14271898),t+.1,.25,e+1.6).scale.set(1,.8,1)}function dy(s,t,e){const n=s.mat(null,4474703);s.put(ge(.5,.45,.5,.6),s.mat(Ot.darkWood),t,.225,e),s.put(new Ht(.62,.14,.26),n,t,.6,e),s.put(new Ht(.3,.14,.22),n,t,.5,e)}const bd=1784407;function fy(s){const t={houses:new Map,doors:[],tower:null};let e=0;return fs.forEach((n,i)=>{const r=Qs(n),o={x:r.x/st,z:r.y/st,w:r.w/st,d:r.h/st};if(n.label==="池")gy(s,o);else if(n.label==="畑")_y(s,o);else if(n.label==="屋台")py(s,o,n.color);else if(!fl(n))my(s,o,n.label==="西門"?"E":"W");else{const a=Lh[n.label]??Lh.家,l=n.label==="家"?{...a,roofColor:Dh[e++%Dh.length]}:a;ay(s,t,n,i,o,l)}}),t}function py(s,t,e){const{x:n,z:i,w:r,d:o}=t,a=n+r/2,l=i+o/2,c=s.mat(Ot.wood);s.put(ge(r-.1,.7,o-.25,1.2),c,a,.35,l);for(const f of[-1,1])for(const g of[-1,1])s.put(new Ht(.08,2.1,.08),s.mat(Ot.darkWood),a+f*(r/2-.08),1.05,l+g*(o/2-.1));const h=6;for(let f=0;f<h;f++){const g=(r+.3)/h,_=s.put(new Ht(g,.05,o+.5),s.mat(null,f%2===0?e:16249312),a-(r+.3)/2+g*(f+.5),2.15,l);_.rotation.x=.16}const u=[15087942,16765286,9485933,16032353,11888112],d=Math.floor(r*3);for(let f=0;f<d;f++){const g=s.put(new Ht(.2,.16,.2),s.mat(null,u[(f+Math.floor(n))%u.length]),n+.25+f*(r-.5)/(d-1),.78,l+(f%2-.5)*.25);g.castShadow=!1}}function my(s,t,e){const{x:n,z:i,w:r,d:o}=t,a=n+r/2,l=i+o/2,c=s.mat(Ot.stone),h=3.8,u=s.put(ge(r,h,o,2),c,a,h/2,l);s.occluders.push(u);const d=new Ht(.42,.42,.42);for(let g=0;g<=4;g++){const _=i+.21+g*(o-.42)/4;s.put(d,c,n+.21,h+.21,_),s.put(d,c,n+r-.21,h+.21,_)}s.put(d,c,a,h+.21,i+.21),s.put(d,c,a,h+.21,i+o-.21);const f=new an({map:Ot.gateDoor,alphaTest:.5});s.onFace(t,e,0,1.3,2.2,2.6,f),s.put(new Ht(.07,1.6,.07),s.mat(null,6045747),a,h+.8,l),s.put(new Ht(.03,.42,.7),s.mat(null,12653087),a,h+1.35,l+.4)}function gy(s,t){const{x:e,z:n,w:i,d:r}=t;s.floor(e,n,i,r,.03,s.mat(Ot.water),2);const o=s.mat(Ot.stone),a=.28;s.put(ge(i+a*2,.22,a,2),o,e+i/2,.11,n-a/2),s.put(ge(i+a*2,.22,a,2),o,e+i/2,.11,n+r+a/2),s.put(ge(a,.22,r,2),o,e-a/2,.11,n+r/2),s.put(ge(a,.22,r,2),o,e+i+a/2,.11,n+r/2);const l=s.mat(null,5212732),c=sr(5);for(let h=0;h<14;h++){const u=e+.3+c()*(i-.6),d=c()<.5?n+.25+c()*.4:n+r-.25-c()*.4,f=.5+c()*.5,g=s.put(new Ht(.05,f,.05),l,u,f/2,d);g.castShadow=!1}}function _y(s,t){const{x:e,z:n,w:i,d:r}=t;s.floor(e,n,i,r,.02,s.mat(Ot.soil),2);const o=Math.floor(r*2),a=Math.floor(i*2.2),l=new on(new Ht(.18,.3,.18),s.mat(null),o*a),c=sr(9),h=new Lt,u=new Tt;let d=0;for(let f=0;f<o;f++)for(let g=0;g<a;g++){const _=.7+c()*.7;h.makeScale(_,_,_),h.setPosition(e+.25+g*(i-.5)/(a-1),.15*_,n+.37+f*.5),l.setMatrixAt(d,h),l.setColorAt(d,u.setHex(c()<.2?14271050:6268988).multiplyScalar(.85+c()*.3)),d++}l.castShadow=!0,l.receiveShadow=!0,s.scene.add(l)}function xy(s){const t=Ke(en.tx,en.ty),e=t.x/st,n=t.y/st,i=en.radius/st,r=s.mat(Ot.stone),o=s.mat(Ot.darkWood);s.put(new _e(i,i+.04,.72,16),r,e,.36,n);const a=s.put(new _e(i-.12,i-.12,.02,16),new an({color:bd}),e,.73,n);a.castShadow=!1;for(const c of[-1,1])s.put(new Ht(.1,1.6,.1),o,e+c*(i-.02),.8,n);return s.put(new Ht(i*2,.08,.08),o,e,1.5,n),s.put(Gl,s.mat(Ot.roof(9067066)),e,1.9,n).scale.set(i*2+.6,.6,i*2+.6),s.put(new Ht(.02,.5,.02),s.mat(null,14271898),e,1.22,n).castShadow=!1,s.put(new _e(.11,.09,.2,8),o,e,.92,n),s.occluder(e,n,i+.45,0,2.3),a}const vy=1.1;class yy{constructor(t,e,n,i){this.camera=t,this.occluders=e,this.cols=n,this.rows=i,this.raycaster=new kv,this.indoor=-1,this.activeOccluders=[],this.shakeMs=0,this.followDist=-1,this.lastDtMs=16,this.heroInTheWay=!1,this.wasFollowing=!1}isSameIndoor(t){return t===this.indoor&&this.activeOccluders.length>0}setIndoor(t){this.indoor=t,this.activeOccluders=this.occluders.filter(e=>e.userData.building===void 0||e.userData.building!==t)}shake(t){this.shakeMs=Math.max(this.shakeMs,t)}update(t){this.shakeMs=Math.max(0,this.shakeMs-t),this.lastDtMs=t}setFollowCamera(t,e,n,i,r){const o=new C(t/st,1.25,e/st),a=Math.cos(i),l=new C(-Math.sin(n)*a,Math.sin(i),-Math.cos(n)*a);this.camera.position.copy(o).addScaledVector(l,r),this.camera.lookAt(o.x,o.y+tt.camera.lookAbove,o.z);let c=r;this.raycaster.set(o,l),this.raycaster.far=r+.3;const h=this.raycaster.intersectObjects(this.activeOccluders,!1)[0];h&&(c=Math.max(.15,h.distance-.3)),!this.wasFollowing||this.followDist<0||c<this.followDist?this.followDist=c:this.followDist+=(c-this.followDist)*Math.min(1,this.lastDtMs*.004),this.wasFollowing=!0,this.heroInTheWay=this.followDist<vy,this.camera.position.copy(o).addScaledVector(l,this.followDist),this.camera.position.y+=(1-this.followDist/r)*.4,this.camera.position.y<.3&&(this.camera.position.y=.3),this.applyShake()}setDialogueCamera(t,e,n,i){const r=new C(t/st,1.3,e/st),o=new C(n/st,1,i/st),a=new C(o.x-r.x,0,o.z-r.z);a.lengthSq()<1e-4&&a.set(0,0,1),a.normalize();const l=new C(-a.z,0,a.x),c=new C().addScaledVector(a,-2).addScaledVector(l,1.25).setY(.55);let h=c.length();c.normalize(),this.raycaster.set(r,c),this.raycaster.far=h+.3;const u=this.raycaster.intersectObjects(this.activeOccluders,!1)[0];u&&(h=Math.max(.5,u.distance-.3)),this.wasFollowing=!1,this.heroInTheWay=!1;const d=r.clone().addScaledVector(c,h);this.camera.position.lerp(d,.15),this.camera.lookAt(o.x,o.y,o.z)}setOrbitCamera(t){this.wasFollowing=!1,this.heroInTheWay=!1;const e=this.cols/2,n=this.rows/2;this.camera.position.set(e+Math.cos(t)*this.cols*.58,15,n+Math.sin(t)*this.rows*.66),this.camera.lookAt(e,1,n)}applyShake(){if(this.shakeMs<=0)return;const t=.06;this.camera.position.x+=(Math.random()-.5)*t,this.camera.position.y+=(Math.random()-.5)*t,this.camera.position.z+=(Math.random()-.5)*t}}const My=1.3;function Sy(s,t,e){const n=Math.min(1,e*.012);for(const i of s){let r=0;for(const o of t)if(Math.hypot(o.x/st-i.x,o.y/st-i.z)<My){r=1;break}if(!(Math.abs(r-i.amount)<.001)){i.amount+=(r-i.amount)*n;for(const o of i.leaves)o.hinge.rotation.y=o.closed+(o.open-o.closed)*i.amount}}}const by=380;class wy{constructor(t){this.kit=t,this.flashes=[]}spawn(t,e,n){const i=new gt(new oi(.35,0),new ce({color:n,transparent:!0,opacity:.9,depthWrite:!1,blending:Qi}));i.position.set(t/st,.8,e/st),this.kit.scene.add(i),this.flashes.push({mesh:i,ageMs:0}),this.kit.fx.spawnBurst(t/st,e/st,n)}update(t){for(let e=this.flashes.length-1;e>=0;e--){const n=this.flashes[e];n.ageMs+=t;const i=n.ageMs/by;n.mesh.scale.setScalar(1+i*3),n.mesh.material.opacity=Math.max(0,.9*(1-i)),i>=1&&(this.kit.scene.remove(n.mesh),this.flashes.splice(e,1))}}}const Nh=9376294,Uh=4849682,Ey=3806288,Ay=1837104,Ty=15786948,Ry=16771402,Cy=16777215,Py=new je(.27,18,14),Iy=new _e(.17,.25,.42,14),wd=new Gn(.25,.5,14,1,!0);wd.rotateX(Math.PI);const Ly=new Gn(.075,.34,8),Dy=new je(.055,10,8),Ed=new Gn(.028,.09,6);Ed.rotateX(Math.PI);const Ny=new _e(.045,.06,.34,8),Ad=new Gn(.06,.12,5);Ad.rotateX(Math.PI);const Uy=new Gn(.08,.16,4),Fy=(()=>{const s=new ud;return s.moveTo(0,0),s.lineTo(.2,.34),s.lineTo(.62,.46),s.lineTo(.56,.16),s.lineTo(.44,.2),s.lineTo(.4,-.06),s.lineTo(.27,.04),s.lineTo(.2,-.22),s.lineTo(.09,-.08),s.lineTo(0,-.2),s.closePath(),new Ol(s)})(),Oy=new rd([new C(0,0,0),new C(0,-.14,-.2),new C(0,-.1,-.42),new C(0,.1,-.56)]),By=new Bl(Oy,16,.028,6,!1),ky=new ce({color:Ry}),zy=new ce({color:Cy});function Hy(s=1){const t=s<1,e=(_,m,p=xn)=>new Mo({color:_,emissive:m,emissiveIntensity:.9,roughness:.7,transparent:!0,opacity:s,depthWrite:!t,side:p}),n=e(Nh,Uh),i=e(Nh,Uh,$e),r=e(Ey,Ay,$e),o=e(Ty,3813408),a=new re,l=new gt(wd,i);l.position.y=.25;const c=new gt(Iy,n);c.position.y=.68,a.add(l,c);const h=new gt(Py,n);h.position.y=1.08,a.add(h);for(const _ of[-1,1]){const m=new gt(Ly,o);m.position.set(_*.17,1.36,.02),m.rotation.z=-_*.5,m.rotation.x=.18,a.add(m)}for(const _ of[-1,1]){const m=new gt(Dy,ky);m.position.set(_*.105,1.11,.235),m.scale.set(1.5,.62,.5),m.rotation.z=_*.42,a.add(m);const p=new gt(Ed,zy);p.position.set(_*.06,.965,.235),a.add(p)}for(const _ of[-1,1]){const m=new gt(Ny,n);m.position.set(_*.27,.68,.03),m.rotation.z=_*.45;const p=new gt(Ad,n);p.position.set(_*.35,.49,.03),a.add(m,p)}const u=[];for(const _ of[-1,1]){const m=new re;m.position.set(_*.1,.82,-.16);const p=new gt(Fy,r);p.scale.x=_,m.add(p),a.add(m),u.push(m)}const d=new re;d.position.set(0,.52,-.18);const f=new gt(By,n),g=new gt(Uy,n);return g.position.set(0,.17,-.6),g.rotation.x=-.5,d.add(f,g),a.add(d),{group:a,wings:u,tail:d,materials:[n,i,r,o]}}function Gy(s,t,e=0){const n=5+e*9,i=.25+e*.15,r=Math.sin(t*n)*(.32+e*.2);s.wings[0].rotation.y=i+r,s.wings[1].rotation.y=-(i+r),s.tail.rotation.y=Math.sin(t*2.6)*.35}const Fh=2200,Vy=220,Wy=700,Xy=8072383;class qy{constructor(t){this.kit=t,this.reveals=[]}spawn(t,e){const n=Hy(.01);n.group.position.set(t/st,0,e/st),this.kit.scene.add(n.group),this.reveals.push({figure:n,ageMs:0}),this.kit.fx.spawnBurst(t/st,e/st,Xy)}update(t){for(let e=this.reveals.length-1;e>=0;e--){const n=this.reveals[e];n.ageMs+=t;const i=Math.min(1,n.ageMs/Fh),r=n.figure.group,o=1-(1-i)*(1-i);r.position.y=.1+o*1.5,r.scale.setScalar(.7+o*.75),r.rotation.y+=t/1e3*1.6,Gy(n.figure,n.ageMs/1e3,1);const a=Math.min(1,n.ageMs/Vy),l=Math.min(1,(Fh-n.ageMs)/Wy),c=Math.max(0,.92*Math.min(a,l));for(const h of n.figure.materials)h.opacity=c;if(i>=1){this.kit.scene.remove(r);for(const h of n.figure.materials)h.dispose();this.reveals.splice(e,1)}}}}function Yy(s){for(const t of _u){const e=new re;e.position.set(t.tx+.5,.03,t.ty+.5),e.rotation.y=zv[t.face??"S"],Ky(s,e,t),e.traverse(n=>{n instanceof gt&&(n.castShadow=!0,n.receiveShadow=!0)}),s.scene.add(e),t.kind==="forge"&&s.fx.addForge(t.tx+.5,.88,t.ty+.5)}s.fx.finishForges()}function Ky(s,t,e){const n=s.mat(Ot.wood),i=s.mat(Ot.darkWood),r=s.mat(Ot.stone),o=(l,c,h,u,d)=>{const f=new gt(l,c);return f.position.set(h,u,d),t.add(f),f},a=(l,c,h)=>new Ht(l,c,h);switch(e.kind){case"bed":o(a(.8,.28,.94),i,0,.14,0),o(a(.74,.14,.62),s.mat(null,3829413),0,.35,.14),o(a(.56,.12,.22),s.mat(null,16316922),0,.35,-.32),o(a(.8,.6,.06),i,0,.3,-.45);break;case"table":o(a(.8,.07,.8),n,0,.6,0);for(const l of[-1,1])for(const c of[-1,1])o(a(.07,.58,.07),i,l*.33,.29,c*.33);o(new _e(.07,.06,.13,8),s.mat(null,10514490),.15,.7,-.1),o(new _e(.14,.14,.02,10),s.mat(null,15856113),-.15,.645,.1);break;case"counter":o(ge(1,.72,.5,1.2),i,0,.36,0),o(a(1,.06,.6),n,0,.75,0);break;case"shelf":{o(ge(.94,1.7,.34,1.2),i,0,.85,-.3);const l=[15087942,4770532,9485933,16765286,11888112];for(let c=0;c<3;c++){o(a(.94,.04,.4),n,0,.45+c*.5,-.27);for(let h=0;h<4;h++){const u=l[(e.tx*3+e.ty+c*2+h)%l.length];o(a(.1,.18,.1),s.mat(null,u),-.32+h*.21,.56+c*.5,-.14)}}break}case"barrel":o(new _e(.34,.3,.8,10),n,0,.4,0),o(new _e(.345,.345,.06,10),s.mat(null,4474703),0,.58,0),o(new _e(.33,.33,.06,10),s.mat(null,4474703),0,.2,0);break;case"crate":o(ge(.78,.78,.78,.78),s.mat(Ot.wood,14731680),0,.39,0),o(ge(.5,.5,.5,.5),s.mat(Ot.wood,14731680),.08,1.03,-.06).rotation.y=.4;break;case"sack":o(new je(.34,8,6),s.mat(null,14271898),-.1,.27,0).scale.set(1,.8,1),o(new je(.3,8,6),s.mat(null,13349763),.2,.24,.15).scale.set(1,.8,1),o(new je(.28,8,6),s.mat(null,14271898),.05,.62,.05).scale.set(1,.8,1);break;case"pew":o(a(1,.07,.4),n,0,.42,0),o(a(1,.5,.06),i,0,.62,-.2);for(const l of[-1,1])o(a(.06,.42,.4),i,l*.46,.21,0);break;case"altar":o(ge(1,.85,.6,2),r,0,.425,0),o(a(1.02,.05,.66),s.mat(null,16316922),0,.875,0),o(a(.07,.42,.07),s.mat(null,16765286),0,1.1,-.1),o(a(.24,.07,.07),s.mat(null,16765286),0,1.16,-.1);for(const l of[-1,1])o(new _e(.03,.03,.22,6),s.mat(null,16316922),l*.32,1.01,.1),o(a(.04,.06,.04),new ce({color:16758531}),l*.32,1.15,.1);break;case"forge":o(ge(.96,.8,.98,2),r,0,.4,0),o(a(.7,.06,.7),new ce({color:16739098}),0,.82,0),o(a(.3,.07,.3),new ce({color:16765286}),.05,.84,-.05),o(ge(.96,1.4,.24,2),r,0,1.5,-.36);break;case"anvil":o(ge(.5,.42,.5,.6),i,0,.21,0),o(a(.66,.14,.28),s.mat(null,4474703),0,.59,0),o(a(.3,.12,.22),s.mat(null,4474703),0,.48,0);break;case"rack":o(a(.96,1.3,.08),i,0,.9,-.42);for(let l=0;l<3;l++)o(a(.06,.8,.03),s.mat(null,14607078),-.3+l*.3,.95,-.36),o(a(.2,.05,.05),s.mat(null,16765286),-.3+l*.3,.55,-.36);break}}function $y(s){for(const t of Qn){const e=new re;e.position.set(t.tx+.5,.02,t.ty+.5),e.rotation.y=t.id*1.3%(Math.PI*2),jy(s,e,t),e.traverse(n=>{n instanceof gt&&(n.castShadow=!0,n.receiveShadow=!0)}),s.scene.add(e)}}function jy(s,t,e){const n=(i,r,o,a,l)=>{const c=new gt(i,r);return c.position.set(o,a,l),t.add(c),c};switch(e.kind){case"barrel":{const i=s.mat(Ot.wood),r=s.mat(null,4868682);n(new _e(.36,.33,.95,14),i,0,.48,0);for(const o of[.18,.78])n(new _e(.375,.375,.05,14),r,0,o,0);n(new _e(.33,.33,.03,14),s.mat(Ot.darkWood),0,.96,0);break}case"bush":{const i=s.mat(null,4161338),r=s.mat(null,5216837);n(new je(.42,10,8),i,0,.42,0),n(new je(.3,9,7),r,.22,.55,.12),n(new je(.28,9,7),r,-.2,.5,-.14),n(new je(.26,9,7),i,.05,.75,-.05);break}case"hay":{const i=s.mat(null,14267482),r=s.mat(null,13147973);n(new _e(.18,.46,.8,12),i,0,.4,0),n(new je(.22,9,7),r,0,.82,0);for(let o=0;o<6;o++){const a=o/6*Math.PI*2,l=n(new Ht(.04,.02,.3),r,Math.sin(a)*.45,.02,Math.cos(a)*.45);l.rotation.y=a}break}case"closet":{const i=s.mat(Ot.darkWood),r=s.mat(Ot.wood);n(new Ht(.8,1.55,.5),i,0,.78,0);for(const o of[-1,1])n(new Ht(.36,1.3,.03),r,o*.19,.82,.26);for(const o of[-1,1])n(new Ht(.04,.12,.04),s.mat(null,13214247),o*.04,.85,.29);n(new Ht(.86,.06,.56),r,0,1.58,0);break}}}function Zy(s){s.scene.add(new yv(14676479,7309914,1.25));const t=new yd(16773590,2.1),e=s.cols/2,n=s.rows/2;t.position.set(e+20,34,n+12),t.target.position.set(e,0,n),t.castShadow=!0;const i=pl()?2048:4096;t.shadow.mapSize.set(i,i);const r=t.shadow.camera;r.left=-(s.cols/2+9),r.right=s.cols/2+9,r.top=s.rows/2+11,r.bottom=-(s.rows/2+11),r.near=1,r.far=100,t.shadow.bias=-4e-4,t.shadow.normalBias=.03,s.scene.add(t),s.scene.add(t.target)}function Jy(s){const t=[],e=sr(7),n=new ce({color:16777215,fog:!1,transparent:!0,opacity:.92});for(let i=0;i<12;i++){const r=new re,o=2+Math.floor(e()*3);for(let a=0;a<o;a++){const l=new gt(new Ht(3+e()*4,1+e()*.8,2+e()*2),n);l.position.set(a*2.2-o,e()*.6,e()*1.4),r.add(l)}r.position.set(-60+e()*160,16+e()*8,-50+e()*130),s.scene.add(r),t.push(r)}return t}function Qy(s,t){Ot.water.offset.x+=t*4e-5,Ot.water.offset.y+=t*2e-5;for(const e of s)e.position.x+=t*6e-4,e.position.x>110&&(e.position.x=-70)}function t1(s){const{cols:t,rows:e}=s;s.floor(-90,-90,t+180,e+180,-.02,s.mat(Ot.grass,12179110),4),s.floor(0,0,t,e,0,s.mat(Ot.grass),4);const n=s.mat(Ot.path);ao.forEach((i,r)=>s.floor(i.x,i.z,i.w,i.d,.012+r*.002,n,4))}function e1(s){const{cols:t,rows:e}=s,n=s.mat(Ot.stone),i=1.5,r=.5;s.put(ge(t+r*2,i,r,2),n,t/2,i/2,-r/2),s.put(ge(t+r*2,i,r,2),n,t/2,i/2,e+r/2),s.put(ge(r,i,e,2),n,-r/2,i/2,e/2),s.put(ge(r,i,e,2),n,t+r/2,i/2,e/2)}const Oh=.9,n1=150,i1=380,s1=.75;function r1(s){let t=s>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const o1=[...dl.flatMap(s=>s.route.map(t=>({x:t.tx+.5,z:t.ty+.5}))),...fs.flatMap(s=>fl(s)?mo(s).pairs.map(t=>({x:t.outside.tx+.5,z:t.outside.ty+.5})):[])];function Bh(s,t,e=s1){return o1.some(n=>Math.hypot(n.x-s,n.z-t)<e)}const a1=fs.map(s=>{const t=Qs(s);return{x:t.x/st,z:t.y/st,w:t.w/st,d:t.h/st}});function kh(s,t,e){return a1.some(n=>s>n.x-e&&s<n.x+n.w+e&&t>n.z-e&&t<n.z+n.d+e)}class Yr{constructor(t,e,n){this.geo=t,this.material=e,this.shadow=n,this.items=[],this.q=new be,this.up=new C(0,1,0)}add(t,e,n,i,r,o,a,l=0,c){this.q.setFromAxisAngle(this.up,l),c&&this.q.multiply(c);const h=new Lt().compose(new C(t,e,n),this.q,new C(i,r,o));this.items.push({m:h,c:a})}build(t){if(this.items.length===0)return;const e=new on(this.geo,this.material,this.items.length),n=new Tt;this.items.forEach((i,r)=>{e.setMatrixAt(r,i.m),e.setColorAt(r,n.setHex(i.c))}),e.castShadow=this.shadow,e.receiveShadow=!0,e.computeBoundingSphere(),t.add(e)}}function l1(s,t,e){const n=r1(21),i=new Yr(new Ht(1,1,1),new an({color:16777215}),!0),r=new _e(.5,.5,1,8);r.rotateZ(Math.PI/2);const o=new Yr(r,new an({color:16777215}),!0),a=new Yr(new Fl(.5,0),new an({color:16777215,flatShading:!0}),!1),l=new $s(1,12);l.rotateX(-Math.PI/2);const c=new Yr(l,new an({color:16777215,transparent:!0,opacity:.35,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),!1),h=(A,w)=>{if(A<2.2||A>t-2.2||kh(A,w,.15)||Bh(A,w)||n()<.25)return;const T=.16+n()*.14,S=[10130828,9078400,11183514][Math.floor(n()*3)];a.add(A+(n()-.5)*.15,T*.3,w+(n()-.5)*.1,T*1.3,T*.8,T,S,n()*Math.PI)};for(const A of ao){const w=ao.filter(y=>y!==A),T=(y,P)=>w.some(F=>y>F.x-.2&&y<F.x+F.w+.2&&P>F.z-.2&&P<F.z+F.d+.2),S=(y,P)=>{y<.5||y>t-.5||P<.5||P>e-.5||T(y,P)||h(y,P)};if(A.w>=A.d)for(let y=Math.max(0,A.x)+.3;y<Math.min(t,A.x+A.w);y+=Oh)S(y,A.z-.15),S(y,A.z+A.d+.15);else for(let y=A.z+.3;y<A.z+A.d;y+=Oh)S(A.x-.15,y),S(A.x+A.w+.15,y)}const u=(A,w)=>!ma(A,w,.3)&&!kh(A,w,.3);for(let A=0,w=0;A<400&&w<n1;A++){const T=.8+n()*(t-1.6),S=.8+n()*(e-1.6);if(!u(T,S))continue;const y=.5+n()*.9,P=n()<.6?5208628:13164682;c.add(T,.006,S,y*(.8+n()*.5),1,y,P,n()*Math.PI),w++}const d=new be,f=new C(1,0,0);for(let A=0,w=0;A<800&&w<i1;A++){const T=.5+n()*(t-1),S=.5+n()*(e-1);if(!u(T,S))continue;const y=[5212732,6267718,7779152][Math.floor(n()*3)];for(let P=0;P<3;P++){const F=.14+n()*.12;d.setFromAxisAngle(f,(P-1)*.35),i.add(T+(P-1)*.05,F/2,S,.035,F,.035,y,n()*Math.PI,d)}w++}const g=(A,w)=>!Bh(A,w)&&!ma(A,w),_=9067059,m=4862496,p=(A,w,T)=>{if(!g(A,w))return;const S=T?0:Math.PI/2;for(let y=0;y<3;y++){const P=4-y;for(let F=0;F<P;F++){const B=(F-(P-1)/2)*.2,X=T?A:A+(n()-.5)*.04,K=T?w+(n()-.5)*.04:w,W=n()<.5?11565637:10118712;o.add(X+(T?B:0),.1+y*.17,K+(T?0:B),.55,.19,.19,W,S+Math.PI/2)}}},M=(A,w,T)=>{if(!g(A,w)||!g(A,T)||!g(A,(w+T)/2))return;for(const P of[w,T])i.add(A,.8,P,.07,1.6,.07,m);i.add(A,1.5,(w+T)/2,.015,.015,T-w,15327951);const S=[15856110,8369109,15247484,14018772],y=Math.floor((T-w)/.5);for(let P=0;P<y;P++){const F=w+.35+P*.5;if(F>T-.25)break;const B=.35+n()*.2;i.add(A,1.49-B/2,F,.03,B,.36,S[P%S.length],(n()-.5)*.2)}},v=(A,w)=>{if(!g(A,w))return;i.add(A,.13,w,.28,.26,.28,11887930),i.add(A,.27,w,.22,.04,.22,5913122),i.add(A,.36,w,.2,.14,.2,4165436);const T=[16748459,16765286,15087942,12165887][Math.floor(n()*4)];for(let S=0;S<4;S++)i.add(A+(n()-.5)*.16,.46,w+(n()-.5)*.16,.07,.07,.07,T)},x=(A,w,T)=>{if(!g(A,w))return;i.add(A,.6,w,.09,1.2,.09,m),i.add(A,1.05,w,.7,.36,.05,_,T);const S=Math.sin(T)*.03,y=Math.cos(T)*.03;for(const[P,F]of[[.08,.46],[-.04,.36]])i.add(A+S,1.05+P,w+y,F,.035,.01,2759696,T),i.add(A-S,1.05+P,w-y,F,.035,.01,2759696,T)},I=(A,w)=>{g(A,w)&&(i.add(A,.25,w,.8,.5,.55,14268762,n()*.4),i.add(A,.25,w,.82,.06,.57,12097082,0))};p(13.65,9,!1),p(34,6.6,!0),M(27.6,19.2,21.8);for(const A of[14,24])v(A+.3,11.3),v(A+2.7,11.3),v(A+.3,18.7),v(A+2.7,18.7);v(7.35,10.3),v(11.65,10.3),x(22.2,12.35,0),x(2.6,12.35,0),I(28.2,22.6),I(28.3,23.4);for(const A of[c,a,o,i])A.build(s)}const c1=10309341;class h1{constructor(t,e,n){this.kit=t,this.wellWater=e,this.tower=n,this.traces=[],this.fires=[],this.fireTimeMs=0,this.miasma=[],this.bellBroken=!1}addDamage(t,e,n){if(t==="well"){const i=Math.random()*Math.PI*2;this.addTrace(e+Math.cos(i)*34,n+Math.sin(i)*34),this.poisonWell(e,n)}else t==="storehouse"?this.addFire(e,n):this.addBrokenBell(e,n)}addFire(t,e){const n=this.fires.length,i=new re;i.position.set(t/st+n%2*.25-n*.55,.04,e/st+(n%2===0?0:.5));const r=new $s(.85,10);r.rotateX(-Math.PI/2),i.add(new gt(r,new ce({color:1709072,transparent:!0,opacity:.7,depthWrite:!1})));const o=[16734751,16747039,16761395,16734751,16769126,16747039],a=[];o.forEach((c,h)=>{const u=.34-h*.03,d=new Ht(u,.9,u);d.translate(0,.45,0);const f=new gt(d,new ce({color:c,transparent:!0,opacity:.92,depthWrite:!1})),g=h/o.length*Math.PI*2;f.position.set(Math.cos(g)*.32,.25+h%3*.3,Math.sin(g)*.32),f.rotation.y=g,i.add(f),a.push(f)});const l=[];for(let c=0;c<10;c++){const h=new gt(new oi(.5,0),new ce({color:c%3===0?3352618:1513243,transparent:!0,opacity:.85,depthWrite:!1,fog:!1}));i.add(h),l.push(h)}this.kit.scene.add(i),this.traces.push(i),this.fires.push({flames:a,smoke:l,seed:n*1.7})}poisonWell(t,e){if(this.wellWater&&this.wellWater.material.color.setHex(c1),!(this.miasma.length>=18))for(let n=0;n<6;n++){const i=new gt(new oi(.4,0),new ce({color:n%2===0?10309341:6954928,transparent:!0,opacity:.6,depthWrite:!1,fog:!1}));i.position.set(t/st,1,e/st),i.userData.cx=t/st,i.userData.cz=e/st,this.kit.scene.add(i),this.traces.push(i),this.miasma.push(i)}}addBrokenBell(t,e){const n=this.kit,i=this.traces.length;if(this.tower&&!this.bellBroken){this.bellBroken=!0;const f=this.tower;f.bell.visible=!1;for(const g of f.cross)g.visible=!1;f.cap.rotation.z=.32,f.cap.position.x=f.x+.45,f.cap.position.y=f.top+.95}const r=new re;r.position.set(t/st+i%3*.45,.04,e/st+i%2*.5);const o=n.mat(null,15320170),a=n.mat(null,11569456),l=new gt(new _e(.3,.62,.9,10,1,!0),n.mat(null,15320170,!0));l.position.set(0,.45,0),l.rotation.z=1.35,l.rotation.y=i*.9,r.add(l);const c=new gt(new Ht(.14,.14,1),o);c.position.set(.9,.07,.3),c.rotation.y=.5,r.add(c);const h=new gt(new Ht(.55,.14,.14),o);h.position.set(1.1,.07,-.2),h.rotation.y=-.4,r.add(h),[[.6,.2,-.5],[-.6,.16,-.3],[.3,.14,.7],[-.35,.18,.6]].forEach(([f,g,_],m)=>{const p=new gt(new Ht(g,.06,g*.7),m%2===0?o:a);p.position.set(f,.03,_),p.rotation.y=m*1.1,r.add(p)});const d=n.mat(Ot.stone);for(let f=0;f<5;f++){const g=.22+f*7%5*.05,_=new gt(new Ht(g,g*.7,g),d);_.position.set(-.9+f*.42,g*.35,-.75+f*3%4*.3),_.rotation.y=f*.8,r.add(_)}r.traverse(f=>{f instanceof gt&&(f.castShadow=!0)}),n.scene.add(r),this.traces.push(r)}addTrace(t,e){const n=new re,i=new ce({color:8072383,transparent:!0,opacity:.88,depthWrite:!1}),r=new ce({color:11888112,transparent:!0,opacity:.88,depthWrite:!1}),o=(a,l,c,h)=>{const u=new $s(a,8);u.rotateX(-Math.PI/2);const d=new gt(u,h);d.position.set(l,0,c),n.add(d)};o(.34,0,0,i),o(.16,.36,.2,r),o(.1,-.3,.26,i),n.position.set(t/st,.05,e/st),this.kit.fx.addMist(n),this.kit.scene.add(n),this.traces.push(n)}clear(){for(const t of this.traces)this.kit.scene.remove(t);if(this.traces.length=0,this.fires.length=0,this.miasma.length=0,this.wellWater&&this.wellWater.material.color.setHex(bd),this.tower&&this.bellBroken){const t=this.tower;t.bell.visible=!0;for(const e of t.cross)e.visible=!0;t.cap.rotation.z=0,t.cap.position.x=t.x,t.cap.position.y=t.top+1.1}this.bellBroken=!1,this.kit.fx.clearMists()}update(t){this.fireTimeMs+=t;const e=this.fireTimeMs/1e3;this.miasma.forEach((n,i)=>{const r=(e*.16+i/this.miasma.length)%1,o=e*.9+i*1.7;n.position.set(n.userData.cx+Math.cos(o)*(.3+r*.9),.9+r*4.6,n.userData.cz+Math.sin(o)*(.3+r*.9)),n.scale.setScalar(.7+r*1.6),n.material.opacity=.7*(1-r*.9)*Math.min(1,r*8)});for(const n of this.fires)n.flames.forEach((i,r)=>{const o=e*(7+r*1.3)+n.seed+r*2.1;i.scale.y=.75+.45*Math.sin(o)+.2*Math.sin(o*2.7),i.scale.x=i.scale.z=.9+.15*Math.sin(o*1.9)}),n.smoke.forEach((i,r)=>{const o=(e*.22+r/n.smoke.length+n.seed)%1;i.position.set(o*1.8+.3*Math.sin(e*1.3+r),1.4+o*8,.35*Math.sin(e+r*2)),i.scale.setScalar(.9+o*2.6),i.material.opacity=.9*(1-o*.85)*Math.min(1,o*8)})}}function u1(s){const t=sr(3),e=[];for(const w of xu){const T={x:w.tx+.5,z:w.ty+.5,s:1+t()*.35,pine:t()<.4};e.push(T),s.occluder(T.x,T.z,.35*T.s,0,3.2*T.s)}const{cols:n,rows:i}=s;for(let w=0;w<150;w++){const T=-16+t()*(n+32),S=-16+t()*(i+32),y=T>-1.8&&T<n+1.8&&S>-1.8&&S<i+1.8,P=S>12&&S<17;y||P||e.push({x:T,z:S,s:1.1+t()*.9,pine:t()<.55})}const r=new _e(.13,.2,1,6);r.translate(0,.5,0);const o=new Gn(1,1.3,7);o.translate(0,.65,0);const a=new oi(1,0),l=e.filter(w=>w.pine),c=e.filter(w=>!w.pine),h=new an({color:16777215,flatShading:!0}),u=new on(r,s.mat(null,7031342),e.length),d=new on(o,h,l.length*3),f=new on(a,h,c.length*2),g=new Lt,_=new be,m=new C,p=new C,M=new Tt,v=new C(0,1,0);let x=0,I=0,A=0;for(const w of e){_.setFromAxisAngle(v,t()*Math.PI*2);const T=w.pine?.9:1.3;g.compose(m.set(w.x,0,w.z),_,p.set(w.s,T*w.s,w.s)),u.setMatrixAt(x++,g);const S=.85+t()*.3;if(w.pine)for(let y=0;y<3;y++){const P=(.95-y*.24)*w.s;g.compose(m.set(w.x,(.7+y*.75)*w.s,w.z),_,p.set(P,w.s*(1-y*.1),P)),d.setMatrixAt(I,g),d.setColorAt(I,M.setHex(3111493).multiplyScalar(S*(1+y*.08))),I++}else g.compose(m.set(w.x,1.75*w.s,w.z),_,p.set(1.05*w.s,.95*w.s,1.05*w.s)),f.setMatrixAt(A,g),f.setColorAt(A,M.setHex(5216828).multiplyScalar(S)),A++,g.compose(m.set(w.x+.35*w.s,2.4*w.s,w.z-.2*w.s),_,p.set(.7*w.s,.65*w.s,.7*w.s)),f.setMatrixAt(A,g),f.setColorAt(A,M.setHex(6271050).multiplyScalar(S)),A++}for(const w of[u,d,f])w.castShadow=!0,w.receiveShadow=!0,s.scene.add(w)}function d1(s){const t=sr(13),{cols:e,rows:n}=s,i=fs.map(_=>{const m=Qs(_);return{x:m.x/st-.5,z:m.y/st-.5,w:m.w/st+1,d:m.h/st+1}}),r=(_,m)=>ma(_,m,.3)?!1:!i.some(p=>_>p.x&&_<p.x+p.w&&m>p.z&&m<p.z+p.d),o=[];for(let _=0;_<700&&o.length<260;_++){const m=.6+t()*(e-1.2),p=.6+t()*(n-1.2);r(m,p)&&o.push({x:m,z:p})}const a=Math.floor(o.length*.3),l=new on(new oi(1,0),new an({color:16777215,flatShading:!0}),a),c=6,h=new on(new Ht(.075,.075,.075),s.mat(null),(o.length-a)*c),u=[16777215,16765286,16748459,15087942,12165887],d=new Lt,f=new Tt;let g=0;o.forEach((_,m)=>{if(m<a){const p=.22+t()*.2;d.makeScale(p*1.3,p,p*1.3),d.setPosition(_.x,p*.7,_.z),l.setMatrixAt(m,d),l.setColorAt(m,f.setHex(4165436).multiplyScalar(.85+t()*.3))}else{const p=u[Math.floor(t()*u.length)];for(let M=0;M<c;M++)d.makeScale(1,1,1),d.setPosition(_.x+(t()-.5)*.8,.06+t()*.07,_.z+(t()-.5)*.8),h.setMatrixAt(g,d),h.setColorAt(g,f.setHex(p)),g++}}),l.castShadow=!0,l.receiveShadow=!0,s.scene.add(l,h)}const la=7,f1=4200,p1=2.2,m1=.9,g1=-.35,zh=14,_1=900,Hh=3.2,x1=4.5,ca=6,Gh=3600,ha=10,v1=520,Vh=new Ht(1,1,1),Wh=new oi(.5,0);function y1(s){return Math.sin(Math.PI*Math.min(1,Math.max(0,s)))}class M1{constructor(t){this.scene=t,this.smokes=[],this.forges=[],this.mists=[],this.bursts=[],this.smokeMat=new an({color:15000808,transparent:!0,opacity:.6,depthWrite:!1,flatShading:!0}),this.sparkMesh=null,this.forgeLight=null,this.forgeGlow=null,this.timeMs=0,this.m=new Lt,this.q=new be,this.pos=new C,this.scl=new C}addChimney(t,e,n,i){const r=new on(Wh,this.smokeMat,la);r.frustumCulled=!1,t.add(r),this.smokes.push({mesh:r,x:e,y:n,z:i,offsetMs:this.smokes.length*1300})}addForge(t,e,n){this.forges.push({x:t,y:e,z:n,sparks:[]})}finishForges(){if(this.forges.length===0)return;const t=new ce({color:16757575,blending:Qi,depthWrite:!1,transparent:!0});this.sparkMesh=new on(Vh,t,this.forges.length*zh),this.sparkMesh.frustumCulled=!1,this.scene.add(this.sparkMesh);let e=0,n=0,i=0;for(const o of this.forges){e+=o.x/this.forges.length,i+=o.y/this.forges.length,n+=o.z/this.forges.length;for(let a=0;a<zh;a++){const l=this.newSpark(o);l.ageMs=Math.random()*l.lifeMs,o.sparks.push(l)}}this.forgeLight=new vd(16747066,Hh,x1,2),this.forgeLight.position.set(e-.6,i+.6,n),this.scene.add(this.forgeLight);const r=new wi(.9,1+this.forges.length);r.rotateX(-Math.PI/2),this.forgeGlow=new gt(r,new ce({color:16742938,transparent:!0,opacity:.5,blending:Qi,depthWrite:!1})),this.forgeGlow.position.set(e,i+.1,n),this.scene.add(this.forgeGlow)}newSpark(t){return{x:t.x+(Math.random()-.5)*.6,y:t.y,z:t.z+(Math.random()-.5)*.6,vx:(Math.random()-.5)*.6,vy:.9+Math.random()*1.1,vz:(Math.random()-.5)*.6,ageMs:0,lifeMs:_1*(.6+Math.random()*.6)}}addMist(t){const e=new ce({color:10640860,transparent:!0,opacity:.26,depthWrite:!1}),n=new on(Wh,e,ca);n.frustumCulled=!1,t.add(n),this.mists.push({mesh:n,material:e,offsetMs:Math.random()*Gh})}clearMists(){for(const t of this.mists)t.material.dispose();this.mists.length=0}spawnBurst(t,e,n){const i=new re;i.position.set(t,0,e);const r=g=>new ce({color:n,transparent:!0,opacity:g,blending:Qi,depthWrite:!1}),o=new nr(.75,1,24);o.rotateX(-Math.PI/2);const a=r(.9),l=new gt(o,a);l.position.y=.07;const c=r(.7),h=new gt(new _e(.22,.32,3,8,1,!0),c);h.position.y=1.5;const u=r(1),d=new on(Vh,u,ha);d.frustumCulled=!1;const f=[];for(let g=0;g<ha;g++){const _=g/ha*Math.PI*2+Math.random()*.4;f.push(new C(Math.cos(_)*(1.4+Math.random()),.6+Math.random()*1.4,Math.sin(_)*(1.4+Math.random())))}i.add(l,h,d),this.scene.add(i),this.bursts.push({group:i,ring:l,pillar:h,shards:d,dirs:f,materials:[a,c,u],ageMs:0})}update(t){this.timeMs+=t;const e=t/1e3,{m:n,q:i,pos:r,scl:o}=this;for(const a of this.smokes){for(let l=0;l<la;l++){const c=(((this.timeMs+a.offsetMs)/f1+l/la)%1+1)%1,h=(.22+c*.55)*Math.min(1,c*6)*(c>.7?(1-c)/.3:1);i.setFromAxisAngle(he.DEFAULT_UP,c*2+l),r.set(a.x+c*c*m1,a.y+c*p1,a.z+c*c*g1),n.compose(r,i,o.setScalar(Math.max(.001,h))),a.mesh.setMatrixAt(l,n)}a.mesh.instanceMatrix.needsUpdate=!0}if(this.sparkMesh){let a=0;for(const h of this.forges)for(let u=0;u<h.sparks.length;u++){let d=h.sparks[u];d.ageMs+=t,d.ageMs>=d.lifeMs&&(d=this.newSpark(h),h.sparks[u]=d),d.vy-=.9*e,d.x+=d.vx*e,d.y+=d.vy*e,d.z+=d.vz*e;const f=.07*(1-d.ageMs/d.lifeMs)+.015;n.makeScale(f,f,f),n.setPosition(d.x,d.y,d.z),this.sparkMesh.setMatrixAt(a++,n)}this.sparkMesh.instanceMatrix.needsUpdate=!0;const l=this.timeMs/1e3,c=.75+.15*Math.sin(l*7.3)+.1*Math.sin(l*17.9+1.3)+.08*(Math.random()-.5);this.forgeLight&&(this.forgeLight.intensity=Hh*c),this.forgeGlow&&(this.forgeGlow.material.opacity=.35+.25*c)}for(const a of this.mists){for(let l=0;l<ca;l++){const c=((this.timeMs+a.offsetMs)/Gh+l/ca)%1,h=l*2.4+c*1.5,u=.15+.25*(l*37%10)/10,d=(.35+c*.4)*y1(c);i.setFromAxisAngle(he.DEFAULT_UP,h),r.set(Math.cos(h)*u,.1+c*.9,Math.sin(h)*u),n.compose(r,i,o.set(d,d*.7,d)),a.mesh.setMatrixAt(l,n)}a.mesh.instanceMatrix.needsUpdate=!0,a.material.opacity=.2+.08*Math.sin(this.timeMs/600+a.offsetMs)}for(let a=this.bursts.length-1;a>=0;a--){const l=this.bursts[a];l.ageMs+=t;const c=Math.min(1,l.ageMs/v1),h=1-c;l.ring.scale.setScalar(.3+c*2.2),l.pillar.scale.set(1-c*.7,.4+c*.8,1-c*.7),l.materials[0].opacity=.9*h,l.materials[1].opacity=.7*h*h,l.materials[2].opacity=h;for(let u=0;u<l.dirs.length;u++){const d=l.dirs[u],f=.12*h+.02;n.makeScale(f,f,f),n.setPosition(d.x*c,.9+d.y*c-2.2*c*c,d.z*c),l.shards.setMatrixAt(u,n)}if(l.shards.instanceMatrix.needsUpdate=!0,c>=1){this.scene.remove(l.group);for(const u of l.materials)u.dispose();l.ring.geometry.dispose(),l.pillar.geometry.dispose(),l.shards.dispose(),this.bursts.splice(a,1)}}}}class S1{constructor(t){this.scene=t,this.occluders=[],this.cols=tt.world.width/st,this.rows=tt.world.height/st,this.materials=new Map,this.fx=new M1(t)}mat(t,e=16777215,n=!1){const i=`${t?t.uuid:"-"}|${e}|${n}`;let r=this.materials.get(i);return r||(r=new an({map:t,color:e,side:n?$e:xn}),this.materials.set(i,r)),r}put(t,e,n,i,r){const o=new gt(t,e);return o.position.set(n,i,r),o.castShadow=!0,o.receiveShadow=!0,this.scene.add(o),o}occluder(t,e,n,i,r){const o=new gt(new _e(n,n,r-i,8));o.position.set(t,(i+r)/2,e),o.visible=!1,this.scene.add(o),this.occluders.push(o)}floor(t,e,n,i,r,o,a){const l=new gt(Hv(n,i,a),o);l.position.set(t+n/2,r,e+i/2),l.receiveShadow=!0,this.scene.add(l)}onFace(t,e,n,i,r,o,a,l=!1,c=this.scene){const h=ro(t,e),u=.025,d=new wi(r,o),f=new gt(d,a);if(f.position.set(h.ox+h.ux*n+h.nx*u,i,h.oz+h.uz*n+h.nz*u),f.rotation.y=h.rot,f.receiveShadow=!0,c.add(f),l){const g=new gt(d,a),_=nn+u;g.position.set(h.ox+h.ux*n-h.nx*_,i,h.oz+h.uz*n-h.nz*_),g.rotation.y=h.rot+Math.PI,c.add(g)}}}const b1=14085882;class w1{constructor(t){this.scene=new wx,this.kit=new S1(this.scene),this.flashes=new wy(this.kit),this.demonReveals=new qy(this.kit),this.renderer=new bx({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,pl()?1.5:2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Mu,this.canvas=this.renderer.domElement,t.appendChild(this.canvas),this.camera=new Be(tt.camera.fovDeg,1,.1,220),this.rig=new yy(this.camera,this.kit.occluders,this.kit.cols,this.kit.rows),this.scene.background=Ot.sky,this.scene.fog=new Il(b1,tt.visibility.fogNearTiles,tt.visibility.fogFarTiles);const e=this.kit;Zy(e),t1(e),e1(e),this.buildings=fy(e),Yy(e),$y(e);const n=xy(e);u1(e),d1(e),l1(this.scene,e.cols,e.rows),this.clouds=Jy(e),this.traces=new h1(e,n,this.buildings.tower);const i=new nr(.5,.62,32);i.rotateX(-Math.PI/2),this.highlight=new gt(i,new ce({color:16774064,transparent:!0,opacity:.95,depthWrite:!1})),this.highlight.position.y=.06,this.highlight.visible=!1,this.scene.add(this.highlight),window.addEventListener("resize",()=>this.resize()),this.resize(),this.setIndoor(-1)}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix()}add(t){this.scene.add(t)}remove(t){this.scene.remove(t)}setIndoor(t){this.rig.isSameIndoor(t)||(oy(this.buildings.houses,t),this.rig.setIndoor(t))}updateDoors(t,e){Sy(this.buildings.doors,t,e)}setHighlight(t){this.highlight.visible=t!==null,t&&this.highlight.position.set(t.x/st,.06,t.y/st)}addDamage(t,e,n){this.traces.addDamage(t,e,n)}clearTraces(){this.traces.clear()}spawnFlash(t,e,n){this.flashes.spawn(t,e,n)}spawnDemonReveal(t,e){this.demonReveals.spawn(t,e)}shake(t){this.rig.shake(t)}setFollowCamera(t,e,n,i,r){this.rig.setFollowCamera(t,e,n,i,r)}get heroInTheWay(){return this.rig.heroInTheWay}setDialogueCamera(t,e,n,i){this.rig.setDialogueCamera(t,e,n,i)}setOrbitCamera(t){this.rig.setOrbitCamera(t)}update(t){this.rig.update(t),Qy(this.clouds,t),this.kit.fx.update(t),this.traces.update(t),this.flashes.update(t),this.demonReveals.update(t)}render(){this.renderer.render(this.scene,this.camera)}debugCounts(){return{doors:this.buildings.doors.length,houses:this.buildings.houses.size,occluders:this.kit.occluders.length,traces:this.traces.traces.length,fires:this.traces.fires.length,miasma:this.traces.miasma.length}}}function Xh(s,t){if(t===Bf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===Qa||t===Nu){let e=s.getIndex();if(e===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),e=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=e.count-2,i=[];if(t===Qa)for(let o=1;o<=n;o++)i.push(e.getX(0)),i.push(e.getX(o)),i.push(e.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(e.getX(o)),i.push(e.getX(o+1)),i.push(e.getX(o+2))):(i.push(e.getX(o+2)),i.push(e.getX(o+1)),i.push(e.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class E1 extends _s{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new P1(e)}),this.register(function(e){return new I1(e)}),this.register(function(e){return new z1(e)}),this.register(function(e){return new H1(e)}),this.register(function(e){return new G1(e)}),this.register(function(e){return new D1(e)}),this.register(function(e){return new N1(e)}),this.register(function(e){return new U1(e)}),this.register(function(e){return new F1(e)}),this.register(function(e){return new C1(e)}),this.register(function(e){return new O1(e)}),this.register(function(e){return new L1(e)}),this.register(function(e){return new k1(e)}),this.register(function(e){return new B1(e)}),this.register(function(e){return new T1(e)}),this.register(function(e){return new V1(e)}),this.register(function(e){return new W1(e)})}load(t,e,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Vs.extractUrlBase(t);o=Vs.resolveURL(c,this.path)}else o=Vs.extractUrlBase(t);this.manager.itemStart(t);const a=function(c){i?i(c):console.error(c),r.manager.itemError(t),r.manager.itemEnd(t)},l=new xd(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{r.parse(c,o,function(h){e(h),r.manager.itemEnd(t)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Td){try{o[qt.KHR_BINARY_GLTF]=new X1(t)}catch(u){i&&i(u);return}r=JSON.parse(o[qt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new sM(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case qt.KHR_MATERIALS_UNLIT:o[u]=new R1;break;case qt.KHR_DRACO_MESH_COMPRESSION:o[u]=new q1(r,this.dracoLoader);break;case qt.KHR_TEXTURE_TRANSFORM:o[u]=new Y1;break;case qt.KHR_MESH_QUANTIZATION:o[u]=new K1;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(t,e){const n=this;return new Promise(function(i,r){n.parse(t,e,i,r)})}}function A1(){let s={};return{get:function(t){return s[t]},add:function(t,e){s[t]=e},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const qt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class T1{constructor(t){this.parser=t,this.name=qt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,e=this.parser.json.nodes||[];for(let n=0,i=e.length;n<i;n++){const r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){const e=this.parser,n="light:"+t;let i=e.cache.get(n);if(i)return i;const r=e.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t];let c;const h=new Tt(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ze);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new yd(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new vd(h),c.distance=u;break;case"spot":c=new Sv(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Fn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=e.createUniqueName(l.name||"light_"+t),i=Promise.resolve(c),e.cache.add(n,i),i}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){const e=this,n=this.parser,r=n.json.nodes[t],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(e.cache,a,l)})}}class R1{constructor(){this.name=qt.KHR_MATERIALS_UNLIT}getMaterialType(){return ce}extendParams(t,e,n){const i=[];t.color=new Tt(1,1,1),t.opacity=1;const r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;t.color.setRGB(o[0],o[1],o[2],ze),t.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(t,"map",r.baseColorTexture,we))}return Promise.all(i)}}class C1{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(e.emissiveIntensity=r),Promise.resolve()}}class P1{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(e.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(e,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new rt(a,a)}return Promise.all(r)}}class I1{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class L1{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(e.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(e.iridescenceIOR=o.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(e,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class D1{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_SHEEN}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];e.sheenColor=new Tt(0,0,0),e.sheenRoughness=0,e.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;e.sheenColor.setRGB(a[0],a[1],a[2],ze)}return o.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(e,"sheenColorMap",o.sheenColorTexture,we)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(e,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class N1{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(e.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(e,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class U1{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_VOLUME}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(e,"thicknessMap",o.thicknessTexture)),e.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return e.attenuationColor=new Tt().setRGB(a[0],a[1],a[2],ze),Promise.all(r)}}class F1{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_IOR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const i=this.parser.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return e.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class O1{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];e.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(e,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return e.specularColor=new Tt().setRGB(a[0],a[1],a[2],ze),o.specularColorTexture!==void 0&&r.push(n.assignTexture(e,"specularColorMap",o.specularColorTexture,we)),Promise.all(r)}}class B1{constructor(t){this.parser=t,this.name=qt.EXT_MATERIALS_BUMP}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return e.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(e,"bumpMap",o.bumpTexture)),Promise.all(r)}}class k1{constructor(t){this.parser=t,this.name=qt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const n=this.parser.json.materials[t];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(t,e){const n=this.parser,i=n.json.materials[t];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(e.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(e.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(e,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class z1{constructor(t){this.parser=t,this.name=qt.KHR_TEXTURE_BASISU}loadTexture(t){const e=this.parser,n=e.json,i=n.textures[t];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=e.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,o)}}class H1{constructor(t){this.parser=t,this.name=qt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class G1{constructor(t){this.parser=t,this.name=qt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const e=this.name,n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[e])return null;const o=r.extensions[e],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(t,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){t(e.height===1)}})),this.isSupported}}class V1{constructor(t){this.name=qt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class W1{constructor(t){this.name=qt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=e.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==tn.TRIANGLES&&c.mode!==tn.TRIANGLE_STRIP&&c.mode!==tn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(t)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const _=new Lt,m=new C,p=new be,M=new C(1,1,1),v=new on(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),v.setMatrixAt(x,_.compose(m,p,M));for(const x in l)if(x==="_COLOR_0"){const I=l[x];v.instanceColor=new nl(I.array,I.itemSize,I.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);he.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Td="glTF",Ds=12,qh={JSON:1313821514,BIN:5130562};class X1{constructor(t){this.name=qt.KHR_BINARY_GLTF,this.content=null,this.body=null;const e=new DataView(t,0,Ds),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Td)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ds,r=new DataView(t,Ds);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===qh.JSON){const c=new Uint8Array(t,Ds+o,a);this.content=n.decode(c)}else if(l===qh.BIN){const c=Ds+o;this.body=t.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class q1{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){const n=this.json,i=this.dracoLoader,r=t.extensions[this.name].bufferView,o=t.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=cl[h]||h.toLowerCase();a[u]=o[h]}for(const h in t.attributes){const u=cl[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[t.attributes[h]],f=ns[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},a,c,ze,d)})})}}class Y1{constructor(){this.name=qt.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){return(e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),t.needsUpdate=!0),t}}class K1{constructor(){this.name=qt.KHR_MESH_QUANTIZATION}}class Rd extends ir{constructor(t,e,n,i){super(t,e,n,i)}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i*3+i;for(let o=0;o!==i;o++)e[o]=n[r+o];return e}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-e,u=(n-e)/h,d=u*u,f=d*u,g=t*c,_=g-c,m=-2*f+3*d,p=f-d,M=1-m,v=p-d+u;for(let x=0;x!==a;x++){const I=o[_+x+a],A=o[_+x+l]*h,w=o[g+x+a],T=o[g+x]*h;r[x]=M*I+v*A+m*w+p*T}return r}}const $1=new be;class j1 extends Rd{interpolate_(t,e,n,i){const r=super.interpolate_(t,e,n,i);return $1.fromArray(r).normalize().toArray(r),r}}const tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yh={9728:Ue,9729:Ve,9984:bu,9985:Zr,9986:Us,9987:Sn},Kh={33071:ti,33648:lo,10497:si},ua={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Zn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Z1={CUBICSPLINE:void 0,LINEAR:qs,STEP:Xs},da={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function J1(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Mo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xn})),s.DefaultMaterial}function mi(s,t,e){for(const n in e.extensions)s[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function Fn(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Q1(s,t,e){let n=!1,i=!1,r=!1;for(let c=0,h=t.length;c<h;c++){const u=t[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=t.length;c<h;c++){const u=t[c];if(n){const d=u.POSITION!==void 0?e.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?e.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?e.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function tM(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)s.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){const e=t.extras.targetNames;if(s.morphTargetInfluences.length===e.length){s.morphTargetDictionary={};for(let n=0,i=e.length;n<i;n++)s.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function eM(s){let t;const e=s.extensions&&s.extensions[qt.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+fa(e.attributes):t=s.indices+":"+fa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)t+=":"+fa(s.targets[n]);return t}function fa(s){let t="";const e=Object.keys(s).sort();for(let n=0,i=e.length;n<i;n++)t+=e[n]+":"+s[e[n]]+";";return t}function hl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const iM=new Lt;class sM{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new A1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new vv(this.options.manager):this.textureLoader=new Ev(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xd(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return mi(r,a,i),Fn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();t(a)})}).catch(e)}_markDefs(){const t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=e.length;i<r;i++){const o=e[i].joints;for(let a=0,l=o.length;a<l;a++)t[o[a]].isBone=!0}for(let i=0,r=t.length;i<r;i++){const o=t[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+t.uses[e]++,i}_invokeOne(t){const e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){const i=t(e[n]);if(i)return i}return null}_invokeAll(t){const e=Object.values(this.plugins);e.unshift(this);const n=[];for(let i=0;i<e.length;i++){const r=t(e[i]);r&&n.push(r)}return n}getDependency(t,e){const n=t+":"+e;let i=this.cache.get(n);if(!i){switch(t){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!i)throw new Error("Unknown type: "+t);break}this.cache.add(n,i)}return i}getDependencies(t){let e=this.cache.get(t);if(!e){const n=this,i=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(r,o){return n.getDependency(t,o)})),this.cache.add(t,e)}return e}loadBuffer(t){const e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[qt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Vs.resolveURL(e.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){const e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){const i=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(t){const e=this,n=this.json,i=this.json.accessors[t];if(i.bufferView===void 0&&i.sparse===void 0){const o=ua[i.type],a=ns[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new ke(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=ua[i.type],c=ns[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=e.cache.get(M);v||(_=new c(a,p*f,i.count*f/h),v=new Zu(_,f/h),e.cache.add(M,v)),m=new Ks(v,l,d%f/h,g)}else a===null?_=new c(i.count*l):_=new c(a,d,i.count*l),m=new ke(_,l,g);if(i.sparse!==void 0){const p=ua.SCALAR,M=ns[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,I=new M(o[1],v,i.sparse.count*p),A=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new ke(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,T=I.length;w<T;w++){const S=I[w];if(m.setX(S,A[w*l]),l>=2&&m.setY(S,A[w*l+1]),l>=3&&m.setZ(S,A[w*l+2]),l>=4&&m.setW(S,A[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){const e=this.json,n=this.options,r=e.textures[t].source,o=e.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(t,r,a)}loadTextureImage(t,e,n){const i=this,r=this.json,o=r.textures[t],a=r.images[e],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(e,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Yh[d.magFilter]||Ve,h.minFilter=Yh[d.minFilter]||Sn,h.wrapS=Kh[d.wrapS]||si,h.wrapT=Kh[d.wrapT]||si,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Ue&&h.minFilter!==Ve,i.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,e){const n=this,i=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(u=>u.clone());const o=i.images[t],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;e.isImageBitmapLoader===!0&&(g=function(_){const m=new Ee(_);m.needsUpdate=!0,d(m)}),e.load(Vs.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Fn(u,o),u.userData.mimeType=o.mimeType||nM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[t]=h,h}assignTexture(t,e,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[qt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[qt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[qt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),t[e]=o,o})}assignFinalMaterial(t){const e=t.geometry;let n=t.material;const i=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,o=e.attributes.normal===void 0;if(t.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new id,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(t.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new nd,cn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}t.material=n}getMaterialType(){return Mo}loadMaterial(t){const e=this,n=this.json,i=this.extensions,r=n.materials[t];let o;const a={},l=r.extensions||{},c=[];if(l[qt.KHR_MATERIALS_UNLIT]){const u=i[qt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,e))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Tt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ze),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(e.assignTexture(a,"map",u.baseColorTexture,we)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(e.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(e.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,a)})))}r.doubleSided===!0&&(a.side=$e);const h=r.alphaMode||da.OPAQUE;if(h===da.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===da.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ce&&(c.push(e.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new rt(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==ce&&(c.push(e.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ce){const u=r.emissiveFactor;a.emissive=new Tt().setRGB(u[0],u[1],u[2],ze)}return r.emissiveTexture!==void 0&&o!==ce&&c.push(e.assignTexture(a,"emissiveMap",r.emissiveTexture,we)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Fn(u,r),e.associations.set(u,{materials:t}),r.extensions&&mi(i,u,r),u})}createUniqueName(t){const e=se.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){const e=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[qt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,e).then(function(l){return $h(l,a,e)})}const o=[];for(let a=0,l=t.length;a<l;a++){const c=t[a],h=eM(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[qt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=$h(new Re,c,e),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(t){const e=this,n=this.json,i=this.extensions,r=n.meshes[t],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?J1(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(e.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=o[f];let p;const M=c[f];if(m.mode===tn.TRIANGLES||m.mode===tn.TRIANGLE_STRIP||m.mode===tn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Tx(_,M):new gt(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===tn.TRIANGLE_STRIP?p.geometry=Xh(p.geometry,Nu):m.mode===tn.TRIANGLE_FAN&&(p.geometry=Xh(p.geometry,Qa));else if(m.mode===tn.LINES)p=new Px(_,M);else if(m.mode===tn.LINE_STRIP)p=new Dl(_,M);else if(m.mode===tn.LINE_LOOP)p=new Ix(_,M);else if(m.mode===tn.POINTS)p=new Lx(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&tM(p,r),p.name=e.createUniqueName(r.name||"mesh_"+t),Fn(p,r),m.extensions&&mi(i,p,m),e.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)e.associations.set(u[f],{meshes:t,primitives:f});if(u.length===1)return r.extensions&&mi(i,u[0],r),u[0];const d=new re;r.extensions&&mi(i,d,r),e.associations.set(d,{meshes:t});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(t){let e;const n=this.json.cameras[t],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Be(io.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(e=new Cl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),Fn(e,n),Promise.resolve(e)}loadSkin(t){const e=this.json.skins[t],n=[];for(let i=0,r=e.joints.length;i<r;i++)n.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Lt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[c])}return new Ll(a,l)})}loadAnimation(t){const e=this.json,n=this,i=e.animations[t],r=i.name?i.name:"animation_"+t,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let M=0,v=d.length;M<v;M++){const x=d[M],I=f[M],A=g[M],w=_[M],T=m[M];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=n._createAnimationTracks(x,I,A,w,T);if(S)for(let y=0;y<S.length;y++)p.push(S[y])}return new al(r,void 0,p)})}createNodeMesh(t){const e=this.json,n=this,i=e.nodes[t];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(t){const e=this.json,n=this,i=e.nodes[t],r=n._loadNodeShallow(t),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,iM)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(t){const e=this.json,n=this.extensions,i=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const r=e.nodes[t],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){a.push(c)}),this.nodeCache[t]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new td:c.length>1?h=new re:c.length===1?h=c[0]:h=new he,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Fn(h,r),r.extensions&&mi(n,h,r),r.matrix!==void 0){const u=new Lt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const e=this.extensions,n=this.json.scenes[t],i=this,r=new re;n.name&&(r.name=i.createUniqueName(n.name)),Fn(r,n),n.extensions&&mi(e,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof cn||d instanceof Ee)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(t,e,n,i,r){const o=[],a=t.name?t.name:t.uuid,l=[];Zn[r.path]===Zn.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Zn[r.path]){case Zn.weights:c=hs;break;case Zn.rotation:c=us;break;case Zn.position:case Zn.scale:c=ds;break;default:switch(n.itemSize){case 1:c=hs;break;case 2:case 3:default:c=ds;break}break}const h=i.interpolation!==void 0?Z1[i.interpolation]:qs,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+Zn[r.path],e.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){const n=hl(e.constructor),i=new Float32Array(e.length);for(let r=0,o=e.length;r<o;r++)i[r]=e[r]*n;e=i}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){const i=this instanceof us?j1:Rd;return new i(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function rM(s,t,e){const n=t.attributes,i=new Hn;if(n.POSITION!==void 0){const a=e.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const h=hl(ns[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=t.targets;if(r!==void 0){const a=new C,l=new C;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=e.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=hl(ns[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new bn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function $h(s,t,e){const n=t.attributes,i=[];function r(o,a){return e.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=cl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(t.indices!==void 0&&!s.index){const o=e.getDependency("accessor",t.indices).then(function(a){s.setIndex(a)});i.push(o)}return Yt.workingColorSpace!==ze&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Yt.workingColorSpace}" not supported.`),Fn(s,t),rM(s,t,e),Promise.all(i).then(function(){return t.targets!==void 0?Q1(s,t.targets,e):s})}const jh=["Knight","Barbarian","Mage","Ranger","Rogue","Rogue_Hooded"],Zh=["sword_1handed","shield_round","shield_square","mug_full","staff","spellbook_closed","dagger","axe_1handed"],oM=["Rig_Medium_General","Rig_Medium_MovementBasic","Rig_Medium_Tools","Rig_Medium_Simulation","Rig_Medium_CombatMelee","Rig_Medium_CombatRanged"];let ul=null;function aM(){return ul}function Jh(s){const t=new Map;s.traverse(e=>{if(!(e instanceof gt))return;const n=e.material;let i=t.get(n);i||(i=new an({map:n.map??null,color:n.color??16777215}),i.name=n.name,t.set(n,i)),e.material=i,e.castShadow=!0})}async function lM(){if(ul)return!0;const s="./models/kaykit/",t=new E1;try{const[e,n,i]=await Promise.all([Promise.all(jh.map(l=>t.loadAsync(`${s}characters/${l}.glb`))),Promise.all(oM.map(l=>t.loadAsync(`${s}animations/${l}.glb`))),Promise.all(Zh.map(l=>t.loadAsync(`${s}props/${l}.gltf`)))]),r=new Map;e.forEach((l,c)=>{Jh(l.scene),r.set(jh[c],l.scene)});const o=new Map;for(const l of n)for(const c of l.animations)c.name==="T-Pose"||o.has(c.name)||(c.tracks=c.tracks.filter(h=>!h.name.endsWith(".scale")),o.set(c.name,c));const a=new Map;return i.forEach((l,c)=>{Jh(l.scene),a.set(Zh[c],l.scene)}),ul={bases:r,clips:o,props:a},!0}catch(e){return console.warn("キャラクターの素材を読みこめなかったので、箱の人形で動かします",e),!1}}const cM={hero:{scale:1.05,shirt:3108830,pants:3754087,hair:"messy",hat:"none",prop:"sword",back:"cape",emblem:16765286},guard:{scale:1.08,shirt:9279918,pants:4869737,hair:"none",hat:"helmet",prop:"spear",back:"none",wide:1.1,emblem:12653087},shopkeeper:{scale:.98,robe:15320170,pants:7029795,apron:16643811,hair:"bun",hat:"none",prop:"none",back:"none"},blacksmith:{scale:1.1,shirt:9067076,pants:3813944,apron:4008735,hair:"none",hat:"bandana",hatColor:10289672,beard:2826520,prop:"hammer",back:"none",wide:1.25},peddler:{scale:1,pants:5914155,hair:"short",hat:"widebrim",hatColor:8344889,prop:"none",back:"pack"},child:{scale:.68,pants:6185166,hair:"pigtails",hat:"none",prop:"none",back:"none"},drunk:{scale:1,pants:4865877,hair:"messy",hat:"none",prop:"bottle",back:"none",sway:.16,nose:15087942,beard:6045747},farmer:{scale:1.02,pants:3696193,hair:"short",hat:"straw",prop:"hoe",back:"none"},priest:{scale:1.04,robe:16316922,pants:14607078,hair:"short",hat:"mitre",prop:"book",back:"none",emblem:16765286},innkeeper:{scale:1,robe:15167313,pants:7029795,apron:16643811,hair:"bun",hat:"none",prop:"mug",back:"none",wide:1.1},elder:{scale:.92,robe:13481179,pants:10128536,hair:"sides",hat:"none",beard:15856113,prop:"cane",back:"none",lean:.28},fisher:{scale:1,pants:1914199,hair:"none",hat:"bandana",hatColor:1914199,prop:"rod",back:"none"},housewife:{scale:.98,robe:16766629,pants:7029795,hair:"long",hat:"scarf",hatColor:14034984,prop:"basket",back:"none"},innhost:{scale:1.05,pants:3813944,apron:16643811,hair:"short",hat:"none",beard:6045747,prop:"mug",back:"none",wide:1.15},stablehand:{scale:.98,pants:5914155,hair:"messy",hat:"cap",hatColor:8344889,prop:"hoe",back:"none"},vendor:{scale:1,pants:5914155,apron:3696193,hair:"short",hat:"bandana",hatColor:15320170,prop:"none",back:"none"}},Qh=[15845797,15120783,14263671],tu=[3877402,7029795,10514490,2763306,9262372],eu=new Map;function hM(s){let t=eu.get(s);return t||(t=new an({color:s}),eu.set(s,t)),t}const nu=new Map;function uM(s,t,e){const n=`${s}|${t}|${e}`;let i=nu.get(n);return i||(i=new Ht(s,t,e),nu.set(n,i)),i}function q(s,t,e,n,i,r,o,a){const l=new gt(uM(t,e,n),hM(i));return l.position.set(r,o,a),l.castShadow=!0,s.add(l),l}function Kr(s,t,e,n,i,r,o){const a=new re;return a.position.set(r,o,0),q(a,t,e,n,i,0,-e/2,0),s.add(a),a}const iu=1.3;function dM(s,t){const e=cM[s],n=e.shirt??(s==="hero"?3108830:Bn[s].color),i=Qh[t%Qh.length],r=s==="elder"?15856113:tu[(t*2+s.length)%tu.length],o=e.wide??1,a=new re,l=new re;l.scale.setScalar(e.scale),a.add(l);let c=null,h=null;e.robe===void 0?(c=Kr(l,.17,.38,.19,e.pants,-.11,.38),h=Kr(l,.17,.38,.19,e.pants,.11,.38),q(c,.18,.08,.24,2826520,0,-.36,.03),q(h,.18,.08,.24,2826520,0,-.36,.03)):(q(l,.44*o,.2,.3,e.robe,0,.3,0),q(l,.52*o,.2,.36,e.robe,0,.11,0),q(l,.3,.05,.3,2826520,0,.02,.04));const u=new re;u.position.y=.38,u.rotation.x=e.lean??0,l.add(u);const d=e.robe??n;q(u,.46*o,.44,.28,d,0,.22,0),e.robe===void 0&&q(u,.47*o,.06,.29,3877402,0,.03,0),e.apron!==void 0&&(q(u,.34*o,.36,.03,e.apron,0,.16,.15),e.robe!==void 0&&q(l,.34*o,.26,.03,e.apron,0,.24,.185)),e.emblem!==void 0&&q(u,.12,.14,.03,e.emblem,0,.26,.15);const f=.23*o+.075,g=e.robe??n,_=Kr(u,.13,.42,.15,g,-f,.42),m=Kr(u,.13,.42,.15,g,f,.42);q(_,.12,.1,.14,i,0,-.42,0),q(m,.12,.1,.14,i,0,-.42,0);const p=new re;p.position.y=.45,p.scale.setScalar(iu),u.add(p),q(p,.34,.32,.32,i,0,.16,0);for(const I of[-1,1])q(p,.06,.09,.02,1776411,I*.085,.175,.165),q(p,.025,.03,.022,16777215,I*.085+.012,.2,.166),q(p,.05,.03,.02,15902106,I*.125,.105,.163);if(e.beard===void 0&&q(p,.07,.02,.02,9062970,0,.075,.165),e.nose!==void 0&&q(p,.07,.07,.06,e.nose,0,.12,.18),e.beard!==void 0){const I=s==="elder";q(p,.3,I?.3:.14,.05,e.beard,0,I?-.06:.03,.17)}switch(e.hair){case"short":q(p,.36,.09,.34,r,0,.35,0),q(p,.36,.2,.05,r,0,.24,-.16);break;case"bun":q(p,.36,.09,.34,r,0,.35,0),q(p,.36,.24,.05,r,0,.22,-.16),q(p,.16,.16,.14,r,0,.4,-.14);break;case"long":q(p,.36,.09,.34,r,0,.35,0),q(p,.38,.42,.06,r,0,.12,-.17);break;case"pigtails":q(p,.36,.09,.34,r,0,.35,0),q(p,.36,.2,.05,r,0,.24,-.16),q(p,.1,.24,.1,r,-.22,.16,-.06),q(p,.1,.24,.1,r,.22,.16,-.06);break;case"messy":q(p,.36,.09,.34,r,0,.35,0),q(p,.36,.18,.05,r,0,.25,-.16),q(p,.12,.1,.12,r,-.1,.42,.04),q(p,.1,.12,.1,r,.09,.43,-.06),q(p,.1,.08,.1,r,.02,.41,.12);break;case"sides":q(p,.05,.16,.26,r,-.18,.2,-.03),q(p,.05,.16,.26,r,.18,.2,-.03),q(p,.36,.16,.05,r,0,.2,-.16);break}const M=e.hatColor??n;switch(e.hat){case"helmet":q(p,.4,.2,.38,11384253,0,.3,0),q(p,.4,.2,.06,11384253,0,.14,-.17),q(p,.05,.16,.03,11384253,0,.16,.18),q(p,.06,.12,.3,12653087,0,.46,0);break;case"straw":q(p,.66,.04,.66,14729320,0,.33,0),q(p,.32,.14,.32,14729320,0,.42,0),q(p,.33,.04,.33,8344889,0,.37,0);break;case"widebrim":q(p,.6,.04,.6,M,0,.33,0),q(p,.34,.16,.34,M,0,.43,0);break;case"mitre":q(p,.3,.3,.22,16316922,0,.47,0),q(p,.31,.06,.23,16765286,0,.36,0);break;case"bandana":q(p,.37,.12,.35,M,0,.31,0),q(p,.1,.1,.1,M,.08,.26,-.2);break;case"scarf":q(p,.38,.12,.36,M,0,.32,0),q(p,.36,.24,.04,M,0,.18,-.2);break;case"cap":q(p,.36,.1,.34,M,0,.36,0),q(p,.22,.03,.12,M,0,.32,.2);break}if(e.back==="pack")q(u,.38,.42,.22,9268810,0,.24,-.25),q(u,.46,.12,.14,11887901,0,.5,-.25),q(u,.1,.12,.06,15320170,.14,.14,-.38);else if(e.back==="cape"){const I=q(u,.44,.62,.04,12653087,0,.1,-.18);I.rotation.x=.12}let v=!1;switch(e.prop){case"spear":v=!0,q(u,.05,1.7,.05,8344889,f+.02,.45,.16),q(u,.09,.22,.03,14607078,f+.02,1.38,.16);break;case"cane":v=!0,q(l,.05,.82,.05,6045747,f+.02,.41,.3),q(l,.05,.05,.14,6045747,f+.02,.82,.26);break;case"hammer":q(m,.05,.34,.05,8344889,0,-.44,.14),q(m,.12,.12,.2,4804695,0,-.44,.34);break;case"bottle":q(m,.08,.2,.08,2976335,0,-.5,.1),q(m,.04,.08,.04,2976335,0,-.36,.1);break;case"hoe":{v=!0;const I=q(u,.05,1.3,.05,8344889,f+.02,.5,-.02);I.rotation.x=-.5;const A=q(u,.2,.05,.16,7107965,f+.02,1.02,-.38);A.rotation.x=-.5;break}case"rod":{v=!0;const I=q(u,.035,1.9,.035,10514490,f+.02,.75,-.2);I.rotation.x=-.6,q(u,.012,.5,.012,16777215,f+.02,1.28,-.74);break}case"basket":q(_,.24,.14,.2,10514490,0,-.5,.08),q(_,.2,.05,.16,15087942,0,-.42,.08);break;case"book":q(_,.06,.2,.16,6947855,.02,-.44,.1);break;case"mug":q(m,.11,.13,.11,10514490,0,-.46,.12),q(m,.09,.03,.09,16643811,0,-.39,.12);break;case"sword":{const I=q(m,.06,.62,.03,14607078,0,-.44,.42);I.rotation.x=Math.PI/2,q(m,.2,.05,.05,16765286,0,-.44,.12),q(_,.05,.36,.32,1914199,-.09,-.3,.04),q(_,.02,.14,.12,16765286,-.12,-.3,.04);break}}const x=(.38+.45+(.32+.2)*iu)*e.scale;return{root:a,body:l,legL:c,legR:h,armL:_,armR:m,upper:u,baseLean:e.lean??0,head:p,stiffRightArm:v,sway:e.sway??0,height:x}}function fM(s){const t=new Map,e=new Map,n=s.clone();return Cd(s,n,function(i,r){t.set(r,i),e.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=t.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return e.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Cd(s,t,e){e(s,t);for(let n=0;n<s.children.length;n++)Cd(s.children[n],t.children[n],e)}const su={hero:{base:"Knight",hide:[],scale:1.05,attach:[{item:"sword_1handed",bone:"handslot.r"},{item:"shield_round",bone:"handslot.l"}],idle:"Idle_A",gesture:["Idle_B"]},guard:{base:"Knight",hide:["Cape","HelmetVisor"],scale:1.08,cloth:[null,10727878],attach:[{item:"spear",bone:"handslot.r",hold:"up"}],idle:"Idle_A",gesture:["Idle_B"]},shopkeeper:{base:"Mage",hide:["Hat","Cape"],scale:.98,cloth:[15320170],attach:[],idle:"Idle_B",gesture:["Working_A"]},blacksmith:{base:"Barbarian",hide:["BearHat"],scale:1.1,accent:[4862498],attach:[{item:"apron",bone:"hips"},{item:"hammer",bone:"handslot.r",hold:"down-idle"}],idle:"Idle_A",gesture:["Hammering"]},peddler:{base:"Ranger",hide:["Cape","Quiver"],scale:1,cloth:[16032353],accent:[8344889],attach:[{item:"widebrim",bone:"head"},{item:"pack",bone:"chest"}],idle:"Idle_A",gesture:["PickUp"]},child:{base:"Rogue",hide:["Cape"],scale:.68,cloth:[6185166,15167313,2792847],attach:[],idle:"Idle_B",gesture:["Cheering"]},drunk:{base:"Ranger",hide:["Cape","Quiver"],scale:1,cloth:[8215180],attach:[{item:"mug_full",bone:"handslot.r",hold:"up-idle"}],idle:"Idle_B",gesture:["Use_Item"],sway:.12},farmer:{base:"Ranger",hide:["Cape","Quiver"],scale:1.02,cloth:[6986062,11109479,9358054],attach:[{item:"straw",bone:"head"},{item:"hoe",bone:"handslot.r",hold:"up-idle"}],idle:"Idle_A",gesture:["Digging"]},priest:{base:"Mage",hide:["Hat","Cape"],scale:1.04,cloth:[16316922],attach:[{item:"mitre",bone:"head"},{item:"spellbook_closed",bone:"handslot.l",hold:"up"}],idle:"Idle_A",gesture:["Ranged_Magic_Spellcasting"]},innkeeper:{base:"Mage",hide:["Hat","Cape"],scale:1,cloth:[15167313],attach:[{item:"mug_full",bone:"handslot.r",hold:"up-idle"}],idle:"Idle_B",gesture:["Working_B"]},elder:{base:"Barbarian",hide:["BearHat"],scale:.92,cloth:[10325168],attach:[{item:"cane",bone:"handslot.r",hold:"up"}],idle:"Idle_B",gesture:["Interact"],lean:.12},fisher:{base:"Rogue",hide:["Cape"],scale:1,cloth:[4553629],accent:[1914199],attach:[{item:"bandana",bone:"head"},{item:"rod",bone:"handslot.r",hold:"up-idle"}],idle:"Idle_A",gesture:["Fishing_Cast","Fishing_Idle"]},housewife:{base:"Rogue",hide:["Cape"],scale:.98,cloth:[16766629,12443902],attach:[{item:"basket",bone:"handslot.l",hold:"up"}],idle:"Idle_B",gesture:["PickUp"]},innhost:{base:"Barbarian",hide:["BearHat"],scale:1.05,cloth:[7029795],accent:[10255189],attach:[{item:"apron",bone:"hips"},{item:"mug_full",bone:"handslot.r",hold:"up-idle"}],idle:"Idle_A",gesture:["Working_C"]},stablehand:{base:"Rogue",hide:["Cape"],scale:.98,cloth:[11109479],accent:[8344889],attach:[{item:"cap",bone:"head"},{item:"pitchfork",bone:"handslot.r",hold:"up-idle"}],idle:"Idle_A",gesture:["Digging"]},vendor:{base:"Ranger",hide:["Cape","Quiver"],scale:1,cloth:[3696193,12348453],accent:[15320170,16710368],attach:[{item:"bandana",bone:"head"}],idle:"Idle_A",gesture:["Waving"]}},$r=.62,pM={Knight:1.04,Barbarian:.95,Mage:.92,Ranger:1.03,Rogue:.94,Rogue_Hooded:.93},mM=["Body","LegLeft","LegRight","ArmLeft","ArmRight"],ru=new Map;function gM(s,t){const e=`${s.uuid}|${t}`;let n=ru.get(e);if(n)return n;n=s.clone();const i=new Tt(t);return n.onBeforeCompile=r=>{r.uniforms.clothTint={value:i},r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 clothTint;`).replace("#include <map_fragment>",`#include <map_fragment>
        {
          vec3 c = diffuseColor.rgb;
          float lum = dot(c, vec3(0.299, 0.587, 0.114));
          // 肌：赤 > 緑 > 青 の順で、赤がはっきり強い色
          float skin = step(c.b, c.g) * step(c.g, c.r) * smoothstep(0.08, 0.16, c.r - c.b) * smoothstep(0.25, 0.4, c.r);
          // 黒や白に近い部分（ベルト・目・縁取り）はそのまま
          float mid = smoothstep(0.03, 0.08, lum) * (1.0 - smoothstep(0.75, 0.9, lum));
          float k = (1.0 - skin) * mid;
          diffuseColor.rgb = mix(c, clothTint * (0.35 + lum * 1.3), k);
        }`)},n.customProgramCacheKey=()=>"kaykit-cloth",ru.set(e,n),n}function _M(s,t,e){const n=new re,i=8344889,r=7107965;switch(s){case"straw":q(n,1.75,.07,1.75,14729320,0,e-.36,0),q(n,1.16,.46,1.16,14729320,0,e-.14,0),q(n,1.18,.1,1.18,10506797,0,e-.28,0);break;case"widebrim":q(n,1.6,.07,1.6,t,0,e-.34,0),q(n,1.14,.48,1.14,t,0,e-.1,0),q(n,1.16,.1,1.16,3877402,0,e-.26,0);break;case"mitre":q(n,1.14,.22,1.12,16765286,0,e-.24,0),q(n,.8,.85,.6,16316922,0,e+.28,0),q(n,.12,.6,.03,16765286,0,e+.3,.31);break;case"bandana":q(n,1.14,.26,1.12,t,0,e-.3,-.01),q(n,.94,.14,.94,t,0,e-.12,-.04),q(n,.24,.24,.2,t,.18,e-.42,-.64);break;case"cap":q(n,1.1,.3,1.08,t,0,e-.2,-.01),q(n,.7,.05,.4,t,0,e-.32,.68);break;case"spear":q(n,.08,2.95,.08,i,0,.92,0),q(n,.18,.4,.06,14607078,0,2.55,0);break;case"hammer":q(n,.09,.8,.09,i,0,.25,0),q(n,.24,.24,.42,4804695,0,.62,.06);break;case"hoe":q(n,.08,1.9,.08,i,0,.5,0),q(n,.34,.07,.42,r,0,1.42,.2);break;case"pitchfork":q(n,.08,1.9,.08,i,0,.5,0),q(n,.42,.06,.06,r,0,1.46,0);for(const o of[-.18,0,.18])q(n,.05,.36,.05,r,o,1.66,0);break;case"rod":q(n,.06,2.8,.06,10514490,0,1,0),q(n,.02,.9,.02,16777215,0,2,.08);break;case"basket":q(n,.42,.26,.34,10514490,0,-.3,0),q(n,.36,.06,.28,15087942,0,-.15,0),q(n,.05,.26,.05,8344889,0,-.02,0);break;case"cane":q(n,.09,.7,.09,6045747,0,-.25,0),q(n,.09,.09,.26,6045747,0,.1,.08);break;case"pack":q(n,.72,.78,.42,9268810,0,.1,-.62),q(n,.84,.22,.28,11887901,0,.56,-.62),q(n,.18,.22,.1,15320170,.24,-.05,-.86);break;case"apron":q(n,.56,.42,.04,t,0,.06,.37);break}return n}const xM=new be().setFromAxisAngle(new C(0,0,1),Math.PI);function vM(s,t){return t.props.has(s)}const yM=new be,ou=new be,au=new be,jr=new be,MM=.75,SM=1.8;function bM(s,t,e){const n=su[s],i=e.bases.get(n.base);if(!i)throw new Error(`キャラクター ${n.base} がない`);const r=fM(i),o=n.cloth?n.cloth[t%n.cloth.length]:null,a=n.accent?n.accent[t%n.accent.length]:12653087;r.traverse(p=>{if(!(p instanceof gt))return;const M=p.name.slice(p.name.indexOf("_")+1);if(n.hide.includes(M)){p.visible=!1;return}p.castShadow=!0,o!==null&&mM.includes(M)&&(p.material=gM(p.material,o))});const l=[];for(const p of n.attach){const M=r.getObjectByName(p.bone.replace(".",""));if(!M)continue;const v=vM(p.item,e)?e.props.get(p.item).clone():_M(p.item,a,pM[n.base]);v.traverse(I=>{I instanceof gt&&(I.castShadow=!0)});const x=p.hold??"kaykit";x!=="kaykit"&&l.push({obj:v,bone:M,down:x==="down-idle",fixed:x==="up"}),M.add(v)}const c=new re,h=new re;h.scale.setScalar($r*n.scale),h.add(r),c.add(h);const u=new Bv(r),d=p=>{const M=e.clips.get(p)??e.clips.get("Idle_A");return u.clipAction(M)},f=new Map,g=p=>{let M=f.get(p);return M||(M=su[p].gesture.map(d),f.set(p,M)),M},_=d("Death_A");_.setLoop(Du,1),_.clampWhenFinished=!0;const m=p=>{if(l.length!==0){h.updateWorldMatrix(!0,!0),h.getWorldQuaternion(ou);for(const M of l)M.bone.getWorldQuaternion(au),jr.copy(au).invert().multiply(ou),M.down&&jr.multiply(xM),M.fixed?M.obj.quaternion.copy(jr):M.obj.quaternion.slerpQuaternions(jr,yM,p)}};return{root:c,body:h,mixer:u,idle:d(n.idle),walk:d("Walking_A"),run:d("Running_A"),gestureActions:g,death:_,setHold:m,sway:n.sway??0,lean:n.lean??0,spine:r.getObjectByName("spine")??null,height:2.3*$r*n.scale,walkSpeed:MM*$r*n.scale,runSpeed:SM*$r*n.scale}}const lu=new Map;function cu(s,t,e=!1,n="#ffffff"){const i=`${s}|${n}|${e}`;let r=lu.get(i);if(!r){const c='64px "DotGothic16", "Hiragino Sans", "Noto Sans JP", "Yu Gothic", sans-serif',h=document.createElement("canvas"),u=h.getContext("2d");u.font=c;const d=Math.ceil(u.measureText(s).width)+32,f=96;h.width=d,h.height=f,u.font=c,u.textAlign="center",u.textBaseline="middle",u.lineJoin="round",u.lineWidth=12,u.strokeStyle="rgba(0, 0, 0, 0.9)",u.strokeText(s,d/2,f/2),u.fillStyle=n,u.fillText(s,d/2,f/2);const g=new sd(h);g.colorSpace=we,r={material:new Ju({map:g,transparent:!0,depthWrite:!1,sizeAttenuation:!e}),aspect:d/f},lu.set(i,r)}const o=new Ex(r.material);return o.scale.set(t*r.aspect,t,1),o}const hu=380,wM=400,EM=500,AM=2.4,TM=3.4,uu=2,Pd=new nr(.5,.62,28);Pd.rotateX(-Math.PI/2);const RM=new ce({color:16711731,transparent:!0,opacity:.9,depthWrite:!1});function Xi(s,t){return s%t/t}function Ns(s){return Math.sin(Math.PI*Math.min(1,Math.max(0,s)))}function CM(s,t){const e={armLX:0,armRX:0,armLZ:0,armRZ:0,lean:0,headX:0,headY:0,lift:0};switch(s){case"blacksmith":{const n=Xi(t,1),i=n<.7?n/.7:1-(n-.7)/.3;e.armRX=-2.6*i,e.lean=.25*(1-i),e.headX=.2;break}case"farmer":case"stablehand":{const n=Xi(t,1.4),i=n<.6?n/.6:1-(n-.6)/.4;e.lean=-.25+.75*i,e.armLX=-.9,e.armRX=-.9,e.headX=.2;break}case"drunk":{const n=Ns(Xi(t,3.2)/.7);e.armRX=-2.5*n,e.armRZ=-.35*n,e.headX=-.5*n,e.lean=-.15*n;break}case"child":{const n=Math.abs(Math.sin(t*5.5));e.lift=.22*n,e.armLX=-2.6*n,e.armRX=-2.6*n;break}case"guard":e.headY=.9*Math.sin(t*1.3);break;case"priest":{const n=.6+.4*Math.sin(t*1.2);e.armLX=-1.2,e.armRX=-1.2,e.armLZ=.45,e.armRZ=-.45,e.lean=.35*n,e.headX=.4*n;break}case"shopkeeper":case"innkeeper":case"innhost":case"vendor":e.armRX=-1.1+.25*Math.cos(t*5),e.armRZ=.35*Math.sin(t*5),e.armLX=-.6,e.lean=.2,e.headX=.3;break;case"elder":e.lean=.12,e.headX=.35*Math.max(0,Math.sin(t*2.4));break;case"fisher":{const n=Xi(t,2.6),i=n<.5?Ns(n/.5):0,r=n>=.5&&n<.75?Ns((n-.5)/.25):0;e.lean=-.45*i+.35*r,e.armRX=-1.6*i-.5*r,e.armLX=-.5;break}case"peddler":{const n=Ns(Xi(t,2.2)/.4);e.armLX=-.5,e.armRX=-.5,e.armLZ=.3,e.armRZ=-.3,e.lift=.08*n,e.lean=.1+.3*n;break}case"housewife":{const n=Ns(Xi(t,2.8)/.6);e.armLX=-1.3*n,e.armLZ=.4*n,e.armRX=-1.2*n,e.armRZ=-.5*n,e.headX=.35*n;break}}return e}class du{constructor(t,e,n){this.rig=null,this.kay=null,this.yaw=null,this.walkPhase=Math.random()*Math.PI*2,this.walkAmount=0,this.idlePhase=Math.random()*10,this.dyingMs=-1,this.lastGesture=null,this.gestureT=0,this.gestureAmount=0,this.word=null,this.wordFor=null,this.shout=null,this.labelsVisible=!0,this.lastX=null,this.lastY=0,this.speed=0,this.gestureActs=[];const i=aM();let r;if(i){const o=bM(t,e,i);this.kay=o,this.group=o.root,r=o.height;for(const a of[o.idle,o.walk,o.run])a.play(),a.time=Math.random()*a.getClip().duration,a.setEffectiveWeight(0);o.idle.setEffectiveWeight(1)}else{const o=dM(t,e);this.rig=o,this.group=o.root,r=o.height}n?(this.label=cu(n,.042,!0),this.label.position.y=r+.22,this.group.add(this.label)):this.label=null}setLabelVisible(t){this.labelsVisible=t,this.label&&(this.label.visible=t),this.word&&(this.word.visible=t)}setShout(t){this.shout=t}showWord(t){const e=this.shout??(t?Bn[t].gestureWord:null);e!==this.wordFor&&(this.wordFor=e,this.word&&(this.group.remove(this.word),this.word=null),!(!e||!this.label)&&(this.word=cu(e,.036,!0,this.shout?"#ff9f9f":"#ffe08a"),this.word.position.copy(this.label.position),this.word.center.set(.5,-.8),this.word.visible=this.labelsVisible,this.group.add(this.word)))}markRevealed(){const t=new gt(Pd,RM);t.position.y=.04,this.group.add(t)}startDying(){this.dyingMs<0&&(this.dyingMs=0,this.kay&&(this.kay.death.reset(),this.kay.death.play())),this.setLabelVisible(!1)}update(t,e,n,i,r,o=null,a=0){const l=r/1e3;if(this.group.position.set(t/st,0,e/st),this.showWord(this.dyingMs>=0?null:o),this.lastX!==null&&l>0){const u=Math.hypot(t-this.lastX,e-this.lastY)/st/l;this.speed+=(Math.min(u,8)-this.speed)*Math.min(1,l*8)}this.lastX=t,this.lastY=e,this.yaw===null&&(this.yaw=n);const c=Math.atan2(Math.sin(n-this.yaw),Math.cos(n-this.yaw));this.yaw+=c*Math.min(1,l*10),this.group.rotation.y=this.yaw,this.walkAmount+=((i?1:0)-this.walkAmount)*Math.min(1,l*10),i&&(this.walkPhase+=l*9),this.idlePhase+=l,o?((o!==this.lastGesture||a/1e3<this.gestureT-.05)&&(this.gestureAmount=0),this.lastGesture=o,this.gestureT=a/1e3):this.gestureT+=l;const h=o&&!i?1:0;this.gestureAmount+=(h-this.gestureAmount)*Math.min(1,l*6),this.kay?this.updateKay(this.kay,l):this.rig&&this.updateBox(this.rig,r)}updateKay(t,e){if(this.dyingMs>=0){this.updateKayDying(t,e);return}const n=io.smoothstep(this.speed,AM,TM),i=this.walkAmount*(1-n),r=this.walkAmount*n;t.walk.setEffectiveWeight(i),t.run.setEffectiveWeight(r),t.walk.timeScale=io.clamp(this.speed/t.walkSpeed,.8,uu),t.run.timeScale=io.clamp(this.speed/t.runSpeed,.8,uu);const o=this.gestureAmount*(1-this.walkAmount),a=this.lastGesture?t.gestureActions(this.lastGesture):[];if(a!==this.gestureActs){for(const c of this.gestureActs)c.setEffectiveWeight(0);this.gestureActs=a;for(const c of a)c.play(),c.timeScale=0}let l=0;if(a.length>0){const c=a[0].getClip().duration;if(a.length>1&&this.gestureT>=c){const h=a[1];h.time=(this.gestureT-c)%h.getClip().duration,h.setEffectiveWeight(o),a[0].setEffectiveWeight(0)}else a[0].time=a.length>1?Math.min(this.gestureT,c-.001):this.gestureT%c,a[0].setEffectiveWeight(o),a.length>1&&a[1].setEffectiveWeight(0);l=o}t.idle.setEffectiveWeight(Math.max(0,1-i-r-l)),t.body.rotation.z=t.sway>0?t.sway*Math.sin(this.idlePhase*2.3):0,t.body.rotation.x=t.lean+(t.sway>0?t.sway*.6*Math.sin(this.idlePhase*1.7):0),t.mixer.update(e),t.setHold(l)}updateKayDying(t,e){this.dyingMs+=e*1e3;const n=Math.min(1,this.dyingMs/150);t.death.setEffectiveWeight(n);for(const o of[t.idle,t.walk,t.run,...this.gestureActs])o.setEffectiveWeight(o.getEffectiveWeight()*(1-n));t.body.rotation.set(0,0,0),t.mixer.update(e);const i=t.death.getClip().duration*1e3,r=(this.dyingMs-i-EM)/wM;r>0&&(t.body.position.y=-.5*Math.min(1,r),this.group.scale.setScalar(Math.max(.001,1-r))),r>=1&&(this.group.visible=!1)}updateBox(t,e){const n=Math.sin(this.walkPhase)*.7*this.walkAmount;t.legL&&t.legR&&(t.legL.rotation.x=n,t.legR.rotation.x=-n),t.armL.rotation.x=-n*.8,t.armR.rotation.x=t.stiffRightArm?-.35:n*.8;const i=Math.abs(Math.sin(this.walkPhase))*.04*this.walkAmount,r=Math.sin(this.idlePhase*2)*.006;t.body.position.y=i+r,t.body.rotation.z=t.sway*Math.sin(this.idlePhase*2.3),t.body.rotation.x=t.sway*.6*Math.sin(this.idlePhase*1.7);const o=this.gestureAmount*(1-this.walkAmount),a=this.lastGesture&&o>.001?CM(this.lastGesture,this.gestureT):null;if(t.upper.rotation.x=t.baseLean+(a?a.lean*o:0),t.head.rotation.x=a?a.headX*o:0,t.head.rotation.y=a?a.headY*o:0,t.armL.rotation.z=a?a.armLZ*o:0,t.armR.rotation.z=a?a.armRZ*o:0,a&&(t.armL.rotation.x+=a.armLX*o,t.stiffRightArm||(t.armR.rotation.x+=a.armRX*o),t.body.position.y+=a.lift*o),this.dyingMs>=0){this.dyingMs+=e;const l=Math.max(.001,1-this.dyingMs/hu);this.group.scale.setScalar(l),this.group.rotation.y+=(1-l)*6,this.dyingMs>=hu&&(this.group.visible=!1)}}}function Pe(s){const t=document.getElementById(s);if(!t)throw new Error(`#${s} が index.html にありません`);return t}function oo(){return document.body.classList.contains("touch")}function po(s){return oo()?s.replace(/移動：WASD/g,"左：うごく").replace(/視点：[^　]*/g,"右：みまわす").replace(/↑↓：えらぶ/g,"タップで えらぶ").replace(/Z：/g,"A：").replace(/X：/g,"B：").replace(/：Z(?=$|　)/g,"：A").replace(/：X(?=$|　)/g,"：B"):s}const PM="https://github.com/takabasket2324-wq/murabito/discussions/new?category=general",fu=()=>`<p class="feedback"><a href="${PM}" target="_blank" rel="noopener">✎ 感想を 書く</a>（GitHub の みんなの 感想ページ）</p>`;function mn(s,t){s.classList.toggle("hidden",!t)}class IM{constructor(){this.hud=Pe("hud"),this.phaseEl=Pe("hud-phase"),this.ruinEl=Pe("hud-ruin"),this.misEl=Pe("hud-mis"),this.toastEl=Pe("toast"),this.promptEl=Pe("prompt"),this.hintEl=Pe("hint"),this.blackoutEl=Pe("blackout"),this.blackoutText=Pe("blackout-text"),this.screenEl=Pe("screen"),this.screenInner=Pe("screen-inner"),this.toastUntil=0,this.onStartHero=()=>{}}setPlayingVisible(t){document.body.classList.toggle("playing",t),mn(this.hud,t),mn(this.hintEl,t),t||(mn(this.toastEl,!1),mn(this.promptEl,!1))}setHud(t,e,n,i){const r=Math.floor(e/60),o=String(e%60).padStart(2,"0");this.phaseEl.textContent=`${t}　のこり ${r}:${o}`;const a=tt.ruin.gaugeMax;this.ruinEl.textContent=`滅び ${"■".repeat(n)}${"□".repeat(Math.max(0,a-n))}`,this.ruinEl.classList.toggle("danger",n>0),this.misEl.textContent=`誤認 ${i}/${tt.misjudgeLimit}`,this.misEl.classList.toggle("warn",i>0)}toast(t,e,n=4500){this.toastEl.textContent=t,mn(this.toastEl,!0),this.toastUntil=e+n}tick(t){t>=this.toastUntil&&mn(this.toastEl,!1)}setPrompt(t){if(mn(this.promptEl,t!==null),t===null)return;const e=po(t);this.promptEl.textContent!==e&&(this.promptEl.textContent=e)}setHint(t){const e=po(t);this.hintEl.textContent!==e&&(this.hintEl.textContent=e)}showBlackout(t){this.blackoutText.textContent=t,this.blackoutEl.classList.add("on")}hideBlackout(){this.blackoutEl.classList.remove("on")}showTitle(){const t=tt,e=oo(),n=e?`左：うごく（スティック）　　右：なぞって みまわす<br />
        A：話す・決定・しらべる　　B：斬る・やめる　　♪：音を 消す`:`移動：W A S D　　視点：マウス（画面を クリック）か ← →<br />
        話す・決定：Z　　斬る・やめる：X　　音を 消す：M`,i=a=>`<span class="soon-item">${a}（じゅんび中）</span>`,r=`<p class="menu"><span class="menu-label">ひとりで（悪魔）</span>${i("れんしゅう")}${i("ハード")}</p>`,o=`<p class="menu">${i("みんなで 対戦")}</p>`;this.screenInner.innerHTML=`
      <h1>村人ですけど？</h1>
      <p class="tagline">― 村人の フリをした 悪魔を 見つけだせ ―</p>
      <details class="howto"${window.innerHeight>560?" open":""}>
      <summary>あそびかた</summary>
      <ul>
        <li>① 下見（${t.phases.previewSec}秒）　村を 歩いて だれが どこに いるか おぼえる</li>
        <li>② 夜が きて 村人の うち ${t.demonCount}人が 悪魔と 入れかわる</li>
        <li>③ 本番（${Math.round(t.phases.mainSec/60)}分）　話して 観察して 悪魔を 斬る</li>
        <li>悪魔の クセ：持ち場を はなれる／役に 合わない 仕草や ことば／返事に まよう</li>
        <li>村人は 持ち場で「カン カン」「ザク ザク」と 役の 仕草を する。 よく 見ておこう</li>
        <li>悪魔は 目を ぬすんで 井戸・食料庫・教会で 悪さを する。 滅びが 満ちると 負け</li>
        <li>本物の 村人を ${t.misjudgeLimit}回 斬っても 負け。 時間まで 守りきれば 勝ち</li>
      </ul>
      <p class="keys">
        ${n}
      </p>
      </details>
      <p class="menu"><span class="menu-label">ひとりで（勇者）</span><a href="#" data-hero="practice">れんしゅう</a><a href="#" data-hero="hard" class="hard">ハード</a></p>
      ${r}
      ${o}
      <p class="menu-note">${e?"タップで えらぶ":"クリックで えらぶ"}　　ハードは ほぼ 勝てない</p>
      ${fu()}
      <p class="credit">パソコンでも スマホでも 遊べる<br />キャラクター：KayKit（CC0）　フォント：DotGothic16（SIL OFL）<br />この ゲームは フィクションです。 実在の 人物・団体とは 関係ありません。</p>`;for(const a of this.screenInner.querySelectorAll("[data-hero]"))a.addEventListener("click",l=>{l.preventDefault(),this.onStartHero(a.dataset.hero==="hard"?"hard":"practice")});mn(this.screenEl,!0)}showResult(t){const e=t.demons.map(n=>`<li>　${n.name}（${n.role}）　…… ${n.slain?"斬った":"見ぬけなかった"}</li>`).join("");this.screenInner.innerHTML=`
      <h1 class="${t.won?"":"lose"}">${t.won?t.hard?"ハードモード クリア！":"勇者の 勝ち！":"悪魔の 勝ち……"}</h1>
      <p class="tagline">${t.hard?"【ハードモード】　":""}${t.reason}</p>
      <ul>
        <li>悪魔が 化けていたのは……</li>
        ${e}
        <li>滅び：${t.ruin}/${tt.ruin.gaugeMax}　　誤認：${t.misjudge}/${tt.misjudgeLimit}</li>
      </ul>
      <p class="result-buttons">
        <button class="result-btn" data-key="KeyZ">${oo()?"もう一度":"Z：もう一度"}</button>
        <button class="result-btn" data-key="KeyT">${oo()?"タイトルへ":"T：タイトルへ"}</button>
      </p>
      ${fu()}`;for(const n of this.screenInner.querySelectorAll("[data-key]"))n.addEventListener("click",()=>{const i=n.dataset.key;window.dispatchEvent(new KeyboardEvent("keydown",{code:i})),window.dispatchEvent(new KeyboardEvent("keyup",{code:i}))});mn(this.screenEl,!0)}showOnlineResult(t){const e=r=>r.replace(/[&<>"']/g,o=>`&#${o.charCodeAt(0)};`),n=t.demons.map(r=>{const o=r.villager?`${e(r.villager)}（${e(r.role)}）`:"（化けなかった）",a=t.practice?"":`　…… ${r.slain?"斬られた":"見ぬかれなかった"}`;return`<li>　${e(r.player)} → ${o}${a}</li>`}).join(""),i=t.practice?"練習 おわり":t.heroesWin?"勇者の 勝ち！":t.hard?"ハードモード クリア！":"悪魔の 勝ち……";this.screenInner.innerHTML=`
      <h1 class="${t.heroesWin||t.practice?"":"lose"}">${i}</h1>
      <p class="tagline">${e(t.reason)}</p>
      <ul>
        <li>悪魔役と 化けていた 村人は……</li>
        ${n}
        <li>滅び：${t.ruin}/${tt.ruin.gaugeMax}${t.practice?"":`　　誤認：${t.mis}/${tt.misjudgeLimit}`}</li>
      </ul>
      <p class="keys">まもなく 待合室へ もどる</p>`,mn(this.screenEl,!0)}hideScreen(){mn(this.screenEl,!1)}}class LM{constructor(t){this.sfx=t,this.open=!1,this.mode="choose",this.cursor=0,this.remaining=0,this.waitStartedAt=0,this.readyAt=0,this.typeStartedAt=0,this.shown=0,this.pending="",this.panel=Pe("dialogue"),this.nameEl=Pe("dlg-name"),this.bodyEl=Pe("dlg-body"),this.optionsEl=Pe("dlg-options"),this.moreEl=Pe("dlg-more"),this.hintEl=Pe("dlg-hint"),this.optionEls=[],this.onAsk=()=>({delayMs:0,text:"",remaining:0}),this.onClose=()=>{},this.taps=[],this.optionsEl.textContent="";for(const e of ys){const n=document.createElement("li");n.dataset.text=e.text,this.optionsEl.appendChild(n),this.optionEls.push(n);const i=this.optionEls.length-1;n.addEventListener("pointerdown",r=>{!this.open||this.mode!=="choose"||(r.preventDefault(),r.stopPropagation(),this.cursor=i,this.taps.push("z"))})}this.panel.addEventListener("pointerdown",e=>{!this.open||this.mode==="choose"||(e.preventDefault(),this.taps.push("z"))})}show(t,e,n,i,r){this.open=!0,this.remaining=e,this.onAsk=i,this.onClose=r,this.cursor=0,this.nameEl.textContent=t,this.panel.classList.remove("hidden"),e<=0?this.startTyping("（もう なにも 話して くれない……）",n):(this.mode="choose",this.render())}close(){this.open&&(this.open=!1,this.panel.classList.add("hidden"),this.onClose())}update(t,e){const n=this.taps.length>0?[...this.taps,...e]:e;this.taps=[];for(const i of n){if(!this.open)return;this.handleKey(i,t)}if(this.open){if(this.mode==="waiting")if(t>=this.readyAt)this.startTyping(this.pending,t);else{const i=1+Math.floor((t-this.waitStartedAt)/350)%3;this.bodyEl.textContent="…".repeat(i)}else if(this.mode==="typing"){const i=this.pending.length,r=Math.min(i,Math.floor((t-this.typeStartedAt)/1e3*tt.dialogue.typeCharsPerSec));if(r!==this.shown){const o=this.pending[r-1];r>this.shown&&o!==" "&&o!=="　"&&r%2===0&&this.sfx.blip(),this.shown=r,this.bodyEl.textContent=this.pending.slice(0,r)}r>=i&&(this.mode="answer",this.render())}}}startTyping(t,e){this.pending=t,this.shown=0,this.typeStartedAt=e,this.mode="typing",this.render()}handleKey(t,e){switch(this.mode){case"choose":if(t==="up")this.cursor=(this.cursor+ys.length-1)%ys.length,this.sfx.cursor(),this.render();else if(t==="down")this.cursor=(this.cursor+1)%ys.length,this.sfx.cursor(),this.render();else if(t==="z"){this.sfx.confirm();const n=this.onAsk(ys[this.cursor].id);this.remaining=n.remaining,this.pending=`「${n.text}」`,this.waitStartedAt=e,this.readyAt=e+n.delayMs,this.mode="waiting",this.render()}else t==="x"&&(this.sfx.cancel(),this.close());break;case"waiting":break;case"typing":(t==="z"||t==="x")&&(this.shown=this.pending.length,this.bodyEl.textContent=this.pending,this.mode="answer",this.render());break;case"answer":(t==="z"||t==="x")&&(this.remaining>0?(this.sfx.cursor(),this.mode="choose",this.render()):this.close());break}}render(){const t=this.mode==="choose";this.optionsEl.classList.toggle("hidden",!t),this.bodyEl.classList.toggle("hidden",t),this.moreEl.classList.toggle("hidden",this.mode!=="answer"),this.optionEls.forEach((n,i)=>{const r=i===this.cursor;n.textContent=`${r?"▶":"　"}${n.dataset.text??""}`,n.classList.toggle("selected",r)});const e=Number.isFinite(this.remaining)?`あと${this.remaining}回`:"下見中は 何回でも";switch(this.mode){case"choose":this.hintEl.textContent=po(`${e}　↑↓：えらぶ　Z：きく　X：やめる`);break;case"waiting":this.bodyEl.textContent="…",this.hintEl.textContent="";break;case"typing":this.bodyEl.textContent="",this.hintEl.textContent="";break;case"answer":this.hintEl.textContent=po(this.remaining>0?`${e}　Z：つづける`:"Z：とじる");break}}}const pu={preview:"下見",blackout:"夜",main:"本番"},qi=Math.PI/180,DM=100;function mu(s,t,e){return Math.min(e,Math.max(t,s))}class NM{constructor(t){this.ui=new IM,this.sfx=new Qd,this.bgm=new Jd(this.sfx),this.dialogue=new LM(this.sfx),this.solids=[],this.actors=[],this.demons=[],this.state="title",this.level="practice",this.phase="preview",this.phaseEndsAt=0,this.now=0,this.lastFrameAt=0,this.orbitAngle=.6,this.px=0,this.py=0,this.yaw=Math.PI/2,this.pitch=tt.camera.defaultPitchDeg*qi,this.heroFacing=Math.PI/2,this.heroMoving=!1,this.heroBuilding=-1,this.indoorBlend=0,this.ruin=0,this.misjudge=0,this.slashReadyAt=0,this.searchReadyAt=0,this.questionsAsked=new Map,this.ended=!1,this.talkingTo=null,this.resultAt=0,this.resultData=null,this.frame=e=>{const n=mu(e-this.lastFrameAt,0,DM);this.lastFrameAt=e,this.now+=n,this.update(n),this.world.update(n),this.world.render(),requestAnimationFrame(this.frame)},this.world=new w1(t),this.input=new Xd(this.world.canvas),this.grid=new zd(tt.world.width/st,tt.world.height/st),fs.forEach((e,n)=>{if(e.blocks){if(!fl(e)){this.grid.blockRect(e.tx0,e.ty0,e.tx1,e.ty1);const i=Qs(e);this.solids.push(e.label==="屋台"?{x:i.x,y:i.y+6,w:i.w,h:i.h-12}:i);return}this.grid.setRegion(e.tx0,e.ty0,e.tx1,e.ty1,n+1);for(const i of mo(e).pairs)this.grid.addPassage(i.inside,i.outside);this.solids.push(...Od(e))}});for(const e of _u)this.grid.blockRect(e.tx,e.ty,e.tx,e.ty),this.solids.push({x:e.tx*st+6,y:e.ty*st+6,w:st-12,h:st-12});for(const e of Qn)this.grid.blockRect(e.tx,e.ty,e.tx,e.ty),this.solids.push({x:e.tx*st+5,y:e.ty*st+5,w:st-10,h:st-10});this.grid.blockRect(en.tx,en.ty,en.tx,en.ty);for(const e of xu){this.grid.blockRect(e.tx,e.ty,e.tx,e.ty);const n=Ke(e.tx,e.ty);this.solids.push({x:n.x-7,y:n.y-7,w:14,h:14})}this.hero=new du("hero",0,null),this.world.add(this.hero.group),this.resetPlayer(),this.spawnVillagers(),this.ui.onStartHero=e=>{this.state==="title"&&this.startGame(e)},this.ui.showTitle();for(const e of["keydown","pointerdown","mousedown","click","touchend"])window.addEventListener(e,()=>this.sfx.unlock());this.bgm.play("title"),requestAnimationFrame(e=>{this.lastFrameAt=e,this.frame(e)})}spawnVillagers(){for(const i of this.actors)this.world.remove(i.view.group);this.actors=[],this.demons=[];const t=new Map,e=new tf,n=new ef;for(const i of dl){const r=t.get(i.role)??0;t.set(i.role,r+1);const o=new sf(i,this.grid,e);o.onSabotage=(l,c)=>this.onSabotage(c),o.hideBoard=n;const a=new du(i.role,r,i.name);this.world.add(a.group),this.actors.push({v:o,view:a})}}resetPlayer(){const t=Ke(Jl.tx,Jl.ty);this.px=t.x,this.py=t.y,this.yaw=Math.PI/2,this.pitch=tt.camera.defaultPitchDeg*qi,this.heroFacing=this.yaw,this.heroMoving=!1,this.heroBuilding=-1,this.indoorBlend=0}startGame(t=this.level){this.level=t,tc(t),this.spawnVillagers(),this.world.clearTraces(),this.world.setHighlight(null),this.resetPlayer(),this.ruin=0,this.misjudge=0,this.slashReadyAt=0,this.questionsAsked.clear(),this.ended=!1,this.resultData=null,this.state="playing",this.phase="preview",this.phaseEndsAt=this.now+tt.phases.previewSec*1e3,this.ui.hideScreen(),this.ui.hideBlackout(),this.ui.setPlayingVisible(!0),this.sfx.start(),this.bgm.play("village",.7),this.ui.toast(t==="hard"?`ハードモード：悪魔は ${tt.demonCount}人。 ほとんど ミスを しない…… よく おぼえよう`:"下見：村を 歩いて だれが どこに いるか おぼえよう",this.now,7e3)}toTitle(){this.level="practice",tc("practice"),this.spawnVillagers(),this.world.clearTraces(),this.resetPlayer(),this.state="title",this.ui.setPlayingVisible(!1),this.ui.showTitle(),this.bgm.play("title")}update(t){const e=this.input.drainPresses(),n=this.input.consumeMouse();if(this.ui.tick(this.now),e.includes("m")){const i=this.sfx.toggleMute();this.ui.toast(i?"音を 消した":"音を 出した",this.now,1500)}if(this.bgm.update(),this.state==="playing"){this.updatePlaying(t,e,n);return}this.orbitAngle+=t*8e-5,this.world.setIndoor(-1),this.world.setOrbitCamera(this.orbitAngle),this.tickVillagers(t,!1),this.syncViews(t),e.includes("z")?this.startGame(this.state==="title"?"practice":this.level):this.state==="result"&&e.includes("t")&&this.toTitle()}updatePlaying(t,e,n){const i=this.now;if(this.ended){this.heroMoving=!1,this.syncViews(t),this.followCamera(t),i>=this.resultAt&&this.showResult();return}if(i>=this.phaseEndsAt)if(this.phase==="preview")this.startBlackout();else if(this.phase==="blackout")this.startMain();else{this.finish(!0,"時間まで 村を 守りきった！");return}const r=Math.max(0,Math.ceil((this.phaseEndsAt-i)/1e3)),o=this.level==="hard"?`ハード・${pu[this.phase]}`:pu[this.phase];if(this.ui.setHud(o,r,this.ruin,this.misjudge),this.phase==="blackout"){this.followCamera(t);return}const a=tt.camera;this.yaw-=n.dx*a.mouseSensitivity,this.pitch=mu(this.pitch+n.dy*a.mouseSensitivity,a.pitchMinDeg*qi,a.pitchMaxDeg*qi),this.heroMoving=!1,this.dialogue.open?(this.world.setHighlight(null),this.ui.setPrompt(null),this.dialogue.update(i,e)):(this.moveHero(t),this.interact(e)),this.tickVillagers(t,this.phase==="main"),this.syncViews(t),this.dialogue.open&&this.talkingTo?(this.updateIndoor(t),this.world.setDialogueCamera(this.px,this.py,this.talkingTo.x,this.talkingTo.y)):this.followCamera(t)}updateIndoor(t){const e=Yi(this.px,this.py);this.heroBuilding=this.grid.regionAt(e.tx,e.ty)-1,this.world.setIndoor(this.heroBuilding);const n=this.heroBuilding>=0?1:0;this.indoorBlend+=(n-this.indoorBlend)*Math.min(1,t*.008)}followCamera(t){this.updateIndoor(t);const e=Math.max(this.pitch,tt.camera.indoorPitchDeg*qi),n=this.pitch+(e-this.pitch)*this.indoorBlend,i=tt.camera,r=i.distance+(i.indoorDistance-i.distance)*this.indoorBlend;this.world.setFollowCamera(this.px,this.py,this.yaw,n,r)}moveHero(t){const e=this.input,n=(e.isDown("ArrowRight")?1:0)-(e.isDown("ArrowLeft")?1:0);this.yaw-=n*tt.camera.keyTurnDegPerSec*qi*(t/1e3);const{fwd:i,strafe:r}=e.moveAxis();if(i===0&&r===0)return;const o=Math.sin(this.yaw),a=Math.cos(this.yaw);let l=o*i-a*r,c=a*i+o*r;const h=Math.hypot(l,c);l/=h,c/=h;const u=tt.player.speed*t/1e3;this.tryMove(l*u,c*u),this.heroFacing=Math.atan2(l,c),this.heroMoving=!0}tryMove(t,e){this.hitsSolid(this.px+t,this.py)||(this.px+=t),this.hitsSolid(this.px,this.py+e)||(this.py+=e);const n=tt.player.radius,i=Ke(en.tx,en.ty),r=Math.hypot(this.px-i.x,this.py-i.y),o=en.radius+n;r<o&&r>.001&&(this.px=i.x+(this.px-i.x)/r*o,this.py=i.y+(this.py-i.y)/r*o)}hitsSolid(t,e){const n=tt.player.radius;if(t<n||e<n||t>tt.world.width-n||e>tt.world.height-n)return!0;for(const i of this.solids)if(t>i.x-n&&t<i.x+i.w+n&&e>i.y-n&&e<i.y+i.h+n)return!0;return!1}interact(t){this.phase==="main"||tt.dialogue.allowTalkInPreview;const e=this.phase==="main",n=this.nearestActor(),i=this.phase==="main"?this.nearestHideSpot():null,r=i!==null&&(!n||i.dist<Math.hypot(n.v.x-this.px,n.v.y-this.py));if(this.world.setHighlight(n&&!r?n.v:null),r)this.ui.setPrompt(`Z：${Ql[Qn[i.id].kind]}を しらべる`);else if(n){const a=[];a.push(`Z：${n.v.def.name}と 話す`),e&&a.push(`X：${n.v.def.name}を 斬る`),this.ui.setPrompt(a.length>0?a.join("　"):null)}else this.ui.setPrompt(null);if(r&&t.includes("z")){this.searchHideSpot(i.id);return}const o=document.pointerLockElement?"マウス（Escで解除）":"← → か 画面クリックで マウス";this.ui.setHint(`移動：WASD　視点：${o}　話す：Z　${e?"斬る：X":"（下見中は 斬れない）"}`),n&&(t.includes("z")?this.openDialogue(n):e&&t.includes("x")&&this.now>=this.slashReadyAt&&this.slash(n))}tickVillagers(t,e){const n=this.state!=="playing",i=n?-99999:this.px,r=n?-99999:this.py,o=n?-1:this.heroBuilding;for(const a of this.actors)a.v.tick(this.now,t,i,r,e,o)}syncViews(t){const e=tt.visibility.nameLabelTiles*st,n=this.state==="playing",i=tt.panic.words;this.actors.forEach((o,a)=>{const l=o.v.alive&&this.now<o.v.panicUntil;o.view.setShout(l?i[(a+Math.floor(o.v.panicUntil/1e3))%i.length]:null),o.view.update(o.v.x,o.v.y,o.v.facing,o.v.moving,t,o.v.gestureAt(this.now),this.now-o.v.gestureStartedAt);const c=Math.hypot(o.v.x-this.px,o.v.y-this.py)<=e;o.view.setLabelVisible(o.v.alive&&n&&c),o.view.group.visible=!o.v.hidden}),this.hero.group.visible=n&&!this.world.heroInTheWay,this.hero.update(this.px,this.py,this.heroFacing,this.heroMoving,t);const r=[];for(const o of this.actors)o.v.alive&&r.push(o.v);n&&r.push({x:this.px,y:this.py}),this.world.updateDoors(r,t)}nearestHideSpot(){let t=null;for(const e of Qn){const n=Ke(e.tx,e.ty),i=Math.hypot(n.x-this.px,n.y-this.py);i<=tt.player.interactRange&&(!t||i<t.dist)&&(t={id:e.id,dist:i})}return t}searchHideSpot(t){if(this.now<this.searchReadyAt)return;this.searchReadyAt=this.now+tt.hide.searchCooldownMs;const e=Ql[Qn[t].kind],n=this.actors.find(r=>r.v.hidingIn===t);if(!n){this.sfx.cancel(),this.ui.toast(`${e}には だれも いない`,this.now,2500);return}const i=vu(this.grid,t,{x:this.px,y:this.py})[0]??{x:this.px,y:this.py};n.v.pullOut(this.now,i),this.sfx.confirm(),this.ui.toast(`${e}の 中に ${n.v.def.name}が いた！`,this.now,3500)}nearestActor(){let t=null,e=tt.player.interactRange;for(const n of this.actors){if(!n.v.alive||n.v.hidden)continue;const i=Math.hypot(n.v.x-this.px,n.v.y-this.py);i<=e&&(t=n,e=i)}return t}remainingQuestions(t){return this.phase!=="main"?Number.POSITIVE_INFINITY:tt.dialogue.maxQuestionsPerVillager-(this.questionsAsked.get(t.def.id)??0)}openDialogue(t){const e=t.v;e.paused=!0,e.faceToward(this.px,this.py),this.heroFacing=Math.atan2(e.x-this.px,e.y-this.py),this.talkingTo=e,this.sfx.confirm(),this.dialogue.show(e.def.name,this.remainingQuestions(e),this.now,n=>this.ask(e,n),()=>{e.alive&&(e.paused=!1),this.talkingTo=null})}ask(t,e){this.phase==="main"&&this.questionsAsked.set(t.def.id,(this.questionsAsked.get(t.def.id)??0)+1);const n=this.remainingQuestions(t),i=t.def.name,[r,o]=Bn[t.def.role].replyMs;let a=r+Math.random()*(o-r);const l=t.isDemon?tt.demon.hesitateChance:tt.villager.hesitateChance;if(Math.random()<l){const[u,d]=tt.demon.hesitateMsRange;a+=u+Math.random()*(d-u)}if(!t.isDemon)return{delayMs:a,text:pa(t.def.role,e,i),remaining:n};const h=Math.random()<tt.demon.offRoleLineChance?Nd(t.def.role,e,i):pa(t.def.role,e,i);return{delayMs:a,text:h,remaining:n}}slash(t){const e=t.v,n=this.now;if(this.slashReadyAt=n+tt.player.slashCooldownMs,this.heroFacing=Math.atan2(e.x-this.px,e.y-this.py),this.world.spawnFlash(e.x,e.y,e.isDemon?16724821:16777215),e.isDemon&&this.world.spawnDemonReveal(e.x,e.y),this.world.shake(140),this.sfx.slash(),e.slay(),t.view.startDying(),e.isDemon){const i=this.demons.filter(r=>r.alive).length;if(i===0){this.finish(!0,"悪魔を すべて 斬った！");return}this.sfx.demonSlain(),this.ui.toast(`${e.def.name}は 悪魔だった！　のこり ${i}体`,n)}else{if(this.misjudge++,this.misjudge>=tt.misjudgeLimit){this.finish(!1,`本物の 村人を ${tt.misjudgeLimit}回 斬り 村から 追いだされた……`);return}this.sfx.villagerSlain(),this.ui.toast(`${e.def.name}は 本物の 村人だった……（誤認 ${this.misjudge}/${tt.misjudgeLimit}）`,n)}}onSabotage(t){if(!(this.ended||this.state!=="playing")){this.ruin++;for(const e of this.actors)e.v.panic(this.now,this.now+tt.panic.durationMs),e.v.setRestless(this.ruin);if(this.world.addDamage(t.kind,t.damageAt.x,t.damageAt.y),t.kind==="well"?this.sfx.poison():t.kind==="storehouse"?this.sfx.fire():this.sfx.bellBreak(),this.ruin>=tt.ruin.gaugeMax){this.finish(!1,"村は 滅びに のまれた……");return}this.sfx.ruin(.5),this.bgm.setTempoScale(1+tt.audio.tempoUpPerRuin*this.ruin),this.ui.toast(t.message,this.now,6e3)}}startBlackout(){this.phase="blackout",this.phaseEndsAt=this.now+tt.phases.blackoutSec*1e3,this.dialogue.close(),this.world.setHighlight(null),this.ui.setPrompt(null);const t=this.actors.filter(n=>n.v.alive);for(let n=t.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[t[n],t[i]]=[t[i],t[n]]}const e=t.slice(0,tt.demonCount);this.demons=e.map(n=>n.v);for(const n of e)n.v.becomeDemon(this.phaseEndsAt);this.sfx.night(),this.bgm.stop(),this.ui.showBlackout(`夜が ふける……
村人の うち ${tt.demonCount}人が 悪魔と 入れかわった`)}startMain(){this.phase="main",this.phaseEndsAt=this.now+tt.phases.mainSec*1e3,this.questionsAsked.clear(),this.resetPlayer(),this.ui.hideBlackout(),this.sfx.start(),this.bgm.play("hunt",.7),this.ui.toast("本番：話して 観察して 悪魔を 見つけだせ！",this.now,6e3)}finish(t,e){this.ended||(this.ended=!0,this.bgm.stop(),this.dialogue.close(),this.world.setHighlight(null),this.ui.setPrompt(null),this.resultAt=this.now+900,this.resultData={won:t,reason:e,demons:this.demons.map(n=>({name:n.def.name,role:n.roleLabel,slain:!n.alive})),misjudge:this.misjudge,ruin:this.ruin,hard:this.level==="hard"})}showResult(){this.resultData&&(this.state="result",document.pointerLockElement&&document.exitPointerLock(),this.ui.setPlayingVisible(!1),this.ui.showResult(this.resultData),this.resultData.won?this.sfx.win():this.sfx.lose())}}async function UM(){const s=[...dl.map(e=>e.name),...Object.values(Bn).map(e=>e.gestureWord)].join("");try{await document.fonts.load('64px "DotGothic16"',s)}catch{}await lM();const t=new NM(Pe("app"));window.__game=t}UM();
