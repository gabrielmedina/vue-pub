<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link :to="{ name: 'welcome.index' }">
          Home
        </router-link>

        <router-link :to="{ name: 'beers.index' }">
          Beers
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'TheNavigation'
  }
</script>

<style lang="scss">
  .nav {

  }

  .nav__list {
    margin: 0;
    padding: 0;
    line-height: none;
  }

  .nav__item {

  }

  .nav__link {

  }
</style>
