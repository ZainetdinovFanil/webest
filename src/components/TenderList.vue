<template>
  <div>
    <SearchForm @search="handleSearch" />
    <Transition name="fade">
      <div v-if="error" class="error">{{ error }}</div>
      <div v-else class="tender-list">
        <div v-for="tender in tenders" :key="tender.id" class="tender-item">
          <h2>{{ tender.title }}</h2>
          <p class="tender-secription">{{ tender.description }}</p>
          <router-link :to="{ name: 'TenderDetail', params: { id: tender.id } }"
            >Подробно</router-link
          >
        </div>
      </div>
    </Transition>
    <Paginator
      :totalPages="totalPages"
      :currentPage="currentPage"
      @pageChange="handlePageChange"
    />
  </div>
</template>
  
  <script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import SearchForm from "./SearchForm.vue";
import Paginator from "./TenderPaginator.vue";

const store = useStore();
const router = useRouter();
const route = useRoute();

const tenders = ref<[]>(store.getters["getList"].data);
const error = ref<string>('');
const currentPage = ref(store.getters["getCurrentPage"]);
const totalPages = ref(0);

const fetchTenders = async (page: number) => {
  error.value = '';

  try {
    await store.dispatch("listAction", { page });
    tenders.value = store.getters["getList"].data;
    totalPages.value = store.getters["getList"].page_count;
  } catch (err) {
    error.value = err.message;
  }
};

const handlePageChange = (page: number) => {
  currentPage.value = page;
  fetchTenders(page);
  window.scrollTo(0, 0);
};

const handleSearch = (query: string) => {
    tenders.value = store.getters["getList"].data.filter((el:{title:string}) => {
    return el.title.includes(query);
  });
};

onMounted(() => {
  fetchTenders(currentPage.value);
});
</script>
  
  <style lang="scss" scoped>
.tender-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5px;
}

.tender-item {
    flex-basis: calc(20% - 5px);
    max-width: calc(20% - 5px);
    border: 1px solid #ccc;
    padding: 2px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.loading,
.error {
  text-align: center;
  margin-top: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}   
.tender-secription{
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: auto;
}
</style>
  