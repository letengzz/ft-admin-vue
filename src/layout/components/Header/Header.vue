<script setup lang="ts">
import Collapse from "./Collapse.vue";
import BreadCrumb from "./BreadCrumb.vue";
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
