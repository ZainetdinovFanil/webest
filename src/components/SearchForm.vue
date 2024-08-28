<template>
    <div class="search-form">
      <input type="text" v-model="query" @input="handleInput" placeholder="Поиск по заголовку" />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref,defineEmits } from 'vue';
  
  const query = ref('');
  const emit = defineEmits(['search']);
  
  const handleInput = () => {
    emit('search', query.value);
  };
  </script>
  
  <style lang="scss" scoped>
  .search-form {
    margin-bottom: 20px;
  }
  </style>
  