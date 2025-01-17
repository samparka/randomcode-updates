/*
*Filename: ax.js
*Description: Global JS
*Version: v1.0.1(2020-12-23)
*Website:www.axui.cn or ax.hobly.cn
*Contact:3217728223@qq.com
*Author:Michael
*/
/* client */
var userAgentInfo = navigator.userAgent;
var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];
var platformIs = 'pc';
for (var v = 0; v < mobileAgents.length; v++) {
    if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
        platformIs = 'mobile';
        break;
    }
}
var clientIs = 'pc';
var screenWidth = window.screen.width;
var screenHeight = window.screen.height;
if(screenWidth < 500){
    clientIs = 'phone';
}else if(screenWidth > 500 && screenWidth < 900 ){
    clientIs = 'pad';
}else if(screenWidth > 900 && screenWidth < 1200){
    clientIs = 'padflip';
}else if(screenWidth > 1200 && screenWidth < 1500){
    clientIs = 'padpro';
}else{
    clientIs = 'pc';
}
/* jq.cookie.js */
jQuery.cookie=function(name,value,options){if(typeof value!="undefined"){options=options||{};if(value===null){value="";options=$.extend({},options);options.expires=-1}var expires="";if(options.expires&&(typeof options.expires=="number"||options.expires.toUTCString)){var date;if(typeof options.expires=="number"){date=new Date();date.setTime(date.getTime()+(options.expires*24*60*60*1000))}else{date=options.expires}expires="; expires="+date.toUTCString()}var path=options.path?"; path="+(options.path):"";var domain=options.domain?"; domain="+(options.domain):"";var secure=options.secure?"; secure":"";document.cookie=[name,"=",encodeURIComponent(value),expires,path,domain,secure].join("")}else{var cookieValue=null;if(document.cookie&&document.cookie!=""){var cookies=document.cookie.split(";");for(var i=0;i<cookies.length;i++){var cookie=jQuery.trim(cookies[i]);if(cookie.substring(0,name.length+1)==(name+"=")){cookieValue=decodeURIComponent(cookie.substring(name.length+1));break}}}return cookieValue}};
//scroll
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else if(typeof exports==="object"){module.exports=factory(require("jquery"))}else{factory(jQuery)}})(function(jQuery){"use strict";var domfocus=false,mousefocus=false,tabindexcounter=0,ascrailcounter=2e3,globalmaxzindex=0;var $=jQuery,_doc=document,_win=window,$window=$(_win);var delegatevents=[];function getScriptPath(){var scripts=_doc.currentScript||function(){var s=_doc.getElementsByTagName("script");return s.length?s[s.length-1]:false}();var path=scripts?scripts.src.split("?")[0]:"";return path.split("/").length>0?path.split("/").slice(0,-1).join("/")+"/":""}var setAnimationFrame=_win.requestAnimationFrame||_win.webkitRequestAnimationFrame||_win.mozRequestAnimationFrame||false;var clearAnimationFrame=_win.cancelAnimationFrame||_win.webkitCancelAnimationFrame||_win.mozCancelAnimationFrame||false;if(!setAnimationFrame){var anilasttime=0;setAnimationFrame=function(callback,element){var currTime=(new Date).getTime();var timeToCall=Math.max(0,16-(currTime-anilasttime));var id=_win.setTimeout(function(){callback(currTime+timeToCall)},timeToCall);anilasttime=currTime+timeToCall;return id};clearAnimationFrame=function(id){_win.clearTimeout(id)}}else{if(!_win.cancelAnimationFrame)clearAnimationFrame=function(id){}}var ClsMutationObserver=_win.MutationObserver||_win.WebKitMutationObserver||false;var now=Date.now||function(){return(new Date).getTime()};var _globaloptions={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"rgba(0,0,0,.3)",cursorwidth:"6px",cursorborder:"0px solid #fff",cursorborderradius:"0px",scrollspeed:40,mousescrollstep:9*3,touchbehavior:false,emulatetouch:false,hwacceleration:true,usetransition:true,boxzoom:false,dblclickzoom:true,gesturezoom:true,grabcursorenabled:true,autohidemode:true,background:"rgba(0,0,0,.04)",iframeautoresize:true,cursorminheight:32,preservenativescrolling:true,railoffset:false,railhoffset:false,bouncescroll:true,spacebarenabled:true,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:true,horizrailenabled:true,railalign:"right",railvalign:"bottom",enabletranslate3d:true,enablemousewheel:true,enablekeyboard:true,smoothscroll:true,sensitiverail:true,enablemouselockapi:true,cursorfixedheight:false,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:true,enablescrollonselection:true,overflowx:true,overflowy:true,cursordragspeed:.3,rtlmode:"auto",cursordragontouch:false,oneaxismousemode:"auto",scriptpath:getScriptPath(),preventmultitouchscrolling:true,disablemutationobserver:false,enableobserver:true,scrollbarid:false,scrollCLass:false};var browserdetected=false;var getBrowserDetection=function(){if(browserdetected)return browserdetected;var _el=_doc.createElement("DIV"),_style=_el.style,_agent=navigator.userAgent,_platform=navigator.platform,d={};d.haspointerlock="pointerLockElement"in _doc||"webkitPointerLockElement"in _doc||"mozPointerLockElement"in _doc;d.isopera="opera"in _win;d.isopera12=d.isopera&&"getUserMedia"in navigator;d.isoperamini=Object.prototype.toString.call(_win.operamini)==="[object OperaMini]";d.isie="all"in _doc&&"attachEvent"in _el&&!d.isopera;d.isieold=d.isie&&!("msInterpolationMode"in _style);d.isie7=d.isie&&!d.isieold&&(!("documentMode"in _doc)||_doc.documentMode===7);d.isie8=d.isie&&"documentMode"in _doc&&_doc.documentMode===8;d.isie9=d.isie&&"performance"in _win&&_doc.documentMode===9;d.isie10=d.isie&&"performance"in _win&&_doc.documentMode===10;d.isie11="msRequestFullscreen"in _el&&_doc.documentMode>=11;d.ismsedge="msCredentials"in _win;d.ismozilla="MozAppearance"in _style;d.iswebkit=!d.ismsedge&&"WebkitAppearance"in _style;d.ischrome=d.iswebkit&&"chrome"in _win;d.ischrome38=d.ischrome&&"touchAction"in _style;d.ischrome22=!d.ischrome38&&(d.ischrome&&d.haspointerlock);d.ischrome26=!d.ischrome38&&(d.ischrome&&"transition"in _style);d.cantouch="ontouchstart"in _doc.documentElement||"ontouchstart"in _win;d.hasw3ctouch=(_win.PointerEvent||false)&&(navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0);d.hasmstouch=!d.hasw3ctouch&&(_win.MSPointerEvent||false);d.ismac=/^mac$/i.test(_platform);d.isios=d.cantouch&&/iphone|ipad|ipod/i.test(_platform);d.isios4=d.isios&&!("seal"in Object);d.isios7=d.isios&&"webkitHidden"in _doc;d.isios8=d.isios&&"hidden"in _doc;d.isios10=d.isios&&_win.Proxy;d.isandroid=/android/i.test(_agent);d.haseventlistener="addEventListener"in _el;d.trstyle=false;d.hastransform=false;d.hastranslate3d=false;d.transitionstyle=false;d.hastransition=false;d.transitionend=false;d.trstyle="transform";d.hastransform="transform"in _style||function(){var check=["msTransform","webkitTransform","MozTransform","OTransform"];for(var a=0,c=check.length;a<c;a++){if(_style[check[a]]!==undefined){d.trstyle=check[a];break}}d.hastransform=!!d.trstyle}();if(d.hastransform){_style[d.trstyle]="translate3d(1px,2px,3px)";d.hastranslate3d=/translate3d/.test(_style[d.trstyle])}d.transitionstyle="transition";d.prefixstyle="";d.transitionend="transitionend";d.hastransition="transition"in _style||function(){d.transitionend=false;var check=["webkitTransition","msTransition","MozTransition","OTransition","OTransition","KhtmlTransition"];var prefix=["-webkit-","-ms-","-moz-","-o-","-o","-khtml-"];var evs=["webkitTransitionEnd","msTransitionEnd","transitionend","otransitionend","oTransitionEnd","KhtmlTransitionEnd"];for(var a=0,c=check.length;a<c;a++){if(check[a]in _style){d.transitionstyle=check[a];d.prefixstyle=prefix[a];d.transitionend=evs[a];break}}if(d.ischrome26)d.prefixstyle=prefix[1];d.hastransition=d.transitionstyle}();function detectCursorGrab(){var lst=["grab","-webkit-grab","-moz-grab"];if(d.ischrome&&!d.ischrome38||d.isie)lst=[];for(var a=0,l=lst.length;a<l;a++){var p=lst[a];_style.cursor=p;if(_style.cursor==p)return p}return"url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"}d.cursorgrabvalue=detectCursorGrab();d.hasmousecapture="setCapture"in _el;d.hasMutationObserver=ClsMutationObserver!==false;_el=null;browserdetected=d;return d};var AxScrollClass=function(myopt,me){var self=this;this.version="3.7.6";this.name="axscroll";this.me=me;var $body=$("body");var opt=this.opt={doc:$body,win:false};$.extend(opt,_globaloptions);opt.snapbackspeed=80;if(myopt||false){for(var a in opt){if(myopt[a]!==undefined)opt[a]=myopt[a]}}if(opt.disablemutationobserver)ClsMutationObserver=false;this.doc=opt.doc;this.iddoc=this.doc&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/^BODY|HTML/.test(opt.win?opt.win[0].nodeName:this.doc[0].nodeName);this.haswrapper=opt.win!==false;this.win=opt.win||(this.ispage?$window:this.doc);this.docscroll=this.ispage&&!this.haswrapper?$window:this.win;this.body=$body;this.viewport=false;this.isfixed=false;this.iframe=false;this.isiframe=this.doc[0].nodeName=="IFRAME"&&this.win[0].nodeName=="IFRAME";this.istextarea=this.win[0].nodeName=="TEXTAREA";this.forcescreen=false;this.canshowonmouseevent=opt.autohidemode!="scroll";this.onmousedown=false;this.onmouseup=false;this.onmousemove=false;this.onmousewheel=false;this.onkeypress=false;this.ongesturezoom=false;this.onclick=false;this.onscrollstart=false;this.onscrollend=false;this.onscrollcancel=false;this.onzoomin=false;this.onzoomout=false;this.view=false;this.page=false;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;if(opt.rtlmode=="auto"){var target=this.win[0]==_win?this.body:this.win;var writingMode=target.css("writing-mode")||target.css("-webkit-writing-mode")||target.css("-ms-writing-mode")||target.css("-moz-writing-mode");if(writingMode=="horizontal-tb"||writingMode=="lr-tb"||writingMode===""){this.isrtlmode=target.css("direction")=="rtl";this.isvertical=false}else{this.isrtlmode=writingMode=="vertical-rl"||writingMode=="tb"||writingMode=="tb-rl"||writingMode=="rl-tb";this.isvertical=writingMode=="vertical-rl"||writingMode=="tb"||writingMode=="tb-rl"}}else{this.isrtlmode=opt.rtlmode===true;this.isvertical=false}this.scrollrunning=false;this.scrollmom=false;this.observer=false;this.observerremover=false;this.observerbody=false;if(opt.scrollbarid!==false){this.id=opt.scrollbarid}else{do{this.id="ascrail"+ascrailcounter++}while(_doc.getElementById(this.id))}this.rail=false;this.cursor=false;this.cursorfreezed=false;this.selectiondrag=false;this.zoom=false;this.zoomactive=false;this.hasfocus=false;this.hasmousefocus=false;this.railslocked=false;this.locked=false;this.hidden=false;this.cursoractive=true;this.wheelprevented=false;this.overflowx=opt.overflowx;this.overflowy=opt.overflowy;this.nativescrollingarea=false;this.checkarea=0;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltax=0;this.lastdeltay=0;this.detected=getBrowserDetection();var cap=$.extend({},this.detected);this.canhwscroll=cap.hastransform&&opt.hwacceleration;this.ishwscroll=this.canhwscroll&&self.haswrapper;if(!this.isrtlmode){this.hasreversehr=false}else if(this.isvertical){this.hasreversehr=!(cap.iswebkit||cap.isie||cap.isie11)}else{this.hasreversehr=!(cap.iswebkit||cap.isie&&!cap.isie10&&!cap.isie11)}this.istouchcapable=false;if(!cap.cantouch&&(cap.hasw3ctouch||cap.hasmstouch)){this.istouchcapable=true}else if(cap.cantouch&&!cap.isios&&!cap.isandroid&&(cap.iswebkit||cap.ismozilla)){this.istouchcapable=true}if(!opt.enablemouselockapi){cap.hasmousecapture=false;cap.haspointerlock=false}this.debounced=function(name,fn,tm){if(!self)return;var dd=self.delaylist[name]||false;if(!dd){self.delaylist[name]={h:setAnimationFrame(function(){self.delaylist[name].fn.call(self);self.delaylist[name]=false},tm)};fn.call(self)}self.delaylist[name].fn=fn};this.synched=function(name,fn){if(self.synclist[name])self.synclist[name]=fn;else{self.synclist[name]=fn;setAnimationFrame(function(){if(!self)return;self.synclist[name]&&self.synclist[name].call(self);self.synclist[name]=null})}};this.unsynched=function(name){if(self.synclist[name])self.synclist[name]=false};this.css=function(el,pars){for(var n in pars){self.saved.css.push([el,n,el.css(n)]);el.css(n,pars[n])}};this.scrollTop=function(val){return val===undefined?self.getScrollTop():self.setScrollTop(val)};this.scrollLeft=function(val){return val===undefined?self.getScrollLeft():self.setScrollLeft(val)};var BezierClass=function(st,ed,spd,p1,p2,p3,p4){this.st=st;this.ed=ed;this.spd=spd;this.p1=p1||0;this.p2=p2||1;this.p3=p3||0;this.p4=p4||1;this.ts=now();this.df=ed-st};BezierClass.prototype={B2:function(t){return 3*(1-t)*(1-t)*t},B3:function(t){return 3*(1-t)*t*t},B4:function(t){return t*t*t},getPos:function(){return(now()-this.ts)/this.spd},getNow:function(){var pc=(now()-this.ts)/this.spd;var bz=this.B2(pc)+this.B3(pc)+this.B4(pc);return pc>=1?this.ed:this.st+this.df*bz|0},update:function(ed,spd){this.st=this.getNow();this.ed=ed;this.spd=spd;this.ts=now();this.df=this.ed-this.st;return this}};function getMatrixValues(){var tr=self.doc.css(cap.trstyle);if(tr&&tr.substr(0,6)=="matrix"){return tr.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/)}return false}if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};if(cap.hastranslate3d&&cap.isios)this.doc.css("-webkit-backface-visibility","hidden");this.getScrollTop=function(last){if(!last){var mtx=getMatrixValues();if(mtx)return mtx.length==16?-mtx[13]:-mtx[5];if(self.timerscroll&&self.timerscroll.bz)return self.timerscroll.bz.getNow()}return self.doc.translate.y};this.getScrollLeft=function(last){if(!last){var mtx=getMatrixValues();if(mtx)return mtx.length==16?-mtx[12]:-mtx[4];if(self.timerscroll&&self.timerscroll.bh)return self.timerscroll.bh.getNow()}return self.doc.translate.x};this.notifyScrollEvent=function(el){var e=_doc.createEvent("UIEvents");e.initUIEvent("scroll",false,false,_win,1);e.niceevent=true;el.dispatchEvent(e)};var cxscrollleft=this.isrtlmode?1:-1;if(cap.hastranslate3d&&opt.enabletranslate3d){this.setScrollTop=function(val,silent){self.doc.translate.y=val;self.doc.translate.ty=val*-1+"px";self.doc.css(cap.trstyle,"translate3d("+self.doc.translate.tx+","+self.doc.translate.ty+",0)");if(!silent)self.notifyScrollEvent(self.win[0])};this.setScrollLeft=function(val,silent){self.doc.translate.x=val;self.doc.translate.tx=val*cxscrollleft+"px";self.doc.css(cap.trstyle,"translate3d("+self.doc.translate.tx+","+self.doc.translate.ty+",0)");if(!silent)self.notifyScrollEvent(self.win[0])}}else{this.setScrollTop=function(val,silent){self.doc.translate.y=val;self.doc.translate.ty=val*-1+"px";self.doc.css(cap.trstyle,"translate("+self.doc.translate.tx+","+self.doc.translate.ty+")");if(!silent)self.notifyScrollEvent(self.win[0])};this.setScrollLeft=function(val,silent){self.doc.translate.x=val;self.doc.translate.tx=val*cxscrollleft+"px";self.doc.css(cap.trstyle,"translate("+self.doc.translate.tx+","+self.doc.translate.ty+")");if(!silent)self.notifyScrollEvent(self.win[0])}}}else{this.getScrollTop=function(){return self.docscroll.scrollTop()};this.setScrollTop=function(val){self.docscroll.scrollTop(val)};this.getScrollLeft=function(){var val;if(!self.hasreversehr){val=self.docscroll.scrollLeft()}else if(self.detected.ismozilla){val=self.page.maxw-Math.abs(self.docscroll.scrollLeft())}else{val=self.page.maxw-self.docscroll.scrollLeft()}return val};this.setScrollLeft=function(val){return setTimeout(function(){if(!self)return;if(self.hasreversehr){if(self.detected.ismozilla){val=-(self.page.maxw-val)}else{val=self.page.maxw-val}}return self.docscroll.scrollLeft(val)},1)}}this.getTarget=function(e){if(!e)return false;if(e.target)return e.target;if(e.srcElement)return e.srcElement;return false};this.hasParent=function(e,id){if(!e)return false;var el=e.target||e.srcElement||e||false;while(el&&el.id!=id){el=el.parentNode||false}return el!==false};function getZIndex(){var dom=self.win;if("zIndex"in dom)return dom.zIndex();while(dom.length>0){if(dom[0].nodeType==9)return false;var zi=dom.css("zIndex");if(!isNaN(zi)&&zi!==0)return parseInt(zi);dom=dom.parent()}return false}var _convertBorderWidth={thin:1,medium:3,thick:5};function getWidthToPixel(dom,prop,chkheight){var wd=dom.css(prop);var px=parseFloat(wd);if(isNaN(px)){px=_convertBorderWidth[wd]||0;var brd=px==3?chkheight?self.win.outerHeight()-self.win.innerHeight():self.win.outerWidth()-self.win.innerWidth():1;if(self.isie8&&px)px+=1;return brd?px:0}return px}this.getDocumentScrollOffset=function(){return{top:_win.pageYOffset||_doc.documentElement.scrollTop,left:_win.pageXOffset||_doc.documentElement.scrollLeft}};this.getOffset=function(){if(self.isfixed){var ofs=self.win.offset();var scrl=self.getDocumentScrollOffset();ofs.top-=scrl.top;ofs.left-=scrl.left;return ofs}var ww=self.win.offset();if(!self.viewport)return ww;var vp=self.viewport.offset();return{top:ww.top-vp.top,left:ww.left-vp.left}};this.updateScrollBar=function(len){var pos,off;if(self.ishwscroll){self.rail.css({height:self.win.innerHeight()-(opt.railpadding.top+opt.railpadding.bottom)});if(self.railh)self.railh.css({width:self.win.innerWidth()-(opt.railpadding.left+opt.railpadding.right)})}else{var wpos=self.getOffset();pos={top:wpos.top,left:wpos.left-(opt.railpadding.left+opt.railpadding.right)};pos.top+=getWidthToPixel(self.win,"border-top-width",true);pos.left+=self.rail.align?self.win.outerWidth()-getWidthToPixel(self.win,"border-right-width")-self.rail.width:getWidthToPixel(self.win,"border-left-width");off=opt.railoffset;if(off){if(off.top)pos.top+=off.top;if(off.left)pos.left+=off.left}if(!self.railslocked)self.rail.css({top:pos.top,left:pos.left,height:(len?len.h:self.win.innerHeight())-(opt.railpadding.top+opt.railpadding.bottom)});if(self.zoom){self.zoom.css({top:pos.top+1,left:self.rail.align==1?pos.left-20:pos.left+self.rail.width+4})}if(self.railh&&!self.railslocked){pos={top:wpos.top,left:wpos.left};off=opt.railhoffset;if(off){if(off.top)pos.top+=off.top;if(off.left)pos.left+=off.left}var y=self.railh.align?pos.top+getWidthToPixel(self.win,"border-top-width",true)+self.win.innerHeight()-self.railh.height:pos.top+getWidthToPixel(self.win,"border-top-width",true);var x=pos.left+getWidthToPixel(self.win,"border-left-width");self.railh.css({top:y-(opt.railpadding.top+opt.railpadding.bottom),left:x,width:self.railh.width})}}};this.doRailClick=function(e,dbl,hr){var fn,pg,cur,pos;if(self.railslocked)return;self.cancelEvent(e);if(!("pageY"in e)){e.pageX=e.clientX+_doc.documentElement.scrollLeft;e.pageY=e.clientY+_doc.documentElement.scrollTop}if(dbl){fn=hr?self.doScrollLeft:self.doScrollTop;cur=hr?(e.pageX-self.railh.offset().left-self.cursorwidth/2)*self.scrollratio.x:(e.pageY-self.rail.offset().top-self.cursorheight/2)*self.scrollratio.y;self.unsynched("relativexy");fn(cur|0)}else{fn=hr?self.doScrollLeftBy:self.doScrollBy;cur=hr?self.scroll.x:self.scroll.y;pos=hr?e.pageX-self.railh.offset().left:e.pageY-self.rail.offset().top;pg=hr?self.view.w:self.view.h;fn(cur>=pos?pg:-pg)}};self.newscrolly=self.newscrollx=0;self.hasanimationframe="requestAnimationFrame"in _win;self.hascancelanimationframe="cancelAnimationFrame"in _win;self.hasborderbox=false;this.init=function(){self.saved.css=[];if(cap.isoperamini)return true;if(cap.isandroid&&!("hidden"in _doc))return true;opt.emulatetouch=opt.emulatetouch||opt.touchbehavior;self.hasborderbox=_win.getComputedStyle&&_win.getComputedStyle(_doc.body)["box-sizing"]==="border-box";var _scrollyhidden={"overflow-y":"hidden"};if(cap.isie11||cap.isie10)_scrollyhidden["-ms-overflow-style"]="none";if(self.ishwscroll){this.doc.css(cap.transitionstyle,cap.prefixstyle+"transform 0ms ease-out");if(cap.transitionend)self.bind(self.doc,cap.transitionend,self.onScrollTransitionEnd,false)}self.zindex="auto";if(!self.ispage&&opt.zindex=="auto"){self.zindex=getZIndex()||"auto"}else{self.zindex=opt.zindex}if(!self.ispage&&self.zindex!="auto"&&self.zindex>globalmaxzindex){globalmaxzindex=self.zindex}if(self.isie&&self.zindex===0&&opt.zindex=="auto"){self.zindex="auto"}if(!self.ispage||!cap.isieold){var cont=self.docscroll;if(self.ispage)cont=self.haswrapper?self.win:self.doc;self.css(cont,_scrollyhidden);if(self.ispage&&(cap.isie11||cap.isie)){self.css($("html"),_scrollyhidden)}if(cap.isios&&!self.ispage&&!self.haswrapper)self.css($body,{"-webkit-overflow-scrolling":"touch"});var cursor=$(_doc.createElement("div"));cursor.css({position:"relative",top:0,float:"right",width:opt.cursorwidth,height:0,"background-color":opt.cursorcolor,border:opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":opt.cursorborderradius,"-moz-border-radius":opt.cursorborderradius,"border-radius":opt.cursorborderradius});cursor.addClass("axscroll-cursors");self.cursor=cursor;var rail=$(_doc.createElement("div"));rail.attr("id",self.id);rail.addClass("axscroll-rails axscroll-rails-vr");if(opt.scrollCLass){rail.addClass(opt.scrollCLass)}var v,a,kp=["left","right","top","bottom"];for(var n in kp){a=kp[n];v=opt.railpadding[a]||0;v&&rail.css("padding-"+a,v+"px")}rail.append(cursor);rail.width=Math.max(parseFloat(opt.cursorwidth),cursor.outerWidth());rail.css({width:rail.width+"px",zIndex:self.zindex,background:opt.background,cursor:"default"});rail.visibility=true;rail.scrollable=true;rail.align=opt.railalign=="left"?0:1;self.rail=rail;self.rail.drag=false;var zoom=false;if(opt.boxzoom&&!self.ispage&&!cap.isieold){zoom=_doc.createElement("div");self.bind(zoom,"click",self.doZoom);self.bind(zoom,"mouseenter",function(){self.zoom.css("opacity",opt.cursoropacitymax)});self.bind(zoom,"mouseleave",function(){self.zoom.css("opacity",opt.cursoropacitymin)});self.zoom=$(zoom);self.zoom.css({cursor:"pointer",zIndex:self.zindex,backgroundImage:"url("+opt.scriptpath+"zoomico.png)",height:18,width:18,backgroundPosition:"0 0"});if(opt.dblclickzoom)self.bind(self.win,"dblclick",self.doZoom);if(cap.cantouch&&opt.gesturezoom){self.ongesturezoom=function(e){if(e.scale>1.5)self.doZoomIn(e);if(e.scale<.8)self.doZoomOut(e);return self.cancelEvent(e)};self.bind(self.win,"gestureend",self.ongesturezoom)}}self.railh=false;var railh;if(opt.horizrailenabled){self.css(cont,{overflowX:"hidden"});cursor=$(_doc.createElement("div"));cursor.css({position:"absolute",top:0,height:opt.cursorwidth,width:0,backgroundColor:opt.cursorcolor,border:opt.cursorborder,backgroundClip:"padding-box","-webkit-border-radius":opt.cursorborderradius,"-moz-border-radius":opt.cursorborderradius,"border-radius":opt.cursorborderradius});if(cap.isieold)cursor.css("overflow","hidden");cursor.addClass("axscroll-cursors");self.cursorh=cursor;railh=$(_doc.createElement("div"));railh.attr("id",self.id+"-hr");railh.addClass("axscroll-rails axscroll-rails-hr");if(opt.scrollCLass){railh.addClass(opt.scrollCLass)}railh.height=Math.max(parseFloat(opt.cursorwidth),cursor.outerHeight());railh.css({height:railh.height+"px",zIndex:self.zindex,background:opt.background});railh.append(cursor);railh.visibility=true;railh.scrollable=true;railh.align=opt.railvalign=="top"?0:1;self.railh=railh;self.railh.drag=false}if(self.ispage){rail.css({position:"fixed",top:0,height:"100%"});rail.css(rail.align?{right:0}:{left:0});self.body.append(rail);if(self.railh){railh.css({position:"fixed",left:0,width:"100%"});railh.css(railh.align?{bottom:0}:{top:0});self.body.append(railh)}}else{if(self.ishwscroll){if(self.win.css("position")=="static")self.css(self.win,{position:"relative"});var bd=self.win[0].nodeName=="HTML"?self.body:self.win;$(bd).scrollTop(0).scrollLeft(0);if(self.zoom){self.zoom.css({position:"absolute",top:1,right:0,"margin-right":rail.width+4});bd.append(self.zoom)}rail.css({position:"absolute",top:0});rail.css(rail.align?{right:0}:{left:0});bd.append(rail);if(railh){railh.css({position:"absolute",left:0,bottom:0});railh.css(railh.align?{bottom:0}:{top:0});bd.append(railh)}}else{self.isfixed=self.win.css("position")=="fixed";var rlpos=self.isfixed?"fixed":"absolute";if(!self.isfixed)self.viewport=self.getViewport(self.win[0]);if(self.viewport){self.body=self.viewport;if(!/fixed|absolute/.test(self.viewport.css("position")))self.css(self.viewport,{position:"relative"})}rail.css({position:rlpos});if(self.zoom)self.zoom.css({position:rlpos});self.updateScrollBar();self.body.append(rail);if(self.zoom)self.body.append(self.zoom);if(self.railh){railh.css({position:rlpos});self.body.append(railh)}}if(cap.isios)self.css(self.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"});if(opt.disableoutline){if(cap.isie)self.win.attr("hideFocus","true");if(cap.iswebkit)self.win.css("outline","none")}}if(opt.autohidemode===false){self.autohidedom=false;self.rail.css({opacity:opt.cursoropacitymax});if(self.railh)self.railh.css({opacity:opt.cursoropacitymax})}else if(opt.autohidemode===true||opt.autohidemode==="leave"){self.autohidedom=$().add(self.rail);if(cap.isie8)self.autohidedom=self.autohidedom.add(self.cursor);if(self.railh)self.autohidedom=self.autohidedom.add(self.railh);if(self.railh&&cap.isie8)self.autohidedom=self.autohidedom.add(self.cursorh)}else if(opt.autohidemode=="scroll"){self.autohidedom=$().add(self.rail);if(self.railh)self.autohidedom=self.autohidedom.add(self.railh)}else if(opt.autohidemode=="cursor"){self.autohidedom=$().add(self.cursor);if(self.railh)self.autohidedom=self.autohidedom.add(self.cursorh)}else if(opt.autohidemode=="hidden"){self.autohidedom=false;self.hide();self.railslocked=false}if(cap.cantouch||self.istouchcapable||opt.emulatetouch||cap.hasmstouch){self.scrollmom=new ScrollMomentumClass2D(self);var delayedclick=null;self.ontouchstart=function(e){if(self.locked)return false;if(e.pointerType&&(e.pointerType==="mouse"||e.pointerType===e.MSPOINTER_TYPE_MOUSE))return false;self.hasmoving=false;if(self.scrollmom.timer){self.triggerScrollEnd();self.scrollmom.stop()}if(!self.railslocked){var tg=self.getTarget(e);if(tg){var skp=/INPUT/i.test(tg.nodeName)&&/range/i.test(tg.type);if(skp)return self.stopPropagation(e)}var ismouse=e.type==="mousedown";if(!("clientX"in e)&&"changedTouches"in e){e.clientX=e.changedTouches[0].clientX;e.clientY=e.changedTouches[0].clientY}if(self.forcescreen){var le=e;e={original:e.original?e.original:e};e.clientX=le.screenX;e.clientY=le.screenY}self.rail.drag={x:e.clientX,y:e.clientY,sx:self.scroll.x,sy:self.scroll.y,st:self.getScrollTop(),sl:self.getScrollLeft(),pt:2,dl:false,tg:tg};if(self.ispage||!opt.directionlockdeadzone){self.rail.drag.dl="f"}else{var view={w:$window.width(),h:$window.height()};var page=self.getContentSize();var maxh=page.h-view.h;var maxw=page.w-view.w;if(self.rail.scrollable&&!self.railh.scrollable)self.rail.drag.ck=maxh>0?"v":false;else if(!self.rail.scrollable&&self.railh.scrollable)self.rail.drag.ck=maxw>0?"h":false;else self.rail.drag.ck=false}if(opt.emulatetouch&&self.isiframe&&cap.isie){var wp=self.win.position();self.rail.drag.x+=wp.left;self.rail.drag.y+=wp.top}self.hasmoving=false;self.lastmouseup=false;self.scrollmom.reset(e.clientX,e.clientY);if(tg&&ismouse){var ip=/INPUT|SELECT|BUTTON|TEXTAREA/i.test(tg.nodeName);if(!ip){if(cap.hasmousecapture)tg.setCapture();if(opt.emulatetouch){if(tg.onclick&&!(tg._onclick||false)){tg._onclick=tg.onclick;tg.onclick=function(e){if(self.hasmoving)return false;tg._onclick.call(this,e)}}return self.cancelEvent(e)}return self.stopPropagation(e)}if(/SUBMIT|CANCEL|BUTTON/i.test($(tg).attr("type"))){self.preventclick={tg:tg,click:false}}}}};self.ontouchend=function(e){if(!self.rail.drag)return true;if(self.rail.drag.pt==2){if(e.pointerType&&(e.pointerType==="mouse"||e.pointerType===e.MSPOINTER_TYPE_MOUSE))return false;self.rail.drag=false;var ismouse=e.type==="mouseup";if(self.hasmoving){self.scrollmom.doMomentum();self.lastmouseup=true;self.hideCursor();if(cap.hasmousecapture)_doc.releaseCapture();if(ismouse)return self.cancelEvent(e)}}else if(self.rail.drag.pt==1){return self.onmouseup(e)}};var moveneedoffset=opt.emulatetouch&&self.isiframe&&!cap.hasmousecapture;var locktollerance=opt.directionlockdeadzone*.3|0;self.ontouchmove=function(e,byiframe){if(!self.rail.drag)return true;if(e.targetTouches&&opt.preventmultitouchscrolling){if(e.targetTouches.length>1)return true}if(e.pointerType&&(e.pointerType==="mouse"||e.pointerType===e.MSPOINTER_TYPE_MOUSE))return true;if(self.rail.drag.pt==2){if("changedTouches"in e){e.clientX=e.changedTouches[0].clientX;e.clientY=e.changedTouches[0].clientY}var ofy,ofx;ofx=ofy=0;if(moveneedoffset&&!byiframe){var wp=self.win.position();ofx=-wp.left;ofy=-wp.top}var fy=e.clientY+ofy;var my=fy-self.rail.drag.y;var fx=e.clientX+ofx;var mx=fx-self.rail.drag.x;var ny=self.rail.drag.st-my;if(self.ishwscroll&&opt.bouncescroll){if(ny<0){ny=Math.round(ny/2)}else if(ny>self.page.maxh){ny=self.page.maxh+Math.round((ny-self.page.maxh)/2)}}else{if(ny<0){ny=0;fy=0}else if(ny>self.page.maxh){ny=self.page.maxh;fy=0}if(fy===0&&!self.hasmoving){if(!self.ispage)self.rail.drag=false;return true}}var nx=self.getScrollLeft();if(self.railh&&self.railh.scrollable){nx=self.isrtlmode?mx-self.rail.drag.sl:self.rail.drag.sl-mx;if(self.ishwscroll&&opt.bouncescroll){if(nx<0){nx=Math.round(nx/2)}else if(nx>self.page.maxw){nx=self.page.maxw+Math.round((nx-self.page.maxw)/2)}}else{if(nx<0){nx=0;fx=0}if(nx>self.page.maxw){nx=self.page.maxw;fx=0}}}if(!self.hasmoving){if(self.rail.drag.y===e.clientY&&self.rail.drag.x===e.clientX)return self.cancelEvent(e);var ay=Math.abs(my);var ax=Math.abs(mx);var dz=opt.directionlockdeadzone;if(!self.rail.drag.ck){if(ay>dz&&ax>dz)self.rail.drag.dl="f";else if(ay>dz)self.rail.drag.dl=ax>locktollerance?"f":"v";else if(ax>dz)self.rail.drag.dl=ay>locktollerance?"f":"h"}else if(self.rail.drag.ck=="v"){if(ax>dz&&ay<=locktollerance){self.rail.drag=false}else if(ay>dz)self.rail.drag.dl="v"}else if(self.rail.drag.ck=="h"){if(ay>dz&&ax<=locktollerance){self.rail.drag=false}else if(ax>dz)self.rail.drag.dl="h"}if(!self.rail.drag.dl)return self.cancelEvent(e);self.triggerScrollStart(e.clientX,e.clientY,0,0,0);self.hasmoving=true}if(self.preventclick&&!self.preventclick.click){self.preventclick.click=self.preventclick.tg.onclick||false;self.preventclick.tg.onclick=self.onpreventclick}if(self.rail.drag.dl){if(self.rail.drag.dl=="v")nx=self.rail.drag.sl;else if(self.rail.drag.dl=="h")ny=self.rail.drag.st}self.synched("touchmove",function(){if(self.rail.drag&&self.rail.drag.pt==2){if(self.prepareTransition)self.resetTransition();if(self.rail.scrollable)self.setScrollTop(ny);self.scrollmom.update(fx,fy);if(self.railh&&self.railh.scrollable){self.setScrollLeft(nx);self.showCursor(ny,nx)}else{self.showCursor(ny)}if(cap.isie10)_doc.selection.clear()}});return self.cancelEvent(e)}else if(self.rail.drag.pt==1){return self.onmousemove(e)}};self.ontouchstartCursor=function(e,hronly){if(self.rail.drag&&self.rail.drag.pt!=3)return;if(self.locked)return self.cancelEvent(e);self.cancelScroll();self.rail.drag={x:e.touches[0].clientX,y:e.touches[0].clientY,sx:self.scroll.x,sy:self.scroll.y,pt:3,hr:!!hronly};var tg=self.getTarget(e);if(!self.ispage&&cap.hasmousecapture)tg.setCapture();if(self.isiframe&&!cap.hasmousecapture){self.saved.csspointerevents=self.doc.css("pointer-events");self.css(self.doc,{"pointer-events":"none"})}return self.cancelEvent(e)};self.ontouchendCursor=function(e){if(self.rail.drag){if(cap.hasmousecapture)_doc.releaseCapture();if(self.isiframe&&!cap.hasmousecapture)self.doc.css("pointer-events",self.saved.csspointerevents);if(self.rail.drag.pt!=3)return;self.rail.drag=false;return self.cancelEvent(e)}};self.ontouchmoveCursor=function(e){if(self.rail.drag){if(self.rail.drag.pt!=3)return;self.cursorfreezed=true;if(self.rail.drag.hr){self.scroll.x=self.rail.drag.sx+(e.touches[0].clientX-self.rail.drag.x);if(self.scroll.x<0)self.scroll.x=0;var mw=self.scrollvaluemaxw;if(self.scroll.x>mw)self.scroll.x=mw}else{self.scroll.y=self.rail.drag.sy+(e.touches[0].clientY-self.rail.drag.y);if(self.scroll.y<0)self.scroll.y=0;var my=self.scrollvaluemax;if(self.scroll.y>my)self.scroll.y=my}self.synched("touchmove",function(){if(self.rail.drag&&self.rail.drag.pt==3){self.showCursor();if(self.rail.drag.hr)self.doScrollLeft(Math.round(self.scroll.x*self.scrollratio.x),opt.cursordragspeed);else self.doScrollTop(Math.round(self.scroll.y*self.scrollratio.y),opt.cursordragspeed)}});return self.cancelEvent(e)}}}self.onmousedown=function(e,hronly){if(self.rail.drag&&self.rail.drag.pt!=1)return;if(self.railslocked)return self.cancelEvent(e);self.cancelScroll();self.rail.drag={x:e.clientX,y:e.clientY,sx:self.scroll.x,sy:self.scroll.y,pt:1,hr:hronly||false};var tg=self.getTarget(e);if(cap.hasmousecapture)tg.setCapture();if(self.isiframe&&!cap.hasmousecapture){self.saved.csspointerevents=self.doc.css("pointer-events");self.css(self.doc,{"pointer-events":"none"})}self.hasmoving=false;return self.cancelEvent(e)};self.onmouseup=function(e){if(self.rail.drag){if(self.rail.drag.pt!=1)return true;if(cap.hasmousecapture)_doc.releaseCapture();if(self.isiframe&&!cap.hasmousecapture)self.doc.css("pointer-events",self.saved.csspointerevents);self.rail.drag=false;self.cursorfreezed=false;if(self.hasmoving)self.triggerScrollEnd();return self.cancelEvent(e)}};self.onmousemove=function(e){if(self.rail.drag){if(self.rail.drag.pt!==1)return;if(cap.ischrome&&e.which===0)return self.onmouseup(e);self.cursorfreezed=true;if(!self.hasmoving)self.triggerScrollStart(e.clientX,e.clientY,0,0,0);self.hasmoving=true;if(self.rail.drag.hr){self.scroll.x=self.rail.drag.sx+(e.clientX-self.rail.drag.x);if(self.scroll.x<0)self.scroll.x=0;var mw=self.scrollvaluemaxw;if(self.scroll.x>mw)self.scroll.x=mw}else{self.scroll.y=self.rail.drag.sy+(e.clientY-self.rail.drag.y);if(self.scroll.y<0)self.scroll.y=0;var my=self.scrollvaluemax;if(self.scroll.y>my)self.scroll.y=my}self.synched("mousemove",function(){if(self.cursorfreezed){self.showCursor();if(self.rail.drag.hr){self.scrollLeft(Math.round(self.scroll.x*self.scrollratio.x))}else{self.scrollTop(Math.round(self.scroll.y*self.scrollratio.y))}}});return self.cancelEvent(e)}else{self.checkarea=0}};if(cap.cantouch||opt.emulatetouch){self.onpreventclick=function(e){if(self.preventclick){self.preventclick.tg.onclick=self.preventclick.click;self.preventclick=false;return self.cancelEvent(e)}};self.onclick=cap.isios?false:function(e){if(self.lastmouseup){self.lastmouseup=false;return self.cancelEvent(e)}else{return true}};if(opt.grabcursorenabled&&cap.cursorgrabvalue){self.css(self.ispage?self.doc:self.win,{cursor:cap.cursorgrabvalue});self.css(self.rail,{cursor:cap.cursorgrabvalue})}}else{var checkSelectionScroll=function(e){if(!self.selectiondrag)return;if(e){var ww=self.win.outerHeight();var df=e.pageY-self.selectiondrag.top;if(df>0&&df<ww)df=0;if(df>=ww)df-=ww;self.selectiondrag.df=df}if(self.selectiondrag.df===0)return;var rt=-(self.selectiondrag.df*2/6)|0;self.doScrollBy(rt);self.debounced("doselectionscroll",function(){checkSelectionScroll()},50)};if("getSelection"in _doc){self.hasTextSelected=function(){return _doc.getSelection().rangeCount>0}}else if("selection"in _doc){self.hasTextSelected=function(){return _doc.selection.type!="None"}}else{self.hasTextSelected=function(){return false}}self.onselectionstart=function(e){if(self.ispage)return;self.selectiondrag=self.win.offset()};self.onselectionend=function(e){self.selectiondrag=false};self.onselectiondrag=function(e){if(!self.selectiondrag)return;if(self.hasTextSelected())self.debounced("selectionscroll",function(){checkSelectionScroll(e)},250)}}if(cap.hasw3ctouch){self.css(self.ispage?$("html"):self.win,{"touch-action":"none"});self.css(self.rail,{"touch-action":"none"});self.css(self.cursor,{"touch-action":"none"});self.bind(self.win,"pointerdown",self.ontouchstart);self.bind(_doc,"pointerup",self.ontouchend);self.delegate(_doc,"pointermove",self.ontouchmove)}else if(cap.hasmstouch){self.css(self.ispage?$("html"):self.win,{"-ms-touch-action":"none"});self.css(self.rail,{"-ms-touch-action":"none"});self.css(self.cursor,{"-ms-touch-action":"none"});self.bind(self.win,"MSPointerDown",self.ontouchstart);self.bind(_doc,"MSPointerUp",self.ontouchend);self.delegate(_doc,"MSPointerMove",self.ontouchmove);self.bind(self.cursor,"MSGestureHold",function(e){e.preventDefault()});self.bind(self.cursor,"contextmenu",function(e){e.preventDefault()})}else if(cap.cantouch){self.bind(self.win,"touchstart",self.ontouchstart,false,true);self.bind(_doc,"touchend",self.ontouchend,false,true);self.bind(_doc,"touchcancel",self.ontouchend,false,true);self.delegate(_doc,"touchmove",self.ontouchmove,false,true)}if(opt.emulatetouch){self.bind(self.win,"mousedown",self.ontouchstart,false,true);self.bind(_doc,"mouseup",self.ontouchend,false,true);self.bind(_doc,"mousemove",self.ontouchmove,false,true)}if(opt.cursordragontouch||!cap.cantouch&&!opt.emulatetouch){self.rail.css({cursor:"default"});self.railh&&self.railh.css({cursor:"default"});self.jqbind(self.rail,"mouseenter",function(){if(!self.ispage&&!self.win.is(":visible"))return false;if(self.canshowonmouseevent)self.showCursor();self.rail.active=true});self.jqbind(self.rail,"mouseleave",function(){self.rail.active=false;if(!self.rail.drag)self.hideCursor()});if(opt.sensitiverail){self.bind(self.rail,"click",function(e){self.doRailClick(e,false,false)});self.bind(self.rail,"dblclick",function(e){self.doRailClick(e,true,false)});self.bind(self.cursor,"click",function(e){self.cancelEvent(e)});self.bind(self.cursor,"dblclick",function(e){self.cancelEvent(e)})}if(self.railh){self.jqbind(self.railh,"mouseenter",function(){if(!self.ispage&&!self.win.is(":visible"))return false;if(self.canshowonmouseevent)self.showCursor();self.rail.active=true});self.jqbind(self.railh,"mouseleave",function(){self.rail.active=false;if(!self.rail.drag)self.hideCursor()});if(opt.sensitiverail){self.bind(self.railh,"click",function(e){self.doRailClick(e,false,true)});self.bind(self.railh,"dblclick",function(e){self.doRailClick(e,true,true)});self.bind(self.cursorh,"click",function(e){self.cancelEvent(e)});self.bind(self.cursorh,"dblclick",function(e){self.cancelEvent(e)})}}}if(opt.cursordragontouch&&(this.istouchcapable||cap.cantouch)){self.bind(self.cursor,"touchstart",self.ontouchstartCursor);self.bind(self.cursor,"touchmove",self.ontouchmoveCursor);self.bind(self.cursor,"touchend",self.ontouchendCursor);self.cursorh&&self.bind(self.cursorh,"touchstart",function(e){self.ontouchstartCursor(e,true)});self.cursorh&&self.bind(self.cursorh,"touchmove",self.ontouchmoveCursor);self.cursorh&&self.bind(self.cursorh,"touchend",self.ontouchendCursor)}if(!opt.emulatetouch&&!cap.isandroid&&!cap.isios){self.bind(cap.hasmousecapture?self.win:_doc,"mouseup",self.onmouseup);self.bind(_doc,"mousemove",self.onmousemove);if(self.onclick)self.bind(_doc,"click",self.onclick);self.bind(self.cursor,"mousedown",self.onmousedown);self.bind(self.cursor,"mouseup",self.onmouseup);if(self.railh){self.bind(self.cursorh,"mousedown",function(e){self.onmousedown(e,true)});self.bind(self.cursorh,"mouseup",self.onmouseup)}if(!self.ispage&&opt.enablescrollonselection){self.bind(self.win[0],"mousedown",self.onselectionstart);self.bind(_doc,"mouseup",self.onselectionend);self.bind(self.cursor,"mouseup",self.onselectionend);if(self.cursorh)self.bind(self.cursorh,"mouseup",self.onselectionend);self.bind(_doc,"mousemove",self.onselectiondrag)}if(self.zoom){self.jqbind(self.zoom,"mouseenter",function(){if(self.canshowonmouseevent)self.showCursor();self.rail.active=true});self.jqbind(self.zoom,"mouseleave",function(){self.rail.active=false;if(!self.rail.drag)self.hideCursor()})}}else{self.bind(cap.hasmousecapture?self.win:_doc,"mouseup",self.ontouchend);if(self.onclick)self.bind(_doc,"click",self.onclick);if(opt.cursordragontouch){self.bind(self.cursor,"mousedown",self.onmousedown);self.bind(self.cursor,"mouseup",self.onmouseup);self.cursorh&&self.bind(self.cursorh,"mousedown",function(e){self.onmousedown(e,true)});self.cursorh&&self.bind(self.cursorh,"mouseup",self.onmouseup)}else{self.bind(self.rail,"mousedown",function(e){e.preventDefault()});self.railh&&self.bind(self.railh,"mousedown",function(e){e.preventDefault()})}}if(opt.enablemousewheel){if(!self.isiframe)self.mousewheel(cap.isie&&self.ispage?_doc:self.win,self.onmousewheel);self.mousewheel(self.rail,self.onmousewheel);if(self.railh)self.mousewheel(self.railh,self.onmousewheelhr)}if(!self.ispage&&!cap.cantouch&&!/HTML|^BODY/.test(self.win[0].nodeName)){if(!self.win.attr("tabindex"))self.win.attr({tabindex:++tabindexcounter});self.bind(self.win,"focus",function(e){domfocus=self.getTarget(e).id||self.getTarget(e)||false;self.hasfocus=true;if(self.canshowonmouseevent)self.noticeCursor()});self.bind(self.win,"blur",function(e){domfocus=false;self.hasfocus=false});self.bind(self.win,"mouseenter",function(e){mousefocus=self.getTarget(e).id||self.getTarget(e)||false;self.hasmousefocus=true;if(self.canshowonmouseevent)self.noticeCursor()});self.bind(self.win,"mouseleave",function(e){mousefocus=false;self.hasmousefocus=false;if(!self.rail.drag)self.hideCursor()})}self.onkeypress=function(e){if(self.railslocked&&self.page.maxh===0)return true;e=e||_win.event;var tg=self.getTarget(e);if(tg&&/INPUT|TEXTAREA|SELECT|OPTION/.test(tg.nodeName)){var tp=tg.getAttribute("type")||tg.type||false;if(!tp||!/submit|button|cancel/i.tp)return true}if($(tg).attr("contenteditable"))return true;if(self.hasfocus||self.hasmousefocus&&!domfocus||self.ispage&&!domfocus&&!mousefocus){var key=e.keyCode;if(self.railslocked&&key!=27)return self.cancelEvent(e);var ctrl=e.ctrlKey||false;var shift=e.shiftKey||false;var ret=false;switch(key){case 38:case 63233:self.doScrollBy(24*3);ret=true;break;case 40:case 63235:self.doScrollBy(-24*3);ret=true;break;case 37:case 63232:if(self.railh){ctrl?self.doScrollLeft(0):self.doScrollLeftBy(24*3);ret=true}break;case 39:case 63234:if(self.railh){ctrl?self.doScrollLeft(self.page.maxw):self.doScrollLeftBy(-24*3);ret=true}break;case 33:case 63276:self.doScrollBy(self.view.h);ret=true;break;case 34:case 63277:self.doScrollBy(-self.view.h);ret=true;break;case 36:case 63273:self.railh&&ctrl?self.doScrollPos(0,0):self.doScrollTo(0);ret=true;break;case 35:case 63275:self.railh&&ctrl?self.doScrollPos(self.page.maxw,self.page.maxh):self.doScrollTo(self.page.maxh);ret=true;break;case 32:if(opt.spacebarenabled){shift?self.doScrollBy(self.view.h):self.doScrollBy(-self.view.h);ret=true}break;case 27:if(self.zoomactive){self.doZoom();ret=true}break}if(ret)return self.cancelEvent(e)}};if(opt.enablekeyboard)self.bind(_doc,cap.isopera&&!cap.isopera12?"keypress":"keydown",self.onkeypress);self.bind(_doc,"keydown",function(e){var ctrl=e.ctrlKey||false;if(ctrl)self.wheelprevented=true});self.bind(_doc,"keyup",function(e){var ctrl=e.ctrlKey||false;if(!ctrl)self.wheelprevented=false});self.bind(_win,"blur",function(e){self.wheelprevented=false});self.bind(_win,"resize",self.onscreenresize);self.bind(_win,"orientationchange",self.onscreenresize);self.bind(_win,"load",self.lazyResize);if(cap.ischrome&&!self.ispage&&!self.haswrapper){var tmp=self.win.attr("style");var ww=parseFloat(self.win.css("width"))+1;self.win.css("width",ww);self.synched("chromefix",function(){self.win.attr("style",tmp)})}self.onAttributeChange=function(e){self.lazyResize(self.isieold?250:30)};if(opt.enableobserver){if(!self.isie11&&ClsMutationObserver!==false){self.observerbody=new ClsMutationObserver(function(mutations){mutations.forEach(function(mut){if(mut.type=="attributes"){return $body.hasClass("modal-open")&&$body.hasClass("modal-dialog")&&!$.contains($(".modal-dialog")[0],self.doc[0])?self.hide():self.show()}});if(self.me.clientWidth!=self.page.width||self.me.clientHeight!=self.page.height)return self.lazyResize(30)});self.observerbody.observe(_doc.body,{childList:true,subtree:true,characterData:false,attributes:true,attributeFilter:["class"]})}if(!self.ispage&&!self.haswrapper){var _dom=self.win[0];if(ClsMutationObserver!==false){self.observer=new ClsMutationObserver(function(mutations){mutations.forEach(self.onAttributeChange)});self.observer.observe(_dom,{childList:true,characterData:false,attributes:true,subtree:false});self.observerremover=new ClsMutationObserver(function(mutations){mutations.forEach(function(mo){if(mo.removedNodes.length>0){for(var dd in mo.removedNodes){if(!!self&&mo.removedNodes[dd]===_dom)return self.remove()}}})});self.observerremover.observe(_dom.parentNode,{childList:true,characterData:false,attributes:false,subtree:false})}else{self.bind(_dom,cap.isie&&!cap.isie9?"propertychange":"DOMAttrModified",self.onAttributeChange);if(cap.isie9)_dom.attachEvent("onpropertychange",self.onAttributeChange);self.bind(_dom,"DOMNodeRemoved",function(e){if(e.target===_dom)self.remove()})}}}if(!self.ispage&&opt.boxzoom)self.bind(_win,"resize",self.resizeZoom);if(self.istextarea){self.bind(self.win,"keydown",self.lazyResize);self.bind(self.win,"mouseup",self.lazyResize)}self.lazyResize(30)}if(this.doc[0].nodeName=="IFRAME"){var oniframeload=function(){self.iframexd=false;var doc;try{doc="contentDocument"in this?this.contentDocument:this.contentWindow._doc;var a=doc.domain}catch(e){self.iframexd=true;doc=false}if(self.iframexd){if("console"in _win)console.log("AxScroll error: policy restriced iframe");return true}self.forcescreen=true;if(self.isiframe){self.iframe={doc:$(doc),html:self.doc.contents().find("html")[0],body:self.doc.contents().find("body")[0]};self.getContentSize=function(){return{w:Math.max(self.iframe.html.scrollWidth,self.iframe.body.scrollWidth),h:Math.max(self.iframe.html.scrollHeight,self.iframe.body.scrollHeight)}};self.docscroll=$(self.iframe.body)}if(!cap.isios&&opt.iframeautoresize&&!self.isiframe){self.win.scrollTop(0);self.doc.height("");var hh=Math.max(doc.getElementsByTagName("html")[0].scrollHeight,doc.body.scrollHeight);self.doc.height(hh)}self.lazyResize(30);self.css($(self.iframe.body),_scrollyhidden);if(cap.isios&&self.haswrapper){self.css($(doc.body),{"-webkit-transform":"translate3d(0,0,0)"})}if("contentWindow"in this){self.bind(this.contentWindow,"scroll",self.onscroll)}else{self.bind(doc,"scroll",self.onscroll)}if(opt.enablemousewheel){self.mousewheel(doc,self.onmousewheel)}if(opt.enablekeyboard)self.bind(doc,cap.isopera?"keypress":"keydown",self.onkeypress);if(cap.cantouch){self.bind(doc,"touchstart",self.ontouchstart);self.bind(doc,"touchmove",self.ontouchmove)}else if(opt.emulatetouch){self.bind(doc,"mousedown",self.ontouchstart);self.bind(doc,"mousemove",function(e){return self.ontouchmove(e,true)});if(opt.grabcursorenabled&&cap.cursorgrabvalue)self.css($(doc.body),{cursor:cap.cursorgrabvalue})}self.bind(doc,"mouseup",self.ontouchend);if(self.zoom){if(opt.dblclickzoom)self.bind(doc,"dblclick",self.doZoom);if(self.ongesturezoom)self.bind(doc,"gestureend",self.ongesturezoom)}};if(this.doc[0].readyState&&this.doc[0].readyState==="complete"){setTimeout(function(){oniframeload.call(self.doc[0],false)},500)}self.bind(this.doc,"load",oniframeload)}};this.showCursor=function(py,px){if(self.cursortimeout){clearTimeout(self.cursortimeout);self.cursortimeout=0}if(!self.rail)return;if(self.autohidedom){self.autohidedom.stop().css({opacity:opt.cursoropacitymax});self.cursoractive=true}if(!self.rail.drag||self.rail.drag.pt!=1){if(py!==undefined&&py!==false){self.scroll.y=py/self.scrollratio.y|0}if(px!==undefined){self.scroll.x=px/self.scrollratio.x|0}}self.cursor.css({height:self.cursorheight,top:self.scroll.y});if(self.cursorh){var lx=self.hasreversehr?self.scrollvaluemaxw-self.scroll.x:self.scroll.x;self.cursorh.css({width:self.cursorwidth,left:!self.rail.align&&self.rail.visibility?lx+self.rail.width:lx});self.cursoractive=true}if(self.zoom)self.zoom.stop().css({opacity:opt.cursoropacitymax})};this.hideCursor=function(tm){if(self.cursortimeout)return;if(!self.rail)return;if(!self.autohidedom)return;if(self.hasmousefocus&&opt.autohidemode==="leave")return;self.cursortimeout=setTimeout(function(){if(!self.rail.active||!self.showonmouseevent){self.autohidedom.stop().animate({opacity:opt.cursoropacitymin});if(self.zoom)self.zoom.stop().animate({opacity:opt.cursoropacitymin});self.cursoractive=false}self.cursortimeout=0},tm||opt.hidecursordelay)};this.noticeCursor=function(tm,py,px){self.showCursor(py,px);if(!self.rail.active)self.hideCursor(tm)};this.getContentSize=self.ispage?function(){return{w:Math.max(_doc.body.scrollWidth,_doc.documentElement.scrollWidth),h:Math.max(_doc.body.scrollHeight,_doc.documentElement.scrollHeight)}}:self.haswrapper?function(){return{w:self.doc[0].offsetWidth,h:self.doc[0].offsetHeight}}:function(){return{w:self.docscroll[0].scrollWidth,h:self.docscroll[0].scrollHeight}};this.onResize=function(e,page){if(!self||!self.win)return false;var premaxh=self.page.maxh,premaxw=self.page.maxw,previewh=self.view.h,previeww=self.view.w;self.view={w:self.ispage?self.win.width():self.win[0].clientWidth,h:self.ispage?self.win.height():self.win[0].clientHeight};self.page=page?page:self.getContentSize();self.page.maxh=Math.max(0,self.page.h-self.view.h);self.page.maxw=Math.max(0,self.page.w-self.view.w);if(self.page.maxh==premaxh&&self.page.maxw==premaxw&&self.view.w==previeww&&self.view.h==previewh){if(!self.ispage){var pos=self.win.offset();if(self.lastposition){var lst=self.lastposition;if(lst.top==pos.top&&lst.left==pos.left)return self}self.lastposition=pos}else{return self}}if(self.page.maxh===0){self.hideRail();self.scrollvaluemax=0;self.scroll.y=0;self.scrollratio.y=0;self.cursorheight=0;self.setScrollTop(0);if(self.rail)self.rail.scrollable=false}else{self.page.maxh-=opt.railpadding.top+opt.railpadding.bottom;self.rail.scrollable=true}if(self.page.maxw===0){self.hideRailHr();self.scrollvaluemaxw=0;self.scroll.x=0;self.scrollratio.x=0;self.cursorwidth=0;self.setScrollLeft(0);if(self.railh){self.railh.scrollable=false}}else{self.page.maxw-=opt.railpadding.left+opt.railpadding.right;if(self.railh)self.railh.scrollable=opt.horizrailenabled}self.railslocked=self.locked||self.page.maxh===0&&self.page.maxw===0;if(self.railslocked){if(!self.ispage)self.updateScrollBar(self.view);return false}if(!self.hidden){if(!self.rail.visibility)self.showRail();if(self.railh&&!self.railh.visibility)self.showRailHr()}if(self.istextarea&&self.win.css("resize")&&self.win.css("resize")!="none")self.view.h-=20;self.cursorheight=Math.min(self.view.h,Math.round(self.view.h*(self.view.h/self.page.h)));self.cursorheight=opt.cursorfixedheight?opt.cursorfixedheight:Math.max(opt.cursorminheight,self.cursorheight);self.cursorwidth=Math.min(self.view.w,Math.round(self.view.w*(self.view.w/self.page.w)));self.cursorwidth=opt.cursorfixedheight?opt.cursorfixedheight:Math.max(opt.cursorminheight,self.cursorwidth);self.scrollvaluemax=self.view.h-self.cursorheight-(opt.railpadding.top+opt.railpadding.bottom);if(!self.hasborderbox)self.scrollvaluemax-=self.cursor[0].offsetHeight-self.cursor[0].clientHeight;if(self.railh){self.railh.width=self.page.maxh>0?self.view.w-self.rail.width:self.view.w;self.scrollvaluemaxw=self.railh.width-self.cursorwidth-(opt.railpadding.left+opt.railpadding.right)}if(!self.ispage)self.updateScrollBar(self.view);self.scrollratio={x:self.page.maxw/self.scrollvaluemaxw,y:self.page.maxh/self.scrollvaluemax};var sy=self.getScrollTop();if(sy>self.page.maxh){self.doScrollTop(self.page.maxh)}else{self.scroll.y=self.getScrollTop()/self.scrollratio.y|0;self.scroll.x=self.getScrollLeft()/self.scrollratio.x|0;if(self.cursoractive)self.noticeCursor()}if(self.scroll.y&&self.getScrollTop()===0)self.doScrollTo(self.scroll.y*self.scrollratio.y|0);return self};this.resize=self.onResize;var hlazyresize=0;this.onscreenresize=function(e){clearTimeout(hlazyresize);var hiderails=!self.ispage&&!self.haswrapper;if(hiderails)self.hideRails();hlazyresize=setTimeout(function(){if(self){if(hiderails)self.showRails();self.resize()}hlazyresize=0},120)};this.lazyResize=function(tm){clearTimeout(hlazyresize);tm=isNaN(tm)?240:tm;hlazyresize=setTimeout(function(){self&&self.resize();hlazyresize=0},tm);return self};function _modernWheelEvent(dom,name,fn,bubble){self._bind(dom,name,function(e){e=e||_win.event;var event={original:e,target:e.target||e.srcElement,type:"wheel",deltaMode:e.type=="MozMousePixelScroll"?0:1,deltaX:0,deltaZ:0,preventDefault:function(){e.preventDefault?e.preventDefault():e.returnValue=false;return false},stopImmediatePropagation:function(){e.stopImmediatePropagation?e.stopImmediatePropagation():e.cancelBubble=true}};if(name=="mousewheel"){e.wheelDeltaX&&(event.deltaX=-1/40*e.wheelDeltaX);e.wheelDeltaY&&(event.deltaY=-1/40*e.wheelDeltaY);!event.deltaY&&!event.deltaX&&(event.deltaY=-1/40*e.wheelDelta)}else{event.deltaY=e.detail}return fn.call(dom,event)},bubble)}this.jqbind=function(dom,name,fn){self.events.push({e:dom,n:name,f:fn,q:true});$(dom).on(name,fn)};this.mousewheel=function(dom,fn,bubble){var el="jquery"in dom?dom[0]:dom;if("onwheel"in _doc.createElement("div")){self._bind(el,"wheel",fn,bubble||false)}else{var wname=_doc.onmousewheel!==undefined?"mousewheel":"DOMMouseScroll";_modernWheelEvent(el,wname,fn,bubble||false);if(wname=="DOMMouseScroll")_modernWheelEvent(el,"MozMousePixelScroll",fn,bubble||false)}};var passiveSupported=false;if(cap.haseventlistener){try{var options=Object.defineProperty({},"passive",{get:function(){passiveSupported=!0}});_win.addEventListener("test",null,options)}catch(err){}this.stopPropagation=function(e){if(!e)return false;e=e.original?e.original:e;e.stopPropagation();return false};this.cancelEvent=function(e){if(e.cancelable)e.preventDefault();e.stopImmediatePropagation();if(e.preventManipulation)e.preventManipulation();return false}}else{Event.prototype.preventDefault=function(){this.returnValue=false};Event.prototype.stopPropagation=function(){this.cancelBubble=true};_win.constructor.prototype.addEventListener=_doc.constructor.prototype.addEventListener=Element.prototype.addEventListener=function(type,listener,useCapture){this.attachEvent("on"+type,listener)};_win.constructor.prototype.removeEventListener=_doc.constructor.prototype.removeEventListener=Element.prototype.removeEventListener=function(type,listener,useCapture){this.detachEvent("on"+type,listener)};this.cancelEvent=function(e){e=e||_win.event;if(e){e.cancelBubble=true;e.cancel=true;e.returnValue=false}return false};this.stopPropagation=function(e){e=e||_win.event;if(e)e.cancelBubble=true;return false}}this.delegate=function(dom,name,fn,bubble,active){var de=delegatevents[name]||false;if(!de){de={a:[],l:[],f:function(e){var lst=de.l,l=lst.length-1;var r=false;for(var a=l;a>=0;a--){r=lst[a].call(e.target,e);if(r===false)return false}return r}};self.bind(dom,name,de.f,bubble,active);delegatevents[name]=de}if(self.ispage){de.a=[self.id].concat(de.a);de.l=[fn].concat(de.l)}else{de.a.push(self.id);de.l.push(fn)}};this.undelegate=function(dom,name,fn,bubble,active){var de=delegatevents[name]||false;if(de&&de.l){for(var a=0,l=de.l.length;a<l;a++){if(de.a[a]===self.id){de.a.splice(a);de.l.splice(a);if(de.a.length===0){self._unbind(dom,name,de.l.f);delegatevents[name]=null}}}}};this.bind=function(dom,name,fn,bubble,active){var el="jquery"in dom?dom[0]:dom;self._bind(el,name,fn,bubble||false,active||false)};this._bind=function(el,name,fn,bubble,active){self.events.push({e:el,n:name,f:fn,b:bubble,q:false});passiveSupported&&(active||el==window.document||el==window.document.body||el==window)?el.addEventListener(name,fn,{passive:false,capture:bubble}):el.addEventListener(name,fn,bubble||false)};this._unbind=function(el,name,fn,bub){if(delegatevents[name])self.undelegate(el,name,fn,bub);else el.removeEventListener(name,fn,bub)};this.unbindAll=function(){for(var a=0;a<self.events.length;a++){var r=self.events[a];r.q?r.e.unbind(r.n,r.f):self._unbind(r.e,r.n,r.f,r.b)}};this.showRails=function(){return self.showRail().showRailHr()};this.showRail=function(){if(self.page.maxh!==0&&(self.ispage||self.win.css("display")!="none")){self.rail.visibility=true;self.rail.css("display","block")}return self};this.showRailHr=function(){if(self.railh){if(self.page.maxw!==0&&(self.ispage||self.win.css("display")!="none")){self.railh.visibility=true;self.railh.css("display","block")}}return self};this.hideRails=function(){return self.hideRail().hideRailHr()};this.hideRail=function(){self.rail.visibility=false;self.rail.css("display","none");return self};this.hideRailHr=function(){if(self.railh){self.railh.visibility=false;self.railh.css("display","none")}return self};this.show=function(){self.hidden=false;self.railslocked=false;return self.showRails()};this.hide=function(){self.hidden=true;self.railslocked=true;return self.hideRails()};this.toggle=function(){return self.hidden?self.show():self.hide()};this.remove=function(){self.stop();if(self.cursortimeout)clearTimeout(self.cursortimeout);for(var n in self.delaylist)if(self.delaylist[n])clearAnimationFrame(self.delaylist[n].h);self.doZoomOut();self.unbindAll();if(cap.isie9)self.win[0].detachEvent("onpropertychange",self.onAttributeChange);if(self.observer!==false)self.observer.disconnect();if(self.observerremover!==false)self.observerremover.disconnect();if(self.observerbody!==false)self.observerbody.disconnect();self.events=null;if(self.cursor){self.cursor.remove()}if(self.cursorh){self.cursorh.remove()}if(self.rail){self.rail.remove()}if(self.railh){self.railh.remove()}if(self.zoom){self.zoom.remove()}for(var a=0;a<self.saved.css.length;a++){var d=self.saved.css[a];d[0].css(d[1],d[2]===undefined?"":d[2])}self.saved=false;self.me.data("__axscroll","");var lst=$.axscroll;lst.each(function(i){if(!this)return;if(this.id===self.id){delete lst[i];for(var b=++i;b<lst.length;b++,i++)lst[i]=lst[b];lst.length--;if(lst.length)delete lst[lst.length]}});for(var i in self){self[i]=null;delete self[i]}self=null};this.scrollstart=function(fn){this.onscrollstart=fn;return self};this.scrollend=function(fn){this.onscrollend=fn;return self};this.scrollcancel=function(fn){this.onscrollcancel=fn;return self};this.zoomin=function(fn){this.onzoomin=fn;return self};this.zoomout=function(fn){this.onzoomout=fn;return self};this.isScrollable=function(e){var dom=e.target?e.target:e;if(dom.nodeName=="OPTION")return true;while(dom&&dom.nodeType==1&&dom!==this.me[0]&&!/^BODY|HTML/.test(dom.nodeName)){var dd=$(dom);var ov=dd.css("overflowY")||dd.css("overflowX")||dd.css("overflow")||"";if(/scroll|auto/.test(ov))return dom.clientHeight!=dom.scrollHeight;dom=dom.parentNode?dom.parentNode:false}return false};this.getViewport=function(me){var dom=me&&me.parentNode?me.parentNode:false;while(dom&&dom.nodeType==1&&!/^BODY|HTML/.test(dom.nodeName)){var dd=$(dom);if(/fixed|absolute/.test(dd.css("position")))return dd;var ov=dd.css("overflowY")||dd.css("overflowX")||dd.css("overflow")||"";if(/scroll|auto/.test(ov)&&dom.clientHeight!=dom.scrollHeight)return dd;if(dd.getAxScroll().length>0)return dd;dom=dom.parentNode?dom.parentNode:false}return false};this.triggerScrollStart=function(cx,cy,rx,ry,ms){if(self.onscrollstart){var info={type:"scrollstart",current:{x:cx,y:cy},request:{x:rx,y:ry},end:{x:self.newscrollx,y:self.newscrolly},speed:ms};self.onscrollstart.call(self,info)}};this.triggerScrollEnd=function(){if(self.onscrollend){var px=self.getScrollLeft();var py=self.getScrollTop();var info={type:"scrollend",current:{x:px,y:py},end:{x:px,y:py}};self.onscrollend.call(self,info)}};var scrolldiry=0,scrolldirx=0,scrolltmr=0,scrollspd=1;function doScrollRelative(px,py,chkscroll,iswheel){if(!self.scrollrunning){self.newscrolly=self.getScrollTop();self.newscrollx=self.getScrollLeft();scrolltmr=now()}var gap=now()-scrolltmr;scrolltmr=now();if(gap>350){scrollspd=1}else{scrollspd+=(2-scrollspd)/10}px=px*scrollspd|0;py=py*scrollspd|0;if(px){if(iswheel){if(px<0){if(self.getScrollLeft()>=self.page.maxw)return true}else{if(self.getScrollLeft()<=0)return true}}var dx=px>0?1:-1;if(scrolldirx!==dx){if(self.scrollmom)self.scrollmom.stop();self.newscrollx=self.getScrollLeft();scrolldirx=dx}self.lastdeltax-=px}if(py){var chk=function(){var top=self.getScrollTop();if(py<0){if(top>=self.page.maxh)return true}else{if(top<=0)return true}}();if(chk){if(opt.nativeparentscrolling&&chkscroll&&!self.ispage&&!self.zoomactive)return true;var ny=self.view.h>>1;if(self.newscrolly<-ny){self.newscrolly=-ny;py=-1}else if(self.newscrolly>self.page.maxh+ny){self.newscrolly=self.page.maxh+ny;py=1}else py=0}var dy=py>0?1:-1;if(scrolldiry!==dy){if(self.scrollmom)self.scrollmom.stop();self.newscrolly=self.getScrollTop();scrolldiry=dy}self.lastdeltay-=py}if(py||px){self.synched("relativexy",function(){var dty=self.lastdeltay+self.newscrolly;self.lastdeltay=0;var dtx=self.lastdeltax+self.newscrollx;self.lastdeltax=0;if(!self.rail.drag)self.doScrollPos(dtx,dty)})}}var hasparentscrollingphase=false;function execScrollWheel(e,hr,chkscroll){var px,py;if(!chkscroll&&hasparentscrollingphase)return true;if(e.deltaMode===0){px=-(e.deltaX*(opt.mousescrollstep/(18*3)))|0;py=-(e.deltaY*(opt.mousescrollstep/(18*3)))|0}else if(e.deltaMode===1){px=-(e.deltaX*opt.mousescrollstep*50/80)|0;py=-(e.deltaY*opt.mousescrollstep*50/80)|0}if(hr&&opt.oneaxismousemode&&px===0&&py){px=py;py=0;if(chkscroll){var hrend=px<0?self.getScrollLeft()>=self.page.maxw:self.getScrollLeft()<=0;if(hrend){py=px;px=0}}}if(self.isrtlmode)px=-px;var chk=doScrollRelative(px,py,chkscroll,true);if(chk){if(chkscroll)hasparentscrollingphase=true}else{hasparentscrollingphase=false;e.stopImmediatePropagation();return e.preventDefault()}}this.onmousewheel=function(e){if(self.wheelprevented||self.locked)return false;if(self.railslocked){self.debounced("checkunlock",self.resize,250);return false}if(self.rail.drag)return self.cancelEvent(e);if(opt.oneaxismousemode==="auto"&&e.deltaX!==0)opt.oneaxismousemode=false;if(opt.oneaxismousemode&&e.deltaX===0){if(!self.rail.scrollable){if(self.railh&&self.railh.scrollable){return self.onmousewheelhr(e)}else{return true}}}var nw=now();var chk=false;if(opt.preservenativescrolling&&self.checkarea+600<nw){self.nativescrollingarea=self.isScrollable(e);chk=true}self.checkarea=nw;if(self.nativescrollingarea)return true;var ret=execScrollWheel(e,false,chk);if(ret)self.checkarea=0;return ret};this.onmousewheelhr=function(e){if(self.wheelprevented)return;if(self.railslocked||!self.railh.scrollable)return true;if(self.rail.drag)return self.cancelEvent(e);var nw=now();var chk=false;if(opt.preservenativescrolling&&self.checkarea+600<nw){self.nativescrollingarea=self.isScrollable(e);chk=true}self.checkarea=nw;if(self.nativescrollingarea)return true;if(self.railslocked)return self.cancelEvent(e);return execScrollWheel(e,true,chk)};this.stop=function(){self.cancelScroll();if(self.scrollmon)self.scrollmon.stop();self.cursorfreezed=false;self.scroll.y=Math.round(self.getScrollTop()*(1/self.scrollratio.y));self.noticeCursor();return self};this.getTransitionSpeed=function(dif){return 80+dif/72*opt.scrollspeed|0};if(!opt.smoothscroll){this.doScrollLeft=function(x,spd){var y=self.getScrollTop();self.doScrollPos(x,y,spd)};this.doScrollTop=function(y,spd){var x=self.getScrollLeft();self.doScrollPos(x,y,spd)};this.doScrollPos=function(x,y,spd){var nx=x>self.page.maxw?self.page.maxw:x;if(nx<0)nx=0;var ny=y>self.page.maxh?self.page.maxh:y;if(ny<0)ny=0;self.synched("scroll",function(){self.setScrollTop(ny);self.setScrollLeft(nx)})};this.cancelScroll=function(){}}else if(self.ishwscroll&&cap.hastransition&&opt.usetransition&&!!opt.smoothscroll){var lasttransitionstyle="";this.resetTransition=function(){lasttransitionstyle="";self.doc.css(cap.prefixstyle+"transition-duration","0ms")};this.prepareTransition=function(dif,istime){var ex=istime?dif:self.getTransitionSpeed(dif);var trans=ex+"ms";if(lasttransitionstyle!==trans){lasttransitionstyle=trans;self.doc.css(cap.prefixstyle+"transition-duration",trans)}return ex};this.doScrollLeft=function(x,spd){var y=self.scrollrunning?self.newscrolly:self.getScrollTop();self.doScrollPos(x,y,spd)};this.doScrollTop=function(y,spd){var x=self.scrollrunning?self.newscrollx:self.getScrollLeft();self.doScrollPos(x,y,spd)};this.cursorupdate={running:false,start:function(){var m=this;if(m.running)return;m.running=true;var loop=function(){if(m.running)setAnimationFrame(loop);self.showCursor(self.getScrollTop(),self.getScrollLeft());self.notifyScrollEvent(self.win[0])};setAnimationFrame(loop)},stop:function(){this.running=false}};this.doScrollPos=function(x,y,spd){var py=self.getScrollTop();var px=self.getScrollLeft();if((self.newscrolly-py)*(y-py)<0||(self.newscrollx-px)*(x-px)<0)self.cancelScroll();if(!opt.bouncescroll){if(y<0)y=0;else if(y>self.page.maxh)y=self.page.maxh;if(x<0)x=0;else if(x>self.page.maxw)x=self.page.maxw}else{if(y<0)y=y/2|0;else if(y>self.page.maxh)y=self.page.maxh+(y-self.page.maxh)/2|0;if(x<0)x=x/2|0;else if(x>self.page.maxw)x=self.page.maxw+(x-self.page.maxw)/2|0}if(self.scrollrunning&&x==self.newscrollx&&y==self.newscrolly)return false;self.newscrolly=y;self.newscrollx=x;var top=self.getScrollTop();var lft=self.getScrollLeft();var dst={};dst.x=x-lft;dst.y=y-top;var dd=Math.sqrt(dst.x*dst.x+dst.y*dst.y)|0;var ms=self.prepareTransition(dd);if(!self.scrollrunning){self.scrollrunning=true;self.triggerScrollStart(lft,top,x,y,ms);self.cursorupdate.start()}self.scrollendtrapped=true;if(!cap.transitionend){if(self.scrollendtrapped)clearTimeout(self.scrollendtrapped);self.scrollendtrapped=setTimeout(self.onScrollTransitionEnd,ms)}self.setScrollTop(self.newscrolly);self.setScrollLeft(self.newscrollx)};this.cancelScroll=function(){if(!self.scrollendtrapped)return true;var py=self.getScrollTop();var px=self.getScrollLeft();self.scrollrunning=false;if(!cap.transitionend)clearTimeout(cap.transitionend);self.scrollendtrapped=false;self.resetTransition();self.setScrollTop(py);if(self.railh)self.setScrollLeft(px);if(self.timerscroll&&self.timerscroll.tm)clearInterval(self.timerscroll.tm);self.timerscroll=false;self.cursorfreezed=false;self.cursorupdate.stop();self.showCursor(py,px);return self};this.onScrollTransitionEnd=function(){if(!self.scrollendtrapped)return;var py=self.getScrollTop();var px=self.getScrollLeft();if(py<0)py=0;else if(py>self.page.maxh)py=self.page.maxh;if(px<0)px=0;else if(px>self.page.maxw)px=self.page.maxw;if(py!=self.newscrolly||px!=self.newscrollx)return self.doScrollPos(px,py,opt.snapbackspeed);if(self.scrollrunning)self.triggerScrollEnd();self.scrollrunning=false;self.scrollendtrapped=false;self.resetTransition();self.timerscroll=false;self.setScrollTop(py);if(self.railh)self.setScrollLeft(px);self.cursorupdate.stop();self.noticeCursor(false,py,px);self.cursorfreezed=false}}else{this.doScrollLeft=function(x,spd){var y=self.scrollrunning?self.newscrolly:self.getScrollTop();self.doScrollPos(x,y,spd)};this.doScrollTop=function(y,spd){var x=self.scrollrunning?self.newscrollx:self.getScrollLeft();self.doScrollPos(x,y,spd)};this.doScrollPos=function(x,y,spd){var py=self.getScrollTop();var px=self.getScrollLeft();if((self.newscrolly-py)*(y-py)<0||(self.newscrollx-px)*(x-px)<0)self.cancelScroll();var clipped=false;if(!self.bouncescroll||!self.rail.visibility){if(y<0){y=0;clipped=true}else if(y>self.page.maxh){y=self.page.maxh;clipped=true}}if(!self.bouncescroll||!self.railh.visibility){if(x<0){x=0;clipped=true}else if(x>self.page.maxw){x=self.page.maxw;clipped=true}}if(self.scrollrunning&&self.newscrolly===y&&self.newscrollx===x)return true;self.newscrolly=y;self.newscrollx=x;self.dst={};self.dst.x=x-px;self.dst.y=y-py;self.dst.px=px;self.dst.py=py;var dd=Math.sqrt(self.dst.x*self.dst.x+self.dst.y*self.dst.y)|0;var ms=self.getTransitionSpeed(dd);self.bzscroll={};var p3=clipped?1:.58;self.bzscroll.x=new BezierClass(px,self.newscrollx,ms,0,0,p3,1);self.bzscroll.y=new BezierClass(py,self.newscrolly,ms,0,0,p3,1);var loopid=now();var loop=function(){if(!self.scrollrunning)return;var x=self.bzscroll.y.getPos();self.setScrollLeft(self.bzscroll.x.getNow());self.setScrollTop(self.bzscroll.y.getNow());if(x<=1){self.timer=setAnimationFrame(loop)}else{self.scrollrunning=false;self.timer=0;self.triggerScrollEnd()}};if(!self.scrollrunning){self.triggerScrollStart(px,py,x,y,ms);self.scrollrunning=true;self.timer=setAnimationFrame(loop)}};this.cancelScroll=function(){if(self.timer)clearAnimationFrame(self.timer);self.timer=0;self.bzscroll=false;self.scrollrunning=false;return self}}this.doScrollBy=function(stp,relative){doScrollRelative(0,stp)};this.doScrollLeftBy=function(stp,relative){doScrollRelative(stp,0)};this.doScrollTo=function(pos,relative){var ny=relative?Math.round(pos*self.scrollratio.y):pos;if(ny<0)ny=0;else if(ny>self.page.maxh)ny=self.page.maxh;self.cursorfreezed=false;self.doScrollTop(pos)};this.checkContentSize=function(){var pg=self.getContentSize();if(pg.h!=self.page.h||pg.w!=self.page.w)self.resize(false,pg)};self.onscroll=function(e){if(self.rail.drag)return;if(!self.cursorfreezed){self.synched("scroll",function(){self.scroll.y=Math.round(self.getScrollTop()/self.scrollratio.y);if(self.railh)self.scroll.x=Math.round(self.getScrollLeft()/self.scrollratio.x);self.noticeCursor()})}};self.bind(self.docscroll,"scroll",self.onscroll);this.doZoomIn=function(e){if(self.zoomactive)return;self.zoomactive=true;self.zoomrestore={style:{}};var lst=["position","top","left","zIndex","backgroundColor","marginTop","marginBottom","marginLeft","marginRight"];var win=self.win[0].style;for(var a in lst){var pp=lst[a];self.zoomrestore.style[pp]=win[pp]!==undefined?win[pp]:""}self.zoomrestore.style.width=self.win.css("width");self.zoomrestore.style.height=self.win.css("height");self.zoomrestore.padding={w:self.win.outerWidth()-self.win.width(),h:self.win.outerHeight()-self.win.height()};if(cap.isios4){self.zoomrestore.scrollTop=$window.scrollTop();$window.scrollTop(0)}self.win.css({position:cap.isios4?"absolute":"fixed",top:0,left:0,zIndex:globalmaxzindex+100,margin:0});var bkg=self.win.css("backgroundColor");if(""===bkg||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(bkg))self.win.css("backgroundColor","#fff");self.rail.css({zIndex:globalmaxzindex+101});self.zoom.css({zIndex:globalmaxzindex+102});self.zoom.css("backgroundPosition","0 -18px");self.resizeZoom();if(self.onzoomin)self.onzoomin.call(self);return self.cancelEvent(e)};this.doZoomOut=function(e){if(!self.zoomactive)return;self.zoomactive=false;self.win.css("margin","");self.win.css(self.zoomrestore.style);if(cap.isios4){$window.scrollTop(self.zoomrestore.scrollTop)}self.rail.css({"z-index":self.zindex});self.zoom.css({"z-index":self.zindex});self.zoomrestore=false;self.zoom.css("backgroundPosition","0 0");self.onResize();if(self.onzoomout)self.onzoomout.call(self);return self.cancelEvent(e)};this.doZoom=function(e){return self.zoomactive?self.doZoomOut(e):self.doZoomIn(e)};this.resizeZoom=function(){if(!self.zoomactive)return;var py=self.getScrollTop();self.win.css({width:$window.width()-self.zoomrestore.padding.w+"px",height:$window.height()-self.zoomrestore.padding.h+"px"});self.onResize();self.setScrollTop(Math.min(self.page.maxh,py))};this.init();$.axscroll.push(this)};var ScrollMomentumClass2D=function(nc){var self=this;this.nc=nc;this.lastx=0;this.lasty=0;this.speedx=0;this.speedy=0;this.lasttime=0;this.steptime=0;this.snapx=false;this.snapy=false;this.demulx=0;this.demuly=0;this.lastscrollx=-1;this.lastscrolly=-1;this.chkx=0;this.chky=0;this.timer=0;this.reset=function(px,py){self.stop();self.steptime=0;self.lasttime=now();self.speedx=0;self.speedy=0;self.lastx=px;self.lasty=py;self.lastscrollx=-1;self.lastscrolly=-1};this.update=function(px,py){var tm=now();self.steptime=tm-self.lasttime;self.lasttime=tm;var dy=py-self.lasty;var dx=px-self.lastx;var sy=self.nc.getScrollTop();var sx=self.nc.getScrollLeft();var newy=sy+dy;var newx=sx+dx;self.snapx=newx<0||newx>self.nc.page.maxw;self.snapy=newy<0||newy>self.nc.page.maxh;self.speedx=dx;self.speedy=dy;self.lastx=px;self.lasty=py};this.stop=function(){self.nc.unsynched("domomentum2d");if(self.timer)clearTimeout(self.timer);self.timer=0;self.lastscrollx=-1;self.lastscrolly=-1};this.doSnapy=function(nx,ny){var snap=false;if(ny<0){ny=0;snap=true}else if(ny>self.nc.page.maxh){ny=self.nc.page.maxh;snap=true}if(nx<0){nx=0;snap=true}else if(nx>self.nc.page.maxw){nx=self.nc.page.maxw;snap=true}snap?self.nc.doScrollPos(nx,ny,self.nc.opt.snapbackspeed):self.nc.triggerScrollEnd()};this.doMomentum=function(gp){var t=now();var l=gp?t+gp:self.lasttime;var sl=self.nc.getScrollLeft();var st=self.nc.getScrollTop();var pageh=self.nc.page.maxh;var pagew=self.nc.page.maxw;self.speedx=pagew>0?Math.min(60,self.speedx):0;self.speedy=pageh>0?Math.min(60,self.speedy):0;var chk=l&&t-l<=60;if(st<0||st>pageh||sl<0||sl>pagew)chk=false;var sy=self.speedy&&chk?self.speedy:false;var sx=self.speedx&&chk?self.speedx:false;if(sy||sx){var tm=Math.max(16,self.steptime);if(tm>50){var xm=tm/50;self.speedx*=xm;self.speedy*=xm;tm=50}self.demulxy=0;self.lastscrollx=self.nc.getScrollLeft();self.chkx=self.lastscrollx;self.lastscrolly=self.nc.getScrollTop();self.chky=self.lastscrolly;var nx=self.lastscrollx;var ny=self.lastscrolly;var onscroll=function(){var df=now()-t>600?.04:.02;if(self.speedx){nx=Math.floor(self.lastscrollx-self.speedx*(1-self.demulxy));self.lastscrollx=nx;if(nx<0||nx>pagew)df=.1}if(self.speedy){ny=Math.floor(self.lastscrolly-self.speedy*(1-self.demulxy));self.lastscrolly=ny;if(ny<0||ny>pageh)df=.1}self.demulxy=Math.min(1,self.demulxy+df);self.nc.synched("domomentum2d",function(){if(self.speedx){var scx=self.nc.getScrollLeft();self.chkx=nx;self.nc.setScrollLeft(nx)}if(self.speedy){var scy=self.nc.getScrollTop();self.chky=ny;self.nc.setScrollTop(ny)}if(!self.timer){self.nc.hideCursor();self.doSnapy(nx,ny)}});if(self.demulxy<1){self.timer=setTimeout(onscroll,tm)}else{self.stop();self.nc.hideCursor();self.doSnapy(nx,ny)}};onscroll()}else{self.doSnapy(self.nc.getScrollLeft(),self.nc.getScrollTop())}}};var _scrollTop=jQuery.fn.scrollTop;jQuery.cssHooks.pageYOffset={get:function(elem,computed,extra){var nice=$.data(elem,"__axscroll")||false;return nice&&nice.ishwscroll?nice.getScrollTop():_scrollTop.call(elem)},set:function(elem,value){var nice=$.data(elem,"__axscroll")||false;nice&&nice.ishwscroll?nice.setScrollTop(parseInt(value)):_scrollTop.call(elem,value);return this}};jQuery.fn.scrollTop=function(value){if(value===undefined){var nice=this[0]?$.data(this[0],"__axscroll")||false:false;return nice&&nice.ishwscroll?nice.getScrollTop():_scrollTop.call(this)}else{return this.each(function(){var nice=$.data(this,"__axscroll")||false;nice&&nice.ishwscroll?nice.setScrollTop(parseInt(value)):_scrollTop.call($(this),value)})}};var _scrollLeft=jQuery.fn.scrollLeft;$.cssHooks.pageXOffset={get:function(elem,computed,extra){var nice=$.data(elem,"__axscroll")||false;return nice&&nice.ishwscroll?nice.getScrollLeft():_scrollLeft.call(elem)},set:function(elem,value){var nice=$.data(elem,"__axscroll")||false;nice&&nice.ishwscroll?nice.setScrollLeft(parseInt(value)):_scrollLeft.call(elem,value);return this}};jQuery.fn.scrollLeft=function(value){if(value===undefined){var nice=this[0]?$.data(this[0],"__axscroll")||false:false;return nice&&nice.ishwscroll?nice.getScrollLeft():_scrollLeft.call(this)}else{return this.each(function(){var nice=$.data(this,"__axscroll")||false;nice&&nice.ishwscroll?nice.setScrollLeft(parseInt(value)):_scrollLeft.call($(this),value)})}};var AxScrollArray=function(doms){var self=this;this.length=0;this.name="axscrollarray";this.each=function(fn){$.each(self,fn);return self};this.push=function(nice){self[self.length]=nice;self.length++};this.eq=function(idx){return self[idx]};if(doms){for(var a=0;a<doms.length;a++){var nice=$.data(doms[a],"__axscroll")||false;if(nice){this[this.length]=nice;this.length++}}}return this};function mplex(el,lst,fn){for(var a=0,l=lst.length;a<l;a++)fn(el,lst[a])}mplex(AxScrollArray.prototype,["show","hide","toggle","onResize","resize","remove","stop","doScrollPos"],function(e,n){e[n]=function(){var args=arguments;return this.each(function(){this[n].apply(this,args)})}});jQuery.fn.getAxScroll=function(index){if(index===undefined){return new AxScrollArray(this)}else{return this[index]&&$.data(this[index],"__axscroll")||false}};var pseudos=jQuery.expr.pseudos||jQuery.expr[":"];pseudos.axscroll=function(a){return $.data(a,"__axscroll")!==undefined};$.fn.axScroll=function(wrapper,_opt){if(_opt===undefined&&typeof wrapper=="object"&&!("jquery"in wrapper)){_opt=wrapper;wrapper=false}var ret=new AxScrollArray;this.each(function(){var $this=$(this);var opt=$.extend({},_opt);if(wrapper||false){var wrp=$(wrapper);opt.doc=wrp.length>1?$(wrapper,$this):wrp;opt.win=$this}var docundef=!("doc"in opt);if(!docundef&&!("win"in opt))opt.win=$this;var nice=$this.data("__axscroll")||false;if(!nice){opt.doc=opt.doc||$this;nice=new AxScrollClass(opt,$this);$this.data("__axscroll",nice)}ret.push(nice)});return ret.length===1?ret[0]:ret};_win.AxScroll={getjQuery:function(){return jQuery}};if(!$.axscroll){$.axscroll=new AxScrollArray;$.axscroll.options=_globaloptions}});if(platformIs == 'pc'){$(".ax-scroll").axScroll();}
/* Popup */
(function(window, document, undefined) {
    'use strict';
    (function(factory) {
        if (typeof define === 'function' && define.amd) {
            // Register as an anonymous AMD module.
            define(['jquery'], factory);
        } else if (typeof exports === 'object') {
            // Node/CommonJS
            module.exports = factory(require('jquery'));
        } else {
            // Browser globals
            factory(window.jQuery);
        }
    }(function($) {
        // Create the defaults once
        var pluginName = 'axPopup';
        var pluginClass = 'ax-popup';
        var pluginType = 'ax.popup';
        var defaults = {
            placement: 'auto',
            container: null,
            width: 'auto',
            height: 'auto',
            maxWidth: '',
            maxHeight: '',
            trigger: 'click', //hover,click,sticky,manual
            style: '',
            selector: false, // jQuery selector, if a selector is provided, popup objects will be delegated to the specified.
            delay: {
                show: null,
                hide: 300
            },
            async: {
                type: 'GET',
                before: null, //function(that, xhr, settings){}
                success: null, //function(that, xhr){}
                error: null //function(that, xhr, data){}
            },
            cache: true,
            multi: false,
            arrow: true,
            title: '',
            content: '',
            closeable: false,
            padding: true,
            url: '',
            type: 'html',
            direction: '', // ltr,rtl
            animation: null,
            template: '<div class="ax-popup">' +
            '<div class="ax-arrow"></div>' +
            '<div class="ax-popup-inner">' +
            '<a href="#" class="ax-close"></a>' +
            '<div class="ax-popup-title"></div>' +
            '<div class="ax-popup-content ax-scroll"><i class="ax-refresh"></i> <p>&nbsp;</p></div>' +
            '</div>' +
            '</div>',
            backdrop: false,
            dismissible: true,
            onShow: null,
            onHide: null,
            abortXHR: true,
            autoHide: false,
            offsetTop: 0,
            offsetLeft: 0,
            iframeOptions: {
                frameborder: '0',
                allowtransparency: 'true',
                id: '',
                name: '',
                scrolling: '',
                onload: '',
                class:'ax-scroll',
                height: '100%',
                width: '100%',
            },
            hideEmpty: false
        };

        var rtlClass = pluginClass + '-rtl';
        var _srcElements = [];
        var backdrop = $('<div class="ax-popup-backdrop"></div>');
        var _globalIdSeed = 0;
        var _isBodyEventHandled = false;
        var _offsetOut = -2000; // the value offset  out of the screen
        var $document = $(document);

        var toNumber = function(numeric, fallback) {
            return isNaN(numeric) ? (fallback || 0) : Number(numeric);
        };

        var getPopFromElement = function($element) {
            return $element.data('plugin_' + pluginName);
        };

        var hideAllPop = function() {
            var pop = null;
            for (var i = 0; i < _srcElements.length; i++) {
                pop = getPopFromElement(_srcElements[i]);
                if (pop) {
                    pop.hide(true);
                }
            }
            $document.trigger('hiddenAll.' + pluginType);
        };

        var hideOtherPops = function(currentPop) {
            var pop = null;
            for (var i = 0; i < _srcElements.length; i++) {
                pop = getPopFromElement(_srcElements[i]);
                if (pop && pop.id !== currentPop.id) {
                    pop.hide(true);
                }
            }
            $document.trigger('hiddenAll.' + pluginType);
        };

        var isMobile = ('ontouchstart' in document.documentElement) && (/Mobi/.test(navigator.userAgent));

        var pointerEventToXY = function(e) {
            var out = {
                x: 0,
                y: 0
            };
            if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                out.x = touch.pageX;
                out.y = touch.pageY;
            } else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'click') {
                out.x = e.pageX;
                out.y = e.pageY;
            }
            return out;
        };



        // The actual plugin constructor
        function AxPopup(element, options) {
            this.$element = $(element);
            if (options) {
                if ($.type(options.delay) === 'string' || $.type(options.delay) === 'number') {
                    options.delay = {
                        show: options.delay,
                        hide: options.delay
                    }; // bc break fix
                }
            }
            this.options = $.extend({}, defaults, options);
            this._defaults = defaults;
            this._name = pluginName;
            this._targetclick = false;
            this.init();
            _srcElements.push(this.$element);
            return this;

        }

        AxPopup.prototype = {
            //init webui popup
            init: function() {
                if (this.$element[0] instanceof document.constructor && !this.options.selector) {
                    throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!');
                }

                if (this.getTrigger() !== 'manual') {
                    //init the event handlers
                    if (isMobile) {
                        this.$element.off('touchend', this.options.selector).on('touchend', this.options.selector, $.proxy(this.toggle, this));
                    } else if (this.getTrigger() === 'click') {
                        this.$element.off('click', this.options.selector).on('click', this.options.selector, $.proxy(this.toggle, this));
                    } else if (this.getTrigger() === 'hover') {
                        this.$element
                            .off('mouseenter mouseleave click', this.options.selector)
                            .on('mouseenter', this.options.selector, $.proxy(this.mouseenterHandler, this))
                            .on('mouseleave', this.options.selector, $.proxy(this.mouseleaveHandler, this));
                    }
                }
                this._poped = false;
                this._inited = true;
                this._opened = false;
                this._idSeed = _globalIdSeed;
                this.id = pluginName + this._idSeed;
                // normalize container
                this.options.container = $(this.options.container || document.body).first();

                if (this.options.backdrop) {
                    backdrop.appendTo(this.options.container).hide();
                }
                _globalIdSeed++;
                if (this.getTrigger() === 'sticky') {
                    this.show();
                }

                if (this.options.selector) {
                    this._options = $.extend({}, this.options, {
                        selector: ''
                    });
                }

            },
            /* api methods and actions */
            destroy: function() {
                var index = -1;

                for (var i = 0; i < _srcElements.length; i++) {
                    if (_srcElements[i] === this.$element) {
                        index = i;
                        break;
                    }
                }

                _srcElements.splice(index, 1);


                this.hide();
                this.$element.data('plugin_' + pluginName, null);
                if (this.getTrigger() === 'click') {
                    this.$element.off('click');
                } else if (this.getTrigger() === 'hover') {
                    this.$element.off('mouseenter mouseleave');
                }
                if (this.$target) {
                    this.$target.remove();
                }
            },
            getDelegateOptions: function() {
                var options = {};

                this._options && $.each(this._options, function(key, value) {
                    if (defaults[key] !== value) {
                        options[key] = value;
                    }
                });
                return options;
            },
            /*
                param: force    boolean value, if value is true then force hide the popup
                param: event    dom event,
            */
            hide: function(force, event) {

                if (!force && this.getTrigger() === 'sticky') {
                    return;
                }
                if (!this._opened) {
                    return;
                }
                if (event) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                if (this.xhr && this.options.abortXHR === true) {
                    this.xhr.abort();
                    this.xhr = null;
                }


                var e = $.Event('hide.' + pluginType);
                this.$element.trigger(e, [this.$target]);
                if (this.$target) {
                    this.$target.removeClass('ax-in').addClass(this.getHideAnimation());
                    var that = this;
                    setTimeout(function() {
                        that.$target.hide();
                        if (!that.getCache()) {
                            that.$target.remove();
                            //that.getTriggerElement.removeAttr('data-target');
                        }
                    }, that.getHideDelay());
                }
                if (this.options.backdrop) {
                    backdrop.hide();
                }
                this._opened = false;
                this.$element.trigger('hidden.' + pluginType, [this.$target]);

                if (this.options.onHide) {
                    this.options.onHide(this.$target);
                }

            },
            resetAutoHide: function() {
                var that = this;
                var autoHide = that.getAutoHide();
                if (autoHide) {
                    if (that.autoHideHandler) {
                        clearTimeout(that.autoHideHandler);
                    }
                    that.autoHideHandler = setTimeout(function() {
                        that.hide();
                    }, autoHide);
                }
            },
            delegate: function(eventTarget) {
                var self = $(eventTarget).data('plugin_' + pluginName);
                if (!self) {
                    self = new AxPopup(eventTarget, this.getDelegateOptions());
                    $(eventTarget).data('plugin_' + pluginName, self);
                }
                return self;
            },
            toggle: function(e) {
                var self = this;
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if (this.options.selector) {
                        self = this.delegate(e.currentTarget);
                    }
                }
                self[self.getTarget().hasClass('ax-in') ? 'hide' : 'show']();
            },
            hideAll: function() {
                hideAllPop();
            },
            hideOthers: function() {
                hideOtherPops(this);
            },
            /*core method ,show popup */
            show: function() {
                if (this._opened) {
                    return;
                }
                //removeAllTargets();
                var
                    $target = this.getTarget().removeClass().addClass(pluginClass).addClass(this._customTargetClass);
                if (!this.options.multi) {
                    this.hideOthers();
                }

                // use cache by default, if not cache setted  , reInit the contents
                if (!this.getCache() || !this._poped || this.content === '') {
                    this.content = '';
                    this.setTitle(this.getTitle());
                    if (!this.options.closeable) {
                        $target.find('.ax-close').off('click').remove();
                    }
                    if (!this.isAsync()) {
                        this.setContent(this.getContent());
                    } else {
                        this.setContentASync(this.options.content);
                    }

                    if (this.canEmptyHide() && this.content === '') {
                        return;
                    }
                    $target.show();
                }

                this.displayContent();

                if (this.options.onShow) {
                    this.options.onShow($target);
                }

                this.bindBodyEvents();
                if (this.options.backdrop) {
                    backdrop.show();
                }
                this._opened = true;
                this.resetAutoHide();
            },
            displayContent: function() {
                var
                    //element postion
                    elementPos = this.getElementPosition(),
                    //target postion
                    $target = this.getTarget().removeClass().addClass(pluginClass).addClass(this._customTargetClass),
                    //target content
                    $targetContent = this.getContentElement(),
                    //target Width
                    targetWidth = $target[0].offsetWidth,
                    //target Height
                    targetHeight = $target[0].offsetHeight,
                    //placement
                    placement = 'bottom',
                    e = $.Event('show.' + pluginType);

                if (this.canEmptyHide()) {

                    var content = $targetContent.children().html();
                    if (content !== null && content.trim().length === 0) {
                        return;
                    }
                }

                //if (this.hasContent()){
                this.$element.trigger(e, [$target]);
                //}
                // support width as data attribute
                var optWidth = this.$element.data('width') || this.options.width;
                if (optWidth === '') {
                    optWidth = this._defaults.width;
                }

                if (optWidth !== 'auto') {
                    $targetContent.width(optWidth);
                }
                // support max width as data attribute
                var optmaxWidth = this.$element.attr('data-maxWidth') ||  this.$element.data('maxWidth') || this.options.maxWidth;
                if (optmaxWidth === '') {
                    optmaxWidth = this._defaults.maxWidth;
                }else{
                    $targetContent.css('max-width',optmaxWidth);
                }


                // support height as data attribute
                var optHeight = this.$element.data('height') || this.options.height;
                if (optHeight === '') {
                    optHeight = this._defaults.height;
                }

                if (optHeight !== 'auto') {
                    $targetContent.height(optHeight);
                }

                // support max height as data attribute

                var optmaxHeight = this.$element.attr('data-maxHeight') || this.$element.data('maxHeight') || this.options.maxHeight;
                if (optmaxHeight === '') {
                    optmaxHeight = this._defaults.maxHeight;
                }else{
                    $targetContent.css('max-height',optmaxHeight);
                }
                //

                if (this.options.style) {
                    this.$target.addClass(pluginClass + '-' + this.options.style);
                }

                //check rtl
                if (this.options.direction === 'rtl' && !$targetContent.hasClass(rtlClass)) {
                    $targetContent.addClass(rtlClass);
                }

                //init the popup and insert into the document body
                if (!this.options.arrow) {
                    $target.find('.ax-arrow').remove();
                }
                $target.detach().css({
                    top: _offsetOut,
                    left: _offsetOut,
                    display: 'block'
                });

                if (this.getAnimation()) {
                    $target.addClass(this.getAnimation());
                }
                $target.appendTo(this.options.container);


                placement = this.getPlacement(elementPos);

                //This line is just for compatible with knockout custom binding
                this.$element.trigger('added.' + pluginType);

                this.initTargetEvents();

                if (!this.options.padding) {
                    if (this.options.height !== 'auto') {
                        $targetContent.css('height', $targetContent.outerHeight());
                    }
                    this.$target.addClass('ax-no-padding');
                }



                targetWidth = $target[0].offsetWidth;
                targetHeight = $target[0].offsetHeight;

                var postionInfo = this.getTargetPositin(elementPos, placement, targetWidth, targetHeight);

                this.$target.css(postionInfo.position).addClass('ax-'+placement).addClass('ax-in');

                if (this.options.type === 'iframe') {
                    var $iframe = $target.find('iframe');
                    var iframeWidth = $target.width();
                    var iframeHeight = $iframe.parent().height();

                    if (this.options.iframeOptions.width !== '' && this.options.iframeOptions.width !== 'auto') {
                        iframeWidth = this.options.iframeOptions.width;
                    }

                    if (this.options.iframeOptions.height !== '' && this.options.iframeOptions.height !== 'auto') {
                        iframeHeight = this.options.iframeOptions.height;
                    }

                    $iframe.width(iframeWidth).height(iframeHeight);
                }

                if (!this.options.arrow) {
                    this.$target.css({
                        'margin': 0
                    });
                }
                if (this.options.arrow) {
                    var $arrow = this.$target.find('.ax-arrow');
                    $arrow.removeAttr('style');

                    //prevent arrow change by content size
                    if (placement === 'left' || placement === 'right') {
                        $arrow.css({
                            top: this.$target.height() / 2
                        });
                    } else if (placement === 'top' || placement === 'bottom') {
                        $arrow.css({
                            left: this.$target.width() / 2
                        });
                    }

                    if (postionInfo.arrowOffset) {
                        //hide the arrow if offset is negative
                        if (postionInfo.arrowOffset.left === -1 || postionInfo.arrowOffset.top === -1) {
                            $arrow.hide();
                        } else {
                            $arrow.css(postionInfo.arrowOffset);
                        }
                    }

                }
                this._poped = true;
                this.$element.trigger('shown.' + pluginType, [this.$target]);
            },

            isTargetLoaded: function() {
                return this.getTarget().find('i.glyphicon-refresh').length === 0;
            },

            /*getter setters */
            getTriggerElement: function() {
                return this.$element;
            },
            getTarget: function() {
                if (!this.$target) {
                    var id = pluginName + this._idSeed;
                    this.$target = $(this.options.template)
                        .attr('id', id);
                    this._customTargetClass = this.$target.attr('class') !== pluginClass ? this.$target.attr('class') : null;
                    this.getTriggerElement().attr('data-target', id);
                }
                if (!this.$target.data('trigger-element')) {
                    this.$target.data('trigger-element', this.getTriggerElement());
                }
                return this.$target;
            },
            removeTarget: function() {
                this.$target.remove();
                this.$target = null;
                this.$contentElement = null;
            },
            getTitleElement: function() {
                return this.getTarget().find('.' + pluginClass + '-title');
            },
            getContentElement: function() {
                if (!this.$contentElement) {
                    this.$contentElement = this.getTarget().find('.' + pluginClass + '-content');
                }
                return this.$contentElement;
            },
            getTitle: function() {
                return this.$element.attr('data-title') || this.options.title;
            },
            getUrl: function() {
                return this.$element.attr('data-url') || this.options.url;
            },
            getAutoHide: function() {
                return this.$element.attr('data-auto-hide') || this.options.autoHide;
            },
            getOffsetTop: function() {
                return toNumber(this.$element.attr('data-offset-top')) || this.options.offsetTop;
            },
            getOffsetLeft: function() {
                return toNumber(this.$element.attr('data-offset-left')) || this.options.offsetLeft;
            },
            getCache: function() {
                var dataAttr = this.$element.attr('data-cache');
                if (typeof(dataAttr) !== 'undefined') {
                    switch (dataAttr.toLowerCase()) {
                        case 'true':
                        case 'yes':
                        case '1':
                            return true;
                        case 'false':
                        case 'no':
                        case '0':
                            return false;
                    }
                }
                return this.options.cache;
            },
            getTrigger: function() {
                return this.$element.attr('data-trigger') || this.options.trigger;
            },
            getDelayShow: function() {
                var dataAttr = this.$element.attr('data-delay-show');
                if (typeof(dataAttr) !== 'undefined') {
                    return dataAttr;
                }
                return this.options.delay.show === 0 ? 0 : this.options.delay.show || 100;
            },
            getHideDelay: function() {
                var dataAttr = this.$element.attr('data-delay-hide');
                if (typeof(dataAttr) !== 'undefined') {
                    return dataAttr;
                }
                return this.options.delay.hide === 0 ? 0 : this.options.delay.hide || 100;
            },
            getAnimation: function() {
                var dataAttr = this.$element.attr('data-animation');
                if(this.options.animation == null){
                    return dataAttr || this.options.animation;
                }else{
                    return  'ax-' +  this.options.animation;
                }


            },
            getHideAnimation: function() {
                var ani = this.getAnimation();
                return ani ? ani + '-out' : 'ax-out';
            },
            setTitle: function(title) {
                var $titleEl = this.getTitleElement();
                if (title) {
                    //check rtl
                    if (this.options.direction === 'rtl' && !$titleEl.hasClass(rtlClass)) {
                        $titleEl.addClass(rtlClass);
                    }
                    $titleEl.html(title);
                } else {
                    $titleEl.remove();
                }
            },
            hasContent: function() {
                return this.getContent();
            },
            canEmptyHide: function() {
                return this.options.hideEmpty && this.options.type === 'html';
            },
            getIframe: function() {
                var $iframe = $('<iframe></iframe>').attr('src', this.getUrl());
                var self = this;
                $.each(this._defaults.iframeOptions, function(opt) {
                    if (typeof self.options.iframeOptions[opt] !== 'undefined') {
                        $iframe.attr(opt, self.options.iframeOptions[opt]);
                    }
                });

                return $iframe;
            },
            getContent: function() {
                if (this.getUrl()) {
                    switch (this.options.type) {
                        case 'iframe':
                            this.content = this.getIframe();
                            break;
                        case 'html':
                            try {
                                this.content = $(this.getUrl());
                                if (!this.content.is(':visible')) {
                                    this.content.show();
                                }
                            } catch (error) {
                                throw new Error('Unable to get popup content. Invalid selector specified.');
                            }
                            break;
                    }
                } else if (!this.content) {
                    var content = '';
                    if ($.isFunction(this.options.content)) {
                        content = this.options.content.apply(this.$element[0], [this]);
                    } else {
                        content = this.options.content;
                    }
                    this.content = this.$element.attr('data-content') || content;
                    if (!this.content) {
                        var $next = this.$element.next();

                        if ($next && $next.hasClass(pluginClass + '-content')) {
                            this.content = $next;
                        }
                    }
                }
                return this.content;
            },
            setContent: function(content) {
                var $target = this.getTarget();
                var $ct = this.getContentElement();
                if (typeof content === 'string') {
                    $ct.html(content);
                } else if (content instanceof $) {
                    $ct.html('');
                    //Don't want to clone too many times.
                    if (!this.options.cache) {
                        content.clone(true, true).removeClass(pluginClass + '-content').appendTo($ct);
                    } else {
                        content.removeClass(pluginClass + '-content').appendTo($ct);
                    }
                }
                this.$target = $target;
                $ct.axScroll();
            },
            isAsync: function() {
                return this.options.type === 'async';
            },
            setContentASync: function(content) {
                var that = this;
                if (this.xhr) {
                    return;
                }
                this.xhr = $.ajax({
                    url: this.getUrl(),
                    type: this.options.async.type,
                    cache: this.getCache(),
                    beforeSend: function(xhr, settings) {
                        if (that.options.async.before) {
                            that.options.async.before(that, xhr, settings);
                        }
                    },
                    success: function(data) {
                        that.bindBodyEvents();
                        if (content && $.isFunction(content)) {
                            that.content = content.apply(that.$element[0], [data]);
                        } else {
                            that.content = data;
                        }
                        that.setContent(that.content);
                        var $targetContent = that.getContentElement();
                        $targetContent.removeAttr('style');
                        that.displayContent();
                        if (that.options.async.success) {
                            that.options.async.success(that, data);
                        }
                    },
                    complete: function() {
                        that.xhr = null;
                    },
                    error: function(xhr, data) {
                        if (that.options.async.error) {
                            that.options.async.error(that, xhr, data);
                        }
                    }
                });
            },

            bindBodyEvents: function() {
                if (_isBodyEventHandled) {
                    return;
                }
                if (this.options.dismissible && this.getTrigger() === 'click') {
                    if (isMobile) {
                        $document.off('touchstart.ax-popup').on('touchstart.ax-popup', $.proxy(this.bodyTouchStartHandler, this));
                    } else {
                        $document.off('keyup.ax-popup').on('keyup.ax-popup', $.proxy(this.escapeHandler, this));
                        $document.off('click.ax-popup').on('click.ax-popup', $.proxy(this.bodyClickHandler, this));
                    }
                } else if (this.getTrigger() === 'hover') {
                    $document.off('touchend.ax-popup')
                        .on('touchend.ax-popup', $.proxy(this.bodyClickHandler, this));
                }
            },

            /* event handlers */
            mouseenterHandler: function(e) {
                var self = this;

                if (e && this.options.selector) {
                    self = this.delegate(e.currentTarget);
                }

                if (self._timeout) {
                    clearTimeout(self._timeout);
                }
                self._enterTimeout = setTimeout(function() {
                    if (!self.getTarget().is(':visible')) {
                        self.show();
                    }
                }, this.getDelayShow());
            },
            mouseleaveHandler: function() {
                var self = this;
                clearTimeout(self._enterTimeout);
                //key point, set the _timeout  then use clearTimeout when mouse leave
                self._timeout = setTimeout(function() {
                    self.hide();
                }, this.getHideDelay());
            },
            escapeHandler: function(e) {
                if (e.keyCode === 27) {
                    this.hideAll();
                }
            },
            bodyTouchStartHandler: function(e) {
                var self = this;
                var $eventEl = $(e.currentTarget);
                $eventEl.on('touchend', function(e) {
                    self.bodyClickHandler(e);
                    $eventEl.off('touchend');
                });
                $eventEl.on('touchmove', function() {
                    $eventEl.off('touchend');
                });
            },
            bodyClickHandler: function(e) {
                _isBodyEventHandled = true;
                var canHide = true;
                for (var i = 0; i < _srcElements.length; i++) {
                    var pop = getPopFromElement(_srcElements[i]);
                    if (pop && pop._opened) {
                        var offset = pop.getTarget().offset();
                        var popX1 = offset.left;
                        var popY1 = offset.top;
                        var popX2 = offset.left + pop.getTarget().width();
                        var popY2 = offset.top + pop.getTarget().height();
                        var pt = pointerEventToXY(e);
                        var inPop = pt.x >= popX1 && pt.x <= popX2 && pt.y >= popY1 && pt.y <= popY2;
                        if (inPop) {
                            canHide = false;
                            break;
                        }
                    }
                }
                if (canHide) {
                    hideAllPop();
                }
            },

            /*
            targetClickHandler: function() {
                this._targetclick = true;
            },
            */

            //reset and init the target events;
            initTargetEvents: function() {
                if (this.getTrigger() === 'hover') {
                    this.$target
                        .off('mouseenter mouseleave')
                        .on('mouseenter', $.proxy(this.mouseenterHandler, this))
                        .on('mouseleave', $.proxy(this.mouseleaveHandler, this));
                }
                this.$target.find('.ax-close').off('click').on('click', $.proxy(this.hide, this, true));
                //this.$target.off('click.ax-popup').on('click.ax-popup', $.proxy(this.targetClickHandler, this));
            },
            /* utils methods */
            //caculate placement of the popup
            getPlacement: function(pos) {
                var
                    placement,
                    container = this.options.container,
                    clientWidth = container.innerWidth(),
                    clientHeight = container.innerHeight(),
                    scrollTop = container.scrollTop(),
                    scrollLeft = container.scrollLeft(),
                    pageX = Math.max(0, pos.left - scrollLeft),
                    pageY = Math.max(0, pos.top - scrollTop);
                //arrowSize = 20;

                //if placement equals auto，caculate the placement by element information;
                if (typeof(this.options.placement) === 'function') {
                    placement = this.options.placement.call(this, this.getTarget()[0], this.$element[0]);
                } else {
                    placement = this.$element.data('placement') ||this.options.placement;
                }

                var isH = placement === 'horizontal';
                var isV = placement === 'vertical';
                var detect = placement === 'auto' || isH || isV;

                if (detect) {
                    if (pageX < clientWidth / 3) {
                        if (pageY < clientHeight / 3) {
                            placement = isH ? 'right-bottom' : 'bottom-right';
                        } else if (pageY < clientHeight * 2 / 3) {
                            if (isV) {
                                placement = pageY <= clientHeight / 2 ? 'bottom-right' : 'top-right';
                            } else {
                                placement = 'right';
                            }
                        } else {
                            placement = isH ? 'right-top' : 'top-right';
                        }
                        //placement= pageY>targetHeight+arrowSize?'top-right':'bottom-right';
                    } else if (pageX < clientWidth * 2 / 3) {
                        if (pageY < clientHeight / 3) {
                            if (isH) {
                                placement = pageX <= clientWidth / 2 ? 'right-bottom' : 'left-bottom';
                            } else {
                                placement = 'bottom';
                            }
                        } else if (pageY < clientHeight * 2 / 3) {
                            if (isH) {
                                placement = pageX <= clientWidth / 2 ? 'right' : 'left';
                            } else {
                                placement = pageY <= clientHeight / 2 ? 'bottom' : 'top';
                            }
                        } else {
                            if (isH) {
                                placement = pageX <= clientWidth / 2 ? 'right-top' : 'left-top';
                            } else {
                                placement = 'top';
                            }
                        }
                    } else {
                        //placement = pageY>targetHeight+arrowSize?'top-left':'bottom-left';
                        if (pageY < clientHeight / 3) {
                            placement = isH ? 'left-bottom' : 'bottom-left';
                        } else if (pageY < clientHeight * 2 / 3) {
                            if (isV) {
                                placement = pageY <= clientHeight / 2 ? 'bottom-left' : 'top-left';
                            } else {
                                placement = 'left';
                            }
                        } else {
                            placement = isH ? 'left-top' : 'top-left';
                        }
                    }
                } else if (placement === 'auto-top') {
                    if (pageX < clientWidth / 3) {
                        placement = 'top-right';
                    } else if (pageX < clientWidth * 2 / 3) {
                        placement = 'top';
                    } else {
                        placement = 'top-left';
                    }
                } else if (placement === 'auto-bottom') {
                    if (pageX < clientWidth / 3) {
                        placement = 'bottom-right';
                    } else if (pageX < clientWidth * 2 / 3) {
                        placement = 'bottom';
                    } else {
                        placement = 'bottom-left';
                    }
                } else if (placement === 'auto-left') {
                    if (pageY < clientHeight / 3) {
                        placement = 'left-top';
                    } else if (pageY < clientHeight * 2 / 3) {
                        placement = 'left';
                    } else {
                        placement = 'left-bottom';
                    }
                } else if (placement === 'auto-right') {
                    if (pageY < clientHeight / 3) {
                        placement = 'right-bottom';
                    } else if (pageY < clientHeight * 2 / 3) {
                        placement = 'right';
                    } else {
                        placement = 'right-top';
                    }
                }
                if(clientIs == 'mobile'||clientIs == 'phone'||clientIs == 'pad'||clientIs == 'padflip'){
                    placement = 'center';
                }//
                return placement;
            },
            getElementPosition: function() {
                // If the container is the body or normal conatiner, just use $element.offset()
                var elRect = this.$element[0].getBoundingClientRect();
                var container = this.options.container;
                var cssPos = container.css('position');

                if (container.is(document.body) || cssPos === 'static') {
                    return $.extend({}, this.$element.offset(), {
                        width: this.$element[0].offsetWidth || elRect.width,
                        height: this.$element[0].offsetHeight || elRect.height
                    });
                    // Else fixed container need recalculate the  position
                } else if (cssPos === 'fixed') {
                    var containerRect = container[0].getBoundingClientRect();
                    return {
                        top: elRect.top - containerRect.top + container.scrollTop(),
                        left: elRect.left - containerRect.left + container.scrollLeft(),
                        width: elRect.width,
                        height: elRect.height
                    };
                } else if (cssPos === 'relative') {
                    return {
                        top: this.$element.offset().top - container.offset().top,
                        left: this.$element.offset().left - container.offset().left,
                        width: this.$element[0].offsetWidth || elRect.width,
                        height: this.$element[0].offsetHeight || elRect.height
                    };
                }
            },

            getTargetPositin: function(elementPos, placement, targetWidth, targetHeight) {
                var pos = elementPos,
                    container = this.options.container,
                    //clientWidth = container.innerWidth(),
                    //clientHeight = container.innerHeight(),
                    elementW = this.$element.outerWidth(),
                    elementH = this.$element.outerHeight(),
                    scrollTop = document.documentElement.scrollTop + container.scrollTop(),
                    scrollLeft = document.documentElement.scrollLeft + container.scrollLeft(),
                    position = {},
                    arrowOffset = null,
                    arrowSize = this.options.arrow ? 20 : 0,
                    padding = 10,
                    fixedW = elementW < arrowSize + padding ? arrowSize : 0,
                    fixedH = elementH < arrowSize + padding ? arrowSize : 0,
                    refix = 0,
                    pageH = document.documentElement.clientHeight + scrollTop,
                    pageW = document.documentElement.clientWidth + scrollLeft;

                var validLeft = pos.left + pos.width / 2 - fixedW > 0;
                var validRight = pos.left + pos.width / 2 + fixedW < pageW;
                var validTop = pos.top + pos.height / 2 - fixedH > 0;
                var validBottom = pos.top + pos.height / 2 + fixedH < pageH;


                switch (placement) {
                    case 'center':
                        position = {
                            top: $(window).height() / 2  -  targetHeight / 2,
                            left:$(window).width() / 2  -  targetWidth / 2,
                        };
                        break;
                    case 'bottom':
                        position = {
                            top: pos.top + pos.height,
                            left: pos.left + pos.width / 2 - targetWidth / 2
                        };
                        break;
                    case 'top':
                        position = {
                            top: pos.top - targetHeight,
                            left: pos.left + pos.width / 2 - targetWidth / 2
                        };
                        break;
                    case 'left':
                        position = {
                            top: pos.top + pos.height / 2 - targetHeight / 2,
                            left: pos.left - targetWidth
                        };
                        break;
                    case 'right':
                        position = {
                            top: pos.top + pos.height / 2 - targetHeight / 2,
                            left: pos.left + pos.width
                        };
                        break;
                    case 'top-right':
                        position = {
                            top: pos.top - targetHeight,
                            left: validLeft ? pos.left - fixedW : padding
                        };
                        arrowOffset = {
                            left: validLeft ? Math.min(elementW, targetWidth) / 2 + fixedW : _offsetOut
                        };
                        break;
                    case 'top-left':
                        refix = validRight ? fixedW : -padding;
                        position = {
                            top: pos.top - targetHeight,
                            left: pos.left - targetWidth + pos.width + refix
                        };
                        arrowOffset = {
                            left: validRight ? targetWidth - Math.min(elementW, targetWidth) / 2 - fixedW : _offsetOut
                        };
                        break;
                    case 'bottom-right':
                        position = {
                            top: pos.top + pos.height,
                            left: validLeft ? pos.left - fixedW : padding
                        };
                        arrowOffset = {
                            left: validLeft ? Math.min(elementW, targetWidth) / 2 + fixedW : _offsetOut
                        };
                        break;
                    case 'bottom-left':
                        refix = validRight ? fixedW : -padding;
                        position = {
                            top: pos.top + pos.height,
                            left: pos.left - targetWidth + pos.width + refix
                        };
                        arrowOffset = {
                            left: validRight ? targetWidth - Math.min(elementW, targetWidth) / 2 - fixedW : _offsetOut
                        };
                        break;
                    case 'right-top':
                        refix = validBottom ? fixedH : -padding;
                        position = {
                            top: pos.top - targetHeight + pos.height + refix,
                            left: pos.left + pos.width
                        };
                        arrowOffset = {
                            top: validBottom ? targetHeight - Math.min(elementH, targetHeight) / 2 - fixedH : _offsetOut
                        };
                        break;
                    case 'right-bottom':
                        position = {
                            top: validTop ? pos.top - fixedH : padding,
                            left: pos.left + pos.width
                        };
                        arrowOffset = {
                            top: validTop ? Math.min(elementH, targetHeight) / 2 + fixedH : _offsetOut
                        };
                        break;
                    case 'left-top':
                        refix = validBottom ? fixedH : -padding;
                        position = {
                            top: pos.top - targetHeight + pos.height + refix,
                            left: pos.left - targetWidth
                        };
                        arrowOffset = {
                            top: validBottom ? targetHeight - Math.min(elementH, targetHeight) / 2 - fixedH : _offsetOut
                        };
                        break;
                    case 'left-bottom':
                        position = {
                            top: validTop ? pos.top - fixedH : padding,
                            left: pos.left - targetWidth
                        };
                        arrowOffset = {
                            top: validTop ? Math.min(elementH, targetHeight) / 2 + fixedH : _offsetOut
                        };
                        break;

                }
                position.top += this.getOffsetTop();
                position.left += this.getOffsetLeft();

                return {
                    position: position,
                    arrowOffset: arrowOffset
                };
            }
        };
        $.fn[pluginName] = function(options, noInit) {
            var results = [];
            var $result = this.each(function() {

                var axPopup = $.data(this, 'plugin_' + pluginName);
                if (!axPopup) {
                    if (!options) {
                        axPopup = new AxPopup(this, null);
                    } else if (typeof options === 'string') {
                        if (options !== 'destroy') {
                            if (!noInit) {
                                axPopup = new AxPopup(this, null);
                                results.push(axPopup[options]());
                            }
                        }
                    } else if (typeof options === 'object') {
                        axPopup = new AxPopup(this, options);
                    }
                    $.data(this, 'plugin_' + pluginName, axPopup);
                } else {
                    if (options === 'destroy') {
                        axPopup.destroy();
                    } else if (typeof options === 'string') {
                        results.push(axPopup[options]());
                    }
                }
            });
            return (results.length) ? results : $result;
        };

        //Global object exposes to window.
        var AxPopups = (function() {
            var _hideAll = function() {
                hideAllPop();
            };
            var _create = function(selector, options) {
                options = options || {};
                $(selector).axPopup(options);
            };
            var _isCreated = function(selector) {
                var created = true;
                $(selector).each(function(i, item) {
                    created = created && $(item).data('plugin_' + pluginName) !== undefined;
                });
                return created;
            };
            var _show = function(selector, options) {
                if (options) {
                    $(selector).axPopup(options).axPopup('show');
                } else {
                    $(selector).axPopup('show');
                }
            };
            var _hide = function(selector) {
                $(selector).axPopup('hide');
            };

            var _setDefaultOptions = function(options) {
                defaults = $.extend({}, defaults, options);
            };

            var _updateContent = function(selector, content) {
                var pop = $(selector).data('plugin_' + pluginName);
                if (pop) {
                    var cache = pop.getCache();
                    pop.options.cache = false;
                    pop.options.content = content;
                    if (pop._opened) {
                        pop._opened = false;
                        pop.show();
                    } else {
                        if (pop.isAsync()) {
                            pop.setContentASync(content);
                        } else {
                            pop.setContent(content);
                        }
                    }
                    pop.options.cache = cache;
                }
            };

            var _updateContentAsync = function(selector, url) {
                var pop = $(selector).data('plugin_' + pluginName);
                if (pop) {
                    var cache = pop.getCache();
                    var type = pop.options.type;
                    pop.options.cache = false;
                    pop.options.url = url;

                    if (pop._opened) {
                        pop._opened = false;
                        pop.show();
                    } else {
                        pop.options.type = 'async';
                        pop.setContentASync(pop.content);
                    }
                    pop.options.cache = cache;
                    pop.options.type = type;
                }
            };

            return {
                show: _show,
                hide: _hide,
                create: _create,
                isCreated: _isCreated,
                hideAll: _hideAll,
                updateContent: _updateContent,
                updateContentAsync: _updateContentAsync,
                setDefaultOptions: _setDefaultOptions
            };
        })();
        window.axPopups = AxPopups;
    }));
})(window, document);

/* menu */
(function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory(require("jquery")) : typeof define === "function" && define.amd ? define(["jquery"], factory) : (global = global || self, global.axMenu = factory(global.jQuery))
}(this, function ($) {
    $ = $ && $.hasOwnProperty("default") ? $["default"] : $;

    function _extends() {
        _extends = Object.assign || function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key]
                    }
                }
            }
            return target
        };
        return _extends.apply(this, arguments)
    }

    var Util = function ($) {
        var TRANSITION_END = "transitionend";
        var Util = {
            TRANSITION_END: "mmTransitionEnd", triggerTransitionEnd: function triggerTransitionEnd(element) {
                $(element).trigger(TRANSITION_END)
            }, supportsTransitionEnd: function supportsTransitionEnd() {
                return Boolean(TRANSITION_END)
            }
        };

        function getSpecialTransitionEndEvent() {
            return {
                bindType: TRANSITION_END, delegateType: TRANSITION_END, handle: function handle(event) {
                    if ($(event.target).is(this)) {
                        return event.handleObj.handler.apply(this, arguments)
                    }
                    return undefined
                }
            }
        }

        function transitionEndEmulator(duration) {
            var _this = this;
            var called = false;
            $(this).one(Util.TRANSITION_END, function () {
                called = true
            });
            setTimeout(function () {
                if (!called) {
                    Util.triggerTransitionEnd(_this)
                }
            }, duration);
            return this
        }

        function setTransitionEndSupport() {
            $.fn.mmEmulateTransitionEnd = transitionEndEmulator;
            $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent()
        }

        setTransitionEndSupport();
        return Util
    }($);
    var NAME = "axMenu";
    var DATA_KEY = "axMenu";
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = ".data-api";
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var TRANSITION_DURATION = 350;
    var Default = {toggle: true, cookie: false,row:false,hover:false, width:'',dropWidth:'',gutter:'',trigger:'click',preventDefault: true, triggerElement: "a", parentTrigger: "li", subMenu: "ul"};
    var Event = {
        SHOW: "show" + EVENT_KEY,
        SHOWN: "shown" + EVENT_KEY,
        HIDE: "hide" + EVENT_KEY,
        HIDDEN: "hidden" + EVENT_KEY,
        CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
        CLICK_DATA_API_2: "mouseenter" + EVENT_KEY + DATA_API_KEY,
        CLICK_DATA_API_3: "mouseleaver" + EVENT_KEY + DATA_API_KEY,
    };
    var ClassName = {
        AX: "",
        ACTIVE: "ax-active",
        SHOW: "ax-show",
        COLLAPSE: "ax-collapse",
        COLLAPSING: "ax-collapsing",
        COLLAPSED: "ax-collapsed",
        ROW:"ax-menu-row",
        HOVER:"ax-menu-hover",
    };
    var AxMenu = function () {
        function AxMenu(element, config) {
            this.element = element;
            this.config = _extends({}, Default, {}, config);
            this.transitioning = null;
            this.init()
        }

        var _proto = AxMenu.prototype;
        _proto.init = function init() {
            var self = this;
            var conf = this.config;
            var el = $(this.element);
            el.addClass(ClassName.AX);
            if(conf.row==true){
                el.addClass(ClassName.ROW);
            }
            if(conf.dropWidth!=''){
                el.children("li").children("ul").css("width",conf.dropWidth);
            }
            if(conf.width!=''){
                el.children("li").css("width",conf.width);
                var offsetLeft=(el.children("li").width() - el.children("li").children("ul").width() - 2) / 2;
                el.children("li").children("ul").css("left",offsetLeft);
            }
            if(conf.gutter!=''){
                el.children("li").css({"margin-left":conf.gutter,"margin-right":conf.gutter});
            }

            //cookie
            if (conf.cookie == true){

                var thisMenuid =el.attr("id");
                el.find("li").each(function(i){
                    $(this).children("a:first-child").attr("aria-cookie",thisMenuid+i);
                });

                var cookieId = "menu-"+thisMenuid;
                var cookieExpand = "expand-"+thisMenuid;

                el.find("a").click(function () {
                    var thismenu = $(this).attr("aria-cookie");
                    $.cookie(cookieId, thismenu, { expires: 365000, path: '/' });
                    var thisexpand = $(this).attr("aria-expanded");
                    if(typeof($(this).attr("aria-expanded"))=="undefined"){
                        $.cookie(cookieExpand, 'false', { expires: 365000, path: '/' });
                    }else{
                        $.cookie(cookieExpand, thisexpand, { expires: 365000, path: '/' });
                    }

                });

                //
                var menuid =$("[aria-cookie="+$.cookie(cookieId)+"]");
                if($.cookie(cookieExpand) == "true" ){
                    menuid.parent("li").removeClass(ClassName.ACTIVE);
                }else{
                    menuid.parent("li").addClass(ClassName.ACTIVE);
                }
            }

//
            var thisActive = el.find(conf.parentTrigger + "." + ClassName.ACTIVE);

            $(thisActive).each(function(){
                if ($(this).children("ul").length > 0) {
                    $(this).children(conf.triggerElement).attr("aria-expanded", "true");
                } else {
                    $(this).children(conf.triggerElement).attr("aria-expanded", "childless");
                }
            });

//
            el.find(conf.parentTrigger + "." + ClassName.ACTIVE).parents(conf.parentTrigger).addClass(ClassName.ACTIVE);

            el.find(conf.parentTrigger + "." + ClassName.ACTIVE).parents(conf.parentTrigger).children(conf.triggerElement).attr("aria-expanded", "true");

            el.find(conf.parentTrigger + "." + ClassName.ACTIVE).has(conf.subMenu).children(conf.subMenu).addClass(ClassName.COLLAPSE + " " + ClassName.SHOW);
            el.find(conf.parentTrigger).not("." + ClassName.ACTIVE).has(conf.subMenu).children(conf.subMenu).addClass(ClassName.COLLAPSE);

            //
            if(conf.trigger=="hover"){
                el.find(conf.parentTrigger).on("mouseleave", function (e) {
                    $(this).attr('class','');
                    $(this).children(conf.triggerElement).attr('aria-expanded', 'false');
                    $(this).children(conf.subMenu).removeClass(ClassName.SHOW);

                    if ($(this).children(conf.subMenu).height() === 0 || $(this).children(conf.subMenu).css('display') === 'none') {
                        complete();
                    } else {
                        $(this).children(conf.subMenu).height(0).one(Util.TRANSITION_END, complete).mmEmulateTransitionEnd(TRANSITION_DURATION);
                    }

                });

                el.find(conf.parentTrigger).on(Event.CLICK_DATA_API_2, function (e) {
                    // eslint-disable-line func-names
                    var eTar = $(this).children(conf.triggerElement);

                    if (eTar.attr("aria-disabled") === "true") {
                        return
                    }
                    if (conf.preventDefault && eTar.attr("href") === "#") {
                        e.preventDefault()
                    }
                    var paRent = eTar.parent(conf.parentTrigger);
                    var sibLi = paRent.siblings(conf.parentTrigger);
                    var sibTrigger = sibLi.children(conf.triggerElement);

                    if (paRent.hasClass(ClassName.ACTIVE)) {
                        eTar.attr("aria-expanded", "false");
                        self.removeActive(paRent)
                    } else {
                        if (eTar.next("ul").length > 0) {
                            eTar.attr("aria-expanded", "true")
                        } else {
                            eTar.attr("aria-expanded", "childless")
                        }
                        self.setActive(paRent);
                        if (conf.toggle) {
                            self.removeActive(sibLi);
                            sibTrigger.attr("aria-expanded", "false")
                        }
                    }


                    if (conf.onTransitionStart) {
                        conf.onTransitionStart(e)
                    }
                });

            }else{
                el.find(conf.parentTrigger).children(conf.triggerElement).on(Event.CLICK_DATA_API, function (e) {
                    var eTar = $(this);
                    if (eTar.attr("aria-disabled") === "true") {
                        return
                    }
                    if (conf.preventDefault && eTar.attr("href") === "#") {
                        e.preventDefault()
                    }
                    var paRent = eTar.parent(conf.parentTrigger);
                    var sibLi = paRent.siblings(conf.parentTrigger);
                    var sibTrigger = sibLi.children(conf.triggerElement);

                    if (paRent.hasClass(ClassName.ACTIVE)) {
                        eTar.attr("aria-expanded", "false");
                        self.removeActive(paRent)
                    } else {
                        if (eTar.next("ul").length > 0) {
                            eTar.attr("aria-expanded", "true")
                        } else {
                            eTar.attr("aria-expanded", "childless")
                        }
                        self.setActive(paRent);
                        if (conf.toggle) {
                            self.removeActive(sibLi);
                            sibTrigger.attr("aria-expanded", "false")
                        }
                    }


                    if (conf.onTransitionStart) {
                        conf.onTransitionStart(e)
                    }

                })
            }
//





        };
        _proto.setActive = function setActive(li) {
            $(li).addClass(ClassName.ACTIVE);
            var ul = $(li).children(this.config.subMenu);
            if (ul.length > 0 && !ul.hasClass(ClassName.SHOW)) {
                this.show(ul)
            }
        };
        _proto.removeActive = function removeActive(li) {
            $(li).removeClass(ClassName.ACTIVE);
            var ul = $(li).children(this.config.subMenu + "." + ClassName.SHOW);
            if (ul.length > 0) {
                this.hide(ul)
            }
        };
        _proto.show = function show(element) {
            var _this = this;
            if (this.transitioning || $(element).hasClass(ClassName.COLLAPSING)) {
                return
            }
            var elem = $(element);
            var startEvent = $.Event(Event.SHOW);
            elem.trigger(startEvent);
            if (startEvent.isDefaultPrevented()) {
                return
            }
            elem.parent(this.config.parentTrigger).addClass(ClassName.ACTIVE);
            if (this.config.toggle) {
                var toggleElem = elem.parent(this.config.parentTrigger).siblings().children(this.config.subMenu + "." + ClassName.SHOW);
                this.hide(toggleElem)
            }
            elem.removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING).height(0);
            this.setTransitioning(true);
            var complete = function complete() {
                if (!_this.config || !_this.element) {
                    return
                }
                elem.removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE + " " + ClassName.SHOW).height("");
                _this.setTransitioning(false);
                elem.trigger(Event.SHOWN)
            };
            elem.height(element[0].scrollHeight).one(Util.TRANSITION_END, complete).mmEmulateTransitionEnd(TRANSITION_DURATION)
        };
        _proto.hide = function hide(element) {
            var _this2 = this;
            if (this.transitioning || !$(element).hasClass(ClassName.SHOW)) {
                return
            }
            var elem = $(element);
            var startEvent = $.Event(Event.HIDE);
            elem.trigger(startEvent);
            if (startEvent.isDefaultPrevented()) {
                return
            }
            elem.parent(this.config.parentTrigger).removeClass(ClassName.ACTIVE);
            elem.height(elem.height())[0].offsetHeight;
            elem.addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);
            this.setTransitioning(true);
            var complete = function complete() {
                if (!_this2.config || !_this2.element) {
                    return
                }
                if (_this2.transitioning && _this2.config.onTransitionEnd) {
                    _this2.config.onTransitionEnd()
                }
                _this2.setTransitioning(false);
                elem.trigger(Event.HIDDEN);
                elem.removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE)
            };
            if (elem.height() === 0 || elem.css("display") === "none") {
                complete()
            } else {
                elem.height(0).one(Util.TRANSITION_END, complete).mmEmulateTransitionEnd(TRANSITION_DURATION)
            }
        };
        _proto.setTransitioning = function setTransitioning(isTransitioning) {
            this.transitioning = isTransitioning
        };
        _proto.dispose = function dispose() {
            $.removeData(this.element, DATA_KEY);
            $(this.element).find(this.config.parentTrigger)//.has(this.config.subMenu)
                .children(this.config.triggerElement).off(Event.CLICK_DATA_API);
            this.transitioning = null;
            this.config = null;
            this.element = null
        };
        AxMenu.jQueryInterface = function jQueryInterface(config) {
            return this.each(function () {
                var $this = $(this);
                var data = $this.data(DATA_KEY);
                var conf = _extends({}, Default, {}, $this.data(), {}, typeof config === 'object' && config ? config : {});
                if (!data) {
                    data = new AxMenu(this, conf);
                    $this.data(DATA_KEY, data)
                }
                if (typeof config === "string") {
                    if (data[config] === undefined) {
                        throw new Error('No method named "' + config + '"')
                    }
                    data[config]()
                }
            })
        };
        return AxMenu
    }();
    $.fn[NAME] = AxMenu.jQueryInterface;
    $.fn[NAME].Constructor = AxMenu;
    $.fn[NAME].noConflict = function () {
        $.fn[NAME] = JQUERY_NO_CONFLICT;
        return AxMenu.jQueryInterface
    };
    return AxMenu
}));
/* select2 */
;(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = function (root, jQuery) {
      if (jQuery === undefined) {
        // require('jQuery') returns a factory that requires window to
        // build a jQuery instance, we normalize how we use modules
        // that require this pattern but the window provided is a noop
        // if it's defined (how jquery works)
        if (typeof window !== 'undefined') {
          jQuery = require('jquery');
        }
        else {
          jQuery = require('jquery')(root);
        }
      }
      factory(jQuery);
      return jQuery;
    };
  } else {
    // Browser globals
    factory(jQuery);
  }
} (function (jQuery) {
  // This is needed so we can catch the AMD loader configuration and use it
  // The inner file should be wrapped (by `banner.start.js`) in a function that
  // returns the AMD loader references.
  var S2 =(function () {
  // Restore the Select2 AMD loader so it can be used
  // Needed mostly in the language files, where the loader is not inserted
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
    var S2 = jQuery.fn.select2.amd;
  }
var S2;(function () { if (!S2 || !S2.requirejs) {
if (!S2) { S2 = {}; } else { require = S2; }
/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part, normalizedBaseParts,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name) {
            name = name.split('/');
            lastIndex = name.length - 1;

            // If wanting node ID compatibility, strip .js from end
            // of IDs. Have to do this here, and not in nameToUrl
            // because node allows either .js or non .js to map
            // to same file.
            if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
            }

            // Starts with a '.' so need the baseName
            if (name[0].charAt(0) === '.' && baseParts) {
                //Convert baseName to array, and lop off the last part,
                //so that . matches that 'directory' and not name of the baseName's
                //module. For instance, baseName of 'one/two/three', maps to
                //'one/two/three.js', but we want the directory, 'one/two' for
                //this normalization.
                normalizedBaseParts = baseParts.slice(0, baseParts.length - 1);
                name = normalizedBaseParts.concat(name);
            }

            //start trimDots
            for (i = 0; i < name.length; i++) {
                part = name[i];
                if (part === '.') {
                    name.splice(i, 1);
                    i -= 1;
                } else if (part === '..') {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && name[2] === '..') || name[i - 1] === '..') {
                        continue;
                    } else if (i > 0) {
                        name.splice(i - 1, 2);
                        i -= 2;
                    }
                }
            }
            //end trimDots

            name = name.join('/');
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    //Creates a parts array for a relName where first part is plugin ID,
    //second part is resource ID. Assumes relName has already been normalized.
    function makeRelParts(relName) {
        return relName ? splitPrefix(relName) : [];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relParts) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0],
            relResourceName = relParts[1];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relResourceName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relResourceName));
            } else {
                name = normalize(name, relResourceName);
            }
        } else {
            name = normalize(name, relResourceName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i, relParts,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;
        relParts = makeRelParts(relName);

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relParts);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, makeRelParts(callback)).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

S2.requirejs = requirejs;S2.require = require;S2.define = define;
}
}());
S2.define("almond", function(){});

/* global jQuery:false, $:false */
S2.define('jquery',[],function () {
  var _$ = jQuery || $;

  if (_$ == null && console && console.error) {
    console.error(
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
      'found. Make sure that you are including jQuery before Select2 on your ' +
      'web page.'
    );
  }

  return _$;
});

S2.define('select2/utils',[
  'jquery'
], function ($) {
  var Utils = {};

  Utils.Extend = function (ChildClass, SuperClass) {
    var __hasProp = {}.hasOwnProperty;

    function BaseConstructor () {
      this.constructor = ChildClass;
    }

    for (var key in SuperClass) {
      if (__hasProp.call(SuperClass, key)) {
        ChildClass[key] = SuperClass[key];
      }
    }

    BaseConstructor.prototype = SuperClass.prototype;
    ChildClass.prototype = new BaseConstructor();
    ChildClass.__super__ = SuperClass.prototype;

    return ChildClass;
  };

  function getMethods (theClass) {
    var proto = theClass.prototype;

    var methods = [];

    for (var methodName in proto) {
      var m = proto[methodName];

      if (typeof m !== 'function') {
        continue;
      }

      if (methodName === 'constructor') {
        continue;
      }

      methods.push(methodName);
    }

    return methods;
  }

  Utils.Decorate = function (SuperClass, DecoratorClass) {
    var decoratedMethods = getMethods(DecoratorClass);
    var superMethods = getMethods(SuperClass);

    function DecoratedClass () {
      var unshift = Array.prototype.unshift;

      var argCount = DecoratorClass.prototype.constructor.length;

      var calledConstructor = SuperClass.prototype.constructor;

      if (argCount > 0) {
        unshift.call(arguments, SuperClass.prototype.constructor);

        calledConstructor = DecoratorClass.prototype.constructor;
      }

      calledConstructor.apply(this, arguments);
    }

    DecoratorClass.displayName = SuperClass.displayName;

    function ctr () {
      this.constructor = DecoratedClass;
    }

    DecoratedClass.prototype = new ctr();

    for (var m = 0; m < superMethods.length; m++) {
      var superMethod = superMethods[m];

      DecoratedClass.prototype[superMethod] =
        SuperClass.prototype[superMethod];
    }

    var calledMethod = function (methodName) {
      // Stub out the original method if it's not decorating an actual method
      var originalMethod = function () {};

      if (methodName in DecoratedClass.prototype) {
        originalMethod = DecoratedClass.prototype[methodName];
      }

      var decoratedMethod = DecoratorClass.prototype[methodName];

      return function () {
        var unshift = Array.prototype.unshift;

        unshift.call(arguments, originalMethod);

        return decoratedMethod.apply(this, arguments);
      };
    };

    for (var d = 0; d < decoratedMethods.length; d++) {
      var decoratedMethod = decoratedMethods[d];

      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
    }

    return DecoratedClass;
  };

  var Observable = function () {
    this.listeners = {};
  };

  Observable.prototype.on = function (event, callback) {
    this.listeners = this.listeners || {};

    if (event in this.listeners) {
      this.listeners[event].push(callback);
    } else {
      this.listeners[event] = [callback];
    }
  };

  Observable.prototype.trigger = function (event) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);

    this.listeners = this.listeners || {};

    // Params should always come in as an array
    if (params == null) {
      params = [];
    }

    // If there are no arguments to the event, use a temporary object
    if (params.length === 0) {
      params.push({});
    }

    // Set the `_type` of the first object to the event
    params[0]._type = event;

    if (event in this.listeners) {
      this.invoke(this.listeners[event], slice.call(arguments, 1));
    }

    if ('*' in this.listeners) {
      this.invoke(this.listeners['*'], arguments);
    }
  };

  Observable.prototype.invoke = function (listeners, params) {
    for (var i = 0, len = listeners.length; i < len; i++) {
      listeners[i].apply(this, params);
    }
  };

  Utils.Observable = Observable;

  Utils.generateChars = function (length) {
    var chars = '';

    for (var i = 0; i < length; i++) {
      var randomChar = Math.floor(Math.random() * 36);
      chars += randomChar.toString(36);
    }

    return chars;
  };

  Utils.bind = function (func, context) {
    return function () {
      func.apply(context, arguments);
    };
  };

  Utils._convertData = function (data) {
    for (var originalKey in data) {
      var keys = originalKey.split('-');

      var dataLevel = data;

      if (keys.length === 1) {
        continue;
      }

      for (var k = 0; k < keys.length; k++) {
        var key = keys[k];

        // Lowercase the first letter
        // By default, dash-separated becomes camelCase
        key = key.substring(0, 1).toLowerCase() + key.substring(1);

        if (!(key in dataLevel)) {
          dataLevel[key] = {};
        }

        if (k == keys.length - 1) {
          dataLevel[key] = data[originalKey];
        }

        dataLevel = dataLevel[key];
      }

      delete data[originalKey];
    }

    return data;
  };

  Utils.hasScroll = function (index, el) {
    // Adapted from the function created by @ShadowScripter
    // and adapted by @BillBarry on the Stack Exchange Code Review website.
    // The original code can be found at
    // http://codereview.stackexchange.com/q/13338
    // and was designed to be used with the Sizzle selector engine.

    var $el = $(el);
    var overflowX = el.style.overflowX;
    var overflowY = el.style.overflowY;

    //Check both x and y declarations
    if (overflowX === overflowY &&
        (overflowY === 'hidden' || overflowY === 'visible')) {
      return false;
    }

    if (overflowX === 'scroll' || overflowY === 'scroll') {
      return true;
    }

    return ($el.innerHeight() < el.scrollHeight ||
      $el.innerWidth() < el.scrollWidth);
  };

  Utils.escapeMarkup = function (markup) {
    var replaceMap = {
      '\\': '&#92;',
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#47;'
    };

    // Do not try to escape the markup if it's not a string
    if (typeof markup !== 'string') {
      return markup;
    }

    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
      return replaceMap[match];
    });
  };

  // Append an array of jQuery nodes to a given element.
  Utils.appendMany = function ($element, $nodes) {
    // jQuery 1.7.x does not support $.fn.append() with an array
    // Fall back to a jQuery object collection using $.fn.add()
    if ($.fn.jquery.substr(0, 3) === '1.7') {
      var $jqNodes = $();

      $.map($nodes, function (node) {
        $jqNodes = $jqNodes.add(node);
      });

      $nodes = $jqNodes;
    }

    $element.append($nodes);
  };

  // Cache objects in Utils.__cache instead of $.data (see #4346)
  Utils.__cache = {};

  var id = 0;
  Utils.GetUniqueElementId = function (element) {
    // Get a unique element Id. If element has no id,
    // creates a new unique number, stores it in the id
    // attribute and returns the new id.
    // If an id already exists, it simply returns it.

    var select2Id = element.getAttribute('data-select-id');
    if (select2Id == null) {
      // If element has id, use it.
      if (element.id) {
        select2Id = element.id;
        element.setAttribute('data-select-id', select2Id);
      } else {
        element.setAttribute('data-select-id', ++id);
        select2Id = id.toString();
      }
    }
    return select2Id;
  };

  Utils.StoreData = function (element, name, value) {
    // Stores an item in the cache for a specified element.
    // name is the cache key.
    var id = Utils.GetUniqueElementId(element);
    if (!Utils.__cache[id]) {
      Utils.__cache[id] = {};
    }

    Utils.__cache[id][name] = value;
  };

  Utils.GetData = function (element, name) {
    // Retrieves a value from the cache by its key (name)
    // name is optional. If no name specified, return
    // all cache items for the specified element.
    // and for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (name) {
      if (Utils.__cache[id]) {
        if (Utils.__cache[id][name] != null) {
          return Utils.__cache[id][name];
        }
        return $(element).data(name); // Fallback to HTML5 data attribs.
      }
      return $(element).data(name); // Fallback to HTML5 data attribs.
    } else {
      return Utils.__cache[id];
    }
  };

  Utils.RemoveData = function (element) {
    // Removes all cached items for a specified element.
    var id = Utils.GetUniqueElementId(element);
    if (Utils.__cache[id] != null) {
      delete Utils.__cache[id];
    }

    element.removeAttribute('data-select-id');
  };

  return Utils;
});

S2.define('select2/results',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Results ($element, options, dataAdapter) {
    this.$element = $element;
    this.data = dataAdapter;
    this.options = options;

    Results.__super__.constructor.call(this);
  }

  Utils.Extend(Results, Utils.Observable);

  Results.prototype.render = function () {
    var $results = $(
      '<ul class="select2-results-options" role="listbox"></ul>'
    );

    if (this.options.get('multiple')) {
      $results.attr('aria-multiselectable', 'true');
    }

    this.$results = $results;

    return $results;
  };

  Results.prototype.clear = function () {
    this.$results.empty();
  };

  Results.prototype.displayMessage = function (params) {
    var escapeMarkup = this.options.get('escapeMarkup');

    this.clear();
    this.hideLoading();

    var $message = $(
      '<li role="alert" aria-live="assertive"' +
      ' class="select2-results-option"></li>'
    );

    var message = this.options.get('translations').get(params.message);

    $message.append(
      escapeMarkup(
        message(params.args)
      )
    );

    $message[0].className += ' select2-results-message';

    this.$results.append($message);
  };

  Results.prototype.hideMessages = function () {
    this.$results.find('.select2-results-message').remove();
  };

  Results.prototype.append = function (data) {
    this.hideLoading();

    var $options = [];

    if (data.results == null || data.results.length === 0) {
      if (this.$results.children().length === 0) {
        this.trigger('results:message', {
          message: 'noResults'
        });
      }

      return;
    }

    data.results = this.sort(data.results);

    for (var d = 0; d < data.results.length; d++) {
      var item = data.results[d];

      var $option = this.option(item);

      $options.push($option);
    }

    this.$results.append($options);
  };

  Results.prototype.position = function ($results, $dropdown) {
    var $resultsContainer = $dropdown.find('.select2-results');
    $resultsContainer.append($results);
  };

  Results.prototype.sort = function (data) {
    var sorter = this.options.get('sorter');

    return sorter(data);
  };

  Results.prototype.highlightFirstItem = function () {
    var $options = this.$results
      .find('.select2-results-option[aria-selected]');

    var $selected = $options.filter('[aria-selected=true]');

    // Check if there are any selected options
    if ($selected.length > 0) {
      // If there are selected options, highlight the first
      $selected.first().trigger('mouseenter');
    } else {
      // If there are no selected options, highlight the first option
      // in the dropdown
      $options.first().trigger('mouseenter');
    }

    this.ensureHighlightVisible();
  };

  Results.prototype.setClasses = function () {
    var self = this;

    this.data.current(function (selected) {
      var selectedIds = $.map(selected, function (s) {
        return s.id.toString();
      });

      var $options = self.$results
        .find('.select2-results-option[aria-selected]');

      $options.each(function () {
        var $option = $(this);

        var item = Utils.GetData(this, 'data');

        // id needs to be converted to a string when comparing
        var id = '' + item.id;

        if ((item.element != null && item.element.selected) ||
            (item.element == null && $.inArray(id, selectedIds) > -1)) {
          $option.attr('aria-selected', 'true');
        } else {
          $option.attr('aria-selected', 'false');
        }
      });

    });
  };

  Results.prototype.showLoading = function (params) {
    this.hideLoading();

    var loadingMore = this.options.get('translations').get('searching');

    var loading = {
      disabled: true,
      loading: true,
      text: loadingMore(params)
    };
    var $loading = this.option(loading);
    $loading.className += ' loading-results';

    this.$results.prepend($loading);
  };

  Results.prototype.hideLoading = function () {
    this.$results.find('.loading-results').remove();
  };

  Results.prototype.option = function (data) {
    var option = document.createElement('li');
    option.className = 'select2-results-option';

    var attrs = {
      'role': 'option',
      'aria-selected': 'false'
    };

    var matches = window.Element.prototype.matches ||
      window.Element.prototype.msMatchesSelector ||
      window.Element.prototype.webkitMatchesSelector;

    if ((data.element != null && matches.call(data.element, ':disabled')) ||
        (data.element == null && data.disabled)) {
      delete attrs['aria-selected'];
      attrs['aria-disabled'] = 'true';
    }

    if (data.id == null) {
      delete attrs['aria-selected'];
    }

    if (data._resultId != null) {
      option.id = data._resultId;
    }

    if (data.title) {
      option.title = data.title;
    }

    if (data.children) {
      attrs.role = 'group';
      attrs['aria-label'] = data.text;
      delete attrs['aria-selected'];
    }

    for (var attr in attrs) {
      var val = attrs[attr];

      option.setAttribute(attr, val);
    }

    if (data.children) {
      var $option = $(option);

      var label = document.createElement('strong');
      label.className = 'select2-results-group';

      var $label = $(label);
      this.template(data, label);

      var $children = [];

      for (var c = 0; c < data.children.length; c++) {
        var child = data.children[c];

        var $child = this.option(child);

        $children.push($child);
      }

      var $childrenContainer = $('<ul></ul>', {
        'class': 'select2-results-options select2-results-options-nested'
      });

      $childrenContainer.append($children);
      $(".select2-results-options").axScroll();//
      $option.append(label);
      $option.append($childrenContainer);
    } else {
      this.template(data, option);
    }

    Utils.StoreData(option, 'data', data);

    return option;
  };

  Results.prototype.bind = function (container, $container) {
    var self = this;

    var id = container.id + '-results';

    this.$results.attr('id', id);

    container.on('results:all', function (params) {
      self.clear();
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
        self.highlightFirstItem();
      }
    });

    container.on('results:append', function (params) {
      self.append(params.data);

      if (container.isOpen()) {
        self.setClasses();
      }
    });

    container.on('query', function (params) {
      self.hideMessages();
      self.showLoading(params);
    });

    container.on('select', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('unselect', function () {
      if (!container.isOpen()) {
        return;
      }

      self.setClasses();

      if (self.options.get('scrollAfterSelect')) {
        self.highlightFirstItem();
      }
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expended="true"
      self.$results.attr('aria-expanded', 'true');
      self.$results.attr('aria-hidden', 'false');

      self.setClasses();
      self.ensureHighlightVisible();
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expended="false"
      self.$results.attr('aria-expanded', 'false');
      self.$results.attr('aria-hidden', 'true');
      self.$results.removeAttr('aria-activedescendant');
    });

    container.on('results:toggle', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      $highlighted.trigger('mouseup');
    });

    container.on('results:select', function () {
      var $highlighted = self.getHighlightedResults();

      if ($highlighted.length === 0) {
        return;
      }

      var data = Utils.GetData($highlighted[0], 'data');

      if ($highlighted.attr('aria-selected') == 'true') {
        self.trigger('close', {});
      } else {
        self.trigger('select', {
          data: data
        });
      }
    });

    container.on('results:previous', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      // If we are already at the top, don't move further
      // If no options, currentIndex will be -1
      if (currentIndex <= 0) {
        return;
      }

      var nextIndex = currentIndex - 1;

      // If none are highlighted, highlight the first
      if ($highlighted.length === 0) {
        nextIndex = 0;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top;
      var nextTop = $next.offset().top;
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextTop - currentOffset < 0) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:next', function () {
      var $highlighted = self.getHighlightedResults();

      var $options = self.$results.find('[aria-selected]');

      var currentIndex = $options.index($highlighted);

      var nextIndex = currentIndex + 1;

      // If we are at the last option, stay there
      if (nextIndex >= $options.length) {
        return;
      }

      var $next = $options.eq(nextIndex);

      $next.trigger('mouseenter');

      var currentOffset = self.$results.offset().top +
        self.$results.outerHeight(false);
      var nextBottom = $next.offset().top + $next.outerHeight(false);
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

      if (nextIndex === 0) {
        self.$results.scrollTop(0);
      } else if (nextBottom > currentOffset) {
        self.$results.scrollTop(nextOffset);
      }
    });

    container.on('results:focus', function (params) {
      params.element.addClass('select2-results-option-highlighted');
    });

    container.on('results:message', function (params) {
      self.displayMessage(params);
    });

    if ($.fn.mousewheel) {
      this.$results.on('mousewheel', function (e) {
        var top = self.$results.scrollTop();

        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

        if (isAtTop) {
          self.$results.scrollTop(0);

          e.preventDefault();
          e.stopPropagation();
        } else if (isAtBottom) {
          self.$results.scrollTop(
            self.$results.get(0).scrollHeight - self.$results.height()
          );

          e.preventDefault();
          e.stopPropagation();
        }
      });
    }

    this.$results.on('mouseup', '.select2-results-option[aria-selected]',
      function (evt) {
      var $this = $(this);

      var data = Utils.GetData(this, 'data');

      if ($this.attr('aria-selected') === 'true') {
        if (self.options.get('multiple')) {
          self.trigger('unselect', {
            originalEvent: evt,
            data: data
          });
        } else {
          self.trigger('close', {});
        }

        return;
      }

      self.trigger('select', {
        originalEvent: evt,
        data: data
      });
    });

    this.$results.on('mouseenter', '.select2-results-option[aria-selected]',
      function (evt) {
      var data = Utils.GetData(this, 'data');

      self.getHighlightedResults()
          .removeClass('select2-results-option-highlighted');

      self.trigger('results:focus', {
        data: data,
        element: $(this)
      });
    });
  };

  Results.prototype.getHighlightedResults = function () {
    var $highlighted = this.$results
    .find('.select2-results-option-highlighted');

    return $highlighted;
  };

  Results.prototype.destroy = function () {
    this.$results.remove();
  };

  Results.prototype.ensureHighlightVisible = function () {
    var $highlighted = this.getHighlightedResults();

    if ($highlighted.length === 0) {
      return;
    }

    var $options = this.$results.find('[aria-selected]');

    var currentIndex = $options.index($highlighted);

    var currentOffset = this.$results.offset().top;
    var nextTop = $highlighted.offset().top;
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

    var offsetDelta = nextTop - currentOffset;
    nextOffset -= $highlighted.outerHeight(false) * 2;

    if (currentIndex <= 2) {
      this.$results.scrollTop(0);
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
      this.$results.scrollTop(nextOffset);
    }
  };

  Results.prototype.template = function (result, container) {
    var template = this.options.get('templateResult');
    var escapeMarkup = this.options.get('escapeMarkup');

    var content = template(result, container);

    if (content == null) {
      container.style.display = 'none';
    } else if (typeof content === 'string') {
      container.innerHTML = escapeMarkup(content);
    } else {
      $(container).append(content);
    }
  };

  return Results;
});

S2.define('select2/keys',[

], function () {
  var KEYS = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46
  };

  return KEYS;
});

S2.define('select2/selection/base',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function BaseSelection ($element, options) {
    this.$element = $element;
    this.options = options;

    BaseSelection.__super__.constructor.call(this);
  }

  Utils.Extend(BaseSelection, Utils.Observable);

  BaseSelection.prototype.render = function () {
    var $selection = $(
      '<span class="select-text" role="combobox" ' +
      ' aria-haspopup="true" aria-expanded="false">' +
      '</span>'
    );

    this._tabindex = 0;

    if (Utils.GetData(this.$element[0], 'old-tabindex') != null) {
      this._tabindex = Utils.GetData(this.$element[0], 'old-tabindex');
    } else if (this.$element.attr('tabindex') != null) {
      this._tabindex = this.$element.attr('tabindex');
    }

    $selection.attr('title', this.$element.attr('title'));
    $selection.attr('tabindex', this._tabindex);
    $selection.attr('aria-disabled', 'false');

    this.$selection = $selection;

    return $selection;
  };

  BaseSelection.prototype.bind = function (container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    this.container = container;

    this.$selection.on('focus', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('blur', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      if (evt.which === KEYS.SPACE) {
        evt.preventDefault();
      }
    });

    container.on('results:focus', function (params) {
      self.$selection.attr('aria-activedescendant', params.data._resultId);
    });

    container.on('selection:update', function (params) {
      self.update(params.data);
    });

    container.on('open', function () {
      // When the dropdown is open, aria-expanded="true"
      self.$selection.attr('aria-expanded', 'true');
      self.$selection.attr('aria-owns', resultsId);

      self._attachCloseHandler(container);
    });

    container.on('close', function () {
      // When the dropdown is closed, aria-expanded="false"
      self.$selection.attr('aria-expanded', 'false');
      self.$selection.removeAttr('aria-activedescendant');
      self.$selection.removeAttr('aria-owns');

      self.$selection.trigger('focus');

      self._detachCloseHandler(container);
    });

    container.on('enable', function () {
      self.$selection.attr('tabindex', self._tabindex);
      self.$selection.attr('aria-disabled', 'false');
    });

    container.on('disable', function () {
      self.$selection.attr('tabindex', '-1');
      self.$selection.attr('aria-disabled', 'true');
    });
  };

  BaseSelection.prototype._handleBlur = function (evt) {
    var self = this;

    // This needs to be delayed as the active element is the body when the tab
    // key is pressed, possibly along with others.
    window.setTimeout(function () {
      // Don't trigger `blur` if the focus is still in the selection
      if (
        (document.activeElement == self.$selection[0]) ||
        ($.contains(self.$selection[0], document.activeElement))
      ) {
        return;
      }

      self.trigger('blur', evt);
    }, 1);
  };

  BaseSelection.prototype._attachCloseHandler = function (container) {

    $(document.body).on('mousedown.select2.' + container.id, function (e) {
      var $target = $(e.target);

      var $select = $target.closest('.select2');

      var $all = $('.select2.select-box-open');

      $all.each(function () {
        if (this == $select[0]) {
          return;
        }

        var $element = Utils.GetData(this, 'element');

        $element.select2('close');
      });
    });
  };

  BaseSelection.prototype._detachCloseHandler = function (container) {
    $(document.body).off('mousedown.select2.' + container.id);
  };

  BaseSelection.prototype.position = function ($selection, $container) {
    var $selectionContainer = $container.find('.selection');
    $selectionContainer.append($selection);
  };

  BaseSelection.prototype.destroy = function () {
    this._detachCloseHandler(this.container);
  };

  BaseSelection.prototype.update = function (data) {
    throw new Error('The `update` method must be defined in child classes.');
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  BaseSelection.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  BaseSelection.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  return BaseSelection;
});

S2.define('select2/selection/single',[
  'jquery',
  './base',
  '../utils',
  '../keys'
], function ($, BaseSelection, Utils, KEYS) {
  function SingleSelection () {
    SingleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(SingleSelection, BaseSelection);

  SingleSelection.prototype.render = function () {
    var $selection = SingleSelection.__super__.render.call(this);

    $selection.addClass('select-single');

    $selection.html(
      '<span class="select-rendered"></span>' +
      '<span class="select-arrow" role="arrow">' +
        '<b role="arrow"></b>' +
      '</span>'
    );

    return $selection;
  };

  SingleSelection.prototype.bind = function (container, $container) {
    var self = this;

    SingleSelection.__super__.bind.apply(this, arguments);

    var id = container.id + '-box';

    this.$selection.find('.select-rendered')
      .attr('id', id)
      .attr('role', 'textbox')
      .attr('aria-readonly', 'true');
    this.$selection.attr('aria-labelledby', id);

    this.$selection.on('mousedown', function (evt) {
      // Only respond to left clicks
      if (evt.which !== 1) {
        return;
      }

      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on('focus', function (evt) {
      // User focuses on the container
    });

    this.$selection.on('blur', function (evt) {
      // User exits the container
    });

    container.on('focus', function (evt) {
      if (!container.isOpen()) {
        self.$selection.trigger('focus');
      }
    });
  };

  SingleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select-rendered');
    $rendered.empty();
    $rendered.removeAttr('title'); // clear tooltip on empty
  };

  SingleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  SingleSelection.prototype.selectionContainer = function () {
    return $('<span></span>');
  };

  SingleSelection.prototype.update = function (data) {
    if (data.length === 0) {
      this.clear();
      return;
    }

    var selection = data[0];

    var $rendered = this.$selection.find('.select-rendered');
    var formatted = this.display(selection, $rendered);

    $rendered.empty().append(formatted);

    var title = selection.title || selection.text;

    if (title) {
      $rendered.attr('title', title);
    } else {
      $rendered.removeAttr('title');
    }
  };

  return SingleSelection;
});

S2.define('select2/selection/multiple',[
  'jquery',
  './base',
  '../utils'
], function ($, BaseSelection, Utils) {
  function MultipleSelection ($element, options) {
    MultipleSelection.__super__.constructor.apply(this, arguments);
  }

  Utils.Extend(MultipleSelection, BaseSelection);

  MultipleSelection.prototype.render = function () {
    var $selection = MultipleSelection.__super__.render.call(this);

    $selection.addClass('select-multiple');

    $selection.html(
      '<ul class="select-rendered"></ul>'
    );

    return $selection;
  };

  MultipleSelection.prototype.bind = function (container, $container) {
    var self = this;

    MultipleSelection.__super__.bind.apply(this, arguments);

    this.$selection.on('click', function (evt) {
      self.trigger('toggle', {
        originalEvent: evt
      });
    });

    this.$selection.on(
      'click',
      '.select-text-choice-remove',
      function (evt) {
        // Ignore the event if it is disabled
        if (self.isDisabled()) {
          return;
        }

        var $remove = $(this);
        var $selection = $remove.parent();

        var data = Utils.GetData($selection[0], 'data');

        self.trigger('unselect', {
          originalEvent: evt,
          data: data
        });
      }
    );
  };

  MultipleSelection.prototype.clear = function () {
    var $rendered = this.$selection.find('.select-rendered');
    $rendered.empty();
    $rendered.removeAttr('title');
  };

  MultipleSelection.prototype.display = function (data, container) {
    var template = this.options.get('templateSelection');
    var escapeMarkup = this.options.get('escapeMarkup');

    return escapeMarkup(template(data, container));
  };

  MultipleSelection.prototype.selectionContainer = function () {
    var $container = $(
      '<li class="select-text-choice">' +
        '<span class="select-text-choice-remove" role="arrow">' +
          '&times;' +
        '</span>' +
      '</li>'
    );

    return $container;
  };

  MultipleSelection.prototype.update = function (data) {
    this.clear();

    if (data.length === 0) {
      return;
    }

    var $selections = [];

    for (var d = 0; d < data.length; d++) {
      var selection = data[d];

      var $selection = this.selectionContainer();
      var formatted = this.display(selection, $selection);

      $selection.append(formatted);

      var title = selection.title || selection.text;

      if (title) {
        $selection.attr('title', title);
      }

      Utils.StoreData($selection[0], 'data', selection);

      $selections.push($selection);
    }

    var $rendered = this.$selection.find('.select-rendered');

    Utils.appendMany($rendered, $selections);
  };

  return MultipleSelection;
});

S2.define('select2/selection/placeholder',[
  '../utils'
], function (Utils) {
  function Placeholder (decorated, $element, options) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options);
  }

  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
    var $placeholder = this.selectionContainer();

    $placeholder.html(this.display(placeholder));
    $placeholder.addClass('select-text-placeholder')
                .removeClass('select-text-choice');

    return $placeholder;
  };

  Placeholder.prototype.update = function (decorated, data) {
    var singlePlaceholder = (
      data.length == 1 && data[0].id != this.placeholder.id
    );
    var multipleSelections = data.length > 1;

    if (multipleSelections || singlePlaceholder) {
      return decorated.call(this, data);
    }

    this.clear();

    var $placeholder = this.createPlaceholder(this.placeholder);

    this.$selection.find('.select-rendered').append($placeholder);
  };

  return Placeholder;
});

S2.define('select2/selection/allowClear',[
  'jquery',
  '../keys',
  '../utils'
], function ($, KEYS, Utils) {
  function AllowClear () { }

  AllowClear.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    if (this.placeholder == null) {
      if (this.options.get('debug') && window.console && console.error) {
        console.error(
          'Select2: The `allowClear` option should be used in combination ' +
          'with the `placeholder` option.'
        );
      }
    }

    this.$selection.on('mousedown', '.select-text-clear',
      function (evt) {
        self._handleClear(evt);
    });

    container.on('keypress', function (evt) {
      self._handleKeyboardClear(evt, container);
    });
  };

  AllowClear.prototype._handleClear = function (_, evt) {
    // Ignore the event if it is disabled
    if (this.isDisabled()) {
      return;
    }

    var $clear = this.$selection.find('.select-text-clear');

    // Ignore the event if nothing has been selected
    if ($clear.length === 0) {
      return;
    }

    evt.stopPropagation();

    var data = Utils.GetData($clear[0], 'data');

    var previousVal = this.$element.val();
    this.$element.val(this.placeholder.id);

    var unselectData = {
      data: data
    };
    this.trigger('clear', unselectData);
    if (unselectData.prevented) {
      this.$element.val(previousVal);
      return;
    }

    for (var d = 0; d < data.length; d++) {
      unselectData = {
        data: data[d]
      };

      // Trigger the `unselect` event, so people can prevent it from being
      // cleared.
      this.trigger('unselect', unselectData);

      // If the event was prevented, don't clear it out.
      if (unselectData.prevented) {
        this.$element.val(previousVal);
        return;
      }
    }

    this.$element.trigger('input').trigger('change');

    this.trigger('toggle', {});
  };

  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
    if (container.isOpen()) {
      return;
    }

    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
      this._handleClear(evt);
    }
  };

  AllowClear.prototype.update = function (decorated, data) {
    decorated.call(this, data);

    if (this.$selection.find('.select-text-placeholder').length > 0 ||
        data.length === 0) {
      return;
    }

    var removeAll = this.options.get('translations').get('removeAllItems');

    var $remove = $(
      '<span class="select-text-clear" title="' + removeAll() +'">' +
        '&times;' +
      '</span>'
    );
    Utils.StoreData($remove[0], 'data', data);

    this.$selection.find('.select-rendered').prepend($remove);
  };

  return AllowClear;
});

S2.define('select2/selection/search',[
  'jquery',
  '../utils',
  '../keys'
], function ($, Utils, KEYS) {
  function Search (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  Search.prototype.render = function (decorated) {
    var $search = $(
      '<li class="select2-search select2-search-inline">' +
        '<input class="select2-search-field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" />' +
      '</li>'
    );

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    var $rendered = decorated.call(this);

    this._transferTabIndex();

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    decorated.call(this, container, $container);

    container.on('open', function () {
      self.$search.attr('aria-controls', resultsId);
      self.$search.trigger('focus');
    });

    container.on('close', function () {
      self.$search.val('');
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');
      self.$search.trigger('focus');
    });

    container.on('enable', function () {
      self.$search.prop('disabled', false);

      self._transferTabIndex();
    });

    container.on('disable', function () {
      self.$search.prop('disabled', true);
    });

    container.on('focus', function (evt) {
      self.$search.trigger('focus');
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
      }
    });

    this.$selection.on('focusin', '.select2-search-inline', function (evt) {
      self.trigger('focus', evt);
    });

    this.$selection.on('focusout', '.select2-search-inline', function (evt) {
      self._handleBlur(evt);
    });

    this.$selection.on('keydown', '.select2-search-inline', function (evt) {
      evt.stopPropagation();

      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();

      var key = evt.which;

      if (key === KEYS.BACKSPACE && self.$search.val() === '') {
        var $previousChoice = self.$searchContainer
          .prev('.select-text-choice');

        if ($previousChoice.length > 0) {
          var item = Utils.GetData($previousChoice[0], 'data');

          self.searchRemoveChoice(item);

          evt.preventDefault();
        }
      }
    });

    this.$selection.on('click', '.select2-search-inline', function (evt) {
      if (self.$search.val()) {
        evt.stopPropagation();
      }
    });

    // Try to detect the IE version should the `documentMode` property that
    // is stored on the document. This is only implemented in IE and is
    // slightly cleaner than doing a user agent check.
    // This property is not available in Edge, but Edge also doesn't have
    // this bug.
    var msie = document.documentMode;
    var disableInputEvents = msie && msie <= 11;

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$selection.on(
      'input.searchcheck',
      '.select2-search-inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents) {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        // Unbind the duplicated `keyup` event
        self.$selection.off('keyup.search');
      }
    );

    this.$selection.on(
      'keyup.search input.search',
      '.select2-search-inline',
      function (evt) {
        // IE will trigger the `input` event when a placeholder is used on a
        // search box. To get around this issue, we are forced to ignore all
        // `input` events in IE and keep using `keyup`.
        if (disableInputEvents && evt.type === 'input') {
          self.$selection.off('input.search input.searchcheck');
          return;
        }

        var key = evt.which;

        // We can freely ignore events from modifier keys
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
          return;
        }

        // Tabbing will be handled during the `keydown` phase
        if (key == KEYS.TAB) {
          return;
        }

        self.handleSearch(evt);
      }
    );
  };

  /**
   * This method will transfer the tabindex attribute from the rendered
   * selection to the search box. This allows for the search box to be used as
   * the primary focus instead of the selection container.
   *
   * @private
   */
  Search.prototype._transferTabIndex = function (decorated) {
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
    this.$selection.attr('tabindex', '-1');
  };

  Search.prototype.createPlaceholder = function (decorated, placeholder) {
    this.$search.attr('placeholder', placeholder.text);
  };

  Search.prototype.update = function (decorated, data) {
    var searchHadFocus = this.$search[0] == document.activeElement;

    this.$search.attr('placeholder', '');

    decorated.call(this, data);

    this.$selection.find('.select-rendered')
                   .append(this.$searchContainer);

    this.resizeSearch();
    if (searchHadFocus) {
      this.$search.trigger('focus');
    }
  };

  Search.prototype.handleSearch = function () {
    this.resizeSearch();

    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.searchRemoveChoice = function (decorated, item) {
    this.trigger('unselect', {
      data: item
    });

    this.$search.val(item.text);
    this.handleSearch();
  };

  Search.prototype.resizeSearch = function () {
    this.$search.css('width', '25px');

    var width = '';

    if (this.$search.attr('placeholder') !== '') {
      width = this.$selection.find('.select-rendered').width();
    } else {
      var minimumWidth = this.$search.val().length + 1;

      width ='calc('+ (minimumWidth * 0.75) +'em + 20px)';//
    }

    this.$search.css('width', width);
  };

  return Search;
});

S2.define('select2/selection/eventRelay',[
  'jquery'
], function ($) {
  function EventRelay () { }

  EventRelay.prototype.bind = function (decorated, container, $container) {
    var self = this;
    var relayEvents = [
      'open', 'opening',
      'close', 'closing',
      'select', 'selecting',
      'unselect', 'unselecting',
      'clear', 'clearing'
    ];

    var preventableEvents = [
      'opening', 'closing', 'selecting', 'unselecting', 'clearing'
    ];

    decorated.call(this, container, $container);

    container.on('*', function (name, params) {
      // Ignore events that should not be relayed
      if ($.inArray(name, relayEvents) === -1) {
        return;
      }

      // The parameters should always be an object
      params = params || {};

      // Generate the jQuery event for the Select2 event
      var evt = $.Event('select2:' + name, {
        params: params
      });

      self.$element.trigger(evt);

      // Only handle preventable events if it was one
      if ($.inArray(name, preventableEvents) === -1) {
        return;
      }

      params.prevented = evt.isDefaultPrevented();
    });
  };

  return EventRelay;
});

S2.define('select2/translation',[
  'jquery',
  'require'
], function ($, require) {
  function Translation (dict) {
    this.dict = dict || {};
  }

  Translation.prototype.all = function () {
    return this.dict;
  };

  Translation.prototype.get = function (key) {
    return this.dict[key];
  };

  Translation.prototype.extend = function (translation) {
    this.dict = $.extend({}, translation.all(), this.dict);
  };

  // Static functions

  Translation._cache = {};

  Translation.loadPath = function (path) {
    if (!(path in Translation._cache)) {
      var translations = require(path);

      Translation._cache[path] = translations;
    }

    return new Translation(Translation._cache[path]);
  };

  return Translation;
});

S2.define('select2/diacritics',[

], function () {
  var diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u0152': 'OE',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u0153': 'oe',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03CE': '\u03C9',
    '\u03C2': '\u03C3',
    '\u2019': '\''
  };

  return diacritics;
});

S2.define('select2/data/base',[
  '../utils'
], function (Utils) {
  function BaseAdapter ($element, options) {
    BaseAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(BaseAdapter, Utils.Observable);

  BaseAdapter.prototype.current = function (callback) {
    throw new Error('The `current` method must be defined in child classes.');
  };

  BaseAdapter.prototype.query = function (params, callback) {
    throw new Error('The `query` method must be defined in child classes.');
  };

  BaseAdapter.prototype.bind = function (container, $container) {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.destroy = function () {
    // Can be implemented in subclasses
  };

  BaseAdapter.prototype.generateResultId = function (container, data) {
    var id = container.id + '-result-';

    id += Utils.generateChars(4);

    if (data.id != null) {
      id += '-' + data.id.toString();
    } else {
      id += '-' + Utils.generateChars(4);
    }
    return id;
  };

  return BaseAdapter;
});

S2.define('select2/data/select',[
  './base',
  '../utils',
  'jquery'
], function (BaseAdapter, Utils, $) {
  function SelectAdapter ($element, options) {
    this.$element = $element;
    this.options = options;

    SelectAdapter.__super__.constructor.call(this);
  }

  Utils.Extend(SelectAdapter, BaseAdapter);

  SelectAdapter.prototype.current = function (callback) {
    var data = [];
    var self = this;

    this.$element.find(':selected').each(function () {
      var $option = $(this);

      var option = self.item($option);

      data.push(option);
    });

    callback(data);
  };

  SelectAdapter.prototype.select = function (data) {
    var self = this;

    data.selected = true;

    // If data.element is a DOM node, use it instead
    if ($(data.element).is('option')) {
      data.element.selected = true;

      this.$element.trigger('input').trigger('change');

      return;
    }

    if (this.$element.prop('multiple')) {
      this.current(function (currentData) {
        var val = [];

        data = [data];
        data.push.apply(data, currentData);

        for (var d = 0; d < data.length; d++) {
          var id = data[d].id;

          if ($.inArray(id, val) === -1) {
            val.push(id);
          }
        }

        self.$element.val(val);
        self.$element.trigger('input').trigger('change');
      });
    } else {
      var val = data.id;

      this.$element.val(val);
      this.$element.trigger('input').trigger('change');
    }
  };

  SelectAdapter.prototype.unselect = function (data) {
    var self = this;

    if (!this.$element.prop('multiple')) {
      return;
    }

    data.selected = false;

    if ($(data.element).is('option')) {
      data.element.selected = false;

      this.$element.trigger('input').trigger('change');

      return;
    }

    this.current(function (currentData) {
      var val = [];

      for (var d = 0; d < currentData.length; d++) {
        var id = currentData[d].id;

        if (id !== data.id && $.inArray(id, val) === -1) {
          val.push(id);
        }
      }

      self.$element.val(val);

      self.$element.trigger('input').trigger('change');
    });
  };

  SelectAdapter.prototype.bind = function (container, $container) {
    var self = this;

    this.container = container;

    container.on('select', function (params) {
      self.select(params.data);
    });

    container.on('unselect', function (params) {
      self.unselect(params.data);
    });
  };

  SelectAdapter.prototype.destroy = function () {
    // Remove anything added to child elements
    this.$element.find('*').each(function () {
      // Remove any custom data set by Select2
      Utils.RemoveData(this);
    });
  };

  SelectAdapter.prototype.query = function (params, callback) {
    var data = [];
    var self = this;

    var $options = this.$element.children();

    $options.each(function () {
      var $option = $(this);

      if (!$option.is('option') && !$option.is('optgroup')) {
        return;
      }

      var option = self.item($option);

      var matches = self.matches(params, option);

      if (matches !== null) {
        data.push(matches);
      }
    });

    callback({
      results: data
    });
  };

  SelectAdapter.prototype.addOptions = function ($options) {
    Utils.appendMany(this.$element, $options);
  };

  SelectAdapter.prototype.option = function (data) {
    var option;

    if (data.children) {
      option = document.createElement('optgroup');
      option.label = data.text;
    } else {
      option = document.createElement('option');

      if (option.textContent !== undefined) {
        option.textContent = data.text;
      } else {
        option.innerText = data.text;
      }
    }

    if (data.id !== undefined) {
      option.value = data.id;
    }

    if (data.disabled) {
      option.disabled = true;
    }

    if (data.selected) {
      option.selected = true;
    }

    if (data.title) {
      option.title = data.title;
    }

    var $option = $(option);

    var normalizedData = this._normalizeItem(data);
    normalizedData.element = option;

    // Override the option's data with the combined data
    Utils.StoreData(option, 'data', normalizedData);

    return $option;
  };

  SelectAdapter.prototype.item = function ($option) {
    var data = {};

    data = Utils.GetData($option[0], 'data');

    if (data != null) {
      return data;
    }

    if ($option.is('option')) {
      data = {
        id: $option.val(),
        text: $option.text(),
        disabled: $option.prop('disabled'),
        selected: $option.prop('selected'),
        title: $option.prop('title')
      };
    } else if ($option.is('optgroup')) {
      data = {
        text: $option.prop('label'),
        children: [],
        title: $option.prop('title')
      };

      var $children = $option.children('option');
      var children = [];

      for (var c = 0; c < $children.length; c++) {
        var $child = $($children[c]);

        var child = this.item($child);

        children.push(child);
      }

      data.children = children;
    }

    data = this._normalizeItem(data);
    data.element = $option[0];

    Utils.StoreData($option[0], 'data', data);

    return data;
  };

  SelectAdapter.prototype._normalizeItem = function (item) {
    if (item !== Object(item)) {
      item = {
        id: item,
        text: item
      };
    }

    item = $.extend({}, {
      text: ''
    }, item);

    var defaults = {
      selected: false,
      disabled: false
    };

    if (item.id != null) {
      item.id = item.id.toString();
    }

    if (item.text != null) {
      item.text = item.text.toString();
    }

    if (item._resultId == null && item.id && this.container != null) {
      item._resultId = this.generateResultId(this.container, item);
    }

    return $.extend({}, defaults, item);
  };

  SelectAdapter.prototype.matches = function (params, data) {
    var matcher = this.options.get('matcher');

    return matcher(params, data);
  };

  return SelectAdapter;
});

S2.define('select2/data/array',[
  './select',
  '../utils',
  'jquery'
], function (SelectAdapter, Utils, $) {
  function ArrayAdapter ($element, options) {
    this._dataToConvert = options.get('data') || [];

    ArrayAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(ArrayAdapter, SelectAdapter);

  ArrayAdapter.prototype.bind = function (container, $container) {
    ArrayAdapter.__super__.bind.call(this, container, $container);

    this.addOptions(this.convertToOptions(this._dataToConvert));
  };

  ArrayAdapter.prototype.select = function (data) {
    var $option = this.$element.find('option').filter(function (i, elm) {
      return elm.value == data.id.toString();
    });

    if ($option.length === 0) {
      $option = this.option(data);

      this.addOptions($option);
    }

    ArrayAdapter.__super__.select.call(this, data);
  };

  ArrayAdapter.prototype.convertToOptions = function (data) {
    var self = this;

    var $existing = this.$element.find('option');
    var existingIds = $existing.map(function () {
      return self.item($(this)).id;
    }).get();

    var $options = [];

    // Filter out all items except for the one passed in the argument
    function onlyItem (item) {
      return function () {
        return $(this).val() == item.id;
      };
    }

    for (var d = 0; d < data.length; d++) {
      var item = this._normalizeItem(data[d]);

      // Skip items which were pre-loaded, only merge the data
      if ($.inArray(item.id, existingIds) >= 0) {
        var $existingOption = $existing.filter(onlyItem(item));

        var existingData = this.item($existingOption);
        var newData = $.extend(true, {}, item, existingData);

        var $newOption = this.option(newData);

        $existingOption.replaceWith($newOption);

        continue;
      }

      var $option = this.option(item);

      if (item.children) {
        var $children = this.convertToOptions(item.children);

        Utils.appendMany($option, $children);
      }

      $options.push($option);
    }

    return $options;
  };

  return ArrayAdapter;
});

S2.define('select2/data/ajax',[
  './array',
  '../utils',
  'jquery'
], function (ArrayAdapter, Utils, $) {
  function AjaxAdapter ($element, options) {
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

    if (this.ajaxOptions.processResults != null) {
      this.processResults = this.ajaxOptions.processResults;
    }

    AjaxAdapter.__super__.constructor.call(this, $element, options);
  }

  Utils.Extend(AjaxAdapter, ArrayAdapter);

  AjaxAdapter.prototype._applyDefaults = function (options) {
    var defaults = {
      data: function (params) {
        return $.extend({}, params, {
          q: params.term
        });
      },
      transport: function (params, success, failure) {
        var $request = $.ajax(params);

        $request.then(success);
        $request.fail(failure);

        return $request;
      }
    };

    return $.extend({}, defaults, options, true);
  };

  AjaxAdapter.prototype.processResults = function (results) {
    return results;
  };

  AjaxAdapter.prototype.query = function (params, callback) {
    var matches = [];
    var self = this;

    if (this._request != null) {
      // JSONP requests cannot always be aborted
      if ($.isFunction(this._request.abort)) {
        this._request.abort();
      }

      this._request = null;
    }

    var options = $.extend({
      type: 'GET'
    }, this.ajaxOptions);

    if (typeof options.url === 'function') {
      options.url = options.url.call(this.$element, params);
    }

    if (typeof options.data === 'function') {
      options.data = options.data.call(this.$element, params);
    }

    function request () {
      var $request = options.transport(options, function (data) {
        var results = self.processResults(data, params);

        if (self.options.get('debug') && window.console && console.error) {
          // Check to make sure that the response included a `results` key.
          if (!results || !results.results || !$.isArray(results.results)) {
            console.error(
              'Select2: The AJAX results did not return an array in the ' +
              '`results` key of the response.'
            );
          }
        }

        callback(results);
      }, function () {
        // Attempt to detect if a request was aborted
        // Only works if the transport exposes a status property
        if ('status' in $request &&
            ($request.status === 0 || $request.status === '0')) {
          return;
        }

        self.trigger('results:message', {
          message: 'errorLoading'
        });
      });

      self._request = $request;
    }

    if (this.ajaxOptions.delay && params.term != null) {
      if (this._queryTimeout) {
        window.clearTimeout(this._queryTimeout);
      }

      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
    } else {
      request();
    }
  };

  return AjaxAdapter;
});

S2.define('select2/data/tags',[
  'jquery'
], function ($) {
  function Tags (decorated, $element, options) {
    var tags = options.get('tags');

    var createTag = options.get('createTag');

    if (createTag !== undefined) {
      this.createTag = createTag;
    }

    var insertTag = options.get('insertTag');

    if (insertTag !== undefined) {
        this.insertTag = insertTag;
    }

    decorated.call(this, $element, options);

    if ($.isArray(tags)) {
      for (var t = 0; t < tags.length; t++) {
        var tag = tags[t];
        var item = this._normalizeItem(tag);

        var $option = this.option(item);

        this.$element.append($option);
      }
    }
  }

  Tags.prototype.query = function (decorated, params, callback) {
    var self = this;

    this._removeOldTags();

    if (params.term == null || params.page != null) {
      decorated.call(this, params, callback);
      return;
    }

    function wrapper (obj, child) {
      var data = obj.results;

      for (var i = 0; i < data.length; i++) {
        var option = data[i];

        var checkChildren = (
          option.children != null &&
          !wrapper({
            results: option.children
          }, true)
        );

        var optionText = (option.text || '').toUpperCase();
        var paramsTerm = (params.term || '').toUpperCase();

        var checkText = optionText === paramsTerm;

        if (checkText || checkChildren) {
          if (child) {
            return false;
          }

          obj.data = data;
          callback(obj);

          return;
        }
      }

      if (child) {
        return true;
      }

      var tag = self.createTag(params);

      if (tag != null) {
        var $option = self.option(tag);
        $option.attr('data-select-tag', true);

        self.addOptions([$option]);

        self.insertTag(data, tag);
      }

      obj.results = data;

      callback(obj);
    }

    decorated.call(this, params, wrapper);
  };

  Tags.prototype.createTag = function (decorated, params) {
    var term = $.trim(params.term);

    if (term === '') {
      return null;
    }

    return {
      id: term,
      text: term
    };
  };

  Tags.prototype.insertTag = function (_, data, tag) {
    data.unshift(tag);
  };

  Tags.prototype._removeOldTags = function (_) {
    var $options = this.$element.find('option[data-select-tag]');

    $options.each(function () {
      if (this.selected) {
        return;
      }

      $(this).remove();
    });
  };

  return Tags;
});

S2.define('select2/data/tokenizer',[
  'jquery'
], function ($) {
  function Tokenizer (decorated, $element, options) {
    var tokenizer = options.get('tokenizer');

    if (tokenizer !== undefined) {
      this.tokenizer = tokenizer;
    }

    decorated.call(this, $element, options);
  }

  Tokenizer.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    this.$search =  container.dropdown.$search || container.selection.$search ||
      $container.find('.select2-search-field');
  };

  Tokenizer.prototype.query = function (decorated, params, callback) {
    var self = this;

    function createAndSelect (data) {
      // Normalize the data object so we can use it for checks
      var item = self._normalizeItem(data);

      // Check if the data object already exists as a tag
      // Select it if it doesn't
      var $existingOptions = self.$element.find('option').filter(function () {
        return $(this).val() === item.id;
      });

      // If an existing option wasn't found for it, create the option
      if (!$existingOptions.length) {
        var $option = self.option(item);
        $option.attr('data-select-tag', true);

        self._removeOldTags();
        self.addOptions([$option]);
      }

      // Select the item, now that we know there is an option for it
      select(item);
    }

    function select (data) {
      self.trigger('select', {
        data: data
      });
    }

    params.term = params.term || '';

    var tokenData = this.tokenizer(params, this.options, createAndSelect);

    if (tokenData.term !== params.term) {
      // Replace the search term if we have the search box
      if (this.$search.length) {
        this.$search.val(tokenData.term);
        this.$search.trigger('focus');
      }

      params.term = tokenData.term;
    }

    decorated.call(this, params, callback);
  };

  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
    var separators = options.get('tokenSeparators') || [];
    var term = params.term;
    var i = 0;

    var createTag = this.createTag || function (params) {
      return {
        id: params.term,
        text: params.term
      };
    };

    while (i < term.length) {
      var termChar = term[i];

      if ($.inArray(termChar, separators) === -1) {
        i++;

        continue;
      }

      var part = term.substr(0, i);
      var partParams = $.extend({}, params, {
        term: part
      });

      var data = createTag(partParams);

      if (data == null) {
        i++;
        continue;
      }

      callback(data);

      // Reset the term to not include the tokenized portion
      term = term.substr(i + 1) || '';
      i = 0;
    }

    return {
      term: term
    };
  };

  return Tokenizer;
});

S2.define('select2/data/minimumInputLength',[

], function () {
  function MinimumInputLength (decorated, $e, options) {
    this.minimumInputLength = options.get('minimumInputLength');

    decorated.call(this, $e, options);
  }

  MinimumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (params.term.length < this.minimumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooShort',
        args: {
          minimum: this.minimumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MinimumInputLength;
});

S2.define('select2/data/maximumInputLength',[

], function () {
  function MaximumInputLength (decorated, $e, options) {
    this.maximumInputLength = options.get('maximumInputLength');

    decorated.call(this, $e, options);
  }

  MaximumInputLength.prototype.query = function (decorated, params, callback) {
    params.term = params.term || '';

    if (this.maximumInputLength > 0 &&
        params.term.length > this.maximumInputLength) {
      this.trigger('results:message', {
        message: 'inputTooLong',
        args: {
          maximum: this.maximumInputLength,
          input: params.term,
          params: params
        }
      });

      return;
    }

    decorated.call(this, params, callback);
  };

  return MaximumInputLength;
});

S2.define('select2/data/maximumSelectionLength',[

], function (){
  function MaximumSelectionLength (decorated, $e, options) {
    this.maximumSelectionLength = options.get('maximumSelectionLength');

    decorated.call(this, $e, options);
  }

  MaximumSelectionLength.prototype.bind =
    function (decorated, container, $container) {
      var self = this;

      decorated.call(this, container, $container);

      container.on('select', function () {
        self._checkIfMaximumSelected();
      });
  };

  MaximumSelectionLength.prototype.query =
    function (decorated, params, callback) {
      var self = this;

      this._checkIfMaximumSelected(function () {
        decorated.call(self, params, callback);
      });
  };

  MaximumSelectionLength.prototype._checkIfMaximumSelected =
    function (_, successCallback) {
      var self = this;

      this.current(function (currentData) {
        var count = currentData != null ? currentData.length : 0;
        if (self.maximumSelectionLength > 0 &&
          count >= self.maximumSelectionLength) {
          self.trigger('results:message', {
            message: 'maximumSelected',
            args: {
              maximum: self.maximumSelectionLength
            }
          });
          return;
        }

        if (successCallback) {
          successCallback();
        }
      });
  };

  return MaximumSelectionLength;
});

S2.define('select2/dropdown',[
  'jquery',
  './utils'
], function ($, Utils) {
  function Dropdown ($element, options) {
    this.$element = $element;
    this.options = options;

    Dropdown.__super__.constructor.call(this);
  }

  Utils.Extend(Dropdown, Utils.Observable);

  Dropdown.prototype.render = function () {
    var $dropdown = $(
      '<span class="select2-dropdown">' +
        '<span class="select2-results"></span>' +
      '</span>'
    );

    $dropdown.attr('dir', this.options.get('dir'));

    this.$dropdown = $dropdown;

    return $dropdown;
  };

  Dropdown.prototype.bind = function () {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.position = function ($dropdown, $container) {
    // Should be implemented in subclasses
  };

  Dropdown.prototype.destroy = function () {
    // Remove the dropdown from the DOM
    this.$dropdown.remove();
  };

  return Dropdown;
});

S2.define('select2/dropdown/search',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function Search () { }

  Search.prototype.render = function (decorated) {
    var $rendered = decorated.call(this);

    var $search = $(
      '<span class="select2-search select2-search-dropdown">' +
        '<input class="select2-search-field" type="search" tabindex="-1"' +
        ' autocomplete="off" autocorrect="off" autocapitalize="none"' +
        ' spellcheck="false" role="searchbox" aria-autocomplete="list" placeholder="输入关键字..."/>' +
      '</span>'
    );//

    this.$searchContainer = $search;
    this.$search = $search.find('input');

    $rendered.prepend($search);

    return $rendered;
  };

  Search.prototype.bind = function (decorated, container, $container) {
    var self = this;

    var resultsId = container.id + '-results';

    decorated.call(this, container, $container);

    this.$search.on('keydown', function (evt) {
      self.trigger('keypress', evt);

      self._keyUpPrevented = evt.isDefaultPrevented();
    });

    // Workaround for browsers which do not support the `input` event
    // This will prevent double-triggering of events for browsers which support
    // both the `keyup` and `input` events.
    this.$search.on('input', function (evt) {
      // Unbind the duplicated `keyup` event
      $(this).off('keyup');
    });

    this.$search.on('keyup input', function (evt) {
      self.handleSearch(evt);
    });

    container.on('open', function () {
      self.$search.attr('tabindex', 0);
      self.$search.attr('aria-controls', resultsId);

      self.$search.trigger('focus');

      window.setTimeout(function () {
        self.$search.trigger('focus');
      }, 0);
    });

    container.on('close', function () {
      self.$search.attr('tabindex', -1);
      self.$search.removeAttr('aria-controls');
      self.$search.removeAttr('aria-activedescendant');

      self.$search.val('');
      self.$search.trigger('blur');
    });

    container.on('focus', function () {
      if (!container.isOpen()) {
        self.$search.trigger('focus');
      }
    });

    container.on('results:all', function (params) {
      if (params.query.term == null || params.query.term === '') {
        var showSearch = self.showSearch(params);

        if (showSearch) {
          self.$searchContainer.removeClass('select2-search-hide');
        } else {
          self.$searchContainer.addClass('select2-search-hide');
        }
      }
    });

    container.on('results:focus', function (params) {
      if (params.data._resultId) {
        self.$search.attr('aria-activedescendant', params.data._resultId);
      } else {
        self.$search.removeAttr('aria-activedescendant');
      }
    });
  };

  Search.prototype.handleSearch = function (evt) {
    if (!this._keyUpPrevented) {
      var input = this.$search.val();

      this.trigger('query', {
        term: input
      });
    }

    this._keyUpPrevented = false;
  };

  Search.prototype.showSearch = function (_, params) {
    return true;
  };

  return Search;
});

S2.define('select2/dropdown/hidePlaceholder',[

], function () {
  function HidePlaceholder (decorated, $element, options, dataAdapter) {
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

    decorated.call(this, $element, options, dataAdapter);
  }

  HidePlaceholder.prototype.append = function (decorated, data) {
    data.results = this.removePlaceholder(data.results);

    decorated.call(this, data);
  };

  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
    if (typeof placeholder === 'string') {
      placeholder = {
        id: '',
        text: placeholder
      };
    }

    return placeholder;
  };

  HidePlaceholder.prototype.removePlaceholder = function (_, data) {
    var modifiedData = data.slice(0);

    for (var d = data.length - 1; d >= 0; d--) {
      var item = data[d];

      if (this.placeholder.id === item.id) {
        modifiedData.splice(d, 1);
      }
    }

    return modifiedData;
  };

  return HidePlaceholder;
});

S2.define('select2/dropdown/infiniteScroll',[
  'jquery'
], function ($) {
  function InfiniteScroll (decorated, $element, options, dataAdapter) {
    this.lastParams = {};

    decorated.call(this, $element, options, dataAdapter);

    this.$loadingMore = this.createLoadingMore();
    this.loading = false;
  }

  InfiniteScroll.prototype.append = function (decorated, data) {
    this.$loadingMore.remove();
    this.loading = false;

    decorated.call(this, data);

    if (this.showLoadingMore(data)) {
      this.$results.append(this.$loadingMore);
      this.loadMoreIfNeeded();
    }
  };

  InfiniteScroll.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('query', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    container.on('query:append', function (params) {
      self.lastParams = params;
      self.loading = true;
    });

    this.$results.on('scroll', this.loadMoreIfNeeded.bind(this));
  };

  InfiniteScroll.prototype.loadMoreIfNeeded = function () {
    var isLoadMoreVisible = $.contains(
      document.documentElement,
      this.$loadingMore[0]
    );

    if (this.loading || !isLoadMoreVisible) {
      return;
    }

    var currentOffset = this.$results.offset().top +
      this.$results.outerHeight(false);
    var loadingMoreOffset = this.$loadingMore.offset().top +
      this.$loadingMore.outerHeight(false);

    if (currentOffset + 50 >= loadingMoreOffset) {
      this.loadMore();
    }
  };

  InfiniteScroll.prototype.loadMore = function () {
    this.loading = true;

    var params = $.extend({}, {page: 1}, this.lastParams);

    params.page++;

    this.trigger('query:append', params);
  };

  InfiniteScroll.prototype.showLoadingMore = function (_, data) {
    return data.pagination && data.pagination.more;
  };

  InfiniteScroll.prototype.createLoadingMore = function () {
    var $option = $(
      '<li ' +
      'class="select2-results-option select2-results-option-load-more"' +
      'role="option" aria-disabled="true"></li>'
    );

    var message = this.options.get('translations').get('loadingMore');

    $option.html(message(this.lastParams));

    return $option;
  };

  return InfiniteScroll;
});

S2.define('select2/dropdown/attachBody',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function AttachBody (decorated, $element, options) {
    this.$dropdownParent = $(options.get('dropdownParent') || document.body);

    decorated.call(this, $element, options);
  }

  AttachBody.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('open', function () {
      self._showDropdown();
      self._attachPositioningHandler(container);

      // Must bind after the results handlers to ensure correct sizing
      self._bindContainerResultHandlers(container);
    });

    container.on('close', function () {
      self._hideDropdown();
      self._detachPositioningHandler(container);
    });

    this.$dropdownContainer.on('mousedown', function (evt) {
      evt.stopPropagation();
    });
  };

  AttachBody.prototype.destroy = function (decorated) {
    decorated.call(this);

    this.$dropdownContainer.remove();
  };

  AttachBody.prototype.position = function (decorated, $dropdown, $container) {
    // Clone all of the container classes
    $dropdown.attr('class', $container.attr('class'));

    $dropdown.removeClass('select2');
    $dropdown.addClass('select-box-open');

    $dropdown.css({
      position: 'absolute',
      top: -999999
    });

    this.$container = $container;
  };

  AttachBody.prototype.render = function (decorated) {
    var $container = $('<span></span>');

    var $dropdown = decorated.call(this);
    $container.append($dropdown);

    this.$dropdownContainer = $container;

    return $container;
  };

  AttachBody.prototype._hideDropdown = function (decorated) {
    this.$dropdownContainer.detach();
  };

  AttachBody.prototype._bindContainerResultHandlers =
      function (decorated, container) {

    // These should only be bound once
    if (this._containerResultsHandlersBound) {
      return;
    }

    var self = this;

    container.on('results:all', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:append', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('results:message', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('select', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    container.on('unselect', function () {
      self._positionDropdown();
      self._resizeDropdown();
    });

    this._containerResultsHandlersBound = true;
  };

  AttachBody.prototype._attachPositioningHandler =
      function (decorated, container) {
    var self = this;

    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.each(function () {
      Utils.StoreData(this, 'select2-scroll-position', {
        x: $(this).scrollLeft(),
        y: $(this).scrollTop()
      });
    });

    $watchers.on(scrollEvent, function (ev) {
      var position = Utils.GetData(this, 'select2-scroll-position');
      $(this).scrollTop(position.y);
    });

    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
      function (e) {
      self._positionDropdown();
      self._resizeDropdown();
    });
  };

  AttachBody.prototype._detachPositioningHandler =
      function (decorated, container) {
    var scrollEvent = 'scroll.select2.' + container.id;
    var resizeEvent = 'resize.select2.' + container.id;
    var orientationEvent = 'orientationchange.select2.' + container.id;

    var $watchers = this.$container.parents().filter(Utils.hasScroll);
    $watchers.off(scrollEvent);

    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
  };

  AttachBody.prototype._positionDropdown = function () {
    var $window = $(window);

    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown-above');
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown-below');

    var newDirection = null;

    var offset = this.$container.offset();

    offset.bottom = offset.top + this.$container.outerHeight(false);

    var container = {
      height: this.$container.outerHeight(false)
    };

    container.top = offset.top;
    container.bottom = offset.top + container.height;

    var dropdown = {
      height: this.$dropdown.outerHeight(false)
    };

    var viewport = {
      top: $window.scrollTop(),
      bottom: $window.scrollTop() + $window.height()
    };

    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

    var css = {
      left: offset.left,
      top: container.bottom
    };

    // Determine what the parent element is to use for calculating the offset
    var $offsetParent = this.$dropdownParent;

    // For statically positioned elements, we need to get the element
    // that is determining the offset
    if ($offsetParent.css('position') === 'static') {
      $offsetParent = $offsetParent.offsetParent();
    }

    var parentOffset = {
      top: 0,
      left: 0
    };

    if (
      $.contains(document.body, $offsetParent[0]) ||
      $offsetParent[0].isConnected
      ) {
      parentOffset = $offsetParent.offset();
    }

    css.top -= parentOffset.top;
    css.left -= parentOffset.left;

    if (!isCurrentlyAbove && !isCurrentlyBelow) {
      newDirection = 'below';
    }

    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
      newDirection = 'above';
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
      newDirection = 'below';
    }

    if (newDirection == 'above' ||
      (isCurrentlyAbove && newDirection !== 'below')) {
      css.top = container.top - parentOffset.top - dropdown.height;
    }

    if (newDirection != null) {
      this.$dropdown
        .removeClass('select2-dropdown-below select2-dropdown-above')
        .addClass('select2-dropdown-' + newDirection);
      this.$container
        .removeClass('select-box-below select-box-above')
        .addClass('select-box-' + newDirection);
    }

    this.$dropdownContainer.css(css);
  };

  AttachBody.prototype._resizeDropdown = function () {
    var css = {
      width: this.$container.outerWidth(false) + 'px'
    };

    if (this.options.get('dropdownAutoWidth')) {
      css.minWidth = css.width;
      css.position = 'relative';
      css.width = 'auto';
    }

    this.$dropdown.css(css);
  };

  AttachBody.prototype._showDropdown = function (decorated) {
    this.$dropdownContainer.appendTo(this.$dropdownParent);

    this._positionDropdown();
    this._resizeDropdown();
  };

  return AttachBody;
});

S2.define('select2/dropdown/minimumResultsForSearch',[

], function () {
  function countResults (data) {
    var count = 0;

    for (var d = 0; d < data.length; d++) {
      var item = data[d];

      if (item.children) {
        count += countResults(item.children);
      } else {
        count++;
      }
    }

    return count;
  }

  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

    if (this.minimumResultsForSearch < 0) {
      this.minimumResultsForSearch = Infinity;
    }

    decorated.call(this, $element, options, dataAdapter);
  }

  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
    if (countResults(params.data.results) < this.minimumResultsForSearch) {
      return false;
    }

    return decorated.call(this, params);
  };

  return MinimumResultsForSearch;
});

S2.define('select2/dropdown/selectOnClose',[
  '../utils'
], function (Utils) {
  function SelectOnClose () { }

  SelectOnClose.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('close', function (params) {
      self._handleSelectOnClose(params);
    });
  };

  SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
    if (params && params.originalSelect2Event != null) {
      var event = params.originalSelect2Event;

      // Don't select an item if the close event was triggered from a select or
      // unselect event
      if (event._type === 'select' || event._type === 'unselect') {
        return;
      }
    }

    var $highlightedResults = this.getHighlightedResults();

    // Only select highlighted results
    if ($highlightedResults.length < 1) {
      return;
    }

    var data = Utils.GetData($highlightedResults[0], 'data');

    // Don't re-select already selected resulte
    if (
      (data.element != null && data.element.selected) ||
      (data.element == null && data.selected)
    ) {
      return;
    }

    this.trigger('select', {
        data: data
    });
  };

  return SelectOnClose;
});

S2.define('select2/dropdown/closeOnSelect',[

], function () {
  function CloseOnSelect () { }

  CloseOnSelect.prototype.bind = function (decorated, container, $container) {
    var self = this;

    decorated.call(this, container, $container);

    container.on('select', function (evt) {
      self._selectTriggered(evt);
    });

    container.on('unselect', function (evt) {
      self._selectTriggered(evt);
    });
  };

  CloseOnSelect.prototype._selectTriggered = function (_, evt) {
    var originalEvent = evt.originalEvent;

    // Don't close if the control key is being held
    if (originalEvent && (originalEvent.ctrlKey || originalEvent.metaKey)) {
      return;
    }

    this.trigger('close', {
      originalEvent: originalEvent,
      originalSelect2Event: evt
    });
  };

  return CloseOnSelect;
});

S2.define('select2/i18n/en',[],function () {
  // English
  return {
    errorLoading: function () {
      return '无法载入结果。';//
    },
    inputTooLong: function (args) {
      var overChars = args.input.length - args.maximum;

      var message = '请删除' + overChars + '个字符。';//

      if (overChars != 1) {
        message += 's';
      }

      return message;
    },
    inputTooShort: function (args) {
      var remainingChars = args.minimum - args.input.length;

      var message = '请输入' + remainingChars + '个或更多字符。';//

      return message;
    },
    loadingMore: function () {
      return '加载中...';//
    },
    maximumSelected: function (args) {
      var message = '最多只能选择' + args.maximum + '个项目。';//

      if (args.maximum != 1) {
        message += 's';
      }

      return message;
    },
    noResults: function () {
      return '未找到结果。';//
    },
    searching: function () {
      return '搜索中...';//
    },
    removeAllItems: function () {
      return '清除全部。';//
    }
  };
});

S2.define('select2/defaults',[
  'jquery',
  'require',

  './results',

  './selection/single',
  './selection/multiple',
  './selection/placeholder',
  './selection/allowClear',
  './selection/search',
  './selection/eventRelay',

  './utils',
  './translation',
  './diacritics',

  './data/select',
  './data/array',
  './data/ajax',
  './data/tags',
  './data/tokenizer',
  './data/minimumInputLength',
  './data/maximumInputLength',
  './data/maximumSelectionLength',

  './dropdown',
  './dropdown/search',
  './dropdown/hidePlaceholder',
  './dropdown/infiniteScroll',
  './dropdown/attachBody',
  './dropdown/minimumResultsForSearch',
  './dropdown/selectOnClose',
  './dropdown/closeOnSelect',

  './i18n/en'
], function ($, require,

             ResultsList,

             SingleSelection, MultipleSelection, Placeholder, AllowClear,
             SelectionSearch, EventRelay,

             Utils, Translation, DIACRITICS,

             SelectData, ArrayData, AjaxData, Tags, Tokenizer,
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

             EnglishTranslation) {
  function Defaults () {
    this.reset();
  }

  Defaults.prototype.apply = function (options) {
    options = $.extend(true, {}, this.defaults, options);

    if (options.dataAdapter == null) {
      if (options.ajax != null) {
        options.dataAdapter = AjaxData;
      } else if (options.data != null) {
        options.dataAdapter = ArrayData;
      } else {
        options.dataAdapter = SelectData;
      }

      if (options.minimumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MinimumInputLength
        );
      }

      if (options.maximumInputLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumInputLength
        );
      }

      if (options.maximumSelectionLength > 0) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          MaximumSelectionLength
        );
      }

      if (options.tags) {
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
      }

      if (options.tokenSeparators != null || options.tokenizer != null) {
        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Tokenizer
        );
      }

      if (options.query != null) {
        var Query = require(options.amdBase + 'compat/query');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          Query
        );
      }

      if (options.initSelection != null) {
        var InitSelection = require(options.amdBase + 'compat/initSelection');

        options.dataAdapter = Utils.Decorate(
          options.dataAdapter,
          InitSelection
        );
      }
    }

    if (options.resultsAdapter == null) {
      options.resultsAdapter = ResultsList;

      if (options.ajax != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          InfiniteScroll
        );
      }

      if (options.placeholder != null) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          HidePlaceholder
        );
      }

      if (options.selectOnClose) {
        options.resultsAdapter = Utils.Decorate(
          options.resultsAdapter,
          SelectOnClose
        );
      }
    }

    if (options.dropdownAdapter == null) {
      if (options.multiple) {
        options.dropdownAdapter = Dropdown;
      } else {
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

        options.dropdownAdapter = SearchableDropdown;
      }

      if (options.minimumResultsForSearch !== 0) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          MinimumResultsForSearch
        );
      }

      if (options.closeOnSelect) {
        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          CloseOnSelect
        );
      }

      if (
        options.dropdownCssClass != null ||
        options.dropdownCss != null ||
        options.adaptDropdownCssClass != null
      ) {
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

        options.dropdownAdapter = Utils.Decorate(
          options.dropdownAdapter,
          DropdownCSS
        );
      }

      options.dropdownAdapter = Utils.Decorate(
        options.dropdownAdapter,
        AttachBody
      );
    }

    if (options.selectionAdapter == null) {
      if (options.multiple) {
        options.selectionAdapter = MultipleSelection;
      } else {
        options.selectionAdapter = SingleSelection;
      }

      // Add the placeholder mixin if a placeholder was specified
      if (options.placeholder != null) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          Placeholder
        );
      }

      if (options.allowClear) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          AllowClear
        );
      }

      if (options.multiple) {
        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          SelectionSearch
        );
      }

      if (
        options.containerCssClass != null ||
        options.containerCss != null ||
        options.adaptContainerCssClass != null
      ) {
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');

        options.selectionAdapter = Utils.Decorate(
          options.selectionAdapter,
          ContainerCSS
        );
      }

      options.selectionAdapter = Utils.Decorate(
        options.selectionAdapter,
        EventRelay
      );
    }

    // If the defaults were not previously applied from an element, it is
    // possible for the language option to have not been resolved
    options.language = this._resolveLanguage(options.language);

    // Always fall back to English since it will always be complete
    options.language.push('en');

    var uniqueLanguages = [];

    for (var l = 0; l < options.language.length; l++) {
      var language = options.language[l];

      if (uniqueLanguages.indexOf(language) === -1) {
        uniqueLanguages.push(language);
      }
    }

    options.language = uniqueLanguages;

    options.translations = this._processTranslations(
      options.language,
      options.debug
    );

    return options;
  };

  Defaults.prototype.reset = function () {
    function stripDiacritics (text) {
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18
      function match(a) {
        return DIACRITICS[a] || a;
      }

      return text.replace(/[^\u0000-\u007E]/g, match);
    }

    function matcher (params, data) {
      // Always return the object if there is nothing to compare
      if ($.trim(params.term) === '') {
        return data;
      }

      // Do a recursive check for options with children
      if (data.children && data.children.length > 0) {
        // Clone the data object if there are children
        // This is required as we modify the object to remove any non-matches
        var match = $.extend(true, {}, data);

        // Check each child of the option
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          var matches = matcher(params, child);

          // If there wasn't a match, remove the object in the array
          if (matches == null) {
            match.children.splice(c, 1);
          }
        }

        // If any children matched, return the new object
        if (match.children.length > 0) {
          return match;
        }

        // If there were no matching children, check just the plain object
        return matcher(params, match);
      }

      var original = stripDiacritics(data.text).toUpperCase();
      var term = stripDiacritics(params.term).toUpperCase();

      // Check if the text contains the term
      if (original.indexOf(term) > -1) {
        return data;
      }

      // If it doesn't contain the term, don't return anything
      return null;
    }

    this.defaults = {
      amdBase: './',
      amdLanguageBase: './i18n/',
      closeOnSelect: true,
      debug: false,
      dropdownAutoWidth: false,
      escapeMarkup: Utils.escapeMarkup,
      language: 'zh-CN',//
      matcher: matcher,
      minimumInputLength: 0,
      maximumInputLength: 0,
      maximumSelectionLength: 0,
      minimumResultsForSearch: -1,//
      selectOnClose: false,
      scrollAfterSelect: false,
      sorter: function (data) {
        return data;
      },
      templateResult: function (result) {
        return result.text;
      },
      templateSelection: function (selection) {
        return selection.text;
      },
      theme: 'ax',//
      width: 'resolve'
    };
  };

  Defaults.prototype.applyFromElement = function (options, $element) {
    var optionLanguage = options.language;
    var defaultLanguage = this.defaults.language;
    var elementLanguage = $element.prop('lang');
    var parentLanguage = $element.closest('[lang]').prop('lang');

    var languages = Array.prototype.concat.call(
      this._resolveLanguage(elementLanguage),
      this._resolveLanguage(optionLanguage),
      this._resolveLanguage(defaultLanguage),
      this._resolveLanguage(parentLanguage)
    );

    options.language = languages;

    return options;
  };

  Defaults.prototype._resolveLanguage = function (language) {
    if (!language) {
      return [];
    }

    if ($.isEmptyObject(language)) {
      return [];
    }

    if ($.isPlainObject(language)) {
      return [language];
    }

    var languages;

    if (!$.isArray(language)) {
      languages = [language];
    } else {
      languages = language;
    }

    var resolvedLanguages = [];

    for (var l = 0; l < languages.length; l++) {
      resolvedLanguages.push(languages[l]);

      if (typeof languages[l] === 'string' && languages[l].indexOf('-') > 0) {
        // Extract the region information if it is included
        var languageParts = languages[l].split('-');
        var baseLanguage = languageParts[0];

        resolvedLanguages.push(baseLanguage);
      }
    }

    return resolvedLanguages;
  };

  Defaults.prototype._processTranslations = function (languages, debug) {
    var translations = new Translation();

    for (var l = 0; l < languages.length; l++) {
      var languageData = new Translation();

      var language = languages[l];

      if (typeof language === 'string') {
        try {
          // Try to load it with the original name
          languageData = Translation.loadPath(language);
        } catch (e) {
          try {
            // If we couldn't load it, check if it wasn't the full path
            language = this.defaults.amdLanguageBase + language;
            languageData = Translation.loadPath(language);
          } catch (ex) {
            // The translation could not be loaded at all. Sometimes this is
            // because of a configuration problem, other times this can be
            // because of how Select2 helps load all possible translation files
            if (debug && window.console && console.warn) {
              console.warn(
                'Select2: The language file for "' + language + '" could ' +
                'not be automatically loaded. A fallback will be used instead.'
              );
            }
          }
        }
      } else if ($.isPlainObject(language)) {
        languageData = new Translation(language);
      } else {
        languageData = language;
      }

      translations.extend(languageData);
    }

    return translations;
  };

  Defaults.prototype.set = function (key, value) {
    var camelKey = $.camelCase(key);

    var data = {};
    data[camelKey] = value;

    var convertedData = Utils._convertData(data);

    $.extend(true, this.defaults, convertedData);
  };

  var defaults = new Defaults();

  return defaults;
});

S2.define('select2/options',[
  'require',
  'jquery',
  './defaults',
  './utils'
], function (require, $, Defaults, Utils) {
  function Options (options, $element) {
    this.options = options;

    if ($element != null) {
      this.fromElement($element);
    }

    if ($element != null) {
      this.options = Defaults.applyFromElement(this.options, $element);
    }

    this.options = Defaults.apply(this.options);

    if ($element && $element.is('input')) {
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');

      this.options.dataAdapter = Utils.Decorate(
        this.options.dataAdapter,
        InputCompat
      );
    }
  }

  Options.prototype.fromElement = function ($e) {
    var excludedData = ['select2'];

    if (this.options.multiple == null) {
      this.options.multiple = $e.prop('multiple');
    }

    if (this.options.disabled == null) {
      this.options.disabled = $e.prop('disabled');
    }

    if (this.options.dir == null) {
      if ($e.prop('dir')) {
        this.options.dir = $e.prop('dir');
      } else if ($e.closest('[dir]').prop('dir')) {
        this.options.dir = $e.closest('[dir]').prop('dir');
      } else {
        this.options.dir = 'ltr';
      }
    }

    $e.prop('disabled', this.options.disabled);
    $e.prop('multiple', this.options.multiple);

    if (Utils.GetData($e[0], 'select2Tags')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-select-tags` attribute has been changed to ' +
          'use the `data-data` and `data-tags="true"` attributes and will be ' +
          'removed in future versions of Select2.'
        );
      }

      Utils.StoreData($e[0], 'data', Utils.GetData($e[0], 'select2Tags'));
      Utils.StoreData($e[0], 'tags', true);
    }

    if (Utils.GetData($e[0], 'ajaxUrl')) {
      if (this.options.debug && window.console && console.warn) {
        console.warn(
          'Select2: The `data-ajax-url` attribute has been changed to ' +
          '`data-ajax-url` and support for the old attribute will be removed' +
          ' in future versions of Select2.'
        );
      }

      $e.attr('ajax-url', Utils.GetData($e[0], 'ajaxUrl'));
      Utils.StoreData($e[0], 'ajax-Url', Utils.GetData($e[0], 'ajaxUrl'));
    }

    var dataset = {};

    function upperCaseLetter(_, letter) {
      return letter.toUpperCase();
    }

    // Pre-load all of the attributes which are prefixed with `data-`
    for (var attr = 0; attr < $e[0].attributes.length; attr++) {
      var attributeName = $e[0].attributes[attr].name;
      var prefix = 'data-';

      if (attributeName.substr(0, prefix.length) == prefix) {
        // Get the contents of the attribute after `data-`
        var dataName = attributeName.substring(prefix.length);

        // Get the data contents from the consistent source
        // This is more than likely the jQuery data helper
        var dataValue = Utils.GetData($e[0], dataName);

        // camelCase the attribute name to match the spec
        var camelDataName = dataName.replace(/-([a-z])/g, upperCaseLetter);

        // Store the data attribute contents into the dataset since
        dataset[camelDataName] = dataValue;
      }
    }

    // Prefer the element's `dataset` attribute if it exists
    // jQuery 1.x does not correctly handle data attributes with multiple dashes
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
      dataset = $.extend(true, {}, $e[0].dataset, dataset);
    }

    // Prefer our internal data cache if it exists
    var data = $.extend(true, {}, Utils.GetData($e[0]), dataset);

    data = Utils._convertData(data);

    for (var key in data) {
      if ($.inArray(key, excludedData) > -1) {
        continue;
      }

      if ($.isPlainObject(this.options[key])) {
        $.extend(this.options[key], data[key]);
      } else {
        this.options[key] = data[key];
      }
    }

    return this;
  };

  Options.prototype.get = function (key) {
    return this.options[key];
  };

  Options.prototype.set = function (key, val) {
    this.options[key] = val;
  };

  return Options;
});

S2.define('select2/core',[
  'jquery',
  './options',
  './utils',
  './keys'
], function ($, Options, Utils, KEYS) {
  var Select2 = function ($element, options) {
    if (Utils.GetData($element[0], 'select2') != null) {
      Utils.GetData($element[0], 'select2').destroy();
    }

    this.$element = $element;

    this.id = this._generateId($element);

    options = options || {};

    this.options = new Options(options, $element);

    Select2.__super__.constructor.call(this);

    // Set up the tabindex

    var tabindex = $element.attr('tabindex') || 0;
    Utils.StoreData($element[0], 'old-tabindex', tabindex);
    $element.attr('tabindex', '-1');

    // Set up containers and adapters

    var DataAdapter = this.options.get('dataAdapter');
    this.dataAdapter = new DataAdapter($element, this.options);

    var $container = this.render();

    this._placeContainer($container);

    var SelectionAdapter = this.options.get('selectionAdapter');
    this.selection = new SelectionAdapter($element, this.options);
    this.$selection = this.selection.render();

    this.selection.position(this.$selection, $container);

    var DropdownAdapter = this.options.get('dropdownAdapter');
    this.dropdown = new DropdownAdapter($element, this.options);
    this.$dropdown = this.dropdown.render();

    this.dropdown.position(this.$dropdown, $container);

    var ResultsAdapter = this.options.get('resultsAdapter');
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
    this.$results = this.results.render();

    this.results.position(this.$results, this.$dropdown);

    // Bind events

    var self = this;

    // Bind the container to all of the adapters
    this._bindAdapters();

    // Register any DOM event handlers
    this._registerDomEvents();

    // Register any internal event handlers
    this._registerDataEvents();
    this._registerSelectionEvents();
    this._registerDropdownEvents();
    this._registerResultsEvents();
    this._registerEvents();

    // Set the initial state
    this.dataAdapter.current(function (initialData) {
      self.trigger('selection:update', {
        data: initialData
      });
    });

    // Hide the original select
    $element.addClass('select2-hidden-accessible');
    $element.attr('aria-hidden', 'true');

    // Synchronize any monitored attributes
    this._syncAttributes();

    Utils.StoreData($element[0], 'select2', this);

    // Ensure backwards compatibility with $element.data('select2').
    $element.data('select2', this);
  };

  Utils.Extend(Select2, Utils.Observable);

  Select2.prototype._generateId = function ($element) {
    var id = '';

    if ($element.attr('id') != null) {
      id = $element.attr('id');
    } else if ($element.attr('name') != null) {
      id = $element.attr('name') + '-' + Utils.generateChars(2);
    } else {
      id = Utils.generateChars(4);
    }

    id = id.replace(/(:|\.|\[|\]|,)/g, '');
    id = 'select2-' + id;

    return id;
  };

  Select2.prototype._placeContainer = function ($container) {
    $container.insertAfter(this.$element);

    var width = this._resolveWidth(this.$element, this.options.get('width'));

    if (width != null) {
      $container.css('width', width);
    }
  };

  Select2.prototype._resolveWidth = function ($element, method) {
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

    if (method == 'resolve') {
      var styleWidth = this._resolveWidth($element, 'style');

      if (styleWidth != null) {
        return styleWidth;
      }

      return this._resolveWidth($element, 'element');
    }

    if (method == 'element') {
      var elementWidth = $element.outerWidth(false);

      if (elementWidth <= 0) {
        return 'auto';
      }

      return elementWidth + 'px';
    }

    if (method == 'style') {
      var style = $element.attr('style');

      if (typeof(style) !== 'string') {
        return null;
      }

      var attrs = style.split(';');

      for (var i = 0, l = attrs.length; i < l; i = i + 1) {
        var attr = attrs[i].replace(/\s/g, '');
        var matches = attr.match(WIDTH);

        if (matches !== null && matches.length >= 1) {
          return matches[1];
        }
      }

      return null;
    }

    if (method == 'computedstyle') {
      var computedStyle = window.getComputedStyle($element[0]);

      return computedStyle.width;
    }

    return method;
  };

  Select2.prototype._bindAdapters = function () {
    this.dataAdapter.bind(this, this.$container);
    this.selection.bind(this, this.$container);

    this.dropdown.bind(this, this.$container);
    this.results.bind(this, this.$container);
  };

  Select2.prototype._registerDomEvents = function () {
    var self = this;

    this.$element.on('change.select2', function () {
      self.dataAdapter.current(function (data) {
        self.trigger('selection:update', {
          data: data
        });
      });
    });

    this.$element.on('focus.select2', function (evt) {
      self.trigger('focus', evt);
    });

    this._syncA = Utils.bind(this._syncAttributes, this);
    this._syncS = Utils.bind(this._syncSubtree, this);

    if (this.$element[0].attachEvent) {
      this.$element[0].attachEvent('onpropertychange', this._syncA);
    }

    var observer = window.MutationObserver ||
      window.WebKitMutationObserver ||
      window.MozMutationObserver
    ;

    if (observer != null) {
      this._observer = new observer(function (mutations) {
        self._syncA();
        self._syncS(null, mutations);
      });
      this._observer.observe(this.$element[0], {
        attributes: true,
        childList: true,
        subtree: false
      });
    } else if (this.$element[0].addEventListener) {
      this.$element[0].addEventListener(
        'DOMAttrModified',
        self._syncA,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeInserted',
        self._syncS,
        false
      );
      this.$element[0].addEventListener(
        'DOMNodeRemoved',
        self._syncS,
        false
      );
    }
  };

  Select2.prototype._registerDataEvents = function () {
    var self = this;

    this.dataAdapter.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerSelectionEvents = function () {
    var self = this;
    var nonRelayEvents = ['toggle', 'focus'];

    this.selection.on('toggle', function () {
      self.toggleDropdown();
    });

    this.selection.on('focus', function (params) {
      self.focus(params);
    });

    this.selection.on('*', function (name, params) {
      if ($.inArray(name, nonRelayEvents) !== -1) {
        return;
      }

      self.trigger(name, params);
    });
  };

  Select2.prototype._registerDropdownEvents = function () {
    var self = this;

    this.dropdown.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerResultsEvents = function () {
    var self = this;

    this.results.on('*', function (name, params) {
      self.trigger(name, params);
    });
  };

  Select2.prototype._registerEvents = function () {
    var self = this;

    this.on('open', function () {
      self.$container.addClass('select-box-open');
    });

    this.on('close', function () {
      self.$container.removeClass('select-box-open');
    });

    this.on('enable', function () {
      self.$container.removeClass('select-box-disabled');
    });

    this.on('disable', function () {
      self.$container.addClass('select-box-disabled');
    });

    this.on('blur', function () {
      self.$container.removeClass('select-box-focus');
    });

    this.on('query', function (params) {
      if (!self.isOpen()) {
        self.trigger('open', {});
      }

      this.dataAdapter.query(params, function (data) {
        self.trigger('results:all', {
          data: data,
          query: params
        });
      });
    });

    this.on('query:append', function (params) {
      this.dataAdapter.query(params, function (data) {
        self.trigger('results:append', {
          data: data,
          query: params
        });
      });
    });

    this.on('keypress', function (evt) {
      var key = evt.which;

      if (self.isOpen()) {
        if (key === KEYS.ESC || key === KEYS.TAB ||
            (key === KEYS.UP && evt.altKey)) {
          self.close(evt);

          evt.preventDefault();
        } else if (key === KEYS.ENTER) {
          self.trigger('results:select', {});

          evt.preventDefault();
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
          self.trigger('results:toggle', {});

          evt.preventDefault();
        } else if (key === KEYS.UP) {
          self.trigger('results:previous', {});

          evt.preventDefault();
        } else if (key === KEYS.DOWN) {
          self.trigger('results:next', {});

          evt.preventDefault();
        }
      } else {
        if (key === KEYS.ENTER || key === KEYS.SPACE ||
            (key === KEYS.DOWN && evt.altKey)) {
          self.open();

          evt.preventDefault();
        }
      }
    });
  };

  Select2.prototype._syncAttributes = function () {
    this.options.set('disabled', this.$element.prop('disabled'));

    if (this.isDisabled()) {
      if (this.isOpen()) {
        this.close();
      }

      this.trigger('disable', {});
    } else {
      this.trigger('enable', {});
    }
  };

  Select2.prototype._isChangeMutation = function (evt, mutations) {
    var changed = false;
    var self = this;

    // Ignore any mutation events raised for elements that aren't options or
    // optgroups. This handles the case when the select element is destroyed
    if (
      evt && evt.target && (
        evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
      )
    ) {
      return;
    }

    if (!mutations) {
      // If mutation events aren't supported, then we can only assume that the
      // change affected the selections
      changed = true;
    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
      for (var n = 0; n < mutations.addedNodes.length; n++) {
        var node = mutations.addedNodes[n];

        if (node.selected) {
          changed = true;
        }
      }
    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
      changed = true;
    } else if ($.isArray(mutations)) {
      $.each(mutations, function(evt, mutation) {
        if (self._isChangeMutation(evt, mutation)) {
          // We've found a change mutation.
          // Let's escape from the loop and continue
          changed = true;
          return false;
        }
      });
    }
    return changed;
  };

  Select2.prototype._syncSubtree = function (evt, mutations) {
    var changed = this._isChangeMutation(evt, mutations);
    var self = this;

    // Only re-pull the data if we think there is a change
    if (changed) {
      this.dataAdapter.current(function (currentData) {
        self.trigger('selection:update', {
          data: currentData
        });
      });
    }
  };

  /**
   * Override the trigger method to automatically trigger pre-events when
   * there are events that can be prevented.
   */
  Select2.prototype.trigger = function (name, args) {
    var actualTrigger = Select2.__super__.trigger;
    var preTriggerMap = {
      'open': 'opening',
      'close': 'closing',
      'select': 'selecting',
      'unselect': 'unselecting',
      'clear': 'clearing'
    };

    if (args === undefined) {
      args = {};
    }

    if (name in preTriggerMap) {
      var preTriggerName = preTriggerMap[name];
      var preTriggerArgs = {
        prevented: false,
        name: name,
        args: args
      };

      actualTrigger.call(this, preTriggerName, preTriggerArgs);

      if (preTriggerArgs.prevented) {
        args.prevented = true;

        return;
      }
    }

    actualTrigger.call(this, name, args);
  };

  Select2.prototype.toggleDropdown = function () {
    if (this.isDisabled()) {
      return;
    }

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  };

  Select2.prototype.open = function () {
    if (this.isOpen()) {
      return;
    }

    if (this.isDisabled()) {
      return;
    }

    this.trigger('query', {});
  };

  Select2.prototype.close = function (evt) {
    if (!this.isOpen()) {
      return;
    }

    this.trigger('close', { originalEvent : evt });
  };

  /**
   * Helper method to abstract the "enabled" (not "disabled") state of this
   * object.
   *
   * @return {true} if the instance is not disabled.
   * @return {false} if the instance is disabled.
   */
  Select2.prototype.isEnabled = function () {
    return !this.isDisabled();
  };

  /**
   * Helper method to abstract the "disabled" state of this object.
   *
   * @return {true} if the disabled option is true.
   * @return {false} if the disabled option is false.
   */
  Select2.prototype.isDisabled = function () {
    return this.options.get('disabled');
  };

  Select2.prototype.isOpen = function () {
    return this.$container.hasClass('select-box-open');
  };

  Select2.prototype.hasFocus = function () {
    return this.$container.hasClass('select-box-focus');
  };

  Select2.prototype.focus = function (data) {
    // No need to re-trigger focus events if we are already focused
    if (this.hasFocus()) {
      return;
    }

    this.$container.addClass('select-box-focus');
    this.trigger('focus', {});
  };

  Select2.prototype.enable = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("enable")` method has been deprecated and will' +
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +
        ' instead.'
      );
    }

    if (args == null || args.length === 0) {
      args = [true];
    }

    var disabled = !args[0];

    this.$element.prop('disabled', disabled);
  };

  Select2.prototype.data = function () {
    if (this.options.get('debug') &&
        arguments.length > 0 && window.console && console.warn) {
      console.warn(
        'Select2: Data can no longer be set using `select2("data")`. You ' +
        'should consider setting the value instead using `$element.val()`.'
      );
    }

    var data = [];

    this.dataAdapter.current(function (currentData) {
      data = currentData;
    });

    return data;
  };

  Select2.prototype.val = function (args) {
    if (this.options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `select2("val")` method has been deprecated and will be' +
        ' removed in later Select2 versions. Use $element.val() instead.'
      );
    }

    if (args == null || args.length === 0) {
      return this.$element.val();
    }

    var newVal = args[0];

    if ($.isArray(newVal)) {
      newVal = $.map(newVal, function (obj) {
        return obj.toString();
      });
    }

    this.$element.val(newVal).trigger('input').trigger('change');
  };

  Select2.prototype.destroy = function () {
    this.$container.remove();

    if (this.$element[0].detachEvent) {
      this.$element[0].detachEvent('onpropertychange', this._syncA);
    }

    if (this._observer != null) {
      this._observer.disconnect();
      this._observer = null;
    } else if (this.$element[0].removeEventListener) {
      this.$element[0]
        .removeEventListener('DOMAttrModified', this._syncA, false);
      this.$element[0]
        .removeEventListener('DOMNodeInserted', this._syncS, false);
      this.$element[0]
        .removeEventListener('DOMNodeRemoved', this._syncS, false);
    }

    this._syncA = null;
    this._syncS = null;

    this.$element.off('.select2');
    this.$element.attr('tabindex',
    Utils.GetData(this.$element[0], 'old-tabindex'));

    this.$element.removeClass('select2-hidden-accessible');
    this.$element.attr('aria-hidden', 'false');
    Utils.RemoveData(this.$element[0]);
    this.$element.removeData('select2');

    this.dataAdapter.destroy();
    this.selection.destroy();
    this.dropdown.destroy();
    this.results.destroy();

    this.dataAdapter = null;
    this.selection = null;
    this.dropdown = null;
    this.results = null;
  };

  Select2.prototype.render = function () {
    var $container = $(
      '<span class="select2 select-box">' +
        '<span class="selection"></span>' +
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
      '</span>'
    );

    $container.attr('dir', this.options.get('dir'));

    this.$container = $container;

    this.$container.addClass('select-box-' + this.options.get('theme'));

    Utils.StoreData($container[0], 'element', this.$element);

    return $container;
  };

  return Select2;
});

S2.define('select2/compat/utils',[
  'jquery'
], function ($) {
  function syncCssClasses ($dest, $src, adapter) {
    var classes, replacements = [], adapted;

    classes = $.trim($dest.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Save all Select2 classes
        if (this.indexOf('select2-') === 0) {
          replacements.push(this);
        }
      });
    }

    classes = $.trim($src.attr('class'));

    if (classes) {
      classes = '' + classes; // for IE which returns object

      $(classes.split(/\s+/)).each(function () {
        // Only adapt non-Select2 classes
        if (this.indexOf('select2-') !== 0) {
          adapted = adapter(this);

          if (adapted != null) {
            replacements.push(adapted);
          }
        }
      });
    }

    $dest.attr('class', replacements.join(' '));
  }

  return {
    syncCssClasses: syncCssClasses
  };
});

S2.define('select2/compat/containerCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _containerAdapter (clazz) {
    return null;
  }

  function ContainerCSS () { }

  ContainerCSS.prototype.render = function (decorated) {
    var $container = decorated.call(this);

    var containerCssClass = this.options.get('containerCssClass') || '';

    if ($.isFunction(containerCssClass)) {
      containerCssClass = containerCssClass(this.$element);
    }

    var containerCssAdapter = this.options.get('adaptContainerCssClass');
    containerCssAdapter = containerCssAdapter || _containerAdapter;

    if (containerCssClass.indexOf(':all:') !== -1) {
      containerCssClass = containerCssClass.replace(':all:', '');

      var _cssAdapter = containerCssAdapter;

      containerCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var containerCss = this.options.get('containerCss') || {};

    if ($.isFunction(containerCss)) {
      containerCss = containerCss(this.$element);
    }

    CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

    $container.css(containerCss);
    $container.addClass(containerCssClass);

    return $container;
  };

  return ContainerCSS;
});

S2.define('select2/compat/dropdownCss',[
  'jquery',
  './utils'
], function ($, CompatUtils) {
  // No-op CSS adapter that discards all classes by default
  function _dropdownAdapter (clazz) {
    return null;
  }

  function DropdownCSS () { }

  DropdownCSS.prototype.render = function (decorated) {
    var $dropdown = decorated.call(this);

    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

    if ($.isFunction(dropdownCssClass)) {
      dropdownCssClass = dropdownCssClass(this.$element);
    }

    var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
    dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

    if (dropdownCssClass.indexOf(':all:') !== -1) {
      dropdownCssClass = dropdownCssClass.replace(':all:', '');

      var _cssAdapter = dropdownCssAdapter;

      dropdownCssAdapter = function (clazz) {
        var adapted = _cssAdapter(clazz);

        if (adapted != null) {
          // Append the old one along with the adapted one
          return adapted + ' ' + clazz;
        }

        return clazz;
      };
    }

    var dropdownCss = this.options.get('dropdownCss') || {};

    if ($.isFunction(dropdownCss)) {
      dropdownCss = dropdownCss(this.$element);
    }

    CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

    $dropdown.css(dropdownCss);
    $dropdown.addClass(dropdownCssClass);

    return $dropdown;
  };

  return DropdownCSS;
});

S2.define('select2/compat/initSelection',[
  'jquery'
], function ($) {
  function InitSelection (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `initSelection` option has been deprecated in favor' +
        ' of a custom data adapter that overrides the `current` method. ' +
        'This method is now called multiple times instead of a single ' +
        'time when the instance is initialized. Support will be removed ' +
        'for the `initSelection` option in future versions of Select2'
      );
    }

    this.initSelection = options.get('initSelection');
    this._isInitialized = false;

    decorated.call(this, $element, options);
  }

  InitSelection.prototype.current = function (decorated, callback) {
    var self = this;

    if (this._isInitialized) {
      decorated.call(this, callback);

      return;
    }

    this.initSelection.call(null, this.$element, function (data) {
      self._isInitialized = true;

      if (!$.isArray(data)) {
        data = [data];
      }

      callback(data);
    });
  };

  return InitSelection;
});

S2.define('select2/compat/inputData',[
  'jquery',
  '../utils'
], function ($, Utils) {
  function InputData (decorated, $element, options) {
    this._currentData = [];
    this._valueSeparator = options.get('valueSeparator') || ',';

    if ($element.prop('type') === 'hidden') {
      if (options.get('debug') && console && console.warn) {
        console.warn(
          'Select2: Using a hidden input with Select2 is no longer ' +
          'supported and may stop working in the future. It is recommended ' +
          'to use a `<select>` element instead.'
        );
      }
    }

    decorated.call(this, $element, options);
  }

  InputData.prototype.current = function (_, callback) {
    function getSelected (data, selectedIds) {
      var selected = [];

      if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
        data.selected = true;
        selected.push(data);
      } else {
        data.selected = false;
      }

      if (data.children) {
        selected.push.apply(selected, getSelected(data.children, selectedIds));
      }

      return selected;
    }

    var selected = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      selected.push.apply(
        selected,
        getSelected(
          data,
          this.$element.val().split(
            this._valueSeparator
          )
        )
      );
    }

    callback(selected);
  };

  InputData.prototype.select = function (_, data) {
    if (!this.options.get('multiple')) {
      this.current(function (allData) {
        $.map(allData, function (data) {
          data.selected = false;
        });
      });

      this.$element.val(data.id);
      this.$element.trigger('input').trigger('change');
    } else {
      var value = this.$element.val();
      value += this._valueSeparator + data.id;

      this.$element.val(value);
      this.$element.trigger('input').trigger('change');
    }
  };

  InputData.prototype.unselect = function (_, data) {
    var self = this;

    data.selected = false;

    this.current(function (allData) {
      var values = [];

      for (var d = 0; d < allData.length; d++) {
        var item = allData[d];

        if (data.id == item.id) {
          continue;
        }

        values.push(item.id);
      }

      self.$element.val(values.join(self._valueSeparator));
      self.$element.trigger('input').trigger('change');
    });
  };

  InputData.prototype.query = function (_, params, callback) {
    var results = [];

    for (var d = 0; d < this._currentData.length; d++) {
      var data = this._currentData[d];

      var matches = this.matches(params, data);

      if (matches !== null) {
        results.push(matches);
      }
    }

    callback({
      results: results
    });
  };

  InputData.prototype.addOptions = function (_, $options) {
    var options = $.map($options, function ($option) {
      return Utils.GetData($option[0], 'data');
    });

    this._currentData.push.apply(this._currentData, options);
  };

  return InputData;
});

S2.define('select2/compat/matcher',[
  'jquery'
], function ($) {
  function oldMatcher (matcher) {
    function wrappedMatcher (params, data) {
      var match = $.extend(true, {}, data);

      if (params.term == null || $.trim(params.term) === '') {
        return match;
      }

      if (data.children) {
        for (var c = data.children.length - 1; c >= 0; c--) {
          var child = data.children[c];

          // Check if the child object matches
          // The old matcher returned a boolean true or false
          var doesMatch = matcher(params.term, child.text, child);

          // If the child didn't match, pop it off
          if (!doesMatch) {
            match.children.splice(c, 1);
          }
        }

        if (match.children.length > 0) {
          return match;
        }
      }

      if (matcher(params.term, data.text, data)) {
        return match;
      }

      return null;
    }

    return wrappedMatcher;
  }

  return oldMatcher;
});

S2.define('select2/compat/query',[

], function () {
  function Query (decorated, $element, options) {
    if (options.get('debug') && window.console && console.warn) {
      console.warn(
        'Select2: The `query` option has been deprecated in favor of a ' +
        'custom data adapter that overrides the `query` method. Support ' +
        'will be removed for the `query` option in future versions of ' +
        'Select2.'
      );
    }

    decorated.call(this, $element, options);
  }

  Query.prototype.query = function (_, params, callback) {
    params.callback = callback;

    var query = this.options.get('query');

    query.call(null, params);
  };

  return Query;
});

S2.define('select2/dropdown/attachContainer',[

], function () {
  function AttachContainer (decorated, $element, options) {
    decorated.call(this, $element, options);
  }

  AttachContainer.prototype.position =
    function (decorated, $dropdown, $container) {
    var $dropdownContainer = $container.find('.dropdown-wrapper');
    $dropdownContainer.append($dropdown);

    $dropdown.addClass('select2-dropdown-below');
    $container.addClass('select-box-below');
  };

  return AttachContainer;
});

S2.define('select2/dropdown/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
    'blur',
    'change',
    'click',
    'dblclick',
    'focus',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'keypress',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseup',
    'search',
    'touchend',
    'touchstart'
    ];

    this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

S2.define('select2/selection/stopPropagation',[

], function () {
  function StopPropagation () { }

  StopPropagation.prototype.bind = function (decorated, container, $container) {
    decorated.call(this, container, $container);

    var stoppedEvents = [
      'blur',
      'change',
      'click',
      'dblclick',
      'focus',
      'focusin',
      'focusout',
      'input',
      'keydown',
      'keyup',
      'keypress',
      'mousedown',
      'mouseenter',
      'mouseleave',
      'mousemove',
      'mouseover',
      'mouseup',
      'search',
      'touchend',
      'touchstart'
    ];

    this.$selection.on(stoppedEvents.join(' '), function (evt) {
      evt.stopPropagation();
    });
  };

  return StopPropagation;
});

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( typeof S2.define === 'function' && S2.define.amd ) {
        // AMD. Register as an anonymous module.
        S2.define('jquery-mousewheel',['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

S2.define('jquery.select2',[
  'jquery',
  'jquery-mousewheel',

  './select2/core',
  './select2/defaults',
  './select2/utils'
], function ($, _, Select2, Defaults, Utils) {
  if ($.fn.select2 == null) {
    // All methods that should return the element
    var thisMethods = ['open', 'close', 'destroy'];

    $.fn.select2 = function (options) {
      options = options || {};

      if (typeof options === 'object') {
        this.each(function () {
          var instanceOptions = $.extend(true, {}, options);

          var instance = new Select2($(this), instanceOptions);
        });

        return this;
      } else if (typeof options === 'string') {
        var ret;
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(function () {
          var instance = Utils.GetData(this, 'select2');

          if (instance == null && window.console && console.error) {
            console.error(
              'The select2(\'' + options + '\') method was called on an ' +
              'element that is not using Select2.'
            );
          }

          ret = instance[options].apply(instance, args);
        });

        // Check if we should be returning `this`
        if ($.inArray(options, thisMethods) > -1) {
          return this;
        }

        return ret;
      } else {
        throw new Error('Invalid arguments for Select2: ' + options);
      }
    };
  }

  if ($.fn.select2.defaults == null) {
    $.fn.select2.defaults = Defaults;
  }

  return Select2;
});

  // Return the AMD loader configuration so it can be used outside of this file
  return {
    define: S2.define,
    require: S2.require
  };
}());

  // Autoload the jQuery bindings
  // We know that all of the modules exist above this, so we're safe
  var select2 = S2.require('jquery.select2');

  // Hold the AMD module references on the jQuery function that was just loaded
  // This allows Select2 to use the internal loader outside of this file, such
  // as in the language files.
  jQuery.fn.select2.amd = S2;

  // Return the Select2 instance for anyone who is importing it.
  return select2;
}));
$(".ax-select").select2();


//定义函数
//定义实现textarea高度根据内容自适应start
$.fn.extend({
    txtaAutoHeight: function () {
        return this.each(function () {
            var $this = $(this);
            if (!$this.attr('initAttrH')) {
                $this.attr('initAttrH', $this.outerHeight());
            }
            setAutoHeight(this).on('input', function () {
                setAutoHeight(this);
            });
        });
        function setAutoHeight(elem) {
            var $obj = $(elem);
            return $obj.css({height: $obj.attr('initAttrH'), 'overflow-y': 'hidden'}).height(elem.scrollHeight);
        }
    }
});
//complete 自动完成
(function () {

    var _ = function (input, o) {
        var me = this;

        // Keep track of number of instances for unique IDs
        _.count = (_.count || 0) + 1;
        this.count = _.count;

        // Setup

        this.isOpened = false;

        this.input = $(input);
        this.input.setAttribute("autocomplete", "off");
        this.input.setAttribute("aria-expanded", "false");
        this.input.setAttribute("aria-owns", "ax-complete-list-" + this.count);
        this.input.setAttribute("role", "combobox");

        // store constructor options in case we need to distinguish
        // between default and customized behavior later on
        this.options = o = o || {};

        configure(this, {
            minChars: 1,
            maxItems: 20,
            textShow:true,//
            autoFirst: false,
            data: _.DATA,
            filter: _.FILTER_CONTAINS,
            sort: o.sort === false ? false : _.SORT_BYLENGTH,
            container: _.CONTAINER,
            item: _.ITEM,
            replace: _.REPLACE,
            tabSelect: false
        }, o);

        this.index = -1;

        // Create necessary elements

        this.container = this.container(input);

        this.ul = $.create("ul", {
            hidden: "hidden",
            role: "listbox",
            id: "ax-complete-list-" + this.count,
            inside: this.container
        });



        if(this.input.getAttribute("textShow")=='false'){
            this.textShow=false;
        }else{
            this.textShow=true;
        }
        if(this.textShow){
            var isShow=''
        }else{
            var isShow ='display:none;'
        }
//
        this.status = $.create("span", {
            className: "ax-text",
            role: "status",
            style:isShow,//
            "aria-live": "assertive",
            "aria-atomic": true,
            inside: this.container,
            textContent: this.minChars != 0 ? ("请输入" + this.minChars + "个或更多字符") : "Begin typing for results."
        });

        // Bind events

        this._events = {
            input: {
                "input": this.evaluate.bind(this),
                "blur": this.close.bind(this, { reason: "blur" }),
                "keydown": function(evt) {
                    var c = evt.keyCode;

                    // If the dropdown `ul` is in view, then act on keydown for the following keys:
                    // Enter / Esc / Up / Down
                    if(me.opened) {
                        if (c === 13 && me.selected) { // Enter
                            evt.preventDefault();
                            me.select(undefined, undefined, evt);
                        }
                        else if (c === 9 && me.selected && me.tabSelect) {
                            me.select(undefined, undefined, evt);
                        }
                        else if (c === 27) { // Esc
                            me.close({ reason: "esc" });
                        }
                        else if (c === 38 || c === 40) { // Down/Up arrow
                            evt.preventDefault();
                            me[c === 38? "previous" : "next"]();
                        }
                    }
                }
            },
            form: {
                "submit": this.close.bind(this, { reason: "submit" })
            },
            ul: {
                // Prevent the default mousedowm, which ensures the input is not blurred.
                // The actual selection will happen on click. This also ensures dragging the
                // cursor away from the list item will cancel the selection
                "mousedown": function(evt) {
                    evt.preventDefault();
                },
                // The click event is fired even if the corresponding mousedown event has called preventDefault
                "click": function(evt) {
                    var li = evt.target;

                    if (li !== this) {

                        while (li && !/li/i.test(li.nodeName)) {
                            li = li.parentNode;
                        }

                        if (li && evt.button === 0) {  // Only select on left click
                            evt.preventDefault();
                            me.select(li, evt.target, evt);
                        }
                    }
                }
            }
        };

        $.bind(this.input, this._events.input);
        $.bind(this.input.form, this._events.form);
        $.bind(this.ul, this._events.ul);

        if (this.input.hasAttribute("list")) {
            this.list = "#" + this.input.getAttribute("list");
            this.input.removeAttribute("list");
        }
        else {
            this.list = this.input.getAttribute("data-list") || o.list || [];
        }

        _.all.push(this);
    };

    _.prototype = {
        set list(list) {
            if (Array.isArray(list)) {
                this._list = list;
            }
            else if (typeof list === "string" && list.indexOf(",") > -1) {
                this._list = list.split(/\s*,\s*/);
            }
            else { // Element or CSS selector
                list = $(list);

                if (list && list.children) {
                    var items = [];
                    slice.apply(list.children).forEach(function (el) {
                        if (!el.disabled) {
                            var text = el.textContent.trim();
                            var value = el.value || text;
                            var label = el.label || text;
                            if (value !== "") {
                                items.push({ label: label, value: value });
                            }
                        }
                    });
                    this._list = items;
                }
            }

            if (document.activeElement === this.input) {
                this.evaluate();
            }
        },

        get selected() {
            return this.index > -1;
        },

        get opened() {
            return this.isOpened;
        },

        close: function (o) {
            if (!this.opened) {
                return;
            }

            this.input.setAttribute("aria-expanded", "false");
            this.ul.setAttribute("hidden", "");
            this.isOpened = false;
            this.index = -1;

            this.status.setAttribute("hidden", "");

            $.fire(this.input, "axcomplete-close", o || {});
        },

        open: function () {
            this.input.setAttribute("aria-expanded", "true");
            this.ul.removeAttribute("hidden");
            this.isOpened = true;

            this.status.removeAttribute("hidden");

            if (this.autoFirst && this.index === -1) {
                this.goto(0);
            }

            $.fire(this.input, "axcomplete-open");
        },

        destroy: function() {
            //remove events from the input and its form
            $.unbind(this.input, this._events.input);
            $.unbind(this.input.form, this._events.form);

            // cleanup container if it was created by Axcomplete but leave it alone otherwise
            if (!this.options.container) {
                //move the input out of the ax-complete container and remove the container and its children
                var parentNode = this.container.parentNode;

                parentNode.insertBefore(this.input, this.container);
                parentNode.removeChild(this.container);
            }

            //remove autocomplete and aria-autocomplete attributes
            this.input.removeAttribute("autocomplete");
            this.input.removeAttribute("aria-autocomplete");

            //remove this awesomeplete instance from the global array of instances
            var indexOfAxcomplete = _.all.indexOf(this);

            if (indexOfAxcomplete !== -1) {
                _.all.splice(indexOfAxcomplete, 1);
            }
        },

        next: function () {
            var count = this.ul.children.length;
            this.goto(this.index < count - 1 ? this.index + 1 : (count ? 0 : -1) );
        },

        previous: function () {
            var count = this.ul.children.length;
            var pos = this.index - 1;

            this.goto(this.selected && pos !== -1 ? pos : count - 1);
        },

        // Should not be used, highlights specific item without any checks!
        goto: function (i) {
            var lis = this.ul.children;

            if (this.selected) {
                lis[this.index].setAttribute("aria-selected", "false");
            }

            this.index = i;

            if (i > -1 && lis.length > 0) {
                lis[i].setAttribute("aria-selected", "true");

                this.status.textContent = lis[i].textContent + ", 共" + (i + 1) + "/" + lis.length;

                this.input.setAttribute("aria-activedescendant", this.ul.id + "-item-" + this.index);

                // scroll to highlighted element in case parent's height is fixed
                this.ul.scrollTop = lis[i].offsetTop - this.ul.clientHeight + lis[i].clientHeight;

                $.fire(this.input, "axcomplete-highlight", {
                    text: this.suggestions[this.index]
                });
            }
        },

        select: function (selected, origin, originalEvent) {
            if (selected) {
                this.index = $.siblingIndex(selected);
            } else {
                selected = this.ul.children[this.index];
            }

            if (selected) {
                var suggestion = this.suggestions[this.index];

                var allowed = $.fire(this.input, "axcomplete-select", {
                    text: suggestion,
                    origin: origin || selected,
                    originalEvent: originalEvent
                });

                if (allowed) {
                    this.replace(suggestion);
                    this.close({ reason: "select" });
                    $.fire(this.input, "axcomplete-selectcomplete", {
                        text: suggestion,
                        originalEvent: originalEvent
                    });
                }
            }
        },

        evaluate: function() {
            var me = this;
            var value = this.input.value;

            if (value.length >= this.minChars && this._list && this._list.length > 0) {
                this.index = -1;
                // Populate list with options that match
                this.ul.innerHTML = "";

                this.suggestions = this._list
                    .map(function(item) {
                        return new Suggestion(me.data(item, value));
                    })
                    .filter(function(item) {
                        return me.filter(item, value);
                    });

                if (this.sort !== false) {
                    this.suggestions = this.suggestions.sort(this.sort);
                }

                this.suggestions = this.suggestions.slice(0, this.maxItems);

                this.suggestions.forEach(function(text, index) {
                    me.ul.appendChild(me.item(text, value, index));
                });

                if (this.ul.children.length === 0) {

                    this.status.textContent = "没有匹配的选项!";

                    this.close({ reason: "不能匹配" });

                } else {
                    this.open();

                    this.status.textContent = this.ul.children.length + " 个匹配选项";
                }
            }
            else {
                this.close({ reason: "不能匹配" });

                this.status.textContent = "没有匹配的选项!";
            }
        }
    };

// Static methods/properties

    _.all = [];

    _.FILTER_CONTAINS = function (text, input) {

        var pure = text.replace(/<\/?[^>]*>/g,'');//
        return RegExp($.regExpEscape(input.trim()), "i").test(pure);
    };

    _.FILTER_STARTSWITH = function (text, input) {
        var pure = text.replace(/<\/?[^>]*>/g,'');//
        return RegExp("^" + $.regExpEscape(input.trim()), "i").test(pure);
    };

    _.SORT_BYLENGTH = function (a, b) {
        if (a.length !== b.length) {
            return a.length - b.length;
        }

        return a < b? -1 : 1;
    };

    _.CONTAINER = function (input) {
        return $.create("div", {
            className: "ax-complete",
            around: input
        });
    }

    _.ITEM = function (text, input, item_id) {

        var html = input.trim() === "" ? text : text.replace(RegExp($.regExpEscape(input.trim()), "gi"), "<mark>$&</mark>");//
        return $.create("li", {
            innerHTML: html,
            "role": "option",
            "aria-selected": "false",
            "id": "ax-complete-list-" + this.count + "-item-" + item_id
        });
    };

    _.REPLACE = function (text) {
        this.input.value = text.value;
    };

    _.DATA = function (item/*, input*/) { return item; };

// Private functions

    function Suggestion(data) {
        var o = Array.isArray(data)
            ? { label: data[0], value: data[1] }
            : typeof data === "object" && "label" in data && "value" in data ? data : { label: data, value: data };

        this.label = o.label || o.value;
        this.value = o.value;
    }
    Object.defineProperty(Suggestion.prototype = Object.create(String.prototype), "length", {
        get: function() { return this.label.length; }
    });
    Suggestion.prototype.toString = Suggestion.prototype.valueOf = function () {
        return "" + this.label;
    };

    function configure(instance, properties, o) {
        for (var i in properties) {
            var initial = properties[i],
                attrValue = instance.input.getAttribute("data-" + i.toLowerCase());

            if (typeof initial === "number") {
                instance[i] = parseInt(attrValue);
            }
            else if (initial === false) { // Boolean options must be false by default anyway
                instance[i] = attrValue !== null;
            }
            else if (initial instanceof Function) {
                instance[i] = null;
            }
            else {
                instance[i] = attrValue;
            }

            if (!instance[i] && instance[i] !== 0) {
                instance[i] = (i in o)? o[i] : initial;
            }
        }
    }

// Helpers

    var slice = Array.prototype.slice;

    function $(expr, con) {
        return typeof expr === "string"? (con || document).querySelector(expr) : expr || null;
    }

    function $$(expr, con) {
        return slice.call((con || document).querySelectorAll(expr));
    }

    $.create = function(tag, o) {
        var element = document.createElement(tag);

        for (var i in o) {
            var val = o[i];

            if (i === "inside") {
                $(val).appendChild(element);
            }
            else if (i === "around") {
                var ref = $(val);
                ref.parentNode.insertBefore(element, ref);
                element.appendChild(ref);

                if (ref.getAttribute("autofocus") != null) {
                    ref.focus();
                }
            }
            else if (i in element) {
                element[i] = val;
            }
            else {
                element.setAttribute(i, val);
            }
        }

        return element;
    };

    $.bind = function(element, o) {
        if (element) {
            for (var event in o) {
                var callback = o[event];

                event.split(/\s+/).forEach(function (event) {
                    element.addEventListener(event, callback);
                });
            }
        }
    };

    $.unbind = function(element, o) {
        if (element) {
            for (var event in o) {
                var callback = o[event];

                event.split(/\s+/).forEach(function(event) {
                    element.removeEventListener(event, callback);
                });
            }
        }
    };

    $.fire = function(target, type, properties) {
        var evt = document.createEvent("HTMLEvents");

        evt.initEvent(type, true, true );

        for (var j in properties) {
            evt[j] = properties[j];
        }

        return target.dispatchEvent(evt);
    };

    $.regExpEscape = function (s) {
        return s.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
    };

    $.siblingIndex = function (el) {
        /* eslint-disable no-cond-assign */
        for (var i = 0; el = el.previousElementSibling; i++);
        return i;
    };

// Initialization

    function init() {
        $$("input.ax-complete").forEach(function (input) {
            new _(input);
        });
    }

// Make sure to export Axcomplete on self when in a browser
    if (typeof self !== "undefined") {
        self.Axcomplete = _;
    }

// Are we in a browser? Check for Document constructor
    if (typeof Document !== "undefined") {
        // DOM already loaded?
        if (document.readyState !== "loading") {
            init();
        }
        else {
            // Wait for it
            document.addEventListener("DOMContentLoaded", init);
        }
    }

    _.$ = $;
    _.$$ = $$;

// Expose Axcomplete as a CJS module
    if (typeof module === "object" && module.exports) {
        module.exports = _;
    }

    return _;

}());
/* ell */
$.fn.extend({
    axEll:function(options){
        var dft = {
            textLength: "60",
            foldText: "收起",
            unfoldText: "全部",
            btnClass: "ax-color-primary",
        }
        var opt = $.extend(dft, options);
        $(this).each(function(){
            var textNum =$(this).attr("data-num");
            if(textNum == undefined){
                var  textTotal = opt.textLength;
            }else if(textNum !== ''){
                textTotal = textNum;
            }else{
                textTotal = opt.textLength;
            }


            var content =$(this).text();
            var contentEll =$(this).text().substring(0,textTotal)+"...";
            var more = true;
            if($(this).text().length>opt.textLength){
                $(this).text($(this).text().substring(0,textTotal));
                $(this).html(contentEll+"<a href='##' class='" + opt.btnClass + "'>" + opt.unfoldText +"</a>");
                more = true;
            }else {
            }
            $(this).on('click',"a",function(){
                if(more){
                    $(this).parent().html(content+"<a href='##' class='" + opt.btnClass + "'>" + opt.foldText +"</a>");
                    more = false;
                }else{

                    $(this).parent().html(contentEll+"<a href='##' class='" + opt.btnClass + "'>" + opt.unfoldText +"</a>");
                    more = true;
                }
            });
        });
    }
})
/* tab */
$.fn.extend({
    axTab:function(options) {
        var dft = {
            name:'ax-tab',
            index:'',
            cookie:'',
        }
        var opt = $.extend(dft, options);

        $(this).each(function(){

            var thisTab = $(this);
            var thisNav = thisTab.find('.ax-tab-nav');
            var thisContent = thisTab.find('.ax-tab-content');
            var thisActive = 'ax-active';
            var tabNum = Math.min.apply(null,[thisNav.children().length,thisContent.children().length])

            thisTab.addClass(opt.name);

            if(opt.cookie != ''){
                thisNav.children().eq($.cookie(opt.cookie)).addClass(thisActive).siblings().removeClass(thisActive);
                thisContent.children().eq($.cookie(opt.cookie)).addClass(thisActive).siblings().removeClass(thisActive);
            } else if(opt.index == '' || opt.index < 0 || opt.index - tabNum > -1 ){
                thisNav.children().eq(0).addClass(thisActive).siblings().removeClass(thisActive);
                thisContent.children().eq(0).addClass(thisActive).siblings().removeClass(thisActive);
            }else {
                thisNav.children().eq(opt.index).addClass(thisActive).siblings().removeClass(thisActive);
                thisContent.children().eq(opt.index).addClass(thisActive).siblings().removeClass(thisActive);
            }

            thisNav.children().on("click",function(){
                var index = thisNav.children().index(this);
                if(opt.cookie != '') {
                    $.cookie(opt.cookie, index, {expires: 365000, path: '/'});
                }
                $(this).addClass(thisActive).siblings().removeClass(thisActive);
                thisContent.children().eq(index).addClass(thisActive).siblings().removeClass(thisActive);

            });
        });
    }

})
/* axAccordion */
$.fn.extend({
    axAccordion:function(options) {
        var dft = {
            name:'ax-accordion',
            index:'',
            multiple:true,
            cookie:'',
        }
        var opt = $.extend(dft, options);


        if(opt.index !== ''){
            $(this).children('.ax-item').eq(opt.index).addClass('ax-show');
            $(this).children('.ax-item').eq(opt.index).find('.ax-panel-body').slideDown(200);
        }

        $(this).each(function() {
            var accordion =$(this);
            $(this).find('.ax-item').not('.ax-disabled').each(function () {
                var collapse = $(this);
                var collapseHeader = collapse.find('.ax-panel-header');
                var collapseBody = collapse.find('.ax-panel-body');

                if ($(this).hasClass("ax-show")) {
                    collapseBody.slideDown(200);
                }

                collapseHeader.click(function (event) {
                    if (opt.multiple == false || accordion.attr("data-multiple") == 'false') {
                        collapse.siblings('.ax-item').removeClass('ax-show');
                        collapse.siblings('.ax-item').find('.ax-panel-body').slideUp(200);
                    }
                    if ($(this).next('.ax-panel-body').is(':visible') == false) {
                        collapse.addClass('ax-show');
                        collapseBody.slideDown(200);

                    } else {
                        collapse.removeClass('ax-show');
                        collapseBody.slideUp(200);
                    }
                    event.stopPropagation();
                });
                collapseHeader.find('a').click(function (event) {
                    event.stopPropagation();
                });


            });
        });

    }

})

/* ready */
$(document).ready(function () {
    //regular ell
    $(".ax-more-ell").axEll();
    //regular tab
    $(".ax-tab").axTab();
    //regular accordion
    $(".ax-accordion").axAccordion();
    /* form */
    //form left
    $(".ax-pos-left").each(function(){
        var posWidth = $(this).outerWidth(true);
        $(this).siblings("input,textarea").css("padding-left",posWidth);
    });
    //form right delete
    $(".ax-pos-right .ax-val-none").click(function () {
        $(this).parent().siblings("input,textarea").val('').removeClass("ax-fast-input");
        $(this).parent().siblings(".ax-fast-list").hide();
    });
    //form group
    $(".ax-input-group").find(".ax-title-select").nextAll("div").addClass("ax-select-next");

    $(".ax-input-group").find(".ax-title-select").nextAll("div").hover(function(){
        $(this).addClass("ax-hover");
    },function(){
        $(this).removeClass("ax-hover");
        if($(this).find("input").is(":focus")==true){
            $(this).addClass("ax-hover");
        }
        $(this).find("input").blur(function () {
            $(this).parent().removeClass("ax-hover");
        })
    });

    $(".ax-input-group").find(".ax-operate,.ax-suffix,.ax-suffix-select").prev().addClass("ax-suffix-prev");

    $(".ax-input-group").find(".ax-operate,.ax-suffix,.ax-suffix-select").prev().hover(function(){
        $(this).addClass("ax-hover");
    },function(){
        $(this).removeClass("ax-hover");
        if($(this).find("input").is(":focus")==true){
            $(this).addClass("ax-hover");
        }
        $(this).find("input").blur(function () {
            $(this).parent().removeClass("ax-hover");
        })
    });
    //panel collape
    $(".ax-panel").each(function(){
        var panel = $(this);
        var closeBtn = panel.find('.ax-panel-close');
        closeBtn.click(function(){
            if(panel.find('.ax-panel-body').is(':visible')==false){
                closeBtn.removeClass('ax-rotate-180');
                panel.find('.ax-panel-body').slideDown(200);
            }else{
                closeBtn.addClass('ax-rotate-180');
                panel.find('.ax-panel-body').slideUp(200);
            }
        });
    });
    //window close
    $(".ax-window").each(function () {
        var win = $(this),
            contain = win.find(".ax-window-contain"),
            content = win.find(".ax-window-content"),
            overlay = win.find(".ax-window-overlay"),
            close = win.find(".ax-window-close");

        overlay.click(function () {
            overlay.css({"opacity":"0"});
            setTimeout(function(){
                win.removeClass("ax-window-show");
                overlay.removeAttr("style");
                contain.removeAttr("style");
                content.getAxScroll().hide();
            }, 300);
            setTimeout(function(){
                content.getAxScroll().hide();
            }, 300);
            contain.css({"animation-duration":".2s","animation-name":"scaleOut"});
        });
        close.click(function () {
            overlay.css({"opacity":"0"});
            setTimeout(function(){
                win.removeClass("ax-window-show");
                overlay.removeAttr("style");
                contain.removeAttr("style");
            }, 300);
            setTimeout(function(){
                content.getAxScroll().hide();
            }, 300);
            contain.css({"animation-duration":".2s","animation-name":"scaleOut"});
        });

    });
    //window drage
    $(".ax-window[data-drag='true'] .ax-window-title").mousedown(function(e)
    {
        $(this).css("cursor","move");
        var moveDIV = $(this).parent();
        $(this).parent().css({"position":"fixed","transition":"none"});
        var offset = moveDIV.offset();
        var x = e.clientX - offset.left;
        var y = e.clientY - offset.top ;
        $(document).bind("mousemove",function(ev)
        {
            var _x = ev.clientX - x;
            var _y = ev.clientY - y - $(window).scrollTop();
            moveDIV.css({left:_x+"px",top:_y+"px"});
        });
    });
    $(document).mouseup(function()
    {
        $(this).unbind("mousemove");
    });
    //drawer close
    $(".ax-drawer").each(function () {
        var win = $(this),
            winId = win.attr("id"),
            contain = win.find(".ax-drawer-contain"),
            content = win.find(".ax-drawer-content"),
            overlay = win.find(".ax-drawer-overlay"),
            close = win.find(".ax-drawer-close"),
            btnChild = win.find(".ax-open-child"),
            child =$("#"+winId+"-child"),
            parentId = winId.replace("-child", ""),
            parent = $("#"+parentId),
            suffix=winId.substring(winId.length,winId.length-6);


        var width=contain.css("width"),
            height=contain.css("height"),
            left=contain.css("left"),
            right=contain.css("right"),
            top=contain.css("top"),
            bottom=contain.css("bottom");
        //click mask to close
        overlay.click(function () {
            var parentContain =$("#"+parentId+"[class*='ax-drawer-show']").find(".ax-drawer-contain");

            overlay.css({"opacity":"0"});
            setTimeout(function(){
                win.removeClass("ax-drawer-show");
                overlay.removeAttr("style");
                contain.removeAttr("style");
                content.getAxScroll().hide();
            }, 300);
            setTimeout(function(){
                content.getAxScroll().hide();
            }, 300);
            if(win.attr("data-position") == "right"){
                contain.css({"right":right});
                if(suffix == "-child" && parent.attr("data-position") == "right"){ parentContain.css({"right":0});}
            }else if(win.attr("data-position") == "left"){
                contain.css({"left":left});
                if(suffix == "-child" && parent.attr("data-position") == "left"){ parentContain.css({"left":0});}
            }else if(win.attr("data-position") == "top"){
                contain.css({"top":top});
                if(suffix == "-child" && parent.attr("data-position") == "top"){ parentContain.css({"top":0});}
            }else if(win.attr("data-position") == "bottom"){
                contain.css({"bottom":bottom});
                if(suffix == "-child" && parent.attr("data-position") == "bottom"){ parentContain.css({"bottom":0});}
            }else{
                contain.css({"right":right});
                if(suffix == "-child" && typeof(parent.attr("data-position")) == "undefined"){ parentContain.css({"right":0});}
            };

        });
        //click btn to close
        close.click(function () {
            var parentContain =$("#"+parentId+"[class*='ax-drawer-show']").find(".ax-drawer-contain");
            overlay.css({"opacity":"0"});
            setTimeout(function(){
                win.removeClass("ax-drawer-show");
                overlay.removeAttr("style");
                contain.removeAttr("style");
            }, 300);
            setTimeout(function(){
                content.getAxScroll().hide();
            }, 300);
            if(win.attr("data-position") == "right"){
                contain.css({"right":right});
                if(suffix == "-child" && parent.attr("data-position") == "right"){ parentContain.css({"right":0});}
            }else if(win.attr("data-position") == "left"){
                contain.css({"left":left});
                if(suffix == "-child" && parent.attr("data-position") == "left"){ parentContain.css({"left":0});}
            }else if(win.attr("data-position") == "top"){
                contain.css({"top":top});
                if(suffix == "-child" && parent.attr("data-position") == "top"){ parentContain.css({"top":0});}
            }else if(win.attr("data-position") == "bottom"){
                contain.css({"bottom":bottom});
                if(suffix == "-child" && parent.attr("data-position") == "bottom"){ parentContain.css({"bottom":0});}
            }else{
                contain.css({"right":right});
                if(suffix == "-child" && typeof(parent.attr("data-position")) == "undefined"){ parentContain.css({"right":0});}
            };
        });
        //drawer open
        win.find(".ax-open-child").click(function () {
            child.addClass("ax-drawer-show");
            if(win.attr("data-position") == "left" && child.attr("data-position") == "left"){
                if(clientIs == 'phone'){contain.css("left","50px");}else{contain.css("left","100px");}
            }else if(win.attr("data-position") == "right" && child.attr("data-position") == "right"){
                if(clientIs == 'phone'){contain.css("right","50px");}else{contain.css("right","100px");}
            }else if(win.attr("data-position") == "top" && child.attr("data-position") == "top"){
                if(clientIs == 'phone'){contain.css("top","50px");}else{contain.css("top","100px");}
            }else if(win.attr("data-position") == "bottom" && child.attr("data-position") == "bottom"){
                if(clientIs == 'phone'){contain.css("bottom","50px");}else{contain.css("bottom","100px");}
            }else if(win.attr("data-position") == child.attr("data-position")){
                if(clientIs == 'phone'){contain.css("right","50px");}else{contain.css("right","100px");}
            }else{

            };


        });

    });


    //checkbox & radio in list
    $(".ax-list-select").each(function () {

        var outer = $(this);

        outer.find(".ax-info-block").each(function () {

            var block = $(this),
                input = block.find("input"),
                mask = block.find(".ax-mask");

            block.append('<div class="ax-mask"></div>');

            if(input.prop("disabled") == true){
                $(this).addClass("ax-disabled");
            }else if(input.prop("checked") == true){
                $(this).addClass("ax-active");
            }else{
                $(this).removeClass("ax-active");
            }
            //raido in list
            var numAll = outer.find("input:not(:disabled)").length,
                numLoad = outer.find("input:checked:not(:disabled)").length,
                numName ="group-select-"+outer.find("input").attr("name");
            if(numLoad == "0"){
                $("input[type=radio][value=1][name="+numName+"]").prop("checked",false);
                $("input[type=radio][value=0][name="+numName+"]").prop("checked",true);
            }else if(numLoad = numAll){
                $("input[type=radio][value=0][name="+numName+"]").prop("checked",false);
                $("input[type=radio][value=1][name="+numName+"]").prop("checked",true);
            }else{
                $("input[type=radio][name="+numName+"]").prop("checked",false);
            }
            //
            if(input.attr("type") == "checkbox" && input.prop("disabled") == false){

                block.on('click', ".ax-mask", function() {
                    if(input.prop("checked") == true){
                        input.prop("checked",false);
                        block.removeClass("ax-active");
                    }else{
                        input.prop("checked",true);
                        block.addClass("ax-active");
                    }
                });
                //watch start
                block.bind("click", function() {
                    var numFact = outer.find("input:checked:not(:disabled)").length;
                    if(numFact == "0"){
                        $("input[type=radio][value=1][name="+numName+"]").prop("checked",false);
                        $("input[type=radio][value=0][name="+numName+"]").prop("checked",true);
                    }else if(numAll != numFact){
                        $("input[name="+numName+"]").prop("checked",false);
                    }else{
                        $("input[type=checkbox][name="+numName+"]").prop("checked",true);
                        $("input[type=radio][value=1][name="+numName+"]").prop("checked",true);
                    };
                });
                //watch end
            }else if(input.attr("type") == "radio" && input.prop("disabled") == false){
                block.on('click', ".ax-mask", function() {
                    outer.find("input").prop("checked",false);
                    outer.find(".ax-info-block").removeClass("ax-active");
                    $(this).parent().find("input").prop("checked",true);
                    $(this).parent().addClass("ax-active");

                });
            }else{
                $(this).parent().removeClass("ax-active");
            }


        });




    });

    //select all
    $("input[name^='group-select-']").each(function () {
        var elem = $(this);
        var groupName = elem.attr("name"),
            groupName = groupName.replace("group-select-",""),
            input = $("input[name="+groupName+"]:not(:disabled)"),
            block = $("input[name="+groupName+"]:not(:disabled)").parent().parent().parent();

        if(elem.attr("type") == "checkbox" && elem.prop("checked") == true){
            input.prop("checked",true);
            block.addClass("ax-active");
        }else if(elem.attr("type") == "radio" && elem.prop("checked") == true && elem.attr("value") == "1"){
            input.prop("checked",true);
            block.addClass("ax-active");
        }else{};

        elem.bind("click", function() {
            if($(this).attr("value") == "1" && $(this).prop("checked") == true){
                input.prop("checked",true);
                block.addClass("ax-active");
            }else{
                input.prop("checked",false);
                block.removeClass("ax-active");
            }
        });


    });
    //regular overflow
    $(".ax-overflow").each(function () {
        var overflow=$(this);
        var max=0;
        overflow.find(".ax-inner > *").each(function(){
            if ($(this).width() > max) {
                max = $(this).width();
            }
        });

        if(max > overflow.width()){
            overflow.addClass("ax-done");
        }
        else{
            overflow.removeClass("ax-done");
        }
        overflow.find(".ax-inner").scroll(function(){
            var minus= max - overflow.width() - $(this).scrollLeft();
            if(minus < 44){
                overflow.removeClass("ax-done");
            }else{
                overflow.addClass("ax-done");
            }
        });
    });
    //scrollnav response
    $(".ax-scrollnav-h").each(function () {
        var nav=$(this);
        var outer=$(this).find(".ax-scrollnav");
        var inner=$(this).find(".ax-scrollnav-list");
        var width = 0;
        inner.find("li").each(function(){
            width += parseInt($(this).outerWidth(true));
        });

        if(outer.width() < width){
            inner.css("width",width);
            outer.css("overflow-x","auto");
        }
    });
    $(".ax-scrollnav-v").each(function () {
        var nav=$(this);
        $(this).find(".ax-close").click(function () {
           if(nav.hasClass("ax-hide")){
               nav.removeClass("ax-hide");
               $.cookie('scrollnav', 'show', { expires: 3650, path: '/' });
            }else{
               nav.addClass("ax-hide");
               $.cookie('scrollnav', 'hide', { expires: 3650, path: '/' });
           }
        });
    });
    if($.cookie("scrollnav") === 'hide') {
        $(".ax-scrollnav-v").addClass("ax-hide");
    } else {
        $(".ax-scrollnav-v").removeClass("ax-hide");
    }
    //go top
    $(".ax-backtop .ax-item").hover(function () {
        $(this).addClass("ax-active");
        $(this).find(".ax-text").fadeIn(200);
    }, function () {
        $(this).removeClass("ax-active");
        $(this).find(".ax-text").fadeOut(200);
    });

    $('.ax-totop').click(function () {
        $('html, body').animate({scrollTop: 0}, 'slow');
    });

    //hide lazyshow
    $(".ax-lazy").each(function () {
        if ($(this).offset().top > $(window).height()) {
            $(this).addClass("ax-hide");
        }

    });

});
/* jquery scroll */
$(window).scroll(function () {
    //go top in scroll
    if ($(document).scrollTop() >= 400) {
        $('.ax-totop a').addClass('ax-show');
    } else {
        $('.ax-totop a').removeClass('ax-show');
    }
    //lazyshow in scroll
    $('.ax-lazy').each(function () {
        if ($(this).offset().top < $(window).scrollTop() + $(window).height()) {
            $(this).removeClass("ax-hide").addClass("ax-show");
        }

    });


});
/* jquery load */
$(window).load(function () {

});