export default {
  insertArticle(state, payload){
    // console.log(state);
    state.articles.splice(0,state.articles.length)

    payload.forEach(x => {
      let date = new Date(x.createdAt)
      x.createdAt = date.toLocaleString()
      state.articles.push(x)
    })
  }
}
