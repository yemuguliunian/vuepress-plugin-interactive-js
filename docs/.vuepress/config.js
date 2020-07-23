const interactiveJs = require("../../src/");

/**
 * 此文件是由脚本 scripts/generator.ts 自动生成
 */
module.exports = {
  title: "vuepress-plugin-interactive-js",
  description: "记录和整理平时遇到的知识点，问题",
  base: "/fvuepress-plugin-interactive-js/",
  port: "3000",
  dest: "./dist",
  themeConfig: {
    repo: "yemuguliunian/vuepress-plugin-interactive-js",
    sidebarDepth: 2,
    smoothScroll: true,
  },
  plugins: [interactiveJs],
};
