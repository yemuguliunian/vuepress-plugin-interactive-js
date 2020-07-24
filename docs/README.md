# Example

## Common Usage

### Usage Example

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

### Result

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

## Set title

### Usage Example

````md
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
````

### Result

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

