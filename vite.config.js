import {
	defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import {join,path} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	// base: path.resolve(__dirname, 'dist'),
	// base: './',  // 
  	outDir: join(__dirname,'./dist'), // 输出位置
	server: {
		host: '0.0.0.0',
		port:8081,
		proxy: {
			// '/api': 'http://175.178.232.26:8888',
			'/api': {
				target: 'http://localhost:8888/',
				changeOrigin: true,
				// rewrite: (path) => path.replace(/^\/api/, '')
			},
		
		}
	}
})
