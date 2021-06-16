import React from 'react'

import { Vitrine } from 'pages'

import { Switch, Route, Redirect } from 'react-router-dom'

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={() => <Redirect to="/vitrine" />} />
      <Route path="/vitrine" component={Vitrine} />
    </Switch>
  )
}
