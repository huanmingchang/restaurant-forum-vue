<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail.vue'
import RestaurantComments from './../components/RestaurantComments'
import CreateComment from './../components/CreateComment'

// 模擬 API 傳回的資料
const dummyData = {
  restaurant: {
    id: 1,
    name: 'Kale Herzog',
    tel: '402.373.6546',
    address: '666 Lukas Bridge',
    opening_hours: '08:00',
    description:
      'Deleniti magni incidunt culpa veniam nihil aperiam architecto sed eveniet. Dolore veritatis quos ut aut sit eaque voluptatibus velit. Sunt sed autem sapiente quas harum consequatur consequatur. Pariatur qui quibusdam impedit incidunt porro voluptatum nulla culpa. Inventore perspiciatis dolores est. Ut facere blanditiis dolor iste animi eos.',
    image:
      'https://loremflickr.com/320/240/restaurant,food/?random=19.598578498989916',
    viewCounts: 1,
    createdAt: '2022-01-26T13:54:41.000Z',
    updatedAt: '2022-01-29T02:13:10.862Z',
    CategoryId: 5,
    Category: {
      id: 5,
      name: '素食料理',
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 101,
        text: 'Illum ut officia maiores.',
        UserId: 3,
        RestaurantId: 1,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        User: {
          id: 3,
          name: 'user2',
          email: 'user2@example.com',
          password:
            '$2a$10$4Ie9Vnx3hAyT3m7OvhXaAeYxMjXDlLFUKScopJA8Tv1TyK9HS2aV.',
          isAdmin: false,
          image: null,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
        },
      },
      {
        id: 51,
        text: 'Maxime repudiandae voluptatem quia.',
        UserId: 3,
        RestaurantId: 1,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        User: {
          id: 3,
          name: 'user2',
          email: 'user2@example.com',
          password:
            '$2a$10$4Ie9Vnx3hAyT3m7OvhXaAeYxMjXDlLFUKScopJA8Tv1TyK9HS2aV.',
          isAdmin: false,
          image: null,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
        },
      },
      {
        id: 1,
        text: 'Dolorem aliquam ea voluptates impedit eos.',
        UserId: 3,
        RestaurantId: 1,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        User: {
          id: 3,
          name: 'user2',
          email: 'user2@example.com',
          password:
            '$2a$10$4Ie9Vnx3hAyT3m7OvhXaAeYxMjXDlLFUKScopJA8Tv1TyK9HS2aV.',
          isAdmin: false,
          image: null,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
}

// 向後端取得現在登入使用者的資料
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
  name: 'RestaurantShow',
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser,
    }
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log(restaurantId)

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name
          ? dummyData.restaurant.Category.name
          : '未分類',
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked,
      }

      this.restaurantComments = dummyData.restaurant.Comments
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      )
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        text: text,
        createdAt: new Date(),
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
      })
    },
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
}
</script>
