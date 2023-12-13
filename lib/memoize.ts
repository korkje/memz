export const memoize = <P extends unknown[], R>(
    f: (...p: P) => R,
    c: Record<string, R> = {},
) => (...p: P) => {
    const k = JSON.stringify(p);
    return k in c ? c[k] : c[k] = f(...p);
};

export default memoize;
