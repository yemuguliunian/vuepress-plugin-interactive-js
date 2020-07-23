const interactiveJs = require('../../src/');

/**
 * 此文件是由脚本 scripts/generator.ts 自动生成
 */
module.exports = {
    title: 'vuepress-plugin-interactive-js',
    description: 'javascript 输出打印插件',
    base: '/vuepress-plugin-interactive-js/',
    port: '3000',
    dest: './dist',
    themeConfig: {
        repo: 'yemuguliunian/vuepress-plugin-interactive-js',
        sidebarDepth: 2,
        smoothScroll: true,
    },
    plugins: [interactiveJs],
};
