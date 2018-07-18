export default (component, defaultName = 'Component') =>
    component.displayName
    || component.name
    || defaultName
