/**
 * @description
 * Logs a value and passes it through.  Use this when you want to log a specific value, but don't
 * want to have to go through a lot of trouble to restructure your code to be able to log that value
 *
 * @param  {any} val        Some value that's being evaluated in your code that you want to log
 * @param  {string} name    (Optional) A name string to log along with the value
 *
 * @return {any}            The `val` argument's value
 */
export default (val, name) => {
    const forNameStr = name ? ` for name '${name}'` : ''
    // eslint-disable-next-line no-console
    console.log(`logPass${forNameStr}: `, val)
    return val
}
