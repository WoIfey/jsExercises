(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=document.getElementById("redInput"),a=document.getElementById("greenInput"),i=document.getElementById("blueInput"),c=document.getElementById("rgbInput"),d=document.getElementById("saveColor"),I=document.getElementById("red"),y=document.getElementById("green"),b=document.getElementById("blue");function g(){let l=u.value,n=a.value,r=i.value;I.innerText="Red ("+l+")",y.innerText="Green ("+n+")",b.innerText="Blue ("+r+")";let o="rgb("+l+","+n+","+r+")";document.body.style.backgroundColor=o,d.addEventListener("click",function(){localStorage.setItem("savedColor",o),localStorage.setItem("savedRed",l),localStorage.setItem("savedGreen",n),localStorage.setItem("savedBlue",r),d.innerText="✅",setInterval(()=>{d.innerText="Save Color"},1e3)}),c.innerText=o}const m=localStorage.getItem("savedRed"),f=localStorage.getItem("savedGreen"),v=localStorage.getItem("savedBlue"),p=localStorage.getItem("savedColor");window.localStorage.length===0?c.innerText="rgb(255,255,255)":(u.value=m,a.value=f,i.value=v,document.body.style.backgroundColor=p,c.innerText=p,I.innerText="Red ("+m+")",y.innerText="Green ("+f+")",b.innerText="Blue ("+v+")");u.addEventListener("input",g);a.addEventListener("input",g);i.addEventListener("input",g);