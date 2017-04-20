<template lang="html">
  <el-menu theme="dark" class="el-menu-demo" mode="horizontal" >

    <router-link to="/" exact>
        <el-menu-item index="1"><b>Home</b></el-menu-item>
    </router-link>

    <router-link to="/list" exact>
        <el-menu-item index="2">All Articles</el-menu-item>
    </router-link>

    <router-link to="/post" exact>
        <el-menu-item index="3">Post Articles</el-menu-item>
    </router-link>

  </el-menu>
</template>

<script>
export default {

}
</script>

<style lang="css">
</style>
