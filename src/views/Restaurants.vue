<template>
  <div class="container py-5">
    <NavTabs />

    <!-- RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />
    <!-- RestaurantCard -->
    <div class="row">
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- RestaurantsPagination -->
    <RestaurantsPagination
      :category-id="categoryId"
      :current-page="currentPage"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from './../components/RestaurantsNavPills'
import RestaurantsPagination from './../components/RestaurantsPagination'

// 模擬 API 傳回來的資料
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: 'Kale Herzog',
      tel: '402.373.6546',
      address: '666 Lukas Bridge',
      opening_hours: '08:00',
      description: 'Deleniti magni incidunt culpa veniam nihil aperiam',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=19.598578498989916',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: 'Xavier Smith',
      tel: '357-446-8635',
      address: '1021 Howard Roads',
      opening_hours: '08:00',
      description: 'quidem',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=56.01820171699876',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: 'Cali Dickens',
      tel: '125.822.7887 x12861',
      address: '18215 Eli Pines',
      opening_hours: '08:00',
      description: 'Ratione maxime expedita mollitia. Itaque officiis ',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=20.554857751973454',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: 'Lesley Pfannerstill',
      tel: '846.700.0023 x7434',
      address: '730 Schaefer Square',
      opening_hours: '08:00',
      description: 'Eius sint ex alias quia ut sapiente in. Ut facilis',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=15.170227997402197',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 2,
      Category: {
        id: 2,
        name: '日本料理',
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: 'Tressa Leannon',
      tel: '832-025-1415',
      address: '472 Brekke Bypass',
      opening_hours: '08:00',
      description: 'quia doloremque animi',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=65.34403412684439',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: 'Alize Brown',
      tel: '1-262-936-8711',
      address: '53261 Krajcik Prairie',
      opening_hours: '08:00',
      description: 'ut quis non',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=26.972319570941107',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 3,
      Category: {
        id: 3,
        name: '義大利料理',
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: 'Robert McGlynn DDS',
      tel: '1-048-129-6801',
      address: '7443 Cassin Point',
      opening_hours: '08:00',
      description: 'Eveniet aspernatur adipisci quo sequi nobis tenetu',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=18.776859336593322',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 4,
      Category: {
        id: 4,
        name: '墨西哥料理',
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: 'Olga Kautzer',
      tel: '1-208-778-5652',
      address: '38328 Wiegand Pass',
      opening_hours: '08:00',
      description: 'totam consequatur id',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=77.94049186664405',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 1,
      Category: {
        id: 1,
        name: '中式料理',
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: 'Ms. Brent Sauer',
      tel: '677-505-0645 x973',
      address: '495 Miller Union',
      opening_hours: '08:00',
      description: 'Magnam voluptate odit dolor distinctio et id tempo',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=2.097699238039219',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: 'Giovanni Crist',
      tel: '913-596-4071 x1149',
      address: '135 Herzog Estates',
      opening_hours: '08:00',
      description: 'Sequi facere molestias nihil quod in. Sunt aperiam',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=65.9388478917823',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 5,
      Category: {
        id: 5,
        name: '素食料理',
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: '中式料理',
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
    },
    {
      id: 2,
      name: '日本料理',
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
    },
    {
      id: 3,
      name: '義大利料理',
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
    },
    {
      id: 4,
      name: '墨西哥料理',
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
    },
    {
      id: 5,
      name: '素食料理',
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
    },
    {
      id: 6,
      name: '美式料理',
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
    },
    {
      id: 7,
      name: '複合式料理',
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
    },
  ],
  categoryId: '',
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
}

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data() {
    return {
      // 預設值
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    }
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants
      this.categories = dummyData.categories
      this.categoryId = dummyData.categoryId
      this.currentPage = dummyData.page
      this.totalPage = dummyData.totalPage
      this.previousPage = dummyData.prev
      this.nextPage = dummyData.next
    },
  },
  created() {
    this.fetchRestaurants()
  },
}
</script>
