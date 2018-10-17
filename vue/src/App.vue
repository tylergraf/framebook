<template>
  <div id="app">
    <header>
      <h1><router-link v-bind:to="'/'">Vue Cookbook</router-link></h1>
      <nav>
        <router-link v-bind:to="'/all'">All Recipes</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Router from 'vue-router'

export default {
  name: 'app'
}
</script>
<style>
  html,
  body {
    margin: 0;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
<style scoped>


#app {
  height: calc(100% - 56px);
}

main {
  max-width: 800px;
  margin: 0 auto;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  height: 100%;
  overflow-y: scroll;
  padding: 0 10px;
}

header {
  margin: 0;
  height: 50px;
  padding: 0 16px 0 24px;
  background: linear-gradient(to left, #134E5E, #71B280); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header h1,
header h1 a {
  margin: 0 0 0 10px;
  padding: 0;
  color: #fff;
  text-decoration: none;
  font-size: 24px;
}
nav a {
  margin-left: 10px;
  color: #fff;
  text-decoration: none;
}
</style>
