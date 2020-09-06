const api = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'api' : 'http://localhost:8000/api',
  endpoints: {
    user: {
      register: 'user',
      login: 'user/login',
      logout: 'user/logout',
      getData: 'user/me',
      deleteAccount: 'user/delete',
      updateData: 'user/me',
      updatePassword: 'user/me/pswd',
    },
    tasks: 'tasks',
    notes: {
      categories: 'notes_cat',
      notes: 'notes',
    },
    budget: 'budgets',
    budgetCategories: 'budget_categories',
    transactions: 'transactions',
    budgetTransactions: 'transactions/for_budget',
    calendar: 'calendar',
  }
}

export default api;