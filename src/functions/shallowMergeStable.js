import * as R from 'ramda'

import dumbMerge from './dumbMerge'


/**
 * @description
 * Merges two Arrays or objects.  If the result is equal to the initial value in a deep comparison,
 * the original value is returned so it passes an equality test.
 *
 * Note: The comparison done when evaluating whether to return the initial value is deep, but
 *       the merge is shallow.
 *
 * This is especially valuable when creating new state in a reducer.  If you're merging data
 * into state, and that state is equal according to a deep comparison, the old state doesn't get
 * replaced with a new instance.  So, unnecessary re-renders can be avoided.
 *
 * // TODO: (darnell) Needs unit tests
 *
 * @param  {any} initialValue       Initial Array or object
 * @param  {any} updates            Updates to apply to the initial value or values to be
 *                                  concatenated
 *
 * @return {any}                    A merged value, possibly the same as the initial value
 */
export const shallowMergeStable = (initialValue, updates) => {
    const tmpValue = dumbMerge(initialValue, updates)
    return R.equals(initialValue, tmpValue)
        ? initialValue
        : tmpValue
}
