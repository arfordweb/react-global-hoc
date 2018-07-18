/**
* @description
* Given a React element (instance of a component), returns the text contained within.
*
* @param {string|react.element} element     The element we'd like to extract text from.  If
*                                           the element is a string already, simple returns the
*                                           string.
*
* @returns {string} The text from the element or `null` if none could be extracted
*/
export const getReactElementText = (element) => {
    if (typeof element === 'string') {
        return element
    }
    if (element && element.$$typeof === Symbol.for('react.element')) {
        if (!element.props.children) {
            return null
        }
        if (typeof element.props.children === 'string') {
            return element.props.children
        }
        const childrenText = element.props.children
            .filter(child => Boolean(child))
            .map(getReactElementText)
            .join(' ')
        return childrenText
    }
    return null
}
