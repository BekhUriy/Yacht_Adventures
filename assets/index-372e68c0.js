(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();(()=>{const n={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-hidden")}})();var s=document.getElementById("myBtn");window.onscroll=function(){d()};function d(){document.body.scrollTop>20||document.documentElement.scrollTop>20?s.style.display="block":s.style.display="none"}document.getElementById("myBtn").onclick=function(){a(0,1e3)};function a(n,o){var t=document.documentElement;if(t.scrollTop===0){var l=t.scrollTop;++t.scrollTop,t=l+1===t.scrollTop--?t:document.body}u(t,t.scrollTop,n,o)}function u(n,o,t,l){l<=0||(typeof o=="object"&&(o=o.offsetTop),typeof t=="object"&&(t=t.offsetTop),c(n,o,t,0,1/l,20,p))}function c(n,o,t,l,e,r,i){if(l<0||l>1||e<=0){n.scrollTop=t;return}n.scrollTop=o-(o-t)*i(l),l+=e*r;debugger;setTimeout(function(){c(n,o,t,l,e,r,i)},r)}function p(n){return n--,n*n*n+1}(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),l=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),n.classList.toggle("is-open");const r=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[r](document.body)};o.addEventListener("click",l),t.addEventListener("click",l),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();new Swiper(".my-swiper",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:10,breakpoints:{768:{slidesPerView:2,spaceBetween:8},1280:{slidesPerView:3,spaceBetween:18}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new Swiper(".swiper",{loop:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},slidesPerView:1,spaceBetween:10,breakpoints:{768:{slidesPerView:2,spaceBetween:20},1280:{slidesPerView:3,spaceBetween:32}}});new Swiper(".my-swiper",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:10,breakpoints:{768:{slidesPerView:2,spaceBetween:8},1280:{slidesPerView:3,spaceBetween:18}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});
