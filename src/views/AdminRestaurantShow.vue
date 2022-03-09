<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <div v-else class="row">
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="restaurant.image | emptyImage"
          style="width: 250px; margin-bottom: 25px"
        />
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{ restaurant.openingHours }}
            </li>
            <li>
              <strong>Tel:</strong>
              {{ restaurant.tel }}
            </li>
            <li>
              <strong>Address:</strong>
              {{ restaurant.address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr />
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import Spinner from './../components/Spinner'
import { emptyImageFilter } from './../utils/mixins'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  name: 'AdminRestaurantShow',
  mixins: [emptyImageFilter],
  components: {
    Spinner,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
      },
      isLoading: true,
    }
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        this.isLoading = true
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId })

        this.restaurant.id = data.restaurant.id
        this.restaurant.name = data.restaurant.name
        this.restaurant.categoryName = data.restaurant.Category.name
        this.restaurant.image = data.restaurant.image
        this.restaurant.openingHours = data.restaurant.opening_hours
        this.restaurant.tel = data.restaurant.tel
        this.restaurant.address = data.restaurant.address
        this.restaurant.description = data.restaurant.description

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
  mounted() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
}
</script>
