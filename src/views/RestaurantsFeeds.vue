<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import NewestRestaurants from './../components/NewestRestaurants'

// 模擬 API 回傳的資料
const dummyData = {
  restaurants: [
    {
      id: 1,
      name: 'Kale Herzog',
      tel: '402.373.6546',
      address: '666 Lukas Bridge',
      opening_hours: '08:00',
      description:
        'Deleniti magni incidunt culpa veniam nihil aperiam architecto sed eveniet. Dolore veritatis quos ut aut sit eaque voluptatibus velit. Sunt sed autem sapiente quas harum consequatur consequatur. Pariatur qui quibusdam impedit incidunt porro voluptatum nulla culpa. Inventore perspiciatis dolores est. Ut facere blanditiis dolor iste animi eos.',
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
    },
    {
      id: 3,
      name: 'Cali Dickens',
      tel: '125.822.7887 x12861',
      address: '18215 Eli Pines',
      opening_hours: '08:00',
      description:
        'Ratione maxime expedita mollitia. Itaque officiis itaque nobis perferendis ratione debitis quia. Neque aspernatur quo aut nemo voluptatem iusto quidem.\n \rLaboriosam aliquam mollitia ut at. Dicta quia soluta alias. Quia molestiae rerum dolores vitae magni explicabo quas. Laudantium fuga omnis eos mollitia ducimus.\n \rVoluptas quas ut non quod et ut aliquid sit. Quaerat error voluptatem dolores. Et est consequatur. Dolorem et et assumenda sint quas natus quo quisquam. Ut consequuntur eum aliquam quisquam architecto minus autem. Sunt eius eos iure quisquam ad.',
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
    },
    {
      id: 4,
      name: 'Lesley Pfannerstill',
      tel: '846.700.0023 x7434',
      address: '730 Schaefer Square',
      opening_hours: '08:00',
      description:
        'Eius sint ex alias quia ut sapiente in. Ut facilis totam fuga quo. Doloremque rerum sed culpa. Quasi ullam magnam quia. Asperiores eligendi similique recusandae iure sequi repellat autem.\n \rExcepturi eveniet ipsa eos mollitia omnis. Dicta in quasi molestiae sit error enim ea possimus molestiae. Repudiandae aspernatur rerum officiis molestiae et enim et. Qui optio nostrum aut.\n \rVoluptas a laboriosam reprehenderit autem dolore assumenda impedit nulla ea. Maiores voluptate fuga rerum qui magni doloribus et aspernatur officia. Inventore odit aliquid similique ut rerum. Veniam tempora qui enim tempore ullam in et. Et illum voluptatem et dolore commodi qui aliquam quas voluptatem.',
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
    },
    {
      id: 7,
      name: 'Robert McGlynn DDS',
      tel: '1-048-129-6801',
      address: '7443 Cassin Point',
      opening_hours: '08:00',
      description:
        'Eveniet aspernatur adipisci quo sequi nobis tenetur esse non. Iure sint aut et voluptatum odio fugit temporibus perferendis.',
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
    },
    {
      id: 9,
      name: 'Ms. Brent Sauer',
      tel: '677-505-0645 x973',
      address: '495 Miller Union',
      opening_hours: '08:00',
      description:
        'Magnam voluptate odit dolor distinctio et id tempore.\nIllum in voluptatem et sit.',
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
    },
    {
      id: 10,
      name: 'Giovanni Crist',
      tel: '913-596-4071 x1149',
      address: '135 Herzog Estates',
      opening_hours: '08:00',
      description:
        'Sequi facere molestias nihil quod in. Sunt aperiam nemo et eligendi tempora deserunt. Sequi dicta nulla ipsa. Dolorum adipisci et libero quos eum ut beatae beatae expedita. Est alias dolorem necessitatibus.\n \rSed incidunt eum quibusdam aut nemo odio minus officiis. Temporibus sunt pariatur qui quidem enim. Repellat quia magni. Quisquam illo voluptatem perspiciatis. Error facere fuga molestiae impedit. Ea mollitia vero facilis provident laudantium sit voluptatem optio.\n \rOmnis error quis quia. Esse autem quo ut qui id. Illo maiores eos enim fugit tempore eaque. Ipsam assumenda est nam illum. Expedita consequatur eum labore saepe corporis praesentium maiores ullam. Laudantium architecto vel itaque expedita consequuntur nihil expedita excepturi.',
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
    },
  ],
  comments: [
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
      Restaurant: {
        id: 1,
        name: 'Kale Herzog',
        tel: '402.373.6546',
        address: '666 Lukas Bridge',
        opening_hours: '08:00',
        description:
          'Deleniti magni incidunt culpa veniam nihil aperiam architecto sed eveniet. Dolore veritatis quos ut aut sit eaque voluptatibus velit. Sunt sed autem sapiente quas harum consequatur consequatur. Pariatur qui quibusdam impedit incidunt porro voluptatum nulla culpa. Inventore perspiciatis dolores est. Ut facere blanditiis dolor iste animi eos.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=19.598578498989916',
        viewCounts: 0,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        CategoryId: 5,
      },
    },
    {
      id: 2,
      text: 'Et rem fugiat consequuntur expedita eum voluptate sapiente omnis.',
      UserId: 2,
      RestaurantId: 2,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$u7xWhmmIFuBqvBkVUar8G.h2R4RsV9vFIyHhTYzUhnmuL4b7vZKiy',
        isAdmin: false,
        image: null,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      Restaurant: {
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
      },
    },
    {
      id: 3,
      text: 'Dolor odio similique.',
      UserId: 1,
      RestaurantId: 3,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      User: {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$mRfDsi1GCUPZZAQkMJK9T.M.KsjvYerdqTdAU6ASllfdjmpSmlPIG',
        isAdmin: true,
        image: null,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      Restaurant: {
        id: 3,
        name: 'Cali Dickens',
        tel: '125.822.7887 x12861',
        address: '18215 Eli Pines',
        opening_hours: '08:00',
        description:
          'Ratione maxime expedita mollitia. Itaque officiis itaque nobis perferendis ratione debitis quia. Neque aspernatur quo aut nemo voluptatem iusto quidem.\n \rLaboriosam aliquam mollitia ut at. Dicta quia soluta alias. Quia molestiae rerum dolores vitae magni explicabo quas. Laudantium fuga omnis eos mollitia ducimus.\n \rVoluptas quas ut non quod et ut aliquid sit. Quaerat error voluptatem dolores. Et est consequatur. Dolorem et et assumenda sint quas natus quo quisquam. Ut consequuntur eum aliquam quisquam architecto minus autem. Sunt eius eos iure quisquam ad.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=20.554857751973454',
        viewCounts: 0,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        CategoryId: 5,
      },
    },
    {
      id: 4,
      text: 'Ipsum ut laboriosam esse ex voluptas quasi sed.',
      UserId: 2,
      RestaurantId: 4,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$u7xWhmmIFuBqvBkVUar8G.h2R4RsV9vFIyHhTYzUhnmuL4b7vZKiy',
        isAdmin: false,
        image: null,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      Restaurant: {
        id: 4,
        name: 'Lesley Pfannerstill',
        tel: '846.700.0023 x7434',
        address: '730 Schaefer Square',
        opening_hours: '08:00',
        description:
          'Eius sint ex alias quia ut sapiente in. Ut facilis totam fuga quo. Doloremque rerum sed culpa. Quasi ullam magnam quia. Asperiores eligendi similique recusandae iure sequi repellat autem.\n \rExcepturi eveniet ipsa eos mollitia omnis. Dicta in quasi molestiae sit error enim ea possimus molestiae. Repudiandae aspernatur rerum officiis molestiae et enim et. Qui optio nostrum aut.\n \rVoluptas a laboriosam reprehenderit autem dolore assumenda impedit nulla ea. Maiores voluptate fuga rerum qui magni doloribus et aspernatur officia. Inventore odit aliquid similique ut rerum. Veniam tempora qui enim tempore ullam in et. Et illum voluptatem et dolore commodi qui aliquam quas voluptatem.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=15.170227997402197',
        viewCounts: 0,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        CategoryId: 2,
      },
    },
    {
      id: 5,
      text: 'Sit enim fugiat debitis.',
      UserId: 2,
      RestaurantId: 5,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$u7xWhmmIFuBqvBkVUar8G.h2R4RsV9vFIyHhTYzUhnmuL4b7vZKiy',
        isAdmin: false,
        image: null,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      Restaurant: {
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
      },
    },
    {
      id: 6,
      text: 'Voluptate perferendis eius ipsum dolore iure rerum omnis commodi est.',
      UserId: 1,
      RestaurantId: 6,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      User: {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$mRfDsi1GCUPZZAQkMJK9T.M.KsjvYerdqTdAU6ASllfdjmpSmlPIG',
        isAdmin: true,
        image: null,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      Restaurant: {
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
      },
    },
    {
      id: 7,
      text: 'Voluptatem placeat perferendis a maxime perspiciatis nisi.',
      UserId: 3,
      RestaurantId: 7,
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
      Restaurant: {
        id: 7,
        name: 'Robert McGlynn DDS',
        tel: '1-048-129-6801',
        address: '7443 Cassin Point',
        opening_hours: '08:00',
        description:
          'Eveniet aspernatur adipisci quo sequi nobis tenetur esse non. Iure sint aut et voluptatum odio fugit temporibus perferendis.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=18.776859336593322',
        viewCounts: 0,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        CategoryId: 4,
      },
    },
    {
      id: 8,
      text: 'Delectus deserunt dolore ut ipsam.',
      UserId: 3,
      RestaurantId: 8,
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
      Restaurant: {
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
      },
    },
    {
      id: 9,
      text: 'Aliquam qui aut dicta dolores.',
      UserId: 2,
      RestaurantId: 9,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      User: {
        id: 2,
        name: 'user1',
        email: 'user1@example.com',
        password:
          '$2a$10$u7xWhmmIFuBqvBkVUar8G.h2R4RsV9vFIyHhTYzUhnmuL4b7vZKiy',
        isAdmin: false,
        image: null,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      Restaurant: {
        id: 9,
        name: 'Ms. Brent Sauer',
        tel: '677-505-0645 x973',
        address: '495 Miller Union',
        opening_hours: '08:00',
        description:
          'Magnam voluptate odit dolor distinctio et id tempore.\nIllum in voluptatem et sit.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=2.097699238039219',
        viewCounts: 0,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        CategoryId: 5,
      },
    },
    {
      id: 10,
      text: 'Vero culpa modi voluptatibus dolores enim laboriosam voluptatem ipsum.',
      UserId: 1,
      RestaurantId: 10,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
      User: {
        id: 1,
        name: 'root',
        email: 'root@example.com',
        password:
          '$2a$10$mRfDsi1GCUPZZAQkMJK9T.M.KsjvYerdqTdAU6ASllfdjmpSmlPIG',
        isAdmin: true,
        image: null,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
      },
      Restaurant: {
        id: 10,
        name: 'Giovanni Crist',
        tel: '913-596-4071 x1149',
        address: '135 Herzog Estates',
        opening_hours: '08:00',
        description:
          'Sequi facere molestias nihil quod in. Sunt aperiam nemo et eligendi tempora deserunt. Sequi dicta nulla ipsa. Dolorum adipisci et libero quos eum ut beatae beatae expedita. Est alias dolorem necessitatibus.\n \rSed incidunt eum quibusdam aut nemo odio minus officiis. Temporibus sunt pariatur qui quidem enim. Repellat quia magni. Quisquam illo voluptatem perspiciatis. Error facere fuga molestiae impedit. Ea mollitia vero facilis provident laudantium sit voluptatem optio.\n \rOmnis error quis quia. Esse autem quo ut qui id. Illo maiores eos enim fugit tempore eaque. Ipsam assumenda est nam illum. Expedita consequatur eum labore saepe corporis praesentium maiores ullam. Laudantium architecto vel itaque expedita consequuntur nihil expedita excepturi.',
        image:
          'https://loremflickr.com/320/240/restaurant,food/?random=65.9388478917823',
        viewCounts: 0,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        CategoryId: 5,
      },
    },
  ],
}

export default {
  name: 'RestaurantsFeeds',
  components: {
    NavTabs,
    NewestRestaurants,
  },
  data() {
    return {
      // 預設資料為空值
      restaurants: [],
      comments: [],
    }
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    },
  },
  created() {
    this.fetchFeeds()
  },
}
</script>
