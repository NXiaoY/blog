<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="row">
          <div class="col-7 col-md-9 col-lg-8 col-xl-9">
            <div class="header__content">
              <button class="header__btn" type="button">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <span class="header__logo">
                <!-- <img src="../../assets/images/logo.svg" alt /> -->
                WDNMD
              </span>
              <ul class="header__nav">
                <li class="header__nav-item">
                  <span class="header__nav-link">首页</span>
                </li>
                <li class="header__nav-item">
                  <span
                    class="header__nav-link"
                  >归档</span>
                </li>
                <li class="header__nav-item">
                  <span
                    class="header__nav-link"
                  >留言</span>
                </li>
                <li class="header__nav-item">
                  <span
                    class="header__nav-link"
                  >日志</span>
                </li>
              </ul>
              <el-form class="header__search">
                <el-input placeholder="请输入内容" v-model="keyword" class="input-with-select seek" clearable>
                  <el-button slot="append" icon="el-icon-search" @click="seek"></el-button>
                </el-input>
              </el-form>
            </div>
          </div>
          <div class="col-5 col-md-3 col-lg-4 col-xl-3">
            <div class="header__content header__content--end">
              <a href="messages.html" class="header__messages header__messages--active">
                <i class="icon el-icon-message"></i>
              </a>
              <div class="header__notifications">
                <a
                  class="header__notifications-btn header__notifications-btn--active"
                  href="#"
                  role="button"
                  id="dropdownMenuNotifications"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="icon el-icon-message-solid"></i>
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right header__dropdown-menu header__dropdown-menu--right header__dropdown-menu--ntf"
                  aria-labelledby="dropdownMenuNotifications"
                >
                  <div class="header__ntf">
                    <a href="#" class="header__ntf-img">
                      <img src="../assets/images/user3.jpg" alt />
                    </a>
                    <h6 class="header__ntf-title">
                      <span>Marsha Baldwin</span> Comment on your project.
                    </h6>
                  </div>
                  <div class="header__ntf">
                    <a href="#" class="header__ntf-img">
                      <img src="../assets/images/user7.jpg" alt />
                    </a>
                    <h6 class="header__ntf-title">
                      <span>Andy Ramos</span> Comment on your project.
                    </h6>
                  </div>
                  <div class="header__ntf">
                    <a href="#" class="header__ntf-img">
                      <img src="../assets/images/user4.jpg" alt />
                    </a>
                    <h6 class="header__ntf-title">
                      <span>Sophia Mendoza</span> Comment on your project.
                    </h6>
                  </div>
                  <div class="header__ntf">
                    <a href="#" class="header__ntf-img">
                      <img src="../assets/images/user1.jpg" alt />
                    </a>
                    <h6 class="header__ntf-title">
                      <span>Tony Young</span> Comment on your project.
                    </h6>
                  </div>
                  <a href="#" class="header__ntf-more">View more</a>
                </div>
              </div>

              <div class="header__profile">
                <a
                  class="dropdown-toggle header__profile-btn"
                  href="#"
                  role="button"
                  id="dropdownMenuProfile"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="../assets/images/user.jpg" alt />
                  <span>{{username}}</span>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-right header__dropdown-menu header__dropdown-menu--right"
                  aria-labelledby="dropdownMenuProfile"
                >
                  <li>
                    <a>
                      <i class="icon ion-ios-settings"></i> 设置
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="icon ion-ios-lock"></i> 隐私
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="icon ion-ios-help-buoy"></i> 常见问题
                    </a>
                  </li>
                  <li>
                    <router-link to="/">
                      <i class="icon ion-ios-exit"></i> 退出
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: sessionStorage.getItem('username') || '',
      keyword: ''
    }
  },
  methods: {
    seek () {
      this.$emit('ChildFn', this.keyword)
    }
  },
  watch: {
    keyword: {
      handler () {
        this.seek()
      }
    }
  }
}
</script>
<style scoped>
.header__logo {
  color: #3796f6;
  font-weight: bold;
  font-size: 20px;
}
.header__search >>> .el-input__inner, .header__search >>> .el-input-group__append {
  background: rgba(255,255,255,0.1);
  border: none;
  color: #fff;
}
.header__search >>> .el-input-group__append:hover {
  background: #3796f6;
}
</style>
