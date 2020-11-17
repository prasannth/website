import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import store from '@/store'

import fs from 'fs'

Vue.use(Vuex)
Vue.use(fs)

const state = {
  status: ''
}
const getters = {
  isLoggedIn: state => !!state.token

}
const mutations = {
  auth_request (state) {
    state.status = 'loading'
  }
}
const actions = {

  uploadImage ({ commit }, data) {
    return new Promise((resolve, reject) => {
      commit('auth_request')

      axios
        .post('http://192.168.0.9:3000/print/upload', data, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          // console.log('SUCCESS!!')
          resolve(response)
        })
        .catch(error => {
          // console.log('FAILURE!!')
          reject(error)
        })
    })
  },

  userImageCollection ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('auth_request')

      axios
        .post('http://192.168.0.9:3000/print/getlist', {
          id: 123
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          // console.log('SUCCESS!!')
          resolve(response)
        })
        .catch(error => {
          // console.log('FAILURE!!')
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
