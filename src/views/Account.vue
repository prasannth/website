<template>
  <div>
    <show-at breakpoint="largeAndAbove">
      <div class="container is-fullhd">
        <section class="hero background-color-white">
          <div class="hero-body padding-top-bottom">
            <div class="is-flex align-center mt-4">
              <div class="is-flex-1">
                <div class="title is-3 is-bold">Account options</div>
              </div>
              <b-button
                class="is-btn"
                type="is-light is-danger"
                outlined
                @click="userLogout"
                >Logout <i class="fas fa-sign-out-alt"></i
              ></b-button>
            </div>
            <hr />
            <div class="is-flex">
              <div class="mr-6">
                <div class="mt-3">
                  <b-button @click="option = 1" type="is-link is-light"
                    >My Orders</b-button
                  >
                </div>
              </div>
              <div class="mr-6">
                <div class="mt-3">
                  <b-button disabled @click="option = 2" type="is-link is-light"
                    >My Rewards</b-button
                  >
                </div>
              </div>
              <div class="mt-3">
                <b-button @click="option = 2" type="is-link is-light"
                  >My Profile</b-button
                >
              </div>
            </div>
          </div>
        </section>
      </div>
    </show-at>

    <show-at breakpoint="mediumAndBelow">
      <div>
        <section class="hero is-small mt-4 text-center background-color-white">
          <div class="hero-body">
            <div class="card background-color-white">
              <div class="card-content text-left">
                <div class="title is-3 is-bold">Account options</div>

                <div class="">
                  <div class="mt-3">
                    <b-button
                      @click="option = 1"
                      class="is-btn"
                      expanded
                      type="is-link is-light"
                      >My Orders</b-button
                    >
                  </div>
                </div>
                <div class="">
                  <div class="mt-3">
                    <b-button
                      disabled
                      @click="option = 2"
                      type="is-link is-light"
                      class="is-btn"
                      expanded
                      >My Rewards</b-button
                    >
                  </div>
                </div>
                <div class="">
                  <div class="mt-3">
                    <b-button
                      @click="option = 2"
                      class="is-btn"
                      expanded
                      type="is-link is-light"
                      >My Profile</b-button
                    >
                  </div>
                </div>
                <div class="">
                  <div class="mt-3">
                    <b-button
                      @click="userLogout"
                      class="is-btn"
                      expanded
                      type="is-link is-light"
                      >Logout <i class="fas fa-sign-out-alt"></i
                    ></b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </show-at>

    <MyOrders v-if="option == 1"></MyOrders>
    <Profile v-if="option == 2"></Profile>
  </div>
</template>

<script>
import { showAt } from 'vue-breakpoints'

import MyOrders from './MyOrders.vue'
import Profile from './Profile.vue'

export default {
  name: 'Account',
  components: {
    showAt,
    Profile,
    MyOrders
  },
  data () {
    return {
      option: 1
    }
  },
  created: function () {},
  methods: {
    userLogout: function () {
      this.$store.dispatch('userLogout').then((response) => {
        this.$router.push('/')
      })
    }
  },
  computed: {
    getLoggedInStatus: function () {
      return this.$store.getters.getLoggedInStatus
    }
  }
}
</script>

<style>
</style>
