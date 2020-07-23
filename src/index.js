const path = require('path');
const markdownItContainer = require('markdown-it-container');

module.exports = (options = {}) => {
    const { type = 'javascript' } = options;
    const END_TYPE = `container_${type}_close`;
    return {
        name: 'vuepress-plugin-interactive-js',
        enhanceAppFiles: [path.resolve(__dirname, 'enhanceAppFile.js')],
        extendMarkdown: (md) => {
            md.use(markdownItContainer, type, { render });
        },
    };

    function render(tokens, idx) {
        const { nesting, info } = tokens[idx];
        if (nesting === 1) {
            let title = info.trim().slice(type.length).trim();

            let htmlStr = '';
            let lastLine = 0;
            for (let i = idx; i < tokens.length; i++) {
                const { type, content, map } = tokens[i];
                if (type === END_TYPE) break;
                // add empty lines
                if (map) {
                    const delta = map[0] - (lastLine || map[1]);
                    if (delta > 0) {
                        htmlStr += '\n'.repeat(delta);
                    }
                    lastLine = map[1];
                }
                htmlStr += content;
            }

            return `
            <InteractiveJs
                htmlStr="${encodeURIComponent(htmlStr)}"
                title="${title}"
            >
        `;
        } else {
            return `
              </InteractiveJs>
            `;
        }
    }
};
