// build time:Tue Apr 02 2019 13:50:51 GMT+0800 (GMT+08:00)
function snowFall(t){t=t||{};this.maxFlake=t.maxFlake||200;this.flakeSize=t.flakeSize||10;this.fallSpeed=t.fallSpeed||1}requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};cancelAnimationFrame=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame||window.oCancelAnimationFrame;snowFall.prototype.start=function(){snowCanvas.apply(this);createFlakes.apply(this);drawSnow.apply(this)};function snowCanvas(){var t=document.createElement("canvas");t.id="snowfall";t.width=window.innerWidth;t.height=document.body.clientHeight;t.setAttribute("style","position:absolute; top: 0; left: 0; z-index: 1; pointer-events: none;");document.getElementsByTagName("body")[0].appendChild(t);this.canvas=t;this.ctx=t.getContext("2d");window.onresize=function(){t.width=window.innerWidth}}function flakeMove(t,e,i,a){this.x=Math.floor(Math.random()*t);this.y=Math.floor(Math.random()*e);this.size=Math.random()*i+2;this.maxSize=i;this.speed=Math.random()*1+a;this.fallSpeed=a;this.velY=this.speed;this.velX=0;this.stepSize=Math.random()/30;this.step=0}flakeMove.prototype.update=function(){var t=this.x,e=this.y;this.velX*=.98;if(this.velY<=this.speed){this.velY=this.speed}this.velX+=Math.cos(this.step+=.05)*this.stepSize;this.y+=this.velY;this.x+=this.velX;if(this.x>=canvas.width||this.x<=0||this.y>=canvas.height||this.y<=0){this.reset(canvas.width,canvas.height)}};flakeMove.prototype.reset=function(t,e){this.x=Math.floor(Math.random()*t);this.y=0;this.size=Math.random()*this.maxSize+2;this.speed=Math.random()*1+this.fallSpeed;this.velY=this.speed;this.velX=0};flakeMove.prototype.render=function(t){var e=t.createRadialGradient(this.x,this.y,0,this.x,this.y,this.size);e.addColorStop(0,"rgba(255, 255, 255, 0.9)");e.addColorStop(.5,"rgba(255, 255, 255, 0.5)");e.addColorStop(1,"rgba(255, 255, 255, 0)");t.save();t.fillStyle=e;t.beginPath();t.arc(this.x,this.y,this.size,0,Math.PI*2);t.fill();t.restore()};function createFlakes(){var t=this.maxFlake,e=this.flakes=[],i=this.canvas;for(var a=0;a<t;a++){e.push(new flakeMove(i.width,i.height,this.flakeSize,this.fallSpeed))}}function drawSnow(){var t=this.maxFlake,e=this.flakes;ctx=this.ctx,canvas=this.canvas,that=this;ctx.clearRect(0,0,canvas.width,canvas.height);for(var i=0;i<t;i++){e[i].update();e[i].render(ctx)}this.loop=requestAnimationFrame(function(){drawSnow.apply(that)})}var snow=new snowFall({maxFlake:60});snow.start();
//rebuild by neat 