<script setup lang="ts">
import MenuLogo from "@/assets/logo.svg";

const title = ref("通用权限系统");
</script>

<template>
  <div class="logo" w="[100%]" h-60px flex-middle text-center lh-60px>
    <img alt="logo" class="logo-img" :src="MenuLogo" draggable="true" mx-14px h-36px w-36px>
    <div w="[100%]" ml-8 flex>
      <span class="logo-title" pointer-events-none text-18px font-800 lh-60px>{{ title }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  background: #2b2f3a;
  cursor: pointer;

  .logo-title {
    font-family: FangSong;
    color: #fff;
  }
}
</style>
