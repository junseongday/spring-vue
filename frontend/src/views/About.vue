<template>
  <div class="about">
    <form @submit="getUserInfo">
      <h1>This is an about page</h1>
      <button type="submit">account info</button>
      <span>{{account}}</span>
      <br />
      <input type="email" v-model="email" required>
    </form>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'about',
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
    }
  }
}
</script>
