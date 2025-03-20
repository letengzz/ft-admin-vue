<script setup lang="ts">

</script>

<template>
  <div>
    <h1>UnoCSS</h1>
    <div class="box" />
    <hr>
    <div class="h-100 w-100 bg-red-800 text-30 text-blue hover:text-black">
      小猫米
    </div>
    <hr>
    <div class="box2">
      小猫咪
    </div>
    <hr>
    <div mt10 h100 w100 bg-bluegray py20 text-fuchsia>
      小猫咪
    </div>
    <hr>
    <div class="wrap" h100 w200 flex-center gap10>
      <div h20 w20 bg-blue />
      <div h20 w20 bg-blue />
      <div h20 w20 bg-blue />
    </div>
    <hr>
    <div i-ep:dish />
    <i i-ep:switch-button block h100 w100 />
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>

  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: salmon;
}

.box2 {
  @apply h-100 w-100 bg-red-800 text-30 text-blue hover:text-black;
}

.wrap {
  border: 1px solid #ddd;
}
</style>
