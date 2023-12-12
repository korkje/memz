type Cache<T> = { [key: string]: T | undefined };

// deno-lint-ignore no-explicit-any
export function memoize<F extends (...args: any[]) => any>(func: F, cache: Cache<ReturnType<F>> = {}) {
    return function(...args: Parameters<F>): ReturnType<F> {
        const key = JSON.stringify(args);
        const cached = cache[key];

        if (cached !== undefined) {
            return cached;
        }

        return cache[key] = func(...args) as ReturnType<F>;
    };
};

export default memoize;
