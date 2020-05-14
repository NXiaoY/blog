<template>
  <div class="wraper">
    <home-header @ChildFn="ParentFn"></home-header>
    <home-container :authorName="author"></home-container>
    <home-footer></home-footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: ''
    }
  },
  components: {
    'home-header': () => import('../../components/Header'),
    'home-container': () => import('./components/Container'),
    'home-footer': () => import('./components/Footer')
  },
  methods: {
    ParentFn (val) {
      this.author = val
      console.log('parentF', this.author)
    }
  }
}
</script>

<style lang="stylus" scoped>
// @import '~@/assets/css/main.css'
// .wraper
//   height 100vh
//   overflow-x hidden
</style>
