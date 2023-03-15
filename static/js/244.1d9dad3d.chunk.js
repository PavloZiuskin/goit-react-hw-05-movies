"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[244,404],{3174:function(n,e,t){t.d(e,{Z:function(){return P}});var r,i,a,o,s,c,u,d,p=t(7689),l=t(168),h=t(6444),f=t(1087),x=h.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n"]))),v=(0,h.ZP)(f.OL)(i||(i=(0,l.Z)(["\n  text-decoration: none;\n"]))),m=h.ZP.li(a||(a=(0,l.Z)(["\n  padding: 5px;\n  border-radius: 10px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    width: calc((100% / 2) - 16px);\n  }\n  @media screen and (min-width: 1080px) {\n    width: calc((100% / 3) - 18px);\n  }\n  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,\n    box-shadow 250ms ease-in-out, transform 250ms ease-in-out;\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 20px 10px,\n      rgba(0, 0, 0, 0.3) 0px 10px 7px -2px;\n    transform: scale(1.03);\n  }\n"]))),g=h.ZP.div(o||(o=(0,l.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n"]))),w=h.ZP.img(s||(s=(0,l.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),j=h.ZP.div(c||(c=(0,l.Z)(["\n  padding-top: 10px;\n  overflow: hidden;\n"]))),Z=h.ZP.h3(u||(u=(0,l.Z)(["\n  font-size: 24px;\n  color: #000;\n"]))),b=h.ZP.p(d||(d=(0,l.Z)(["\n  color: #000;\n  font-size: 18px;\n  font-weight: 700;\n"]))),k=t(2404),y=t(9243),_=t(184);function P(n){var e=n.movies,t=(0,p.TH)();return(0,_.jsx)(x,{children:e.map((function(n){var e=n.id,r=n.title,i=n.vote_average,a=n.release_date,o=n.poster_path;return(0,_.jsx)(m,{children:(0,_.jsxs)(v,{to:"/movies/".concat(e),state:{from:t},children:[(0,_.jsx)(g,{children:(0,_.jsx)(w,{src:o?k.BASE_IMG_URL+o:y,alt:r})}),(0,_.jsxs)(j,{children:[(0,_.jsx)(Z,{children:r}),(0,_.jsxs)(b,{children:["Rating: ",i]}),(0,_.jsx)(b,{children:a})]})]})},e)}))})}},785:function(n,e,t){t.d(e,{Df:function(){return u},IQ:function(){return h},Jh:function(){return x},Wf:function(){return s},gN:function(){return p}});var r=t(5861),i=t(7757),a=t.n(i),o=t(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"e32bfdef8b19fee5cb99e2b4c56ab1dd"}});function s(n){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.get("search/movie",{params:{query:e}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function u(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.get("trending/movie/day");case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.get("movie/".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.get("movie/".concat(e,"/credits"));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.get("movie/".concat(e,"/reviews"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},8244:function(n,e,t){t.r(e);var r=t(9439),i=t(785),a=t(2791),o=t(3174),s=t(5781),c=t(8132),u=t(184);e.default=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],d=e[1];return(0,a.useEffect)((function(){(0,i.Df)().then(d)}),[]),(0,u.jsxs)(s.MM,{children:[(0,u.jsx)(c.L,{children:"Home"}),(0,u.jsx)(o.Z,{movies:t})]})}},8132:function(n,e,t){t.d(e,{L:function(){return a}});var r,i=t(168),a=t(6444).ZP.h1(r||(r=(0,i.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 20px;\n  text-align: center;\n"])))},2404:function(n,e,t){t.r(e),t.d(e,{BASE_IMG_URL:function(){return y},default:function(){return _}});var r,i,a,o,s,c=t(9439),u=t(7689),d=t(2791),p=t(785),l=t(2634),h=t(8132),f=t(168),x=t(6444),v=t(1087),m=x.ZP.div(r||(r=(0,f.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    gap: 20px;\n  }\n"]))),g=x.ZP.div(i||(i=(0,f.Z)(["\n  width: 100%;\n  border-radius: 10px;\n  @media screen and (min-width: 768px) {\n    width: 50%;\n  }\n  img {\n    border-radius: 10px;\n    width: 100%;\n    object-fit: cover;\n  }\n"]))),w=x.ZP.div(a||(a=(0,f.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  gap: 20px;\n"]))),j=(0,x.ZP)(v.OL)(o||(o=(0,f.Z)(["\n  font-size: 24px;\n  text-decoration: none;\n  color: #000;\n\n  :hover,\n  :focus {\n    text-decoration: underline;\n  }\n"]))),Z=x.ZP.button(s||(s=(0,f.Z)(["\n  width: 150px;\n  height: 40px;\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 600;\n  background-color: transparent;\n  :hover,\n  :focus {\n    text-decoration: underline;\n  }\n"]))),b=t(9243),k=t(184),y="https://image.tmdb.org/t/p/w500";var _=function(){var n,e,t,r,i,a=(0,u.TH)(),o=(0,u.s0)(),s=(0,d.useState)(null),f=(0,c.Z)(s,2),x=f[0],v=f[1],_=(0,u.UO)().id;return(0,d.useEffect)((function(){(0,p.gN)(_).then(v)}),[_]),x?(0,k.jsxs)(l.W,{children:[(0,k.jsx)(Z,{onClick:function(){var n,e;o(null!==(n=null===a||void 0===a||null===(e=a.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},type:"button",children:"Go back"}),(0,k.jsx)(h.L,{children:"MovieDetails"}),(0,k.jsxs)(m,{children:[(0,k.jsx)(g,{children:(0,k.jsx)("img",{src:x.poster_path?y+x.poster_path:b,alt:x.title})}),(0,k.jsxs)("div",{children:[(0,k.jsxs)("h2",{children:[null!==(n=x.title)&&void 0!==n?n:x.original_title," (",Number.parseInt(x.release_date),")"]}),(0,k.jsxs)("p",{children:["User score: ",Math.round(10*x.vote_average),"%"]}),(0,k.jsx)("h3",{children:"Overview"}),(0,k.jsx)("p",{children:x.overview}),(0,k.jsx)("h4",{children:"Genres"}),(0,k.jsx)("p",{children:x.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,k.jsxs)("div",{children:[(0,k.jsxs)(w,{children:[(0,k.jsx)(j,{to:"cast",state:{from:null!==(e=null===a||void 0===a||null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"},children:"Cast"}),(0,k.jsx)(j,{to:"reviews",state:{from:null!==(r=null===a||void 0===a||null===(i=a.state)||void 0===i?void 0:i.from)&&void 0!==r?r:"/"},children:"Reviews"})]}),(0,k.jsx)("div",{children:(0,k.jsx)(d.Suspense,{fallback:(0,k.jsx)("p",{children:"Loading ..."}),children:(0,k.jsx)(u.j3,{})})})]})]}):(0,k.jsx)("p",{children:"Loading ..."})}},9243:function(n,e,t){n.exports=t.p+"static/media/movie-pic.a6cacd9a63a2acf7a0e9.jpeg"}}]);
//# sourceMappingURL=244.1d9dad3d.chunk.js.map