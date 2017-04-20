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
  },
  addArticle({commit}, data){
    axios.post('http://localhost:3000/api/articles', {
      title: data.title,
      content : data.content,
      authorId : "58f859f250a0c31e2d774479"
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  findEditArticle({commit}, data){
    axios.get('http://localhost:3000/api/articles/'+ data)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
