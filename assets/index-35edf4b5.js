(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(t){if(t.ep)return;t.ep=!0;const l=o(t);fetch(t.href,l)}})();(()=>{const n={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtn.addEventListener("click",e),n.closeModalBtn.addEventListener("click",e);function e(){n.modal.classList.toggle("is-hidden")}})();var i=document.getElementById("myBtn");window.onscroll=function(){a()};function a(){document.body.scrollTop>20||document.documentElement.scrollTop>20?i.style.display="block":i.style.display="none"}document.getElementById("myBtn").onclick=function(){p(0,600)};function p(n,e){var o=document.documentElement;if(o.scrollTop===0){var r=o.scrollTop;++o.scrollTop,o=r+1===o.scrollTop--?o:document.body}m(o,o.scrollTop,n,e)}function m(n,e,o,r){r<=0||(typeof e=="object"&&(e=e.offsetTop),typeof o=="object"&&(o=o.offsetTop),d(n,e,o,0,1/r,20,f))}function d(n,e,o,r,t,l,s){if(r<0||r>1||t<=0){n.scrollTop=o;return}n.scrollTop=e-(e-o)*s(r),r+=t*l;debugger;setTimeout(function(){d(n,e,o,r,t,l,s)},l)}function f(n){return n--,n*n*n+1}(()=>{const n=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),r=document.querySelector(".js-close-menu-1"),t=document.querySelector(".js-close-menu-2"),l=document.querySelector(".js-close-menu-3"),s=()=>{const c=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!c),n.classList.toggle("is-open");const u=c?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[u](document.body)};e.addEventListener("click",s),o.addEventListener("click",s),r.addEventListener("click",s),t.addEventListener("click",s),l.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",c=>{c.matches&&(n.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();new Swiper(".my-swiper",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:10,breakpoints:{768:{slidesPerView:2,spaceBetween:8},1280:{slidesPerView:3,spaceBetween:18}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new Swiper(".swiper",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},slidesPerView:1,spaceBetween:10,breakpoints:{768:{slidesPerView:2,spaceBetween:20},1280:{slidesPerView:3,spaceBetween:32}}});new Swiper(".my-swiper",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:10,breakpoints:{768:{slidesPerView:2,spaceBetween:8},1280:{slidesPerView:3,spaceBetween:18}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});
