<template>
  <div class="create-account">
    <show-at breakpoint="mediumAndAbove">
      <div class="container is-fullhd">
        <section class="hero is-medium background-color-white">
          <div class="hero-body">
            <div class="container is-fullhd justify-center w-50">
              <div class="text-center">
                <div class="title is-3 is-bold">Create New Account</div>
                <div class="subtitle is-6">
                  Create an account for faster and easier checkout.
                </div>
              </div>
              <form @submit.prevent="validate">
                <section class="mt-5">
                  <b-field
                    :type="{
                      'is-danger': $v.createAccount.first_name.$error,
                      'is-text': !$v.createAccount.first_name.$error,
                    }"
                    :message="[
                      {
                        'Name required': !$v.createAccount.first_name.required,
                      },
                      {
                        'Name must have at least 4 characters': !$v
                          .createAccount.first_name.minLength,
                      },
                    ]"
                    label="First Name"
                  >
                    <b-input
                      type="text"
                      v-model="createAccount.first_name"
                      placeholder="John"
                    />
                  </b-field>
                  <b-field label="Last Name">
                    <b-input
                      type="text"
                      v-model="createAccount.last_name"
                      placeholder="Doe"
                    />
                  </b-field>
                  <b-field
                    label="Email"
                    :type="{
                      'is-danger': $v.createAccount.email.$error,

                      'is-text': !$v.createAccount.email.$error,
                    }"
                    :message="[
                      {
                        'Email required': !$v.createAccount.email.required,
                      },
                      {
                        'Invalid email': !$v.createAccount.email.email,
                      },
                    ]"
                  >
                    <b-input
                      type="email"
                      v-model="createAccount.email"
                      placeholder="sample@domain.com"
                    />
                  </b-field>
                  <b-field
                    label="Mobile Number"
                    :type="{
                      'is-danger': $v.createAccount.mobile.$error,

                      'is-text': !$v.createAccount.mobile.$error,
                    }"
                    :message="[
                      {
                        'Mobile number required': !$v.createAccount.mobile
                          .required,
                      },
                      {
                        'Invalid mobile': !$v.createAccount.mobile.validMobile,
                      },
                    ]"
                  >
                    <b-input
                      type="tel"
                      v-model="createAccount.mobile"
                      placeholder="9876543210"
                    />
                  </b-field>
                  <b-field
                    label="Password"
                    :type="{
                      'is-danger': $v.createAccount.password.$error,

                      'is-text': !$v.createAccount.password.$error,
                    }"
                    :message="[
                      {
                        'Password required': !$v.createAccount.password
                          .required,
                      },
                      {
                        'Password is to short, must have atleast 8 chars': !$v
                          .createAccount.password.minLength,
                      },
                      {
                        'Password must contains at least one uppercase letter, one lowercase letter, one number and one special character': !$v
                          .createAccount.password.validPassword,
                      },
                    ]"
                  >
                    <b-input
                      type="password"
                      v-model="createAccount.password"
                      placeholder="Min 8 Characters"
                      password-reveal
                    />
                  </b-field>
                  <b-field
                    label="Confirm Password"
                    :type="{
                      'is-danger': $v.createAccount.confirm_password.$error,

                      'is-text': !$v.createAccount.confirm_password.$error,
                    }"
                    :message="[
                      {
                        'Confirm password required': !$v.createAccount
                          .confirm_password.required,
                      },
                      {
                        'Password did not match': !$v.createAccount
                          .confirm_password.sameAsPassword,
                      },
                    ]"
                  >
                    <b-input
                      type="password"
                      v-model="createAccount.confirm_password"
                      placeholder="Min 8 Characters"
                      password-reveal
                    />
                  </b-field>

                  <input
                    type="submit"
                    class="button mt-4 is-medium is-primary is-fullwidth"
                    style="padding: unset; font-size: medium"
                    value="Create Account"
                  />

                  <div class="subtitle mt-2 is-7 text-justify">
                    By clicking <b class="is-bold is-4">Create account</b> that
                    means you agree to the terms and conditions and our user
                    polices.
                  </div>
                </section>
              </form>
            </div>
          </div>
        </section>
      </div>
    </show-at>
    <show-at breakpoint="small">
      <div>
        <section class="hero is-small background-color-white">
          <div class="hero-body">
            <div class="justify-center">
              <div class="">
                <div class="title is-3 is-bold">Create New Account</div>
                <div class="subtitle is-7">
                  Create an account for faster and easier checkout.
                </div>
              </div>
              <form @submit.prevent="validate">
                <section class="mt-5">
                  <b-field
                    :type="{
                      'is-danger': $v.createAccount.first_name.$error,
                      'is-text': !$v.createAccount.first_name.$error,
                    }"
                    :message="[
                      {
                        'Name required': !$v.createAccount.first_name.required,
                      },
                      {
                        'Name must have at least 4 characters': !$v
                          .createAccount.first_name.minLength,
                      },
                    ]"
                    label="First Name"
                  >
                    <b-input
                      type="text"
                      v-model="createAccount.first_name"
                      placeholder="John"
                    />
                  </b-field>
                  <b-field label="Last Name">
                    <b-input
                      type="text"
                      v-model="createAccount.last_name"
                      placeholder="Doe"
                    />
                  </b-field>
                  <b-field
                    label="Email"
                    :type="{
                      'is-danger': $v.createAccount.email.$error,

                      'is-text': !$v.createAccount.email.$error,
                    }"
                    :message="[
                      {
                        'Email required': !$v.createAccount.email.required,
                      },
                      {
                        'Invalid email': !$v.createAccount.email.email,
                      },
                    ]"
                  >
                    <b-input
                      type="email"
                      v-model="createAccount.email"
                      placeholder="sample@domain.com"
                    />
                  </b-field>
                  <b-field
                    label="Mobile Number"
                    :type="{
                      'is-danger': $v.createAccount.mobile.$error,

                      'is-text': !$v.createAccount.mobile.$error,
                    }"
                    :message="[
                      {
                        'Mobile number required': !$v.createAccount.mobile
                          .required,
                      },
                      {
                        'Invalid mobile': !$v.createAccount.mobile.validMobile,
                      },
                    ]"
                  >
                    <b-input
                      type="tel"
                      v-model="createAccount.mobile"
                      placeholder="9876543210"
                    />
                  </b-field>
                  <b-field
                    label="Password"
                    :type="{
                      'is-danger': $v.createAccount.password.$error,

                      'is-text': !$v.createAccount.password.$error,
                    }"
                    :message="[
                      {
                        'Password required': !$v.createAccount.password
                          .required,
                      },
                      {
                        'Password is to short, must have atleast 8 chars': !$v
                          .createAccount.password.minLength,
                      },
                      {
                        'Password must contains at least one uppercase letter, one lowercase letter, one number and one special character': !$v
                          .createAccount.password.validPassword,
                      },
                    ]"
                  >
                    <b-input
                      type="password"
                      v-model="createAccount.password"
                      placeholder="Min 8 Characters"
                      password-reveal
                    />
                  </b-field>
                  <b-field
                    label="Confirm Password"
                    :type="{
                      'is-danger': $v.createAccount.confirm_password.$error,

                      'is-text': !$v.createAccount.confirm_password.$error,
                    }"
                    :message="[
                      {
                        'Confirm password required': !$v.createAccount
                          .confirm_password.required,
                      },
                      {
                        'Password did not match': !$v.createAccount
                          .confirm_password.sameAsPassword,
                      },
                    ]"
                  >
                    <b-input
                      type="password"
                      v-model="createAccount.confirm_password"
                      placeholder="Min 8 Characters"
                      password-reveal
                    />
                  </b-field>

                  <input
                    type="submit"
                    class="button mt-4 is-medium is-primary is-fullwidth"
                    style="padding: unset; font-size: medium"
                    value="Create Account"
                  />

                  <div class="subtitle mt-2 is-7 text-justify">
                    By clicking <b class="is-bold is-4">Create account</b> that
                    means you agree to the terms and conditions and our user
                    polices.
                  </div>
                </section>
              </form>
            </div>
          </div>
        </section>
      </div>
    </show-at>
  </div>
</template>

<script>
import { showAt } from 'vue-breakpoints'
import { validationMixin } from 'vuelidate'
import {
  required,
  minLength,
  email,
  sameAs,
  helpers
} from 'vuelidate/lib/validators'

const validPassword = helpers.regex(
  'validPassword',
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
)

const validMobile = helpers.regex('validMobile', /^(\+\d{1,3}[- ]?)?\d{10}$/)

export default {
  name: 'creat new account',
  mixins: [validationMixin],
  components: {
    showAt
  },
  data () {
    return {
      createAccount: {
        first_name: '',
        last_name: '',
        email: '',
        mobile: '',
        password: '',
        confirm_password: ''
      }
    }
  },
  validations: {
    createAccount: {
      first_name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      },
      mobile: {
        required,
        validMobile
      },
      password: {
        required,
        validPassword,
        minLength: minLength(8)
      },
      confirm_password: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    validate: function (e) {
      e.preventDefault()
      this.$v.$touch()

      if (!this.$v.createAccount.$error) {
        const data = {
          firstName: this.$v.createAccount.$model.first_name,
          LastName: this.$v.createAccount.$model.last_name,
          email: this.$v.createAccount.$model.email,
          phone: this.$v.createAccount.$model.mobile,
          password: this.$v.createAccount.$model.password
        }

        this.$store.dispatch('create_account', data).then((response) => {
          this.$router.push('/login')
        })
      } else {
        this.$buefy.notification.open({
          message: 'Invalid details',
          position: 'is-top-right',
          type: 'is-danger',
          hasIcon: true,
          queue: false,
          animation: 'fade',
          iconPack: 'fas'
        })
      }
    }
  }
}
</script>

<style>
</style>
