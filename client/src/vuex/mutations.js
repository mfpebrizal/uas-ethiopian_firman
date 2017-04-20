export default {
  insertArticle(state, payload){
    state.articles.splice(0,state.articles.length)

    payload.forEach(x => {
      let date = new Date(x.createdAt)
      x.createdAt = date.toLocaleString()
      state.articles.push(x)
    })
  },
  succeedDelete(state, payload){
    const index = state.articles.findIndex(x => x == payload)
    state.articles.splice(index,1)
  },
  succeedSave(state, payload){
    const index = state.articles.findIndex(x => x == payload)
    state.articles.splice(index,1)
  }
}
