<template>
  <div class="content-1">
    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="box background-color-white" @click="changePosition(1)">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <b-image
                  :src="require('@/assets/frame-tumbnail.svg')"
                  alt="The Buefy Logo"
                  ratio="3by4"
                  :rounded="rounded"
                ></b-image>
              </figure>
            </div>
            <div class="media-content self-center">
              <div class="content">
                <div class="subtitle">
                  Size Example 1
                  <b-icon
                    icon="check-circle"
                    size=""
                    type="is-success"
                    v-if="selected == 1"
                  >
                  </b-icon>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div class="box background-color-white" @click="changePosition(2)">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <b-image
                  :src="require('@/assets/frame-tumbnail.svg')"
                  alt="The Buefy Logo"
                  ratio="3by4"
                  :rounded="rounded"
                ></b-image>
              </figure>
            </div>
            <div class="media-content self-center">
              <div class="content">
                <div class="subtitle">
                  Size Example 2
                  <b-icon
                    icon="check-circle"
                    size=""
                    type="is-success"
                    v-if="selected == 2"
                  >
                  </b-icon>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div class="box background-color-white" @click="changePosition(3)">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <b-image
                  :src="require('@/assets/frame-tumbnail.svg')"
                  alt="The Buefy Logo"
                  ratio="3by4"
                  :rounded="rounded"
                ></b-image>
              </figure>
            </div>
            <div class="media-content self-center">
              <div class="content">
                <div class="subtitle">
                  Size Example 3
                  <b-icon
                    icon="check-circle"
                    size=""
                    type="is-success"
                    v-if="selected == 3"
                  >
                  </b-icon>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div class="box background-color-white" @click="changePosition(4)">
          <article class="media">
            <div class="media-left">
              <figure class="image is-64x64">
                <b-image
                  :src="require('@/assets/frame-tumbnail.svg')"
                  alt="The Buefy Logo"
                  ratio="3by4"
                  :rounded="rounded"
                ></b-image>
              </figure>
            </div>
            <div class="media-content self-center">
              <div class="content">
                <div class="subtitle">
                  Size Example 4
                  <b-icon
                    icon="check-circle"
                    size=""
                    type="is-success"
                    v-if="selected == 4"
                  >
                  </b-icon>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content-1',
  props: {
    selected: Number
  },
  methods: {
    changePosition: function (position) {
      this.$emit('onframeSizeSelected', position)
    }
  }
}
</script>

<style>
</style>
