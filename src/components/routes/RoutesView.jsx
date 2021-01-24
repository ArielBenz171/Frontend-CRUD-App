import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AddCampusContainer } from '../containers';
import { AddAStudentContainer} from '../containers';

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={AddCampusContainer} />
      <Route exact path="/" component={AddAStudentContainer} />
    </Switch>
  )
}

export default RoutesView;
