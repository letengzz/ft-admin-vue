// 服务器选项

export function useServer(viteEnv: ViteEnv) {
  return {
  // 监听所有公共ip
  // host: '0.0.0.0',
    cors: true,
    port: viteEnv.VITE_PORT,
    proxy: {
    // 前缀
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        // 前缀重写
        rewrite: (path: string) => path.replace(/^\/api/, ''),
      },
    },
  }
}
