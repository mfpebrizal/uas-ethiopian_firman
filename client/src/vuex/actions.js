export default {
  getAllArticles({commit}){
    axios.get('http://localhost:3000/api/articles')
    .then(function (response) {
      commit('insertArticle', response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
