import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TaskRow from '../TaskRow';
import { useTranslation } from 'react-i18next';
import { useStyles } from './TasksList.styles';
import { useQuery } from 'react-query';
import API from 'store/api';
import clsx from 'clsx';

const TasksList = ({ token }) => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const { data: tasks } = useQuery(['tasks', { token }], API.tasks.getTasks,  { suspense: true });
  const lang = i18n.language === 'pl-PL' ? i18n.language : 'eng-Gb';

  return ( 
    <TableContainer>
      <Table className={classes.table} aria-label="tasks table">
        <TableHead>
          <TableRow className={classes.tr}>
            <TableCell  className={clsx([classes.cell, classes.nr])}>Nr</TableCell>
            <TableCell  className={clsx([classes.cell, classes.titleCell])}>{t('Title')}</TableCell>
            <TableCell  className={classes.cell}>{t('Priority')}</TableCell>
            <TableCell  className={classes.cell}>Status</TableCell>
            <TableCell  className={classes.cell}>{t('End time')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            tasks.map((task, i) => (
              <TaskRow
                key={task._id} 
                nr={i+1}
                {...task}
                lang={lang}
              />
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
   );
}

TasksList.propTypes = {
  token: PropTypes.string.isRequired,
};

export default TasksList;