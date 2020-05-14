const { exec, escape } = require('../db/mysql')
const { genPassword } = require('../utils/cryp')
const login = async (username, password) => {
  // 加了 escape 后就不用加单引号了
  username = escape(username)
  // 生成加密密码
  password = genPassword(password)
  password = escape(password)
  
  const sql = `select username, realname from users where username = ${username} and password = ${password}`
  // console.log('sql', sql)
  const rows = await exec(sql)
  return rows[0] || {}
  // return exec(sql).then(rows => {
  //   return rows[0] || {}
  // })
}

module.exports = {
  login
}