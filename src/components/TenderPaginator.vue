<template>
  <div class="paginator">
    <button @click="prevPage" :disabled="currentPage === 1">Назад</button>
    <span>Страница {{ currentPage }} из {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">
      Далее
    </button>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  totalPages: Number,
  currentPage: Number,
});

const emit = defineEmits(["pageChange"]);

const currentPage = ref(props.currentPage);

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit("pageChange", currentPage.value);
  }
};

const nextPage = () => {
  if (currentPage.value < props.totalPages) {
    currentPage.value++;
    emit("pageChange", currentPage.value);
  }
};

</script>
  
  <style lang="scss" scoped>
.paginator {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  margin: 0 10px;
}
</style>
  