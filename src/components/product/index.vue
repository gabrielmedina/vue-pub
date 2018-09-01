<template>
  <div class="product">
    <figure class="product__figure">
      <img :src="image" :alt="name" class="product__image">
    </figure>

    <div class="product__content">
      <h1 class="product__name">{{ name }}</h1>
      <p class="product__price">R$ {{ price }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheProduct',

    props: [
      'name',
      'price',
      'image'
    ]
  }
</script>

<style lang="scss">
  .product {
    background: #fff;
  }

  .product__figure {
    margin: 0;
    padding: 0;
  }

  .product__image {
    display: block;
    width: 100%;
  }

  .product__content {
    padding: 20px;
  }

  .product__name {
    margin: 0;
    font-size: 20px;
  }

  .product__price {
    margin: 5px 0 0;
  }
</style>
