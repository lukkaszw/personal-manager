import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useStyles, LinkTitle } from '../TasksList/TasksList.styles';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const STATUS = {
  1: 'in_progress',
  2: 'done',
  3: 'failed'
};

const PRIORITY = {
  1: 'low',
  2: 'normal',
  3: 'high',
  4: 'v_high',
};


const TaskRow = ({  _id, nr, title, priority, status, endDate, lang }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const dateString = useMemo(() => {
    const date = new Date(endDate);
    const dateString = new Intl.DateTimeFormat(lang).format(date);
    return dateString;
  }, [lang, endDate]);


  return ( 
    <TableRow>
      <TableCell className={clsx([classes.cell, classes.nr])}>{nr}</TableCell>
      <TableCell className={clsx([classes.cell, classes.title])}>
        <LinkTitle to={`/tasks/${_id}`}>{title}</LinkTitle>
      </TableCell>
      <TableCell className={clsx([classes.cell, classes[`priority_${PRIORITY[priority]}`]])}>
        {t(PRIORITY[priority])}
      </TableCell>
      <TableCell className={clsx([classes.cell, classes[`status_${STATUS[status]}`]])}>
        {t(STATUS[status])}
      </TableCell>
      <TableCell className={classes.cell}>{dateString}</TableCell>
    </TableRow>
   );
}

TaskRow.propTypes = {
  _id: PropTypes.string.isRequired,
  nr: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired,
  status: PropTypes.number.isRequired,
  endDate: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
};
 
export default TaskRow;