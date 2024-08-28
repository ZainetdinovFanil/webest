<template>
  <div>
    <h1 class="title">Tender List</h1>
    <Transition name="fade">
      <TenderList />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import TenderList from '../components/TenderList.vue';
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  margin-bottom: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
