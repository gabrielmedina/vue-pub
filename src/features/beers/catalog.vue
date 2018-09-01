<template>
  <div class="container">
    <h1>Look my beers! :P</h1>
    <the-catalog :products="beers"></the-catalog>
  </div>
</template>

<script>
  import axios from 'axios'
  import TheCatalog from '../../components/catalog'

  export default {
    name: 'BeersCatalog',

    components: {
      TheCatalog
    },

    data() {
      return {
        beers: []
      }
    },

    mounted () {
      axios.get('http://localhost:3000/api/v1/beers/')
      .then(resp => {
        const result = resp.data

        this.beers = result.data

        this.createAlert({
          status: result.status,
          message: result.message
        })
      })
      .catch(error => {
        this.createAlert({
          message: error.message
        })
      })

    },

    methods: {
      createAlert (props) {
        this.$store.dispatch('updateAlert', {
          isVisible: true,
          ...props
        })
      }
    }
  }
</script>

<style lang="scss">

</style>
