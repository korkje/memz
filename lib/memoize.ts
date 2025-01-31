/**
 * Wrap any function with a cache. Default keyFn is `JSON.stringify`.
 *
 * @param fn - The function to memoize.
 * @param options - Options (keyFn, initial cache).
 */
export const memoize = <P extends unknown[], R>(
    fn: (...p: P) => R,
    { keyFn = JSON.stringify, cache = {} }: {
        keyFn?: (params: P) => string | number | symbol;
        cache?: Record<string | number | symbol, R>;
    } = {},
) => (...p: P): R => cache[keyFn(p)] ??= fn(...p);

export default memoize;
