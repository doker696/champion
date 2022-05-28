import { defineConfig } from 'vite';
import path from 'path';
import { readdirSync } from 'fs';
import react from '@vitejs/plugin-react';

const absolutePathAliases = {};
// Root resources folder
const srcPath = path.resolve('./');
const srcRootContent = readdirSync(srcPath, { withFileTypes: true })
    .map((dirent) => dirent.name.replace(/(\.js|\.ts){1}(x?)/, ''));

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = path.join(srcPath, directory);
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  base: './',
  resolve: {
    alias: {...absolutePathAliases},
  },
});
