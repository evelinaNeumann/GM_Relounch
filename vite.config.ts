import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import templateCompilerOptions from '@tresjs/core/template-compiler-options'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRootDir = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [vue(templateCompilerOptions)],
  resolve: {
    alias: {
      '@': resolve(projectRootDir, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('/@tresjs/')) return 'vendor-tres'
          if (id.includes('/three/')) return 'vendor-three'
          return 'vendor-misc'
        },
      },
    },
  },
  css: {
    transformer: 'lightningcss',
  },
})
