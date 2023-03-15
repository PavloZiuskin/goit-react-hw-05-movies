"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[282,404],{3174:function(n,e,t){t.d(e,{Z:function(){return P}});var r,i,a,o,s,c,u,d,l=t(7689),p=t(168),h=t(6444),x=t(1087),f=h.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n"]))),v=(0,h.ZP)(x.OL)(i||(i=(0,p.Z)(["\n  text-decoration: none;\n"]))),m=h.ZP.li(a||(a=(0,p.Z)(["\n  padding: 5px;\n  border-radius: 10px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    width: calc((100% / 2) - 16px);\n  }\n  @media screen and (min-width: 1080px) {\n    width: calc((100% / 3) - 18px);\n  }\n  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,\n    box-shadow 250ms ease-in-out, transform 250ms ease-in-out;\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    box-shadow: rgba(50, 50, 93, 0.25) 0px 10px 20px 10px,\n      rgba(0, 0, 0, 0.3) 0px 10px 7px -2px;\n    transform: scale(1.03);\n  }\n"]))),g=h.ZP.div(o||(o=(0,p.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n"]))),b=h.ZP.img(s||(s=(0,p.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),j=h.ZP.div(c||(c=(0,p.Z)(["\n  padding-top: 10px;\n  overflow: hidden;\n"]))),w=h.ZP.h3(u||(u=(0,p.Z)(["\n  font-size: 24px;\n  color: #000;\n"]))),Z=h.ZP.p(d||(d=(0,p.Z)(["\n  color: #000;\n  font-size: 18px;\n  font-weight: 700;\n"]))),y=t(2404),k=t(9243),_=t(184);function P(n){var e=n.movies,t=(0,l.TH)();return(0,_.jsx)(f,{children:e.map((function(n){var e=n.id,r=n.title,i=n.vote_average,a=n.release_date,o=n.poster_path;return(0,_.jsx)(m,{children:(0,_.jsxs)(v,{to:"/movies/".concat(e),state:{from:t},children:[(0,_.jsx)(g,{children:(0,_.jsx)(b,{src:o?y.BASE_IMG_URL+o:k,alt:r})}),(0,_.jsxs)(j,{children:[(0,_.jsx)(w,{children:r}),(0,_.jsxs)(Z,{children:["Rating: ",i]}),(0,_.jsx)(Z,{children:a})]})]})},e)}))})}},785:function(n,e,t){t.d(e,{Df:function(){return u},IQ:function(){return h},Jh:function(){return f},Wf:function(){return s},gN:function(){return l}});var r=t(5861),i=t(7757),a=t.n(i),o=t(1243).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"e32bfdef8b19fee5cb99e2b4c56ab1dd"}});function s(n){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.get("search/movie",{params:{query:e}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function u(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.get("trending/movie/day");case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.get("movie/".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.get("movie/".concat(e,"/credits"));case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function f(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.get("movie/".concat(e,"/reviews"));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}},8132:function(n,e,t){t.d(e,{L:function(){return a}});var r,i=t(168),a=t(6444).ZP.h1(r||(r=(0,i.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 20px;\n  text-align: center;\n"])))},2404:function(n,e,t){t.r(e),t.d(e,{BASE_IMG_URL:function(){return k},default:function(){return _}});var r,i,a,o,s,c=t(9439),u=t(7689),d=t(2791),l=t(785),p=t(2634),h=t(8132),x=t(168),f=t(6444),v=t(1087),m=f.ZP.div(r||(r=(0,x.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    gap: 20px;\n  }\n"]))),g=f.ZP.div(i||(i=(0,x.Z)(["\n  width: 100%;\n  border-radius: 10px;\n  @media screen and (min-width: 768px) {\n    width: 50%;\n  }\n  img {\n    border-radius: 10px;\n    width: 100%;\n    object-fit: cover;\n  }\n"]))),b=f.ZP.div(a||(a=(0,x.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n  padding-left: 20px;\n  gap: 20px;\n"]))),j=(0,f.ZP)(v.OL)(o||(o=(0,x.Z)(["\n  font-size: 24px;\n  text-decoration: none;\n  color: #000;\n\n  :hover,\n  :focus {\n    text-decoration: underline;\n  }\n"]))),w=f.ZP.button(s||(s=(0,x.Z)(["\n  width: 150px;\n  height: 40px;\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: 600;\n  background-color: transparent;\n  :hover,\n  :focus {\n    text-decoration: underline;\n  }\n"]))),Z=t(9243),y=t(184),k="https://image.tmdb.org/t/p/w500";var _=function(){var n,e,t,r,i,a=(0,u.TH)(),o=(0,u.s0)(),s=(0,d.useState)(null),x=(0,c.Z)(s,2),f=x[0],v=x[1],_=(0,u.UO)().id;return(0,d.useEffect)((function(){(0,l.gN)(_).then(v)}),[_]),f?(0,y.jsxs)(p.W,{children:[(0,y.jsx)(w,{onClick:function(){var n,e;o(null!==(n=null===a||void 0===a||null===(e=a.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/")},type:"button",children:"Go back"}),(0,y.jsx)(h.L,{children:"MovieDetails"}),(0,y.jsxs)(m,{children:[(0,y.jsx)(g,{children:(0,y.jsx)("img",{src:f.poster_path?k+f.poster_path:Z,alt:f.title})}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("h2",{children:[null!==(n=f.title)&&void 0!==n?n:f.original_title," (",Number.parseInt(f.release_date),")"]}),(0,y.jsxs)("p",{children:["User score: ",Math.round(10*f.vote_average),"%"]}),(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsx)("p",{children:f.overview}),(0,y.jsx)("h4",{children:"Genres"}),(0,y.jsx)("p",{children:f.genres.map((function(n){return n.name})).join(", ")})]})]}),(0,y.jsxs)("div",{children:[(0,y.jsxs)(b,{children:[(0,y.jsx)(j,{to:"cast",state:{from:null!==(e=null===a||void 0===a||null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"},children:"Cast"}),(0,y.jsx)(j,{to:"reviews",state:{from:null!==(r=null===a||void 0===a||null===(i=a.state)||void 0===i?void 0:i.from)&&void 0!==r?r:"/"},children:"Reviews"})]}),(0,y.jsx)("div",{children:(0,y.jsx)(d.Suspense,{fallback:(0,y.jsx)("p",{children:"Loading ..."}),children:(0,y.jsx)(u.j3,{})})})]})]}):(0,y.jsx)("p",{children:"Loading ..."})}},8282:function(n,e,t){t.r(e),t.d(e,{default:function(){return x}});var r,i=t(9439),a=t(3174),o=t(2791),s=t(1087),c=t(785),u=t(5781),d=t(8132),l=t(168),p=t(6444).ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  margin-bottom: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  justify-content: center;\n  align-items: center;\n\n  input {\n    width: 75%;\n    height: 34px;\n    border-radius: 5px;\n  }\n  button {\n    display: block;\n    text-align: center;\n    margin: 0;\n    padding: 0;\n    border: none;\n    width: 80px;\n    height: 40px;\n    border-radius: 5px;\n  }\n"]))),h=t(184);var x=function(){var n=(0,s.lr)(),e=(0,i.Z)(n,2),t=e[0],r=e[1],l=(0,o.useState)([]),x=(0,i.Z)(l,2),f=x[0],v=x[1],m=t.get("query"),g=(0,o.useState)(null!==m&&void 0!==m?m:""),b=(0,i.Z)(g,2),j=b[0],w=b[1];return(0,o.useEffect)((function(){m&&(0,c.Wf)(m).then(v)}),[m]),(0,h.jsxs)(u.MM,{children:[(0,h.jsx)(d.L,{children:"Movies"}),(0,h.jsxs)(p,{onSubmit:function(n){n.preventDefault(),r({query:n.currentTarget.query.value})},children:[(0,h.jsx)("input",{type:"text",name:"query",value:j,onChange:function(n){w(n.target.value)}}),(0,h.jsx)("button",{type:"submit",children:"Search"})]}),(0,h.jsx)(a.Z,{movies:f})]})}},9243:function(n,e,t){n.exports=t.p+"static/media/movie-pic.a6cacd9a63a2acf7a0e9.jpeg"}}]);
//# sourceMappingURL=282.78062074.chunk.js.map