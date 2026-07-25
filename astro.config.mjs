import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// 技能淘 Astro 配置 — 纯静态站点 (SSG)
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://skilltao.com',
  base: '',
  output: 'static',
  outDir: 'dist',
  build: {
    format: 'directory',
  },
});
