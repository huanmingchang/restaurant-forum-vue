<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <!-- TODO 加入使用者的路由 -->
        <router-link to="">
          <img :src="user.image" width="140px" height="140px" />
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.FollowerCount }}</span
        >
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click="unfollowUser(user)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click="followUser(user)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'UsersTop',
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    }
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await usersAPI.getTopUsers()
        this.users = data.users
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得美食達人，請稍後再試',
        })
      }
    },
    followUser(user) {
      this.users.map((_user) => {
        if (_user.id === user.id) {
          user.isFollowed = true
          user.FollowerCount += 1
        }
      })
    },
    unfollowUser(user) {
      this.users.map((_user) => {
        if (_user.id === user.id) {
          user.isFollowed = false
          user.FollowerCount -= 1
        }
      })
    },
  },
  created() {
    this.fetchUsers()
  },
}
</script>
