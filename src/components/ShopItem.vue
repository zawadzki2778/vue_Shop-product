<template>
  <div class="item">
    <img class="item-img" :src="product.img" :alt="product.title" :product="product" />
    <router-link :to="/shop/ + product.id" class="link">{{ product.title }}</router-link>
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

<style lang="scss">
.item__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 30px;
}
.item {
  max-width: 48%;
  text-align: center;
  p {
    font-size: 18px;
    padding: 20px;
  }
}
.item-img {
  display: block;
  width: 250px;
  margin-bottom: 20px;
}
</style>