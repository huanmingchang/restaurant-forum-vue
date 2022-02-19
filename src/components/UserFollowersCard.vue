<template>
  <div class="card">
    <div class="card-header">
      <strong>
        {{ userProfile.Followers ? userProfile.Followers.length : '0' }}</strong
      >
      followers (追隨者)
    </div>
    <div
      v-for="follower in userProfile.Followers"
      :key="follower.id"
      class="card-body"
    >
      <router-link :to="{ name: 'user', params: { id: follower.id } }">
        <img :src="follower.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFollowersCard',
  props: {
    initialUserProfile: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      userProfile: this.initialUserProfile,
    }
  },
  watch: {
    initialUserProfile: {
      handler: function (newValue) {
        this.userProfile = {
          ...this.userProfile,
          ...newValue,
        }
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>
