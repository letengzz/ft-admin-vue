import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createApp } from 'vue'

import App from './App.vue'
import { useRouter } from './router'

import { usePinia } from './stores'
import 'virtual:uno.css' // 引入 uno.css
// 引入全局样式
import '@/styles/index.scss'

const app = createApp(App)

useRouter(app)
usePinia(app)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
