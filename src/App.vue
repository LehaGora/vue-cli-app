<!-- eslint-disable max-len -->
<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <ProductFilter :price-from.sync="filterPriceFrom" :price-to.sync="filterPriceTo" :category-id.sync="filterCategoryId" :color-id.sync="filterColorId"/>
      <section class="catalog">
        <ProductList :products="products"/>
        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPages"/>
      </section>
    </div>
  </main>
</template>

<script>
import products from './data/products';
import ProductList from './components/ProductList.vue';
import BasePagination from './components/BasePagination.vue';
import ProductFilter from './components/ProductFilter.vue';

export default {
  name: 'App',
  components: { ProductList, BasePagination, ProductFilter },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColorId: 0,

      page: 1,
      productsPerPages: 3,
    };
  },
  computed: {
    filtredProducts() {
      let filtredProducts = products;
      if (this.filterPriceFrom > 0) {
        filtredProducts = filtredProducts.filter((product) => product.price > this.filterPriceFrom);
      }
      if (this.filterPriceTo > 0) {
        filtredProducts = filtredProducts.filter((product) => product.price < this.filterPriceTo);
      }
      if (this.filterCategoryId) {
        // eslint-disable-next-line max-len
        filtredProducts = filtredProducts.filter((product) => product.categoryId === this.filterCategoryId);
      }
      if (this.filterColorId) {
        // eslint-disable-next-line max-len
        filtredProducts = filtredProducts.filter((product) => product.colorsId.some((colorId) => colorId === this.filterColorId));
      }
      return filtredProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPages;
      return this.filtredProducts.slice(offset, offset + this.productsPerPages);
    },
    countProducts() {
      return this.filtredProducts.length;
    },
  },
};

</script>
