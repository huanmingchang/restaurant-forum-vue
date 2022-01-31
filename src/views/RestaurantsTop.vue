<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div
      class="card mb-3"
      style="max-width: 540px; margin: auto"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link
            :to="{ name: 'restaurant-show', params: { id: restaurant.id } }"
          >
            <img class="card-img" :src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <span class="badge badge-secondary"
              >收藏數：{{ restaurant.FavoriteCount }}</span
            >
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a href="#" class="btn btn-primary mr-2">Show</a>

            <button
              v-if="restaurant.isFavorited"
              type="button"
              class="btn btn-danger mr-2"
              @click.prevent.stop="deleteFavorite(restaurant)"
            >
              移除最愛
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.prevent.stop="addFavorite(restaurant)"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: 'Edna Gorczany',
      tel: '029-605-1749 x555',
      address: '315 Nadia Burg',
      opening_hours: '08:00',
      description: 'quo',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=62.6546825601594',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: 'Murray Hilpert',
      tel: '033-157-8084',
      address: '3655 Antoinette Hills',
      opening_hours: '08:00',
      description: 'Quasi quis soluta aut deserunt iste incidunt. Reru',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=84.41732178084402',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: 'Rodger Kirlin',
      tel: '005.730.8422 x917',
      address: '283 Kling Bypass',
      opening_hours: '08:00',
      description: 'Et quo itaque corrupti quia eos omnis. Molestiae v',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=85.33989304032919',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: 'Mr. Cordelia Bode',
      tel: '038.994.7527',
      address: '33452 Grant Summit',
      opening_hours: '08:00',
      description: 'Unde nam autem ex iste eos qui ullam quae.',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=76.7786579646064',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: 'Nasir Marks III',
      tel: '(208) 890-5505',
      address: '97045 Ortiz Parks',
      opening_hours: '08:00',
      description: 'aut optio ea',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=77.54348798617836',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: 'Stephen Beatty',
      tel: '1-928-685-8604 x8710',
      address: '4475 Thad Plains',
      opening_hours: '08:00',
      description: 'Provident debitis rerum iusto expedita quasi conse',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=54.98174637199782',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: 'Margarita Stehr',
      tel: '(473) 607-2761',
      address: '3157 Priscilla Gardens',
      opening_hours: '08:00',
      description: 'Ut est eos sit qui ipsa placeat natus. Placeat qua',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=73.30215946262597',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: 'Dr. Garfield Reilly',
      tel: '567-443-7697',
      address: '3619 Becker Lodge',
      opening_hours: '08:00',
      description: 'in mollitia sed',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=12.281101770151048',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: 'Rudy Williamson',
      tel: '913.912.3282',
      address: '5013 Larson Estates',
      opening_hours: '08:00',
      description: 'Minus et dolore omnis temporibus odio. Sequi conse',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=86.69042500470043',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: 'Zechariah Braun',
      tel: '143.936.0201 x019',
      address: '3760 Krystina Park',
      opening_hours: '08:00',
      description: 'Aliquid esse quia vel eos dicta sit. Amet itaque i',
      image:
        'https://loremflickr.com/320/240/restaurant,food/?random=19.201937395358915',
      viewCounts: 0,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
}

export default {
  name: 'RestaurantsTop',
  components: {
    NavTabs,
  },
  data() {
    return {
      restaurants: [],
    }
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants
    },
    addFavorite(restaurant) {
      this.restaurants.map((_restaurant) => {
        if (_restaurant.id === restaurant.id) {
          restaurant.isFavorited = true
          restaurant.FavoriteCount += 1
        }
      })
    },
    deleteFavorite(restaurant) {
      this.restaurants.map((_restaurant) => {
        if (_restaurant.id === restaurant.id) {
          restaurant.isFavorited = false
          restaurant.FavoriteCount -= 1
        }
      })
    },
  },
  created() {
    this.fetchRestaurants()
  },
}
</script>
