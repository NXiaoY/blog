<template>
  <div class="login">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-pic js-tilt" data-tilt>
          <img src="../../assets/images/img-01.png" alt="IMG" />
        </div>
        <div class="login100-form validate-form">
          <span class="login100-form-title">博客登陆</span>

          <div class="wrap-input100 validate-input">
            <input class="input100" type="text" placeholder="用户名" v-model="username" />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>

          <div class="wrap-input100 validate-input">
            <input class="input100" type="password" name="pass" placeholder="密码" v-model="password" />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>

          <div class="container-login100-form-btn">
            <el-button class="login100-form-btn" @click="Login" :loading="loading">{{ loading ? '登录中 ...' : '登 录' }}</el-button>
          </div>

          <div class="text-center p-t-12">
            <a class="txt2" href="javascript:">忘记密码？</a>
          </div>

          <div class="text-center p-t-136">
            <a class="txt2" href="#">
              还没有账号？立即注册
              <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginBlog, getUser } from '../../api/http'
export default {
  data () {
    return {
      username: '',
      password: '',
      loading: false
    }
  },
  methods: {
    async Login () {
      await loginBlog({ username: this.username, password: this.password }).then(res => {
        if (res.errno === 0) {
          this.loading = true
          this.timer = setTimeout(() => {
            // 动画关闭需要一定的时间
            setTimeout(async () => {
              this.loading = false
              this.$message.success('登录成功！')
              const res = await getUser()
              sessionStorage.setItem('username', res.message)
              this.$router.push('/home')
            }, 400)
          }, 800)
        }
        if (res.errno === -1) {
          return this.$message.error('登录失败！')
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/login.css'
.p-t-12
  padding-top 12px
.p-t-136
  padding-top 136px
</style>
