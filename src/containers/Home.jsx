import React from 'react'
import { pushPath } from 'redux-simple-router'
import reduxify from 'toolbox/reduxify'
import * as modalActions from 'actions/modal'


class Home extends React.Component {
  render() {
    const { modal, actions, children } = this.props
    // const childProps = {
    //   title: modal.title,
    //   info: modal.info,
    //   img: modal.img,
    //   description: modal.description
    // }
    // const RouteHandler = React.cloneElement(
    //   children,
    //   childProps
    // )
    return (
      <div className="site-wrapper" >
        { children }
      </div>
    )
  }
}

export default reduxify({
  component: Home,
  reducer: 'modal',
  actions: { pushPath }
})
