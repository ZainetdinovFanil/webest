<template>
  <div>
    <h1>Home Page</h1>
    <button @click="fetchData">Fetch Data</button>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>
    <div v-if="data">
      <h2>Data from API:</h2>
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const data = ref(null);
const loading = ref(false);
const error = ref(null);

const fetchData = async () => {
  loading.value = true;
  error.value = null;
  try {
    await store.dispatch('listAction', 2); 
    data.value = store.state.someData; 
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }


  try {
    await store.dispatch('fetchTenderDetail', 1); 
    data.value = store.state.someData; 
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }

};
</script>
