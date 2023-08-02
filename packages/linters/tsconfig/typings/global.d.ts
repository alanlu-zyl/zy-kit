/**
 * 巢狀物件
 * @see https://medium.com/onedegree-tech-blog/feat-typescript-conditional-types-4a47b4816ce2
 */
type Simplify<T> = T extends Record<string, any> ? { [K in keyof T]: Simplify<T[K]> } : T
