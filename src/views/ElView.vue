<script lang="ts" setup>
function open() {
  ElMessage('This is a message.')
}

function openVn() {
  ElMessage({
    message: h('p', { style: 'line-height: 1; font-size: 14px' }, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
const menu = [
  {
    name: '增',
    icon: IconEpPlus,
  },
  {
    name: '改',
    icon: IconEpEditPen,
  },
  {
    name: '删',
    icon: IconEpDelete,
  },
]
</script>

<template>
  <el-button :plain="true" @click="open">
    Show message
  </el-button>
  <el-button :plain="true" @click="openVn">
    VNode
  </el-button>
  <el-button type="primary">
    你好
  </el-button>
  <el-icon v-for="item in menu" :key="item.name">
    <component :is="item.icon" />
  </el-icon>
  <el-icon><i-ep-switch-button /></el-icon>
</template>
