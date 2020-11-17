<template>
  <div id="app">
    <v-breakpoint>
      <NavHeader v-show="showFooter" />

      <router-view class="content-start" />
      <Footer v-show="showFooter" />
    </v-breakpoint>

    <notifications class="mt-6" position="top center" />
  </div>
</template>
<script>
import NavHeader from '@/components/NavHeader.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    NavHeader,
    Footer
  },
  data () {
    return {
      showFooter: true
    }
  },
  created: function () {},
  beforeCreate () {
    this.$root.$on('hide-footer', (data) => {
      // console.log('hide-footer', data)
      this.showFooter = data
    })
  },
  mounted () {
    this.$root.$on('hide-footer', (data) => {
      // console.log('hide-footer', data)
      this.showFooter = data
    })
  }
}
</script>
<style>
</style>
