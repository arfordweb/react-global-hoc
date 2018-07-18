/**
 * Functions that are useful for debugging
 */
import * as R from 'ramda'


/**
 * @description
 * Return an object showing which props, among those requested to be checked, are different
 * between two props object.
 *
 * @param {object} propsA          A `props` object to compare to the other
 * @param {object} propsB          A `props` object to compare to the other
 * @param {string|Array} propNames The property or properties to test
 * @param {boolean} isSingleProp   Set to true if `propNames` is a single prop name or path
 *
 * @return {bool}
 */
export default R.curry((propsA, propsB, propNames, isSingleProp = false) => {
    if (typeof propNames === 'string') {
        const a = propsA[propNames]
        const b = propsB[propNames]
        if (a !== b) {
            return { [propNames]: { a, b } }
        }
    } else if (isSingleProp) {
        if (propNames instanceof Array) {
            const propPath = propNames // rename for clarity
            const a = R.path(propPath, propsA)
            const b = R.path(propPath, propsB)
            if (a !== b) {
                const pathStr = `[${propPath.join(', ')}]`
                return { [pathStr]: { a, b } }
            }
        } else {
            throw new Error('In propDifferences, `isSingleProp` argument is true, but `propNames` '
                + 'is not an Array or string; propNames: ', propNames)
        }
    }
    if (propNames instanceof Array) {
        return R.compose(
            R.mergeAll,
            R.map(propName => propDifferences(propsA, propsB, propName, true))
        )(propNames)
    }
    return null
})
