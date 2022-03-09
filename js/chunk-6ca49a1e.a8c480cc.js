(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ca49a1e"],{"571a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("NavTabs"),t.isLoading?a("Spinner"):[a("h1",{staticClass:"mt-5"},[t._v("人氣餐廳")]),a("hr"),t._l(t.restaurants,(function(e){return a("div",{key:e.id,staticClass:"card mb-3",staticStyle:{"max-width":"540px",margin:"auto"}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("router-link",{attrs:{to:{name:"restaurant-show",params:{id:e.id}}}},[a("img",{staticClass:"card-img",attrs:{src:e.image}})])],1),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),a("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(e.FavoriteCount))]),a("p",{staticClass:"card-text"},[t._v(" "+t._s(e.description)+" ")]),a("a",{staticClass:"btn btn-primary mr-2",attrs:{href:"#"}},[t._v("Show")]),e.isFavorited?a("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.deleteFavorite(e.id)}}},[t._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.addFavorite(e.id)}}},[t._v(" 加到最愛 ")])])])])])}))]],2)},s=[],n=a("5530"),i=a("1da1"),c=(a("d9e2"),a("d81d"),a("96cf"),a("8bb1")),o=a("2375"),u=a("c4c3"),d=a("4cce"),l=a("2fa3"),v={name:"RestaurantsTop",components:{NavTabs:c["a"],Spinner:o["a"]},data:function(){return{restaurants:[],isLoading:!0,isProcessing:!1}},methods:{fetchRestaurants:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,u["a"].getTopRestaurants();case 4:a=e.sent,r=a.data,t.restaurants=r.restaurants,t.isLoading=!1,e.next=15;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0),t.isLoading=!1,l["a"].fire({icon:"error",title:"無法取得人氣餐廳資料，請稍後再試"});case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))()},addFavorite:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.isProcessing=!0,a.next=4,d["a"].addFavorite({restaurantId:t});case 4:if(r=a.sent,s=r.data,"success"===s.status){a.next=8;break}throw new Error(s.message);case 8:e.restaurants=e.restaurants.map((function(e){return e.id!==t?e:Object(n["a"])(Object(n["a"])({},e),{},{isFavorited:!0,FavoriteCount:e.FavoriteCount+1})})),e.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),console.log(a.t0),e.isProcessing=!1,l["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"});case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()},deleteFavorite:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.isProcessing=!0,a.next=4,d["a"].deleteFavorite({restaurantId:t});case 4:if(r=a.sent,s=r.data,"success"===s.status){a.next=8;break}throw new Error(s.message);case 8:e.restaurants=e.restaurants.map((function(e){return e.id!==t?e:Object(n["a"])(Object(n["a"])({},e),{},{isFavorited:!1,FavoriteCount:e.FavoriteCount-1})})),e.isProcessing=!1,a.next=17;break;case 12:a.prev=12,a.t0=a["catch"](0),console.log(a.t0),e.isProcessing=!1,l["a"].fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"});case 17:case"end":return a.stop()}}),a,null,[[0,12]])})))()}},created:function(){this.fetchRestaurants()}},p=v,g=a("2877"),b=Object(g["a"])(p,r,s,!1,null,null,null);e["default"]=b.exports},d81d:function(t,e,a){"use strict";var r=a("23e7"),s=a("b727").map,n=a("1dde"),i=n("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-6ca49a1e.a8c480cc.js.map