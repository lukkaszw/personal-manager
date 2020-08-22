import * as user from './user';
import * as tasks from './tasks';
import * as notes from './notes';
import * as budget from './budget';
import * as transactions from './transactions';
import * as calendar from './calendar';

const ACTION_CREATORS = {
  user,
  tasks,
  notes,
  budget,
  transactions,
  calendar,
};

export default ACTION_CREATORS;