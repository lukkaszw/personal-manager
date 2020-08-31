import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import API from 'store/api';
import TaskActions from '../TaskActions/TaskActions';
import { 
  StatusName,
  StatusContent, StartDate, Header, EndTime } from './TaskData.styles';
import SmallTitle from 'components/common/SmallTitle';
import Description from 'components/common/Description';
import { TaskDataRoot } from '../../Task.styles';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { STATUS, PRIORITY } from 'utils/tasks.statuses';
import clsx from 'clsx';

const TASK_CLASSES = {
  status: {
    1: null,
    2: 'positive',
    3: 'negative',
  },
  priority: {
    1: 'positive',
    2: 'positive',
    3: 'negative',
    4: 'negative',
  }
};

const TaskData = ({ id, token }) => {
  const { t, i18n } = useTranslation();
 
  const { data } = useQuery(['task', { id, token }], API.tasks.getTask, { suspense: true });
  const { endDate, updateDate, daysFromNow, isFarFromNow } = useMemo(() => {
    const lang = i18n.language === 'pl-PL' ? i18n.language : 'eng-Gb';
    const dateForUpdate = new Date(data.updatedAt);
    const dateForEnd = new Date(data.endDate);
    const endDate = new Intl.DateTimeFormat(lang).format(dateForEnd);
    const updateDate = new Intl.DateTimeFormat(lang).format(dateForUpdate);
    
    const endMoment = moment(data.endDate);
    const fromNowDiff = moment(endMoment).diff(new Date(), 'days');

    const daysFromNow = (fromNowDiff > 1 || (fromNowDiff === 0)) ? `${fromNowDiff} ${t('days')}` :
      (fromNowDiff > 0 ? `${fromNowDiff} ${t('day')}` : t('expired'));

    const isFarFromNow = fromNowDiff > 1;
 
    return { endDate, updateDate, daysFromNow, isFarFromNow };
  }, [i18n.language, data, t]);

  return ( 
    <TaskDataRoot>
      <div>
        <Header>
          <StartDate>
            {t('Last update')}: {updateDate}
          </StartDate>
          <SmallTitle 
            title={data.title}
          />
        </Header>
        <StatusContent>
          <EndTime>
            <span className='time'>
              <StatusName>
                {t('time to do').toLowerCase()}:
              </StatusName> 
              <strong className='value'>
                {endDate}
              </strong>
            </span>
            <span>
              {t('left')}: <strong 
                className={clsx(['value', isFarFromNow ? 'positive' : 'negative'])}
              >
                {daysFromNow}
              </strong>
            </span>
          </EndTime>
          <div>
            <StatusName>
              {t('Priority').toLowerCase()}:
            </StatusName> 
            <strong className={clsx('value', TASK_CLASSES.priority[data.priority])}>
              {t(PRIORITY[data.priority])}
            </strong>
          </div>
          <div>
            <StatusName>
              status:
            </StatusName> 
            <strong className={clsx('value', TASK_CLASSES.status[data.status])}>
              {t(STATUS[data.status])}
            </strong>
          </div>
        </StatusContent>
        <Description text={data.description} />
      </div>
      <TaskActions 
        id={id}
        token={token}
        status={data.status || 0}
      />
    </TaskDataRoot>
   );
}

TaskData.propTypes = {
  id: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};
 
export default TaskData;