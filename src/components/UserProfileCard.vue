<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="userProfile.image" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ userProfile.name }}</h5>
          <p class="card-text">{{ userProfile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong> {{ userProfile.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong> {{ userProfile.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong> {{ userProfile.Followings.length }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong> {{ userProfile.Followers.length }}</strong> followers
              (追隨者)
            </li>
          </ul>
          <p>
            <router-link to="" v-if="userProfile.id === currentUser.id"
              ><button type="submit" class="btn btn-primary mr-2">
                edit
              </button></router-link
            >
            <template v-else>
              <button
                v-if="!userProfile.isFollowed"
                type="submit"
                class="btn btn-primary"
                @click.stop.prevent="addFollowing"
              >
                追蹤
              </button>
              <button
                v-else
                type="submit"
                class="btn btn-danger"
                @click.stop.prevent="deleteFollowing"
              >
                取消追蹤
              </button>
            </template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfileCard',
  props: {
    userProfile: {
      type: Object,
      required: true,
    },
    currentUser: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addFollowing() {
      this.$emit('add-following')
    },
    deleteFollowing() {
      this.$emit('delete-following')
    },
  },
}
</script>
