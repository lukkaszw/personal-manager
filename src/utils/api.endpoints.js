const api = {
  baseUrl: process.env.NODE_ENV === 'production' ? null : 'http://localhost:8000',
  endpoints: {
    user: {
      register: 'user',
      login: 'user/login',
      logout: 'user/logout',
      getData: 'user/me',
    },
    tasks: 'tasks',
  }
}

export default api;