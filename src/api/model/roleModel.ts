// 定义角色数据类型
export interface SysRole {
  roleId: string
  roleName: string
  remark: string
  createTime: string
}

// 列表查询的参数
export interface SysRoleInfo {
  roleName: string
  currentPage: number
  pageSize: number
  total: number
}
