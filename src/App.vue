<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  color: #2c3e50;
  background-color: #f7f7f7;
  margin: 0;
  flex: 1; 

}
body {
  height: 100%;
  min-height:100vh;
  width: 100%;
  margin: 0;
  display: flex;
}
</style>
