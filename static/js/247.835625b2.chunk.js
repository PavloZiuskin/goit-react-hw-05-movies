"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247,108],{247:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var r=n(439),a=n(791),s=n(689),c=n(785),u=n(108),i=n(184);function o(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],o=e[1],l=(0,s.UO)().id;return(0,a.useEffect)((function(){(0,c.IQ)(l).then(o)}),[l]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{children:"Cast"}),(0,i.jsx)("ul",{children:n.map((function(t){var e=t.cast_id,n=t.name,r=t.profile_path;return(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:n}),(0,i.jsx)("img",{src:u.BASE_IMG_URL+r,alt:n})]},e)}))})]})}},785:function(t,e,n){n.d(e,{Df:function(){return o},IQ:function(){return d},Jh:function(){return v},Wf:function(){return u},gN:function(){return p}});var r=n(861),a=n(757),s=n.n(a),c=n(243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"e32bfdef8b19fee5cb99e2b4c56ab1dd"}});function u(t){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("search/movie",{params:{query:e}});case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function o(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("trending/movie/day");case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("movie/".concat(e));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("movie/".concat(e,"/credits"));case 3:return n=t.sent,t.abrupt("return",n.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function t(e){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.get("movie/".concat(e,"/reviews"));case 3:return n=t.sent,t.abrupt("return",n.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}},108:function(t,e,n){n.r(e),n.d(e,{BASE_IMG_URL:function(){return o}});var r=n(439),a=n(689),s=n(87),c=n(791),u=n(785),i=n(184),o="https://image.tmdb.org/t/p/w500";e.default=function(){var t,e,n,l,p=(0,a.TH)(),f=(0,a.s0)(),d=(0,c.useState)(null),h=(0,r.Z)(d,2),v=h[0],m=h[1],x=(0,a.UO)().id;return(0,c.useEffect)((function(){(0,u.gN)(x).then(m)}),[x]),v?(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{onClick:function(){var t,e;f(null!==(t=null===p||void 0===p||null===(e=p.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/")},type:"button",children:"Go back"}),(0,i.jsx)("h1",{children:"MovieDetails"}),(0,i.jsx)("h2",{children:v.title}),(0,i.jsx)("img",{src:o+v.poster_path,alt:v.title}),(0,i.jsx)(s.OL,{to:"cast",state:{from:null!==(t=null===p||void 0===p||null===(e=p.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/"},children:"Cast"}),(0,i.jsx)(s.OL,{to:"reviews",state:{from:null!==(n=null===p||void 0===p||null===(l=p.state)||void 0===l?void 0:l.from)&&void 0!==n?n:"/"},children:"Reviews"}),(0,i.jsx)(c.Suspense,{fallback:(0,i.jsx)("p",{children:"Loading ..."}),children:(0,i.jsx)(a.j3,{})})]}):(0,i.jsx)("p",{children:"Loading ..."})}}}]);
//# sourceMappingURL=247.835625b2.chunk.js.map