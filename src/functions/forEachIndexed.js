import * as R from 'ramda'


/**
 * @description
 * Similar to `R.forEach`, except the supplied function should take a second argument, which
 * will receive the index of the item being iterated.
 * @example
 * forEachIndexed((value, index) => {
 *     logToConsole(`The value is ${value} at index ${index}`)
 * }, ['foo', 'bar'])
 * // Will log:
 * // 'The value is foo at index 0'
 * // 'The value is bar at index 1'
 * @param {function} singleIterationFunc    A function that takes (value, index) and will be
 *                                          executed for every item in `targetList`
 * @param {Array} targetList                A list on which to iterate
 */
export const forEachIndexed = R.addIndex(R.forEach)
