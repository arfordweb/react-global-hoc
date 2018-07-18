import * as R from 'ramda'


/**
 * @description
 * Returns true if all props of the map are truthy
 *
 * This function is curried
 *
 * @param  {Array|string} props    Array of string prop names or a single string prop name
 * @param  {object} map     The map with props that may be truthy or not
 *
 * @return {boolean}        True if all the props from map are truthy
 */
export const allPropsTruthy = R.curry((props, map) => R.compose(
    R.all(R.identity),
    R.props(props instanceof Array ? props : [props])
)(map))
