import { makeStyles  } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  table: {
    margin: '0 auto',
    textAlign: 'center',
  },
  cell: {
    textAlign: 'center',
  },
  statuses: {
    fontWeight: 'bold',
  },
  priority_low: {
    color: 'lightgreen',
  },
  priority_normal: {
    color: 'green',
  },
  priority_high: {
    color: 'orange',
  },
  priority_v_high: {
    color: 'red',
  },
  'status_in_progress': {
    color: 'orange',
  },
  status_done: {
    color: 'green',
  },
  status_failed: {
    color: 'red',
  },
});
