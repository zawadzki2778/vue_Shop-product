<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product__wrapper">
          <!-- ********* S L I D E R ******** -->

          <div class="product-slider">
            <!-- указываем кол-во фото на странице -->
            <carousel
              :perPage="1"
              :paginationEnable="true"
              paginationColor="#b3b3b3"
              paginationActiveColor="#494ce8"
            >
              <slide v-for="(slide, index) in product.gallery" :key="index">
                <img
                  class="product-img"
                  :src="slide.img"
                  :alt="slide.title"
                />
              </slide>
            </carousel>
          </div>

          <!-- ********* C O N T E N T ******** -->

          <div class="product-content">
            <h1 class="title">{{ product.title }}</h1>
            <p class="descr">{{ product.descr }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Product",
  data() {
    return {
      product: null,
    };
  },
  created() {
    let id = this.$route.params.id;
    this.product = this.$store.getters.getProduct(id);
    console.log(id);
  },
};
</script>

<style lang="scss">
.product-img {
  width: 300px;
  display: block;
  text-align: center;
  margin: 0 auto;
}

.product__wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.product-slider,
.product-content {
  max-width: 48%;
  text-align: center;
}

.descr {
  text-align: left;
  padding: 10px;
}
</style>