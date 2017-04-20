<template lang="html">
  <div class="main-page">
    <nav-bar></nav-bar>
    <el-row>
      <el-col :span="20" :offset="2">
        <h1>All Articles</h1>

        <div v-for="article in articles" class="all-Articles">
          <h2>{{article.title}}</h2>
          {{article.content}}
          <div class="block">
            <span class="wrapper">
              <el-button size="small" icon="edit" type="info" @click="">Edit</el-button>
              <el-button size="small" icon="delete" type="danger" @click="deleteOneArticle(article._id)">Delete</el-button>
            </span>
          </div>
        </div>
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
      articles : 'allArticles'
    })
  },
  methods :{
    deleteOneArticle(articleId){
      this.$store.dispatch('deleteArticle',articleId)
    }
  },
  mounted(){
    this.$store.dispatch('getAllArticles')
  }
}
</script>

<style lang="css">
</style>
