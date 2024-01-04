import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['..']
		}
	},
	resolve: {
		alias: {
		  'svelte-icons': 'parlay-mediation/node_modules/svelte-icons',
		},
	  },
});
