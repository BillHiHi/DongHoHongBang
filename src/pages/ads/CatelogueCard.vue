<template>
  <article class="card">
    <img
      v-if="product?.image"
      :src="product.image"
      :alt="product.name"
      class="card__img"
    />

    <div class="card__body">
      <div class="card__top">
        <div>
          <div class="badge">
            <span class="badge__icon">{{ categoryMeta.icon }}</span>
            <span class="badge__text">{{ categoryMeta.label }}</span>
          </div>

          <h3 class="card__title">{{ product?.name }}</h3>
        </div>

        <div class="price">
          Từ
          <div class="price__value">{{ product?.minPrice }}</div>
        </div>
      </div>

      <p class="card__desc">{{ product?.shortDescription }}</p>

      <div class="chips">
        <span v-if="product?.paper" class="chip">{{ product.paper }}</span>
        <span v-if="product?.finish" class="chip">{{ product.finish }}</span>
        <span v-if="product?.size" class="chip">{{ product.size }}</span>
      </div>

      <button class="btn" @click="$emit('openDetail', product)">
        Xem chi tiết <span class="btn__arrow">→</span>
      </button>
    </div>
  </article>
</template>

<script setup>
import { computed, toRefs } from "vue";
import { categories } from "../../data/catalogue";

const props = defineProps({
  product: { type: Object, required: true },
});
const { product } = toRefs(props);

defineEmits(["openDetail"]);

const categoryMeta = computed(() => {
  const found = categories.find((c) => c.key === product.value?.category);
  return found || { key: "other", label: "Khác", icon: "📦" };
});
</script>

<style scoped>
/* Card container */
.card {
  border-radius: 12px;                 /* rounded-xl */
  border: 1px solid #e2e8f0;           /* border-slate-200 */
  background: #fff;                   /* bg-white */
  overflow: hidden;                   /* overflow-hidden */
  transition: border-color 150ms, box-shadow 150ms; /* transition-all */
}
.card:hover {
  border-color: #cbd5e1;              /* hover:border-slate-300 */
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.08); /* hover:shadow-md */
}

/* Image */
.card__img {
  width: 100%;                        /* w-full */
  height: 160px;                      /* h-40 (40*4=160) */
  object-fit: cover;                  /* object-cover */
  display: block;
}

/* Body layout */
.card__body {
  padding: 16px;                      /* p-4 */
  display: flex;                      /* flex */
  flex-direction: column;             /* flex-col */
  gap: 12px;                          /* gap-3 */
}

/* Top row */
.card__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;     /* justify-between */
  gap: 8px;                           /* gap-2 */
}

/* Badge */
.badge {
  display: inline-flex;               /* inline-flex */
  align-items: center;
  gap: 4px;                           /* gap-1 */
  padding: 2px 8px;                   /* px-2 py-0.5 */
  border-radius: 999px;               /* rounded-full */
  background: #f1f5f9;                /* bg-slate-100 */
  font-size: 11px;                    /* text-[11px] */
  color: #475569;                     /* text-slate-600 */
  margin-bottom: 4px;                 /* mb-1 */
}
.badge__icon {
  line-height: 1;
}

/* Title */
.card__title {
  font-size: 14px;                    /* text-sm */
  font-weight: 600;                   /* font-semibold */
  color: #0f172a;                     /* text-slate-900 */
  margin: 0;
}

/* Price */
.price {
  text-align: right;                  /* text-right */
  font-size: 12px;                    /* text-xs */
  color: #475569;                     /* text-slate-600 */
  white-space: nowrap;
}
.price__value {
  font-size: 14px;                    /* text-sm */
  font-weight: 600;                   /* font-semibold */
  color: #0f172a;                     /* text-slate-900 */
}

/* Description */
.card__desc {
  font-size: 12px;                    /* text-xs */
  color: #475569;                     /* text-slate-600 */
  margin: 0;
}

/* Chips */
.chips {
  display: flex;
  flex-wrap: wrap;                    /* flex-wrap */
  gap: 6px;                           /* gap-1.5 */
  font-size: 10px;                    /* text-[10px] */
  color: #475569;                     /* text-slate-600 */
}
.chip {
  padding: 4px 8px;                   /* px-2 py-1 */
  border-radius: 999px;               /* rounded-full */
  background: #f1f5f9;                /* bg-slate-100 */
}

/* Button */
.btn {
  margin-top: 4px;                    /* mt-1 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;                           /* gap-1.5 */
  font-size: 11px;                    /* text-[11px] */
  font-weight: 500;                   /* font-medium */
  padding: 6px 12px;                  /* px-3 py-1.5 */
  border-radius: 999px;               /* rounded-full */
  border: none;
  background: #10b981;                /* bg-emerald-500 */
  color: #fff;
  cursor: pointer;
}
.btn:hover {
  background: #059669;                /* hover:bg-emerald-600 */
}
.btn__arrow {
  font-size: 13px;                    /* text-[13px] */
}

.card { width: 100%; }
.card__img { width: 100%; display: block; }

</style>
