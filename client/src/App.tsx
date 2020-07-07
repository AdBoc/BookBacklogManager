import * as React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from './_helpers/history';

import MainPage from './components/MainPage/MainPage';
import NavBar from './components/NavBar/NavBar';
import Backlog from './components/Backlog/Backlog';
import CurrentReads from './components/CurrentReads/CurrentReads';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './_helpers/privateRoute';

import './styles/scss/index.scss';
import Customization from './components/Customization/Customization';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AUTHORIZE } from './redux/User/interfaces';
import PublicRoute from './_helpers/PublicRoute';

const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    const token = localStorage.getItem("token");
    token ? dispatch({ type: AUTHORIZE, payload: token, status: true })
      : dispatch({ type: AUTHORIZE, payload: "", status: false })
    // eslint-disable-next-line
  }, [])

  return (
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <PrivateRoute exact path='/backlog' component={Backlog} />
        <PrivateRoute exact path='/currentReads' component={CurrentReads} />
        <PrivateRoute exact path='/customization' component={Customization} />
        <PublicRoute exact path='/login' component={Login} />
        <PublicRoute exact path='/register' component={Register} />
        <Route component={() => <Redirect to='/' />} />
      </Switch>
    </Router>
  );
}

export default App;

//<Route component={() => <Redirect to='/' />} /> is not exact path so it needs to be lowest in order