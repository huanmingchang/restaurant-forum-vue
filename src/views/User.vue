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
          <UserFollowingsCard :initial-user-profile="userProfile" />
          <br />
          <!-- user followers card -->
          <UserFollowersCard :initial-user-profile="userProfile" />
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
import { mapState } from 'vuex'

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

    async handleAddFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.userProfile = {
          ...this.userProfile,
          isFollowed: true,
        }
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法追蹤使用者，請稍後再試',
        })
      }
    },
    async handleDeleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.userProfile = {
          ...this.userProfile,
          isFollowed: false,
        }
        this.userProfile = {
          ...this.userProfile,
          Followings: this.userProfile.Followings.filter(
            (user) => user.id !== { ...mapState(['currentUser']) }.id
          ),
        }
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤使用者，請稍後再試',
        })
      }
    },
  },
  computed: {
    ...mapState(['currentUser']),
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchUserProfile(id)
    next()
  },
  created() {
    const { id } = this.$route.params
    this.fetchUserProfile(id)
  },
}
</script>
