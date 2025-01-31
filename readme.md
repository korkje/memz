# memz [![JSR](https://jsr.io/badges/@korkje/memz)](https://jsr.io/@korkje/memz)

Wrap any function with a cache.

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
// Start with 2 and 1, i.e. create the Lucas sequence.
const cache = { "[0]": 2, "[1]": 1 };
const fib = memoize(
    (n: number): number => fib(n - 2) + fib(n - 1),
    { cache },
);
```

By default, cache keys are arguments serialized to JSON, hence the `"[0]"` and `"[1]"` keys above.

Custom cache keys:

```ts
const fib = memoize(
    (n: number): number => fib(n - 2) + fib(n - 1),
    { keyFn: n => n },
);
```
