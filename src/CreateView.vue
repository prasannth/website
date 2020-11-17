<template>
  <div class="create-view container is-fullhd">
    <b-loading
      :is-full-page="isFullPage"
      v-model="isLoading"
      :can-cancel="false"
    >
      <breeding-rhombus-spinner
        :animation-duration="2000"
        :size="50"
        color="#ff1d5e"
      />
    </b-loading>
    <show-at breakpoint="largeAndAbove">
      <div class="container is-fullhd">
        <!-- Design -->
        <div class="checkout-bar background-color-white">
          <div class="is-flex align-center">
            <b-button
              @click="goBack"
              type="is-text is-btn"
              size="is-large"
              icon-right="close"
              class="ml-6"
            />
            <div class="is-flex-1 ml-6">
              <div class="is-flex pb-0">
                <div class="subtitle is-5 mb-0">Your order cost -</div>
                <div class="subtitle is-title is-bold is-5 mb-1">
                  $ {{ getTotalOrderCost }}
                </div>
              </div>
              <div class="subtitle is-7 mt-1">
                This amount include tax, shipping charges and other service
                charges
              </div>
            </div>
            <b-button type="is-primary" class="is-btn" @click="addAllItemToCart"
              >Checkout</b-button
            >
          </div>
        </div>
        <div class="columns container">
          <!-- Image Preview -->

          <div class="column is-5 align-self-center frame-view">
            <div class="text-center justify-center">
              <b-upload v-model="file" @input="upload">
                <div v-show="currentTabID == 1">
                  <div class="title is-5 is-bold">Frame</div>
                  <div class="subtitle is-7">
                    {{ frameValue.frame_width }}" x
                    {{ frameValue.frame_height }}" frame size.
                    {{ frameValue.frame_inner_width }}" x
                    {{ frameValue.frame_inner_height }}" photo size.
                  </div>
                  <section class="image is-400x400">
                    <svg
                      :width="frameValue.frame_width"
                      :height="frameValue.frame_height"
                      :viewBox="
                        '0 0 ' +
                        frameValue.frame_width +
                        ' ' +
                        frameValue.frame_height
                      "
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="10"
                        y="10"
                        :width="frameValue.frame_stroke_width"
                        :height="frameValue.frame_stroke_height"
                        fill="white"
                        stroke="black"
                        stroke-width="20"
                      />
                      <rect
                        :x="frameValue.frame_inner_x"
                        :y="frameValue.frame_inner_y"
                        :width="frameValue.frame_inner_width"
                        :height="frameValue.frame_inner_height"
                        fill="#F5F5F5"
                        stroke="black"
                      />
                      <image
                        :x="frameValue.frame_inner_x"
                        :y="frameValue.frame_inner_y"
                        :width="frameValue.frame_inner_width"
                        :height="frameValue.frame_inner_height"
                        :href="checkout.selectedImageUrl"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                  </section>
                </div>

                <div v-show="currentTabID == 2">
                  <div class="title is-5 is-bold">Triptych</div>
                  <div class="subtitle is-7">
                    8" x 18" each part. 24" x 18" total length
                  </div>
                  <section class="image is-400x400">
                    <svg
                      width="500"
                      height="337"
                      viewBox="0 0 500 337"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.25"
                        y="0.25"
                        width="149.111"
                        height="336.125"
                        fill="white"
                        stroke="black"
                      />
                      <image
                        x="0.25"
                        y="0.25"
                        width="149.111"
                        height="336.125"
                        :href="checkout.selectedImageUrl"
                        :preserveAspectRatio="triptychAspectRation[0]"
                      />
                      <rect
                        x="155.25"
                        y="0.25"
                        width="149.111"
                        height="336.125"
                        fill="white"
                        stroke="black"
                      />
                      <image
                        x="155.25"
                        y="0.25"
                        width="149.111"
                        height="336.125"
                        :href="checkout.selectedImageUrl"
                        :preserveAspectRatio="triptychAspectRation[1]"
                      />
                      <rect
                        x="310.389"
                        y="1"
                        width="147.611"
                        height="334.625"
                        fill="white"
                        stroke="black"
                      />
                      <image
                        :preserveAspectRatio="triptychAspectRation[2]"
                        x="310.389"
                        y="1"
                        width="147.611"
                        height="334.625"
                        :href="checkout.selectedImageUrl"
                      />
                    </svg>
                  </section>
                </div>

                <div v-show="currentTabID == 3">
                  <div class="title is-6 is-bold">Currently Selected Image</div>
                  <div class="subtitle is-7">
                    1280 px x 1080 px image resolution
                  </div>
                  <section class="m-50">
                    <img
                      class="h-400"
                      :src="checkout.selectedImageUrl"
                      :alt="checkout.selectedImageUrl"
                    />
                  </section>
                </div>

                <div v-show="currentTabID == 4">
                  <div class="title is-6 is-bold">Selected Edge</div>
                  <div class="subtitle is-7">Edge Description</div>
                  <section class="image is-400x400">
                    <b-image
                      :src="referenceImage"
                      alt="A random image"
                      ratio="6by4"
                      :rounded="rounded"
                    ></b-image>
                  </section>
                </div>

                <div v-show="currentTabID == 5">
                  <div class="title is-6 is-bold">Selected Filter</div>
                  <div class="subtitle is-7">Filter Description</div>
                  <section class="image is-400x400">
                    <b-image
                      :src="referenceImage"
                      alt="A random image"
                      ratio="6by4"
                      :rounded="rounded"
                    ></b-image>
                  </section>
                </div>
              </b-upload>
            </div>
          </div>

          <!-- Image Preview -->

          <!-- Tool Panel -->
          <div
            class="column is-4 background-color-white pt-6 right-tool-panel min-height-100"
          >
            <b-tabs
              position="is-centered"
              class="block"
              @input="checkProductType"
            >
              <!-- Image preview -->
              <b-tab-item class="" label="Image" value="3">
                <div class="title is-6 is-bold">Select Image</div>
                <hr />
                <div class="text-center">
                  <b-upload v-model="file" @input="upload">
                    <a class="button is-primary is-fullwidth is-btn">
                      <span>{{ "Upload image" }}</span>
                    </a>
                  </b-upload>
                </div>
                <div class="columns is-multiline mt-4">
                  <div
                    class="column is-3"
                    v-for="(item, index) in userImageCollection"
                    :key="index"
                  >
                    <div
                      @click="
                        (checkout.selectedImageId = index),
                          (checkout.selectedImageUrl = item.imageURL)
                      "
                      :class="index == checkout.selectedImageId ? 'active' : ''"
                    >
                      <b-icon
                        class="image-select"
                        v-if="index == checkout.selectedImageId"
                        pack="fas"
                        type="is-primary"
                        icon="check-circle"
                        size="is-small"
                      >
                      </b-icon>
                      <frame class="image is-128x128">
                        <b-image
                          :src="item.thumbnailURL"
                          :alt="item.imageId"
                          ratio="6by6"
                          :rounded="rounded"
                        ></b-image>
                      </frame>
                    </div>
                  </div>
                </div>
                <hr />
              </b-tab-item>
              <!-- Image preview -->

              <!-- Frame preview -->
              <b-tab-item class="" label="Frame" value="1">
                <div class="title is-6 is-bold">Select Frame</div>
                <hr />
                <div
                  class="pt-3"
                  v-for="(list, index) in items"
                  :key="index"
                  @click="
                    changeActive(
                      list.frame,
                      list.title,
                      list.price,
                      index,
                      list.id
                    )
                  "
                >
                  <div
                    class="is-flex text-center"
                    :class="
                      checkout.properties[0].typeId === list.id ? 'active' : ''
                    "
                  >
                    <b-icon
                      class="image-select"
                      v-if="checkout.properties[0].typeId === list.id"
                      pack="fas"
                      type="is-primary"
                      icon="check-circle"
                      size="is-small"
                    >
                    </b-icon>
                    <svg
                      :width="list.frame.frame_width / 6"
                      :height="list.frame.frame_height / 6"
                      :viewBox="
                        '0 0 ' +
                        list.frame.frame_width +
                        ' ' +
                        list.frame.frame_height
                      "
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="10"
                        y="10"
                        :width="list.frame.frame_stroke_width"
                        :height="list.frame.frame_stroke_height"
                        fill="white"
                        stroke="black"
                        stroke-width="20"
                      />
                      <rect
                        :x="list.frame.frame_inner_x"
                        :y="list.frame.frame_inner_y"
                        :width="list.frame.frame_inner_width"
                        :height="list.frame.frame_inner_height"
                        fill="#F5F5F5"
                        stroke="black"
                      />
                      <image
                        :x="list.frame.frame_inner_x"
                        :y="list.frame.frame_inner_y"
                        :width="list.frame.frame_inner_width"
                        :height="list.frame.frame_inner_height"
                        :href="checkout.selectedImageUrl"
                        preserveAspectRatio="xMidYMid slice"
                      />
                    </svg>
                    <div class="is-flex-1 ml-3 text-left">
                      <div
                        class="title is-6"
                        :class="
                          checkout.properties[0].typeId === list.id
                            ? 'active-item'
                            : ''
                        "
                      >
                        {{ list.title }}
                      </div>

                      <div
                        class="subtitle is-7"
                        :class="
                          checkout.properties[0].typeId === list.id
                            ? 'active-item'
                            : ''
                        "
                      >
                        {{ list.frame.frame_width }}" x
                        {{ list.frame.frame_height }} " frame size.
                        {{ list.frame.frame_inner_width }}" x
                        {{ list.frame.frame_inner_height }} " photo size.
                      </div>
                      <div
                        class="title is-7"
                        :class="
                          checkout.properties[0].typeId === list.id
                            ? 'active-item'
                            : ''
                        "
                      >
                        <strong>$ {{ list.price }}</strong>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <!-- <div class="text-right mb-2">
                  <b-button
                    class="is-btn mr-2"
                    type="is-link"
                    size="is-small"
                    @click="removeFrameFromCart(event, list)"
                  >
                    Remove frame
                  </b-button>
                  <b-button
                    class="is-btn"
                    type="is-primary"
                    size="is-small"
                    @click="addFrameToCart(event, list)"
                  >
                    + Cart
                  </b-button>
                  <div class="subtitle is-7 mt-2">
                    Add the selected item to your cart, adjust quantity in cart
                    page.
                  </div>
                </div> -->
              </b-tab-item>
              <!-- Frame preview -->

              <!-- Triptych preview -->
              <!-- <b-tab-item class="" label="Triptych" value="2">
                <div class="title is-6 is-bold">Select Triptych</div>
                <div class="subtitle is-7">Fixed size only *</div>
                <hr />

                <div v-for="item in triptychValues" :key="item">
                  <div class="mb-4 mt-2" @click="activeTriptych(item)">
                    <div
                      class="is-flex"
                      :class="
                        currentSelectedTriptych.selectedTriptychId == item.id
                          ? 'triptych-active'
                          : ''
                      "
                    >
                      <b-icon
                        class="image-select"
                        v-if="
                          currentSelectedTriptych.selectedTriptychId == item.id
                        "
                        pack="fas"
                        type="is-primary"
                        icon="check-circle"
                        size="is-small"
                      >
                      </b-icon>
                      <svg
                        width="81"
                        height="60"
                        viewBox="0 0 81 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="1.14551"
                          y="0.977539"
                          width="25.5413"
                          height="58.0929"
                          fill="white"
                          stroke="black"
                          stroke-width="0.5"
                        />
                        <image
                          x="1.14551"
                          y="0.977539"
                          width="25.5413"
                          height="58.0929"
                          :href="checkout.selectedImageUrl"
                          :preserveAspectRatio="item.style[0]"
                        />
                        <rect
                          x="28.124"
                          y="0.977539"
                          width="25.5413"
                          height="58.0929"
                          fill="white"
                          stroke="black"
                          stroke-width="0.5"
                        />
                        <image
                          x="28.124"
                          y="0.977539"
                          width="25.5413"
                          height="58.0929"
                          :href="checkout.selectedImageUrl"
                          :preserveAspectRatio="item.style[1]"
                        />
                        <rect
                          x="54.4"
                          y="0.977539"
                          width="25.5413"
                          height="58.0929"
                          fill="white"
                          stroke="black"
                          stroke-width="0.5"
                        />
                        <image
                          x="54.4"
                          y="0.977539"
                          width="25.5413"
                          height="58.0929"
                          :href="checkout.selectedImageUrl"
                          :preserveAspectRatio="item.style[2]"
                        />
                      </svg>
                      <div class="is-flex-1 ml-2">
                        <div
                          class="title is-6"
                          :class="
                            currentSelectedTriptych.selectedTriptychId ==
                            item.id
                              ? 'active-item'
                              : ''
                          "
                        >
                          Triptych
                          <span
                            class="title is-7"
                            :class="
                              currentSelectedTriptych.selectedTriptychId ==
                              item.id
                                ? 'active-item'
                                : ''
                            "
                            >(Cover Image)</span
                          >
                        </div>
                        <div
                          class="subtitle is-7"
                          :class="
                            currentSelectedTriptych.selectedTriptychId ==
                            item.id
                              ? 'active-item'
                              : ''
                          "
                        >
                          <p>8" x 18" each part. 24" x 18" total length</p>
                        </div>
                        <div
                          class="title is-7"
                          :class="
                            currentSelectedTriptych.selectedTriptychId ==
                            item.id
                              ? 'active-item'
                              : ''
                          "
                        >
                          $ {{ item.price }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>

                <div class="text-right mb-2">
                  <b-button
                    class="is-btn"
                    type="is-primary"
                    @click="addTriptychToCart"
                  >
                    + Cart
                  </b-button>
                  <div class="subtitle is-7 mt-2">
                    Add the selected item to your cart, adjust quantity in cart
                    page.
                  </div>
                </div>
              </b-tab-item> -->
              <!-- Triptych preview -->

              <!-- Edge preview -->
              <b-tab-item class="" label="Edge" value="4">
                <div class="title is-6">
                  <div class="title is-6 is-bold">Select Edge</div>
                  <hr />
                  <div class="columns is-multiline">
                    <div
                      @click="selectActiveEdge(item)"
                      class="column is-3"
                      v-for="(item, index) in getEdge"
                      :key="index"
                      :class="
                        item._id == checkout.properties[1].typeId
                          ? 'active'
                          : ''
                      "
                    >
                      <b-icon
                        class="image-select"
                        v-if="checkout.properties[1].typeId == item._id"
                        pack="fas"
                        type="is-primary"
                        icon="check-circle"
                        size="is-small"
                      >
                      </b-icon>
                      <frame class="image is-128x128">
                        <b-image
                          :src="item.image"
                          alt="A random image"
                          ratio="6by6"
                          :rounded="rounded"
                        ></b-image>
                      </frame>

                      <div class="is-flex-1 ml-3 text-left">
                        <div
                          class="title is-6 mt-2"
                          :class="
                            item._id == checkout.properties[1].typeId
                              ? 'active-item'
                              : 'is-bold'
                          "
                        >
                          {{ item.name }}
                        </div>
                        <div
                          class="subtitle is-7"
                          :class="
                            item._id == checkout.properties[1].typeId
                              ? 'active-item'
                              : ''
                          "
                        >
                          $ {{ item.price }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="text-right mb-2">
                  <b-button class="is-btn" type="is-primary"> + Cart</b-button>
                  <div class="subtitle is-7 mt-2">
                    Add the selected item to your cart, adjust quantity in cart
                    page.
                  </div>
                </div> -->
              </b-tab-item>
              <!-- Edge preview -->

              <!-- Filter preview -->
              <b-tab-item class="" label="Filter" value="5">
                <div class="title is-6">
                  <div class="title is-6 is-bold">Select Filter</div>
                  <hr />
                  <div class="columns is-multiline">
                    <div
                      @click="selectActiveFilter(item)"
                      class="column is-3"
                      v-for="(item, index) in getFilter"
                      :key="index"
                      :class="
                        item._id == checkout.properties[2].typeId
                          ? 'active'
                          : ''
                      "
                    >
                      <b-icon
                        class="image-select"
                        v-if="item._id == checkout.properties[2].typeId"
                        pack="fas"
                        type="is-primary"
                        icon="check-circle"
                        size="is-small"
                      >
                      </b-icon>
                      <frame class="image is-128x128">
                        <b-image
                          :src="item.image"
                          alt="A random image"
                          ratio="6by6"
                          :rounded="rounded"
                        ></b-image>
                      </frame>

                      <div class="is-flex-1 ml-3 text-left">
                        <div
                          class="title is-6 mt-2"
                          :class="
                            item._id == checkout.properties[2].typeId
                              ? 'active-item'
                              : 'is-bold'
                          "
                        >
                          {{ item.name }}
                        </div>
                        <div
                          class="subtitle is-7"
                          :class="
                            item._id == checkout.properties[2].typeId
                              ? 'active-item'
                              : ''
                          "
                        >
                          $ {{ item.price }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- <div class="text-right mb-2">
                  <b-button class="is-btn" type="is-primary"> + Cart</b-button>
                  <div class="subtitle is-7 mt-2">
                    Add the selected item to your cart, adjust quantity in cart
                    page.
                  </div>
                </div> -->
              </b-tab-item>
              <!-- Filter preview -->
            </b-tabs>
          </div>

          <!-- Tool Panel -->
        </div>
        <!-- Design -->
      </div>
    </show-at>
    <show-at breakpoint="mediumAndBelow">
      <div>
        <div class="title is-5 text-center p-6">
          Creator view is not supported for mobile device. Will be enabled soon
        </div>
        <!-- <div class="checkout-bar background-color-white">
          <div class="is-flex align-center">
            <b-button
              @click="goBack"
              type="is-text is-btn"
              size="is-large"
              icon-right="close"
              class="ml-2"
            />
            <div class="is-flex-1 ml-2">
              <div class="title is-6 is-bold">
                Your Order <span><strong> $ 100.00</strong></span>
              </div>
              <div class="subtitle is-7">
                Includes tax, shipping charges and service charges
              </div>
            </div>
            <b-button
              @click="goCheckout"
              type="is-text is-btn"
              size="is-large"
              icon-right="cart"
              class="mr-2"
            />
          </div>
        </div> -->
        <!-- <div class="design-content">
          <div class="self-center justify-center text-center">
            <b-upload v-model="file" @input="upload" class="mt-6">
              <svg
                :width="frameValue.frame_width / 1.5"
                :height="frameValue.frame_height / 1.5"
                :viewBox="
                  '0 0 ' +
                  frameValue.frame_width +
                  ' ' +
                  frameValue.frame_height
                "
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="10"
                  y="10"
                  :width="frameValue.frame_stroke_width"
                  :height="frameValue.frame_stroke_height"
                  fill="white"
                  stroke="black"
                  stroke-width="20"
                />
                <rect
                  :x="frameValue.frame_inner_x"
                  :y="frameValue.frame_inner_y"
                  :width="frameValue.frame_inner_width"
                  :height="frameValue.frame_inner_height"
                  fill="#F5F5F5"
                  stroke="black"
                />
                <image
                  :x="frameValue.frame_inner_x"
                  :y="frameValue.frame_inner_y"
                  :width="frameValue.frame_inner_width"
                  :height="frameValue.frame_inner_height"
                  :href="'https://source.unsplash.com/user/erondu'"
                  preserveAspectRatio="xMidYMid slice"
                />
              </svg>
            </b-upload>
          </div>
        </div> -->

        <!-- <div class="bottom-sheet-button">
          <b-button
            class="is-btn"
            outlined
            rounded
            expanded
            type="is-link"
            @click="bottomSheetVisibility = true"
          >
            Show options
          </b-button>
        </div> -->

        <!-- Bottom Sheet Dialog -->
        <!-- <div class="bottom-sheet-dialog" v-show="bottomSheetVisibility">
          <b-button
            class="is-btn"
            outlined
            rounded
            expanded
            type="is-text"
            @click="bottomSheetVisibility = false"
          >
            <span class="icon is-small">
              <i class="fas fa-angle-down"></i> </span
          ></b-button>
          <div class="title is-6 mt-2">Size</div>
          <b-carousel-list v-model="test" :data="items" :items-to-show="3">
            <template slot="item" slot-scope="list">
              <div
                class="text-center"
                :class="currentFrame === list.title ? 'active' : ''"
                @click="
                  changeActive(
                    list.title,
                    list.svg_url,
                    list.frame,
                    list.price,
                    list.id
                  )
                "
              >
                <figure class="image is-32x32">
                  <b-image src="https://bulma.io/images/placeholders/32x32.png">
                  </b-image>
                </figure>
                <div class="mt-2">
                  <div
                    class="title is-6"
                    :class="currentFrame === list.title ? 'active-item' : ''"
                  >
                    {{ list.title }}
                  </div>
                  <div
                    class="subtitle is-7"
                    :class="currentFrame === list.title ? 'active-item' : ''"
                  >
                    $ {{ list.price }}
                  </div>
                  currentFrame
                </div>
              </div>
            </template>
          </b-carousel-list>

          <div class="mt-2 is-flex">
            <span class="title is-6 is-bold is-flex-1">Your Order </span>
            <span class="title is-6"> $100</span>
          </div>

          <b-button class="is-btn" type="is-primary" outlined expanded
            >+ Cart</b-button
          >
        </div> -->
        <!-- Bottom Sheet Dialog -->
      </div>
    </show-at>
  </div>
</template>

<script>
// import Content1 from './components/creater/Content1.vue'

import { showAt } from 'vue-breakpoints'
import { BreedingRhombusSpinner } from 'epic-spinners'

export default {
  name: 'create-view',
  components: { showAt, BreedingRhombusSpinner },
  data () {
    return {
      sizeDialogVisibility: false,
      bottomSheetVisibility: true,
      currentActiveTriptych: null,
      isFullPage: true,
      isLoading: true,

      // current tab view
      currentTabID: 3,

      // user selected image and image id
      checkout: {
        product_id: 123,
        selectedImageId: 123456,
        selectedImageUrl: '',
        properties: [
          {
            type: 'Frames',
            typeId: 0,
            price: 0.0
          },
          {
            type: 'Edge',
            typeId: 0,
            price: 0.0
          },
          {
            type: 'Filter',
            typeId: 0,
            price: 0.0
          }
        ]
      },

      triptychType: 1,
      photoEdge: 1,
      photoFilter: 1,

      // triptychValues: [
      //   {
      //     id: 1,
      //     style: ['xMinYMin slice', 'xMidYMid slice', 'xMaxYMax slice'],
      //     price: 100.0
      //   },
      //   {
      //     id: 2,
      //     style: ['xMidYMid slice', 'xMidYMid slice', 'xMidYMid slice'],
      //     price: 100.0
      //   }
      // ],

      // default frame size
      frameValue: {
        frame_width: 400,
        frame_height: 520,
        frame_stroke_width: 380,
        frame_stroke_height: 500,
        frame_inner_x: 90.5723,
        frame_inner_y: 111.861,
        frame_inner_width: 219.269,
        frame_inner_height: 295.558
      },

      currentSelectedFrame: {
        selectedImage: '',
        selectedFrameId: '',
        selectedFrameCost: ''
      },

      productDetail: {
        _id: '5fb24bc0cb3cd4ed420e96a2',
        bannerImage: '',
        description: 'haii',
        status: 1,
        name: 'Canvas Print',
        properties: [
          {
            type: 'sizes',
            typeId: 1,
            variant: [
              {
                _id: 1,
                category: 'Square',
                name: '8"x10"',
                price: '71.00',
                image: ''
              },
              {
                _id: 2,
                category: 'Square',
                name: '12"x16"',
                price: '85.00',
                image: ''
              },
              {
                _id: 3,
                category: 'Square',
                name: '18"x24"',
                price: '118.00',
                image: ''
              },
              {
                _id: 4,
                category: 'Portrait',
                name: '18"x24"',
                price: '118.00',
                image: ''
              },
              {
                _id: 5,
                category: 'Portrait',
                name: '30"x40"',
                price: '243.00',
                image: ''
              },
              {
                _id: 6,
                category: 'Portrait',
                name: '8"x10"',
                price: '71.00',
                image: ''
              },
              {
                _id: 7,
                category: 'Landscape',
                name: '12"x16"',
                price: '85.00',
                image: ''
              },
              {
                _id: 8,
                category: 'Landscape',
                name: '18"x24"',
                price: '118.00',
                image: ''
              },
              {
                _id: 9,
                category: 'Landscape',
                name: '30"x40"',
                price: '243.00',
                image: ''
              }
            ]
          },
          {
            type: 'Edges',
            typeId: 2,
            variant: [
              {
                _id: 1,
                name: 'Black Border',
                price: '0.00',
                image: ''
              },
              {
                _id: 2,
                name: 'Photo Wrap',
                price: '85.00',
                image: ''
              },
              {
                _id: 3,
                name: 'White Border',
                price: '118.00',
                image: ''
              }
            ]
          },
          {
            type: 'Frames',
            typeId: 3,
            variant: [
              {
                _id: 1,
                name: '0.75" deep canvas wrap',
                price: '0.00',
                image: '',
                frame_width: 500,
                frame_height: 316,
                frame_stroke_width: 480,
                frame_stroke_height: 295.152,
                frame_inner_x: 78.6816,
                frame_inner_y: 67.1667,
                frame_inner_width: 342.03,
                frame_inner_height: 180.818
              },
              {
                _id: 2,
                name: '1.25" deep canvas wrap',
                price: '17.00',
                image: '',
                frame_width: 500,
                frame_height: 316,
                frame_stroke_width: 480,
                frame_stroke_height: 295.152,
                frame_inner_x: 78.6816,
                frame_inner_y: 67.1667,
                frame_inner_width: 342.03,
                frame_inner_height: 180.818
              },
              {
                _id: 3,
                name: 'Black wood frame',
                price: '39.00',
                image: '',
                frame_width: 500,
                frame_height: 316,
                frame_stroke_width: 480,
                frame_stroke_height: 295.152,
                frame_inner_x: 78.6816,
                frame_inner_y: 67.1667,
                frame_inner_width: 342.03,
                frame_inner_height: 180.818
              },
              {
                _id: 4,
                name: 'White wood frame',
                price: '39.00',
                image: '',
                frame_width: 500,
                frame_height: 316,
                frame_stroke_width: 480,
                frame_stroke_height: 295.152,
                frame_inner_x: 78.6816,
                frame_inner_y: 67.1667,
                frame_inner_width: 342.03,
                frame_inner_height: 180.818
              },
              {
                _id: 5,
                name: 'Espresso wood frame',
                price: '39.00',
                image: '',
                frame_width: 500,
                frame_height: 316,
                frame_stroke_width: 480,
                frame_stroke_height: 295.152,
                frame_inner_x: 78.6816,
                frame_inner_y: 67.1667,
                frame_inner_width: 342.03,
                frame_inner_height: 180.818
              }
            ]
          },
          {
            type: 'Filters',
            typeId: 4,
            variant: [
              {
                _id: 1,
                name: 'Black & White',
                price: '0.00',
                image: ''
              },
              {
                _id: 2,
                name: 'Sepia',
                price: '17.00',
                image: ''
              },
              {
                _id: 3,
                name: 'Vintage',
                price: '9.00',
                image: ''
              },
              {
                _id: 4,
                name: 'Lomo',
                price: '25.00',
                image: ''
              },
              {
                _id: 5,
                name: 'Color Isolate',
                price: '39.00',
                image: ''
              }
            ]
          },
          {
            type: 'Services',
            typeId: 5,
            variant: [
              {
                _id: 1,
                name: 'Touch Up',
                price: '0.00',
                image: ''
              },
              {
                _id: 2,
                name: 'Enhancement',
                price: '17.00',
                image: ''
              },
              {
                _id: 3,
                name: 'Makeover',
                price: '9.00',
                image: ''
              }
            ]
          }
        ]
      },

      items: [
        {
          id: 123,
          title: 'Frame 1',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          svg_url: '@/assets/frame-1.svg',
          price: 100,
          frame: {
            frame_width: 400,
            frame_height: 520,
            frame_stroke_width: 380,
            frame_stroke_height: 500,
            frame_inner_x: 90.5723,
            frame_inner_y: 111.861,
            frame_inner_width: 219.269,
            frame_inner_height: 295.558
          }
        },
        {
          id: 234,
          title: 'Frame 2',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          svg_url: '@/assets/frame-2.svg',
          price: 80,
          frame: {
            frame_width: 500,
            frame_height: 500,
            frame_stroke_width: 480,
            frame_stroke_height: 480,
            frame_inner_x: 113.09,
            frame_inner_y: 107.578,
            frame_inner_width: 275,
            frame_inner_height: 275
          }
        },
        {
          id: 345,
          title: 'Frame 3',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          svg_url: '@/assets/frame-3.svg',
          price: 120,
          frame: {
            frame_width: 500,
            frame_height: 316,
            frame_stroke_width: 480,
            frame_stroke_height: 295.152,
            frame_inner_x: 78.6816,
            frame_inner_y: 67.1667,
            frame_inner_width: 342.03,
            frame_inner_height: 180.818
          }
        },
        {
          id: 456,
          title: 'Frame 4',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          svg_url: '@/assets/frame-1.svg',
          price: 150,
          frame: {
            frame_width: 400,
            frame_height: 678,
            frame_stroke_width: 380,
            frame_stroke_height: 658,
            frame_inner_x: 43.5,
            frame_inner_y: 33.8101,
            frame_inner_width: 312,
            frame_inner_height: 610.38
          }
        }
      ],
      file: {},
      position: 1,
      userImageCollection: [],

      orderCost: 0.0,
      cartItem: {
        frame: [],
        triptych: [],
        edge: [],
        filter: []
      },
      triptychAspectRation: [
        'xMinYMin slice',
        'xMidYMid slice',
        'xMaxYMax slice'
      ],
      currentSelectedTriptych: {
        selectedImage: '',
        selectedTriptychId: '',
        selectedTriptychCost: ''
      }
    }
  },

  methods: {
    addTriptychToCart: function () {
      const data = {
        image_url: this.currentSelectedTriptych.selectedImage,
        frame_id: this.currentSelectedTriptych.selectedTriptychId,
        frame_cost: this.currentSelectedTriptych.selectedTriptychCost
      }

      if (data != null) {
        // console.log(' selectedItem  -- ----- ', data)
        this.cartItem.triptych.push(data)
      }
    },
    activeTriptych: function (item) {
      // name, svg, frame, price
      // Frame value for preview
      this.triptychAspectRation = item.style

      // add current frame to cart
      this.currentSelectedTriptych.selectedImage = this.checkout.selectedImageUrl
      this.currentSelectedTriptych.selectedTriptychId = item.id
      this.currentSelectedTriptych.selectedTriptychCost = item.price
    },
    removeSelectedFrame: function () {
      this.currentSelectedFrame.selectedImage = ''
      this.currentSelectedFrame.selectedFrameId = ''
      this.currentSelectedFrame.selectedFrameCost = ''
    },
    // addFrameToCart: function (event, selectedItem) {
    //   // event.preventDefault()
    //   // const frameCart = this.cartItem.frame
    //   // const newValue = this.currentSelectedFrame
    //   const data = {
    //     image_url: this.currentSelectedFrame.selectedImage,
    //     frame_id: this.currentSelectedFrame.selectedFrameId,
    //     frame_cost: this.currentSelectedFrame.selectedFrameCost
    //   }

    //   if (data != null) {
    //     // console.log(' selectedItem  -- ----- ', selectedItem)
    //     this.cartItem.frame.push(data)
    //   }
    // },
    changeActive: function (frame, title, price, index, id) {
      // name, svg, frame, price
      // Frame value for preview
      this.frameValue = frame

      this.checkout.properties[0].typeId = id
      this.checkout.properties[0].name = title
      this.checkout.properties[0].price = price
    },

    selectActiveEdge: function (item) {
      this.checkout.properties[1].typeId = item._id
      this.checkout.properties[1].name = item.name
      this.checkout.properties[1].price = item.price
    },

    selectActiveFilter: function (item) {
      this.checkout.properties[2].typeId = item._id
      this.checkout.properties[2].name = item.name
      this.checkout.properties[2].price = item.price
    },

    showDialog: function () {
      this.sizeDialogVisibility = true
    },
    showAlert: function () {
      alert('Test Alert')
    },
    upload: function () {
      this.showLoading()
      var data = new FormData()
      data.append('id', '123')
      data.append('file', this.file)

      this.$store
        .dispatch('imageUpload/uploadImage', data)
        .then((response) => {
          this.hideLoading()
          // console.log('upload - response: ' + response)

          // get user's image collection
          this.getUserImage()
        })
    },
    changeFrameSize: function (position) {
      this.position = position
    },
    goBack: function () {
      this.$router.go(-1)
    },
    goCheckout: function () {
      this.$router.push({ path: '/checkout' })
    },
    checkProductType: function (position) {
      this.currentTabID = position
    },
    showLoading: function () {
      this.isLoading = true
    },
    hideLoading: function () {
      this.isLoading = false
    },
    getUserImage: function () {
      this.$store
        .dispatch('imageUpload/userImageCollection')
        .then((response) => {
          this.userImageCollection = response.data.data
          this.checkout.selectedImageUrl = response.data.data[0].imageURL
          this.hideLoading()
        })
    },
    addAllItemToCart: function () {
      this.isLoading = true
      this.$store.dispatch('checkout', this.checkout).then((response) => {
        this.isLoading = false
        this.$router.push('/checkout')
      })
    }
  },

  created: function () {
    this.$root.$emit('hide-footer', false)

    this.showLoading()

    // get user's image collection
    this.getUserImage()
  },
  watch: {
    file: function (o, n) {
      // const file = this.file

      // console.log(`File name: ${file.name}`) // e.g my.png
      // console.log(`File path: ${file.path}`) // e.g my.png
      // console.log(`Last modified: ${file.lastModified}`) // e.g 1552830408824
      // console.log(`Last size: ${file.size}`) // e.g 1552830408824
    }
  },

  computed: {
    getTotalOrderCost: function () {
      let cost = 0.0

      this.checkout.properties.forEach((element) => {
        cost += parseFloat(element.price)
      })

      return parseFloat(cost)
    },

    getEdge: function () {
      return this.productDetail.properties[1].variant
    },
    getFilter: function () {
      return this.productDetail.properties[2].variant
    }
  },

  beforeCreate: function () {
    this.$root.$emit('hide-footer', false)
  },
  destroyed: function () {
    this.$root.$emit('hide-footer', true)
  },
  beforeMount () {
    this.$root.$emit('hide-footer', false)
  },
  mounted () {
    this.$root.$emit('hide-footer', false)
  }
}
</script>

<style>
#svgelem {
  position: relative;
  left: 50%;
  -webkit-transform: translateX(-20%);
  -ms-transform: translateX(-20%);
  transform: translateX(-20%);
}
</style>
