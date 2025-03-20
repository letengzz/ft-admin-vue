<script setup lang="ts"></script>

<template>
  <el-container class="layout-container">
    <el-aside width="200px" class="leftmenu">Aside</el-aside>
    <el-container>
      <el-header class="header">Header</el-header>
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
    background-color: antiquewhite;
  }
}
</style>
