<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="image"
          :src="image"
          alt=""
          class="d-block mb-3 img-thumbnail"
          width="300"
          height="300"
        />
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'UserEdit',
  data() {
    return {
      id: -1,
      name: '',
      image: '',
      isProcessing: false,
    }
  },
  computed: {
    ...mapState(['currentUser']),
  },
  watch: {
    currentUser() {
      this.setUser()
    },
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }
    this.setUser()
    next()
  },
  methods: {
    setUser() {
      this.id = this.currentUser.id
      this.name = this.currentUser.name
      this.image = this.currentUser.image
    },
    handleFileChange(e) {
      const { files } = e.target
      if (files.length === 0) {
        this.currentUser.image = ''
        return
      } else {
        this.currentUser.image = window.URL.createObjectURL(files[0])
      }
    },
    async handleSubmit(e) {
      if (!this.name) {
        Toast.fire({
          icon: 'warning',
          title: '請輸入使用者姓名',
        })
      }
      this.isProcessing = true
      const form = e.target
      const formData = new FormData(form)

      try {
        const { data } = await usersAPI.update({ userId: this.id, formData })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$router.push({ name: 'user', params: { id: this.id } })
      } catch (error) {
        console.log(error)
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法修改使用者資料，請稍後再試',
        })
      }
    },
  },
  created() {
    const { id } = this.$route.params

    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }
    this.setUser()
  },
}
</script>
