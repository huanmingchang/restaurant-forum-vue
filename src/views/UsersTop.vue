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

// 模擬 API 回傳的資料
const dummyData = {
  users: [
    {
      id: 1,
      name: 'root',
      email: 'root@example.com',
      password: '$2a$10$mRfDsi1GCUPZZAQkMJK9T.M.KsjvYerdqTdAU6ASllfdjmpSmlPIG',
      isAdmin: true,
      image: null,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$u7xWhmmIFuBqvBkVUar8G.h2R4RsV9vFIyHhTYzUhnmuL4b7vZKiy',
      isAdmin: false,
      image: null,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      password: '$2a$10$4Ie9Vnx3hAyT3m7OvhXaAeYxMjXDlLFUKScopJA8Tv1TyK9HS2aV.',
      isAdmin: false,
      image: null,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
}

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
    fetchUsers() {
      this.users = dummyData.users
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
