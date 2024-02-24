import axios from 'axios'
const api = axios.create({
  baseURL: ' https://codeburger-backend-production-ddd5.up.railway.app/'
})

api.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('burger:userData')
  const token = userData && JSON.parse(userData).token
  config.headers.authorization = `Bearer ${token}`
  return config
})

export default api
