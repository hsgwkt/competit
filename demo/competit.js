function Dt(e,t){let r=Object.create(null),n=e.split(",");for(let o=0;o<n.length;o++)r[n[o]]=!0;return t?o=>!!r[o.toLowerCase()]:o=>!!r[o]}function De(e){if(S(e)){let t={};for(let r=0;r<e.length;r++){let n=e[r],o=De(X(n)?qt(n):n);if(o)for(let s in o)t[s]=o[s]}return t}if(U(e))return e}var Kt=/;(?![^(]*\))/g,Ht=/:(.+)/;function qt(e){let t={};return e.split(Kt).forEach(r=>{if(r){let n=r.split(Ht);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Ke(e){let t="";if(X(e))t=e;else if(S(e))for(let r=0;r<e.length;r++){let n=Ke(e[r]);n&&(t+=n+" ")}else if(U(e))for(let r in e)e[r]&&(t+=r+" ");return t.trim()}function H(e,t){if(e===t)return!0;let r=He(e),n=He(t);if(r||n)return!(!r||!n)&&e.getTime()===t.getTime();if(r=S(e),n=S(t),r||n)return!(!r||!n)&&function(o,s){if(o.length!==s.length)return!1;let i=!0;for(let c=0;i&&c<o.length;c++)i=H(o[c],s[c]);return i}(e,t);if(r=U(e),n=U(t),r||n){if(!r||!n||Object.keys(e).length!==Object.keys(t).length)return!1;for(let o in e){let s=e.hasOwnProperty(o),i=t.hasOwnProperty(o);if(s&&!i||!s&&i||!H(e[o],t[o]))return!1}}return String(e)===String(t)}function xe(e,t){return e.findIndex(r=>H(r,t))}var Ft={},Bt=Object.prototype.hasOwnProperty,be=(e,t)=>Bt.call(e,t),S=Array.isArray,ye=e=>qe(e)==="[object Map]",He=e=>e instanceof Date,X=e=>typeof e=="string",Ee=e=>typeof e=="symbol",U=e=>e!==null&&typeof e=="object",Zt=Object.prototype.toString,qe=e=>Zt.call(e),we=e=>X(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fe=e=>{let t=Object.create(null);return r=>t[r]||(t[r]=e(r))},Jt=/-(\w)/g,Gt=Fe(e=>e.replace(Jt,(t,r)=>r?r.toUpperCase():"")),Yt=/\B([A-Z])/g,Be=Fe(e=>e.replace(Yt,"-$1").toLowerCase()),Ze=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ke=new WeakMap,Q=[],z,se=Symbol(""),Je=Symbol("");function Xt(e,t=Ft){(function(n){return n&&n._isEffect===!0})(e)&&(e=e.raw);let r=function(n,o){let s=function(){if(!s.active)return n();if(!Q.includes(s)){Ge(s);try{return Ae.push(q),q=!0,Q.push(s),z=s,n()}finally{Q.pop(),Ye(),z=Q[Q.length-1]}}};return s.id=er++,s.allowRecurse=!!o.allowRecurse,s._isEffect=!0,s.active=!0,s.raw=n,s.deps=[],s.options=o,s}(e,t);return t.lazy||r(),r}function Qt(e){e.active&&(Ge(e),e.options.onStop&&e.options.onStop(),e.active=!1)}var er=0;function Ge(e){let{deps:t}=e;if(t.length){for(let r=0;r<t.length;r++)t[r].delete(e);t.length=0}}var q=!0,Ae=[];function Ye(){let e=Ae.pop();q=e===void 0||e}function ie(e,t,r){if(!q||z===void 0)return;let n=ke.get(e);n||ke.set(e,n=new Map);let o=n.get(r);o||n.set(r,o=new Set),o.has(z)||(o.add(z),z.deps.push(o))}function _e(e,t,r,n,o,s){let i=ke.get(e);if(!i)return;let c=new Set,u=a=>{a&&a.forEach(l=>{(l!==z||l.allowRecurse)&&c.add(l)})};if(t==="clear")i.forEach(u);else if(r==="length"&&S(e))i.forEach((a,l)=>{(l==="length"||l>=n)&&u(a)});else switch(r!==void 0&&u(i.get(r)),t){case"add":S(e)?we(r)&&u(i.get("length")):(u(i.get(se)),ye(e)&&u(i.get(Je)));break;case"delete":S(e)||(u(i.get(se)),ye(e)&&u(i.get(Je)));break;case"set":ye(e)&&u(i.get(se))}c.forEach(a=>{a.options.scheduler?a.options.scheduler(a):a()})}var tr=Dt("__proto__,__v_isRef,__isVue"),Xe=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(Ee)),rr=et(),nr=et(!0),Qe=or();function or(){let e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{let r=Array.prototype[t];e[t]=function(...n){let o=F(this);for(let i=0,c=this.length;i<c;i++)ie(o,0,i+"");let s=r.apply(o,n);return s===-1||s===!1?r.apply(o,n.map(F)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{let r=Array.prototype[t];e[t]=function(...n){Ae.push(q),q=!1;let o=r.apply(this,n);return Ye(),o}}),e}function et(e=!1,t=!1){return function(r,n,o){if(n==="__v_isReactive")return!e;if(n==="__v_isReadonly")return e;if(n==="__v_raw"&&o===(e?t?lr:rt:t?ar:tt).get(r))return r;let s=S(r);if(!e&&s&&be(Qe,n))return Reflect.get(Qe,n,o);let i=Reflect.get(r,n,o);return(Ee(n)?Xe.has(n):tr(n))||(e||ie(r,0,n),t)?i:Se(i)?!s||!we(n)?i.value:i:U(i)?e?function(c){return nt(c,!0,cr,null,rt)}(i):P(i):i}}function sr(e=!1){return function(t,r,n,o){let s=t[r];if(!e&&(n=F(n),s=F(s),!S(t)&&Se(s)&&!Se(n)))return s.value=n,!0;let i=S(t)&&we(r)?Number(r)<t.length:be(t,r),c=Reflect.set(t,r,n,o);return t===F(o)&&(i?((u,a)=>u!==a&&(u==u||a==a))(n,s)&&_e(t,"set",r,n):_e(t,"add",r,n)),c}}var ir={get:rr,set:sr(),deleteProperty:function(e,t){let r=be(e,t);e[t];let n=Reflect.deleteProperty(e,t);return n&&r&&_e(e,"delete",t,void 0),n},has:function(e,t){let r=Reflect.has(e,t);return Ee(t)&&Xe.has(t)||ie(e,0,t),r},ownKeys:function(e){return ie(e,0,S(e)?"length":se),Reflect.ownKeys(e)}},cr={get:nr,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},tt=new WeakMap,ar=new WeakMap,rt=new WeakMap,lr=new WeakMap;function ur(e){return e.__v_skip||!Object.isExtensible(e)?0:function(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((t=>qe(t).slice(8,-1))(e))}function P(e){return e&&e.__v_isReadonly?e:nt(e,!1,ir,null,tt)}function nt(e,t,r,n,o){if(!U(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;let s=o.get(e);if(s)return s;let i=ur(e);if(i===0)return e;let c=new Proxy(e,i===2?n:r);return o.set(e,c),c}function F(e){return e&&F(e.__v_raw)||e}function Se(e){return Boolean(e&&e.__v_isRef===!0)}var Te=!1,ee=[],fr=Promise.resolve(),te=e=>fr.then(e),ot=e=>{ee.includes(e)||ee.push(e),Te||(Te=!0,te(pr))},pr=()=>{for(let e=0;e<ee.length;e++)ee[e]();ee.length=0,Te=!1},hr=/^(spellcheck|draggable|form|list|type)$/,Oe=({el:e,get:t,effect:r,arg:n,modifiers:o})=>{let s;n==="class"&&(e._class=e.className),r(()=>{let i=t();if(n)(o==null?void 0:o.camel)&&(n=Gt(n)),Re(e,n,i,s);else{for(let c in i)Re(e,c,i[c],s&&s[c]);for(let c in s)i&&c in i||Re(e,c,null)}s=i})},Re=(e,t,r,n)=>{if(t==="class")e.setAttribute("class",Ke(e._class?[e._class,r]:r)||"");else if(t==="style"){r=De(r);let{style:o}=e;if(r)if(X(r))r!==n&&(o.cssText=r);else{for(let s in r)Me(o,s,r[s]);if(n&&!X(n))for(let s in n)r[s]==null&&Me(o,s,"")}else e.removeAttribute("style")}else e instanceof SVGElement||!(t in e)||hr.test(t)?t==="true-value"?e._trueValue=r:t==="false-value"?e._falseValue=r:r!=null?e.setAttribute(t,r):e.removeAttribute(t):(e[t]=r,t==="value"&&(e._value=r))},st=/\s*!important$/,Me=(e,t,r)=>{S(r)?r.forEach(n=>Me(e,t,n)):t.startsWith("--")?e.setProperty(t,r):st.test(r)?e.setProperty(Be(t),r.replace(st,""),"important"):e[t]=r},D=(e,t)=>{let r=e.getAttribute(t);return r!=null&&e.removeAttribute(t),r},j=(e,t,r,n)=>{e.addEventListener(t,r,n)},mr=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,dr=["ctrl","shift","alt","meta"],gr={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>dr.some(r=>e[`${r}Key`]&&!t[r])},it=({el:e,get:t,exp:r,arg:n,modifiers:o})=>{if(!n)return;let s=mr.test(r)?t(`(e => ${r}(e))`):t(`($event => { ${r} })`);if(n!=="mounted"){if(n==="unmounted")return()=>s();if(o){n==="click"&&(o.right&&(n="contextmenu"),o.middle&&(n="mouseup"));let i=s;s=c=>{if(!("key"in c)||Be(c.key)in o){for(let u in o){let a=gr[u];if(a&&a(c,o))return}return i(c)}}}j(e,n,s,o)}else te(s)},ct=({el:e,get:t,effect:r})=>{r(()=>{e.textContent=at(t())})},at=e=>e==null?"":U(e)?JSON.stringify(e,null,2):String(e),V=e=>"_value"in e?e._value:e.value,lt=(e,t)=>{let r=t?"_trueValue":"_falseValue";return r in e?e[r]:t},vr=e=>{e.target.composing=!0},xr=e=>{let t=e.target;t.composing&&(t.composing=!1,br(t,"input"))},br=(e,t)=>{let r=document.createEvent("HTMLEvents");r.initEvent(t,!0,!0),e.dispatchEvent(r)},ut=Object.create(null),re=(e,t,r)=>ft(e,`return(${t})`,r),ft=(e,t,r)=>{let n=ut[t]||(ut[t]=yr(t));try{return n(e,r)}catch(o){console.error(o)}},yr=e=>{try{return new Function("$data","$el",`with($data){${e}}`)}catch(t){return console.error(`${t.message} in expression: ${e}`),()=>{}}},Er={bind:Oe,on:it,show:({el:e,get:t,effect:r})=>{let n=e.style.display;r(()=>{e.style.display=t()?n:"none"})},text:ct,html:({el:e,get:t,effect:r})=>{r(()=>{e.innerHTML=t()})},model:({el:e,exp:t,get:r,effect:n,modifiers:o})=>{let s=e.type,i=r(`(val) => { ${t} = val }`),{trim:c,number:u=s==="number"}=o||{};if(e.tagName==="SELECT"){let a=e;j(e,"change",()=>{let l=Array.prototype.filter.call(a.options,f=>f.selected).map(f=>u?Ze(V(f)):V(f));i(a.multiple?l:l[0])}),n(()=>{let l=r(),f=a.multiple;for(let h=0,v=a.options.length;h<v;h++){let m=a.options[h],d=V(m);if(f)S(l)?m.selected=xe(l,d)>-1:m.selected=l.has(d);else if(H(V(m),l))return void(a.selectedIndex!==h&&(a.selectedIndex=h))}f||a.selectedIndex===-1||(a.selectedIndex=-1)})}else if(s==="checkbox"){let a;j(e,"change",()=>{let l=r(),f=e.checked;if(S(l)){let h=V(e),v=xe(l,h),m=v!==-1;if(f&&!m)i(l.concat(h));else if(!f&&m){let d=[...l];d.splice(v,1),i(d)}}else i(lt(e,f))}),n(()=>{let l=r();S(l)?e.checked=xe(l,V(e))>-1:l!==a&&(e.checked=H(l,lt(e,!0))),a=l})}else if(s==="radio"){let a;j(e,"change",()=>{i(V(e))}),n(()=>{let l=r();l!==a&&(e.checked=H(l,V(e)))})}else{let a=l=>c?l.trim():u?Ze(l):l;j(e,"compositionstart",vr),j(e,"compositionend",xr),j(e,(o==null?void 0:o.lazy)?"change":"input",()=>{e.composing||i(a(e.value))}),c&&j(e,"change",()=>{e.value=e.value.trim()}),n(()=>{if(e.composing)return;let l=e.value,f=r();document.activeElement===e&&a(l)===f||l!==f&&(e.value=f)})}},effect:({el:e,ctx:t,exp:r,effect:n})=>{te(()=>n(()=>ft(t.scope,r,e)))}},wr=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,pt=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,kr=/^\(|\)$/g,Ar=/^[{[]\s*((?:[\w_$]+\s*,?\s*)+)[\]}]$/,_r=(e,t,r)=>{let n=t.match(wr);if(!n)return;let o=e.nextSibling,s=e.parentElement,i=new Text("");s.insertBefore(i,e),s.removeChild(e);let c=n[2].trim(),u,a,l,f,h=n[1].trim().replace(kr,"").trim(),v=!1,m="key",d=e.getAttribute(m)||e.getAttribute(m=":key")||e.getAttribute(m="v-bind:key");d&&(e.removeAttribute(m),m==="key"&&(d=JSON.stringify(d))),(f=h.match(pt))&&(h=h.replace(pt,"").trim(),a=f[1].trim(),f[2]&&(l=f[2].trim())),(f=h.match(Ar))&&(u=f[1].split(",").map(A=>A.trim()),v=h[0]==="[");let x,b,y,_=!1,C=(A,p,g,T)=>{let E={};u?u.forEach((Y,W)=>E[Y]=p[v?W:Y]):E[h]=p,T?(a&&(E[a]=T),l&&(E[l]=g)):a&&(E[a]=g);let w=xt(r,E),N=d?re(w.scope,d):g;return A.set(N,g),w.key=N,w},O=(A,p)=>{let g=new ce(e,A);return g.key=A.key,g.insert(s,p),g};return r.effect(()=>{let A=re(r.scope,c),p=y;if([b,y]=(g=>{let T=new Map,E=[];if(S(g))for(let w=0;w<g.length;w++)E.push(C(T,g[w],w));else if(typeof g=="number")for(let w=0;w<g;w++)E.push(C(T,w+1,w));else if(U(g)){let w=0;for(let N in g)E.push(C(T,g[N],w++,N))}return[E,T]})(A),_){let g=[];for(let E=0;E<x.length;E++)y.has(x[E].key)||x[E].remove();let T=b.length;for(;T--;){let E=b[T],w=p.get(E.key),N=b[T+1],Y=N&&p.get(N.key),W=Y==null?void 0:x[Y];if(w==null)g[T]=O(E,W?W.el:i);else{let ze=g[T]=x[w];Object.assign(ze.ctx.scope,E.scope),w!==T&&x[w+1]!==W&&ze.insert(s,W?W.el:i)}}x=g}else x=b.map(g=>O(g,i)),_=!0}),o},ht=({el:e,ctx:{scope:{$refs:t}},get:r,effect:n})=>{let o;return n(()=>{let s=r();t[s]=e,o&&s!==o&&delete t[o],o=s}),()=>{o&&delete t[o]}},Sr=/^(?:v-|:|@)/,Tr=/\.([\w-]+)/g,Or=/\{\{([^]+?)\}\}/g,Ce=!1,mt=(e,t)=>{let r=e.nodeType;if(r===1){let n=e;if(n.hasAttribute("v-pre"))return;let o;if(o=D(n,"v-if"))return((c,u,a)=>{let l=c.parentElement,f=new Comment("v-if");l.insertBefore(f,c);let h=[{exp:u,el:c}],v,m;for(;(v=c.nextElementSibling)&&(m=null,D(v,"v-else")===""||(m=D(v,"v-else-if")));)l.removeChild(v),h.push({exp:m,el:v});let d=c.nextSibling,x;l.removeChild(c);let b=-1,y=()=>{x&&(l.insertBefore(f,x.el),x.remove(),x=void 0)};return a.effect(()=>{for(let _=0;_<h.length;_++){let{exp:C,el:O}=h[_];if(!C||re(a.scope,C))return void(_!==b&&(y(),x=new ce(O,a),x.insert(l,f),l.removeChild(f),b=_))}b=-1,y()}),d})(n,o,t);if(o=D(n,"v-for"))return _r(n,o,t);if((o=D(n,"v-scope"))||o===""){let c=o?re(t.scope,o):{};t=xt(t,c),c.$template&&Rr(n,c.$template)}let s=D(n,"v-once")!=null,i;s&&(Ce=!0),(o=D(n,"ref"))&&$e(n,ht,`"${o}"`,t),dt(n,t);for(let{name:c,value:u}of[...n.attributes])Sr.test(c)&&c!=="v-cloak"&&(c==="v-model"?i=u:gt(n,c,u,t));i&&gt(n,"v-model",i,t),s&&(Ce=!1)}else if(r===3){let n=e.data;if(n.includes("{{")){let o,s=[],i=0;for(;o=Or.exec(n);){let c=n.slice(i,o.index);c&&s.push(JSON.stringify(c)),s.push(`$s(${o[1]})`),i=o.index+o[0].length}i<n.length&&s.push(JSON.stringify(n.slice(i))),$e(e,ct,s.join("+"),t)}}else r===11&&dt(e,t)},dt=(e,t)=>{let r=e.firstChild;for(;r;)r=mt(r,t)||r.nextSibling},gt=(e,t,r,n)=>{let o,s,i,c=null;for(;c=Tr.exec(t);)(i||(i={}))[c[1]]=!0,t=t.slice(0,c.index);if(t[0]===":")o=Oe,s=t.slice(1);else if(t[0]==="@")o=it,s=t.slice(1);else{let u=t.indexOf(":"),a=u>0?t.slice(2,u):t.slice(2);o=Er[a]||n.dirs[a],s=u>0?t.slice(u+1):void 0}o&&(o===Oe&&s==="ref"&&(o=ht),$e(e,o,r,n,s,i),e.removeAttribute(t))},$e=(e,t,r,n,o,s)=>{let i=t({el:e,get:(c=r)=>re(n.scope,c,e),effect:n.effect,ctx:n,exp:r,arg:o,modifiers:s});i&&n.cleanups.push(i)},Rr=(e,t)=>{if(t[0]!=="#")e.innerHTML=t;else{let r=document.querySelector(t);e.appendChild(r.content.cloneNode(!0))}},vt=e=>{let t={...e,scope:e?e.scope:P({}),dirs:e?e.dirs:{},effects:[],blocks:[],cleanups:[],effect:r=>{if(Ce)return ot(r),r;let n=Xt(r,{scheduler:()=>ot(n)});return t.effects.push(n),n}};return t},xt=(e,t={})=>{let r=e.scope,n=Object.create(r);Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)),n.$refs=Object.create(r.$refs);let o=P(new Proxy(n,{set:(s,i,c,u)=>u!==o||s.hasOwnProperty(i)?Reflect.set(s,i,c,u):Reflect.set(r,i,c)}));return{...e,scope:o}},ce=class{get el(){return this.start||this.template}constructor(t,r,n=!1){this.isFragment=t instanceof HTMLTemplateElement,n?this.template=t:this.isFragment?this.template=t.content.cloneNode(!0):this.template=t.cloneNode(!0),n?this.ctx=r:(this.parentCtx=r,r.blocks.push(this),this.ctx=vt(r)),mt(this.template,this.ctx)}insert(t,r=null){if(this.isFragment)if(this.start){let n,o=this.start;for(;o&&(n=o.nextSibling,t.insertBefore(o,r),o!==this.end);)o=n}else this.start=new Text(""),this.end=new Text(""),t.insertBefore(this.end,r),t.insertBefore(this.start,this.end),t.insertBefore(this.template,this.end);else t.insertBefore(this.template,r)}remove(){if(this.parentCtx&&((t,r)=>{let n=t.indexOf(r);n>-1&&t.splice(n,1)})(this.parentCtx.blocks,this),this.start){let t=this.start.parentNode,r,n=this.start;for(;n&&(r=n.nextSibling,t.removeChild(n),n!==this.end);)n=r}else this.template.parentNode.removeChild(this.template);this.teardown()}teardown(){this.ctx.blocks.forEach(t=>{t.teardown()}),this.ctx.effects.forEach(Qt),this.ctx.cleanups.forEach(t=>t())}},Le=e=>{let t=vt(),r;return e&&(t.scope=P(e)),t.scope.$s=at,t.scope.$nextTick=te,t.scope.$refs=Object.create(null),{directive(n,o){return o?(t.dirs[n]=o,this):t.dirs[n]},mount(n){if(typeof n=="string"&&!(n=document.querySelector(n)))return;let o;return o=(n=n||document.documentElement).hasAttribute("v-scope")?[n]:[...n.querySelectorAll("[v-scope]")].filter(s=>!s.matches("[v-scope] [v-scope]")),o.length||(o=[n]),r=o.map(s=>new ce(s,t,!0)),[n,...n.querySelectorAll("[v-cloak]")].forEach(s=>s.removeAttribute("v-cloak")),this},unmount(){r.forEach(n=>n.teardown())}}},bt;(bt=document.currentScript)&&bt.hasAttribute("init")&&Le().mount();var ae="comm",le="rule",ue="decl";var yt="@import";var Et=Math.abs,ne=String.fromCharCode;function fe(e){return e.trim()}function Pe(e,t,r){return e.replace(t,r)}function pe(e,t){return e.charCodeAt(t)|0}function K(e,t,r){return e.slice(t,r)}function $(e){return e.length}function he(e){return e.length}function B(e,t){return t.push(e),e}var me=1,Z=1,wt=0,R=0,k=0,J="";function de(e,t,r,n,o,s,i){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:me,column:Z,length:i,return:""}}function kt(){return k}function At(){return k=R>0?pe(J,--R):0,Z--,k===10&&(Z=1,me--),k}function M(){return k=R<wt?pe(J,R++):0,Z++,k===10&&(Z=1,me++),k}function I(){return pe(J,R)}function oe(){return R}function ge(e,t){return K(J,e,t)}function Ne(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _t(e){return me=Z=1,wt=$(J=e),R=0,[]}function St(e){return J="",e}function Ue(e){return fe(ge(R-1,je(e===91?e+2:e===40?e+1:e)))}function Tt(e){for(;(k=I())&&k<33;)M();return Ne(e)>2||Ne(k)>3?"":" "}function Ot(e,t){for(;--t&&M()&&!(k<48||k>102||k>57&&k<65||k>70&&k<97););return ge(e,oe()+(t<6&&I()==32&&M()==32))}function je(e){for(;M();)switch(k){case e:return R;case 34:case 39:return je(e===34||e===39?e:k);case 40:e===41&&je(e);break;case 92:M();break}return R}function Rt(e,t){for(;M()&&e+k!==47+10;)if(e+k===42+42&&I()===47)break;return"/*"+ge(t,R-1)+"*"+ne(e===47?e:M())}function Mt(e){for(;!Ne(I());)M();return ge(e,R)}function Ct(e){return St(ve("",null,null,null,[""],e=_t(e),0,[0],e))}function ve(e,t,r,n,o,s,i,c,u){for(var a=0,l=0,f=i,h=0,v=0,m=0,d=1,x=1,b=1,y=0,_="",C=o,O=s,A=n,p=_;x;)switch(m=y,y=M()){case 34:case 39:case 91:case 40:p+=Ue(y);break;case 9:case 10:case 13:case 32:p+=Tt(m);break;case 92:p+=Ot(oe()-1,7);continue;case 47:switch(I()){case 42:case 47:B(Mr(Rt(M(),oe()),t,r),u);break;default:p+="/"}break;case 123*d:c[a++]=$(p)*b;case 125*d:case 59:case 0:switch(y){case 0:case 125:x=0;case 59+l:v>0&&$(p)-f&&B(v>32?Lt(p+";",n,r,f-1):Lt(Pe(p," ","")+";",n,r,f-2),u);break;case 59:p+=";";default:if(B(A=$t(p,t,r,a,l,o,c,_,C=[],O=[],f),s),y===123)if(l===0)ve(p,t,A,A,C,s,f,c,O);else switch(h){case 100:case 109:case 115:ve(e,A,A,n&&B($t(e,A,A,0,0,o,c,_,o,C=[],f),O),o,O,f,c,n?C:O);break;default:ve(p,A,A,A,[""],O,f,c,O)}}a=l=v=0,d=b=1,_=p="",f=i;break;case 58:f=1+$(p),v=m;default:if(d<1){if(y==123)--d;else if(y==125&&d++==0&&At()==125)continue}switch(p+=ne(y),y*d){case 38:b=l>0?1:(p+="\f",-1);break;case 44:c[a++]=($(p)-1)*b,b=1;break;case 64:I()===45&&(p+=Ue(M())),h=I(),l=$(_=p+=Mt(oe())),y++;break;case 45:m===45&&$(p)==2&&(d=0)}}return s}function $t(e,t,r,n,o,s,i,c,u,a,l){for(var f=o-1,h=o===0?s:[""],v=he(h),m=0,d=0,x=0;m<n;++m)for(var b=0,y=K(e,f+1,f=Et(d=i[m])),_=e;b<v;++b)(_=fe(d>0?h[b]+" "+y:Pe(y,/&\f/g,h[b])))&&(u[x++]=_);return de(e,t,r,o===0?le:c,u,a,l)}function Mr(e,t,r){return de(e,t,r,ae,ne(kt()),K(e,2,-2),0)}function Lt(e,t,r,n){return de(e,t,r,ue,K(e,0,n),K(e,n+1,-1),n)}function Ve(e,t){for(var r="",n=he(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function Pt(e,t,r,n){switch(e.type){case yt:case ue:return e.return=e.return||e.value;case ae:return"";case le:e.value=e.props.join(",")}return $(r=Ve(e.children,n))?e.return=e.value+"{"+r+"}":""}var Ie=new WeakMap,Cr=new MutationObserver(e=>{for(let{target:t,attributeName:r}of e)if(t instanceof Element&&r){let n=Ie.get(t);if(n){let o=t.getAttribute(r);(n.get(r)||[]).forEach(i=>i(o))}}});function $r(e,t,r){let n=Ie.get(e);n||(n=new Map,Ie.set(e,n));let o=n.get(t);o||(o=[],n.set(t,o)),o.push(r),Cr.observe(e,{attributes:!0,attributeFilter:[...n.keys()]})}function Lr(e,t){if(t!==null){if(e==="boolean")return t!=="false";if(e==="number"||e==="bigint"){let r=t.trim();return r?Number(r):NaN}if(e==="object")try{return JSON.parse(t)}catch{return null}return t}}function Nt(e,t,r){let n=t.replace(/(?=[A-Z])/g,"-").toLowerCase(),o=Lr.bind(null,typeof r.default),s=u=>r.set(u===void 0?r.default:u),i=u=>s(o(u)),c;e.hasAttribute(n)&&(c=o(e.getAttribute(n))),c===void 0&&(c=Reflect.get(e,t)),s(c),Object.defineProperty(e,t,{get:r.get,set:s}),$r(e,n,i)}function Ut(e,t,r){let n=e.get(t);return n===void 0&&(n=r(t),e.set(t,n)),n}function We(e,t,r,n={}){return e.dispatchEvent(new CustomEvent(t,{detail:r,...n}))}var Pr=new WeakMap;function Nr(e){let t=Ut(Pr,e,()=>{let r=document.createElement("template");r.innerHTML=e.head.innerHTML+e.body.innerHTML;for(let n of r.content.querySelectorAll("script"))n.remove();for(let n of r.content.querySelectorAll("style"))n.innerHTML=Ve(Ct(n.innerHTML),Pt);return r.content});return Array.from(t.childNodes).map(r=>document.importNode(r,!0))}function Ur(e,t){let r=new URL(e.url).pathname.replace(/^.*\/|\..*$/g,""),n=r.includes("-")?r:`x-${r}`,o=n.replace(/(^|\-)([a-z])/g,(i,c,u)=>u.toUpperCase()),s={[o]:class extends HTMLElement{constructor(){super();let i=P((t==null?void 0:t(this))||{});Reflect.set(i,"$emit",We.bind(null,this));for(let a of i.$props||[])Nt(this,a,{default:Reflect.get(i,a),get:()=>Reflect.get(i,a),set:l=>Reflect.set(i,a,l)});let c=this.attachShadow({mode:"open"}),u=Le(i);c.append(...Nr(e.document));for(let a of c.children)a instanceof HTMLStyleElement||u.mount(a)}}}[o];return customElements.define(n,s),s}var jt=new URL(document.baseURI).pathname,L=P({path:"",query:{},params:[]});function G(e){let t=typeof e=="string"?{path:e}:e,r=t.path||L.path,n=t.query||{},o=(t.params||L.params).slice();r=r.replace(/[^/]+/g,i=>{let c=i.startsWith("_")&&o.pop();return c?`_${c}`:i}),r.startsWith("/")&&(r=jt.replace(/\/$/,"")+r);let s=new URL(r,location.href);s.pathname=s.pathname.replace(/[^/]+/g,i=>{let c=i.startsWith("_")&&o.pop();return c?`_${c}`:i});for(let[i,c]of Object.entries(n))s.searchParams.set(i,c);return s.href}function Vt(e){let t=G(L),r=G(e);t!==r&&(history.pushState(null,"",r),dispatchEvent(new PopStateEvent("popstate")))}function jr(e){history.replaceState(history.state,"",G(e)),dispatchEvent(new PopStateEvent("popstate"))}function It(){L.path=location.pathname.replace(jt,"/"),L.query=Object.fromEntries(new URLSearchParams(location.search)),L.params=L.path.split("/").filter(e=>e.startsWith("_")).map(e=>e.substr(1))}function Wt(e){let t=new URL(e,location.href);return(t.origin+t.pathname).replace(/\/$/,"")}function zt(e,t,r=!1){let n=Wt(G(e)),o=Wt(G(t));return n===o||!r&&o.startsWith(n+"/")}function Vr(){history.back()}function Ir(e){let t=e.composedPath().find(n=>n instanceof HTMLAnchorElement&&n.href),r=e.altKey||e.ctrlKey||e.shiftKey;t&&!t.target&&!r&&zt("/",t.href)&&(e.preventDefault(),Vt(t.href))}addEventListener("click",Ir);addEventListener("popstate",It);It();var Wr={get path(){return L.path},get query(){return L.query},get params(){return L.params},push:Vt,replace:jr,resolve:G,back:Vr,isMatch(e,t=!1){return zt(e,L,t)}};export{Ur as defineComponent,We as emit,Wr as locus,te as nextTick,P as reactive};
