import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TaskRow from '../TaskRow';
import Pagination from '@material-ui/lab/Pagination';
import { useTranslation } from 'react-i18next';
import { useStyles, PaginationWrapper } from './TasksList.styles';
import { useQuery } from 'react-query';
import API from 'store/api';
import clsx from 'clsx';
import { pages } from 'utils/pages.config';

const TasksList = ({ 
  token, status, priority, dateFrom, dateTo, page, sortBy, sortOrder,
  onChangePage, onChangeSort, 
}) => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const { data } = useQuery([
    'tasks', 
    { token, priority, status, dateTo, dateFrom, page, sortBy, sortOrder, }
  ], API.tasks.getTasks,  { suspense: true });
  const lang = i18n.language === 'pl-PL' ? i18n.language : 'eng-Gb';
  const handleChangePage = useCallback((e, value) => onChangePage(value), [onChangePage]);

  return ( 
    <div>
      <TableContainer className={classes.tableContainer}>
        <Table className={classes.table} aria-label="tasks table">
          <TableHead>
            <TableRow className={classes.tr}>
              <TableCell  className={clsx([classes.cell, classes.nr])}>Nr</TableCell>
              <TableCell  
                className={clsx([classes.cell, classes.titleCell])}
              >
                <TableSortLabel
                  active={sortBy === 'title'}
                  direction={sortBy === 'title' ? sortOrder : 'asc'}
                  onClick={() => onChangeSort('title')}
                >
                  {t('Title')}
                </TableSortLabel>
              </TableCell>
              <TableCell  className={classes.cell}>
                <TableSortLabel
                    active={sortBy === 'priority'}
                    direction={sortBy === 'priority' ? sortOrder : 'asc'}
                    onClick={() => onChangeSort('priority')}
                  >
                    {t('Priority')}
                  </TableSortLabel>
              </TableCell>
              <TableCell  className={classes.cell}>
                  <TableSortLabel
                    active={sortBy === 'status'}
                    direction={sortBy === 'status' ? sortOrder : 'asc'}
                    onClick={() => onChangeSort('status')}
                  >
                    Status
                  </TableSortLabel>
              </TableCell>
              <TableCell  className={classes.cell}>
                <TableSortLabel
                  active={sortBy === 'endDate'}
                  direction={sortBy === 'endDate' ? sortOrder : 'asc'}
                  onClick={() => onChangeSort('endDate')}
                >
                  {t('End time')}  
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.tasks.map((task, i) => (
                <TaskRow
                  key={task._id} 
                  nr={i + 1 + ((page - 1) * pages.tasks.maxPerPage)}
                  {...task}
                  lang={lang}
                />
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationWrapper>
        <Pagination 
          color="primary"
          className={classes.pagination}
          count={Math.ceil(data.amount/pages.tasks.maxPerPage)} 
          page={page}
          onChange={handleChangePage}
        />
      </PaginationWrapper>
    </div>
   );
}

TasksList.propTypes = {
  token: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  date: PropTypes.string,
  sortBy: PropTypes.string,
  sort: PropTypes.string,
  page: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onChangeSort: PropTypes.func.isRequired,
};

export default TasksList;