!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){t.exports={getRandom:function(t,e){return Math.random()*(e-t)+t},getRandomColor:function(){return"#"+Math.floor(16777215*Math.random()).toString(16)}}},function(t,e){t.exports=function t(e,n,o,r){t.prototype.overColor="#3C3C3C",t.prototype.outColor="black";const i=r,l=e.measureText(n).width;this.color="black",this.onDraw=function(t,e,o){this.x=e,this.y=o,t.save(),t.fillStyle=this.color,t.fillText(n,e,o+i),t.restore()},this.getText=function(){return n},this.getWidth=function(){return l},this.getHeight=function(){return i},this.contains=function(t,e){return null!=o&&t>=this.x&&e>=this.y&&this.x+l>t&&this.y+i>e},this.mouseOverHandler=function(){this.color=this.overColor},this.mouseOutHandler=function(){this.color=this.outColor},this.mouseClickHandler=function(){window.open(o,"_black")}}},function(t,e,n){const o=n(0);t.exports=function(t,e,n,r){this.color=r;var i=o.getRandom(.9,1.1),l=o.getRandom(.9,1.1);const u=o.getRandom(.001,.02),c=o.getRandom(.001,.02);var s=o.getRandom(1,10),a=o.getRandom(1,10),f=0;this.onDraw=function(o){o.save(),o.beginPath(),o.setTransform(1,0,0,1,t,e),o.scale(l+.9,i+.9),o.arc(0,0,200,0,2*Math.PI),o.globalAlpha=f,o.fillStyle=this.color,o.fill(),o.restore(),l=(Math.sin(s)/2+.5)*(1.1-.9),i=(Math.sin(a)/2+.5)*(1.1-.9),s+=u,a+=c,f<n&&(f+=.01)}}},function(t,e){t.exports=[{title:"Eugene Levenetc",url:null,type:"title"},{title:"",url:null,type:"blank"},{title:"Github",url:"https://github.com/elevenetc",type:"link"},{title:"StackOverflow",url:"http://stackoverflow.com/users/798165/eleven?tab=profile",type:"link"},{title:"LinkedIn",url:"https://www.linkedin.com/in/elevenets",type:"link"},{title:"500px",url:"https://500px.com/e-levenetc",type:"link"},{title:"Twitter",url:"https://twitter.com/elevenetc",type:"link"},{title:"Google+",url:"https://plus.google.com/+EugeneLevenetc/posts",type:"link"},{title:"Tumblr",url:"http://e-levenetc.tumblr.com",type:"link"}]},function(t,e,n){const o=n(3),r=n(2),i=n(0),l=n(1);!function(t){const e=document.getElementById(t),n=e.getContext("2d"),u=18,c=e.width/2,s=e.height/2,a=.8,f=20;n.font=u+"px Lucida Grande";const h=function(){for(var t=[],e=0;e<o.length;e++){var r=o[e];t.push(new l(n,r.title,r.url,u))}return t}(),p=function(){for(var t=[],e=0;e<f;e++)t.push(new r(c,s,a,i.getRandomColor()));return t}();e.addEventListener("mousemove",function(t){const n=e.getBoundingClientRect(),o=t.clientX-n.left,r=t.clientY-n.top;for(var i=!1,l=0;l<h.length;l++){var u=h[l];u.contains(o,r)?(i=!0,u.mouseOverHandler()):u.mouseOutHandler()}document.body.style.cursor=i?"pointer":"default"},!1),e.addEventListener("mousedown",function(t){const n=e.getBoundingClientRect(),o=t.clientX-n.left,r=t.clientY-n.top;for(var i=0;i<h.length;i++){var l=h[i];l.contains(o,r)&&l.mouseClickHandler()}},!1),window.requestAnimationFrame(function t(){n.clearRect(0,0,500,500),function(){n.globalCompositeOperation="screen";for(var t=0;t<p.length;t++)p[t].onDraw(n)}(),function(){n.globalCompositeOperation="source-over";var t=0;const e=h.length*u/2;for(var o=0;o<h.length;o++){var r=h[o],i=c-r.getWidth()/2,l=s-r.getHeight()/2+t;r.onDraw(n,i,l-e,o),t+=r.getHeight()+.3*u}}(),window.requestAnimationFrame(t)})}("canvas-container")}]);