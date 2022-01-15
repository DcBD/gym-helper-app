
/**
 * Creates a new array with `size` length.
 * @param size : array size
 * @returns array with length of `size`
 */
export function createArray(size: number) {
    return [...Array(size).keys()];
}