if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const c=e=>n(e,t),d={module:{uri:t},exports:o,require:c};i[t]=Promise.all(s.map((e=>d[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B2ENQTfp.js",revision:null},{url:"assets/index-DDqFzPXY.css",revision:null},{url:"index.html",revision:"a7ce500ef172f467da2322246a12678e"},{url:"registerSW.js",revision:"ff8db982d4cb8298ca39b5df9754d5a2"},{url:"./icon-192x192.png",revision:"3fe2a0c8b1c89226c75172469d1e7b4e"},{url:"./icon-512x512.png",revision:"a0abff3a9c0c442688ae283e5fd95c81"},{url:"manifest.webmanifest",revision:"eed7b5f2fab6fa0ad6086468dc989e1a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));