import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), purgeCss()],
	server: {
		host: '0.0.0.0', // allows the server to listen on all interfaces
		port: 3000, // optional: set a port, default is 5173
	}
});


