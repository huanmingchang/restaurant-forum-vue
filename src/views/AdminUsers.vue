<template>
  <div class="container py-5">
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'admin' : 'user' }}</td>
          <td>
            <button
              v-if="user.id !== currentUser.id && user.isAdmin"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as user
            </button>
            <button
              v-if="user.id !== currentUser.id && !user.isAdmin"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'

const dummyData = {
  users: [
    {
      id: 1,
      name: 'root',
      email: 'root@example.com',
      password: '$2a$10$mRfDsi1GCUPZZAQkMJK9T.M.KsjvYerdqTdAU6ASllfdjmpSmlPIG',
      isAdmin: true,
      image: null,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
    },
    {
      id: 2,
      name: 'user1',
      email: 'user1@example.com',
      password: '$2a$10$u7xWhmmIFuBqvBkVUar8G.h2R4RsV9vFIyHhTYzUhnmuL4b7vZKiy',
      isAdmin: false,
      image: null,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
    },
    {
      id: 3,
      name: 'user2',
      email: 'user2@example.com',
      password: '$2a$10$4Ie9Vnx3hAyT3m7OvhXaAeYxMjXDlLFUKScopJA8Tv1TyK9HS2aV.',
      isAdmin: false,
      image: null,
      createdAt: '2022-01-26T13:54:41.000Z',
      updatedAt: '2022-01-26T13:54:41.000Z',
    },
  ],
}

const dummyUser = {
  profile: {
    id: 1,
    name: 'root',
    email: 'root@example.com',
    password: '$2a$10$mRfDsi1GCUPZZAQkMJK9T.M.KsjvYerdqTdAU6ASllfdjmpSmlPIG',
    isAdmin: true,
    image: null,
    createdAt: '2022-01-26T13:54:41.000Z',
    updatedAt: '2022-01-26T13:54:41.000Z',
    Comments: [
      {
        id: 3,
        text: 'Dolor odio similique.',
        UserId: 1,
        RestaurantId: 3,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
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
        id: 6,
        text: 'Voluptate perferendis eius ipsum dolore iure rerum omnis commodi est.',
        UserId: 1,
        RestaurantId: 6,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
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
        id: 10,
        text: 'Vero culpa modi voluptatibus dolores enim laboriosam voluptatem ipsum.',
        UserId: 1,
        RestaurantId: 10,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
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
      {
        id: 11,
        text: 'Nam enim consequatur.',
        UserId: 1,
        RestaurantId: 11,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 11,
          name: 'Yasmin Homenick I',
          tel: '(151) 390-1850 x20724',
          address: '2250 Veum Mill',
          opening_hours: '08:00',
          description:
            'Itaque qui reprehenderit occaecati et omnis expedita. Quia et unde dignissimos. Itaque sed nisi sint iure repellendus aut. Provident dolores doloribus a et id laudantium odio culpa.\n \rNon sint qui laborum perferendis aperiam consectetur veritatis blanditiis. Explicabo id minus et qui occaecati. Eos ratione omnis qui. Aut illum ullam delectus. Exercitationem eveniet itaque non ut dolore unde. Sed nostrum numquam eius ipsam eaque quas accusamus doloremque dolorem.\n \rInventore dolores ex. Qui eos libero. Omnis vero eum neque rerum id. Dolores quae fugit tempore sit aliquam veniam molestiae corporis et.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=33.208334624142296',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 14,
        text: 'Saepe in ipsam qui.',
        UserId: 1,
        RestaurantId: 14,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 14,
          name: 'Mrs. Sydni Dibbert',
          tel: '(452) 318-2358',
          address: '542 Dorothy Ports',
          opening_hours: '08:00',
          description:
            'Unde saepe enim impedit ducimus sit animi distinctio ea.\nUt dolorem accusamus voluptatem.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=59.22184698593984',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 21,
        text: 'Blanditiis eveniet qui voluptas maxime.',
        UserId: 1,
        RestaurantId: 21,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 21,
          name: "Mrs. Kiara O'Hara",
          tel: '(187) 256-4481',
          address: '763 Chanelle Crescent',
          opening_hours: '08:00',
          description: 'eaque distinctio sapiente',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=62.68794998506058',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 30,
        text: 'Exercitationem inventore dolorum tempora praesentium veniam autem aut.',
        UserId: 1,
        RestaurantId: 30,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 30,
          name: 'Mae McGlynn',
          tel: '589.924.8922 x195',
          address: '336 Balistreri Crossing',
          opening_hours: '08:00',
          description:
            'In accusantium accusantium natus consequatur consectetur dolores. Doloremque repellendus et iusto beatae. Cumque aspernatur quia et quas. Ipsum ut cupiditate sunt porro similique.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=57.81233451683639',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 32,
        text: 'Quia odit dolorem debitis excepturi voluptatem est unde nam est.',
        UserId: 1,
        RestaurantId: 32,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 32,
          name: 'Deborah Schoen',
          tel: '110.197.6961 x89067',
          address: '11701 Runte Vista',
          opening_hours: '08:00',
          description:
            'Ut numquam aliquam voluptas et voluptatem dolor dolorem sit. Est saepe quos rerum sint natus. Nesciunt amet omnis consequatur fugiat ut voluptas quisquam minima quae. Hic odio et illum corrupti ipsam dicta.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=20.84708173843275',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 34,
        text: 'Minus consequatur dolor.',
        UserId: 1,
        RestaurantId: 34,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 34,
          name: 'Ephraim Hoeger',
          tel: '729.012.3344 x74946',
          address: '165 Hayes Prairie',
          opening_hours: '08:00',
          description: 'Quos reiciendis quaerat illum.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=63.7155187772767',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 36,
        text: 'Consequatur similique repellendus quibusdam ut omnis sit voluptas.',
        UserId: 1,
        RestaurantId: 36,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 36,
          name: 'Watson Schimmel',
          tel: '(682) 613-1134',
          address: '5167 Titus Fall',
          opening_hours: '08:00',
          description: 'Quod sed dolorem omnis eius.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=51.99468134019192',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 2,
        },
      },
      {
        id: 37,
        text: 'Sed doloremque sed temporibus quidem.',
        UserId: 1,
        RestaurantId: 37,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 37,
          name: 'Jarvis Littel',
          tel: '(894) 220-1488',
          address: '30514 Adams Point',
          opening_hours: '08:00',
          description:
            'In corrupti molestias omnis dignissimos. Voluptas sed ratione. Quia sapiente harum rem error deserunt dolore. Odio corrupti ut aut dolorum commodi facere illum recusandae. Similique sit mollitia earum itaque exercitationem qui ut. Ut deleniti perferendis.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=65.06049019410985',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 43,
        text: 'Omnis rerum error repudiandae quisquam dignissimos nisi iusto assumenda dolorem.',
        UserId: 1,
        RestaurantId: 43,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
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
        },
      },
      {
        id: 50,
        text: 'Sed sed provident asperiores.',
        UserId: 1,
        RestaurantId: 50,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
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
        },
      },
      {
        id: 57,
        text: 'Quidem natus at esse rerum harum non deserunt eveniet.',
        UserId: 1,
        RestaurantId: 7,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
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
        id: 66,
        text: 'Est earum exercitationem est iusto aut.',
        UserId: 1,
        RestaurantId: 16,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 16,
          name: 'Casey Fay II',
          tel: '(813) 448-4288',
          address: '009 Boyle Way',
          opening_hours: '08:00',
          description: 'est',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=86.86477138399935',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 67,
        text: 'Non neque nobis tenetur laudantium dolorum praesentium commodi.',
        UserId: 1,
        RestaurantId: 17,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 17,
          name: 'Miss Hailey Fisher',
          tel: '1-672-889-1305 x74571',
          address: '90381 Walter Green',
          opening_hours: '08:00',
          description: 'perspiciatis ea culpa',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=16.1060446495082',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 68,
        text: 'Optio delectus ipsum repudiandae optio molestiae.',
        UserId: 1,
        RestaurantId: 18,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 18,
          name: 'Marina Dietrich',
          tel: '903.523.5055 x5954',
          address: '162 Hermann Island',
          opening_hours: '08:00',
          description:
            'Voluptatum qui dolores ex et nihil cupiditate. Aut voluptate provident dolores eligendi modi quos est. Nesciunt optio impedit doloribus qui rerum sequi. Omnis quo dignissimos asperiores consequuntur nam. Voluptate voluptate assumenda magni sit aspernatur voluptatibus est. Assumenda explicabo unde vel hic et vel ea voluptatem.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=25.68674169271312',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 4,
        },
      },
      {
        id: 77,
        text: 'Ipsa sint sint commodi est eligendi vel in velit error.',
        UserId: 1,
        RestaurantId: 27,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 27,
          name: 'Herminia Kutch',
          tel: '173-399-4092 x91231',
          address: '777 Lynch Shore',
          opening_hours: '08:00',
          description:
            'Ipsam quaerat nihil nam. Quo quia dolorem quasi officia rerum consequuntur possimus quia. Est ex eligendi neque expedita voluptatum molestiae. Sit exercitationem qui voluptatem. Dolorum facilis aut.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=54.952058660803395',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 78,
        text: 'Unde dolorem numquam aut autem quo quis.',
        UserId: 1,
        RestaurantId: 28,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 28,
          name: 'Abraham Fritsch',
          tel: '944.340.5170 x603',
          address: '64995 Wuckert Inlet',
          opening_hours: '08:00',
          description:
            'In aut voluptatibus expedita itaque fugiat beatae minima possimus quam. Architecto suscipit repellat. Maxime quisquam nostrum dolores nesciunt laborum. Officia architecto ab delectus corporis sed quam. Voluptatem sit suscipit libero ratione ipsam. Quos expedita consequatur delectus explicabo autem dolorem.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=45.442728737226126',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 81,
        text: 'Voluptas tenetur impedit.',
        UserId: 1,
        RestaurantId: 31,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 31,
          name: 'Elsie Nienow',
          tel: '1-049-203-2727 x781',
          address: '0059 Schimmel Plains',
          opening_hours: '08:00',
          description:
            'Est accusantium rerum et enim et quod est pariatur. Veritatis quia consequatur repellendus et ipsam molestias. Excepturi atque occaecati. Quisquam tempora incidunt velit alias quis dicta sed est qui.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=49.03754600735455',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 4,
        },
      },
      {
        id: 82,
        text: 'Eveniet aliquid inventore inventore libero repellendus.',
        UserId: 1,
        RestaurantId: 32,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 32,
          name: 'Deborah Schoen',
          tel: '110.197.6961 x89067',
          address: '11701 Runte Vista',
          opening_hours: '08:00',
          description:
            'Ut numquam aliquam voluptas et voluptatem dolor dolorem sit. Est saepe quos rerum sint natus. Nesciunt amet omnis consequatur fugiat ut voluptas quisquam minima quae. Hic odio et illum corrupti ipsam dicta.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=20.84708173843275',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 87,
        text: 'Et blanditiis iure.',
        UserId: 1,
        RestaurantId: 37,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 37,
          name: 'Jarvis Littel',
          tel: '(894) 220-1488',
          address: '30514 Adams Point',
          opening_hours: '08:00',
          description:
            'In corrupti molestias omnis dignissimos. Voluptas sed ratione. Quia sapiente harum rem error deserunt dolore. Odio corrupti ut aut dolorum commodi facere illum recusandae. Similique sit mollitia earum itaque exercitationem qui ut. Ut deleniti perferendis.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=65.06049019410985',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 88,
        text: 'Omnis ut nihil iure dolore iste earum.',
        UserId: 1,
        RestaurantId: 38,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 38,
          name: 'Kathleen Collier',
          tel: '548.323.1410',
          address: '063 Klocko Locks',
          opening_hours: '08:00',
          description: 'molestiae amet magni',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=43.42809103186334',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 2,
        },
      },
      {
        id: 90,
        text: 'Amet sint aliquam ut deleniti dolor.',
        UserId: 1,
        RestaurantId: 40,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 40,
          name: 'Royce Murphy',
          tel: '498-506-5752',
          address: '6900 Janelle Inlet',
          opening_hours: '08:00',
          description: 'voluptas consequatur et',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=57.04582548187198',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 100,
        text: 'In et beatae pariatur qui quia.',
        UserId: 1,
        RestaurantId: 50,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
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
        },
      },
      {
        id: 110,
        text: 'Ut explicabo maiores libero accusantium atque.',
        UserId: 1,
        RestaurantId: 10,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
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
      {
        id: 115,
        text: 'Quia laudantium qui aut.',
        UserId: 1,
        RestaurantId: 15,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 15,
          name: 'Tristin Ullrich',
          tel: '(345) 211-9435 x06612',
          address: '93236 Sidney Well',
          opening_hours: '08:00',
          description:
            'Sed quis a nam totam officiis voluptatem voluptatem expedita. Sit molestiae ut quis illum voluptas asperiores. Id molestias neque vero nemo consequatur in. Accusantium at cum. Ratione harum deleniti adipisci labore aut reiciendis esse quia.\n \rEsse velit ipsa animi. Recusandae non ut rerum sit error error pariatur velit natus. Fuga adipisci et.\n \rRepellat voluptas reiciendis quia vel. Beatae architecto repellat sed voluptate. Consequuntur earum consequatur sint voluptatum eos. Illo sit et maxime veniam ut ut eaque. Quas nemo dolorem delectus quia.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=70.28715227816906',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 2,
        },
      },
      {
        id: 119,
        text: 'Odio recusandae magni optio debitis qui.',
        UserId: 1,
        RestaurantId: 19,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 19,
          name: 'Horace Turner',
          tel: '511.611.1836 x58718',
          address: '83162 Simonis Shore',
          opening_hours: '08:00',
          description:
            'Incidunt eius tempore iure vel autem est. Velit libero repudiandae odit accusantium est. Necessitatibus corrupti quae repellat voluptatum.\n \rEius maiores alias quas et. Nobis assumenda porro architecto qui fugit modi ratione odit. Est harum voluptas voluptas rem voluptas distinctio corporis error. Unde iste velit quas.\n \rLabore enim cumque accusantium minus magnam. Quasi quaerat delectus exercitationem minima. Qui sit sunt. Accusantium voluptatum eos tempora vel reprehenderit voluptatibus ut eius temporibus.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=2.721213427236946',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 120,
        text: 'Qui aut est error odio atque.',
        UserId: 1,
        RestaurantId: 20,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 20,
          name: 'Cayla Kris MD',
          tel: '223.247.1359 x640',
          address: '24025 Franecki Wells',
          opening_hours: '08:00',
          description:
            'Aperiam voluptates voluptate vel. Qui nobis voluptatem hic quia quasi quas. Corrupti officia voluptate temporibus voluptates aut blanditiis in veniam dolores. Iure voluptatem omnis iusto voluptatem nihil repellat. Voluptas est eius voluptas eveniet. Quia odio sint accusamus quis nihil cum in libero repudiandae.\n \rNostrum sint perferendis et et quaerat. Velit voluptates doloremque error dolorum quo praesentium sit dolorum. Amet dignissimos fuga sit. Occaecati neque deleniti alias vitae est repudiandae fuga delectus. Eveniet facere laboriosam ut voluptatem praesentium aut tempora natus tempora. Aliquid repellat et consequatur maiores.\n \rAut maxime eaque voluptatum. Voluptates inventore et ullam id ipsum inventore et. Dolor sint molestias quia. Sint doloremque dolores veniam veritatis. Quidem explicabo quibusdam ut. Vel eveniet deserunt.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=35.08643850114501',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 4,
        },
      },
      {
        id: 122,
        text: 'Doloremque quisquam velit at.',
        UserId: 1,
        RestaurantId: 22,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 22,
          name: 'Mrs. Lazaro Stoltenberg',
          tel: '1-410-938-1203 x93530',
          address: '588 Tina Island',
          opening_hours: '08:00',
          description:
            'Et quam mollitia quia quis distinctio optio nemo. Rerum repellendus voluptas aut. Veritatis dolorum ipsa aspernatur aperiam non consequatur ab omnis consequatur. Occaecati unde sequi. Iusto officia voluptas et ab consequatur. Ab voluptas assumenda quis sed id sint omnis veritatis.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=99.8550152459742',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 4,
        },
      },
      {
        id: 123,
        text: 'Eum exercitationem cum aut distinctio libero voluptatem.',
        UserId: 1,
        RestaurantId: 23,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 23,
          name: 'Tristian Swaniawski',
          tel: '854-549-7364',
          address: '798 Luettgen Land',
          opening_hours: '08:00',
          description:
            'Rerum nostrum rerum. Sapiente qui saepe veritatis labore id id animi optio accusantium. Deleniti labore voluptates veniam debitis hic labore laudantium reprehenderit autem. Laudantium nam nihil rerum accusantium eveniet facilis sapiente molestiae. Voluptas velit dolores ut excepturi expedita aut.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=30.604399521138603',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 129,
        text: 'Iure omnis quia vel harum aut necessitatibus et reiciendis maxime.',
        UserId: 1,
        RestaurantId: 29,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 29,
          name: 'Dayana Abernathy',
          tel: '318-380-1058',
          address: '26920 William Falls',
          opening_hours: '08:00',
          description: 'accusamus excepturi eveniet',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=39.15468333719052',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 130,
        text: 'Assumenda quod a accusantium earum consequatur sunt sed.',
        UserId: 1,
        RestaurantId: 30,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 30,
          name: 'Mae McGlynn',
          tel: '589.924.8922 x195',
          address: '336 Balistreri Crossing',
          opening_hours: '08:00',
          description:
            'In accusantium accusantium natus consequatur consectetur dolores. Doloremque repellendus et iusto beatae. Cumque aspernatur quia et quas. Ipsum ut cupiditate sunt porro similique.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=57.81233451683639',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 133,
        text: 'Corporis repellat maiores qui incidunt quidem vel voluptas.',
        UserId: 1,
        RestaurantId: 33,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 33,
          name: 'Duncan Stehr',
          tel: '782-899-3486',
          address: '0750 Marisa Islands',
          opening_hours: '08:00',
          description: 'quod',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=32.31936351632785',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 134,
        text: 'Et quod maiores itaque ipsa qui.',
        UserId: 1,
        RestaurantId: 34,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 34,
          name: 'Ephraim Hoeger',
          tel: '729.012.3344 x74946',
          address: '165 Hayes Prairie',
          opening_hours: '08:00',
          description: 'Quos reiciendis quaerat illum.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=63.7155187772767',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 5,
        },
      },
      {
        id: 137,
        text: 'Unde et facere.',
        UserId: 1,
        RestaurantId: 37,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 37,
          name: 'Jarvis Littel',
          tel: '(894) 220-1488',
          address: '30514 Adams Point',
          opening_hours: '08:00',
          description:
            'In corrupti molestias omnis dignissimos. Voluptas sed ratione. Quia sapiente harum rem error deserunt dolore. Odio corrupti ut aut dolorum commodi facere illum recusandae. Similique sit mollitia earum itaque exercitationem qui ut. Ut deleniti perferendis.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=65.06049019410985',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 141,
        text: 'Tenetur et eum numquam facilis cupiditate dolores voluptates distinctio eos.',
        UserId: 1,
        RestaurantId: 41,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 41,
          name: 'Zechariah Braun',
          tel: '143.936.0201 x019',
          address: '3760 Krystina Park',
          opening_hours: '08:00',
          description:
            'Aliquid esse quia vel eos dicta sit. Amet itaque ipsam aut esse atque totam quo debitis. In ut aut. Culpa aut et accusamus quidem.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=19.201937395358915',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 144,
        text: 'Quia autem recusandae sunt totam natus.',
        UserId: 1,
        RestaurantId: 44,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 44,
          name: 'Margarita Stehr',
          tel: '(473) 607-2761',
          address: '3157 Priscilla Gardens',
          opening_hours: '08:00',
          description:
            'Ut est eos sit qui ipsa placeat natus. Placeat quaerat repellat voluptatem ab. Aut et voluptatem optio.\n \rBeatae adipisci temporibus voluptatem animi nostrum. Hic dolore quo et quo pariatur distinctio fuga. Minus consequatur quibusdam mollitia alias laborum et quae ipsam. Animi magni ex quia quo consequatur. Similique voluptatem exercitationem laboriosam vel rem.\n \rPerferendis est repellat quisquam. Beatae sunt saepe rerum error sit quas sit. Aut quis ut illo occaecati vitae distinctio reiciendis eum. Ut dignissimos quidem sunt explicabo deleniti corporis quidem consequuntur. Voluptatem nisi sunt eos hic ut. Mollitia cupiditate similique id qui et.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=73.30215946262597',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 1,
        },
      },
      {
        id: 145,
        text: 'Dolor unde officiis dolorem necessitatibus.',
        UserId: 1,
        RestaurantId: 45,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 45,
          name: 'Stephen Beatty',
          tel: '1-928-685-8604 x8710',
          address: '4475 Thad Plains',
          opening_hours: '08:00',
          description:
            'Provident debitis rerum iusto expedita quasi consequatur iusto. Ad non non consequatur non. Rerum aut quis numquam et aut. Fugiat ut voluptas et vel.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=54.98174637199782',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 3,
        },
      },
      {
        id: 147,
        text: 'Facere ducimus maxime ducimus sunt sunt.',
        UserId: 1,
        RestaurantId: 47,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
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
        },
      },
      {
        id: 148,
        text: 'Aut nostrum ut.',
        UserId: 1,
        RestaurantId: 48,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 48,
          name: 'Rodger Kirlin',
          tel: '005.730.8422 x917',
          address: '283 Kling Bypass',
          opening_hours: '08:00',
          description:
            'Et quo itaque corrupti quia eos omnis. Molestiae vitae corrupti unde et quisquam. Nihil sunt quae est id magni voluptas ipsam.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=85.33989304032919',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 2,
        },
      },
      {
        id: 149,
        text: 'Dolor iusto nemo.',
        UserId: 1,
        RestaurantId: 49,
        createdAt: '2022-01-26T13:54:41.000Z',
        updatedAt: '2022-01-26T13:54:41.000Z',
        Restaurant: {
          id: 49,
          name: 'Murray Hilpert',
          tel: '033-157-8084',
          address: '3655 Antoinette Hills',
          opening_hours: '08:00',
          description:
            'Quasi quis soluta aut deserunt iste incidunt. Rerum delectus autem alias omnis nam recusandae nostrum optio similique. Delectus quia ullam dolores debitis enim.\n \rEx voluptatum cum sint ipsam culpa sapiente eius. Corporis corrupti veniam quasi nemo maiores. Commodi incidunt blanditiis est tempore natus.\n \rExplicabo error et quia consequuntur rerum. Qui est laboriosam voluptatem id molestiae voluptas labore. Rerum sit ut labore.',
          image:
            'https://loremflickr.com/320/240/restaurant,food/?random=84.41732178084402',
          viewCounts: 0,
          createdAt: '2022-01-26T13:54:41.000Z',
          updatedAt: '2022-01-26T13:54:41.000Z',
          CategoryId: 5,
        },
      },
    ],
    FavoritedRestaurants: [],
    Followers: [],
    Followings: [],
  },
  isFollowed: false,
}

export default {
  name: 'AdminUsers',
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
      currentUser: {
        id: -1,
        name: '',
        email: '',
        isAdmin: '',
      },
    }
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users
    },
    fetchCurrentUser() {
      this.currentUser.id = dummyUser.profile.id
      this.currentUser.name = dummyUser.profile.name
      this.currentUser.email = dummyUser.profile.email
      this.currentUser.isAdmin = dummyUser.profile.isAdmin
    },
    toggleUserRole(userId) {
      this.users = this.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          }
        }

        return user
      })
    },
  },
  created() {
    this.fetchUsers()
    this.fetchCurrentUser()
  },
}
</script>
