import * as React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from './_helpers/history';

import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import Backlog from './components/Backlog/Backlog';
import CurrentReads from './components/CurrentReads/CurrentReads';

import './styles/scss/index.scss';

const App: React.FC = (): JSX.Element => {
  return (
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/backlog' component={Backlog} />
        <Route exact path='/currentReads' component={CurrentReads} />
        <Route exact path='/login' component={() => <div>Component not ready yet</div>} />
        <Route component={() => <Redirect to='/' />} />
      </Switch>
    </Router>
  );
}

export default App;
