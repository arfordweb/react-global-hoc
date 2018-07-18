import React from 'react'
import * as R from 'ramda'

import { getDisplayName } from 'utils/getDisplayName'


export default R.curry((AltComponent, predicate, DecoratedComponent) => {
    const alternativeDisplayName = getDisplayName(AltComponent)
    const displayName = getDisplayName(DecoratedComponent)

    const Or = props => {
        if (predicate(props)) {
            return <DecoratedComponent { ...props } />
        }

        return <AltComponent />
    }

    Or.displayName = `Or${alternativeDisplayName}(${displayName})`

    return Or
})
