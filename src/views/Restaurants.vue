<template>
  <div class="container py-5">
    <NavTabs />

    <!-- RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />
    <!-- RestaurantCard -->
    <div class="row">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- RestaurantsPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from './../components/RestaurantsNavPills'
import RestaurantsPagination from './../components/RestaurantsPagination'
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      // 預設值
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    }
  },
  methods: {
    async fetchRestaurants({ page, categoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: page,
          categoryId: categoryId,
        })
        this.restaurants = response.data.restaurants
        this.categories = response.data.categories
        this.categoryId = response.data.categoryId
        this.currentPage = response.data.page
        this.totalPage = response.data.totalPage
        this.previousPage = response.data.prev
        this.nextPage = response.data.next
      } catch (error) {
        console.log('error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試',
        })
      }
    },
  },
  created() {
    this.fetchRestaurants({
      page: 1,
      categoryId: '',
    })
  },
}
</script>
