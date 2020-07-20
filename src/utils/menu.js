export const notAuthenticatedMenu = [
  {
    id: 1,
    name: 'Main',
    to: '/',
  },
  {
    id: 2,
    name: 'Contact',
    to: '/contact',
  },
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
  },
  {
    id: 4,
    name: 'Notes',
    to: '/notes',
  },
  {
    id: 5,
    name: 'Calendar',
    to: '/calendar',
  },
  {
    id: 6,
    name: 'Adverts',
    to: '/adverts'
  }
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