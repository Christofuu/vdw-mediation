import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import envPlugin from 'vite-plugin-env';

export default defineConfig({
	plugins: [sveltekit(), envPlugin],
	server: {
		fs: {
			allow: ['..']
		}
	},
	build: {
		rollupOptions: {
			external: ['$env']
		}
	},
});
