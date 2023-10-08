export function tError(message: string): never {
    throw new Error(message);
}