<template>
  <div class="card">
    <div class="card-header">
      <strong>{{
        userProfile.FavoritedRestaurants
          ? userProfile.FavoritedRestaurants.length
          : '0'
      }}</strong>
      收藏的餐廳
    </div>
    <div class="card-body">
      <router-link
        :to="{ name: 'restaurant-show', params: { id: restaurant.id } }"
        v-for="restaurant in userProfile.FavoritedRestaurants"
        :key="restaurant.id"
      >
        <img :src="restaurant.image" width="60" height="60" class="avatar" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFavoritedRestaurantsCard',
  props: {
    userProfile: {
      type: Object,
      required: true,
    },
  },
}
</script>
