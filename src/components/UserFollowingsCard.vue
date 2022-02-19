<template>
  <div class="card">
    <div class="card-header">
      <strong>
        {{
          userProfile.Followings ? userProfile.Followings.length : '0'
        }}</strong
      >
      followings (追蹤者)
    </div>
    <div class="card-body">
      <router-link
        v-for="following in userProfile.Followings"
        :key="following.id"
        :to="{ name: 'user', params: { id: following.id } }"
      >
        <img :src="following.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFollowingsCard',
  props: {
    userProfile: {
      type: Object,
      required: true,
    },
  },
}
</script>
