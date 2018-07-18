import * as R from 'ramda'


/**
 * @description
 * Returns a new list without the specified value.  Composed from Ramda functions, so this
 * function is curried
 * @param {any} val       The value to not include in the resulting list
 * @param {Array} list    The new list not containing the excluded value
 *
 * @return {Array}        New list without the specified value
 */
export default (val, list) => R.reject(R.equals(val), list)
