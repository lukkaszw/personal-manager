import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MainLayout from 'components/layout/MainLayout';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';
import Main from 'components/pages/Main';
import Contact from 'components/pages/Contact';
import Budget from 'components/pages/Budget';
import Notes from 'components/pages/Notes';
import Calendar from 'components/pages/Calendar';
import Adverts from 'components/pages/Adverts';
import Auth from 'components/pages/Auth';
import Logout from 'components/pages/Logout';
import TaskAdd from 'components/pages/TaskAdd';
import NoteAdd from 'components/pages/NoteAdd';
import NoteEdit from 'components/pages/NoteEdit';
import TaskEdit from 'components/pages/TaskEdit';
import NoteCatAdd from 'components/pages/NoteCatAdd';
import Note from 'components/pages/Note';
import MainLoaderIndicator from 'components/layout/MainLoaderIndicator';
import LoaderIndicator from 'components/common/LoaderIndicator';
import { ThemeProvider } from 'styled-components';
import theme from './App.styles';
import { connect } from 'react-redux';
import SELECTORS from 'store/selectors';
import API from 'store/api';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Tasks = React.lazy(() => import('components/pages/Tasks'));
const Task = React.lazy(() => import('components/pages/Task'));

const queryConfig = {
  suspense: true,
  cacheTime: -1,
};

toast.configure();

function App({ isAuth, onTryLoginOnStart }) {
  useEffect(() => {
    onTryLoginOnStart();
  }, [onTryLoginOnStart]);


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
    <React.Suspense fallback={<LoaderIndicator isOpen={true}/>}>
      <Switch>
        <Route exact path='/'>
          <Main />  
        </Route>
        <Route exact path='/tasks'>
          <Tasks />
        </Route>
        <Route exact path='/tasks/add'>
          <TaskAdd />
        </Route>
        <Route exact path='/tasks/edit/:id'>
          <TaskEdit />
        </Route>
        <Route exact path='/tasks/:id'>
          <Task />
        </Route>
        <Route exact path='/budget'>
          <Budget />
        </Route>
        <Route exact path='/notes'>
          <Notes />
        </Route>
        <Route exact path='/notes/add'>
          <NoteAdd />
        </Route>
        <Route exact path='/notes/edit/:id'>
          <NoteEdit />
        </Route>
        <Route exact path='/notes/:id'>
          <Note />
        </Route>
        <Route exact path='/notes_cat/add'>
          <NoteCatAdd />
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
    </React.Suspense>
  );

  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
        <ThemeProvider theme={theme}>
          <Router>
            <MainLayout>
              {router}
            </MainLayout>
          </Router>
        </ThemeProvider>
        </MuiPickersUtilsProvider>
      </ReactQueryConfigProvider>
  );
}

App.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isAuth: SELECTORS.user.getIsAuth(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTryLoginOnStart: () => dispatch(API.user.tryLoginOnStart()),
})

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

const RootApp = () => {
  return (
    <React.Suspense fallback={<MainLoaderIndicator />}>
      <ConnectedApp isAuth={false}/>
    </React.Suspense>
  )
}

export default RootApp;
