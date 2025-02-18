<script setup lang="ts">
import type { SysRole } from '@/api/model/roleModel'
import type { FormInstance, FormRules } from 'element-plus'
import type { PagingRes, Result } from '../../../../types/api'
import { addRoleApi, delBatchRoleApi, delRoleApi, getListRoleApi, updateRoleApi } from '@/api/roleApi'
import SysDialog from '@/components/SysDialog/SysDialog.vue'
import useDialog from '@/hooks/useDialog'
// 弹窗属性
const { dialog, onClose, onShow } = useDialog()

// 表单绑定的对象
const roleInfo = reactive({
  currentPage: 1,
  pageSize: 10,
  roleName: '',
  total: 0,
})
// 新增表单对象
const addModel = reactive({
  roleId: '',
  roleName: '',
  remark: '',
  createTime: '',
})

// 表格高度
const tableHeight = ref(0)

// 表单ref属性
const addRef = ref<FormInstance>()

// 表单验证规则
const rules = reactive<FormRules>({
  roleName: [
    {
      required: true,
      message: '请输入角色名称',
      trigger: 'change',
    },
  ],
})

// 表格数据
const tableList = ref<SysRole[]>([])

// 判断是新增还是编辑
const isAdd = ref(true)

// 批量删除
const multipleSelection = ref<SysRole[]>([])// 批量删除选中的记录列表
// 查询列表
async function fetchData() {
  const res = await getListRoleApi(roleInfo) as Result<PagingRes<SysRole[]>>
  if (res && res.code === 200) {
    tableList.value = res.data.records
    roleInfo.total = res.data.total
    addRef.value?.resetFields()
  }
}

// 页面加载时触发
onMounted(() => {
  nextTick(() => {
    tableHeight.value = window.innerHeight - 250
  })
  fetchData()
})

// 新增按钮
function add() {
  dialog.title = '新增'
  dialog.height = 180
  onShow()
}

// 搜索按钮
function search() {
  fetchData()
}

// 重置按钮
function reset() {
  roleInfo.roleName = ''
  roleInfo.currentPage = 1
  fetchData()
}

// 表单提交
function commit() {
  addRef.value?.validate(async (valid) => {
    if (valid) {
      let res = null
      if (isAdd.value) {
        // 提交
        res = await addRoleApi(addModel)
      }
      else {
        // 提交
        res = await updateRoleApi(addModel)
      }
      if (res && res.code === 200) {
        ElMessage.success(res.message)
        fetchData()
        // 关闭弹框
        onClose()
      }
    }
  })
}

// 表单重置
function resetForm(form: FormInstance | undefined) {
  if (form) {
    addRef.value?.resetFields()
  }
}

// 编辑
function edit(row: SysRole) {
  // console.log(row)
  dialog.title = '编辑'
  dialog.height = 180
  isAdd.value = false
  // 回显数据
  nextTick(() => {
    Object.assign(addModel, row)
  })
  resetForm(addRef.value)
  onShow()
}

// 删除
function del(row: string) {
  ElMessageBox.confirm('此操作将永久删除该角色, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(async () => {
      const res = await delRoleApi(row)
      fetchData()
      if (res && res.code === 200) {
        ElMessage({
          type: 'success',
          message: `删除成功!`,
        })
      }
    })
}
// 批量删除
async function batchRemove() {
  if (multipleSelection.value.length === 0) {
    ElMessage({
      message: '请选择要删除的记录！',
      type: 'warning',
    })
    return
  }
  ElMessageBox.confirm('此操作将永久删除选中记录, 是否继续?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    // 点击确定，远程调用ajax
    // 遍历selection，将id取出放入id列表
    const idList: string[] = []
    multipleSelection.value.forEach((item) => {
      idList.push(item.roleId)
    })
    // 调用api
    const res = await delBatchRoleApi(idList)
    if (res && res.code === 200) {
      ElMessage.success(res.message)
      fetchData()
    }
  })
}

// 页容量改变时触发
function sizeChange(size: number) {
  roleInfo.pageSize = size
  fetchData()
}

// 页数改变时触发
function currentChange(page: number) {
  roleInfo.currentPage = page
  fetchData()
}

// 当多选选项发生变化的时候调用
function handleSelectionChange(selection: any) {
  multipleSelection.value = selection
}
</script>

<template>
  <el-main>
    <!-- 搜索栏 -->
    <el-form :model="roleInfo" :inline="true" size="default">
      <el-form-item>
        <el-input v-model="roleInfo.roleName" placeholder="请输入角色名称" />
      </el-form-item>
      <el-form-item>
        <el-button icon="Search" plain @click="search">
          搜索
        </el-button>
        <el-button icon="Close" type="warning" plain @click="reset">
          重置
        </el-button>
        <el-button icon="Plus" type="primary" plain @click="add(), resetForm(addRef)">
          新增
        </el-button>
        <el-button icon="Close" type="danger" plain @click="batchRemove()">
          批量删除
        </el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableList" style="width: 100%" stripe border :height="tableHeight" @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column
        label="序号"
        width="70"
        align="center"
      >
        <template #default="scope">
          {{ (roleInfo.currentPage - 1) * roleInfo.pageSize + scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="roleName" label="角色名称" width="180" />
      <el-table-column prop="remark" label="角色备注" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column fixed="right" label="操作" width="220" align="center">
        <template #default="scope">
          <el-button type="primary" icon="Edit" size="default" @click="edit(scope.row)">
            编辑
          </el-button>
          <el-button type="danger" icon="Delete" size="default" @click="del(scope.row.roleId)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div flex-center pt20>
      <el-pagination
        v-model:current-page="roleInfo.currentPage"
        :page-sizes="[10, 20, 40, 80, 100]"
        :page-size="roleInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="roleInfo.total"
        background
        :pager-count="7" @size-change="sizeChange"

        @current-change="currentChange"
      />
    </div>
  </el-main>
  <!-- 弹窗 -->
  <SysDialog :height="dialog.height" :title="dialog.title" :width="dialog.width" :visible="dialog.visible" @on-close="onClose" @on-confirm="commit()">
    <template #content>
      <el-form ref="addRef" :model="addModel" :rules="rules" label-width="80px" :inline="false" size="default">
        <el-form-item prop="roleName" label="角色名称">
          <el-input v-model="addModel.roleName" />
        </el-form-item>
        <el-form-item prop="remark" label="备注">
          <el-input v-model="addModel.remark" />
        </el-form-item>
      </el-form>
    </template>
  </SysDialog>
</template>

<style lang="scss" scoped>

</style>·
