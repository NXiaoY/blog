<template>
  <div>
    <home-header></home-header>
    <div class="wraper">
      <main class="main">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-5 col-lg-4 col-xl-3">
              <div class="user">
                <div class="user__head">
                  <div class="user__img">
                    <img src="../../assets/images/user.jpg" alt />
                  </div>
                </div>
                <div class="user__title">
                  <h2>{{username}}</h2>
                  <p>Web前端工程师</p>
                </div>
                <div class="user__btns">
                  <span class="user__btn user__btn--blue">
                    <span @click="newBlog">发表博客</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-7 col-lg-8 col-xl-6">
              <p v-if="noneblog">没有相关，试试其他关键字</p>
              <div v-else class="post" v-for="item of blogs" :key="item.index">
                <div class="post__head">
                  <a href="#" class="post__head-img">
                    <img src="../../assets/images/user.jpg" alt />
                  </a>
                  <div class="post__head-title">
                    <h5>
                      <span href="#">{{item.author}}</span>
                    </h5>
                    <p>{{item.createtime | dateFormat}}</p>
                  </div>
                  <!-- <div class="post__dropdown">
                    <a
                      class="post__dropdown-btn"
                      href="#"
                      role="button"
                      id="dropdownMenu1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="icon el-icon-more"></i>
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-right post__dropdown-menu"
                      aria-labelledby="dropdownMenu1"
                    >
                      <li>
                        <el-link :underline="false" target="_blank" :disabled="item.disabled">编辑</el-link>
                      </li>
                      <li>
                        <el-link :underline="false" target="_blank" :disabled="item.disabled">删除</el-link>
                      </li>
                      <li>
                        <el-link :underline="false" target="_blank" :disabled="item.disabled">隐藏</el-link>
                      </li>
                    </ul>
                  </div> -->
                </div>
                <!-- <router-link tag="h2" class="post__title" to="/blog/details">{{item.title}}</router-link> -->
                <h2 class="post__title" @click="DetailsRouter(item.id)">{{item.title}}</h2>
                <div class="post__description">
                  <p>{{item.content}}</p>
                </div>
                <div class="collapse post__collapse" id="collapse1">
                  <form action="#" class="post__form">
                    <input type="text" placeholder="Type your comment..." />
                    <button type="button">
                      <i class="icon el-icon-position"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { getBlogList } from '../../api/http'
export default {
  data () {
    return {
      blogs: {},
      noneblog: false,
      username: sessionStorage.getItem('username') || ''
    }
  },
  props: {
    author: String
  },
  created () {
    this.getList()
  },
  methods: {
    newBlog () {
      this.$router.push('/blog/new')
    },
    DetailsRouter (id) {
      this.$router.push({ path: '/blog/edit', query: { id } })
    },
    async getList () {
      await getBlogList({ isadmin: 1 }).then(res => {
        this.blogs = res.data
        if (res.data.length === 0) {
          this.noneblog = !this.noneblog
        }
      })
    }
  },
  components: {
    'home-header': () => import('../../components/Header')
  }
}
</script>

<style lang="stylus" scoped>
.user__btns
  border 1px solid rgba(133,153,171,0.2)
.user__btn
  cursor pointer
  width 100%
.post__title:hover
  color #fa7268
  cursor pointer
</style>
