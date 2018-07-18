import React from 'react'
import * as R from 'ramda'


/**
 * @description
 * HOC generator that accepts an object of methods, keyed by the props names to be passed to
 * the decorated component.  These methods will never be recomputed because of a props change,
 * so the props declared here will never trigger re-render in a component that receives them.
 *
 * Note:    For most purposes, `recompose`'s `withHandlers` will suit your needs, so use it where
 *          possible.  But there are some use cases where this HOC may make more sense.
 *
 * @param {object} methods        The methods to attach to this component, which can accept any
 *                                arguments you wish to declare them as accepting
 * @param {Component} InComponent A Component that will have the method props passed to it
 *                                as functions that are bound to the OutComponent
 *
 * @return {Component}            A new component that will display the component passed to it
 *                                and pass props through to the InComponent.  The only difference
 *                                will be that additional props will be passed to InComponent
 *                                which can access props OutComponent receives via `this.props`.
 *                                Those methods can also call each other using `this.methodName()`
 */
export const withMethodProps = R.curry((methods, InComponent) => {
  if (typeof methods !== 'object') {
    throw Error(
      '`withMethodProps` should be called with an object '
            + 'of Component methods, indexed by prop names',
    )
  }
  class OutComponent extends React.PureComponent {
    constructor(props) {
      super(props)
      R.forEachObjIndexed(
        (method, methodName) => {
          this[methodName] = method.bind(this)
        },
        methods,
      )
    }

    render() {
      const outProps = {
        ...this.props,
        // these picked methods will be mounted to OutComponent, so InComponent
        // will receive them as props, but calling them will call them on OutComponent;
        // so, they can see ownerProps at `this.props` instead of via a HOC generator
        // function like `withProps` that allows you to get props from a parameter
        // function's `props` parameter
        ...R.pick(R.keys(methods), this),
      }
      return <InComponent {...outProps} />
    }
  }
  return OutComponent
})
