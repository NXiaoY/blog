const xss = require('xss')
const { exec, escape } = require('../db/mysql')

const getList = async (author, keyword) => {
  let sql = `select * from blogs where 1 = 1 `
  if (author) {
    sql += `and author = '${author}' `
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `
  }
  sql += `order by createtime desc;`

  return await exec(sql)
}

const getDetail = async (id) => {
  id = escape(id)
  const sql = `select * from blogs where id = ${id}`
  const rows = await exec(sql)
  return rows[0]
  // return await exec(sql).then(rows => {
  //   return rows[0]
  // })
}

const newBlog = async (blogData = {}) => {
  console.log(blogData)
  // 防止xss 攻击
  // < >  转译为 &lt; &gt
  // const title = xss(blogData.title)
  const title = escape(blogData.title)
  const content = escape(blogData.content)
  const author = escape(blogData.author)
  const createtime = Date.now()
  // 单引号不加也可以
  const sql = `insert into blogs (title, content, createtime, author) values (${title}, ${content}, ${createtime}, ${author})`
  const insertData = await exec(sql)
  return {
    id: insertData.insertId
  }
  // return await exec(sql).then(insertData => {
  //   return {
  //     id: insertData.insertId
  //   }
  // })
}

// const updateBlog = (id, blogData = {}) => {
//   const title = blogData.title
//   const content = blogData.content
//   console.log(id, blogData)
//   const sql =  `update blogs set title = '${title}', content = '${content}' where id = ${id}`
//   return exec(sql).then(updateData => {
//     if (updateData.affectedRows > 0) {
//       return true
//     }
//     return false
//   })
// }

const updateBlog = async (id, blogData = {}) => {
  console.log(blogData)
  const title = blogData.title
  const content = blogData.content
  id = blogData.id
  const sql =  `update blogs set title = '${title}', content = '${content}' where id = ${id}`
  const updateData = await exec(sql)
  if (updateData.affectedRows > 0) {
    return true
  }
  return false
  // return exec(sql).then(updateData => {
  //   if (updateData.affectedRows > 0) {
  //     return true
  //   }
  //   return false
  // })
}

// const delBlog = (id, blogData = {}) => {
//   id = blogData.id
//   const author = blogData.author
//   console.log(id, blogData)
//   const sql = `delete from blogs where id = '${id}' and author = '${author}'`
//   return exec(sql).then(delectData => {
//     if (delectData.affectedRows > 0) {
//       return true
//     }
//     return false
//   })
// }

const delBlog = async (id, author) => {
  // id = blogData.id
  // console.log(id, author)
  const sql = `delete from blogs where id = '${id}' and author = '${author}'`
  console.log('sql', sql)
  const delectData = await exec(sql)
  if (delectData.affectedRows > 0) {
    return true
  }
  return false
  // return exec(sql).then(delectData => {
  //   if (delectData.affectedRows > 0) {
  //     return true
  //   }
  //   return false
  // })
}

module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}

// 4