<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img :src="product.img" :alt="product.title">
    </a>
    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>
    <span class="catalog__price">
      {{ product.price }} ₽
    </span>
    <ul class="colors colors--black">
      <li class="colors__item" v-for="colorId in product.colorsId" :key="colorId">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" :value="getColorCode(colorId)" v-model="color">
          <span class="colors__value" :style="{backgroundColor: getColorCode(colorId)}">
          </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import colors from '@/data/colors';

export default {
  data() {
    return {
      color: '#73B6EA',
    };
  },
  props: ['product'],
  computed: {
    colors() {
      return colors;
    },
  },
  methods: {
    getColorCode(id) {
      return colors.find((color) => color.id === id).code;
    },
  },
};
</script>
