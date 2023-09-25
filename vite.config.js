// const path = require('path')
import { defineConfig } from 'vite';
import path from 'path';


export default defineConfig({
    resolve: {
        alias: {
            '~normalize.css': path.resolve(__dirname, 'node_modules/normalize.css'),
        },
    },
});