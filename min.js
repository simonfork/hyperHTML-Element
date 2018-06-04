var HyperHTMLElement=function(e){"use strict";const t=document.defaultView,n=1,r=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i,o="http://www.w3.org/2000/svg",s="connected",l="dis"+s,i=/^style|textarea$/i,a="_hyper: "+(Math.random()*new Date|0)+";",c="\x3c!--"+a+"--\x3e";let u=t.Event;try{new u("Event")}catch(e){u=function(e){const t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}const h=t.Map||function(){const e=[],t=[];return{get:n=>t[e.indexOf(n)],set(n,r){t[e.push(n)-1]=r}}};let d=0;const f=t.WeakMap||function(){const e=a+d++;return{get:t=>t[e],set(t,n){Object.defineProperty(t,e,{configurable:!0,value:n})}}},p=t.WeakSet||function(){const e=new f;return{add(t){e.set(t,!0)},has:t=>!0===e.get(t)}},m=Array.isArray||(e=>t=>"[object Array]"===e.call(t))({}.toString),g=a.trim||function(){return this.replace(/^\s+|\s+$/g,"")};function b(){return this}const y=(e,t)=>{const n="_"+e+"$";return{get(){return this[n]||(this[e]=t.call(this,e))},set(e){Object.defineProperty(this,n,{configurable:!0,value:e})}}},v={},w=[],N=v.hasOwnProperty;let E=0;var x=(e,t)=>{e in v||(E=w.push(e)),v[e]=t},C=(e,t)=>{for(let n=0;n<E;n++){let r=w[n];if(N.call(e,r))return v[r](e[r],t)}};const S=(e,t)=>A(e).createElement(t),A=e=>e.ownerDocument||e,O=e=>A(e).createDocumentFragment(),_=(e,t)=>A(e).createTextNode(t),j=" \\f\\n\\r\\t",k="[ "+j+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",L="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",T="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",$=new RegExp(L+k+T+"+)([ "+j+"]*/?>)","g"),M=new RegExp(L+k+T+"*)([ "+j+"]*/>)","g"),P=O(document),D="append"in P,R="content"in S(document,"template");P.appendChild(_(P,"g")),P.appendChild(_(P,""));const B=1===P.cloneNode(!0).childNodes.length,H="importNode"in document,Z=D?(e,t)=>{e.append.apply(e,t)}:(e,t)=>{const n=t.length;for(let r=0;r<n;r++)e.appendChild(t[r])},z=new RegExp("("+k+"=)(['\"]?)"+c+"\\2","gi"),F=(e,t,n,r)=>"<"+t+n.replace(z,I)+r,I=(e,t,n)=>t+(n||'"')+a+(n||'"'),V=(e,t)=>("ownerSVGElement"in e?Q:J)(e,t.replace($,F)),W=B?e=>{const t=e.cloneNode(),n=e.childNodes||[],r=n.length;for(let e=0;e<r;e++)t.appendChild(W(n[e]));return t}:e=>e.cloneNode(!0),G=H?(e,t)=>e.importNode(t,!0):(e,t)=>W(t),q=[].slice,K=e=>U(e);let U=e=>{if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((t.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){const e={};U=(t=>{const n="^"+t.join("^");return e[n]||(e[n]=t)})}else U=(e=>e);return U(e)};const J=R?(e,t)=>{const n=S(e,"template");return n.innerHTML=t,n.content}:(e,t)=>{const n=S(e,"template"),r=O(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){const e=RegExp.$1;n.innerHTML="<table>"+t+"</table>",Z(r,q.call(n.querySelectorAll(e)))}else n.innerHTML=t,Z(r,q.call(n.childNodes));return r},Q=R?(e,t)=>{const n=O(e),r=A(e).createElementNS(o,"svg");return r.innerHTML=t,Z(n,q.call(r.childNodes)),n}:(e,t)=>{const n=O(e),r=S(e,"div");return r.innerHTML='<svg xmlns="'+o+'">'+t+"</svg>",Z(n,q.call(r.firstChild.childNodes)),n};function X(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}X.prototype.insert=function(){const e=O(this.first);return Z(e,this.childNodes),e},X.prototype.remove=function(){const e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{const n=A(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};const Y=(e,t,n)=>{e.unshift(e.indexOf.call(t.childNodes,n))};var ee=(e,t,r)=>({type:e,name:r,node:t,path:(e=>{const t=[];let r;switch(e.nodeType){case n:case 11:r=e;break;case 8:r=e.parentNode,Y(t,r,e);break;default:r=e.ownerElement}for(e=r;r=r.parentNode;e=r)Y(t,r,e);return t})(t)}),te=(e,t)=>{const n=t.length;for(let r=0;r<n;r++)e=e.childNodes[t[r]];return e};const ne=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;const re=(e,t)=>{let n,r;return o=>{switch(typeof o){case"object":if(o){if("object"===n){if(!t&&r!==o)for(const t in r)t in o||(e[t]="")}else t?e.value="":e.cssText="";const s=t?{}:e;for(const e in o){const t=o[e];s[e]="number"!=typeof t||ne.test(e)?t:t+"px"}n="object",t?e.value=le(r=s):r=o;break}default:r!=o&&(n="string",r=o,t?e.value=o||"":e.cssText=o||"")}}},oe=/([^A-Z])([A-Z]+)/g,se=(e,t,n)=>t+"-"+n.toLowerCase(),le=e=>{const t=[];for(const n in e)t.push(n.replace(oe,se),":",e[n],";");return t.join("")},ie=e=>e,ae=(e,t,n)=>{const r=e.ownerDocument.createRange();r.setStartBefore(t),r.setEndAfter(n),r.deleteContents()},ce=(e,t,n,r,o)=>{const s=r||ie,l=null==o?null:s(o,0);let i=0,a=0,c=t.length-1,u=t[0],h=t[c],d=n.length-1,f=n[0],p=n[d];for(;i<=c&&a<=d;)if(null==u)u=t[++i];else if(null==h)h=t[--c];else if(null==f)f=n[++a];else if(null==p)p=n[--d];else if(u==f)u=t[++i],f=n[++a];else if(h==p)h=t[--c],p=n[--d];else if(u==p)e.insertBefore(s(u,1),s(h,-0).nextSibling),u=t[++i],p=n[--d];else if(h==f)e.insertBefore(s(h,1),s(u,0)),h=t[--c],f=n[++a];else{let r=t.indexOf(f);if(r<0)e.insertBefore(s(f,1),s(u,0)),f=n[++a];else{let o=r,l=a;for(;o<=c&&l<=d&&t[o]===n[l];)o++,l++;if(1<o-r)--r===i?e.removeChild(s(u,-1)):ae(e,s(u,-1),s(t[r],-1)),i=o,a=l,u=t[o],f=n[l];else{const o=t[r];t[r]=null,e.insertBefore(s(o,1),s(u,0)),f=n[++a]}}}if(i<=c||a<=d)if(i>c){const t=n[d+1],r=null==t?l:s(t,0);if(a===d)e.insertBefore(s(n[a],1),r);else{const t=e.ownerDocument.createDocumentFragment();for(;a<=d;)t.appendChild(s(n[a++],1));e.insertBefore(t,r)}}else null==t[i]&&i++,i===c?e.removeChild(s(t[i],-1)):ae(e,s(t[i],-1),s(t[c],-1));return n},ue=new p;function he(){}he.prototype=Object.create(null);const de=e=>({html:e}),fe=(e,t)=>"ELEMENT_NODE"in e?e:e.constructor===X?1/t<0?t?e.remove():e.last:t?e.insert():e.first:fe(e.render(),t),pe=(e,t,r)=>{const o=e.childNodes,s=o.length;for(let l=0;l<s;l++){let s=o[l];switch(s.nodeType){case n:me(s,t,r),pe(s,t,r);break;case 8:s.textContent===a&&(r.shift(),t.push(i.test(e.nodeName)?ee("text",e):ee("any",s)));break;case 3:i.test(e.nodeName)&&g.call(s.textContent)===c&&(r.shift(),t.push(ee("text",e)))}}},me=(e,t,n)=>{const r=new he,o=e.attributes,s=q.call(o),l=[],i=s.length;for(let e=0;e<i;e++){const i=s[e];if(i.value===a){const e=i.name;if(!(e in r)){const s=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");r[e]=o[s]||o[s.toLowerCase()],t.push(ee("attr",r[e],s))}l.push(i)}}const c=l.length;for(let t=0;t<c;t++){const n=l[t];/^id$/i.test(n.name)?e.removeAttribute(n.name):e.removeAttributeNode(l[t])}const u=e.nodeName;if(/^script$/i.test(u)){const t=document.createElement(u);for(let e=0;e<o.length;e++)t.setAttributeNode(o[e].cloneNode(!0));t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}},ge=(e,t)=>{t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(de).then(t):Promise.resolve(C(e,t)).then(t)},be=e=>null!=e&&"then"in e,ye=(e,t)=>{let n,r=!1;const o=s=>{switch(typeof s){case"string":case"number":case"boolean":r?n!==s&&(n=s,t[0].textContent=s):(r=!0,n=s,t=ce(e.parentNode,t,[_(e,s)],fe,e));break;case"object":case"undefined":if(null==s){r=!1,t=ce(e.parentNode,t,[],fe,e);break}default:if(r=!1,n=s,m(s))if(0===s.length)t.length&&(t=ce(e.parentNode,t,[],fe,e));else switch(typeof s[0]){case"string":case"number":case"boolean":o({html:s});break;case"object":if(m(s[0])&&(s=s.concat.apply([],s)),be(s[0])){Promise.all(s).then(o);break}default:t=ce(e.parentNode,t,s,fe,e)}else(e=>"ELEMENT_NODE"in e||e instanceof X||e instanceof b)(s)?t=ce(e.parentNode,t,11===s.nodeType?q.call(s.childNodes):[s],fe,e):be(s)?s.then(o):"placeholder"in s?ge(s,o):"text"in s?o(String(s.text)):"any"in s?o(s.any):"html"in s?t=ce(e.parentNode,t,q.call(V(e,[].concat(s.html).join("")).childNodes),fe,e):o("length"in s?q.call(s):C(s,o))}};return o},ve=(e,t,r)=>{const o="ownerSVGElement"in e;let i;if("style"===t)return((e,t,n)=>{if(n){const r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),re(r,n)}return re(e.style,n)})(e,r,o);if(/^on/.test(t)){let r=t.slice(2);return r===s||r===l?(Ee&&(Ee=!1,function(){const e=(e,r)=>{const o=new u(r),s=e.length;for(let r=0;r<s;r++){let s=e[r];s.nodeType===n&&t(s,o)}},t=(e,n)=>{ue.has(e)&&e.dispatchEvent(n);const r=e.children,o=r.length;for(let e=0;e<o;e++)t(r[e],n)};try{new MutationObserver(t=>{const n=t.length;for(let r=0;r<n;r++){let n=t[r];e(n.removedNodes,l),e(n.addedNodes,s)}}).observe(document,{subtree:!0,childList:!0})}catch(t){document.addEventListener("DOMNodeRemoved",t=>{e([t.target],l)},!1),document.addEventListener("DOMNodeInserted",t=>{e([t.target],s)},!1)}}()),ue.add(e)):t.toLowerCase()in e&&(r=r.toLowerCase()),t=>{i!==t&&(i&&e.removeEventListener(r,i,!1),i=t,t&&e.addEventListener(r,t,!1))}}if("data"===t||!o&&t in e)return n=>{i!==n&&(i=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};{let t=!1;const n=r.cloneNode(!0);return r=>{i!==r&&(i=r,n.value!==r&&(null==r?(t&&(t=!1,e.removeAttributeNode(n)),n.value=r):(n.value=r,t||(t=!0,e.setAttributeNode(n)))))}}},we=e=>{let t;const n=r=>{t!==r&&(t=r,"object"==typeof r&&r?be(r)?r.then(n):"placeholder"in r?ge(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?q.call(r).join(""):C(r,n)):e.textContent=null==r?"":r)};return n};var Ne={create:(e,t)=>{const n=[],r=t.length;for(let o=0;o<r;o++){const r=t[o],s=te(e,r.path);switch(r.type){case"any":n.push(ye(s,[]));break;case"attr":n.push(ve(s,r.name,r.node));break;case"text":n.push(we(s)),s.textContent=""}}return n},find:pe};let Ee=!0;const xe=new f,Ce=f===t.WeakMap?new f:new h;function Se(e){const t=xe.get(this);return t&&t.template===K(e)?Ae.apply(t.updates,arguments):function(e){e=K(e);const t=Ce.get(e)||function(e){const t=[],n=e.join(c).replace(Oe,_e),r=V(this,n);Ne.find(r,t,e.slice());const o={fragment:r,paths:t};return Ce.set(e,o),o}.call(this,e),n=G(this.ownerDocument,t.fragment),r=Ne.create(n,t.paths);xe.set(this,{template:e,updates:r}),Ae.apply(r,arguments),this.textContent="",this.appendChild(n)}.apply(this,arguments),this}function Ae(){const e=arguments.length;for(let t=1;t<e;t++)this[t-1](arguments[t])}const Oe=M,_e=(e,t,n)=>r.test(t)?e:"<"+t+n+"></"+t+">",je=new f,ke=(e,t)=>null==e?Le(t||"html"):Te(e,t||"html"),Le=e=>{let t,n,r,s,l;return function(i){i=K(i);let a=s!==i;return a&&(s=i,r=O(document),n="svg"===e?document.createElementNS(o,"svg"):r,l=Se.bind(n)),l.apply(null,arguments),a&&("svg"===e&&Z(r,q.call(n.childNodes)),t=$e(r)),t}},Te=(e,t)=>{const n=t.indexOf(":");let r=je.get(e),o=t;return-1<n&&(o=t.slice(n+1),t=t.slice(0,n)||"html"),r||je.set(e,r={}),r[o]||(r[o]=Le(t))},$e=e=>{const t=e.childNodes,r=t.length,o=[];for(let e=0;e<r;e++){let r=t[e];r.nodeType!==n&&0===g.call(r.textContent).length||o.push(r)}return 1===o.length?o[0]:new X(o)},Me=e=>Se.bind(e),Pe=x;function De(e){return arguments.length<2?null==e?Le("html"):"string"==typeof e?De.wire(null,e):"raw"in e?Le("html")(e):"nodeType"in e?De.bind(e):Te(e,"html"):("raw"in e?Le("html"):De.wire).apply(null,arguments)}
/*! (C) 2017-2018 Andrea Giammarchi - ISC Style License */De.Component=b,De.bind=Me,De.define=Pe,De.diff=ce,De.hyper=De,De.wire=ke,function(e){const t=new f,n=Object.create,r=(e,t)=>{const n={w:null,p:null};return t.set(e,n),n};Object.defineProperties(b,{for:{configurable:!0,value(e,o){return((e,t,o,s)=>{const l=t.get(e)||r(e,t);switch(typeof s){case"object":case"function":const t=l.w||(l.w=new f);return t.get(s)||((e,t,n)=>(e.set(t,n),n))(t,s,new e(o));default:const r=l.p||(l.p=n(null));return r[s]||(r[s]=new e(o))}})(this,t.get(e)||(e=>{const n=new h;return t.set(e,n),n})(e),e,null==o?"default":o)}}}),Object.defineProperties(b.prototype,{handleEvent:{value(e){const t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:y("html",e),svg:y("svg",e),state:y("state",function(){return this.defaultState}),defaultState:{get:()=>({})},setState:{value(e,t){const n=this.state,r="function"==typeof e?e.call(this,n):e;for(const e in r)n[e]=r[e];return!1!==t&&this.render(),this}}})}(Le);const Re=Object,Be=[],He=Re.defineProperty,Ze=Re.getOwnPropertyDescriptor,ze=Re.getOwnPropertyNames,Fe=Re.getOwnPropertySymbols||(()=>[]),Ie=Re.getPrototypeOf||(e=>e.__proto__),Ve="object"==typeof Reflect&&Reflect.ownKeys||(e=>ze(e).concat(Fe(e))),We=Re.setPrototypeOf||((e,t)=>(e.__proto__=t,e));class Ge extends HTMLElement{static define(e,t){const n=this,r=n.prototype;(n.observedAttributes||[]).forEach(e=>{e in r||He(r,e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),{configurable:!0,get(){return this.getAttribute(e)},set(t){this.setAttribute(e,t)}})});const o=r.attributeChangedCallback,s=!!o,l=r.created;if(l){He(r,"_init$",{configurable:!0,writable:!0,value:!0}),He(r,"attributeChangedCallback",{configurable:!0,value(e,t,n){this._init$&&Ke.call(this,l),s&&t!==n&&o.apply(this,arguments)}});const e=r.connectedCallback,t=!!e;He(r,"connectedCallback",{configurable:!0,value(){this._init$&&Ke.call(this,l),t&&e.apply(this,arguments)}})}else s&&He(r,"attributeChangedCallback",{configurable:!0,value(e,t,n){t!==n&&o.apply(this,arguments)}});if(ze(r).forEach(e=>{if(/^handle[A-Z]/.test(e)){const t="_"+e+"$",n=r[e];He(r,e,{configurable:!0,get(){return this[t]||(this[t]=n.bind(this))}})}}),"handleEvent"in r||He(r,"handleEvent",{configurable:!0,value(e){this[(e.currentTarget.dataset||{}).call||"on"+e.type](e)}}),t&&t.extends){const o=document.createElement(t.extends).constructor,s=class extends o{},l=Ie(n);Ve(l).filter(e=>["length","name","arguments","caller","prototype"].indexOf(e)<0).forEach(e=>He(s,e,Ze(l,e))),Ve(l.prototype).forEach(e=>He(s.prototype,e,Ze(l.prototype,e))),We(n,s),We(r,s.prototype),Be.push(n),customElements.define(e,n,t)}else customElements.define(e,n);return n}get html(){return this._html$||(this.html=Me(this.shadowRoot||this._shadowRoot||this))}set html(e){He(this,"_html$",{configurable:!0,value:e})}render(){}get defaultState(){return{}}get state(){return this._state$||(this.state=this.defaultState)}set state(e){He(this,"_state$",{configurable:!0,value:e})}setState(e,t){const n=this.state,r="function"==typeof e?e.call(this,n):e;for(const e in r)n[e]=r[e];return!1!==t&&this.render(),this}}Ge.Component=b,Ge.bind=Me,Ge.intent=Pe,Ge.wire=ke,Ge.hyper=De;try{Symbol.hasInstance&&Be.push(He(Ge,Symbol.hasInstance,{enumerable:!1,configurable:!0,value:e=>Be.some(Ue,Ie(e))}))}catch(e){}const qe={handleEvent:function(e){qe.ready&&(document.removeEventListener(e.type,qe,!1),qe.list.splice(0).forEach(function(e){e()}))},get ready(){return"complete"===document.readyState},list:[]};function Ke(e){qe.ready||function(e){let t=this;do{if(t.nextSibling)return!0}while(t=t.parentNode);return setTimeout(Ke.bind(this,e)),!1}.call(this,e)?this._init$&&e.call(He(this,"_init$",{value:!1})):qe.list.push(Ke.bind(this,e))}function Ue(e){return this===e.prototype}return qe.ready||document.addEventListener("DOMContentLoaded",qe,!1),e.default=Ge,e.default}({});