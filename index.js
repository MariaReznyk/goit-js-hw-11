import{a as c,S as d,i as m}from"./assets/vendor-BjRz3xa9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const o={form:document.querySelector(".form"),input:document.querySelector("input"),btn:document.querySelector("button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};c.defaults.baseURL="https://pixabay.com/api/";const n={key:"49549319-ba908525a889591d8dce42897",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21};function g(a){return c.get("",{params:a})}const y={overlay:!0,overlayOpacity:.8,captions:!0,captionSelector:"img",captionsData:"alt",captionPosition:"bottom",captionDelay:250},f=new d(".gallery a",y);function h(){o.gallery.innerHTML=""}function b(a){const s=a.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:l,comments:u,downloads:p})=>`<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img class="gallery-image" src="${r}" alt="${e}" />
  </a>
  <ul class="gallery-item-description">
    <li class="gallery-item-param"><span class="gallery-item-param-style">Likes</span><span>${t}</span></li>
    <li class="gallery-item-param"><span class="gallery-item-param-style">Views</span><span>${l}</span></li>
    <li class="gallery-item-param"><span class="gallery-item-param-style">Comments</span><span>${u}</span></li>
    <li class="gallery-item-param"><span class="gallery-item-param-style">Downloads</span><span>${p}</span></li>
</ul>
</li>`).join("");o.gallery.insertAdjacentHTML("beforeend",s),f.refresh()}function L(){o.loader.classList.remove("hidden")}function F(){o.loader.classList.add("hidden")}function w(a){return a.data.hits.length===0&&m.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#f06363",messageColor:"white",position:"topRight",maxWidth:432}),a.data}function S(a){a.preventDefault(),h();const s=a.currentTarget.elements["search-text"].value;if(s.trim()===""){m.show({message:"Please type the search word in input!",messageColor:"#FFFFFF",backgroundColor:"#f06363",messageColor:"white",position:"topRight",maxWidth:432});return}else n.q=s.trim();L(),g(n).then(r=>w(r)).then(r=>b(r.hits)).catch(r=>console.log(r)).finally(()=>{o.form.reset(),F()})}o.form.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
