import React from 'react'
import { connect } from 'react-redux'
import Types from 'prop-types'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import Login from '../Login/Login'
import Home from '../Home/Home'
import NotificationContainer from '../NotificationContainer/NotificationContainer'

import './App.scss'

const App = ({ token }) => (
  <>
    <Switch>
      <Route path='/login' exact component={Login} />
      <Route path='/home' exact component={Home} />

      <Route path='/' exact component={
        token
          ? () => <Redirect to='/home' />
          : () => <Redirect to='/login' />
      } />

      <Route component={() => (<h1>ЧОЧ</h1>)} /> {/* no match route */}
    </Switch>

    <NotificationContainer />
  </>
)

const mapStateToProps = state => ({
  token: state.login.token
})

App.propTypes = {
  token: Types.string
}

export default withRouter(
  connect(
    mapStateToProps
  )(App)
)
