(function(e){function t(t){for(var n,r,c=t[0],o=t[1],u=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},s={app:0},i=[];function c(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d0ab43a":"17160ab1","chunk-2d0b2ec8":"89921290","chunk-2d0d338e":"5d398069","chunk-560b892a":"cc3013df","chunk-2e422f0c":"223d13d5","chunk-3f54bcdd":"c47b71e2","chunk-b9a3d18a":"b4116e8e","chunk-6ca49a1e":"a8c480cc","chunk-71c50812":"daf0a316","chunk-721f5257":"693a510d","chunk-2d228901":"5ada545d","chunk-452696c7":"bd80f62e","chunk-84cc821a":"b9493ca7","chunk-958bdcfa":"d372ec61","chunk-aef178e4":"67c9ba2e","chunk-d55d3ce2":"fff03fbd"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={"chunk-2e422f0c":1,"chunk-b9a3d18a":1,"chunk-aef178e4":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-2d0ab43a":"31d6cfe0","chunk-2d0b2ec8":"31d6cfe0","chunk-2d0d338e":"31d6cfe0","chunk-560b892a":"31d6cfe0","chunk-2e422f0c":"17f8f926","chunk-3f54bcdd":"31d6cfe0","chunk-b9a3d18a":"4353ac54","chunk-6ca49a1e":"31d6cfe0","chunk-71c50812":"31d6cfe0","chunk-721f5257":"31d6cfe0","chunk-2d228901":"31d6cfe0","chunk-452696c7":"31d6cfe0","chunk-84cc821a":"31d6cfe0","chunk-958bdcfa":"31d6cfe0","chunk-aef178e4":"7a80ffd0","chunk-d55d3ce2":"31d6cfe0"}[e]+".css",s=o.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===s))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===s)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],p.parentNode.removeChild(p),a(i)},p.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=s[e]=[t,a]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}s[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/forum-front-end-vue/",o.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"12ab":function(e,t,a){},"1b45":function(e,t,a){"use strict";a("eddc")},2375:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spinner"},[a("div",{staticClass:"bouncing-loader"},[a("div"),a("div"),a("div")])])}],s=(a("6fa7"),a("2877")),i={},c=Object(s["a"])(i,n,r,!1,null,"1b8ef1c2",null);t["a"]=c.exports},"2fa3":function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return l}));a("d3b7");var n=a("bc3a"),r=a.n(n),s=a("3d20"),i=a.n(s),c="http://localhost:3000/api",o=r.a.create({baseURL:c});o.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["Authorization"]="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)}));var u=o,l=i.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},"4cce":function(e,t,a){"use strict";var n=a("2fa3");t["a"]={getCurrentUser:function(){return n["b"].get("/get_current_user")},get:function(e){var t=e.userId;return n["b"].get("/users/".concat(t))},addFavorite:function(e){var t=e.restaurantId;return n["b"].post("/favorite/".concat(t),null)},deleteFavorite:function(e){var t=e.restaurantId;return n["b"].delete("/favorite/".concat(t))},addLike:function(e){var t=e.restaurantId;return n["b"].post("/like/".concat(t),null)},deleteLike:function(e){var t=e.restaurantId;return n["b"].delete("/like/".concat(t))},addFollowing:function(e){var t=e.userId;return n["b"].post("/following/".concat(t),null)},deleteFollowing:function(e){var t=e.userId;return n["b"].delete("/following/".concat(t))},getTopUsers:function(){return n["b"].get("/users/top")},createComment:function(e){var t=e.restaurantId,a=e.text;return n["b"].post("/comments",{restaurantId:t,text:a})},update:function(e){var t=e.userId,a=e.formData;return n["b"].put("/users/".concat(t),a)}}},"56d7":function(e,t,a){"use strict";a.r(t);a("e623"),a("e379"),a("5dc8"),a("37e1");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"restaurant-forum"}},[a("Navbar"),a("main",{staticClass:"mt-5 bg-white"},[a("router-view")],1)],1)},s=[],i=(a("ab8b"),a("4989"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v(" 餐廳評論網 ")]),e._m(0),a("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarSupportedContent"}},[a("div",{staticClass:"ml-auto d-flex align-items-center"},[e.currentUser.isAdmin?a("router-link",{staticClass:"text-white mr-3",attrs:{to:"/admin"}},[e._v(" 管理員後台 ")]):e._e(),e.isAuthenticated?[a("router-link",{staticClass:"text-white mr-3",attrs:{to:{name:"user",params:{id:e.currentUser.id}}}},[e._v(" "+e._s(e.currentUser.name||"使用者")+" 您好 ")]),a("button",{staticClass:"btn btn-sm btn-outline-success my-2 my-sm-0",attrs:{type:"button"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.logout.apply(null,arguments)}}},[e._v(" 登出 ")])]:e._e()],2)])],1)}),c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=a("5530"),u=a("2f62"),l={name:"Navbar",computed:Object(o["a"])({},Object(u["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/signin")}}},d=l,p=(a("c067"),a("2877")),f=Object(p["a"])(d,i,c,!1,null,"e86f994e",null),m=f.exports,g={name:"App",components:{Navbar:m}},b=g,h=Object(p["a"])(b,r,s,!1,null,null,null),v=h.exports,k=a("1da1"),w=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("caad6"),a("b0c0"),a("2532"),a("8c4f")),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("404 Not Found")])},P=[],x={},C=Object(p["a"])(x,y,P,!1,null,null,null),_=C.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("form",{staticClass:"w-100",on:{submit:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),a("div",{staticClass:"form-label-group mb-2"},[a("label",{attrs:{for:"email"}},[e._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-3"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" Submit ")]),a("div",{staticClass:"text-center mb-3"},[a("p",[a("router-link",{attrs:{to:"/signup"}},[e._v("Sign Up")])],1)]),a("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v("© 2017-2018")])])])},O=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center mb-4"},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Sign In")])])}],I=(a("d9e2"),a("7696")),R=a("2fa3"),E={name:"SignIn",data:function(){return{email:"",password:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,!(!e.email|!e.password)){t.next=4;break}return R["a"].fire({icon:"warning",title:"請輸入 email 和 password"}),t.abrupt("return");case 4:return e.isProcessing=!0,t.next=7,I["a"].signIn({email:e.email,password:e.password});case 7:if(a=t.sent,n=a.data,"success"===n.status){t.next=11;break}throw new Error(n.message);case 11:localStorage.setItem("token",n.token),e.$store.commit("setCurrentUser",n.user),e.$router.push("/restaurants"),t.next=22;break;case 16:t.prev=16,t.t0=t["catch"](0),e.password="",R["a"].fire({icon:"warning",title:"請確認您輸入了正確的帳號密碼"}),e.isProcessing=!1,console.log(t.t0);case 22:case"end":return t.stop()}}),t,null,[[0,16]])})))()}}},L=E,S=Object(p["a"])(L,j,O,!1,null,null,null),A=S.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("NavTabs"),a("RestaurantsNavPills",{attrs:{categories:e.categories}}),e.isLoading?a("Spinner"):[a("div",{staticClass:"row"},e._l(e.restaurants,(function(e){return a("RestaurantCard",{key:e.id,attrs:{"initial-restaurant":e}})})),1),e.totalPage.length>1?a("RestaurantsPagination",{attrs:{"current-page":e.currentPage,"total-page":e.totalPage,"category-id":e.categoryId,"previous-page":e.previousPage,"next-page":e.nextPage}}):e._e(),e.restaurants.length<1?a("div",[e._v("此類別目前無餐廳資料")]):e._e()]],2)},N=[],q=a("8bb1"),$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-6 col-lg-4"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"card mb-4"},[a("img",{staticClass:"card-img-top",attrs:{src:e.restaurant.image,alt:"Card image cap",width:"286px",height:"180px"},on:{load:e.changeLoading}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text title-wrap"},[a("router-link",{attrs:{to:{name:"restaurant-show",params:{id:e.restaurant.id}}}},[e._v(" "+e._s(e.restaurant.name)+" ")])],1),a("span",{staticClass:"badge badge-secondary"},[e._v(e._s(e.restaurant.Category?e.restaurant.Category.name:"未分類"))]),a("p",{staticClass:"card-text text-truncate"},[e._v(" "+e._s(e.restaurant.description)+" ")])]),a("div",{staticClass:"card-footer"},[e.restaurant.isFavorited?a("button",{staticClass:"btn btn-danger btn-border favorite mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFavorite(e.restaurant.id)}}},[e._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary btn-border favorite mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFavorite(e.restaurant.id)}}},[e._v(" 加到最愛 ")]),e.restaurant.isLiked?a("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteLike(e.restaurant.id)}}},[e._v(" Unlike ")]):a("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addLike(e.restaurant.id)}}},[e._v(" Like ")])])])])},F=[],T=a("4cce"),D={name:"RestaurantCard",props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant,isLoading:!0,isProcessing:!1}},methods:{addFavorite:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,T["a"].addFavorite({restaurantId:e});case 4:if(n=a.sent,r=n.data,"success"===r.status){a.next=8;break}throw new Error(r.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isFavorited:!0}),t.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),console.log(a.t0),t.isProcessing=!1,R["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"});case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()},deleteFavorite:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,T["a"].deleteFavorite({restaurantId:e});case 4:if(n=a.sent,r=n.data,"success"===r.status){a.next=8;break}throw new Error(r.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isFavorited:!1}),t.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),console.log(a.t0),t.isProcessing=!1,R["a"].fire({icon:"error",title:"無法將餐廳移除最愛。請稍後再試"});case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()},addLike:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,T["a"].addLike({restaurantId:e});case 4:if(n=a.sent,r=n.data,"success"===r.status){a.next=8;break}throw new Error(r.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isLiked:!0}),t.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),console.log(a.t0),t.isProcessing=!1,R["a"].fire({icon:"error",title:"無法按讚餐廳，請稍後再試"});case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()},deleteLike:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isProcessing=!0,a.next=4,T["a"].deleteLike({restaurantId:e});case 4:if(n=a.sent,r=n.data,"success"===r.status){a.next=8;break}throw new Error(r.message);case 8:t.restaurant=Object(o["a"])(Object(o["a"])({},t.restaurant),{},{isLiked:!1}),t.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),console.log(a.t0),t.isProcessing=!1,R["a"].fire({icon:"error",title:"無法取消按讚餐廳，請稍後再試"});case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()},changeLoading:function(){this.isLoading=!1}}},B=D,M=(a("1b45"),Object(p["a"])(B,$,F,!1,null,"65a2b80c",null)),J=M.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-pills mb-4"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants"}}},[e._v(" 全部 ")])],1),e._l(e.categories,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants",query:{categoryId:t.id}}}},[e._v(" "+e._s(t.name)+" ")])],1)}))],2)},H=[],K={name:"RestaurantNavPills",props:{categories:{type:Array,required:!0}}},G=K,Q=(a("ddc3"),Object(p["a"])(G,z,H,!1,null,"9a0d5ee8",null)),V=Q.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{class:["page-item",{disabled:1===e.currentPage}]},[a("router-link",{staticClass:"page-link",attrs:{"aria-label":"Previous",to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.previousPage}}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])],1),e._l(e.totalPage,(function(t){return a("li",{key:t,class:["page-item",{active:e.currentPage===t}]},[a("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{categoryId:e.categoryId,page:t}}}},[e._v(" "+e._s(t)+" ")])],1)})),a("li",{class:["page-item",{disabled:e.currentPage===e.totalPage.length}]},[a("router-link",{staticClass:"page-link",attrs:{"aria-label":"Next",to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.nextPage}}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])],1)],2)])},X=[],Y=(a("a9e3"),{name:"RestaurantsPagination",props:{categoryId:{type:[Number,String],default:""},currentPage:{type:Number,default:1},totalPage:{type:Array,required:!0},previousPage:{type:Number,required:!0},nextPage:{type:Number,required:!0}}}),Z=Y,ee=(a("fa5c"),Object(p["a"])(Z,W,X,!1,null,"eadee45a",null)),te=ee.exports,ae=a("2375"),ne=a("c4c3"),re={name:"Restaurants",components:{NavTabs:q["a"],RestaurantCard:J,RestaurantsNavPills:V,RestaurantsPagination:te,Spinner:ae["a"]},data:function(){return{restaurants:[],categories:[],categoryId:-1,currentPage:1,totalPage:[],previousPage:-1,nextPage:-1,isLoading:!0}},beforeRouteUpdate:function(e,t,a){var n=e.query,r=n.page,s=void 0===r?"":r,i=n.categoryId,c=void 0===i?"":i;this.fetchRestaurants({queryPage:s,queryCategoryId:c}),a()},methods:{fetchRestaurants:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var n,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.queryPage,r=e.queryCategoryId,a.prev=1,t.isLoading=!0,a.next=5,ne["a"].getRestaurants({page:n,categoryId:r});case 5:s=a.sent,t.restaurants=s.data.restaurants,t.categories=s.data.categories,t.categoryId=s.data.categoryId,t.currentPage=s.data.page,t.totalPage=s.data.totalPage,t.previousPage=s.data.prev,t.nextPage=s.data.next,t.isLoading=!1,a.next=21;break;case 16:a.prev=16,a.t0=a["catch"](1),console.log("error",a.t0),t.isLoading=!1,R["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 21:case"end":return a.stop()}}),a,null,[[1,16]])})))()}},created:function(){var e=this.$route.query,t=e.page,a=void 0===t?"":t,n=e.categoryId,r=void 0===n?"":n;this.fetchRestaurants({queryPage:a,queryCategoryId:r})}},se=re,ie=Object(p["a"])(se,U,N,!1,null,null,null),ce=ie.exports;n["a"].use(u["a"]);var oe=new u["a"].Store({state:{currentUser:{id:-1,name:"",email:"",image:"",isAdmin:!1},isAuthenticated:!1,token:""},mutations:{setCurrentUser:function(e,t){e.currentUser=Object(o["a"])(Object(o["a"])({},e.currentUser),t),e.token=localStorage.getItem("token"),e.isAuthenticated=!0},revokeAuthentication:function(e){e.currentUser={},e.isAuthenticated=!1,e.token="",localStorage.removeItem("token")}},actions:{fetchCurrentUser:function(e){return Object(k["a"])(regeneratorRuntime.mark((function t(){var a,n,r,s,i,c,o,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,t.next=4,T["a"].getCurrentUser();case 4:return n=t.sent,r=n.data,s=r.id,i=r.email,c=r.name,o=r.image,u=r.isAdmin,a("setCurrentUser",{id:s,email:i,name:c,image:o,isAdmin:u}),t.abrupt("return",!0);case 11:return t.prev=11,t.t0=t["catch"](1),console.error(t.t0.message),a("revokeAuthentication"),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},modules:{}});n["a"].use(w["a"]);var ue=function(e,t,a){var n=oe.state.currentUser;!n||n.isAdmin?a():a("/not-found")},le=[{path:"/",name:"root",redirect:"/signin"},{path:"/signin",name:"sign-in",component:A},{path:"/signup",name:"sign-up",component:function(){return a.e("chunk-2d0d338e").then(a.bind(null,"5c9c"))}},{path:"/restaurants",name:"restaurants",component:ce},{path:"/restaurants/feeds",name:"restaurants-feeds",component:function(){return Promise.all([a.e("chunk-560b892a"),a.e("chunk-b9a3d18a")]).then(a.bind(null,"9cab"))}},{path:"/restaurants/top",name:"restaurants-top",component:function(){return a.e("chunk-6ca49a1e").then(a.bind(null,"571a"))}},{path:"/restaurants/:id",name:"restaurant-show",component:function(){return Promise.all([a.e("chunk-560b892a"),a.e("chunk-2e422f0c")]).then(a.bind(null,"d1f7"))}},{path:"/restaurants/:id/dashboard",name:"restaurant-dashboard",component:function(){return a.e("chunk-2d0b2ec8").then(a.bind(null,"25d3"))}},{path:"/users/top",name:"users-top",component:function(){return a.e("chunk-d55d3ce2").then(a.bind(null,"22ab"))}},{path:"/users/:id",name:"user",component:function(){return a.e("chunk-2d0ab43a").then(a.bind(null,"1511"))}},{path:"/users/:id/edit",name:"user-edit",component:function(){return Promise.all([a.e("chunk-721f5257"),a.e("chunk-2d228901")]).then(a.bind(null,"da5c"))}},{path:"/admin",exact:!0,redirect:"/admin/restaurants/",beforeEnter:ue},{path:"/admin/restaurants",name:"admin-restaurants",component:function(){return a.e("chunk-71c50812").then(a.bind(null,"73a3"))},beforeEnter:ue},{path:"/admin/restaurants/new",name:"admin-restaurant-new",component:function(){return Promise.all([a.e("chunk-721f5257"),a.e("chunk-84cc821a")]).then(a.bind(null,"2743"))},beforeEnter:ue},{path:"/admin/restaurants/:id/edit",name:"admin-restaurant-edit",component:function(){return Promise.all([a.e("chunk-721f5257"),a.e("chunk-452696c7")]).then(a.bind(null,"6945"))},beforeEnter:ue},{path:"/admin/restaurants/:id",name:"admin-restaurant-show",component:function(){return Promise.all([a.e("chunk-560b892a"),a.e("chunk-3f54bcdd")]).then(a.bind(null,"e45b"))},beforeEnter:ue},{path:"/admin/categories",name:"admin-categories",component:function(){return a.e("chunk-aef178e4").then(a.bind(null,"5652"))},beforeEnter:ue},{path:"/admin/users",name:"admin-users",component:function(){return a.e("chunk-958bdcfa").then(a.bind(null,"6135"))},beforeEnter:ue},{path:"*",name:"not-found",component:_}],de=new w["a"]({linkExactActiveClass:"active",routes:le});de.beforeEach(function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(t,a,n){var r,s,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=localStorage.getItem("token"),s=oe.state.token,i=oe.state.isAuthenticated,!r||r===s){e.next=7;break}return e.next=6,oe.dispatch("fetchCurrentUser");case 6:i=e.sent;case 7:if(c=["sign-in","sign-up"],i||c.includes(t.name)){e.next=11;break}return n("/signin"),e.abrupt("return");case 11:if(!i||!c.includes(t.name)){e.next=14;break}return n("/restaurants"),e.abrupt("return");case 14:n();case 15:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}());var pe=de;a("12ab");n["a"].config.productionTip=!1,new n["a"]({router:pe,store:oe,render:function(e){return e(v)}}).$mount("#app")},"6fa7":function(e,t,a){"use strict";a("ffd3")},7046:function(e,t,a){},7696:function(e,t,a){"use strict";a("b0c0");var n=a("2fa3");t["a"]={signIn:function(e){var t=e.email,a=e.password;return n["b"].post("/signin",{email:t,password:a})},signUp:function(e){var t=e.name,a=e.email,r=e.password,s=e.passwordCheck;return n["b"].post("/signup",{name:t,email:a,password:r,passwordCheck:s})}}},"8bb1":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-tabs mb-4"},e._l(e.tabs,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:t.path}},[e._v(" "+e._s(t.title)+" ")])],1)})),0)},r=[],s=a("ec26"),i={name:"NavTabs",data:function(){return{tabs:[{id:Object(s["a"])(),title:"首頁",path:"/restaurants"},{id:Object(s["a"])(),title:"最新動態",path:"/restaurants/feeds"},{id:Object(s["a"])(),title:"人氣餐廳",path:"/restaurants/top"},{id:Object(s["a"])(),title:"美食達人",path:"/users/top"}]}}},c=i,o=(a("a81c"),a("2877")),u=Object(o["a"])(c,n,r,!1,null,"66dba1e6",null);t["a"]=u.exports},a81c:function(e,t,a){"use strict";a("df9d")},c067:function(e,t,a){"use strict";a("ed19")},c4c3:function(e,t,a){"use strict";a("d3b7"),a("3ca3"),a("ddb0"),a("9861"),a("25f0");var n=a("2fa3");t["a"]={getRestaurantShow:function(e){var t=e.restaurantId;return n["b"].get("/restaurants/".concat(t))},getRestaurants:function(e){var t=e.page,a=e.categoryId,r=new URLSearchParams({page:t,categoryId:a});return n["b"].get("/restaurants?".concat(r.toString()))},getFeeds:function(){return n["b"].get("/restaurants/feeds")},getTopRestaurants:function(){return n["b"].get("/restaurants/top")}}},d8ca:function(e,t,a){},ddc3:function(e,t,a){"use strict";a("7046")},df9d:function(e,t,a){},ed19:function(e,t,a){},eddc:function(e,t,a){},fa5c:function(e,t,a){"use strict";a("d8ca")},ffd3:function(e,t,a){}});
//# sourceMappingURL=app.125e07e6.js.map