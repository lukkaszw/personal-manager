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
      title: null,
      dateFrom: null,
      dateTo: null,
      sort: null,
    }
  }
};

export default initialState;