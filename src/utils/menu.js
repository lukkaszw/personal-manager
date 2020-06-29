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
    name: 'Tasks',
    to: '/tasks',
  },
  {
    id: 2,
    name: 'Budget',
    to: '/budget',
  },
  {
    id: 3,
    name: 'Notes',
    to: '/notes',
  },
  {
    id: 4,
    name: 'Calendar',
    to: '/calendar',
  },
  {
    id: 5,
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