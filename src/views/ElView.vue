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
</template>
