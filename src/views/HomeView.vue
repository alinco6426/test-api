<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <p>{{ product.name }}</p>
        <img v-for="photo in product.photos" :key="photo.url" :src="`https://api.timbu.cloud/images/${photo.url}`" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    await this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get('/api/products', {
          params: {
            organization_id: '914a1ea0a41f41538a1a489f628d27de',
            reverse_sort: false,
            page: 1,
            size: 10,
            Appid: '0P3W7TBADIH3K9R',
            Apikey: '616ca87d3edb4e54bc48ed444168c15f20240712185722233413',
          },
        });
        this.products = response.data.items;
        console.log(this.products)
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
