<template>
  <div>
    <b-navbar
      :shadow="true"
      fixed-top
      class="container is-fullhd background-color-white pt-5 pb-5 pl-5 pr-5"
    >
      <template slot="brand" class="">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <div>
            <div class="title is-5 is-bolder">Canvas</div>
          </div>
        </b-navbar-item>
      </template>
      <template slot="start">
        <v-show-at no-match small medium>
          <b-navbar-dropdown label="Products" class="" collapsible>
            <b-navbar-item href="/types/type1"> Canvas prints </b-navbar-item>
            <b-navbar-item href="/types/type2"> Framed prints </b-navbar-item>
            <b-navbar-item href="/types/type3"> Photo collages </b-navbar-item>
            <b-navbar-item href="/types/type4"> Triptych prints </b-navbar-item>
            <b-navbar-item href="/types/type5"> Pet portraits </b-navbar-item>
          </b-navbar-dropdown>
        </v-show-at>
        <v-show-at large xlarge>
          <b-navbar-item @click="togglePrint()">
            <div>Products</div>
          </b-navbar-item>
        </v-show-at>
        <b-navbar-item href="/offers"> Offers </b-navbar-item>
        <b-navbar-item href="/gifts"> Gifts </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item href="/account/login" v-if="!getLoggedInStatus">
          <p class="control">
            <span class="icon">
              <i class="fas fa-user"></i>
            </span>
            <span>Login</span>
          </p>
        </b-navbar-item>
        <b-navbar-item v-if="getLoggedInStatus">
          <b-dropdown aria-role="list" animation="fade">
            <span
              slot="trigger"
              slot-scope="{ active }"
              class="control is-flex align-center self-center"
            >
              <figure class="image is-48x48 mr-4 drop-shadow border-rounded">
                <img
                  class="is-rounded min-height-100"
                  src="https://source.unsplash.com/random"
                />
              </figure>
              <span>{{ getUserName }}</span>
              <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
            </span>

            <b-dropdown-item aria-role="listitem" has-link class="background-color-white"
              ><a href="/account"> Account </a>
            </b-dropdown-item>
            <hr class="dropdown-divider" />
            <b-dropdown-item aria-role="listitem" @click="userLogout" class="background-color-white"
              >Logout</b-dropdown-item
            >
          </b-dropdown>
        </b-navbar-item>
        <b-navbar-item href="/checkout">
          <p class="control">
            <span class="icon">
              <i class="fas fa-cart-plus"></i>
            </span>
            <span>Cart</span>
          </p>
        </b-navbar-item>
      </template>
    </b-navbar>

    <v-show-at large xlarge>
      <div
        v-show="showPrints"
        class="custom-dropdown-item background-color-white container is-fullhd"
      >
        <div class="is-flex">
          <div
            class="is-flex-1 m-1 highlight-item"
            @click="goto('/types/type1')"
          >
            <b-image
              class="item-recommended"
              :src="require('@/assets/recommended.svg')"
              alt="A random image"
              :rounded="rounded"
            ></b-image>
            <b-image
              src="https://picsum.photos/600/600"
              alt="A random image"
              ratio="6by6"
              :rounded="rounded"
            ></b-image>
            <div class="mt-2 p-2">
              <div class="title is-5 is-bold">Canvas print</div>
              <div class="subtitle mt-1 is-7">
                For the moments you want to share with everyone, our custom
                high-quality canvas is guaranteed to stand the test of time.
              </div>
            </div>
          </div>
          <div
            class="is-flex-1 m-1 highlight-item"
            @click="goto('/types/type2')"
          >
            <b-image
              src="https://picsum.photos/600/600"
              alt="A random image"
              ratio="6by6"
              :rounded="rounded"
            ></b-image>
            <div class="mt-2 p-2">
              <div class="title is-5 is-bold">Framed prints</div>
              <div class="subtitle mt-1 is-7">
                Transform your most precious memories with a touch of
                contemporary elegance. Our premium gallery framed prints will
                look at home on any wall.
              </div>
            </div>
          </div>
          <div
            class="is-flex-1 m-1 highlight-item"
            @click="goto('/types/type3')"
          >
            <b-image
              src="https://picsum.photos/600/600"
              alt="A random image"
              ratio="6by6"
              :rounded="rounded"
            ></b-image>
            <div class="mt-2 p-2">
              <div class="title is-5 is-bold">Photo collages</div>
              <div class="subtitle mt-1 is-7">
                An elegant and timeless treatment for all your fondest moments.
              </div>
            </div>
          </div>
          <div
            class="is-flex-1 m-1 highlight-item"
            @click="goto('/types/type4')"
          >
            <b-image
              src="https://picsum.photos/600/600"
              alt="A random image"
              ratio="6by6"
              :rounded="rounded"
            ></b-image>
            <div class="mt-2 p-2">
              <div class="title is-5 is-bold">Triptych Prints</div>
              <div class="subtitle mt-1 is-7">
                Create a dramatic art piece with a dynamic three-panel print.
              </div>
            </div>
          </div>
          <div
            class="is-flex-1 m-1 highlight-item"
            @click="goto('/types/type5')"
          >
            <b-image
              src="https://picsum.photos/600/600"
              alt="A random image"
              ratio="6by6"
              :rounded="rounded"
            ></b-image>
            <div class="mt-2 p-2">
              <div class="title is-5 is-bold">Pet portraits</div>
              <div class="subtitle mt-1 is-7">
                Create a custom portrait that perfectly captures your pet and
                their personality.
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-show-at>
  </div>
</template>

<script>
import { VShowAt } from 'vue-breakpoint-component'

export default {
  components: {
    VShowAt
  },
  name: 'nav-header',
  data () {
    return {
      showPrints: false
    }
  },
  methods: {
    goto: function (path) {
      this.$router.push({ path: path })
      this.togglePrint()
    },
    togglePrint: function () {
      if (this.showPrints === true) {
        this.showPrints = false
      } else {
        this.showPrints = true
      }
    },
    userLogout: function () {
      this.$store.dispatch('userLogout').then((response) => {
        this.$router.push('/')
      })
    }
  },
  created: function () {},
  computed: {
    getLoggedInStatus: function () {
      return this.$store.getters.getLoggedInStatus
    },
    getUserName: function () {
      return this.$store.getters.getUserName
    },
    getUserEmail: function () {
      return this.$store.getters.getUserEmail
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
