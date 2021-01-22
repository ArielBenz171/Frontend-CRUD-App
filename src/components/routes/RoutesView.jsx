import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AllPlayersContainer, AllStudentsContainer } from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AllPlayersContainer} />
      <Route exact path="/students" component={AllStudentsContainer} />
    </Switch>
  )
}

export default RoutesView;
