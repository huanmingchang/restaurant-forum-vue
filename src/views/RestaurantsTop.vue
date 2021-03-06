<template>
  <div class="container py-5">
    <NavTabs />

    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">人氣餐廳</h1>

      <hr />
      <div
        class="card mb-3"
        style="max-width: 540px; margin: auto"
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <router-link
              :to="{ name: 'restaurant-show', params: { id: restaurant.id } }"
            >
              <img class="card-img" :src="restaurant.image" />
            </router-link>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ restaurant.name }}</h5>
              <span class="badge badge-secondary"
                >收藏數：{{ restaurant.FavoriteCount }}</span
              >
              <p class="card-text">
                {{ restaurant.description }}
              </p>
              <a href="#" class="btn btn-primary mr-2">Show</a>

              <button
                v-if="restaurant.isFavorited"
                type="button"
                class="btn btn-danger mr-2"
                :disabled="isProcessing"
                @click.prevent.stop="deleteFavorite(restaurant.id)"
              >
                移除最愛
              </button>
              <button
                v-else
                type="button"
                class="btn btn-primary"
                :disabled="isProcessing"
                @click.prevent.stop="addFavorite(restaurant.id)"
              >
                加到最愛
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import Spinner from './../components/Spinner'
import restaurantsAPI from './../apis/restaurants'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'RestaurantsTop',
  components: {
    NavTabs,
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      isLoading: true,
      isProcessing: false,
    }
  },
  methods: {
    async fetchRestaurants() {
      try {
        this.isLoading = true

        const { data } = await restaurantsAPI.getTopRestaurants()
        this.restaurants = data.restaurants

        this.isLoading = false
      } catch (error) {
        console.log(error)
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得人氣餐廳資料，請稍後再試',
        })
      }
    },
    async addFavorite(restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.addFavorite({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id !== restaurantId) {
            return restaurant
          } else {
            return {
              ...restaurant,
              isFavorited: true,
              FavoriteCount: restaurant.FavoriteCount + 1,
            }
          }
        })

        this.isProcessing = false
      } catch (error) {
        console.log(error)
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍後再試',
        })
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        this.isProcessing = true

        const { data } = await usersAPI.deleteFavorite({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id !== restaurantId) {
            return restaurant
          } else {
            return {
              ...restaurant,
              isFavorited: false,
              FavoriteCount: restaurant.FavoriteCount - 1,
            }
          }
        })

        this.isProcessing = false
      } catch (error) {
        console.log(error)
        this.isProcessing = false

        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除最愛，請稍後再試',
        })
      }
    },
  },
  created() {
    this.fetchRestaurants()
  },
}
</script>
