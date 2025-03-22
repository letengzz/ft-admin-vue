<script setup lang="ts">
import MenuBar from "./components/Menu/MenuBar.vue";
import Header from "./components/Header/Header.vue";
</script>

<template>
  <el-container class="layout-container" h="[100%]">
    <el-aside width="auto" class="leftmenu">
      <MenuBar />
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header />
      </el-header>
      <el-main class="content">
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.layout-container {
  .header {
    display: flex;
    align-items: center;
    background-color: #009688;
  }

  .leftmenu {
    background-color: #304156;
  }
}
</style>
