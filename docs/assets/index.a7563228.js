const Ie=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}};Ie();function k(){}const Ge=t=>t;function Je(t,e){for(const n in e)t[n]=e[n];return t}function ze(t){return t()}function he(){return Object.create(null)}function T(t){t.forEach(ze)}function fe(t){return typeof t=="function"}function q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ke(t){return Object.keys(t).length===0}function He(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Qe(t,e,n){t.$$.on_destroy.push(He(e,n))}function Ue(t,e,n,r){if(t){const l=Ae(t,e,n,r);return t[0](l)}}function Ae(t,e,n,r){return t[1]&&r?Je(n.ctx.slice(),t[1](r(e))):n.ctx}function We(t,e,n,r){if(t[2]&&r){const l=t[2](r(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const i=[],s=Math.max(e.dirty.length,l.length);for(let c=0;c<s;c+=1)i[c]=e.dirty[c]|l[c];return i}return e.dirty|l}return e.dirty}function Xe(t,e,n,r,l,i){if(l){const s=Ae(e,n,r,i);t.p(s,l)}}function Ye(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const Oe=typeof window!="undefined";let Ze=Oe?()=>window.performance.now():()=>Date.now(),ae=Oe?t=>requestAnimationFrame(t):k;const R=new Set;function qe(t){R.forEach(e=>{e.c(t)||(R.delete(e),e.f())}),R.size!==0&&ae(qe)}function et(t){let e;return R.size===0&&ae(qe),{promise:new Promise(n=>{R.add(e={c:t,f:n})}),abort(){R.delete(e)}}}function C(t,e){t.appendChild(e)}function xe(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function tt(t){const e=$("style");return nt(xe(t),e),e.sheet}function nt(t,e){C(t.head||t,e)}function v(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function Le(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function ie(t){return document.createTextNode(t)}function J(){return ie(" ")}function W(){return ie("")}function je(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function g(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function rt(t){return Array.from(t.childNodes)}function lt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Be(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const l=document.createEvent("CustomEvent");return l.initCustomEvent(t,n,r,e),l}const re=new Map;let le=0;function it(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function st(t,e){const n={stylesheet:tt(e),rules:{}};return re.set(t,n),n}function me(t,e,n,r,l,i,s,c=0){const o=16.666/r;let u=`{
`;for(let w=0;w<=1;w+=o){const S=e+(n-e)*i(w);u+=w*100+`%{${s(S,1-S)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,a=`__svelte_${it(f)}_${c}`,d=xe(t),{stylesheet:m,rules:h}=re.get(d)||st(d,t);h[a]||(h[a]=!0,m.insertRule(`@keyframes ${a} ${f}`,m.cssRules.length));const E=t.style.animation||"";return t.style.animation=`${E?`${E}, `:""}${a} ${r}ms linear ${l}ms 1 both`,le+=1,a}function ct(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?i=>i.indexOf(e)<0:i=>i.indexOf("__svelte")===-1),l=n.length-r.length;l&&(t.style.animation=r.join(", "),le-=l,le||ot())}function ot(){ae(()=>{le||(re.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),re.clear())})}let H;function K(t){H=t}function de(){if(!H)throw new Error("Function called outside component initialization");return H}function ut(t){de().$$.on_mount.push(t)}function Pe(t){de().$$.on_destroy.push(t)}function ft(){const t=de();return(e,n,{cancelable:r=!1}={})=>{const l=t.$$.callbacks[e];if(l){const i=Be(e,n,{cancelable:r});return l.slice().forEach(s=>{s.call(t,i)}),!i.defaultPrevented}return!0}}function Re(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const G=[],pe=[],ee=[],ge=[],at=Promise.resolve();let ue=!1;function dt(){ue||(ue=!0,at.then(Te))}function Q(t){ee.push(t)}const ce=new Set;let Z=0;function Te(){const t=H;do{for(;Z<G.length;){const e=G[Z];Z++,K(e),_t(e.$$)}for(K(null),G.length=0,Z=0;pe.length;)pe.pop()();for(let e=0;e<ee.length;e+=1){const n=ee[e];ce.has(n)||(ce.add(n),n())}ee.length=0}while(G.length);for(;ge.length;)ge.pop()();ue=!1,ce.clear(),K(t)}function _t(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}let I;function ht(){return I||(I=Promise.resolve(),I.then(()=>{I=null})),I}function oe(t,e,n){t.dispatchEvent(Be(`${e?"intro":"outro"}${n}`))}const te=new Set;let N;function V(){N={r:0,c:[],p:N}}function F(){N.r||T(N.c),N=N.p}function _(t,e){t&&t.i&&(te.delete(t),t.i(e))}function p(t,e,n,r){if(t&&t.o){if(te.has(t))return;te.add(t),N.c.push(()=>{te.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const mt={duration:0};function ye(t,e,n,r){let l=e(t,n),i=r?0:1,s=null,c=null,o=null;function u(){o&&ct(t,o)}function f(d,m){const h=d.b-i;return m*=Math.abs(h),{a:i,b:d.b,d:h,duration:m,start:d.start,end:d.start+m,group:d.group}}function a(d){const{delay:m=0,duration:h=300,easing:E=Ge,tick:w=k,css:S}=l||mt,x={start:Ze()+m,b:d};d||(x.group=N,N.r+=1),s||c?c=x:(S&&(u(),o=me(t,i,d,h,m,E,S)),d&&w(0,1),s=f(x,h),Q(()=>oe(t,d,"start")),et(L=>{if(c&&L>c.start&&(s=f(c,h),c=null,oe(t,s.b,"start"),S&&(u(),o=me(t,i,s.b,s.duration,0,E,l.css))),s){if(L>=s.end)w(i=s.b,1-i),oe(t,s.b,"end"),c||(s.b?u():--s.group.r||T(s.group.c)),s=null;else if(L>=s.start){const X=L-s.start;i=s.a+s.d*E(X/s.duration),w(i,1-i)}}return!!(s||c)}))}return{run(d){fe(l)?ht().then(()=>{l=l(),a(d)}):a(d)},end(){u(),s=c=null}}}function Ve(t,e){p(t,1,1,()=>{e.delete(t.key)})}function Fe(t,e,n,r,l,i,s,c,o,u,f,a){let d=t.length,m=i.length,h=d;const E={};for(;h--;)E[t[h].key]=h;const w=[],S=new Map,x=new Map;for(h=m;h--;){const y=a(l,i,h),M=n(y);let D=s.get(M);D?r&&D.p(y,e):(D=u(M,y),D.c()),S.set(M,w[h]=D),M in E&&x.set(M,Math.abs(h-E[M]))}const L=new Set,X=new Set;function se(y){_(y,1),y.m(c,f),s.set(y.key,y),f=y.first,m--}for(;d&&m;){const y=w[m-1],M=t[d-1],D=y.key,Y=M.key;y===M?(f=y.first,d--,m--):S.has(Y)?!s.has(D)||L.has(D)?se(y):X.has(Y)?d--:x.get(D)>x.get(Y)?(X.add(D),se(y)):(L.add(Y),d--):(o(M,s),d--)}for(;d--;){const y=t[d];S.has(y.key)||o(y,s)}for(;m;)se(w[m-1]);return w}function O(t){t&&t.c()}function z(t,e,n,r){const{fragment:l,on_mount:i,on_destroy:s,after_update:c}=t.$$;l&&l.m(e,n),r||Q(()=>{const o=i.map(ze).filter(fe);s?s.push(...o):T(o),t.$$.on_mount=[]}),c.forEach(Q)}function A(t,e){const n=t.$$;n.fragment!==null&&(T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){t.$$.dirty[0]===-1&&(G.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function j(t,e,n,r,l,i,s,c=[-1]){const o=H;K(t);const u=t.$$={fragment:null,ctx:null,props:i,update:k,not_equal:l,bound:he(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:he(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(a,d,...m)=>{const h=m.length?m[0]:d;return u.ctx&&l(u.ctx[a],u.ctx[a]=h)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](h),f&&pt(t,a)),d}):[],u.update(),f=!0,T(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const a=rt(e.target);u.fragment&&u.fragment.l(a),a.forEach(b)}else u.fragment&&u.fragment.c();e.intro&&_(t.$$.fragment),z(t,e.target,e.anchor,e.customElement),Te()}K(o)}class B{$destroy(){A(this,1),this.$destroy=k}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!Ke(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function gt(t){const e=t-1;return e*e*e+1}function be(t,{delay:e=0,duration:n=400,easing:r=gt,x:l=0,y:i=0,opacity:s=0}={}){const c=getComputedStyle(t),o=+c.opacity,u=c.transform==="none"?"":c.transform,f=o*(1-s);return{delay:e,duration:n,easing:r,css:(a,d)=>`
			transform: ${u} translate(${(1-a)*l}px, ${(1-a)*i}px);
			opacity: ${o-f*d}`}}function yt(t){let e,n,r,l;const i=t[3].default,s=Ue(i,t,t[2],null);return{c(){e=$("button"),s&&s.c(),g(e,"type",t[0]),e.disabled=t[1],g(e,"class","svelte-jkkl5v")},m(c,o){v(c,e,o),s&&s.m(e,null),n=!0,r||(l=je(e,"click",t[4]),r=!0)},p(c,[o]){s&&s.p&&(!n||o&4)&&Xe(s,i,c,c[2],n?We(i,c[2],o,null):Ye(c[2]),null),(!n||o&1)&&g(e,"type",c[0]),(!n||o&2)&&(e.disabled=c[1])},i(c){n||(_(s,c),n=!0)},o(c){p(s,c),n=!1},d(c){c&&b(e),s&&s.d(c),r=!1,l()}}}function bt(t,e,n){let{$$slots:r={},$$scope:l}=e,{type:i="button"}=e,{disabled:s=!1}=e;function c(o){Re.call(this,t,o)}return t.$$set=o=>{"type"in o&&n(0,i=o.type),"disabled"in o&&n(1,s=o.disabled),"$$scope"in o&&n(2,l=o.$$scope)},[i,s,l,r,c]}class $t extends B{constructor(e){super(),j(this,e,bt,yt,q,{type:0,disabled:1})}}function vt(t){let e;return{c(){e=$("div"),e.textContent="Not valid type or value",g(e,"class","error svelte-114z4qa")},m(n,r){v(n,e,r)},p:k,d(n){n&&b(e)}}}function kt(t){let e,n,r,l,i,s,c;return{c(){e=$("div"),n=$("div"),r=$("span"),l=ie(t[2]),g(r,"class","svelte-114z4qa"),g(n,"class",i="card-inner "+t[1]+" svelte-114z4qa"),g(e,"id",t[0]),g(e,"class","card svelte-114z4qa")},m(o,u){v(o,e,u),C(e,n),C(n,r),C(r,l),s||(c=je(e,"click",t[5]),s=!0)},p(o,u){u&4&&lt(l,o[2]),u&2&&i!==(i="card-inner "+o[1]+" svelte-114z4qa")&&g(n,"class",i),u&1&&g(e,"id",o[0])},d(o){o&&b(e),s=!1,c()}}}function wt(t){let e;function n(i,s){return i[3]?kt:vt}let l=n(t)(t);return{c(){l.c(),e=W()},m(i,s){l.m(i,s),v(i,e,s)},p(i,[s]){l.p(i,s)},i:k,o:k,d(i){l.d(i),i&&b(e)}}}function Ct(t,e,n){let r,{id:l=""}=e,{type:i="main"}=e,{value:s}=e,o=["main","plus","minus"].includes(i)&&(i==="main"&&s>0&&s<=10||s>0&&s<=6);function u(f){Re.call(this,t,f)}return t.$$set=f=>{"id"in f&&n(0,l=f.id),"type"in f&&n(1,i=f.type),"value"in f&&n(4,s=f.value)},t.$$.update=()=>{t.$$.dirty&18&&n(2,r=i==="plus"?"+"+s:i==="minus"?"-"+s:s)},[l,i,r,o,s,u]}class _e extends B{constructor(e){super(),j(this,e,Ct,wt,q,{id:0,type:1,value:4})}}const P=[];function Et(t,e=k){let n;const r=new Set;function l(c){if(q(t,c)&&(t=c,n)){const o=!P.length;for(const u of r)u[1](),P.push(u,t);if(o){for(let u=0;u<P.length;u+=2)P[u][0](P[u+1]);P.length=0}}}function i(c){l(c(t))}function s(c,o=k){const u=[c,o];return r.add(u),r.size===1&&(n=e(l)||k),c(t),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:l,update:i,subscribe:s}}const $e=localStorage.deck,St=$e?JSON.parse($e):[],ne=Et(St);ne.subscribe(t=>localStorage.deck=JSON.stringify(t));var U={subscribe:ne.subscribe,addCard:t=>{ne.update(e=>(e.length<10&&e.push(t),e))},removeCard:t=>{ne.update(e=>e.filter(n=>n.id!==t))}};function ve(t,e,n){const r=t.slice();return r[3]=e[n],r}function ke(t,e,n){const r=t.slice();return r[6]=e[n],r}function we(t){let e,n;return e=new _e({props:{type:t[3],value:t[6]}}),e.$on("click",t[2].bind(this,{type:t[3],value:t[6]})),{c(){O(e.$$.fragment)},m(r,l){z(e,r,l),n=!0},p:k,i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){p(e.$$.fragment,r),n=!1},d(r){A(e,r)}}}function Ce(t){let e,n,r=t[1],l=[];for(let s=0;s<r.length;s+=1)l[s]=we(ke(t,r,s));const i=s=>p(l[s],1,1,()=>{l[s]=null});return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=W()},m(s,c){for(let o=0;o<l.length;o+=1)l[o].m(s,c);v(s,e,c),n=!0},p(s,c){if(c&7){r=s[1];let o;for(o=0;o<r.length;o+=1){const u=ke(s,r,o);l[o]?(l[o].p(u,c),_(l[o],1)):(l[o]=we(u),l[o].c(),_(l[o],1),l[o].m(e.parentNode,e))}for(V(),o=r.length;o<l.length;o+=1)i(o);F()}},i(s){if(!n){for(let c=0;c<r.length;c+=1)_(l[c]);n=!0}},o(s){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)p(l[c]);n=!1},d(s){Le(l,s),s&&b(e)}}}function Mt(t){let e,n,r,l,i,s=t[0],c=[];for(let u=0;u<s.length;u+=1)c[u]=Ce(ve(t,s,u));const o=u=>p(c[u],1,1,()=>{c[u]=null});return{c(){e=$("div"),n=$("h1"),n.textContent="Available Cards",r=J(),l=$("div");for(let u=0;u<c.length;u+=1)c[u].c();g(l,"class","cards-container svelte-5vz5o8"),g(e,"id","availableCards"),g(e,"class","svelte-5vz5o8")},m(u,f){v(u,e,f),C(e,n),C(e,r),C(e,l);for(let a=0;a<c.length;a+=1)c[a].m(l,null);i=!0},p(u,[f]){if(f&7){s=u[0];let a;for(a=0;a<s.length;a+=1){const d=ve(u,s,a);c[a]?(c[a].p(d,f),_(c[a],1)):(c[a]=Ce(d),c[a].c(),_(c[a],1),c[a].m(l,null))}for(V(),a=s.length;a<c.length;a+=1)o(a);F()}},i(u){if(!i){for(let f=0;f<s.length;f+=1)_(c[f]);i=!0}},o(u){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)p(c[f]);i=!1},d(u){u&&b(e),Le(c,u)}}}function Dt(){return Math.random().toString()}function Nt(t){const e=["plus","minus"],n=[1,2,3,4,5,6];function r({type:l,value:i}){U.addCard({id:Dt(),type:l,value:i})}return[e,n,r]}class zt extends B{constructor(e){super(),j(this,e,Nt,Mt,q,{})}}function Ee(t,e,n){const r=t.slice();return r[2]=e[n].id,r[3]=e[n].type,r[4]=e[n].value,r}function Se(t,e){let n,r,l;return r=new _e({props:{id:e[2],type:e[3],value:e[4]}}),r.$on("click",function(){fe(e[1].bind(this,e[2]))&&e[1].bind(this,e[2]).apply(this,arguments)}),{key:t,first:null,c(){n=W(),O(r.$$.fragment),this.first=n},m(i,s){v(i,n,s),z(r,i,s),l=!0},p(i,s){e=i;const c={};s&1&&(c.id=e[2]),s&1&&(c.type=e[3]),s&1&&(c.value=e[4]),r.$set(c)},i(i){l||(_(r.$$.fragment,i),l=!0)},o(i){p(r.$$.fragment,i),l=!1},d(i){i&&b(n),A(r,i)}}}function At(t){let e,n,r,l,i=[],s=new Map,c,o=t[0];const u=f=>f[2];for(let f=0;f<o.length;f+=1){let a=Ee(t,o,f),d=u(a);s.set(d,i[f]=Se(d,a))}return{c(){e=$("div"),n=$("h1"),n.textContent="Current Deck",r=J(),l=$("div");for(let f=0;f<i.length;f+=1)i[f].c();g(l,"class","cards-container svelte-1o6rmig"),g(e,"id","currentDeck"),g(e,"class","svelte-1o6rmig")},m(f,a){v(f,e,a),C(e,n),C(e,r),C(e,l);for(let d=0;d<i.length;d+=1)i[d].m(l,null);c=!0},p(f,[a]){a&3&&(o=f[0],V(),i=Fe(i,a,u,1,f,o,s,l,Ve,Se,null,Ee),F())},i(f){if(!c){for(let a=0;a<o.length;a+=1)_(i[a]);c=!0}},o(f){for(let a=0;a<i.length;a+=1)p(i[a]);c=!1},d(f){f&&b(e);for(let a=0;a<i.length;a+=1)i[a].d()}}}function Ot(t,e,n){let r;Qe(t,U,i=>n(0,r=i));function l(i){U.removeCard(i)}return[r,l]}class qt extends B{constructor(e){super(),j(this,e,Ot,At,q,{})}}function Me(t){let e,n,r,l;return n=new $t({props:{$$slots:{default:[xt]},$$scope:{ctx:t}}}),n.$on("click",t[1]),{c(){e=$("div"),O(n.$$.fragment),g(e,"class","button-container svelte-mu3qx")},m(i,s){v(i,e,s),z(n,e,null),l=!0},p(i,s){const c={};s&32&&(c.$$scope={dirty:s,ctx:i}),n.$set(c)},i(i){l||(_(n.$$.fragment,i),Q(()=>{r||(r=ye(e,be,{duration:300,y:200},!0)),r.run(1)}),l=!0)},o(i){p(n.$$.fragment,i),r||(r=ye(e,be,{duration:300,y:200},!1)),r.run(0),l=!1},d(i){i&&b(e),A(n),i&&r&&r.end()}}}function xt(t){let e;return{c(){e=ie("Start Game")},m(n,r){v(n,e,r)},d(n){n&&b(e)}}}function Lt(t){let e,n,r,l,i,s,c;r=new qt({}),i=new zt({});let o=t[0]&&Me(t);return{c(){e=J(),n=$("div"),O(r.$$.fragment),l=J(),O(i.$$.fragment),s=J(),o&&o.c(),document.title="Edit Deck",g(n,"class","section svelte-mu3qx")},m(u,f){v(u,e,f),v(u,n,f),z(r,n,null),C(n,l),z(i,n,null),C(n,s),o&&o.m(n,null),c=!0},p(u,[f]){u[0]?o?(o.p(u,f),f&1&&_(o,1)):(o=Me(u),o.c(),_(o,1),o.m(n,null)):o&&(V(),p(o,1,1,()=>{o=null}),F())},i(u){c||(_(r.$$.fragment,u),_(i.$$.fragment,u),_(o),c=!0)},o(u){p(r.$$.fragment,u),p(i.$$.fragment,u),p(o),c=!1},d(u){u&&b(e),u&&b(n),A(r),A(i),o&&o.d()}}}function jt(t,e,n){let r=!1,l;const i=ft(),s=U.subscribe(o=>{n(2,l=o.length)});function c(){i("startgame")}return Pe(()=>s()),t.$$.update=()=>{t.$$.dirty&4&&n(0,r=l===10)},[r,c,l]}class Bt extends B{constructor(e){super(),j(this,e,jt,Lt,q,{})}}function De(t,e,n){const r=t.slice();return r[2]=e[n].id,r[3]=e[n].type,r[4]=e[n].value,r}function Ne(t,e){let n,r,l;return r=new _e({props:{type:e[3],value:e[4]}}),{key:t,first:null,c(){n=W(),O(r.$$.fragment),this.first=n},m(i,s){v(i,n,s),z(r,i,s),l=!0},p(i,s){e=i;const c={};s&1&&(c.type=e[3]),s&1&&(c.value=e[4]),r.$set(c)},i(i){l||(_(r.$$.fragment,i),l=!0)},o(i){p(r.$$.fragment,i),l=!1},d(i){i&&b(n),A(r,i)}}}function Pt(t){let e=[],n=new Map,r,l,i=t[0];const s=c=>c[2];for(let c=0;c<i.length;c+=1){let o=De(t,i,c),u=s(o);n.set(u,e[c]=Ne(u,o))}return{c(){for(let c=0;c<e.length;c+=1)e[c].c();r=W()},m(c,o){for(let u=0;u<e.length;u+=1)e[u].m(c,o);v(c,r,o),l=!0},p(c,[o]){o&1&&(i=c[0],V(),e=Fe(e,o,s,1,c,i,n,r.parentNode,Ve,Ne,r,De),F())},i(c){if(!l){for(let o=0;o<i.length;o+=1)_(e[o]);l=!0}},o(c){for(let o=0;o<e.length;o+=1)p(e[o]);l=!1},d(c){for(let o=0;o<e.length;o+=1)e[o].d(c);c&&b(r)}}}function Rt(t,e,n){let r=[],l;return ut(()=>{l=U.subscribe(i=>{const s=i.sort(()=>.5-Math.random());n(0,r=s.slice(0,4))})}),Pe(()=>l()),[r]}class Tt extends B{constructor(e){super(),j(this,e,Rt,Pt,q,{})}}function Vt(t){let e,n;return e=new Tt({}),{c(){O(e.$$.fragment)},m(r,l){z(e,r,l),n=!0},p:k,i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){p(e.$$.fragment,r),n=!1},d(r){A(e,r)}}}function Ft(t){let e,n;return e=new Bt({}),e.$on("startgame",t[1]),{c(){O(e.$$.fragment)},m(r,l){z(e,r,l),n=!0},p:k,i(r){n||(_(e.$$.fragment,r),n=!0)},o(r){p(e.$$.fragment,r),n=!1},d(r){A(e,r)}}}function It(t){let e,n,r,l;const i=[Ft,Vt],s=[];function c(o,u){return o[0]==="edit"?0:o[0]==="match"?1:-1}return~(n=c(t))&&(r=s[n]=i[n](t)),{c(){e=$("main"),r&&r.c(),g(e,"class","svelte-130l4ix")},m(o,u){v(o,e,u),~n&&s[n].m(e,null),l=!0},p(o,[u]){let f=n;n=c(o),n===f?~n&&s[n].p(o,u):(r&&(V(),p(s[f],1,1,()=>{s[f]=null}),F()),~n?(r=s[n],r?r.p(o,u):(r=s[n]=i[n](o),r.c()),_(r,1),r.m(e,null)):r=null)},i(o){l||(_(r),l=!0)},o(o){p(r),l=!1},d(o){o&&b(e),~n&&s[n].d()}}}function Gt(t,e,n){let r="edit";return[r,()=>n(0,r="match")]}class Jt extends B{constructor(e){super(),j(this,e,Gt,It,q,{})}}new Jt({target:document.getElementById("app")});
