import{O as d}from"./index.bfeeca06.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[a]="d5e5742e-6bad-45bd-90a4-347ebcddc57c",e._sentryDebugIdIdentifier="sentry-dbid-d5e5742e-6bad-45bd-90a4-347ebcddc57c")}catch{}})();function u(e){return d.string().email().safeParse(e).success}function f(e){return e.charAt(0).toUpperCase()+e.slice(1)}function g(e,a,r=!1,t=!0,n=!1){const c=(t?e.toLocaleLowerCase():e).normalize("NFD").replace(/[\u0300-\u036f]/g,""),s=n?c.replace(/[^a-zA-Z0-9/]/g,"_"):c.replace(/[^a-zA-Z0-9]/g,"_"),i=r?s:s.replace(/_+/g,"_");return a?i:i.replace(/_$/,"")}function b(e){var o;const r=e.toLocaleLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g,""),t=/[a-z0-9]+/g,n=r.match(t);return(o=n==null?void 0:n.join("-"))!=null?o:""}export{b as a,f as c,u as i,g as n};
//# sourceMappingURL=string.84ae46ca.js.map
