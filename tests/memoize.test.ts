import { assertEquals } from "@std/assert";
import memoize from "lib/memoize.ts";

Deno.test("Regular", () => {
    let count = 0;
    const add = memoize((a: number, b: number) => {
        ++count;
        return a + b;
    });

    assertEquals(add(1, 2), 3);
    assertEquals(add(1, 2), 3);
    assertEquals(add(1, 2), 3);
    assertEquals(count, 1);
});

Deno.test("Recursive", () => {
    const fib = memoize((n: number): number => n < 2 ? n : fib(n - 2) + fib(n - 1));

    assertEquals(fib(10), 55);
});

Deno.test("Custom cache", () => {
    const cache = { "[0]": 0, "[1]": 1 };
    const fib = memoize((n: number): number => fib(n - 2) + fib(n - 1), { cache });

    assertEquals(fib(10), 55);
});

Deno.test("Custom keyFn", () => {
    const symbol = Symbol();
    const cache = { [symbol]: 1 };
    const keyFn = () => symbol;
    const fn = memoize((): number => 0, { cache, keyFn });

    assertEquals(fn(), 1);
});
