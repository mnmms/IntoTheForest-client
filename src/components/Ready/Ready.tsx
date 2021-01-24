import React, { useState, useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Loading from './Loading';
import Story from './Story'
import ChoiceCharacter from './ChoiceCharacter';
import Control from './Control'


function Ready() {

  return (
    <Switch>
      <Route path='/ready/loading' component={Loading} /> 
      <Route path='/ready/story' component={Story} /> 
      <Route path='/ready/character' component={ChoiceCharacter} /> 
      <Route path='/ready/control' component={Control} />
    </Switch>
  );
}

export default Ready;