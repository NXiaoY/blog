import axios from 'axios'

const config = {
  baseURL: '/api',
  timeout: 60 * 1000,
  withCredentials: true
}

const _axios = axios.create(config)

export default _axios
