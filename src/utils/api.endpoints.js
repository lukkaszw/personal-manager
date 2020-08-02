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
    notes: {
      categories: 'notes_cat',
      notes: 'notes',
    },
    budget: 'budgets',
  }
}

export default api;