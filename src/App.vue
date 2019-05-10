<template>
  <div id="app" v-if="isShow">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <br>
    <br>
    <br>
    <router-view/>
  </div>
</template>

<script>
import { LOGIN, REG } from './apis/auth.js'
export default {
  data() {
    return {
      isShow:true
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.isShow=false
    // }, 3000,this);
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

<style scope lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
