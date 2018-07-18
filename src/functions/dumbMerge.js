/**
 * @description
 * Does a dumb merge of two objects or two Arrays.  If objects, values from the second object
 * will override those of the first.  If Arrays, concatenates the two.  Otherwise, returns one
 * of the two, favoring truthiness, then favoring the second value if both are truthy.
 *
 * // TODO: (darnell) Needs unit tests
 *
 * @param  {any} valA
 * @param  {any} valB
 *
 * @return {any}        A merged object or Array, or one of the two values; see description above
 */
export const dumbMerge = (valA, valB) => {
    if (valA instanceof Array && valB instanceof Array) {
        return [ ...valA, ...valB ]
    } else if (typeof valA === 'object' && typeof valB === 'object') {
        return { ...valA, ...valB }
    } else if (
        (valB === null || valB === undefined)
        && (valA instanceof Array || typeof valA === 'object')) {
        // `valB` can't override `valA`, so just return `valA`
        return valA
    } else if (
        (valA === null || valA === undefined)
        && (valB instanceof Array || typeof valB === 'object')) {
        return valB
    } else if (valB) {
        // can't merge, but we can return a truthy `valB`, which is given first chance since
        // `valB` values override `valA` values in an object; this is analagous to that
        return valB
    } else if (valA) {
        // can't merge, but we can return a truthy `valA`
        return valA
    }
    // ok, fine;  just return `valB`
    return valB
}
