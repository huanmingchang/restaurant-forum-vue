<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm'

export default {
  name: 'AdminRestaurantNew',
  components: {
    AdminRestaurantForm,
  },
  methods: {
    handleAfterSubmit(formData) {
      // TODO 透過 API 向後端新增餐廳資料
      for (let [name, value] of formData.entries()) {
        console.log(name + ':' + value)
      }
    },
  },
}
</script>
