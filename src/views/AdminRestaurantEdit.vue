<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm'

// 模擬向 API 請求需要編輯的餐廳資料
const dummyData = {
  restaurant: {
    id: 1,
    name: 'Laurence Reynolds',
    tel: '1-657-067-3756 x9782',
    address: '187 Kirlin Squares',
    opening_hours: '08:00',
    description: 'sit est mollitia',
    image:
      'https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887',
    viewCounts: 1,
    createdAt: '2019-07-30T16:24:55.432Z',
    updatedAt: '2019-07-30T17:26:43.260Z',
    CategoryId: 3,
    Category: {
      id: 3,
      name: '義大利料理',
      createdAt: '2019-07-30T16:24:55.429Z',
      updatedAt: '2019-07-30T16:24:55.429Z',
    },
  },
}

export default {
  name: 'AdminRestaurantEdit',
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: '',
      },
    }
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log(restaurantId)
      const { restaurant } = dummyData
      this.restaurant = {
        ...this.restaurant,
        id: restaurant.id,
        name: restaurant.name,
        categoryId: restaurant.CategoryId,
        tel: restaurant.tel,
        address: restaurant.address,
        description: restaurant.description,
        image: restaurant.image,
        openingHours: restaurant.opening_hours,
      }
    },
    handleAfterSubmit(formData) {
      // TODO 透過 API 向後端更新餐廳資料
      for (let [name, value] of formData.entries()) {
        console.log(name + ':' + value)
      }
    },
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
}
</script>
