<template>
  <NavBar/>
  <router-view/>
  <FooterComponent/>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>


<script>
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue'
export default{
  components:{
    NavBar,
    FooterComponent
  }
}
</script>