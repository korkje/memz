# memz [![JSR](https://jsr.io/badges/@korkje/memz)](https://jsr.io/@korkje/memz)

Memoize any function.

```ts
import memoize from "jsr:@korkje/memz";

const add = memoize((a: number, b: number) => a + b);
```

Recursion:

```ts
const fib = memoize((n: number): number => {
    if (n < 2) {
        return n;
    }

    return fib(n - 2) + fib(n - 1);
});
```

Initial cache:

```ts
const cache = { "0": 0, "1": 1 };
const fib = memoize((n: number): number => fib(n - 2) + fib(n - 1), cache);
```
