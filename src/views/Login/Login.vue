<template>
  <div>
    <h2>登录</h2>
    <label for="user">用户名<input type="text" v-model="user" id="user"></label>
    <label for="pass">密码<input type="password" v-model="pass" id="pass"></label>
    <input type="button" @click="reg" value="注册">
    <input type="button" @click="login" value="登录">
    <input type="button" @click="logout" value="注销">
  </div>
</template>

<script>
  import {LOGIN, REG} from '../../apis/auth.js';

  export default {
    data() {
      return {
        user: '',
        pass: '',
        err: []
      }
    },
    methods: {
      // 登录后保存token
      async login() {
        const self = this;
        try {
          const data = await LOGIN({name: self.user, pass: self.pass});
          localStorage.setItem('token', data.token);
          console.log(localStorage.getItem(token));
        } catch (err) {
          console.log(err);
        }
      },
      async reg() {
        const self = this;
        try {
          const data = await REG({name: self.user, pass: self.pass});
          console.log(data);
          this.clearForm();
        } catch (err) {
          console.log(err);
        }
      },
      async logout() {
      },
      clearForm() {
        this.user = '';
        this.pass = '';
      }
    }
  }
</script>

<style scoped>

</style>
