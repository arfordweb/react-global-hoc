import React from 'react'


/**
 * @description
 * HOC that provides an additional prop to a component that starts out
 * as `false`and becomes `true` after a specified amount of time has elapsed
 *
 * @param {string} propname  Name of the new prop that will start as false,
 *                           then change to true once delay has elapsed
 * @param {number} timeout   Delay in milliseconds
 *
 * @return {Component} Enhnaced version of original component with the new behavior
 */
export const withDelayProp = (propname = 'isDelayComplete', timeout = 0) => (InComponent) => {
  class OutComponent extends React.PureComponent {
    constructor() {
      super()
      this.state = {
        outProp: false,
      }
    }

    componentDidMount() {
      setTimeout(
        () => {
          this.setState({ outProp: true })
        },
        timeout,
      )
    }

    render() {
      const { outProp } = this.state
      return (
        <InComponent {...{
          ...this.props,
          [propname]: outProp,
        }}
        />
      )
    }
  }
  return OutComponent
}
