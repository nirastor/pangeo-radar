import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fakeData: [],
    entriesPerPage: null,
  },
  getters: {
    getFakeData: s => s.fakeData,
    getEntriesPerPage: s => s.entriesPerPage,
  },
  mutations: {
    setFakeData(state, payload) {
      state.fakeData = payload
    },
    setEntriesPerPage(state, payload) {
      state.entriesPerPage = payload
    },
  },
  actions: {},
  modules: {},
})
