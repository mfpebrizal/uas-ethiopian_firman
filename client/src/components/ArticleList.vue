<template lang="html">
  <div class="main-page">
    <nav-bar></nav-bar>
    <el-row>
      <el-col :span="20" :offset="2">
        <h1>All Articles</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </el-col>
    </el-row>


  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import NavBar from './NavBar'

export default {
  components : {
    NavBar
  },
  computed : {
    ...mapGetters({
      articles : 'articles'
    })
  },
  mounted(){
    this.$store.dispatch('getAllArticles')
  }
}
</script>

<style lang="css">
</style>
