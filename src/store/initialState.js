const initialState = {
  user: {
    token: null,
    data: {},
    request: {
      isActive: false,
      isSuccess: false,
      error: null,
    },
  },
  tasks: {
    query: {
      status: 'all',
      priority: 'all',
      dateFrom: null,
      dateTo: null,
      sortBy: null,
      sortOrder: null,
      page: 1,
    }
  },
  notes: {
    query: {
      priority: 'all',
      category: 'all',
      page: 1,
    }
  }
};

export default initialState;