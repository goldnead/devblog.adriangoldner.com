var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,r=(t,o,n)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[o]=n;import{d as s,e as i}from"./vendor.455a95e3.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const n=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,s)=>{const i=new URL(e,n);if(self[t].moduleMap[i])return o(self[t].moduleMap[i]);const a=new Blob([`import * as m from '${i}';`,`${t}.moduleMap['${i}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(a),onerror(){s(new Error(`Failed to import: ${e}`)),r(l)},onload(){o(self[t].moduleMap[i]),r(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/assets/");Math.easeInOutQuad=function(e,t,o,n){return(e/=n/2)<1?o/2*e*e+t:-o/2*(--e*(e-2)-1)+t};const a=()=>document.getElementsByClassName("nav").length>0,l=()=>{window.navigation=()=>({isOpen:!1,showNavbar:!0,lastScrollPosition:0,shrinkNavbar:!1,scrollThreshold:300,init(){window.addEventListener("scroll",this.onScroll)},toggleMobileNav(){this.isOpen=!this.isOpen,this.isOpen?(console.log(((e,s)=>{for(var i in s||(s={}))t.call(s,i)&&r(e,i,s[i]);if(o)for(var i of o(s))n.call(s,i)&&r(e,i,s[i]);return e})({},this.$refs)),s(this.$refs.nav,{reserveScrollBarGap:!0})):i(this.$refs.nav)},onScroll(){const e=window.pageYOffset||document.documentElement.scrollTop;if(e>this.scrollThreshold){if(this.shrinkNavbar=!0,Math.abs(e-this.lastScrollPosition)<60)return;this.showNavbar=e<this.lastScrollPosition,this.lastScrollPosition=e}else this.shrinkNavbar=!1}})};var c;c=()=>{a()&&l()},"loading"!=document.readyState?c():document.addEventListener("DOMContentLoaded",c),window.setCookie=function(e,t,o){let n="";if(o){const e=new Date;e.setTime(e.getTime()+24*o*60*60*1e3),n="; expires="+e.toUTCString()}document.cookie=e+"="+(t||"")+n+"; path=/"},window.eraseCookie=function(e){document.cookie=e+"=; Max-Age=-99999999;"},window.getCookie=function(e){const t=`; ${document.cookie}`.split(`; ${e}=`);if(2===t.length)return t.pop().split(";").shift()},window.getToken=async()=>await fetch("/!/DynamicToken/refresh").then((e=>e.json())).then((e=>e.csrf_token)).catch((function(e){this.error="Something went wrong. Please try again later."}));
