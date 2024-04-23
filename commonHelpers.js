import{S as m,i as f}from"./assets/vendor-c5f855a7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",p="43527026-7407a6885caf79748912d7a12";function g(o){const s=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function h(o){return o.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
            <a class="gallery-link" href="${r}">
                <img 
                    class="gallery-image" 
                    src="${s}"
                    alt="${i}"
                    width="360px"
                    height="152px"
                />
            </a>
    <ul class="img-text-container"> 
    <li class="img-text">Likes<p class="data">${e}</p></li>
    <li class="img-text">Views<p class="data">${t}</p></li>
    <li class="img-text">Comments<p class="data">${a}</p></li>
    <li class="img-text">Downloads<p class="data">${u}</p></li>
    </ul>
   </li>`).join("")}const n=document.querySelector(".search-form"),l=document.querySelector(".gallery"),c=document.querySelector(".gallery-loader"),y=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});n.addEventListener("submit",L);function L(o){o.preventDefault(),c.classList.toggle("loader"),l.innerHTML="";const s=o.target.elements.text.value.trim();s&&g(s).then(r=>{r.total===0?f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(l.innerHTML=h(r.hits),y.refresh())}).catch(r=>console.log(r)).finally(()=>{n.reset(),c.classList.toggle("loader")})}
//# sourceMappingURL=commonHelpers.js.map
