(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e422f0c"],{"045e":function(t,e,r){"use strict";r("bbcd")},"3dec":function(t,e,r){"use strict";r("beb9")},"3ec6":function(t,e,r){"use strict";r("66ef")},"66ef":function(t,e,r){},bbcd:function(t,e,r){},be6c:function(t,e,r){"use strict";r("b0c0");var a=r("2fa3");e["a"]={categories:{get:function(){return a["b"].get("/admin/categories")},create:function(t){var e=t.name;return a["b"].post("/admin/categories",{name:e})},delete:function(t){var e=t.categoryId;return a["b"].delete("/admin/categories/".concat(e))},update:function(t){var e=t.categoryId,r=t.name;return a["b"].put("/admin/categories/".concat(e),{categoryId:e,name:r})}},restaurants:{create:function(t){var e=t.formData;return a["b"].post("/admin/restaurants",e)},getDetail:function(t){var e=t.restaurantId;return a["b"].get("/admin/restaurants/".concat(e))},get:function(){return a["b"].get("/admin/restaurants")},delete:function(t){var e=t.restaurantId;return a["b"].delete("/admin/restaurants/".concat(e))},update:function(t){var e=t.restaurantId,r=t.formData;return a["b"].put("/admin/restaurants/".concat(e),r)}},comments:{delete:function(t){var e=t.commentId;return a["b"].delete("/comments/".concat(e))}},users:{get:function(){return a["b"].get("/admin/users")},update:function(t){var e=t.userId,r=t.isAdmin;return a["b"].put("/admin/users/".concat(e),{isAdmin:r})}}}},beb9:function(t,e,r){},d1f7:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[t.isLoading?r("Spinner"):[r("RestaurantDetail",{attrs:{"initial-restaurant":t.restaurant}}),r("hr"),r("RestaurantComments",{attrs:{"restaurant-comments":t.restaurantComments},on:{"after-delete-comment":t.afterDeleteComment}}),r("CreateComment",{attrs:{"restaurant-id":t.restaurant.id},on:{"after-create-comment":t.afterCreateComment}})]],2)},n=[],s=r("5530"),i=r("1da1"),o=(r("96cf"),r("b0c0"),r("a4d3"),r("e01a"),r("d9e2"),r("4de4"),r("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-3"},[r("h1",[t._v(t._s(t.restaurant.name))]),r("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),r("div",{staticClass:"col-lg-4"},[r("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t.restaurant.image}}),r("div",{staticClass:"contact-info-wrap"},[r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),r("li",[r("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),r("li",[r("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),r("div",{staticClass:"col-lg-8"},[r("p",[t._v(t._s(t.restaurant.description))]),r("router-link",{staticClass:"btn btn-primary btn-border mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:t.restaurant.id}}}},[t._v("Dashboard")]),t.restaurant.isFavorited?r("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return t.deleteFavorite(t.restaurant.id)}}},[t._v(" 移除最愛 ")]):r("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return t.addFavorite(t.restaurant.id)}}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?r("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return t.deleteLike(t.restaurant.id)}}},[t._v(" Unlike ")]):r("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return t.addLike(t.restaurant.id)}}},[t._v(" Like ")])],1)])}),c=[],u=r("4cce"),d=r("2fa3"),m={name:"RestaurantDetail",props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant,isProcessing:!1}},watch:{initialRestaurant:function(t){this.restaurant=Object(s["a"])(Object(s["a"])({},this.restaurant),t)}},methods:{addFavorite:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isProcessing=!0,r.next=4,u["a"].addFavorite({restaurantId:t});case 4:if(a=r.sent,n=a.data,"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:e.restaurant=Object(s["a"])(Object(s["a"])({},e.restaurant),{},{isFavorited:!0}),e.isProcessing=!1,r.next=17;break;case 12:r.prev=12,r.t0=r["catch"](0),console.log(r.t0),e.isProcessing=!1,d["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"});case 17:case"end":return r.stop()}}),r,null,[[0,12]])})))()},deleteFavorite:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isProcessing=!0,r.next=4,u["a"].deleteFavorite({restaurantId:t});case 4:if(a=r.sent,n=a.data,"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:e.restaurant=Object(s["a"])(Object(s["a"])({},e.restaurant),{},{isFavorited:!1}),e.isProcessing=!1,r.next=17;break;case 12:r.prev=12,r.t0=r["catch"](0),console.log(r.t0),e.isProcessing=!1,d["a"].fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"});case 17:case"end":return r.stop()}}),r,null,[[0,12]])})))()},addLike:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isProcessing=!0,r.next=4,u["a"].addLike({restaurantId:t});case 4:if(a=r.sent,n=a.data,"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:e.restaurant=Object(s["a"])(Object(s["a"])({},e.restaurant),{},{isLiked:!0}),e.isProcessing=!1,r.next=17;break;case 12:r.prev=12,r.t0=r["catch"](0),console.log(r.t0),e.isProcessing=!1,d["a"].fire({icon:"error",title:"無法按讚此餐廳，請稍後再試"});case 17:case"end":return r.stop()}}),r,null,[[0,12]])})))()},deleteLike:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isProcessing=!0,r.next=4,u["a"].deleteLike({restaurantId:t});case 4:if(a=r.sent,n=a.data,"success"===n.status){r.next=8;break}throw new Error(n.message);case 8:e.restaurant=Object(s["a"])(Object(s["a"])({},e.restaurant),{},{isLiked:!1}),e.isProcessing=!1,r.next=17;break;case 12:r.prev=12,r.t0=r["catch"](0),console.log(r.t0),e.isProcessing=!1,d["a"].fire({icon:"error",title:"無法取消按讚此餐廳，請稍後再試"});case 17:case"end":return r.stop()}}),r,null,[[0,12]])})))()}}},l=m,b=(r("3ec6"),r("2877")),f=Object(b["a"])(l,o,c,!1,null,"2de6efdb",null),p=f.exports,v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"my-4"},[t._v("所有評論：")]),t._l(t.restaurantComments,(function(e){return r("div",{key:e.id},[r("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?r("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.handleDeleteButtonClick(e.id)}}},[t._v(" Delete ")]):t._e(),r("h3",[r("router-link",{attrs:{to:{name:"user",params:{id:e.UserId}}}},[t._v(" "+t._s(e.User.name)+" ")])],1),r("p",[t._v(t._s(e.text))]),r("footer",{staticClass:"blockquote-footer"},[t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" ")])]),r("hr")])}))],2)},g=[],h=r("2708"),k={currentUser:{id:1,name:"管理者",email:"root@example.com",image:"https://i.pravatar.cc/300",isAdmin:!0},isAuthenticated:!0},x={name:"RestaurantComments",props:{restaurantComments:{type:Array,required:!0}},data:function(){return{currentUser:k.currentUser}},methods:{handleDeleteButtonClick:function(t){this.$emit("after-delete-comment",t)}},mixins:[h["b"]]},C=x,w=(r("045e"),Object(b["a"])(C,v,g,!1,null,"359260d1",null)),_=w.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group mb-4"},[r("label",{attrs:{for:"text"}},[t._v("留下評論：")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",{staticClass:"d-flex align-items-center justify-content-between"},[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")]),r("button",{staticClass:"btn btn-primary mr-0",attrs:{type:"submit"}},[t._v("Submit")])])])},R=[],O=(r("a9e3"),{name:"CreateComment",props:{restaurantId:{type:Number,required:!0}},data:function(){return{text:""}},methods:{handleSubmit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].createComment({restaurantId:t.restaurantId,text:t.text});case 3:if(r=e.sent,a=r.data,"success"===a.status){e.next=7;break}throw new Error(a.message);case 7:n=a.commentId,t.$emit("after-create-comment",{commentId:n,restaurantId:t.restaurantId,text:t.text}),t.text="",e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log(e.t0),d["a"].fire({icon:"error",title:"無法新增評論，請稍後再試"});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))()}}}),j=O,I=(r("3dec"),Object(b["a"])(j,y,R,!1,null,"7dc4bde9",null)),P=I.exports,L=r("2375"),D=r("c4c3"),S=r("be6c"),F=r("2f62"),U={name:"RestaurantShow",components:{RestaurantDetail:p,RestaurantComments:_,CreateComment:P,Spinner:L["a"]},data:function(){return{restaurant:{id:-1,name:"",categoryName:"",image:"",openingHours:"",tel:"",address:"",description:"",isFavorited:!1,isLiked:!1},restaurantComments:[],isLoading:!0}},beforeRouteUpdate:function(t,e,r){var a=t.params.id;this.fetchRestaurant(a),r()},methods:{fetchRestaurant:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.isLoading=!0,r.next=4,D["a"].getRestaurantShow({restaurantId:t});case 4:a=r.sent,n=a.data,e.restaurant={id:n.restaurant.id,name:n.restaurant.name,categoryName:n.restaurant.Category?n.restaurant.Category.name:"未分類",image:n.restaurant.image,openingHours:n.restaurant.opening_hours,tel:n.restaurant.tel,address:n.restaurant.address,description:n.restaurant.description,isFavorited:n.isFavorited,isLiked:n.isLiked},e.restaurantComments=n.restaurant.Comments,e.isLoading=!1,r.next=16;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log(r.t0),e.isLoading=!1,d["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 16:case"end":return r.stop()}}),r,null,[[0,11]])})))()},afterDeleteComment:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,S["a"].comments.delete({commentId:t});case 3:if(a=r.sent,n=a.data,"success"===n.status){r.next=7;break}throw new Error(n.message);case 7:e.restaurantComments=e.restaurantComments.filter((function(e){return e.id!==t})),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log(r.t0),d["a"].fire({icon:"error",title:"無法刪除評論，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()},afterCreateComment:function(t){var e=t.commentId,r=t.restaurantId,a=t.text;this.restaurantComments.push({id:e,RestaurantId:r,text:a,createdAt:new Date,User:{id:this.currentUser.id,name:this.currentUser.name}})}},computed:Object(s["a"])({},Object(F["b"])(["currentUser"])),created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)}},E=U,$=Object(b["a"])(E,a,n,!1,null,null,null);e["default"]=$.exports},e01a:function(t,e,r){"use strict";var a=r("23e7"),n=r("83ab"),s=r("da84"),i=r("e330"),o=r("1a2d"),c=r("1626"),u=r("3a9b"),d=r("577e"),m=r("9bf2").f,l=r("e893"),b=s.Symbol,f=b&&b.prototype;if(n&&c(b)&&(!("description"in f)||void 0!==b().description)){var p={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:d(arguments[0]),e=u(f,this)?new b(t):void 0===t?b():b(t);return""===t&&(p[e]=!0),e};l(v,b),v.prototype=f,f.constructor=v;var g="Symbol(test)"==String(b("test")),h=i(f.toString),k=i(f.valueOf),x=/^Symbol\((.*)\)[^)]+$/,C=i("".replace),w=i("".slice);m(f,"description",{configurable:!0,get:function(){var t=k(this),e=h(t);if(o(p,t))return"";var r=g?w(e,7,-1):C(e,x,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:v})}}}]);
//# sourceMappingURL=chunk-2e422f0c.223d13d5.js.map