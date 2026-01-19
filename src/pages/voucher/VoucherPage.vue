<template>
  <div class="catalogue">
    <h1 class="catalogue__title">Voucher</h1>

    <div class="catalogue__grid">
      <CatalogueCard
        v-for="p in voucherProducts"
        :key="p.id"
        :product="p"
        @openDetail="openDetail"
      />
    </div>

    <ProductDetailModal :product="selected" @close="selected = null" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { voucherProducts } from "../../data/voucher.js"; // chỉnh path đúng

import CatalogueCard from "../ads/CatelogueCard.vue"; // chỉnh path đúng
import ProductDetailModal from "../ads/ProductDetailModal.vue"; // chỉnh path đúng

const selected = ref(null);
const openDetail = (p) => (selected.value = p);
</script>

<style scoped>
/* reuse y chang CSS grid bạn đang dùng */
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
@media (max-width: 1024px) {
  .catalogue__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .catalogue__grid { grid-template-columns: 1fr; }
}
</style>
