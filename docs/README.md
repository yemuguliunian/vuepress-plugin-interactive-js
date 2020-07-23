# 使用

**js 基础**

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

**Array.includes()**

::: javascript JavaScript Demo: Array.includes()
```js
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false
```
:::

**Array.concat()**

::: javascript JavaScript Demo: Array.concat()
```js
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```
:::
