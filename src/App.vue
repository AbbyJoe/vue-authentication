<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
   created () {
    this.$store.dispatch('autoLogin')
  }
}
 
</script>

<style>
body {
  background-color: #674bb1 !important;
  font-family: "Open Sans", sans-serif;
  color: #fff;
  background-image: url(https://i.postimg.cc/nrSWWDM1/bg-mobile.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
