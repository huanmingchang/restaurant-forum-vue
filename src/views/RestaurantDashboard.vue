<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <div>
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>

      <hr />

      <ul>
        <li>評論數： {{ restaurant.commentsLength }}</li>
        <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
      </ul>

      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
    </template>
  </div>
</template>

<script>
import Spinner from './../components/Spinner'
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'

export default {
  name: 'RestaurantDashboard',
  components: {
    Spinner,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: -1,
        viewCounts: -1,
      },
      isLoading: true,
    }
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        this.isLoading = true

        const { data } = await restaurantsAPI.getRestaurantShow({
          restaurantId,
        })
        console.log(data)
        this.restaurant.id = data.restaurant.id
        this.restaurant.name = data.restaurant.name
        this.restaurant.categoryName = data.restaurant.Category
          ? data.restaurant.Category.name
          : '未分類'
        this.restaurant.commentsLength = data.restaurant.Comments.length
        this.restaurant.viewCounts = data.restaurant.viewCounts

        this.isLoading = false
      } catch (error) {
        console.log(error)
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試',
        })
      }
    },
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
}
</script>
