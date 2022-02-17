<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit" :isProcessing="isProcessing"/>
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  name: 'AdminRestaurantNew',
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      isProcessing: false,
    }
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        const { data } = await adminAPI.restaurants.create({ formData })

        this.isProcessing = true
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$router.push({ name: 'admin-restaurants' })
      } catch (error) {
        console.log(error)
        this.isProcessing = false

        Toast.fire({
          icon: 'error',
          title: '無法新增餐廳，請稍後再試',
        })
      }
    },
  },
}
</script>
