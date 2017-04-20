<template lang="html">
  <div class="edit Article">
    <el-row>
      <el-col :span="20" :offset="2">
        <h1>Edit Article</h1>
      </el-col>

      <el-col :span="20" :offset="2">
        <el-form :model="newArticle" label-width="120px">

        <el-form-item label="Title">
          <el-input v-model="newArticle.title"></el-input>
        </el-form-item>

        <el-form-item label="Content">
          <el-input type="textarea" v-model="newArticle.content"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">Submit</el-button>
          <el-button @click="cancelSubmit">Reset</el-button>
        </el-form-item>

      </el-form>
      </el-col>
    </el-row>


  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import NavBar from './NavBar'

export default {
  props : ['id'],
  components : {
    NavBar
  },
  computed : {
    ...mapGetters({
      newArticle : 'newArticle'
    })
  },
  methods : {
    onSubmit(){
      this.$store.dispatch('addArticle',this.newArticle)
      this.$router.go('/list');
    },
    cancelSubmit(){
      this.newArticle.title = ''
      this.newArticle.content = ''
    }
  },
  mounted(){
    this.$store.dispatch('findEditArticle',this.id)
  }
}
</script>

<style lang="css">
</style>
