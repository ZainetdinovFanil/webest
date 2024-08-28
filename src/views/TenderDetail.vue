<template>
    <div>
      <Transition name="fade">
        <div v-if="error" class="error">{{ error }}</div>
        <div v-else class="tender-detail">
          <h1>{{ tenderDetail?.title }}</h1>
          <p>{{ tenderDetail?.description }}</p>
          <p>Date: {{ tenderDetail?.date }}</p>
          <p>Deadline Date: {{ tenderDetail?.deadline_date }}</p>
          <p>Awarded Value: {{ tenderDetail?.awarded_value }}</p>
          <button @click="goBack">Back</button>
        </div>
      </Transition>
    </div>
  </template>

  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter, useRoute } from 'vue-router';
  import { computed } from 'vue';
  import { TenderDetail } from '../store/modules/detail/types';
  
  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  
  const tenderDetail = computed(() => store.getters['getTenderDetail']);
  const error = ref<string>('');
  
  const fetchTenderDetail = async (id: number) => {
    error.value = '';
    try {
      await store.dispatch('fetchTenderDetail', id);
    } catch (err) {
      error.value = err.message;
    }
  };
  
  const goBack = () => {
    router.push({ name: 'Home' });
  };
  
  onMounted(() => {
    fetchTenderDetail(parseInt(route.params.id as string, 10));
  });
  </script>
  
  <style lang="scss" scoped>
  .tender-detail {
    padding: 20px;
  }
  
  .loading, .error {
    text-align: center;
    margin-top: 20px;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  