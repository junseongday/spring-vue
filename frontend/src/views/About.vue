<template>
  <div class="about">
    <form @submit="getUserInfo">
      <h1>This is an about page</h1>
      <button type="submit">account info</button>
      <span>{{account}}</span>
      <br />
      <input type="email" v-model="email" required>
      <button type="reset" @click="reset">reset</button>
    </form>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'About',
  data () {
    return {
      account: null,
      email: null
    }
  },
    methods: {
    ...mapActions({
      fetchAccountInfo: 'account/fetchAccountInfo',
    }),
    getUserInfo (e) {
      e.preventDefault()
      this.fetchAccountInfo().then(rs => {
        console.log(rs)
        this.account = rs
      })
    },
    reset () {
      const vm = this
      vm.account = null
      vm.email = null
    }
  }
}
</script>
