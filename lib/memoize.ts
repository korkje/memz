/**
 * Memoize any function.
 *
 * @param f - The function to memoize.
 * @param c - Optional initial cache.
 */
export const memoize = <P extends unknown[], R>(
    f: (...p: P) => R,
    c: Record<string, R> = {},
) => (...p: P): R => {
    const k = JSON.stringify(p);
    return k in c ? c[k] : c[k] = f(...p);
};

export default memoize;
