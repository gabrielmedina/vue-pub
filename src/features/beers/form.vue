<template>
  <div>
    <h1>{{ title }}</h1>
    <the-form></the-form>
  </div>
</template>

<script>
  import TheForm from '../../components/form'

  export default {
    name: 'BeersForm',

    components: {
      TheForm
    },

    computed: {
      title () {
        return this.$route.name == 'beers.new' ? 'Adicionando' : 'Alterando'
      }
    }
  }
</script>

<style lang="scss">
</style>
