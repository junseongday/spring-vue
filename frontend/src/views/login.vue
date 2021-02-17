<template>
  <div class="home">
    login page
    <button @click="naverLogin">naverlogin</button>
  </div>
</template>

<script>

import {mapActions} from 'vuex'
export default {
  name: 'login',
  methods: {
    ...mapActions({
      naverLogin: 'account/naverLogin',
    }),
    login() {
      console.log('naverlogin')
    }
  }
}
</script>
