import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import merge from './merge'
import pick from './pick'
import apply from './apply'

/**
 * Reduxifies a component.
 *
 * @param reducers  - An array of reducer names. The component will
 *                    be given access to these will be the states.
 * @param actions   - An array of actions, or a single actionset. The component will
 *                    be allowed to execute these actions.
 * @param component - The component to be connected.
 * @return the connected component
 */
export default function reduxify({ reducer, reducers, actions, component }) {
  let mapStatesToProps = Array.isArray(reducers) ? // janky check for reducer vs reducers
    (state) => pick(reducers, state)
  :
    (state) => ({ [reducer]: state[reducer] })

  let mapDispatchesToProps = Array.isArray(actions) ?
    (dispatch) => ({
      actions: bindActionCreators(merge.apply(null, actions), dispatch)
    })
  :
    (dispatch) => ({
      actions: bindActionCreators(actions, dispatch)
    })

  return connect(
    mapStatesToProps,
    mapDispatchesToProps
  )(component)
}
// TODO allow no actions

// this one separates actions to props.actions1, props.actions2 etc
export function reduxifyy({ reducers, actions, component }) {
  let mapStatesToProps = (state) => pick(reducers, state)
  let mapDispatchesToProps = (dispatch) => apply(
    actions,
    (action) => bindActionCreators(action, dispatch)
  )
  return connect(
    mapStatesToProps,
    mapDispatchesToProps
  )(component)
}