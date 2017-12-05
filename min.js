var HyperHTMLElement=function(e){"use strict";function t(){}function n(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}function r(){}function l(){const e=(e,n)=>{const r=new C(n),l=e.length;for(let n=0;n<l;n++){let l=e[n];l.nodeType===b&&t(l,r)}},t=(e,n)=>{if(he.has(e))e.dispatchEvent(n);else{const r=e.children,l=r.length;for(let e=0;e<l;e++)t(r[e],n)}};try{new MutationObserver(t=>{const n=t.length;for(let r=0;r<n;r++){let n=t[r];e(n.removedNodes,N),e(n.addedNodes,y)}}).observe(document,{subtree:!0,childList:!0})}catch(t){document.addEventListener("DOMNodeRemoved",t=>{e([t.target],N)},!1),document.addEventListener("DOMNodeInserted",t=>{e([t.target],y)},!1)}}function s(e){const t=xe.get(this);return t&&t.template===J(e)?i.apply(t.updates,arguments):o.apply(this,arguments),this}function o(e){e=J(e);const t=Ce.get(e)||a.call(this,e),n=q(this.ownerDocument,t.fragment),r=we.create(n,t.paths);xe.set(this,{template:e,updates:r}),i.apply(r,arguments),this.textContent="",this.appendChild(n)}function i(){const e=arguments.length;for(let t=1;t<e;t++)this[t-1](arguments[t])}function a(e){const t=[],n=I(this,e.join(x));we.find(n,t,e.slice());const r={fragment:n,paths:t};return Ce.set(e,r),r}function c(e){return arguments.length<2?null==e?Te("html"):"string"==typeof e?ke(null,e):"raw"in e?Te("html")(e):"nodeType"in e?s.bind(e):je(e,"html"):("raw"in e?Te("html"):ke).apply(null,arguments)}const h=(e,t)=>{const n="_"+e+"$";return{get(){return this[n]||(this[e]=t.call(this,e))},set(e){Object.defineProperty(this,n,{configurable:!0,value:e})}}},u={},d=[],f=u.hasOwnProperty;let p=0;var g={define:(e,t)=>{e in u||(p=d.push(e)),u[e]=t},invoke:(e,t)=>{for(let n=0;n<p;n++){let r=d[n];if(f.call(e,r))return u[r](e[r],t)}}};const m=document.defaultView,b=1,v="http://www.w3.org/2000/svg",y="connected",N="dis"+y,w=/^style|textarea$/i,E="_hyper: "+(Math.random()*new Date|0)+";",x="\x3c!--"+E+"--\x3e";let C=m.Event;try{new C("Event")}catch(e){C=function(e){const t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}const S=m.Map||function(){const e=[],t=[];return{get:n=>t[e.indexOf(n)],set(n,r){t[e.push(n)-1]=r}}},k=m.WeakMap||function(){return{get:e=>e[E],set(e,t){Object.defineProperty(e,E,{configurable:!0,value:t})}}},T=m.WeakSet||function(){const e=new k;return{add(t){e.set(t,!0)},has:t=>!0===e.get(t)}},j=Array.isArray||(e=>t=>"[object Array]"===e.call(t))({}.toString),A=E.trim||function(){return this.replace(/^\s+|\s+$/g,"")},L=(e,t)=>$(e).createElement(t),$=e=>e.ownerDocument||e,O=e=>$(e).createDocumentFragment(),_=(e,t)=>$(e).createTextNode(t),M=O(document),P="append"in M,D="content"in L(document,"template");M.appendChild(_(M,"g")),M.appendChild(_(M,""));const H=1===M.cloneNode(!0).childNodes.length,R="importNode"in document,B=P?(e,t)=>{e.append.apply(e,t)}:(e,t)=>{const n=t.length;for(let r=0;r<n;r++)e.appendChild(t[r])},z="[^\\S]+[^ \\f\\n\\r\\t\\/>\"'=]+",F=new RegExp("(<[a-z]+[a-z0-9:_-]*)((?:"+z+"(?:=(?:'.*?'|\".*?\"|<.+?>|\\S+))?)+)([^\\S]*/?>)","gi"),V=new RegExp("("+z+"=)(['\"]?)"+x+"\\2","gi"),Z=(e,t,n,r)=>t+n.replace(V,G)+r,G=(e,t,n)=>t+(n||'"')+E+(n||'"'),I=(e,t)=>("ownerSVGElement"in e?X:Q)(e,t.replace(F,Z)),W=H?e=>{const t=e.cloneNode(),n=e.childNodes||[],r=n.length;for(let e=0;e<r;e++)t.appendChild(W(n[e]));return t}:e=>e.cloneNode(!0),q=R?(e,t)=>e.importNode(t,!0):(e,t)=>W(t),U=[].slice,J=e=>K(e);let K=e=>{if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((m.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){const e={};K=(t=>{const n="_"+t.join(E);return e[n]||(e[n]=t)})}else K=(e=>e);return K(e)};const Q=D?(e,t)=>{const n=L(e,"template");return n.innerHTML=t,n.content}:(e,t)=>{const n=L(e,"template"),r=O(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){const e=RegExp.$1;n.innerHTML="<table>"+t+"</table>",B(r,U.call(n.querySelectorAll(e)))}else n.innerHTML=t,B(r,U.call(n.childNodes));return r},X=D?(e,t)=>{const n=O(e),r=$(e).createElementNS(v,"svg");return r.innerHTML=t,B(n,U.call(r.childNodes)),n}:(e,t)=>{const n=O(e),r=L(e,"div");return r.innerHTML='<svg xmlns="'+v+'">'+t+"</svg>",B(n,U.call(r.firstChild.childNodes)),n};n.prototype.insert=function(){const e=O(this.first);return B(e,this.childNodes),e},n.prototype.remove=function(){const e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{const n=$(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};const Y=e=>{const t=[];let n;switch(e.nodeType){case b:case 11:n=e;break;case 8:n=e.parentNode,ee(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)ee(t,n,e);return t},ee=(e,t,n)=>{e.unshift(e.indexOf.call(t.childNodes,n))};var te={create:(e,t,n)=>({type:e,name:n,node:t,path:Y(t)}),find:(e,t)=>{const n=t.length;for(let r=0;r<n;r++)e=e.childNodes[t[r]];return e}};const ne=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;var re=(e,t,n)=>{if(n){const r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),le(r,n)}return le(e.style,n)};const le=(e,t)=>{let n,r;return l=>{switch(typeof l){case"object":if(l){if("object"===n){if(!t&&r!==l)for(const t in r)t in l||(e[t]="")}else t?e.value="":e.cssText="";const s=t?{}:e;for(const e in l){const t=l[e];s[e]="number"!=typeof t||ne.test(e)?t:t+"px"}n="object",t?e.value=ie(r=s):r=l;break}default:r!=l&&(n="string",r=l,t?e.value=l||"":e.cssText=l||"")}}},se=/([^A-Z])([A-Z]+)/g,oe=(e,t,n)=>t+"-"+n.toLowerCase(),ie=e=>{const t=[];for(const n in e)t.push(n.replace(se,oe),":",e[n],";");return t.join("")},ae=e=>e,ce=(e,t,n,r,l)=>{const s=r||ae,o=null==l?null:s(l,0);let i=0,a=0,c=t.length-1,h=t[0],u=t[c],d=n.length-1,f=n[0],p=n[d];for(;i<=c&&a<=d;)if(null==h)h=t[++i];else if(null==u)u=t[--c];else if(null==f)f=n[++a];else if(null==p)p=n[--d];else if(h==f)h=t[++i],f=n[++a];else if(u==p)u=t[--c],p=n[--d];else if(h==p)e.insertBefore(s(h,1),s(u,-0).nextSibling),h=t[++i],p=n[--d];else if(u==f)e.insertBefore(s(u,1),s(h,0)),u=t[--c],f=n[++a];else{let r=t.indexOf(f);if(r<0)e.insertBefore(s(f,1),s(h,0)),f=n[++a];else{let l=t[r];t[r]=null,e.insertBefore(s(l,1),s(h,0)),f=n[++a]}}if(i>c){const t=n[d+1],r=null!=t?s(t,0):o;for(;a<=d;){const t=n[a++];null!=t&&e.insertBefore(s(t,1),r)}}else if(a>d)for(;i<=c;){const n=t[i++];null!=n&&e.removeChild(s(n,-1))}return n},he=new T;r.prototype=Object.create(null);const ue=e=>({html:e}),de=(e,t)=>"ELEMENT_NODE"in e?e:e.constructor===n?1/t<0?t?e.remove():e.last:t?e.insert():e.first:de(e.render(),t),fe=e=>"ELEMENT_NODE"in e||e instanceof n||e instanceof t,pe=(e,t,n)=>{const r=e.childNodes,l=r.length;for(let s=0;s<l;s++){let l=r[s];switch(l.nodeType){case b:ge(l,t,n),pe(l,t,n);break;case 8:l.textContent===E&&(n.shift(),t.push(w.test(e.nodeName)?te.create("text",e):te.create("any",l)));break;case 3:w.test(e.nodeName)&&A.call(l.textContent)===x&&(n.shift(),t.push(te.create("text",e)))}}},ge=(e,t,n)=>{const l=new r,s=e.attributes,o=U.call(s),i=[],a=o.length;for(let e=0;e<a;e++){const r=o[e];if(r.value===E){const e=r.name;if(!(e in l)){const r=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");l[e]=s[r]||s[r.toLowerCase()],t.push(te.create("attr",l[e],r))}i.push(r)}}const c=i.length;for(let t=0;t<c;t++)e.removeAttributeNode(i[t])},me=(e,t)=>{t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(ue).then(t):Promise.resolve(g.invoke(e,t)).then(t)},be=e=>null!=e&&"then"in e,ve=(e,t)=>{let n,r=!1;const l=s=>{switch(typeof s){case"string":case"number":case"boolean":r?n!==s&&(n=s,t[0].textContent=s):(r=!0,n=s,t=ce(e.parentNode,t,[_(e,s)],de,e));break;case"object":case"undefined":if(null==s){r=!1,t=ce(e.parentNode,t,[],de,e);break}default:if(r=!1,n=s,j(s))if(0===s.length)t.length&&(t=ce(e.parentNode,t,[],de,e));else switch(typeof s[0]){case"string":case"number":case"boolean":l({html:s});break;case"object":if(j(s[0])&&(s=s.concat.apply([],s)),be(s[0])){Promise.all(s).then(l);break}default:t=ce(e.parentNode,t,s,de,e)}else fe(s)?t=ce(e.parentNode,t,11===s.nodeType?U.call(s.childNodes):[s],de,e):be(s)?s.then(l):"placeholder"in s?me(s,l):"text"in s?l(String(s.text)):"any"in s?l(s.any):"html"in s?t=ce(e.parentNode,t,U.call(I(e,[].concat(s.html).join("")).childNodes),de,e):l("length"in s?U.call(s):g.invoke(s,l))}};return l},ye=(e,t,n)=>{const r="ownerSVGElement"in e;let s;if("style"===t)return re(e,n,r);if(/^on/.test(t)){let n=t.slice(2);return n===y||n===N?(Ee&&(Ee=!1,l()),he.add(e)):t.toLowerCase()in e&&(n=n.toLowerCase()),t=>{s!==t&&(s&&e.removeEventListener(n,s,!1),s=t,t&&e.addEventListener(n,t,!1))}}if("data"===t||!r&&t in e)return n=>{s!==n&&(s=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};{let t=!1;const r=n.cloneNode(!0);return n=>{s!==n&&(s=n,r.value!==n&&(null==n?t&&(t=!1,e.removeAttributeNode(r)):(r.value=n,t||(t=!0,e.setAttributeNode(r)))))}}},Ne=e=>{let t;const n=r=>{t!==r&&(t=r,"object"==typeof r&&r?be(r)?r.then(n):"placeholder"in r?me(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?U.call(r).join(""):g.invoke(r,n)):e.textContent=null==r?"":r)};return n};var we={create:(e,t)=>{const n=[],r=t.length;for(let l=0;l<r;l++){const r=t[l],s=te.find(e,r.path);switch(r.type){case"any":n.push(ve(s,[]));break;case"attr":n.push(ye(s,r.name,r.node));break;case"text":n.push(Ne(s))}}return n},find:pe};let Ee=!0;const xe=new k,Ce=new S,Se=new k,ke=(e,t)=>null==e?Te(t||"html"):je(e,t||"html"),Te=e=>{let t,n,r,l,o;return function(i){i=J(i);let a=l!==i;return a&&(l=i,r=O(document),n="svg"===e?document.createElementNS(v,"svg"):r,o=s.bind(n)),o.apply(null,arguments),a&&("svg"===e&&B(r,U.call(n.childNodes)),t=Ae(r)),t}},je=(e,t)=>{const n=t.indexOf(":");let r=Se.get(e),l=t;return-1<n&&(l=t.slice(n+1),t=t.slice(0,n)||"html"),r||Se.set(e,r={}),r[l]||(r[l]=Te(t))},Ae=e=>{const t=e.childNodes,r=t.length,l=[];for(let e=0;e<r;e++){let n=t[e];n.nodeType!==b&&0===A.call(n.textContent).length||l.push(n)}return 1===l.length?l[0]:new n(l)},Le=e=>s.bind(e),$e=g.define;c.Component=t,c.bind=Le,c.define=$e,c.diff=ce,c.hyper=c,c.wire=ke,function(e){Object.defineProperties(t.prototype,{handleEvent:{value(e){const t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:h("html",e),svg:h("svg",e),state:h("state",function(){return this.defaultState}),defaultState:{get:()=>({})},setState:{value(e){const t=this.state,n="function"==typeof e?e.call(this,t):e;for(const e in n)t[e]=n[e];this.render()}}})}(Te);/*! (C) 2017 Andrea Giammarchi - ISC Style License */
const Oe={value:!1},_e=Object.defineProperty,Me=(e,t)=>{for(const n in t)e[n]=t[n]};class Pe extends HTMLElement{static define(e){const t=this,n=t.prototype;(t.observedAttributes||[]).forEach(e=>{e in n||_e(n,e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),{configurable:!0,get(){return this.getAttribute(e)},set(t){this.setAttribute(e,t)}})});const r=n.attributeChangedCallback,l=!!r,s=n.created;if(s){_e(n,"_init$",{configurable:!0,writable:!0,value:!0}),_e(n,"attributeChangedCallback",{configurable:!0,value(e,t,n){this._init$&&s.call(_e(this,"_init$",Oe)),l&&t!==n&&r.apply(this,arguments)}});const e=n.connectedCallback,t=!!e;_e(n,"connectedCallback",{configurable:!0,value(){this._init$&&s.call(_e(this,"_init$",Oe)),t&&e.apply(this,arguments)}})}else l&&_e(n,"attributeChangedCallback",{configurable:!0,value(e,t,n){t!==n&&r.apply(this,arguments)}});return Object.getOwnPropertyNames(n).forEach(e=>{if(/^handle[A-Z]/.test(e)){const t="_"+e+"$",r=n[e];_e(n,e,{configurable:!0,get(){return this[t]||(this[t]=r.bind(this))}})}}),"handleEvent"in n||_e(n,"handleEvent",{configurable:!0,value(e){this[(e.currentTarget.dataset||{}).call||"on"+e.type](e)}}),customElements.define(e,t),t}get html(){return this._html$||(this.html=Le(this.shadowRoot||this._shadowRoot||this))}set html(e){_e(this,"_html$",{configurable:!0,value:e})}render(){}get defaultState(){return{}}get state(){return this._state$||(this.state=this.defaultState)}set state(e){_e(this,"_state$",{configurable:!0,value:e})}setState(e){Me(this.state,"function"==typeof e?e.call(this,this.state):e),this.render()}}return Pe.Component=t,Pe.bind=Le,Pe.intent=$e,Pe.wire=ke,Pe.hyper=c,e.default=Pe,e.default}({});