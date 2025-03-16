(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const g of s.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function d(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=d(t);fetch(t.href,s)}})();const p=document.querySelector(".button__new-game"),u=document.querySelector(".dice"),f=document.querySelector(".button__roll-dice"),h=document.querySelector(".button__hold"),n=document.querySelector(".stage__left"),l=document.querySelector(".stage__right");document.querySelector(".stage__left__pig");document.querySelector(".stage__right__pig");document.querySelector(".stage__left--selected");document.querySelector(".stage__right--selected");class m{constructor(c,d,o){this.score=c,this.current=d,this.side=o,this.currentElement=document.querySelector(`.stage__${this.side}__dice`),this.scoreElement=document.querySelector(`.stage__${this.side}__score`),this.pigElement=document.querySelector(`.stage__${this.side}__pig`)}}const a=new m(0,0,"left"),y=new m(0,0,"right");let e=a,_=!0;const i=()=>{e===a?(n.classList.remove("stage__left--selected"),l.classList.add("stage__right--selected"),e=y):(l.classList.remove("stage__right--selected"),n.classList.add("stage__left--selected"),e=a)},L=()=>{if(!_)return;const r=Math.floor(Math.random()*6);u.className="dice",u.classList.add(`dice--dice${r+1}`),r===0?(e.current=0,e.currentElement.textContent=e.current,i()):r!==0&&(e.current+=r+1,console.log(e.current),e.currentElement.textContent=e.current)},E=()=>{if(_){if(e.score+=e.current,e.scoreElement.textContent=e.score,e.current=0,e.currentElement.textContent=e.current,e.score>=100){e===a?(n.classList.remove("stage__left--selected"),n.classList.add("stage__left--win")):(l.classList.remove("stage__right--selected"),l.classList.add("stage__right--win")),_=!1,e.pigElement.className=`stage__${e.side}__pig`,e.pigElement.classList.add(`stage__${e.side}__pig--pig5`);return}else if(e.score>=75){e.pigElement.className=`stage__${e.side}__pig`,e.pigElement.classList.add(`stage__${e.side}__pig--pig4`),i();return}else if(e.score>=50){e.pigElement.className=`stage__${e.side}__pig`,e.pigElement.classList.add(`stage__${e.side}__pig--pig3`),i();return}else if(e.score>=25){e.pigElement.className=`stage__${e.side}__pig`,e.pigElement.classList.add(`stage__${e.side}__pig--pig2`),i();return}else if(e.score>=0){e.pigElement.className=`stage__${e.side}__pig`,e.pigElement.classList.add(`stage__${e.side}__pig--pig1`),i();return}}},$=()=>{for(let r=0;r<2;r++)e.score=0,e.current=0,e.currentElement.textContent=e.current,e.scoreElement.textContent=e.score,e.pigElement.className=`stage__${e.side}__pig`,e.pigElement.classList.add(`stage__${e.side}__pig--pig1`),i();n.classList.remove("stage__left--win"),l.classList.remove("stage__right--win"),_=!0};p.addEventListener("click",$);f.addEventListener("click",L);h.addEventListener("click",E);
