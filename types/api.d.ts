// 定义返回值类型
export interface Result<T> {
  code: number
  message: string
  data: T
}
