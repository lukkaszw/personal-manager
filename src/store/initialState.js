import moment from 'moment';

const now = moment();

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
  },
  budget: {
    query: {
      type: 'all',
      page: 1,
    }
  },
  transactions: {
    query: {
      category: 'all',
      subcategory: 'all',
    }
  },
  calendar: {
    query: {
      month: now.month() + 1,
      year: now.year(),
    }
  }
};

export default initialState;