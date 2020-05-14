import Plugins from '../plugins/axios'

const axios = Plugins
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const GET = (url, params, headers) => {
  // eslint-disable-next-line promise/param-names
  return new Promise((res, rej) => {
    axios.get(url, { params }, headers).then(({ data }) => {
      res(data)
    }, err => {
      rej(err)
    }).catch(err => {
      rej(err)
    })
  })
}

export const POST = (url, params, headers) => {
  // eslint-disable-next-line promise/param-names
  return new Promise((res, rej) => {
    axios.post(url, JSON.stringify(params), headers).then(({ data }) => {
      res(data)
    }, err => {
      rej(err)
    }).catch(err => {
      rej(err)
    })
  })
}
