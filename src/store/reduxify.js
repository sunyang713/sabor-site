import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import apply from 'toolbox/apply'

/**
 * Reduxifies a component.
 *
 * @param selector  - The name of the desired selector. The selector
 *                    selects what part of the state is given to the component,
 *                    which will then have read-access-only.
 * @param actions   - An array of actions, or a single actionset. The component will
 *                    be allowed to execute these actions.
 * @param component - The component to be connected.
 * @return the connected component
 */
export default function reduxify({ selector, actions, component }) {

  // the component will subscribe to Redux store updates
  var mapStateToProps = (state) => ({
    [selector]: state[selector]
  })

  // the component will be provided actions
  if (actions)
    var mapDispatchToProps = (dispatch) => apply(
      actions,
      (action) => bindActionCreators(action, dispatch)
    )

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(component)

}
