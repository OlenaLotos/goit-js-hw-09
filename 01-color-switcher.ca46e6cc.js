var bodyRef=document.querySelector("body"),buttonStartChangeColorRef=document.querySelector("button[data-start]"),buttonStopChangeColorRef=document.querySelector("button[data-stop]"),timer={intervalId:null,isActive:!1,start:function(){this.isActive||(this.isActive=!0,this.intervalId=setInterval((function(){ChangeColorRef()}),1e3))},stop:function(){clearInterval(this.intervalId),this.isActive=!1}};function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}buttonStartChangeColorRef.addEventListener("click",(function(){timer.start()})),buttonStopChangeColorRef.addEventListener("click",(function(){timer.stop()}));var ChangeColorRef=function(){bodyRef.style.backgroundColor=getRandomHexColor()};
//# sourceMappingURL=01-color-switcher.ca46e6cc.js.map