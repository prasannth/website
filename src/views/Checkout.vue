<template>
  <div class="checkout">
    <div class="full-screen-dialog container text-center" v-show="showDialog">
      <frame class="image">
        <img :src="require('@/assets/order-completed.png')" width="400" />
      </frame>
      <div class="title is-3 is-primary is-bold">
        <span class="order-text">Yeahh</span> ! Order Placed
      </div>
      <div class="subtitle is-7 is-primary mt-2">
        Order details will be sent to your registered mobile number XXXXXX5105.
        You can also contact us <b>care@photoprint.com</b>.
      </div>
      <div class="mt-5">
        <b-button
          type="is-primary"
          class="is-btn m-2"
          tag="router-link"
          to="/account"
          >View Order</b-button
        >
        <b-button type="is-success" class="is-btn m-2" tag="router-link" to="/"
          >Go Home</b-button
        >
      </div>
    </div>

    <show-at breakpoint="largeAndAbove">
      <div class="container is-fullhd background-color-white">
        <div class="container is-fullhd">
          <b-progress size="is-small" v-show="showLoading"></b-progress>
        </div>
        <section class="hero is-desktop">
          <div class="hero-body">
            <div
              class="container text-center"
              v-if="getCartData.cartData.length === 0"
            >
              <frame class="image">
                <img :src="require('@/assets/empty-cart.png')" width="400" />
              </frame>
              <div class="title is-3 is-primary is-bold mt-2">
                <span class="order-text">Oh no</span> ! Your cart is empty
              </div>
              <div class="subtitle is-7 is-primary mt-2">
                you can create your own custom canvas in home by clicking
                <b>Create your canvas</b>.
              </div>
              <div class="mt-5">
                <b-button
                  type="is-success"
                  class="is-btn m-2"
                  tag="router-link"
                  to="/"
                  >Go Home</b-button
                >
              </div>
            </div>
            <div class="columns" v-if="getCartData.cartData.length > 0">
              <div class="column">
                <div class="title is-3 is-bold">Shopping cart</div>
                <!-- cart title -->
                <div>
                  <div class="columns">
                    <div class="column">
                      <div class="title is-6">Preview</div>
                    </div>
                    <div class="column is-5">
                      <div class="title is-6">Product</div>
                    </div>
                    <!-- <div class="column">
                      <div class="title is-6">Quantity</div>
                    </div> -->
                    <div class="column text-right">
                      <div class="title is-6">Total</div>
                    </div>
                    <div class="column"></div>
                  </div>
                  <hr />
                </div>
                <!-- cart title -->

                <!-- Cart Item -->
                <div v-for="(item, index) in getCartData.cartData" :key="index">
                  <div class="columns align-center">
                    <div class="column">
                      <b-image
                        :src="item.selectedImageUrl"
                        alt="A random image"
                        ratio="4by4"
                      ></b-image>
                    </div>
                    <div class="column is-5">
                      <div class="title is-6 is-bold">
                        <strong>{{ item.productType }}</strong>
                      </div>
                      <div v-for="props in item.properties" :key="props">
                        <p class="subtitle is-7">
                          {{ props.type }} : <strong>{{ props.name }}</strong> -
                          $
                          {{ parseFloat(props.price) }}
                        </p>
                      </div>
                    </div>
                    <!-- <div class="column">
                      <b-dropdown v-model="item.quantity" aria-role="list">
                        <button
                          class="button is-btn"
                          type="button"
                          slot="trigger"
                        >
                          <span>{{ item.quantity }}</span>
                          <b-icon icon="menu-down"></b-icon>
                        </button>

                        <b-dropdown-item
                          class="background-color-white"
                          :value="index + 1"
                          aria-role="listitem"
                          v-for="(item, index) in 10"
                          :key="index + 1"
                        >
                          <div class="title is-6">{{ index + 1 }}</div>
                        </b-dropdown-item>
                      </b-dropdown>
                    </div> -->
                    <div class="column text-right">
                      <div class="is-6 is-bold">
                        $ {{ getItemCost(item.properties) }}
                      </div>
                    </div>
                    <div class="column text-right">
                      <b-button
                        type="is-link"
                        class="is-btn"
                        @click="removeItem(item.cartId)"
                        ><i class="fas fa-minus-circle"></i
                      ></b-button>
                    </div>
                  </div>
                  <hr />
                </div>
                <!-- Cart Item -->
              </div>
              <div class="column is-4">
                <div class="box background-color-white">
                  <article class="media">
                    <div class="media-content">
                      <div class="content">
                        <!-- Shopping Cart -->

                        <div class="title is-5 is-bold">Summary</div>
                        <div class="columns">
                          <div class="column">
                            <div class="title is-7">Product</div>
                          </div>
                          <div class="column">
                            <div class="title is-7">Details</div>
                          </div>
                          <!-- <div class="column is-2">
                            <div class="title is-7">Qty</div>
                          </div> -->
                          <div class="column">
                            <div class="title is-7 text-right">Total</div>
                          </div>
                        </div>
                        <hr />

                        <!-- Product list -->

                        <div
                          class="columns"
                          v-for="(item, index) in getCartData.cartData"
                          :key="index"
                        >
                          <div class="column">
                            <div class="subtitle is-7">
                              <strong>{{ item.productType }}</strong>
                            </div>
                          </div>
                          <div class="column">
                            <div
                              v-for="props in item.properties"
                              :key="props"
                              class="mt-1"
                            >
                              <p class="subtitle is-7">
                                <strong>{{ props.name }}</strong>
                              </p>
                            </div>
                          </div>
                          <!-- <div class="column is-2">
                            <div class="subtitle is-7">{{ item.quantity }}</div>
                          </div> -->
                          <div class="column">
                            <div class="subtitle is-7 text-right">
                              $ {{ getItemCost(item.properties) }}
                            </div>
                          </div>
                        </div>

                        <!-- Product list -->
                        <hr />

                        <div class="is-flex">
                          <div class="title is-7 is-flex-1 is-bold">
                            Subtotal
                          </div>
                          <div class="title is-7 is-bold">
                            $ {{ getCartData.sub_total }}
                          </div>
                        </div>
                        <div class="is-flex">
                          <div class="subtitle is-7 is-flex-1">Shipping</div>
                          <div class="subtitle is-7">
                            $ {{ getCartData.shipping_cost }}
                          </div>
                        </div>
                        <div class="is-flex">
                          <div class="subtitle is-7 is-flex-1">Tax</div>
                          <div class="subtitle is-7">
                            $ {{ getCartData.tax }}
                          </div>
                        </div>

                        <hr />

                        <!-- Coupon and Total -->
                        <div class="is-flex">
                          <div class="title is-6 is-flex-1 is-bold">Total</div>
                          <div class="title is-6">
                            $ {{ getCartData.total }}
                          </div>
                        </div>

                        <div class="mt-5">
                          <div class="title is-7">Coupons</div>
                          <div class="is-flex align-center">
                            <div class="is-flex-1 m-2">
                              <b-field
                                v-if="coupons"
                                type="is-success"
                                message="Coupon is available"
                              >
                                <b-input
                                  value="CANVAS50"
                                  maxlength="10"
                                ></b-input>
                              </b-field>
                            </div>
                            <b-button
                              type="is-link"
                              size="is-small"
                              class="is-btn m-2"
                              v-if="coupons"
                              @click="coupons = false"
                              >Cancel</b-button
                            >
                          </div>
                          <b-button
                            type="is-link"
                            size="is-small"
                            class="is-btn"
                            v-if="!coupons"
                            @click="coupons = true"
                            >Add Coupon</b-button
                          >
                        </div>

                        <!-- Coupon and Total -->

                        <hr />
                        <!-- Pay Button -->
                        <div class="pay-button mt-5">
                          <b-button
                            class="is-btn"
                            type="is-primary"
                            size="is-small"
                            expanded
                            @click="payment"
                            >Pay with Credit card</b-button
                          >
                          <b-button
                            class="is-btn mt-4"
                            type="is-light"
                            size="is-small"
                            expanded
                            @click="payment"
                            >Pay with Debit card</b-button
                          >
                          <b-button
                            class="is-btn mt-4"
                            type="is-danger"
                            size="is-small"
                            expanded
                            @click="payment"
                            >Pay with G Pay</b-button
                          >
                          <b-button
                            class="is-btn mt-4"
                            type="is-success"
                            size="is-small"
                            expanded
                            @click="payment"
                            >Cash on delivery</b-button
                          >
                        </div>
                        <!-- Pay Button -->

                        <!-- Shopping Cart -->
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </show-at>
    <show-at breakpoint="mediumAndBelow">
      <div>
        <div class="container">
          <b-progress size="is-xsmall" v-show="showLoading"></b-progress>
        </div>
        <div
          class="container p-6 background-color-white text-center"
          v-if="getCartData.cartData.length === 0"
        >
          <frame class="image">
            <img :src="require('@/assets/empty-cart.png')" width="400" />
          </frame>
          <div class="title is-3 is-primary is-bold mt-2">
            <span class="order-text">Oh no</span> ! Your cart is empty
          </div>
          <div class="subtitle is-7 is-primary mt-2">
            you can create your own custom canvas in home by clicking
            <b>Create your canvas</b>.
          </div>
          <div class="mt-5">
            <b-button
              type="is-success"
              class="is-btn m-2"
              tag="router-link"
              to="/"
              >Go Home</b-button
            >
          </div>
        </div>
        <section
          class="hero is-small background-color-white"
          v-if="getCartData.cartData.length > 0"
        >
          <div class="hero-body">
            <div class="title is-3 is-bold">Shopping cart</div>

            <!-- Cart Item -->
            <div v-for="(item, index) in getCartData.cartData" :key="index">
              <div class="columns is-mobile">
                <div class="column">
                  <b-image
                    :src="item.selectedImageUrl"
                    alt="A random image"
                    ratio="3by4"
                    :rounded="rounded"
                  ></b-image>
                </div>
                <div class="column is-7">
                  <div v-for="props in item.properties" :key="props">
                    <p class="subtitle is-7">
                      {{ props.type }} : <strong>{{ props.name }}</strong> - $
                      {{ parseFloat(props.price) }}
                    </p>
                  </div>
                </div>
              </div>

              <div class="is-flex align-center">
                <!-- <div class="is-flex-1">
                  <b-dropdown v-model="item.quantity" aria-role="list">
                    <button class="button is-btn" type="button" slot="trigger">
                      <span>{{ item.quantity }}</span>
                      <b-icon icon="menu-down"></b-icon>
                    </button>

                    <b-dropdown-item
                      class="background-color-white"
                      :value="index + 1"
                      aria-role="listitem"
                      v-for="(item, index) in 10"
                      :key="index + 1"
                    >
                      <div class="title is-6">{{ index + 1 }}</div>
                    </b-dropdown-item>
                  </b-dropdown>
                </div> -->
                <div class="is-6 is-flex is-flex-1 is-bold text-right">
                  $ {{ getItemCost(item.properties) }}
                </div>
                <div class="ml-3 text-right">
                  <b-button
                    type="is-link"
                    class="is-btn"
                    @click="removeItem(item.cartId)"
                    ><i class="fas fa-minus-circle"></i
                  ></b-button>
                </div>
              </div>

              <hr />
            </div>
            <!-- Cart Item -->

            <div class="background-color-white">
              <!-- Shopping Cart -->

              <div class="title is-3 is-bold">Summary</div>
              <div class="columns is-mobile">
                <div class="column">
                  <div class="title is-7">Product</div>
                </div>
                <div class="column">
                  <div class="title is-7">Details</div>
                </div>
                <!-- <div class="column is-2">
                  <div class="title is-7">Qty</div>
                </div> -->
                <div class="column">
                  <div class="title is-7 text-right">Total</div>
                </div>
              </div>
              <hr />

              <!-- Product list -->

              <div
                class="columns is-mobile"
                v-for="(item, index) in getCartData.cartData"
                :key="index"
              >
                <div class="column">
                  <div class="subtitle is-7">
                    <strong>{{ item.productType }}</strong>
                  </div>
                </div>
                <div class="column">
                  <div v-for="props in item.properties" :key="props">
                    <p class="subtitle is-7">
                      <strong>{{ props.name }}</strong>
                    </p>
                  </div>
                </div>
                <!-- <div class="column is-2">
                  <div class="subtitle is-7">{{ item.quantity }}</div>
                </div> -->
                <div class="column">
                  <div class="subtitle is-7 text-right is-bold">
                    $ {{ getItemCost(item.properties) }}
                  </div>
                </div>
              </div>

              <!-- Product list -->
              <hr />

              <div class="is-flex">
                <div class="title is-7 is-flex-1 is-bold">Subtotal</div>
                <div class="title is-7 is-bold">
                  $ {{ getCartData.sub_total }}
                </div>
              </div>
              <div class="is-flex">
                <div class="subtitle is-7 is-flex-1">Shipping</div>
                <div class="subtitle is-7">
                  $ {{ getCartData.shipping_cost }}
                </div>
              </div>
              <div class="is-flex">
                <div class="subtitle is-7 is-flex-1">Tax</div>
                <div class="subtitle is-7">$ {{ getCartData.tax }}</div>
              </div>

              <hr />

              <!-- Coupon and Total -->
              <div class="is-flex">
                <div class="title is-6 is-flex-1 is-bold">Total</div>
                <div class="title is-6 is-bold">$ {{ getCartData.total }}</div>
              </div>

              <div class="mt-2">
                <div class="title is-6">Coupons</div>
                <div class="is-flex">
                  <div class="is-flex-1 m-2">
                    <b-field
                      v-if="coupons"
                      type="is-success"
                      message="Coupon is available"
                    >
                      <b-input value="CANVAS50" maxlength="10"></b-input>
                    </b-field>
                  </div>
                  <b-button
                    type="is-link"
                    size="is-small"
                    class="is-btn m-2"
                    v-if="coupons"
                    @click="coupons = false"
                    >Cancel</b-button
                  >
                </div>
                <b-button
                  type="is-link"
                  size="is-small"
                  class="is-btn"
                  v-if="!coupons"
                  @click="coupons = true"
                  >Add Coupon</b-button
                >
              </div>

              <!-- Coupon and Total -->

              <hr />

              <!-- Pay Button -->
              <div class="pay-button mt-5">
                <b-button
                  class="is-btn"
                  type="is-primary"
                  size="is-small"
                  expanded
                  @click="payment"
                  >Pay with Credit card</b-button
                >
                <b-button
                  class="is-btn mt-4"
                  type="is-dark"
                  size="is-small"
                  expanded
                  @click="payment"
                  >Pay with Credit card</b-button
                >
                <b-button
                  class="is-btn mt-4"
                  type="is-info"
                  size="is-small"
                  expanded
                  @click="payment"
                  >Pay with Credit card</b-button
                >
                <b-button
                  class="is-btn mt-4"
                  type="is-success"
                  size="is-small"
                  expanded
                  @click="payment"
                  >Cash on delivery</b-button
                >
              </div>
              <!-- Pay Button -->

              <!-- Shopping Cart -->
            </div>
          </div>
        </section>
      </div>
    </show-at>
  </div>
</template>

<script>
// import { VShowAt } from 'vue-breakpoint-component'
import { showAt } from 'vue-breakpoints'
export default {
  name: 'checkout',
  components: {
    showAt
  },
  data () {
    return {
      showDialog: false,
      showLoading: true,
      coupons: false,
      selectedOptions: 0,
      currentActive: 'Slide 1',
      sizeDialogVisibility: false,
      items: [
        {
          title: 'Slide 1',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          price: 4.4
        },
        {
          title: 'Slide 2',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          price: 3.5
        },
        {
          title: 'Slide 3',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          price: 5
        },
        {
          title: 'Slide 4',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png'
        },
        {
          title: 'Slide 5',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          price: 5
        },
        {
          title: 'Slide 6',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          price: 4
        },
        {
          title: 'Slide 7',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          price: 2.7
        },
        {
          title: 'Slide 8',
          image: 'https://buefy.org/static/img/placeholder-1280x960.png',
          price: 1.5
        }
      ],
      showImage: false,
      file: {},
      position: 1,
      frameSize: [
        {
          id: 1,
          w: 380,
          h: 480,
          sw: 220.27,
          wh: 296.56
        },
        {
          id: 2,
          w: 400,
          h: 533.66,
          sw: 220.27,
          wh: 304.35
        },
        {
          id: 3,
          w: 500,
          h: 500,
          sw: 275.34,
          wh: 285.15
        },
        {
          id: 4,
          w: 500,
          h: 400,
          sw: 275.34,
          wh: 228.12
        }
      ],
      cartItems: {
        shipping_tax: 100,
        item: [
          {
            image_url: 'https://picsum.photos/400/600',
            productType: 'Canvas Print',
            frameValues: {
              frame_width: 400,
              frame_height: 520,
              frame_stroke_width: 380,
              frame_stroke_height: 500,
              frame_inner_x: 90.5723,
              frame_inner_y: 111.861,
              frame_inner_width: 219.269,
              frame_inner_height: 295.558
            },
            piece: 50.0,
            cost: 100.0,
            quantity: 2
          },
          {
            image_url: 'https://picsum.photos/400/600',
            productType: 'Triptych Print',
            frameValues: {
              frame_width: 400,
              frame_height: 520,
              frame_stroke_width: 380,
              frame_stroke_height: 500,
              frame_inner_x: 90.5723,
              frame_inner_y: 111.861,
              frame_inner_width: 219.269,
              frame_inner_height: 295.558
            },
            piece: 50.0,
            cost: 80.0,
            quantity: 2
          },
          {
            image_url: 'https://picsum.photos/400/600',
            productType: 'Collage Print',
            frameValues: {
              frame_width: 400,
              frame_height: 520,
              frame_stroke_width: 380,
              frame_stroke_height: 500,
              frame_inner_x: 90.5723,
              frame_inner_y: 111.861,
              frame_inner_width: 219.269,
              frame_inner_height: 295.558
            },
            piece: 50.0,
            cost: 50.0,
            quantity: 2
          },
          {
            image_url: 'https://picsum.photos/400/600',
            productType: 'Pet Portrait',
            frameValues: {
              frame_width: 400,
              frame_height: 520,
              frame_stroke_width: 380,
              frame_stroke_height: 500,
              frame_inner_x: 90.5723,
              frame_inner_y: 111.861,
              frame_inner_width: 219.269,
              frame_inner_height: 295.558
            },
            piece: 50.0,
            cost: 65.0,
            quantity: 2
          }
        ]
      }
    }
  },
  methods: {
    payment: function () {
      this.showDialog = true
    },
    removeItem: function (cartId) {
      this.$store.dispatch('deleteCartItem', cartId).then((response) => {
        // close loading
        this.showLoading = true
        this.getCartItem()
      })
    },
    getItemCost: function (item) {
      let cost = 0.0

      item.forEach((element) => {
        cost += parseFloat(element.price)
      })

      return cost
    },
    getCartItem: function () {
      this.$store.dispatch('getCartItem').then((response) => {
        this.showLoading = false
        // console.log('getCartItem - ' + JSON.stringify(response.data))
      })
    }
  },
  created: function () {
    // this.cartItems = this.$store.getters.getCartItem

    this.getCartItem()
  },
  computed: {
    getSubtotal: function () {
      let subTotal = 0.0

      this.cartItems.item.forEach((element) => {
        subTotal += element.quantity * element.piece
      })

      return subTotal
    },
    getTaxTotal: function () {
      const tax = 18 / 100

      let taxPayable = 0

      taxPayable = this.getSubtotal * tax

      return taxPayable
    },
    getTotal: function () {
      let totalAmount = 0.0
      totalAmount =
        this.getSubtotal + this.getTaxTotal + this.cartItems.shipping_tax
      return totalAmount
    },
    getCartData: function () {
      return this.$store.getters.getCartData
    }
  },
  beforeDestroy: function () {
    this.$store.dispatch('saveCartOffline', JSON.stringify(this.cartItems))
  }
}
</script>

<style>
</style>
