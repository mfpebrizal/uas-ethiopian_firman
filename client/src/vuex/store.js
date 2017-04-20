import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import actions from './actions'
import mutations from './mutations'


export const store = new Vuex.Store ({
  state : {
    articles : [],
    newArticle : {
      title : '',
      content : ''
    },
    editArticle : {
      title : '',
      content : ''
    }
  },
  getters,
  actions,
  mutations
})
