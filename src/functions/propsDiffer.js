import * as R from 'ramda'


/**
 * @description
 * Tells if the any of the props specified in `propNames` differ between the specified `propsA`
 * and `propsB`.  Curried so you can create a localized version like:
 * ```
 * const propsDifferHere = propsDiffer(this.props, propsB);
 * ```
 * @param {object} propsA          A `props` object to compare to the other
 * @param {object} propsB          A `props` object to compare to the other
 * @param {string|Array} propNames The property or properties to test
 * @param {boolean} isSingleProp   Set to true if `propNames` is a single prop name or path
 * 
 * @return {bool}
 */
export const propsDiffer = R.curry((propsA, propsB, propNames, isSingleProp = false) => {
    if (typeof propNames === 'string') {
        return propsA[propNames] !== propsB[propNames];
    } else if (isSingleProp) {
        const propPath = propNames
        const getValAtPath = R.path(propPath)
        return getValAtPath(propsA) !== getValAtPath(propsB)
    }
    const rDiff = propsDiffer(propsA, propsB);
    if (propNames instanceof Array) {
        for (let i = 0; i < propNames.length; i += 1) {
            if (rDiff(propNames[i], true)) {
                return true;
            }
        }
    }
    return false;
})
