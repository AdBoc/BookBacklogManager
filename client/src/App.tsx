import * as React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { history } from './_helpers/history';

import Home from './components/Home';
import NavBar from './components/NavBar/NavBar';
import Backlog from './components/Backlog/Backlog';
import CurrentReads from './components/CurrentReads/CurrentReads';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './_helpers/privateRoute';

import Customization from './components/Customization/Customization';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AUTHORIZE } from './redux/User/interfaces';
import PublicRoute from './_helpers/PublicRoute';
import { requestBooks } from './redux/Books/actions';
import './styles/scss/index.scss';

const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
   const token = document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=')
      return parts[0] === 'token' ? decodeURIComponent(parts[1]) : r
    }, '');
    
    if (token) {
      dispatch({ type: AUTHORIZE, payload: token, status: true });
      dispatch(requestBooks(token));
    } else {
      dispatch({ type: AUTHORIZE, payload: "", status: false });
    }
    // eslint-disable-next-line
  }, [])

  return (
    <Router history={history}>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
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