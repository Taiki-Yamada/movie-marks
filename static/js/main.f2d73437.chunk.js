(this["webpackJsonpmovie-marks"]=this["webpackJsonpmovie-marks"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),s=(n(14),n(15),n(7)),a=n(4),o=n(1),l=n(21),r=n(0),j=function(e){var t=e.listName,n=e.listType,c=Object(o.useState)([]),i=Object(a.a)(c,2),j=i[0],d=i[1],m=Object(o.useState)(1),h=Object(a.a)(m,2),u=h[0],b=h[1],O=Object(o.useState)({}),g=Object(a.a)(O,2),p=g[0],x=g[1],f=Object(o.useState)({toggle:!1,index:null}),v=Object(a.a)(f,2),N=v[0],k=v[1];Object(o.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=444108a040de72eeab7424dedf91ca28&language=en-JA&page=").concat(u)).then((function(e){return e.json()})).then((function(e){d([].concat(Object(s.a)(j),Object(s.a)(e.results)))}))}),[u]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("ul",{className:"movieList",children:j.map((function(e,t){return Object(r.jsxs)("li",{className:"movieContainer",onClick:function(){k({toggle:!0,index:t}),function(e){fetch("https://api.themoviedb.org/3/movie/".concat(j[e].id,"?api_key=444108a040de72eeab7424dedf91ca28")).then((function(e){return e.json()})).then((function(e){x(e)}))}(t)},children:[Object(r.jsx)("img",{src:"https://image.tmdb.org/t/p/w185".concat(e.poster_path)}),Object(r.jsx)("p",{children:e.original_title}),Object(r.jsx)("time",{children:e.release_date}),Object(r.jsx)("p",{children:e.homepage})]},t)}))}),Object(r.jsx)("div",{className:"moreBtn",onClick:function(){b(u+1)},children:"MORE"}),Object(r.jsx)(l.a,{classNames:"mask",in:N.toggle,timeout:300,unmountOnExit:!0,children:Object(r.jsx)("div",{className:"mask",onClick:function(){k({toggle:!1,index:N.index}),setTimeout((function(){return x({})}),300)}})}),Object(r.jsx)(l.a,{classNames:"modal",in:N.toggle,timeout:300,unmountOnExit:!0,children:Object(r.jsxs)("div",{className:"modal",children:[Object(r.jsx)("h3",{className:"modalTitle",children:p.original_title}),p.release_date&&Object(r.jsx)("p",{className:"modalFacts",children:"".concat(p.release_date,", ").concat(Math.floor(p.runtime/60),"h").concat(p.runtime%60,"min")}),Object(r.jsxs)("div",{className:"modalImgOverviewContainer",children:[p.poster_path&&Object(r.jsx)("img",{src:"https://image.tmdb.org/t/p/w185".concat(p.poster_path)}),Object(r.jsx)("p",{children:p.overview})]}),Object(r.jsxs)("div",{className:"modalBtn",children:[Object(r.jsx)("a",{className:"homepageBtn",href:p.homepage,target:"_blank",rel:"noopener noreferrer",children:"HOME PAGE"}),Object(r.jsx)("div",{className:"closeModal",onClick:function(){k({toggle:!1,index:N.index}),setTimeout((function(){return x({})}),300)},children:"CLOSE"})]})]})})]})},d=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Movie Marks"})}),Object(r.jsx)("section",{className:"popularMoviesSection",children:Object(r.jsx)(j,{listName:"Popular Movies",listType:"popular"})}),Object(r.jsx)("section",{className:"nowPlayingMoviesSection",children:Object(r.jsx)(j,{listName:"Now Playing Movies",listType:"now_playing"})}),Object(r.jsx)("footer",{children:Object(r.jsx)("p",{className:"copyright",children:"Copyright \xa9 2022 Taiki All Rights Reserved."})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};i.a.render(Object(r.jsx)(d,{}),document.getElementById("root")),m()}},[[19,1,2]]]);
//# sourceMappingURL=main.f2d73437.chunk.js.map