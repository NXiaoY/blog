class BaseModel {
  // data 是对象， message 是消息
  constructor(data, message) {
    // 接到的 data 是字符串的话 message 就等于 data
    if (typeof data === 'string') {
      this.message = data
      data = null
      message = null
    }

    if (data) {
      this.data = data
    }

    if (message) {
      this.message = message
    }
  }
}

// 继承
class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.errno = 0
  }
}

class ErrorModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.errno = -1
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
}