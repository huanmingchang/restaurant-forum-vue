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
import { v4 as uuidv4 } from 'uuid'

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
    handleSubmit() {
      // TODO 向 API 發送 POST 需求新增一筆 comment
      // TODO 伺服器新增一筆 comment  之後會回傳 commentId
      this.$emit('after-create-comment', {
        commentId: uuidv4(), // 因為還沒串接 API，所以先給一筆隨機的 id
        restaurantId: this.restaurantId,
        text: this.text,
      })

      this.text = ''
    },
  },
}
</script>
