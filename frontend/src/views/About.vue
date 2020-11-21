<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getUserInfo">account info</button>
    <span>{{account}}</span>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: 'about',
  data () {
    return {
      account: null
    }
  },
    methods: {
    ...mapActions({
      fetchAccountInfo: 'account/fetchAccountInfo',
    }),
    getUserInfo () {
      this.fetchAccountInfo().then(rs => {
        console.log(rs)
        this.account = rs
      })
    }
  }
}
</script>
