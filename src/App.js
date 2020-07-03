import React from 'react';
import PropTypes from 'prop-types';
import MainLayout from 'components/layout/MainLayout';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Main from 'components/pages/Main';
import Contact from 'components/pages/Contact';
import Tasks from 'components/pages/Tasks';
import Budget from 'components/pages/Budget';
import Notes from 'components/pages/Notes';
import Calendar from 'components/pages/Calendar';
import Adverts from 'components/pages/Adverts';
import Auth from 'components/pages/Auth';
import Logout from 'components/pages/Logout';
import MainLoaderIndicator from 'components/layout/MainLoaderIndicator';
import { ThemeProvider } from 'styled-components';
import theme from './App.styles';

function App({ isAuth }) {

  const router = !isAuth ?
  (
    <Switch>
      <Route exact path='/'>
        <Main />  
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
      <Route exact path='/auth'>
        <Auth />
      </Route>
      <Redirect to="/" />
    </Switch>
  )
  :
  (
    <Switch>
      <Route exact path='/'>
        <Main />  
      </Route>
      <Route exact path='/tasks'>
        <Tasks />
      </Route>
      <Route exact path='/budget'>
        <Budget />
      </Route>
      <Route exact path='/notes'>
        <Notes />
      </Route>
      <Route exact path='/calendar'>
        <Calendar />
      </Route>
      <Route exact path='/adverts'>
        <Adverts />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
      <Route exact path='/logout'>
        <Logout />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MainLayout>
          {router}
        </MainLayout>
      </Router>
    </ThemeProvider>

   
  );
}

App.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}

const RootApp = () => {
  return (
    <React.Suspense fallback={<MainLoaderIndicator />}>
      <App isAuth={false}/>
    </React.Suspense>
  )
}

export default RootApp;
