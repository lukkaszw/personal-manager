import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MainLayout from 'components/layout/MainLayout';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ReactQueryConfigProvider } from 'react-query';
import Main from 'components/pages/Main';
import Budget from 'components/pages/Budget';
import EditBudget from 'components/pages/EditBudget';
import AddBudget from 'components/pages/AddBudget';
import OneBudget from 'components/pages/OneBudget';
import Notes from 'components/pages/Notes';
import Calendar from 'components/pages/Calendar';
import Auth from 'components/pages/Auth';
import Account from 'components/pages/Account';
import Logout from 'components/pages/Logout';
import UpdatePassword from 'components/pages/UpdatePassword';
import TaskAdd from 'components/pages/TaskAdd';
import NoteAdd from 'components/pages/NoteAdd';
import NoteEdit from 'components/pages/NoteEdit';
import TaskEdit from 'components/pages/TaskEdit';
import NoteCatAdd from 'components/pages/NoteCatAdd';
import NoteCatEdit from 'components/pages/NoteCatEdit';
import EditPersonalData from 'components/pages/EditPersonalData';
import Note from 'components/pages/Note';
import MainLoaderIndicator from 'components/layout/MainLoaderIndicator';
import LoaderIndicator from 'components/common/LoaderIndicator';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialUIThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import theme from './App.styles';
import { connect } from 'react-redux';
import SELECTORS from 'store/selectors';
import API from 'store/api';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { parseLanguage } from 'utils/parseLanguage';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import 'react-toastify/dist/ReactToastify.css';
import "moment/locale/en-gb";
import "moment/locale/pl";
import moment from 'moment';


moment.locale('pl');

const materialUITheme = createMuiTheme(theme);


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

  
  const { i18n } = useTranslation();
  

  useEffect(() => {
    const lang = parseLanguage(i18n.language);
    moment.updateLocale(lang, {});
  }, [i18n.language]);


  const router = !isAuth ?
  (
    <Switch>
      <Route exact path='/'>
        <Main />  
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
        <Route exact path='/budget/edit/:id'>
          <EditBudget />
        </Route>
        <Route exact path='/budget/add'>
          <AddBudget />
        </Route>
        <Route path='/budget/:id'>
          <OneBudget />
        </Route>
        <Route exact path='/notes'>
          <Notes />
        </Route>
        <Route exact path='/notes/cat/add'>
          <NoteCatAdd />
        </Route>
        <Route exact path='/notes/cat/edit/:id'>
          <NoteCatEdit />
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
        <Route exact path='/calendar'>
          <Calendar />
        </Route>
        <Route exact path='/account'>
          <Account />
        </Route>
        <Route exact path='/account/update'>
          <EditPersonalData />
        </Route>
        <Route exact path='/account/pswd'>
          <UpdatePassword />
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
       <MaterialUIThemeProvider theme={materialUITheme}>
        <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
          <ThemeProvider theme={theme}>
            <Router>
              <MainLayout>
                {router}
              </MainLayout>
            </Router>
          </ThemeProvider>
          </MuiPickersUtilsProvider>
        </MaterialUIThemeProvider>
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
