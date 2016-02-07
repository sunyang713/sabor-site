import React from 'react'
import createHashHistory from 'history/lib/createHashHistory'
import useScroll from 'scroll-behavior/lib/useSimpleScroll'
import { Provider } from 'react-redux'
import configureStore from 'store/configureStore'
import configureRoutes from './configureRoutes'
import DevTools from 'containers/DevTools'

const browserHistory = useScroll(createHashHistory)({ queryKey: false })

export default (
  <Provider store={ configureStore(browserHistory) }>
    <div>
      { configureRoutes(browserHistory) }
      <DevTools />
    </div>
  </Provider>
)
