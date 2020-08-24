import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useStyles, LinkTitle, IconWrapper } from '../TasksList/TasksList.styles';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { STATUS, PRIORITY } from 'utils/tasks.statuses';
import { TASK_PRIORITY_ICONS, TASKS_STATUS_ICONS } from 'utils/icons';


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
      <TableCell className={clsx([classes.cell, classes.statusCell])}>
        <IconWrapper color={TASK_PRIORITY_ICONS[priority].color}>
          <FontAwesomeIcon 
            aria-label={t(PRIORITY[priority])}
            icon={TASK_PRIORITY_ICONS[priority].icon}
          />
        </IconWrapper>
      </TableCell>
      <TableCell className={clsx([classes.cell, classes.statusCell])}>
        <IconWrapper color={TASKS_STATUS_ICONS[status].color}>
          <FontAwesomeIcon 
            aria-label={t(STATUS[status])}
            icon={TASKS_STATUS_ICONS[status].icon}
          />
        </IconWrapper>
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