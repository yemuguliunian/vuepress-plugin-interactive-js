import prism from 'prismjs';

const LANG = 'javascript';

const wrapper = (code) => {
    return `<pre class="language-${LANG}"><code>${code}</code></pre>`;
};

export default function (str) {
    const code = prism.highlight(str, prism.languages[LANG], LANG);
    return wrapper(code);
}
