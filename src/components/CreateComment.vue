<template>
  <form @submit.prevent.stop="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
// import { v4 as uuidv4 } from 'uuid'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'CreateComment',
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      text: '',
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const { data } = await usersAPI.createComment({
          restaurantId: this.restaurantId,
          text: this.text,
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        const { commentId } = data

        this.$emit('after-create-comment', {
          commentId,
          restaurantId: this.restaurantId,
          text: this.text,
        })

        this.text = ''
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法新增評論，請稍後再試',
        })
      }
    },
  },
}
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>
