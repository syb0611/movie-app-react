(this["webpackJsonpmovie-app-react"]=this["webpackJsonpmovie-app-react"]||[]).push([[0],{38:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(0),c=a.n(n),i=a(29),r=a.n(i),o=a(8),l=a(2);a(38);var j=function(){return Object(s.jsxs)("div",{className:"navbar",children:[Object(s.jsx)(o.b,{to:"/",children:"Home"}),Object(s.jsx)(o.b,{to:"/about",children:"About"})]})};var m=function(e){return Object(s.jsx)("h3",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:"About page."})},u=a(19),d=a.n(u),h=a(31),v=a(11),b=a(12),p=a(14),O=a(13),x=a(32),y=a.n(x);a(62);var f=function(e){var t=e.id,a=e.year,n=e.title,c=e.summary,i=e.poster,r=e.genres;return Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("img",{src:i,alt:n,title:n}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:c,poster:i,genres:r}},children:Object(s.jsx)("h3",{className:"movie__title",children:n})}),Object(s.jsx)("h5",{className:"movie__year",children:a}),Object(s.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(s.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(s.jsxs)("p",{className:"movie__summary",children:[c.slice(0,100),c.length<100?"":"..."]})]})]})},g=(a(63),function(e){Object(p.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(v.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(h.a)(d.a.mark((function t(){var a,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,s=a.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:a.map((function(e){return Object(s.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),a}(c.a.Component)),_=(a(64),function(e){Object(p.a)(a,e);var t=Object(O.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(s.jsxs)("div",{className:"movie__detail",children:[Object(s.jsxs)("h1",{className:"movie__detail-title",children:[e.state.title,Object(s.jsxs)("span",{className:"movie__detail-year",children:[" (",e.state.year,")"]})]}),Object(s.jsx)("img",{src:e.state.poster}),Object(s.jsx)("p",{children:e.state.summary})]}):null}}]),a}(c.a.Component));var N=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(j,{}),Object(s.jsx)(l.a,{path:"/",exact:!0,component:g}),Object(s.jsx)(l.a,{path:"/about",exact:!0,component:m}),Object(s.jsx)(l.a,{path:"/movie/:id",exact:!0,component:_})]})};r.a.render(Object(s.jsx)(N,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.a209a47a.chunk.js.map