<template>
  <div class="card">
    <div class="card-header">
      <strong>
        {{ userProfile.Comments ? userProfile.Comments.length : '0' }}</strong
      >
      已評論餐廳
    </div>
    <div class="card-body">
      <router-link
        :to="{ name: 'restaurant-show', params: { id: comment.Restaurant.id } }"
        v-for="comment in userProfile.Comments"
        :key="comment.id"
      >
        <img
          :src="comment.Restaurant.image"
          width="60"
          height="60"
          class="avatar"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCommentsCard',
  props: {
    userProfile: {
      type: Object,
      required: true,
    },
  },
}
</script>
