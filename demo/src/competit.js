function Ht(e,t){let n=Object.create(null),r=e.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}function Fe(e){if(S(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],o=Fe(X(r)?Bt(r):r);if(o)for(let s in o)t[s]=o[s]}return t}if(P(e))return e}var Wt=/;(?![^(]*\))/g,qt=/:(.+)/;function Bt(e){let t={};return e.split(Wt).forEach(n=>{if(n){let r=n.split(qt);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function He(e){let t="";if(X(e))t=e;else if(S(e))for(let n=0;n<e.length;n++){let r=He(e[n]);r&&(t+=r+" ")}else if(P(e))for(let n in e)e[n]&&(t+=n+" ");return t.trim()}function F(e,t){if(e===t)return!0;let n=We(e),r=We(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=S(e),r=S(t),n||r)return!(!n||!r)&&function(o,s){if(o.length!==s.length)return!1;let c=!0;for(let i=0;c&&i<o.length;i++)c=F(o[i],s[i]);return c}(e,t);if(n=P(e),r=P(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let o in e){let s=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(s&&!c||!s&&c||!F(e[o],t[o]))return!1}}return String(e)===String(t)}function xe(e,t){return e.findIndex(n=>F(n,t))}var Zt={},Jt=Object.prototype.hasOwnProperty,be=(e,t)=>Jt.call(e,t),S=Array.isArray,ye=e=>qe(e)==="[object Map]",We=e=>e instanceof Date,X=e=>typeof e=="string",we=e=>typeof e=="symbol",P=e=>e!==null&&typeof e=="object",Gt=Object.prototype.toString,qe=e=>Gt.call(e),Ee=e=>X(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Be=e=>{let t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Yt=/-(\w)/g,Xt=Be(e=>e.replace(Yt,(t,n)=>n?n.toUpperCase():"")),Qt=/\B([A-Z])/g,Ze=Be(e=>e.replace(Qt,"-$1").toLowerCase()),Je=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ke=new WeakMap,Q=[],D,se=Symbol(""),Ge=Symbol("");function en(e,t=Zt){(function(r){return r&&r._isEffect===!0})(e)&&(e=e.raw);let n=function(r,o){let s=function(){if(!s.active)return r();if(!Q.includes(s)){Ye(s);try{return Ae.push(H),H=!0,Q.push(s),D=s,r()}finally{Q.pop(),Xe(),D=Q[Q.length-1]}}};return s.id=nn++,s.allowRecurse=!!o.allowRecurse,s._isEffect=!0,s.active=!0,s.raw=r,s.deps=[],s.options=o,s}(e,t);return t.lazy||n(),n}function tn(e){e.active&&(Ye(e),e.options.onStop&&e.options.onStop(),e.active=!1)}var nn=0;function Ye(e){let{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}var H=!0,Ae=[];function Xe(){let e=Ae.pop();H=e===void 0||e}function ce(e,t,n){if(!H||D===void 0)return;let r=ke.get(e);r||ke.set(e,r=new Map);let o=r.get(n);o||r.set(n,o=new Set),o.has(D)||(o.add(D),D.deps.push(o))}function Re(e,t,n,r,o,s){let c=ke.get(e);if(!c)return;let i=new Set,u=a=>{a&&a.forEach(l=>{(l!==D||l.allowRecurse)&&i.add(l)})};if(t==="clear")c.forEach(u);else if(n==="length"&&S(e))c.forEach((a,l)=>{(l==="length"||l>=r)&&u(a)});else switch(n!==void 0&&u(c.get(n)),t){case"add":S(e)?Ee(n)&&u(c.get("length")):(u(c.get(se)),ye(e)&&u(c.get(Ge)));break;case"delete":S(e)||(u(c.get(se)),ye(e)&&u(c.get(Ge)));break;case"set":ye(e)&&u(c.get(se))}i.forEach(a=>{a.options.scheduler?a.options.scheduler(a):a()})}var rn=Ht("__proto__,__v_isRef,__isVue"),Qe=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(we)),on=tt(),sn=tt(!0),et=cn();function cn(){let e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{let n=Array.prototype[t];e[t]=function(...r){let o=W(this);for(let c=0,i=this.length;c<i;c++)ce(o,0,c+"");let s=n.apply(o,r);return s===-1||s===!1?n.apply(o,r.map(W)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{let n=Array.prototype[t];e[t]=function(...r){Ae.push(H),H=!1;let o=n.apply(this,r);return Xe(),o}}),e}function tt(e=!1,t=!1){return function(n,r,o){if(r==="__v_isReactive")return!e;if(r==="__v_isReadonly")return e;if(r==="__v_raw"&&o===(e?t?pn:rt:t?fn:nt).get(n))return n;let s=S(n);if(!e&&s&&be(et,r))return Reflect.get(et,r,o);let c=Reflect.get(n,r,o);return(we(r)?Qe.has(r):rn(r))||(e||ce(n,0,r),t)?c:Se(c)?!s||!Ee(r)?c.value:c:P(c)?e?function(i){return ot(i,!0,un,null,rt)}(c):$(c):c}}function an(e=!1){return function(t,n,r,o){let s=t[n];if(!e&&(r=W(r),s=W(s),!S(t)&&Se(s)&&!Se(r)))return s.value=r,!0;let c=S(t)&&Ee(n)?Number(n)<t.length:be(t,n),i=Reflect.set(t,n,r,o);return t===W(o)&&(c?((u,a)=>u!==a&&(u==u||a==a))(r,s)&&Re(t,"set",n,r):Re(t,"add",n,r)),i}}var ln={get:on,set:an(),deleteProperty:function(e,t){let n=be(e,t);e[t];let r=Reflect.deleteProperty(e,t);return r&&n&&Re(e,"delete",t,void 0),r},has:function(e,t){let n=Reflect.has(e,t);return we(t)&&Qe.has(t)||ce(e,0,t),n},ownKeys:function(e){return ce(e,0,S(e)?"length":se),Reflect.ownKeys(e)}},un={get:sn,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},nt=new WeakMap,fn=new WeakMap,rt=new WeakMap,pn=new WeakMap;function hn(e){return e.__v_skip||!Object.isExtensible(e)?0:function(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((t=>qe(t).slice(8,-1))(e))}function $(e){return e&&e.__v_isReadonly?e:ot(e,!1,ln,null,nt)}function ot(e,t,n,r,o){if(!P(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;let s=o.get(e);if(s)return s;let c=hn(e);if(c===0)return e;let i=new Proxy(e,c===2?r:n);return o.set(e,i),i}function W(e){return e&&W(e.__v_raw)||e}function Se(e){return Boolean(e&&e.__v_isRef===!0)}var Te=!1,ee=[],mn=Promise.resolve(),te=e=>mn.then(e),st=e=>{ee.includes(e)||ee.push(e),Te||(Te=!0,te(dn))},dn=()=>{for(let e=0;e<ee.length;e++)ee[e]();ee.length=0,Te=!1},gn=/^(spellcheck|draggable|form|list|type)$/,_e=({el:e,get:t,effect:n,arg:r,modifiers:o})=>{let s;r==="class"&&(e._class=e.className),n(()=>{let c=t();if(r)(o==null?void 0:o.camel)&&(r=Xt(r)),Oe(e,r,c,s);else{for(let i in c)Oe(e,i,c[i],s&&s[i]);for(let i in s)c&&i in c||Oe(e,i,null)}s=c})},Oe=(e,t,n,r)=>{if(t==="class")e.setAttribute("class",He(e._class?[e._class,n]:n)||"");else if(t==="style"){n=Fe(n);let{style:o}=e;if(n)if(X(n))n!==r&&(o.cssText=n);else{for(let s in n)Ce(o,s,n[s]);if(r&&!X(r))for(let s in r)n[s]==null&&Ce(o,s,"")}else e.removeAttribute("style")}else e instanceof SVGElement||!(t in e)||gn.test(t)?t==="true-value"?e._trueValue=n:t==="false-value"?e._falseValue=n:n!=null?e.setAttribute(t,n):e.removeAttribute(t):(e[t]=n,t==="value"&&(e._value=n))},ct=/\s*!important$/,Ce=(e,t,n)=>{S(n)?n.forEach(r=>Ce(e,t,r)):t.startsWith("--")?e.setProperty(t,n):ct.test(n)?e.setProperty(Ze(t),n.replace(ct,""),"important"):e[t]=n},z=(e,t)=>{let n=e.getAttribute(t);return n!=null&&e.removeAttribute(t),n},N=(e,t,n,r)=>{e.addEventListener(t,n,r)},vn=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,xn=["ctrl","shift","alt","meta"],bn={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>xn.some(n=>e[`${n}Key`]&&!t[n])},it=({el:e,get:t,exp:n,arg:r,modifiers:o})=>{if(!r)return;let s=vn.test(n)?t(`(e => ${n}(e))`):t(`($event => { ${n} })`);if(r!=="mounted"){if(r==="unmounted")return()=>s();if(o){r==="click"&&(o.right&&(r="contextmenu"),o.middle&&(r="mouseup"));let c=s;s=i=>{if(!("key"in i)||Ze(i.key)in o){for(let u in o){let a=bn[u];if(a&&a(i,o))return}return c(i)}}}N(e,r,s,o)}else te(s)},at=({el:e,get:t,effect:n})=>{n(()=>{e.textContent=lt(t())})},lt=e=>e==null?"":P(e)?JSON.stringify(e,null,2):String(e),U=e=>"_value"in e?e._value:e.value,ut=(e,t)=>{let n=t?"_trueValue":"_falseValue";return n in e?e[n]:t},yn=e=>{e.target.composing=!0},wn=e=>{let t=e.target;t.composing&&(t.composing=!1,En(t,"input"))},En=(e,t)=>{let n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)},ft=Object.create(null),ne=(e,t,n)=>pt(e,`return(${t})`,n),pt=(e,t,n)=>{let r=ft[t]||(ft[t]=kn(t));try{return r(e,n)}catch(o){console.error(o)}},kn=e=>{try{return new Function("$data","$el",`with($data){${e}}`)}catch(t){return console.error(`${t.message} in expression: ${e}`),()=>{}}},An={bind:_e,on:it,show:({el:e,get:t,effect:n})=>{let r=e.style.display;n(()=>{e.style.display=t()?r:"none"})},text:at,html:({el:e,get:t,effect:n})=>{n(()=>{e.innerHTML=t()})},model:({el:e,exp:t,get:n,effect:r,modifiers:o})=>{let s=e.type,c=n(`(val) => { ${t} = val }`),{trim:i,number:u=s==="number"}=o||{};if(e.tagName==="SELECT"){let a=e;N(e,"change",()=>{let l=Array.prototype.filter.call(a.options,f=>f.selected).map(f=>u?Je(U(f)):U(f));c(a.multiple?l:l[0])}),r(()=>{let l=n(),f=a.multiple;for(let h=0,v=a.options.length;h<v;h++){let m=a.options[h],d=U(m);if(f)S(l)?m.selected=xe(l,d)>-1:m.selected=l.has(d);else if(F(U(m),l))return void(a.selectedIndex!==h&&(a.selectedIndex=h))}f||a.selectedIndex===-1||(a.selectedIndex=-1)})}else if(s==="checkbox"){let a;N(e,"change",()=>{let l=n(),f=e.checked;if(S(l)){let h=U(e),v=xe(l,h),m=v!==-1;if(f&&!m)c(l.concat(h));else if(!f&&m){let d=[...l];d.splice(v,1),c(d)}}else c(ut(e,f))}),r(()=>{let l=n();S(l)?e.checked=xe(l,U(e))>-1:l!==a&&(e.checked=F(l,ut(e,!0))),a=l})}else if(s==="radio"){let a;N(e,"change",()=>{c(U(e))}),r(()=>{let l=n();l!==a&&(e.checked=F(l,U(e)))})}else{let a=l=>i?l.trim():u?Je(l):l;N(e,"compositionstart",yn),N(e,"compositionend",wn),N(e,(o==null?void 0:o.lazy)?"change":"input",()=>{e.composing||c(a(e.value))}),i&&N(e,"change",()=>{e.value=e.value.trim()}),r(()=>{if(e.composing)return;let l=e.value,f=n();document.activeElement===e&&a(l)===f||l!==f&&(e.value=f)})}},effect:({el:e,ctx:t,exp:n,effect:r})=>{te(()=>r(()=>pt(t.scope,n,e)))}},Rn=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,ht=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Sn=/^\(|\)$/g,Tn=/^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/,_n=(e,t,n)=>{let r=t.match(Rn);if(!r)return;let o=e.nextSibling,s=e.parentElement,c=new Text("");s.insertBefore(c,e),s.removeChild(e);let i=r[2].trim(),u,a,l,f,h=r[1].trim().replace(Sn,"").trim(),v=!1,m="key",d=e.getAttribute(m)||e.getAttribute(m=":key")||e.getAttribute(m="v-bind:key");d&&(e.removeAttribute(m),m==="key"&&(d=JSON.stringify(d))),(f=h.match(ht))&&(h=h.replace(ht,"").trim(),a=f[1].trim(),f[2]&&(l=f[2].trim())),(f=h.match(Tn))&&(u=f[1].split(",").map(A=>A.trim()),v=h[0]==="[");let x,b,y,R=!1,M=(A,p,g,T)=>{let w={};u?u.forEach((Y,I)=>w[Y]=p[v?I:Y]):w[h]=p,T?(a&&(w[a]=T),l&&(w[l]=g)):a&&(w[a]=g);let E=bt(n,w),j=d?ne(E.scope,d):g;return A.set(j,g),E.key=j,E},_=(A,p)=>{let g=new ie(e,A);return g.key=A.key,g.insert(s,p),g};return n.effect(()=>{let A=ne(n.scope,i),p=y;if([b,y]=(g=>{let T=new Map,w=[];if(S(g))for(let E=0;E<g.length;E++)w.push(M(T,g[E],E));else if(typeof g=="number")for(let E=0;E<g;E++)w.push(M(T,E+1,E));else if(P(g)){let E=0;for(let j in g)w.push(M(T,g[j],E++,j))}return[w,T]})(A),R){let g=[];for(let w=0;w<x.length;w++)y.has(x[w].key)||x[w].remove();let T=b.length;for(;T--;){let w=b[T],E=p.get(w.key),j=b[T+1],Y=j&&p.get(j.key),I=Y==null?void 0:x[Y];if(E==null)g[T]=_(w,I?I.el:c);else{let Ke=g[T]=x[E];Object.assign(Ke.ctx.scope,w.scope),E!==T&&x[E+1]!==I&&Ke.insert(s,I?I.el:c)}}x=g}else x=b.map(g=>_(g,c)),R=!0}),o},mt=({el:e,ctx:{scope:{$refs:t}},get:n,effect:r})=>{let o;return r(()=>{let s=n();t[s]=e,o&&s!==o&&delete t[o],o=s}),()=>{o&&delete t[o]}},On=/^(?:v-|:|@)/,Cn=/\.([\w-]+)/g,Mn=/\{\{([^]+?)\}\}/g,Me=!1,dt=(e,t)=>{let n=e.nodeType;if(n===1){let r=e;if(r.hasAttribute("v-pre"))return;let o;if(o=z(r,"v-if"))return((i,u,a)=>{let l=i.parentElement,f=new Comment("v-if");l.insertBefore(f,i);let h=[{exp:u,el:i}],v,m;for(;(v=i.nextElementSibling)&&(m=null,z(v,"v-else")===""||(m=z(v,"v-else-if")));)l.removeChild(v),h.push({exp:m,el:v});let d=i.nextSibling,x;l.removeChild(i);let b=-1,y=()=>{x&&(l.insertBefore(f,x.el),x.remove(),x=void 0)};return a.effect(()=>{for(let R=0;R<h.length;R++){let{exp:M,el:_}=h[R];if(!M||ne(a.scope,M))return void(R!==b&&(y(),x=new ie(_,a),x.insert(l,f),l.removeChild(f),b=R))}b=-1,y()}),d})(r,o,t);if(o=z(r,"v-for"))return _n(r,o,t);if((o=z(r,"v-scope"))||o===""){let i=o?ne(t.scope,o):{};t=bt(t,i),i.$template&&Ln(r,i.$template)}let s=z(r,"v-once")!=null,c;s&&(Me=!0),(o=z(r,"ref"))&&Le(r,mt,`"${o}"`,t),gt(r,t);for(let{name:i,value:u}of[...r.attributes])On.test(i)&&i!=="v-cloak"&&(i==="v-model"?c=u:vt(r,i,u,t));c&&vt(r,"v-model",c,t),s&&(Me=!1)}else if(n===3){let r=e.data;if(r.includes("{{")){let o,s=[],c=0;for(;o=Mn.exec(r);){let i=r.slice(c,o.index);i&&s.push(JSON.stringify(i)),s.push(`$s(${o[1]})`),c=o.index+o[0].length}c<r.length&&s.push(JSON.stringify(r.slice(c))),Le(e,at,s.join("+"),t)}}else n===11&&gt(e,t)},gt=(e,t)=>{let n=e.firstChild;for(;n;)n=dt(n,t)||n.nextSibling},vt=(e,t,n,r)=>{let o,s,c,i=null;for(;i=Cn.exec(t);)(c||(c={}))[i[1]]=!0,t=t.slice(0,i.index);if(t[0]===":")o=_e,s=t.slice(1);else if(t[0]==="@")o=it,s=t.slice(1);else{let u=t.indexOf(":"),a=u>0?t.slice(2,u):t.slice(2);o=An[a]||r.dirs[a],s=u>0?t.slice(u+1):void 0}o&&(o===_e&&s==="ref"&&(o=mt),Le(e,o,n,r,s,c),e.removeAttribute(t))},Le=(e,t,n,r,o,s)=>{let c=t({el:e,get:(i=n)=>ne(r.scope,i,e),effect:r.effect,ctx:r,exp:n,arg:o,modifiers:s});c&&r.cleanups.push(c)},Ln=(e,t)=>{if(t[0]!=="#")e.innerHTML=t;else{let n=document.querySelector(t);e.appendChild(n.content.cloneNode(!0))}},xt=e=>{let t={...e,scope:e?e.scope:$({}),dirs:e?e.dirs:{},effects:[],blocks:[],cleanups:[],effect:n=>{if(Me)return st(n),n;let r=en(n,{scheduler:()=>st(r)});return t.effects.push(r),r}};return t},bt=(e,t={})=>{let n=e.scope,r=Object.create(n);Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)),r.$refs=Object.create(n.$refs);let o=$(new Proxy(r,{set:(s,c,i,u)=>u!==o||s.hasOwnProperty(c)?Reflect.set(s,c,i,u):Reflect.set(n,c,i)}));return{...e,scope:o}},ie=class{get el(){return this.start||this.template}constructor(t,n,r=!1){this.isFragment=t instanceof HTMLTemplateElement,r?this.template=t:this.isFragment?this.template=t.content.cloneNode(!0):this.template=t.cloneNode(!0),r?this.ctx=n:(this.parentCtx=n,n.blocks.push(this),this.ctx=xt(n)),dt(this.template,this.ctx)}insert(t,n=null){if(this.isFragment)if(this.start){let r,o=this.start;for(;o&&(r=o.nextSibling,t.insertBefore(o,n),o!==this.end);)o=r}else this.start=new Text(""),this.end=new Text(""),t.insertBefore(this.end,n),t.insertBefore(this.start,this.end),t.insertBefore(this.template,this.end);else t.insertBefore(this.template,n)}remove(){if(this.parentCtx&&((t,n)=>{let r=t.indexOf(n);r>-1&&t.splice(r,1)})(this.parentCtx.blocks,this),this.start){let t=this.start.parentNode,n,r=this.start;for(;r&&(n=r.nextSibling,t.removeChild(r),r!==this.end);)r=n}else this.template.parentNode.removeChild(this.template);this.teardown()}teardown(){this.ctx.blocks.forEach(t=>{t.teardown()}),this.ctx.effects.forEach(tn),this.ctx.cleanups.forEach(t=>t())}},$e=e=>{let t=xt(),n;return e&&(t.scope=$(e)),t.scope.$s=lt,t.scope.$nextTick=te,t.scope.$refs=Object.create(null),{directive(r,o){return o?(t.dirs[r]=o,this):t.dirs[r]},mount(r){if(typeof r=="string"&&!(r=document.querySelector(r)))return;let o;return o=(r=r||document.documentElement).hasAttribute("v-scope")?[r]:[...r.querySelectorAll("[v-scope]")].filter(s=>!s.matches("[v-scope] [v-scope]")),o.length||(o=[r]),n=o.map(s=>new ie(s,t,!0)),[r,...r.querySelectorAll("[v-cloak]")].forEach(s=>s.removeAttribute("v-cloak")),this},unmount(){n.forEach(r=>r.teardown())}}},yt;(yt=document.currentScript)&&yt.hasAttribute("init")&&$e().mount();var ae="comm",le="rule",ue="decl";var wt="@import";var Et=Math.abs,re=String.fromCharCode;function fe(e){return e.trim()}function je(e,t,n){return e.replace(t,n)}function pe(e,t){return e.charCodeAt(t)|0}function K(e,t,n){return e.slice(t,n)}function L(e){return e.length}function he(e){return e.length}function q(e,t){return t.push(e),e}var me=1,B=1,kt=0,O=0,k=0,Z="";function de(e,t,n,r,o,s,c){return{value:e,root:t,parent:n,type:r,props:o,children:s,line:me,column:B,length:c,return:""}}function At(){return k}function Rt(){return k=O>0?pe(Z,--O):0,B--,k===10&&(B=1,me--),k}function C(){return k=O<kt?pe(Z,O++):0,B++,k===10&&(B=1,me++),k}function V(){return pe(Z,O)}function oe(){return O}function ge(e,t){return K(Z,e,t)}function Pe(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function St(e){return me=B=1,kt=L(Z=e),O=0,[]}function Tt(e){return Z="",e}function Ne(e){return fe(ge(O-1,Ue(e===91?e+2:e===40?e+1:e)))}function _t(e){for(;(k=V())&&k<33;)C();return Pe(e)>2||Pe(k)>3?"":" "}function Ot(e,t){for(;--t&&C()&&!(k<48||k>102||k>57&&k<65||k>70&&k<97););return ge(e,oe()+(t<6&&V()==32&&C()==32))}function Ue(e){for(;C();)switch(k){case e:return O;case 34:case 39:return Ue(e===34||e===39?e:k);case 40:e===41&&Ue(e);break;case 92:C();break}return O}function Ct(e,t){for(;C()&&e+k!==47+10;)if(e+k===42+42&&V()===47)break;return"/*"+ge(t,O-1)+"*"+re(e===47?e:C())}function Mt(e){for(;!Pe(V());)C();return ge(e,O)}function Lt(e){return Tt(ve("",null,null,null,[""],e=St(e),0,[0],e))}function ve(e,t,n,r,o,s,c,i,u){for(var a=0,l=0,f=c,h=0,v=0,m=0,d=1,x=1,b=1,y=0,R="",M=o,_=s,A=r,p=R;x;)switch(m=y,y=C()){case 34:case 39:case 91:case 40:p+=Ne(y);break;case 9:case 10:case 13:case 32:p+=_t(m);break;case 92:p+=Ot(oe()-1,7);continue;case 47:switch(V()){case 42:case 47:q($n(Ct(C(),oe()),t,n),u);break;default:p+="/"}break;case 123*d:i[a++]=L(p)*b;case 125*d:case 59:case 0:switch(y){case 0:case 125:x=0;case 59+l:v>0&&L(p)-f&&q(v>32?jt(p+";",r,n,f-1):jt(je(p," ","")+";",r,n,f-2),u);break;case 59:p+=";";default:if(q(A=$t(p,t,n,a,l,o,i,R,M=[],_=[],f),s),y===123)if(l===0)ve(p,t,A,A,M,s,f,i,_);else switch(h){case 100:case 109:case 115:ve(e,A,A,r&&q($t(e,A,A,0,0,o,i,R,o,M=[],f),_),o,_,f,i,r?M:_);break;default:ve(p,A,A,A,[""],_,f,i,_)}}a=l=v=0,d=b=1,R=p="",f=c;break;case 58:f=1+L(p),v=m;default:if(d<1){if(y==123)--d;else if(y==125&&d++==0&&Rt()==125)continue}switch(p+=re(y),y*d){case 38:b=l>0?1:(p+="\f",-1);break;case 44:i[a++]=(L(p)-1)*b,b=1;break;case 64:V()===45&&(p+=Ne(C())),h=V(),l=L(R=p+=Mt(oe())),y++;break;case 45:m===45&&L(p)==2&&(d=0)}}return s}function $t(e,t,n,r,o,s,c,i,u,a,l){for(var f=o-1,h=o===0?s:[""],v=he(h),m=0,d=0,x=0;m<r;++m)for(var b=0,y=K(e,f+1,f=Et(d=c[m])),R=e;b<v;++b)(R=fe(d>0?h[b]+" "+y:je(y,/&\f/g,h[b])))&&(u[x++]=R);return de(e,t,n,o===0?le:i,u,a,l)}function $n(e,t,n){return de(e,t,n,ae,re(At()),K(e,2,-2),0)}function jt(e,t,n,r){return de(e,t,n,ue,K(e,0,r),K(e,r+1,-1),r)}function Ve(e,t){for(var n="",r=he(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function Pt(e,t,n,r){switch(e.type){case wt:case ue:return e.return=e.return||e.value;case ae:return"";case le:e.value=e.props.join(",")}return L(n=Ve(e.children,r))?e.return=e.value+"{"+n+"}":""}var Ie=new WeakMap,jn=new MutationObserver(e=>{for(let{target:t,attributeName:n}of e)if(t instanceof Element&&n){let r=Ie.get(t);if(r){let o=t.getAttribute(n);(r.get(n)||[]).forEach(c=>c(o))}}});function Pn(e,t,n){let r=Ie.get(e);r||(r=new Map,Ie.set(e,r));let o=r.get(t);o||(o=[],r.set(t,o)),o.push(n),jn.observe(e,{attributes:!0,attributeFilter:[...r.keys()]})}function Nn(e,t){if(t!==null){if(e==="boolean")return t!=="false";if(e==="number"||e==="bigint"){let n=t.trim();return n?Number(n):NaN}if(e==="object")try{return JSON.parse(t)}catch{return null}return t}}function Nt(e,t,n){let r=t.replace(/(?=[A-Z])/g,"-").toLowerCase(),o=Nn.bind(null,typeof n.default),s=u=>n.set(u===void 0?n.default:u),c=u=>s(o(u)),i;e.hasAttribute(r)&&(i=o(e.getAttribute(r))),i===void 0&&(i=Reflect.get(e,t)),s(i),Object.defineProperty(e,t,{get:n.get,set:s}),Pn(e,r,c)}function Ut(e,t,n){let r=e.get(t);return r===void 0&&(r=n(t),e.set(t,r)),r}function Vt(e,...t){try{return new e(...t)}catch(n){if(n.message.endsWith("is not a constructor"))return e(...t);throw n}}function De(e,t,n,r={}){return e.dispatchEvent(new CustomEvent(t,{detail:n,...r}))}var Un=new WeakMap;function Vn(e){let t=Ut(Un,e,()=>{let n=document.createElement("template");n.innerHTML=e.head.innerHTML+e.body.innerHTML;for(let r of n.content.querySelectorAll("script"))r.remove();for(let r of n.content.querySelectorAll("style"))r.innerHTML=Ve(Lt(r.innerHTML),Pt);return n.content});return Array.from(t.childNodes).map(n=>document.importNode(n,!0))}function In(e,t){let n=new URL(e.url).pathname.replace(/^.*\/|\..*$/g,""),r=n.includes("-")?n:`x-${n}`,o=r.replace(/(^|\-)([a-z])/g,(c,i,u)=>u.toUpperCase()),s={[o]:class extends HTMLElement{constructor(){super();let c=$(Vt(t,this));Reflect.set(c,"$emit",De.bind(null,this));for(let a of c.$props||[])Nt(this,a,{default:Reflect.get(c,a),get:()=>Reflect.get(c,a),set:l=>Reflect.set(c,a,l)});let i=this.attachShadow({mode:"open"}),u=$e(c);i.append(...Vn(e.document));for(let a of i.children)a instanceof HTMLStyleElement||u.mount(a)}}}[o];return customElements.define(r,s),s}var ze=new URL(document.baseURI).pathname,J=$({path:"",query:{}});function It(e){return typeof e=="object"&&e!==null}function G(e){let t=(It(e)?e.path:e)||".",n=(It(e)?e.query:null)||{};t.startsWith("/")&&(t=ze.replace(/\/$/,"")+t);let r=new URL(t,location.href);for(let[o,s]of Object.entries(n))r.searchParams.set(o,s);return r.href}function Dt(e){let t=G(J),n=G(e);t!==n&&(history.pushState(null,"",n),dispatchEvent(new PopStateEvent("popstate")))}function Dn(e){history.replaceState(history.state,"",G(e)),dispatchEvent(new PopStateEvent("popstate"))}function zt(){J.path=location.pathname.replace(ze,"/"),J.query=Object.fromEntries(new URLSearchParams(location.search))}function Kt(e){let t=new URL(e,location.href);return(t.origin+t.pathname).replace(/\/$/,"")}function Ft(e,t,n=!1){let r=Kt(G(e)),o=Kt(G(t));return r===o||!n&&o.startsWith(r+"/")}function zn(){history.back()}function Kn(e){let t=e.composedPath().find(r=>r instanceof HTMLAnchorElement&&r.href),n=e.altKey||e.ctrlKey||e.shiftKey;t&&!t.target&&!n&&Ft(ze,t.href)&&(e.preventDefault(),Dt(t.href))}addEventListener("click",Kn);addEventListener("popstate",zt);zt();var Fn={get path(){return J.path},get query(){return J.query},push:Dt,replace:Dn,resolve:G,back:zn,isMatch(e,t=!1){return Ft(e,J,t)}};export{In as defineComponent,De as emit,Fn as locus,te as nextTick,$ as reactive};
