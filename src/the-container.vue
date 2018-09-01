<template>
  <div id="app">
    <the-navigation/>
    <router-view/>
    <the-alert/>
  </div>
</template>

<script>
  import TheAlert from './components/alert/'
  import TheNavigation from './the-navigation'

  export default {
    name: 'TheContainer',

    components: {
      TheAlert,
      TheNavigation
    }
  }
</script>

<style>
  #app {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  body {
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }

  .container {
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    max-width: 920px;
    padding: 0 15px;
  }

  @media screen and (min-width: 768px) {
    .container {
      padding: 0;
    }
  }
</style>
