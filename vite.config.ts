import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

import path from "path"

export default defineConfig({
  plugins: [vue()],
  server: {
    // open: true,
    // https: httpsConfig,
    // host: 'vipdev.wps.cn',
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  /* css: {
    preprocessorOptions: {
      scss: {
        charset: false,
        // 引入 var.scss 这样就可以在全局中使用 var.scss中预定义的变量了
        additionalData: '@import "@/assets/scss/var.scss";',
      },
    },
  }, */
})
