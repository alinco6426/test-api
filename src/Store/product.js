import { defineStore } from "pinia";

// import { defineStore } from 'pinia';

const API_BASE_URL = 'https://api.timbu.cloud';
const ORGANIZATION_ID = '914a1ea0a41f41538a1a489f628d27de';
const APP_ID = '0P3W7TBADIH3K9R';
const API_KEY = '616ca87d3edb4e54bc48ed444168c15f20240712185722233413';

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
    product: {},
    productCategories: [],
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await fetch(`${API_BASE_URL}/products?organization_id=${ORGANIZATION_ID}&reverse_sort=false&page=1&size=10&APP_ID=${APP_ID}&API_KEY=${API_KEY}`);
        const data = await response.json();
        this.products = data.items;
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    },
  },
});
