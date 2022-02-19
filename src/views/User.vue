<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <!-- user profile card -->
      <UserProfileCard
        :userProfile="userProfile"
        :currentUser="currentUser"
        @add-following="handleAddFollowing"
        @delete-following="handleDeleteFollowing"
      />
      <div class="row">
        <div class="col-md-4">
          <!-- user followings card -->
          <UserFollowingsCard :userProfile="userProfile" />
          <br />
          <!-- user followers card -->
          <UserFollowersCard :userProfile="userProfile" />
        </div>

        <div class="col-md-8">
          <!-- user comments cards -->
          <UserCommentsCard :userProfile="userProfile" />
          <br />
          <!-- user favorited restaurants -->
          <UserFavoritedRestaurantsCard :userProfile="userProfile" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from './../components/UserProfileCard'
import UserFollowingsCard from './../components/UserFollowingsCard'
import UserFollowersCard from './../components/UserFollowersCard'
import UserCommentsCard from './../components/UserCommentsCard'
import UserFavoritedRestaurantsCard from './../components/UserFavoritedRestaurantsCard'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

// 模擬 API 回傳資料
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true,
  },
  isAuthenticated: true,
}

export default {
  name: 'User',
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data() {
    return {
      userProfile: {},
      currentUser: {},
    }
  },
  methods: {
    async fetchUserProfile(userId) {
      try {
        const { data } = await usersAPI.get({
          userId,
        })

        this.userProfile = {
          ...data.profile,
          isFollowed: data.isFollowed,
        }
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試',
        })
      }
    },
    fetchCurrentUser() {
      this.currentUser = dummyUser.currentUser
    },
    handleAddFollowing() {
      // TODO 向伺服器更新資料
      this.userProfile = {
        ...this.userProfile,
        isFollowed: true,
      }
      this.userProfile.Followings.push(this.currentUser)
    },
    handleDeleteFollowing() {
      // TODO 向伺服器更新資料
      this.userProfile = {
        ...this.userProfile,
        isFollowed: false,
      }
      this.userProfile = {
        ...this.userProfile,
        Followings: this.userProfile.Followings.filter(
          (user) => user.id !== this.currentUser.id
        ),
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchUserProfile(id)
    next()
  },
  created() {
    const { id } = this.$route.params
    this.fetchUserProfile(id)
    this.fetchCurrentUser()
  },
}
</script>
