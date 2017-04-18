// GSAP Animations

/*
$(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
	    TweenMax.to(menu, 0.4, {
	      yPercent: 0
	    });
	});
});

TweenLite.set(menu, {y:0, yPercent:-100});

$('#hamburger').on('click',
  function() {
  	$(this).toggleClass('open').addClass('close');
    TweenMax.to(menu, 0.8, {      
    	yPercent: 0,       
    	backgroundColor: "#000000"

    }).reverse();
  });
*/


var menuDiv = $("#menu"),
	contentDiv = $("#project-main"),
    btn = $(".menu-toggle"),
    t = TweenLite.to(menuDiv, 0.5, { yPercent:100, ease:Power4.easeInOut, paused:true});
	t1 = TweenLite.to(contentDiv, 0.5, { yPercent:100, display:"none", ease:Power4.easeInOut, paused:true, overflow:"hidden"});
	t.reversed(true);
	t1.reversed(true);

function toggleDirection()
{
  t.reversed() ? t.play() : t.reverse();
  t1.reversed() ? t1.play() : t1.reverse();
}

btn.click(function()
	{
	$(this).toggleClass('open');
	  toggleDirection();
});


// zoom-vanilla.js - 2.0.3 (https://github.com/spinningarrow/zoom-vanilla.js)
+function(){"use strict";function e(e){var t=e.getBoundingClientRect(),n=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,o=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return{top:t.top+n,left:t.left+o}}function t(){function e(){document.body.addEventListener("click",function(e){"zoom"===e.target.getAttribute("data-action")&&"IMG"===e.target.tagName&&t(e)})}function t(e){if(e.stopPropagation(),!(document.body.classList.contains("zoom-overlay-open")||e.target.width>=window.innerWidth-n)){if(e.metaKey||e.ctrlKey)return i();r({forceDispose:!0}),f=o(e.target),f.zoomImage(),s()}}function i(){window.open(event.target.getAttribute("data-original")||event.target.currentSrc||event.target.src,"_blank")}function r(e){e=e||{forceDispose:!1},f&&(f[e.forceDispose?"dispose":"close"](),a(),f=null)}function s(){window.addEventListener("scroll",d),document.addEventListener("click",c),document.addEventListener("keyup",l),document.addEventListener("touchstart",u)}function a(){window.removeEventListener("scroll",d),document.removeEventListener("keyup",l),document.removeEventListener("click",c),document.removeEventListener("touchstart",u)}function d(e){null===v&&(v=window.pageYOffset);var t=v-window.pageYOffset;Math.abs(t)>=40&&r()}function l(e){27==e.keyCode&&r()}function c(e){e.stopPropagation(),e.preventDefault(),r()}function u(e){p=e.touches[0].pageY,e.target.addEventListener("touchmove",m)}function m(e){Math.abs(e.touches[0].pageY-p)<=10||(r(),e.target.removeEventListener("touchmove",m))}var f=null,v=null,p=null;return{listen:e}}var n=80,o=function(){function t(){var e=document.createElement("img");e.onload=function(){d=Number(e.height),l=Number(e.width),o()},e.src=m.currentSrc||m.src}function o(){f=document.createElement("div"),f.className="zoom-img-wrap",f.style.position="absolute",f.style.top=e(m).top+"px",f.style.left=e(m).left+"px",v=m.cloneNode(),v.style.visibility="hidden",m.style.width=m.offsetWidth+"px",m.parentNode.replaceChild(v,m),document.body.appendChild(f),f.appendChild(m),m.classList.add("zoom-img"),m.setAttribute("data-action","zoom-out"),c=document.createElement("div"),c.className="zoom-overlay",document.body.appendChild(c),i(),r()}function i(){m.offsetWidth;var e=l,t=d,o=e/m.width,i=window.innerHeight-n,r=window.innerWidth-n,s=e/t,a=r/i;u=e<r&&t<i?o:s<a?i/t*o:r/e*o}function r(){m.offsetWidth;var t=e(m),n=window.pageYOffset,o=n+window.innerHeight/2,i=window.innerWidth/2,r=t.top+m.height/2,s=t.left+m.width/2,a=Math.round(o-r),d=Math.round(i-s),l="scale("+u+")",c="translate("+d+"px, "+a+"px) translateZ(0)";m.style.webkitTransform=l,m.style.msTransform=l,m.style.transform=l,f.style.webkitTransform=c,f.style.msTransform=c,f.style.transform=c,document.body.classList.add("zoom-overlay-open")}function s(){return document.body.classList.remove("zoom-overlay-open"),document.body.classList.add("zoom-overlay-transitioning"),m.style.webkitTransform="",m.style.msTransform="",m.style.transform="",f.style.webkitTransform="",f.style.msTransform="",f.style.transform="",!1 in document.body.style?a():(m.addEventListener("transitionend",a),void m.addEventListener("webkitTransitionEnd",a))}function a(){m.removeEventListener("transitionend",a),m.removeEventListener("webkitTransitionEnd",a),f&&f.parentNode&&(m.classList.remove("zoom-img"),m.style.width="",m.setAttribute("data-action","zoom"),v.parentNode.replaceChild(m,v),f.parentNode.removeChild(f),c.parentNode.removeChild(c),document.body.classList.remove("zoom-overlay-transitioning"))}var d=null,l=null,c=null,u=null,m=null,f=null,v=null;return function(e){return m=e,{zoomImage:t,close:s,dispose:a}}}();t().listen()}();
//# sourceMappingURL=/dist/zoom-vanilla.min.js.map
