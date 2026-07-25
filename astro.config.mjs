import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// 技能淘 Astro 配置 — 纯静态站点 (SSG)
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://skilltao.com',
  base: '/skilltao.com/',
  output: 'static',
  // 构建到 dist，然后复制到根目录（GitHub Pages 根目录托管）
  outDir: 'dist',
  // 技能详情页预生成，使用数据中的 slug
  build: {
    format: 'file',
  },
});
