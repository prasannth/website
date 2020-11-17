<template>
  <div class="type">
    <show-at breakpoint="largeAndAbove">
      <div class="container is-fullhd">
        <!-- Section 1 -->
        <section class="hero is-medium background-3">
          <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div class="column"></div>
                <div class="column">
                  <div class="box p-6 background-color-white">
                    <article class="media">
                      <div class="content">
                        <div class="title is-2 is-bold">
                          Photo collages, your own unique way.
                        </div>
                        <div class="subtitle mt-4">
                          An elegant and timeless treatment for all your fondest
                          moments.
                        </div>
                        <b-button
                          type="is-primary"
                          tag="router-link"
                          class="mt-4 is-btn"
                          to="/design/create-canvas/create"
                          >Create your print</b-button
                        >
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Section 1 -->

        <!-- Section-2 -->
        <section class="hero is-bold background-color-white">
          <div class="hero-body">
            <div class="container text-center justify-center">
              <div class="title is-3 is-bold">How it works</div>

              <div class="columns mt-6">
                <div class="column">
                  <b-image
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="The Buefy Logo"
                    ratio="4by3"
                  ></b-image>
                  <div class="mt-6">
                    <div class="title is-5 is-bold">Upload</div>
                    <div class="subtitle mt-2 is-6">
                      We've created the tools for you. Just upload your image to
                      get started. Almost every image size will work!
                    </div>
                  </div>
                </div>
                <div class="column">
                  <b-image
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="The Buefy Logo"
                    ratio="4by3"
                  ></b-image>
                  <div class="mt-6">
                    <div class="title is-5 is-bold">Customize</div>
                    <div class="subtitle mt-2 is-6">
                      Choose the size, edge options, frame (if you want), and
                      make something uniquely your own.
                    </div>
                  </div>
                </div>
                <div class="column">
                  <b-image
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="The Buefy Logo"
                    ratio="4by3"
                  ></b-image>
                  <div class="mt-6">
                    <div class="title is-5 is-bold">Print</div>
                    <div class="subtitle mt-2 is-6">
                      We'll do the rest. Your canvas is expertly crafted by hand
                      and delivered to you in a few days.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Section-2 -->

        <!-- Section-3 -->
        <section class="hero is-medium background-color-white">
          <div class="hero-body">
            <div class="container">
              <div class="columns">
                <div class="column">
                  <div class="title is-3 is-bold">
                    Your photo memories, all in one place.
                  </div>
                  <div class="subtitle mt-6">
                    Create your photo collage exactly how you want it with our
                    easy-to-use collage builder. It will elegantly display up to
                    24 images for a canvas or framed print.
                  </div>
                  <button class="button is-primary mt-6">Start creating</button>
                </div>
                <div class="column">
                  <b-image
                    src="https://picsum.photos/600/400"
                    alt="A random image"
                    ratio="6by4"
                    :rounded="rounded"
                  ></b-image>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Section-3 -->

        <!-- Section-4 -->
        <section class="hero is-medium background-color-white">
          <div class="hero-body">
            <div class="container">
              <div class="title is-3 is-bold">Specification</div>
              <hr />
              <div class="p-4">
                <div class="columns">
                  <div class="column is-3">
                    <div class="title is-bold is-6">Canvas</div>
                  </div>
                  <div class="column">
                    <div class="subtitle is-6">
                      Water and fade resistant, museum-quality archival canvas.
                    </div>
                  </div>
                </div>
                <hr />
                <div class="columns">
                  <div class="column is-3">
                    <div class="title is-bold is-6">Frames</div>
                  </div>
                  <div class="column">
                    <div class="subtitle is-6">
                      Choose from a 0.75″ or 1.25″ depth stretched canvas or add
                      a black, white, or espresso float frame.
                    </div>
                  </div>
                </div>
                <hr />
                <div class="columns">
                  <div class="column is-3">
                    <div class="title is-bold is-6">Edges</div>
                  </div>
                  <div class="column">
                    <div class="subtitle is-6">
                      Classic black, white, or photo-wrapped border.
                    </div>
                  </div>
                </div>
                <hr />
                <div class="columns">
                  <div class="column is-3">
                    <div class="title is-bold is-6">Sizes</div>
                  </div>
                  <div class="column">
                    <div class="subtitle is-6">
                      Choose from a selection of our most popular, standard
                      sizes.
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </section>
        <!-- Section-4 -->

        <!-- Section-5 -->
        <section class="hero background-color-white">
          <div class="hero-body">
            <div class="container">
              <div class="text-center">
                <div class="title is-3 is-bold">Our best-selling sizes</div>
                <div class="subtitle">
                  Our most popular canvas prints are classics for a reason.
                </div>
              </div>
              <div class="columns mt-6">
                <div class="column">
                  <b-image
                    src="https://picsum.photos/600/800"
                    alt="A random image"
                    ratio="5by6"
                    :rounded="rounded"
                  ></b-image>
                </div>
                <div class="column">
                  <div>
                    <div class="title is-4">Square</div>
                    <div class="buttons">
                      <b-button
                        rounded
                        class="is-primary is-btn size-button"
                        outlined
                        >Rounded</b-button
                      >
                      <b-button
                        rounded
                        class="is-primary is-btn size-button"
                        outlined
                        >Rounded</b-button
                      >
                      <b-button
                        rounded
                        class="is-primary is-btn size-button"
                        outlined
                        >Rounded</b-button
                      >
                    </div>
                  </div>
                  <div class="mt-5">
                    <div class="title is-4">Portrait</div>
                    <div class="buttons">
                      <b-button
                        rounded
                        class="is-primary is-btn size-button"
                        outlined
                        >Rounded</b-button
                      >
                      <b-button
                        rounded
                        class="is-primary is-btn size-button"
                        outlined
                        >Rounded</b-button
                      >
                      <b-button
                        rounded
                        class="is-primary is-btn size-button"
                        outlined
                        >Rounded</b-button
                      >
                    </div>
                  </div>
                  <div class="mt-5">
                    <div class="title is-4">Landscape</div>
                    <div class="buttons">
                      <b-button
                        rounded
                        class="is-primary is-btn size-button"
                        outlined
                        >Rounded</b-button
                      >
                      <b-button
                        rounded
                        class="is-primary is-btn size-button"
                        outlined
                        >Rounded</b-button
                      >
                      <b-button
                        rounded
                        class="is-primary is-btn size-button"
                        outlined
                        >Rounded</b-button
                      >
                    </div>
                  </div>

                  <div class="title mt-5 is-5">Custom size canvas print</div>
                  <div class="subtitle">
                    We also offer many custom and large format sizes.
                  </div>
                  <b-button
                    class="is-primary"
                    tag="router-link"
                    to="/design/create-canvas/create"
                    >Create your canvas print</b-button
                  >
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Section-5 -->

        <!-- Section-6 -->
        <section class="hero is-medium is-bold background-color-white">
          <div class="hero-body">
            <div class="container text-center justify-center">
              <div class="title is-3 is-bold">Edge options</div>

              <div class="columns mt-6">
                <div class="column">
                  <b-image
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="The Buefy Logo"
                    ratio="5by6"
                  ></b-image>
                  <div class="mt-6">
                    <div class="subtitle mt-2 is-6">
                      Black wood frame, 1.25″ deep.
                    </div>
                  </div>
                </div>
                <div class="column">
                  <b-image
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="The Buefy Logo"
                    ratio="5by6"
                  ></b-image>
                  <div class="mt-6">
                    <div class="subtitle mt-2 is-6">
                      White wood frame, 1.25″ deep.
                    </div>
                  </div>
                </div>
                <div class="column">
                  <b-image
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt="The Buefy Logo"
                    ratio="5by6"
                  ></b-image>
                  <div class="mt-6">
                    <div class="subtitle mt-2 is-6">
                      Espresso wood frame, 1.25″ deep.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Section-6 -->

        <!-- Section 7 -->

        <v-show-at small medium>
          <section class="hero is-medium is-bold">
            <div class="hero-body">
              <div class="container text-center justify-center">
                <div class="title is-3 is-bold">
                  See what our customers are saying
                </div>
                <b-carousel-list
                  class="mt-6"
                  v-model="values"
                  :data="items"
                  :arrow="arrow"
                  :arrow-hover="arrowHover"
                  :items-to-show="2"
                  :items-to-list="increment"
                  :repeat="repeat"
                  :has-drag="drag"
                  :has-grayscale="false"
                  :has-opacity="opacity"
                >
                  <template slot="item">
                    <div class="card pt-6 pb-6 mr-2 background-color-white">
                      <div class="card-content">
                        <div class="content">
                          <div class="title is-1">"</div>
                          <div class="title is-5 mt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam nec condimentum enim, nec placerat lacus.
                            Aliquam eget ligula cursus, vulputate eros in,
                            consectetur tellus.
                          </div>
                          <div class="subtitle mt-2">Client name</div>
                        </div>
                      </div>
                    </div>
                  </template>
                </b-carousel-list>
                <b-button type="is-primary is-light mt-6"
                  >See all reviews</b-button
                >
              </div>
            </div>
          </section>
        </v-show-at>

        <v-show-at large xlarge>
          <section class="hero is-medium is-bold">
            <div class="hero-body">
              <div class="container text-center justify-center">
                <div class="title is-3 is-bold">
                  See what our customers are saying
                </div>
                <b-carousel-list
                  class="mt-6"
                  v-model="values"
                  :data="items"
                  :arrow="arrow"
                  :arrow-hover="arrowHover"
                  :items-to-show="3"
                  :items-to-list="increment"
                  :repeat="repeat"
                  :has-drag="drag"
                  :has-grayscale="false"
                  :has-opacity="opacity"
                >
                  <template slot="item">
                    <div class="card pt-6 pb-6 mr-2 background-color-white">
                      <div class="card-content">
                        <div class="content">
                          <div class="title is-1">"</div>
                          <div class="title is-5 mt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam nec condimentum enim, nec placerat lacus.
                            Aliquam eget ligula cursus, vulputate eros in,
                            consectetur tellus.
                          </div>
                          <div class="subtitle mt-2">Client name</div>
                        </div>
                      </div>
                    </div>
                  </template>
                </b-carousel-list>
                <b-button type="is-primary is-light mt-6"
                  >See all reviews</b-button
                >
              </div>
            </div>
          </section>
        </v-show-at>
        <!-- section-7 -->
      </div>
    </show-at>

    <show-at breakpoint="mediumAndBelow">
      <div>
        <!-- Section-1 -->

        <section class="hero mobile-background-3">
          <div class="hero-body"></div>
        </section>
        <section class="hero is-small text-center">
          <div class="hero-body background-color-white">
            <div class="title is-3 is-bold">Canvas prints. Uniquely yours.</div>
            <div class="subtitle is-7 mt-4">
              An elegant and timeless treatment for all your fondest moments.
            </div>

            <b-button
              type="is-primary"
              tag="router-link"
              class="mt-4 is-btn"
              to="/design/create-canvas/create"
              >Create your print</b-button
            >
          </div>
        </section>

        <!-- Section-1 -->

        <!-- Section-2 -->
        <section class="hero is-small background-color-white">
          <div class="hero-body">
            <div class="container text-center justify-center">
              <div class="title is-3 is-bold">How it works</div>

              <b-carousel class="">
                <b-carousel-item v-for="(item, i) in section_2" :key="i">
                  <section class="hero is-medium min-height-100">
                    <div class="hero-body has-text-centered">
                      <b-image
                        :src="item.image_url"
                        alt="The Buefy Logo"
                        ratio="5by6"
                      ></b-image>
                      <div class="mt-6">
                        <div class="title is-5 is-bold">{{ item.title }}</div>
                        <div class="subtitle is-6 mt-2">{{ item.content }}</div>
                      </div>
                    </div>
                  </section>
                </b-carousel-item>
              </b-carousel>
              <b-button type="is-primary is-light is-btn mt-4"
                >Why choose us</b-button
              >
            </div>
          </div>
        </section>
        <!-- Section-2 -->

        <!-- Section-3 -->
        <section class="hero background-1">
          <div class="hero-body"></div>
        </section>
        <section class="hero is-small text-center">
          <div class="hero-body background-color-white">
            <div class="title is-3 is-bold">
              Your photo memories, all in one place.
            </div>
            <div class="subtitle is-7 mt-4">
              Create your photo collage exactly how you want it with our
              easy-to-use collage builder. It will elegantly display up to 24
              images for a canvas or framed print.
            </div>

            <b-button
              type="is-primary"
              tag="router-link"
              class="mt-4 is-btn"
              to="/design/create-canvas/create"
              >Start creating</b-button
            >
          </div>
        </section>
        <!-- Section-3 -->

        <!-- Section-4 -->
        <section class="hero is-small background-color-white">
          <div class="hero-body">
            <div class="container">
              <div class="title is-3 is-bold">Specification</div>
              <hr />

              <div class="columns">
                <div class="column is-3">
                  <div class="title is-6 is-bold">Canvas</div>
                </div>
                <div class="column">
                  <div class="subtitle is-7">
                    Water and fade resistant, museum-quality archival canvas.
                  </div>
                </div>
              </div>
              <hr />
              <div class="columns">
                <div class="column is-3">
                  <div class="title is-6">Frames</div>
                </div>
                <div class="column">
                  <div class="subtitle is-7">
                    Choose from a 0.75″ or 1.25″ depth stretched canvas or add a
                    black, white, or espresso float frame.
                  </div>
                </div>
              </div>
              <hr />
              <div class="columns">
                <div class="column is-3">
                  <div class="title is-6">Edges</div>
                </div>
                <div class="column">
                  <div class="subtitle is-7">
                    Classic black, white, or photo-wrapped border.
                  </div>
                </div>
              </div>
              <hr />
              <div class="columns">
                <div class="column is-3">
                  <div class="title is-6">Sizes</div>
                </div>
                <div class="column">
                  <div class="subtitle is-7">
                    Choose from a selection of our most popular, standard sizes.
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </section>
        <!-- Section-4 -->

        <!-- Section 5 -->
        <section class="hero is-small text-center background-color-white">
          <div class="hero-body">
            <div class="container">
              <div class="title is-3 is-bold">Our best-selling sizes</div>
              <div class="subtitle is-7 mt-2">
                Our most popular canvas prints are classics for a reason.
              </div>
            </div>
          </div>
        </section>

        <section class="hero is-small text-center background-2">
          <div class="hero-body"></div>
        </section>
        <div class="background-color-white">
          <b-tabs position="is-centered" class="block" :expanded="true">
            <b-tab-item label="Square">
              <div>
                <div class="title is-5">Square</div>
                <div class="buttons is-centered">
                  <b-button
                    rounded
                    class="is-primary size-button is-btn-small"
                    outlined
                    >Rounded</b-button
                  >
                  <b-button
                    rounded
                    class="is-primary size-button is-btn-small"
                    outlined
                    >Rounded</b-button
                  >
                  <b-button
                    rounded
                    class="is-primary size-button is-btn-small"
                    outlined
                    >Rounded</b-button
                  >
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="Portrait">
              <div>
                <div class="title is-5">Portrait</div>
                <div class="buttons is-centered">
                  <b-button
                    rounded
                    class="is-primary size-button is-btn-small"
                    outlined
                    >Rounded</b-button
                  >
                  <b-button
                    rounded
                    class="is-primary size-button is-btn-small"
                    outlined
                    >Rounded</b-button
                  >
                  <b-button
                    rounded
                    class="is-primary size-button is-btn-small"
                    outlined
                    >Rounded</b-button
                  >
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="Landscape">
              <div>
                <div class="title is-5">Landscape</div>
                <div class="buttons is-centered">
                  <b-button
                    rounded
                    class="is-primary size-button is-btn-small"
                    outlined
                    >Rounded</b-button
                  >
                  <b-button
                    rounded
                    class="is-primary size-button is-btn-small"
                    outlined
                    >Rounded</b-button
                  >
                  <b-button
                    rounded
                    class="is-primary size-button is-btn-small"
                    outlined
                    >Rounded</b-button
                  >
                </div>
              </div>
            </b-tab-item>
          </b-tabs>
          <section class="hero is-small text-center background-color-white">
            <div class="hero-body">
              <div class="title is-5">Custom size canvas print</div>
              <div class="subtitle is-7">
                PWe also offer many custom and large format sizes.
              </div>
              <b-button class="is-btn is-primary"
                >Create your canvas print</b-button
              >
            </div>
          </section>
        </div>
        <!-- Section 5 -->

        <!-- Section 6 -->
        <section class="hero is-small background-color-white">
          <div class="hero-body">
            <div class="container text-center justify-center">
              <div class="title is-3 is-bold">Edge options</div>

              <b-carousel class="">
                <b-carousel-item v-for="(item, i) in frame_option" :key="i">
                  <section class="hero is-medium min-height-100">
                    <div class="hero-body has-text-centered">
                      <b-image
                        :src="item.image_url"
                        alt="The Buefy Logo"
                        ratio="5by6"
                      ></b-image>
                      <div class="mt-6">
                        <div class="subtitle is-6 mt-2">{{ item.content }}</div>
                      </div>
                    </div>
                  </section>
                </b-carousel-item>
              </b-carousel>
            </div>
          </div>
        </section>
        <!-- Section 6 -->
        <!-- Section 7 -->

        <show-at breakpoint="largeAndAbove">
          <section class="hero is-medium is-bold">
            <div class="hero-body">
              <div class="container text-center justify-center">
                <div class="title">See what our customers are saying</div>
                <b-carousel-list
                  class="mt-6"
                  v-model="values"
                  :data="items"
                  :arrow="arrow"
                  :arrow-hover="arrowHover"
                  :items-to-show="3"
                  :items-to-list="increment"
                  :repeat="repeat"
                  :has-drag="drag"
                  :has-grayscale="false"
                  :has-opacity="opacity"
                >
                  <template slot="item">
                    <div class="card pt-6 pb-6 mr-2 background-color-white">
                      <div class="card-content">
                        <div class="content">
                          <div class="title is-1">"</div>
                          <div class="title is-5 mt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam nec condimentum enim, nec placerat lacus.
                            Aliquam eget ligula cursus, vulputate eros in,
                            consectetur tellus.
                          </div>
                          <div class="subtitle mt-2">Client name</div>
                        </div>
                      </div>
                    </div>
                  </template>
                </b-carousel-list>
                <b-button type="is-primary is-light mt-6"
                  >See all reviews</b-button
                >
              </div>
            </div>
          </section>
        </show-at>

        <show-at breakpoint="mediumAndBelow">
          <section class="hero is-small is-bold">
            <div class="hero-body">
              <div class="container text-center justify-center">
                <div class="title">See what our customers are saying</div>
                <b-carousel-list
                  class="mt-6"
                  v-model="values"
                  :data="items"
                  :arrow="arrow"
                  :arrow-hover="arrowHover"
                  :items-to-show="1"
                  :items-to-list="increment"
                  :repeat="repeat"
                  :has-drag="drag"
                  :has-grayscale="false"
                  :has-opacity="opacity"
                >
                  <template slot="item">
                    <div class="card pt-6 pb-6 mr-2 background-color-white">
                      <div class="card-content">
                        <div class="content">
                          <div class="title is-1">"</div>
                          <div class="title is-5 mt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam nec condimentum enim, nec placerat lacus.
                            Aliquam eget ligula cursus, vulputate eros in,
                            consectetur tellus.
                          </div>
                          <div class="subtitle mt-2">Client name</div>
                        </div>
                      </div>
                    </div>
                  </template>
                </b-carousel-list>
                <b-button type="is-primary is-light mt-6"
                  >See all reviews</b-button
                >
              </div>
            </div>
          </section>
        </show-at>

        <!-- Section 7 -->
      </div>
    </show-at>
  </div>
</template>

<script>
import { showAt } from 'vue-breakpoints'

export default {
  name: 'type1',
  components: { showAt },
  data () {
    return {
      quotes: '"',
      arrow: true,
      arrowHover: true,
      drag: true,
      gray: false,
      opacity: false,
      values: 1,
      perList: 3,
      increment: 1,
      repeat: false,
      items: [
        {
          title: 'Slide 1',
          image: 'https://picsum.photos/id/0/1230/500'
        },
        {
          title: 'Slide 2',
          image: 'https://picsum.photos/id/1/1230/500'
        },
        {
          title: 'Slide 3',
          image: 'https://picsum.photos/id/2/1230/500'
        },
        {
          title: 'Slide 4',
          image: 'https://picsum.photos/id/3/1230/500'
        },
        {
          title: 'Slide 5',
          image: 'https://picsum.photos/id/4/1230/500'
        },
        {
          title: 'Slide 6',
          image: 'https://picsum.photos/id/5/1230/500'
        },
        {
          title: 'Slide 7',
          image: 'https://picsum.photos/id/6/1230/500'
        },
        {
          title: 'Slide 8',
          image: 'https://picsum.photos/id/7/1230/500'
        }
      ],
      section_2: [
        {
          title: 'Upload',
          content:
            "We've created the tools for you. Just upload your image to get started. Almost every image size will work!",
          image_url: 'https://picsum.photos/seed/picsum/500/600'
        },
        {
          title: 'Customize',
          content:
            'Choose the size, edge options, frame (if you want), and make something uniquely your own.',
          image_url: 'https://picsum.photos/seed/picsum/500/600'
        },
        {
          title: 'Print',
          content:
            "We'll do the rest. Your canvas is expertly crafted by hand and delivered to you in a few days.",
          image_url: 'https://picsum.photos/seed/picsum/500/600'
        }
      ],
      mobile_section_5: [
        {
          title: 'Upload',
          content:
            "We've created the tools for you. Just upload your image to get started. Almost every image size will work!",
          image_url: 'https://picsum.photos/seed/picsum/500/600'
        },
        {
          title: 'Customize',
          content:
            'Choose the size, edge options, frame (if you want), and make something uniquely your own.',
          image_url: 'https://picsum.photos/seed/picsum/500/600'
        },
        {
          title: 'Print',
          content:
            "We'll do the rest. Your canvas is expertly crafted by hand and delivered to you in a few days.",
          image_url: 'https://picsum.photos/seed/picsum/500/600'
        }
      ],
      mobile_section_6: [
        {
          name: 'ROB S.',
          content:
            '“I ordered three custom, framed and matted collages for a special birthday. They were beautifully printed and framed. When one frame arrived cracked, their great customer service apologized and rushed a new one right away!”'
        },
        {
          name: 'CHERYL H.',
          content: '“Priceless photo made larger!!! Awesome canvas!!!”'
        },
        {
          name: 'JOHN M.',
          content:
            '“From start to finish, working with Canvaspop was an easy pleasure. Easy to follow website, excellent communication and a wonderful product in record time.”'
        },
        {
          name: 'PRASANTHI G.',
          content: '“The colors are so vivid, I love it so much!”'
        }
      ],
      frame_option: [
        {
          image_url: 'https://picsum.photos/seed/picsum/500/600',
          content: 'Black wood frame, 1.5″ deep.'
        },
        {
          image_url: 'https://picsum.photos/seed/picsum/500/600',
          content: 'White wood frame, 1.5″ deep.'
        },
        {
          image_url: 'https://picsum.photos/seed/picsum/500/600',
          content: 'Espresso wood frame, 1.5″ deep.'
        }
      ]
    }
  }
}
</script>

<style>
</style>
