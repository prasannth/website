import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import store from '@/store'

Vue.use(Vuex)

const state = {
  status: '',
  type1Details: ''
}
const getters = {
  getType1Details: state => state.type1Details
}
const mutations = {
  set_status (state, status) {
    state.status = status
  },
  set_type1Details (state, data) {
    state.type1Details = data
  }
}
const actions = {
  getType1Details ({ commit }, data) {
    return new Promise((resolve, reject) => {
      commit('set_status', 'LOADING')
      var config = {
        method: 'post',
        url: 'http://192.168.0.9:3000/product/detail',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      }

      axios(config)
        .then(function (response) { return response.data })
        .then(function (response) {
          // console.log(JSON.stringify(response.productDetail))
          commit('set_status', 'SUCCESS')
          commit('set_type1Details', response.productDetail)
          resolve(response)
        })
        .catch(function (error) {
          // console.log(error)
          commit('set_status', 'SUCCESS')
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
