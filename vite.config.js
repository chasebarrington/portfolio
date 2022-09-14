import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';

export default {
  plugins: [vue(), viteCompression(), viteCompression({algorithm: 'brotliCompress'})]
}
