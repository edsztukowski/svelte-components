import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/lib/main.js', // (1)
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'dist/bundle.js', // (2)
    },
    plugins: [
        svelte({
            // enable run-time checks when not in production
            dev: !production,
        }),
        css({ output: 'bundle.css' }),
        resolve({
            browser: true,
            dedupe: ['svelte'],
        }),
        commonjs(),
    ],
    watch: {
        clearScreen: false,
    },
};
