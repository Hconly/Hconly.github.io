// build time:Tue Apr 02 2019 15:12:20 GMT+0800 (GMT+08:00)
var binft=function(t){function r(){return f[Math.floor(Math.random()*f.length)]}function e(){return String.fromCharCode(94*Math.random()+33)}function n(t){for(var n=document.createDocumentFragment(),i=0;t>i;i++){var l=document.createElement("span");l.textContent=e(),l.style.color=r(),n.appendChild(l)}return n}function i(){var r=a[c.skillI];c.step?c.step--:(c.step=o,c.prefixP<l.length?(c.prefixP>=0&&(c.text+=l[c.prefixP]),c.prefixP++):"forward"===c.direction?c.skillP<r.length?(c.text+=r[c.skillP],c.skillP++):c.delay?c.delay--:(c.direction="backward",c.delay=g):c.skillP>0?(c.text=c.text.slice(0,-1),c.skillP--):(c.skillI=(c.skillI+1)%a.length,c.direction="forward")),t.textContent=c.text,t.appendChild(n(c.prefixP<l.length?Math.min(b,b+c.prefixP):Math.min(b,r.length-c.skillP))),setTimeout(i,d)}var l="",a=["青青陵上柏，磊磊涧中石。","人生天地间，忽如远行客。","斗酒相娱乐，聊厚不为薄。","驱车策驽马，游戏宛与洛。","洛中何郁郁，冠带自相索。","长衢罗夹巷，王侯多第宅。","两宫遥相望，双阙百余尺。","极宴娱心意，戚戚何所迫？"].map(function(t){return t+""}),g=2,o=1,b=5,d=75,f=["rgb(110,64,170)","rgb(150,61,179)","rgb(191,60,175)","rgb(228,65,157)","rgb(254,75,131)","rgb(255,94,99)","rgb(255,120,71)","rgb(251,150,51)","rgb(226,183,47)","rgb(198,214,60)","rgb(175,240,91)","rgb(127,246,88)","rgb(82,246,103)","rgb(48,239,130)","rgb(29,223,163)","rgb(26,199,194)","rgb(35,171,216)","rgb(54,140,225)","rgb(76,110,219)","rgb(96,84,200)"],c={text:"",prefixP:-b,skillI:0,skillP:0,direction:"forward",delay:g,step:o};i()};binft(document.getElementById("binft"));
//rebuild by neat 