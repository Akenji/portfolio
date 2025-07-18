import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [UnoCSS(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});


