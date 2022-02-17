import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  signIn({ email, password }) {
    return apiHelper.post('/signin', {
      email,
      password,
    })
  },
  signUp({ name, email, password, passwordCheck }) {
    return apiHelper.post(
      '/signup',
      { name, email, password, passwordCheck },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    )
  },
}
