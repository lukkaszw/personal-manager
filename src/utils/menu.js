export const notAuthenticatedMenu = [
  {
    id: 1,
    name: 'Main',
    to: '/',
  },
  {
    id: 2,
    name: 'Login',
    to: '/auth',
    onlyMobile: true,
  }
];

export const authenticatedMenu = [
  {
    id: 1,
    name: 'Main',
    to: '/',
  },
  {
    id: 2,
    name: 'Tasks',
    to: '/tasks',
    exact: false,
  },
  {
    id: 3,
    name: 'Budget',
    to: '/budget',
    exact: false,
  },
  {
    id: 4,
    name: 'Notes',
    to: '/notes',
    exact: false,
  },
  {
    id: 5,
    name: 'Calendar',
    to: '/calendar',
  },
  {
    id: 6,
    name: 'Account',
    to: '/account',
    onlyMobile: true,
  },
];

export const loginLinks = {
  isNotAuth: {
    name: 'Login',
    to: '/auth',
  },
  isAuth: {
    name: 'Logout',
    to: '/logout',
  },
};