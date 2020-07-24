# vuepress-plugin-interactive-js

使用此插件，您可以通过以下语法同时显示代码和 console.log 结果。

````md
::: javascript

```js
var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };

// 请写出以下输出结果
console.log(a.x);
console.log(b);
```

:::
````

[点击查看 Demo](https://yemuguliunian.github.io/vuepress-plugin-interactive-js/)

## Install

```shell
yarn add @yemu419/vuepress-plugin-interactive-js -D
```

## Usage

Write vuepress config

```js
module.exports = {
    plugins: ['@yemu419/interactive-js'],
}
```

