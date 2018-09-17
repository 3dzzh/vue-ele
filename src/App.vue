<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>
<script>
import Header from'./components/Header'
import Main from'./components/Main'
export default {
  name: 'app',
  components: {
    Header,
    Main
  },
  mounted(){
    this.$store.dispatch('getGoods')
  }
}
</script>

