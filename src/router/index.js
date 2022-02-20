import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'
import store from './../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin',
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/SignUp.vue'),
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants,
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds.vue'),
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-top',
    component: () => import('../views/RestaurantsTop.vue'),
  },
  {
    path: '/restaurants/:id',
    name: 'restaurant-show',
    component: () => import('../views/RestaurantShow.vue'),
  },
  {
    path: '/restaurants/:id/dashboard',
    name: 'restaurant-dashboard',
    component: () => import('../views/RestaurantDashboard.vue'),
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UsersTop.vue'),
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/User.vue'),
  },
  {
    path: '/users/:id/edit',
    name: 'user-edit',
    component: () => import('../views/UserEdit.vue'),
  },
  {
    path: '/admin',
    exact: true,
    redirect: '/admin/restaurants/',
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants.vue'),
  },
  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurant-new',
    component: () => import('../views/AdminRestaurantNew.vue'),
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit.vue'),
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant-show',
    component: () => import('../views/AdminRestaurantShow.vue'),
  },
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue'),
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue'),
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes,
})

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')

  let isAuthenticated = false

  // 如果有 token 才向後端驗證
  if (token) {
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  const pathWithoutAuthentication = ['sign-in', 'sign-up']

  // 如果驗證不通過，則轉址到 sign-in 頁面
  if (!isAuthenticated && !pathWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }

  // 如果驗證通過，則轉址到 restaurants 頁面
  if (isAuthenticated && pathWithoutAuthentication.includes(to.name)) {
    next('/restaurants')
    return
  }
  next()
})

export default router
