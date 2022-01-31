<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
// 模擬 API 回傳的資料
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
    updatedAt: '2022-01-29T02:13:10.000Z',
    CategoryId: 5,
    Category: {
      id: 5,
      name: '素食料理',
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
    },
    Comments: [
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
    ],
  },
}
export default {
  name: 'RestaurantDashboard',
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: -1,
        viewCounts: -1,
      },
    }
  },
  methods: {
    fetchRestaurant() {
      this.restaurant.id = dummyData.restaurant.id
      this.restaurant.name = dummyData.restaurant.name
      this.restaurant.categoryName = dummyData.restaurant.Category.name
      this.restaurant.commentsLength = dummyData.restaurant.Comments.length
      this.restaurant.viewCounts = dummyData.restaurant.viewCounts
    },
  },
  created() {
    this.fetchRestaurant()
  },
}
</script>
