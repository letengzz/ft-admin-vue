/*
菜单管理相关的API请求函数
*/
import type { SysRole, SysRoleInfo } from '@/api/model/roleModel'
import http from '@/http'

export const prefix = '/system/sysRole'

// 新增
export function addRoleApi(role: SysRole) {
  return http.post(`${prefix}/save`, role)
}

// 编辑
export function updateRoleApi(role: SysRole) {
  return http.put(`${prefix}/update`, role)
}

// 删除
export function delRoleApi(roleId: string) {
  return http.delete(`${prefix}/remove/${roleId}`)
}

// 批量删除
export function delBatchRoleApi(roleIds: string[]) {
  return http.delete(`${prefix}/batchRemove`, roleIds)
}

// 分页查询
export function getListRoleApi(parm: SysRoleInfo) {
  return http.get(`${prefix}/${parm.currentPage}/${parm.pageSize}`, {
    roleName: parm.roleName,
  })
}
