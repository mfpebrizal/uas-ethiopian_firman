export default {
  getAllArticles({commit}){
    axios.get('http://localhost:3000/api/articles')
    .then(function (response) {
      commit('insertArticle', response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  deleteArticle({commit}, articleId){

    axios.delete('http://localhost:3000/api/articles/'+articleId)
    .then(function (response) {
      commit('succeedDelete', articleId)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
