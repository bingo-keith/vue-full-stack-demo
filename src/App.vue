<template>
  <div id="app">
    <h2>登陆</h2>
    用户名<input type="text" v-model="user">
    密码<input type="password" v-model="pass">
    <input type="button" @click='reg' value="注册">
    <input type="button" @click='login' value="登录">
  </div>
</template>

<script>
import { LOGIN, REG } from './apis/auth.js'
export default {
  data() {
    return {
      user: '',
      pass: '',
      err: []
    }
  },
  methods: {
    async reg() {
      try {
        const data = await REG({ name: this.user, pass: this.pass })
        console.log(data)
        this.cleanForm()
      } catch(err) {
        console.log(err)
      }
    },
    async login() {
      try {
        const data = await LOGIN({ name: this.user, pass: this.pass })
        console.log(data)
        this.cleanForm()
      } catch(err) {
        console.log(err)
      }
    },
    cleanForm() {
      this.user = ''
      this.pass = ''
    }
  }
}
</script>

<style>
</style>
