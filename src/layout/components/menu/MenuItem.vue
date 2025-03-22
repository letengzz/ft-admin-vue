<script setup lang="ts">
//通过defineProps接收父组件传递的数据
defineProps(["menuList"]);
</script>

<template>
  <template v-for="menu in menuList" :key="menu.path">
    <!-- 有下级菜单 -->
    <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
      <template #title>
        <el-icon>
          <!-- 动态组件的方式生成图表 -->
          <component :is="menu.meta.icon"></component>
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </template>
      <!-- 递归组件生成 下级 -->
      <MenuItem :menuList="menu.children" />
    </el-sub-menu>
    <!-- 没有下级菜单 -->
    <el-menu-item v-else :index="menu.path">
      <template #title>
        <el-icon>
          <!-- 动态组件的方式生成图表 -->
          <component :is="menu.meta.icon"></component>
        </el-icon>
        <span>{{ menu.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
</template>

<style scoped lang="scss"></style>
