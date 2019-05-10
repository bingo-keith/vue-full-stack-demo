<template>
  <div>
    <h2>登录</h2>
    用户名<input type="text" v-model="user">
    密码<input type="password" v-model="pass">
    <input type="button" @click="reg" value="注册">
    <input type="button" @click="login" value="登录">
    <input type="button" @click="logout" value="注销">
  </div>
</template>

<script>
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
                const data = await LOGIN({ name: this.user, pass: this.pass})
                localStorage.setItem('token', data.token)
                consoleo.log(localStorage.getItem(token))
            },
          async reg(){},
          async logout(){},
        }
    }
</script>

<style scoped>

</style>
