"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[541],{541:function(n,t,e){e.r(t);var r=e(861),a=e(439),c=e(757),u=e.n(c),i=e(689),s=e(390),o=e(791),p=e(184);t.default=function(){var n=(0,i.UO)().movieId,t=(0,o.useState)([]),e=(0,a.Z)(t,2),c=e[0],f=e[1];return(0,o.useEffect)((function(){if(n){var t=function(){var t=(0,r.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,s.IV)(n);case 3:e=t.sent,r=e.cast,f(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}}),[n]),(0,p.jsx)(p.Fragment,{children:c&&(0,p.jsx)("ul",{children:c.map((function(n){var t=n.profile_path,e=n.name,r=n.character,a=n.id;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w185/".concat(t):"https://png.pngitem.com/pimgs/s/508-5087257_clip-art-hd-png-download.png",alt:e,width:185,height:278}),(0,p.jsx)("p",{children:e}),(0,p.jsxs)("p",{children:["Character: ",r||"not mentioned"]})]},a)}))})})}},390:function(n,t,e){e.d(t,{IV:function(){return p},LI:function(){return v},Sg:function(){return o},wH:function(){return f},wr:function(){return s}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="86824f16905540caf32a2109bda1bd06",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(Number(t),"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(Number(t),"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(Number(t),"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t,"&include_adult=true&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=541.d95ff144.chunk.js.map