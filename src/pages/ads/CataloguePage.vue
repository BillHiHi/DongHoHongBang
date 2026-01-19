<script setup lang="ts">
import { ref } from 'vue';
import CatelogueCard from './CatelogueCard.vue';
import { products } from '../../data/catalogue';
import ProductDetailModal from './ProductDetailModal.vue';

const selectedProduct = ref(null);

function openDetail(p) {
  selectedProduct.value = p;
}
</script>

<template>
  <div class="catalogue">
    <h1 class="catalogue__title">Catalogue</h1>

    <div class="catalogue__grid">
      <CatelogueCard
        v-for="p in products"
        :key="p.id"
        :product="p"
        @openDetail="openDetail"
      />
    </div>

      <!-- Modal -->
    <ProductDetailModal
      :product="selectedProduct"
      @close="selectedProduct = null"
    />

    
  </div>
</template>

<style scoped>
.catalogue {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}

.catalogue__title {
  margin: 0 0 16px;
  font-size: 32px;
  font-weight: 700;
}

.catalogue__grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

/* Responsive */
@media (max-width: 1024px) {
  .catalogue__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  .catalogue__grid {
    grid-template-columns: 1fr;
  }
}
</style>
