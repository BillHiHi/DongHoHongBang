<template>
  <div v-if="product" class="modal" @click.self="$emit('close')">
    <div class="modal__panel">
      <img
        v-if="product.image"
        :src="product.image"
        :alt="product.name"
        class="modal__img"
      />

      <div class="modal__body">
        <div class="modal__head">
          <div>
            <div class="meta">
              <span class="meta__icon">{{ categoryMeta.icon }}</span>
              <span>{{ categoryMeta.label }}</span>
            </div>
            <h3 class="modal__title">{{ product.name }}</h3>
          </div>

          <button class="modal__close" @click="$emit('close')">✕</button>
        </div>

        <p class="modal__desc">
          {{ product.description || product.shortDescription }}
        </p>

        <div class="specs">
          <div class="spec">
            <div class="spec__label">Chất liệu</div>
            <div class="spec__value">{{ product.paper || 'Tuỳ chỉnh theo yêu cầu' }}</div>
          </div>

          <div class="spec">
            <div class="spec__label">Bề mặt hoàn thiện</div>
            <div class="spec__value">{{ product.finish || 'Cán mờ / cán bóng / ép kim' }}</div>
          </div>

          <div class="spec">
            <div class="spec__label">Kích thước gợi ý</div>
            <div class="spec__value">{{ product.size || 'Theo bộ nhận diện thương hiệu' }}</div>
          </div>

          <div class="spec">
            <div class="spec__label">Giá tham khảo</div>
            <div class="spec__value spec__value--strong">{{ product.minPrice }}+</div>
          </div>
        </div>

        <div class="modal__foot">
          <div class="modal__hint">
            Liên hệ để nhận báo giá chi tiết theo số lượng &amp; yêu cầu riêng.
          </div>

          <button class="modal__ok" @click="$emit('close')">Đã hiểu</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { categories } from "../../data/catalogue";

const props = defineProps({
  product: { type: Object, default: null },
});
defineEmits(["close"]);

const categoryMeta = computed(() => {
  const key = props.product?.category;
  return categories.find((c) => c.key === key) || { key: "other", label: "Khác", icon: "📦" };
});
</script>

<style scoped>
/* Overlay fullscreen */
.modal{
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: flex-start;   /* thay vì center */
  padding: 80px 16px 16px;   /* đẩy xuống 80px */
  background: rgba(0,0,0,.3);
}


/* Panel */
.modal__panel{
  width: 100%;
  max-width: 448px;           /* ~ max-w-md */
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  background: #fff;
  box-shadow: 0 10px 30px rgba(15,23,42,.18);
  overflow: hidden;
}

/* Image */
.modal__img{
  width: 100%;
  height: 192px;              /* h-48 */
  object-fit: cover;
  display: block;
}

.modal__body{ padding: 16px; }

.modal__head{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
}

.meta{
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #64748b;             /* slate-500 */
  margin-bottom: 4px;
}
.meta__icon{
  width: 20px;
  height: 20px;
  border-radius: 999px;
  background: #f1f5f9;        /* slate-100 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
}

.modal__title{
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;             /* slate-900 */
}

.modal__close{
  border: none;
  background: transparent;
  color: #94a3b8;             /* slate-400 */
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
}
.modal__close:hover{ color: #334155; } /* slate-700 */

.modal__desc{
  margin: 0 0 12px;
  font-size: 14px;
  color: #334155;             /* slate-700 */
}

/* Specs grid */
.specs{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}
.spec{
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  background: #f8fafc;        /* slate-50 */
  padding: 8px 12px;
}
.spec__label{
  font-size: 12px;
  color: #64748b;
  margin-bottom: 4px;
}
.spec__value{
  font-size: 13px;
  font-weight: 500;
  color: #0f172a;
}
.spec__value--strong{ font-weight: 600; }

/* Footer */
.modal__foot{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 12px;
}
.modal__hint{ color: #64748b; }

.modal__ok{
  margin-left: 12px;
  border: none;
  border-radius: 999px;
  padding: 6px 12px;
  background: #0f172a;        /* slate-900 */
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}
.modal__ok:hover{ background: #1e293b; } /* slate-800 */

@media (max-width: 420px){
  .specs{ grid-template-columns: 1fr; }
}


</style>
