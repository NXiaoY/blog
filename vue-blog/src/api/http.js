import { GET, POST } from '../utils/request'

export const getBlogList = (params, headers) => {
  return GET('/api/blog/list', params, headers)
}

export const getBlogDetail = (params, headers) => {
  return GET('/api/blog/detail', params, headers)
}

export const newBlog = (params, headers) => {
  return POST('/api/blog/new', params, headers)
}

export const updateBlog = (params, headers) => {
  return POST('/api/blog/update', params, headers)
}

export const delBlog = (params, headers) => {
  return POST('/api/blog/del', params, headers)
}

export const loginBlog = (params, headers) => {
  return POST('/api/user/login', params, headers)
}

export const newUser = (params, headers) => {
  return POST('/api/user/new', params, headers)
}

export const getUser = (params, headers) => {
  return GET('/api/user/list', params, headers)
}
