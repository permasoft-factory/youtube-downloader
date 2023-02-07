import { defineConfig } from 'tsup';

import type { Options } from 'tsup';

export const createTsupConfig = (options: Options = {}) =>
	defineConfig({
		clean: true,
		dts: true,
		keepNames: true,
		minify: false,
		skipNodeModulesBundle: true,
		sourcemap: true,

		entry: ['./src/index.ts'],
		format: ['cjs'],
		target: 'es2021',

		...options
	});
