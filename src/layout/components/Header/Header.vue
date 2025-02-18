<script setup lang="ts">
import BreadCrumb from '@/layout/components/Header/BreadCrumb.vue'
import Collapse from '@/layout/components/Header/Collapse.vue'
</script>

<template>
  <div class="header-container">
    <Collapse />
    <BreadCrumb />
  </div>
</template>

<style scoped lang="scss">
.header-container {
  display: flex;
  align-items: center;
}
</style>
