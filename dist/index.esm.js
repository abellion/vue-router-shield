class t{constructor(t,e){this.request=t,this.next=e}async handle(){const t=this.chain();for(let e of t){const t=await this.run(e);if(void 0!==t)return this.next(t)}return this.next()}run(t){return new Promise((e=>{t(this.request.to,this.request.from,e)}))}chain(){const t=new Set;for(let e of this.request.to.matched)e.meta.hasOwnProperty(o.guard)&&e.meta[o.guard].forEach(Set.prototype.add,t);return Array.from(t)}}var e=(e,r,a)=>{new t({to:e,from:r},a).handle()},r=t=>(e,r,a)=>{t(e,r,a)},a=t=>{let e=null;const r=(a,n,s)=>{let u=!1;if(e&&e.from.path===n.path&&e.to.path!==a.path&&(u=!0),e=u?null:{to:a,from:n},u)return s();for(let t in n.matched)if(n.matched[t].meta.hasOwnProperty(o.guard)&&n.matched[t].meta[o.guard].includes(r)&&n.matched[t]===a.matched[t])return s();t(a,n,s)};return r},n=t=>{const e=(r,a,n)=>{for(let s in a.matched)if(a.matched[s].meta.hasOwnProperty(o.guard)&&a.matched[s].meta[o.guard].includes(e)&&a.matched[s]===r.matched[s])return t(r,a,n);n()};return e};const o={guard:"guard"};function s(t,r){if(!0!==Boolean(r)||!0!==r.hasOwnProperty("router"))throw new Error("A Vue Router instance must be given to vue-router-shield");r.hasOwnProperty("guard")&&(o.guard=r.guard),r.router.beforeEach(e)}export{o as Settings,s as default,r as BeforeEach,a as BeforeEnter,n as BeforeUpdate};
//# sourceMappingURL=index.esm.js.map
