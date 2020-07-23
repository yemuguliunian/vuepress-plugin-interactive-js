<template>
    <div class="interactive">
        <header v-if="!!title">
            <h4>{{ title }}</h4>
        </header>
        <div v-html="highlightCode" :class="`language-javascript extra-class`" />
        <div class="output-container">
            <div class="buttons-container">
                <button id="run" class="button" @click="run">Run</button>
                <button id="reset" class="button" @click="reset">Reset</button>
            </div>
            <iframe ref="iframeResult" id="iframeResult" class="result" frameborder="0"> </iframe>
        </div>
    </div>
</template>
<script>
import highlight from './highlight';
import consolelog from './consolelog';
import style from './style';

export default {
    components: {},
    props: {
        htmlStr: String,
        title: String,
    },
    data() {
        return {
            language: 'javascript',
            highlightCode: '',
        };
    },
    computed: {
        codeStr() {
            return decodeURIComponent(this.htmlStr);
        },
    },
    mounted() {
        const { codeStr } = this;
        this.highlightCode = highlight(codeStr);
        this.doc = this.$refs.iframeResult.contentWindow.document;
    },
    methods: {
        write() {
            const { codeStr, doc } = this;

            // 添加样式
            let styleEle = document.createElement('style');
            styleEle.innerHTML = style;

            let innerHTML = '<div id="console" class="output"></div>';

            // 自定义容器的js代码放进 iframe 环境中执行
            let el = doc.createElement('script');
            el.text = this.closure(codeStr);

            // 对 console.log 进行捕获处理
            let consolelogEl = doc.createElement('script');
            consolelogEl.text = consolelog;

            doc.head.appendChild(styleEle);
            doc.body.innerHTML = innerHTML;
            doc.body.appendChild(consolelogEl);
            doc.body.appendChild(el);
        },

        // 代码放入闭包环境，解决 Identifier '' has already been declared 的问题
        closure(codeStr) {
            return `
                (function() {
                    ${codeStr}
                })()
            `;
        },

        run() {
            this.clearHtml();
            this.write();
        },

        reset() {
            this.clearHtml();
        },

        clearHtml() {
            // 这边未直接使用 contentwindow.reload() 的原因是因为 reload 是异步的
            // 故直接使用 this.doc.body.innerHTML = '';
            this.doc.body.innerHTML = '';
        },
    },
};
</script>
<style scoped>
.interactive {
    box-sizing: border-box;
    background-color: #f5f9fa;
    color: #333;
    padding: 10px;
    border: 1px solid #eaf2f4;
    width: 100%;
}
.interactive header h4 {
    display: inline-block;
    margin: 0;
    font-size: 1.1rem;
    font-weight: 700;
}
.interactive header h4::before {
    display: inline-block;
    content: '';
    background: transparent url(./icons/java-script.svg) 0 0 no-repeat;
    margin-right: 0.6em;
    width: 45px;
    height: 45px;
    vertical-align: middle;
}
.output-container {
    display: flex;
}
.buttons-container {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
}
.buttons-container .button {
    line-height: 1.499;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border: 1px solid #d9d9d9;
    margin-bottom: 0.5em;
}
.buttons-container .button:active {
    outline: 0;
    box-shadow: none;
}
.extra-class {
    border-radius: 2px;
}
.result {
    flex-grow: 1;
    background: #ffffff;
}
</style>
