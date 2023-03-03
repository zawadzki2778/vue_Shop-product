<template>
  <div class="item">
    <img :src="product.img" :alt="product.title" :product="product" />
    <p>{{ product.title }}</p>
    <p>COMPONENT</p>
  </div>
</template>

<script>
export default {
  name: "ShopItem",
  props: {
    product: {
      type: Object,
      require: true,
    },
  },
};
</script>