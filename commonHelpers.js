import{S as g,i as l}from"./assets/vendor-c5f855a7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",f="43527026-7407a6885caf79748912d7a12";function p(a){const s=new URLSearchParams({key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function h(a){return a.map(({webformatURL:s,largeImageURL:r,tags:o,likes:e,views:t,comments:i,downloads:u})=>`<li class="gallery-item">
            <a class="gallery-link" href="${r}">
                <img 
                    class="gallery-image" 
                    src="${s}"
                    alt="${o}"
                    width="360px"
                    height="152px"/>
            </a>
    <ul class="img-text-container"> 
    <li class="img-text">Likes<p class="img-data">${e}</p></li>
    <li class="img-text">Views<p class="img-data">${t}</p></li>
    <li class="img-text">Comments<p class="img-data">${i}</p></li>
    <li class="img-text">Downloads<p class="img-data">${u}</p></li>
    </ul>
   </li>`).join("")}const m=document.querySelector(".search-form"),c=document.querySelector(".gallery"),n=document.querySelector(".gallery-loader"),y=new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});m.addEventListener("submit",L);function L(a){a.preventDefault(),n.classList.toggle("loader"),c.innerHTML="";const s=a.target.elements.text.value.trim();if(!s){n.classList.remove("loader"),l.error({message:"Please enter a search query!"});return}p(s).then(r=>{r.total===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!"}):(c.innerHTML=h(r.hits),y.refresh())}).catch(r=>{l.error({message:"Oops! There was a problem loading the images. Please try again later!"}),alert(r.message)}).finally(()=>{m.reset(),n.classList.toggle("loader")})}
//# sourceMappingURL=commonHelpers.js.map
