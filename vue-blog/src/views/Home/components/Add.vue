<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>发表博客</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-input v-model="blogs.title" placeholder="请输入标题" clearable></el-input>
      <el-input
        type="textarea"
        :autosize="{ minRows: 8, maxRows: 8}"
        placeholder="请输入内容"
        v-model="blogs.content">
      </el-input>
      <el-button type="primary" @click="newButton" :loading="loading" >{{ loading ? '发表中 ...' : '发表' }}</el-button>
    </el-card>
  </div>
</template>

<script>
import { newBlog } from '../../../api/http'
export default {
  data () {
    return {
      loading: false,
      blogs: {
        author: 'lisi',
        title: '',
        content: ''
      }
    }
  },
  methods: {
    newButton () {
      this.$confirm('确定要发表吗？')
        .then(async _ => {
          await newBlog(this.blogs).then(res => {
            this.loading = true
            this.timer = setTimeout(() => {
              setTimeout(() => {
                this.loading = false
                this.$router.push('/home')
              }, 400)
            }, 800)
          }).catch((err) => {
            console.log(err)
          })
        })
        .catch(_ => {})
    }
  }
}
</script>

<style scoped>
.el-breadcrumb {
  padding: 20px 0 0 50px;
}
.el-card {
  margin: 50px;
}
.el-input, .el-textarea {
  margin-bottom: 20px;
}
</style>
