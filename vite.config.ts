import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { EsLinter, linterPlugin, TypeScriptLinter } from "vite-plugin-linter";

const _dirname = './src';
// https://vitejs.dev/config/
export default defineConfig({
    base: '/print-grid-react/',
    plugins: [
        react(),
        // linterPlugin({
        //     include: ['./src/**/*.ts', './src/**/*.tsx'],
        //     linters: [new EsLinter(), new TypeScriptLinter()],
        // https://github.com/TheSwordBreaker/vite-reactts-eslint-prettier/blob/main/.eslintrc.js
        // }),
    ],
    build: {
        outDir: 'docs',
    },
    // build: {
    //     lib: {
    //         // entry: path.resolve(_dirname, 'lib/PrintGridRaw.tsx'),
    //         entry: path.resolve(_dirname, 'lib/PrintGrid.tsx'),

    //         name: 'PrintGrid',
    //         fileName: (format) => `print-grid.${format}.js`,
    //         // fileName: (format) => `print-grid-raw.${format}.js`,
    //     },

    //     rollupOptions: {
    //         external: ['react', 'react-dom'],
    //         output: {
    //             globals: {
    //                 react: 'React',
    //             },
    //         },
    //     },
    // },
});
