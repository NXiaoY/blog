<template>
  <div>
    <home-header></home-header>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2>{{blogData.title}}</h2>
      </div>
      <p>{{blogData.content}}</p>
    </el-card>
  </div>
</template>

<script>
import { getBlogDetail, updateBlog, delBlog } from '../../api/http'
export default {
  data () {
    return {
      id: this.$route.query.id,
      blogData: {},
      loading: false
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    async getDetail () {
      await getBlogDetail({ id: this.id }).then(res => {
        this.blogData = res.data
      })
    },
    async EditBlogs () {
      this.$confirm('确定要更改吗？')
        .then(async _ => {
          await updateBlog(this.blogData).then(res => {
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
    },
    async DelBlogs () {
      const confirmResult = await this.$confirm('此操作将删除该博客, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).catch(err => err)
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      await delBlog(this.blogData).then(res => {
        this.$message.success('删除成功')
        this.$router.push('/home')
      })
    }
  },
  components: {
    'home-header': () => import('../../components/Header')
  }
}
</script>

<style lang="stylus" scoped>
.el-card
  margin 100px 20px 0
.el-button
  margin-top 20px
.textar >>> .el-textarea__inner
  height 500px !important
</style>
