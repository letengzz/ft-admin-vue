<script setup lang="ts">
import MenuLogo from "@/assets/logo.svg";

const title = ref("通用权限系统");
</script>

<template>
  <div class="logo">
    <img alt="logo" :src="MenuLogo" />
    <span class="logo-title">{{ title }}</span>
  </div>
</template>

<style scoped lang="scss">
.logo {
  display: flex;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #2b2f3a;
  text-align: center;
  cursor: pointer;
  align-items: center;

  img {
    width: 36px;
    height: 36px;
    margin-left: 20px;
    margin-right: 12px;
  }

  .logo-title {
    color: #fff;
    font-weight: 800;
    line-height: 60px;
    font-size: 18px;
    font-family: FangSong;
  }
}
</style>
