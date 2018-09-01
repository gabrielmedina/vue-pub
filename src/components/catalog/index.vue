<template>
  <ul class="catalog">
    <li class="catalog__item" v-for="product in products" :key="product.id">
      <the-product
        :name="product.name"
        :price="product.price"
        :image="product.image"
      />
    </li>
  </ul>
</template>

<script>
  import TheProduct from '../product/'

  export default {
    name: 'TheCatalog',

    components: {
      TheProduct
    },

    props: [
      'products'
    ]
  }
</script>

<style lang="scss">
  .catalog {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .catalog__item {
    margin: 0 0 15px;
  }

  @media screen and (min-width: 768px) {
    .catalog {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .catalog__item {
      width: calc(33.33% - 10px);
      margin: 0 15px 15px 0;

      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
</style>
