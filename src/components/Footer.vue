<template>
  <div class="bottom-footer">
    <show-at breakpoint="largeAndAbove">
      <div class="container is-fullhd">
        <section class="hero background-color-white">
          <div class="hero-body">
            <hr />
            <div class="title is-bolder">Canvas</div>
            <div class="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              et pretium massa.
            </div>
            <div class="title mt-3 is-5 is-bold">Follow us</div>
            <hr />
            <div class="is-flex">
              <b-icon icon="twitter" class="mr-4"></b-icon>
              <b-icon icon="instagram" class="mr-4"></b-icon>
              <b-icon icon="facebook" class="mr-4"></b-icon>
              <b-icon icon="pinterest" class="mr-4"></b-icon>
            </div>
            <div class="columns mt-5">
              <div class="column" v-for="item in footer_options" :key="item">
                <div class="title is-5 is-bold">{{ item.title }}</div>
                <div class="mt-3" v-for="link in item.links" :key="link">
                  <p>
                    <a class="subtitle is-6" :href="link.url">{{
                      link.name
                    }}</a>
                  </p>
                </div>
              </div>

              <div class="column">
                <div class="title is-5 is-bold">Newsletter</div>
                <div class="mt-3">
                  <div class="subtitle is-7">
                    Sign up for exclusive offers, photo tips, gift ideas, and
                    new products.
                  </div>
                  <b-field label="E-mail address">
                    <b-input v-model="name"></b-input>
                  </b-field>
                  <b-button class="is-btn" type="is-primary" expanded
                    >Sign up</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </show-at>
    <show-at breakpoint="mediumAndBelow">
      <div class="footers">
        <section class="hero is-small background-color-white">
          <div class="hero-body">
            <hr />
            <div class="title is-3 is-bolder">Canvas</div>
            <div class="subtitle is-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              et pretium massa.
            </div>
            <div class="title mt-3 is-5">Follow us</div>
            <hr />
            <div class="is-flex">
              <b-icon icon="twitter" class="is-flex-1"></b-icon>
              <b-icon icon="instagram" class="is-flex-1"></b-icon>
              <b-icon icon="facebook" class="is-flex-1"></b-icon>
              <b-icon icon="pinterest" class="is-flex-1"></b-icon>
            </div>
            <div class="columns mt-5">
              <div class="column" v-for="item in footer_options" :key="item">
                <div class="title is-5 is-bold">{{ item.title }}</div>
                <div class="mt-3" v-for="link in item.links" :key="link">
                  <p>
                    <a class="subtitle is-6" :href="link.url">{{
                      link.name
                    }}</a>
                  </p>
                </div>
              </div>

              <div class="column">
                <div class="title is-5 is-bold">Newsletter</div>
                <div class="mt-3">
                  <div class="subtitle is-7">
                    Sign up for exclusive offers, photo tips, gift ideas, and
                    new products.
                  </div>
                  <b-field label="E-mail address">
                    <b-input v-model="name" type="email"></b-input>
                  </b-field>
                  <b-button class="is-btn" type="is-primary" expanded
                    >Sign up</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </show-at>
  </div>
</template>

<script>
import { showAt } from 'vue-breakpoints'
export default {
  name: 'footer',
  components: {
    showAt
  },
  data () {
    return {
      footer_options: [
        {
          title: 'Product',
          links: [
            {
              name: 'Canvas prints',
              url: '/types/type1'
            },
            {
              name: 'Framed prints',
              url: '/types/type2'
            },
            {
              name: 'Photo prints',
              url: '/types/type3'
            },
            {
              name: 'Triptych prints',
              url: '/types/type4'
            },
            {
              name: 'Pet portraits',
              url: '/types/type5'
            }
          ]
        },
        {
          title: 'About us',
          links: [
            {
              name: 'Why us',
              url: ''
            },
            {
              name: 'About us',
              url: ''
            },
            {
              name: 'Reviews',
              url: ''
            },
            {
              name: 'Pricing',
              url: ''
            }
          ]
        },
        {
          title: 'Inspiration',
          links: [
            {
              name: 'Ideas',
              url: ''
            },
            {
              name: 'Home office art',
              url: ''
            },
            {
              name: 'Office art',
              url: ''
            },
            {
              name: 'Kids art',
              url: ''
            },
            {
              name: 'Blog',
              url: ''
            }
          ]
        },
        {
          title: 'Customer support',
          links: [
            {
              name: 'FAQ',
              url: ''
            },
            {
              name: 'Contact us',
              url: ''
            },
            {
              name: 'Terms of use',
              url: ''
            },
            {
              name: 'Privacy policy',
              url: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
</style>
