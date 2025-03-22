<script setup lang="ts">
import Header from "@/layout/components/Header/Header.vue";
import MenuBar from "@/layout/components/Menu/MenuBar.vue";
</script>

<template>
  <el-container class="layout-container">
    <el-aside width="230px" class="leftmenu">
      <MenuBar />
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header />
      </el-header>
      <el-main class="content">Main</el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.layout-container {
  height: 100%;

  .header {
    background-color: #f5f5f5;
  }

  .leftmenu {
    background-color: #304156;
  }
}
</style>
