export function setField<T, K extends keyof T>(
    obj: Partial<T>,
    key: K,
    value: T[K]
) {
    obj[key] = value;
}