import { withPropsOnChange } from 'recompose'
import * as R from 'ramda'


/**
 * @description
 * This is like `withProps` from `recompose`, but it doesn't re-evaluate when incoming props
 * change.  So, the initial prop values never change once they're set.
 */
export const withConstantProps = constants => withPropsOnChange([], R.always(constants))
