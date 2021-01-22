import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddCampusContainer } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AddCampusContainer} />
    </Switch>
  )
}

export default RoutesView;
