/* import-map-overrides@[object Object] (server) */
import o from"cookie";const t=/^\d+$/g;function r(o,t){const r={imports:{...o.imports},scopes:{...o.scopes||{}}};for(let o in t)r.imports[o]=t[o];return r}function e(r,e=s){const i=o.parse(r.headers.cookie||""),c={};for(let o in i)if(o.startsWith("import-map-override:")){const n=o.slice("import-map-override:".length);if(n){let p=i[o];t.test(p)&&(p=(e||s)(p,n,r)),p.startsWith("//")&&(p=`${r.protocol}:${p}`),c[n]=p}}return c}function s(o,t,r){const e=t.replace(/@/g,"").replace(/\//g,"-");return`${r.protocol}://localhost:${o}/${e}`}export{r as applyOverrides,e as getOverridesFromCookies};
//# sourceMappingURL=import-map-overrides-server.js.map