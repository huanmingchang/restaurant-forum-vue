(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9a3d18a"],{"3f1a":function(t,e,a){"use strict";a("9779")},9779:function(t,e,a){},"9cab":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("NavTabs"),t.isLoading?a("Spinner"):[a("h1",{staticClass:"mt-5"},[t._v("最新動態")]),a("hr"),a("div",{staticClass:"row",attrs:{div:""}},[a("div",{staticClass:"col-md-6"},[a("h3",[t._v("最新餐廳")]),a("NewestRestaurants",{attrs:{restaurants:t.restaurants}})],1),a("div",{staticClass:"col-md-6"},[a("h3",[t._v("最新評論")]),a("NewestComments",{attrs:{comments:t.comments}})],1)])]],2)},r=[],n=a("1da1"),i=(a("96cf"),a("8bb1")),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("最新餐廳")]),a("div",{staticClass:"card-body"},t._l(t.restaurants,(function(e){return a("div",{key:e.id},[a("h4",[a("router-link",{attrs:{to:{name:"restaurant-show",params:{id:e.id}}}},[t._v(t._s(e.name))]),a("small",[t._v(t._s(e.Category.name?e.Category.name:"未分類"))])],1),a("p",[t._v(" "+t._s(e.description)+" ")]),t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" "),a("hr")])})),0)])},o=[],u=a("2708"),d={name:"NewestRestaurants",props:{restaurants:{type:Array,required:!0}},mixins:[u["b"]]},m=d,l=(a("3f1a"),a("2877")),v=Object(l["a"])(m,c,o,!1,null,"7989d604",null),_=v.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("最新評論")]),a("div",{staticClass:"card-body"},t._l(t.comments,(function(e){return a("div",{key:e.id},[a("h4",[a("router-link",{attrs:{to:{name:"restaurant-show",params:{id:e.Restaurant.id}}}},[t._v(" "+t._s(e.Restaurant.name)+" ")])],1),a("p",[t._v(t._s(e.text))]),t._v(" by "),a("router-link",{attrs:{to:{name:"user",params:{id:e.UserId}}}},[t._v(" "+t._s(e.User.name)+" ")]),t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" "),a("hr")],1)})),0)])},f=[],h={name:"NewestComments",props:{comments:{type:Array,required:!0}},mixins:[u["b"]]},w=h,b=Object(l["a"])(w,p,f,!1,null,null,null),C=b.exports,y=a("2375"),g=a("c4c3"),k=a("2fa3"),N={name:"RestaurantsFeeds",components:{NavTabs:i["a"],NewestRestaurants:_,NewestComments:C,Spinner:y["a"]},data:function(){return{restaurants:[],comments:[],isLoading:!0}},methods:{fetchFeeds:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isLoading=!0,e.next=4,g["a"].getFeeds();case 4:a=e.sent,t.restaurants=a.data.restaurants,t.comments=a.data.comments,t.isLoading=!1,e.next=15;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0),t.isLoading=!1,k["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},created:function(){this.fetchFeeds()}},x=N,R=Object(l["a"])(x,s,r,!1,null,null,null);e["default"]=R.exports}}]);
//# sourceMappingURL=chunk-b9a3d18a.b4116e8e.js.map