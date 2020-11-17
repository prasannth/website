import Vue from 'vue'
import Vuex from 'vuex'
import login from './loginModule'
import imageUpload from './images/ImageUpload'
import products from './products'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartItem: '',
    user_info: localStorage.getItem('user_data') || null,
    status: '',
    cartData: ''
  },
  mutations: {
    set_state (state, data) {
      state.status = data
    },
    set_cart_item (state, data) {
      state.cartItem = data
    },
    set_cartData (state, data) {
      state.cartData = data
    },
    set_user_address (state, data) {
      state.user_info.user_address = localStorage.getItem('user_address')
    }
  },
  actions: {
    checkout ({ commit }, cartData) {
      return new Promise((resolve, reject) => {
        commit('set_state', 'LOADING')

        var data = JSON.stringify({ id: this.getters.getUserId, cartData: cartData })

        var config = {
          method: 'post',
          url: 'http://192.168.0.9:3000/users/addToCart',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        }

        axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data))
            commit('set_state', 'SUCCESS')
            resolve(response)
          })
          .catch(function (error) {
            commit('set_state', 'ERROR')
            // console.log(error)
            reject(error)
          })
      })
    },
    login ({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('set_state', 'LOADING')

        var config = {
          method: 'post',
          url: 'http://192.168.0.9:3000/users/login',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        }

        axios(config)
          .then(function (response) {
            commit('set_state', 'SUCCESS')

            // basic details
            localStorage.setItem('user_data', JSON.stringify(response.data.userData))

            resolve(response)
          })
          .catch(function (error) {
            commit('set_state', 'ERROR')
            // console.log(error)
            reject(error)
          })
      })
    },
    create_account ({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('set_state', 'LOADING')

        var config = {
          method: 'post',
          url: 'http://192.168.0.9:3000/users/signup',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        }

        axios(config)
          .then(function (response) {
            commit('set_state', 'SUCCESS')
            // console.log(JSON.stringify(response.data))
            resolve(data)
          })
          .catch(function (error) {
            commit('set_state', 'ERROR')
            // console.log(error)
            reject(error)
          })
      })
    },
    getPinCodeDetails ({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('set_state', 'LOADING')
        var config = {
          method: 'get',
          url: 'https://api.postalpincode.in/pincode/' + data,
          headers: {}
        }

        axios(config)
          .then(function (response) {
            commit('set_state', 'SUCCESS')
            resolve(response)
          })
          .catch(function (error) {
            commit('set_state', 'ERROR')
            // console.log(error)
            reject(error)
          })
      })
    },
    getCartItem ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('set_state', 'LOADING')

        var data = JSON.stringify({ id: this.getters.getUserId })

        var config = {
          method: 'post',
          url: 'http://192.168.0.9:3000/users/getCart',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        }

        axios(config)
          .then(function (response) {
            commit('set_state', 'SUCCESS')
            // console.log(JSON.stringify(response.data))
            commit('set_cartData', response.data)
            resolve(response)
          })
          .catch(function (error) {
            commit('set_state', 'ERROR')
            // console.log(error)
            reject(error)
          })
      })
    },

    updateAddress ({ commit }, data) {
      return new Promise((resolve, reject) => {
        localStorage.setItem('user_address', data)
        resolve('User address updated')
      })
    },
    userLogout ({ commit }, data) {
      return new Promise((resolve, reject) => {
        localStorage.clear()
        resolve('User Logged out')
      })
    },

    saveCartOffline ({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('set_user_address', data)
        localStorage.setItem('cart_item', data)
        resolve('User Logged out')
      })
    },

    deleteCartItem ({ commit }, cartItem) {
      return new Promise((resolve, reject) => {
        commit('set_state', 'LOADING')
        var data = JSON.stringify({ id: this.getters.getUserId, cartId: cartItem })

        var config = {
          method: 'post',
          url: 'http://192.168.0.9:3000/users/deleteCartItem',
          headers: {
            'Content-Type': 'application/json'
          },
          data: data
        }

        axios(config)
          .then(function (response) {
            commit('set_state', 'SUCCESS')
            // console.log(JSON.stringify(response.data))
            resolve(response)
          })
          .catch(function (error) {
            commit('set_state', 'ERROR')
            // console.log(error)
            reject(error)
          })
      })
    }

  },
  getters: {
    getCartItem: state => state.cartItem,
    getCartData: state => state.cartData,
    getUserEmail: state => '',
    getCurrentAddress: state => '',
    getLoggedInStatus: state => {
      if (state.user_info !== null) {
        return true
      } else {
        return false
      }
    },
    getUserName: state => JSON.parse(state.user_info).firstName,
    getUserId: state => JSON.parse(state.user_info)._id
  },
  modules: {
    login,
    imageUpload,
    products
  }
})
