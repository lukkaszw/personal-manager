import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import API from 'store/api';
import TaskActions from '../TaskActions/TaskActions';
import { 
  Root, Title, Description, StatusName,
  StatusContent, StartDate, Header, EndTime } from './TaskData.styles';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { STATUS, PRIORITY } from 'utils/tasks.statuses';

const TaskData = ({ id, token }) => {
  const { t, i18n } = useTranslation();
 
  const { data } = useQuery(['task', { id, token }], API.tasks.getTask, { suspense: true });
  const { endDate, updateDate, daysFromNow } = useMemo(() => {
    const lang = i18n.language === 'pl-PL' ? i18n.language : 'eng-Gb';
    const dateForUpdate = new Date(data.updatedAt);
    const dateForEnd = new Date(data.endDate);
    const endDate = new Intl.DateTimeFormat(lang).format(dateForEnd);
    const updateDate = new Intl.DateTimeFormat(lang).format(dateForUpdate);
    
    const endMoment = moment(data.endDate);
    const fromNowDiff = moment(endMoment).diff(new Date(), 'days');

    const daysFromNow = (fromNowDiff > 1 || (fromNowDiff === 0)) ? `${fromNowDiff} ${t('days')}` :
      (fromNowDiff > 0 ? `${fromNowDiff} ${t('day')}` : t('expired'));
 
    return { endDate, updateDate, daysFromNow };
  }, [i18n.language, data, t]);

  return ( 
    <Root>
      <div>
        <Header>
          <StartDate>
            {t('Last update')}: {updateDate}
          </StartDate>
          <Title>
            {data.title}
          </Title>
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
              {t('left')}: <strong className='value'>{daysFromNow}</strong>
            </span>
          </EndTime>
          <div>
            <StatusName>
              {t('Priority').toLowerCase()}:
            </StatusName> 
            <strong className='value'>
              {t(PRIORITY[data.priority])}
            </strong>
          </div>
          <div>
            <StatusName>
              status:
            </StatusName> 
            <strong className='value'>
              {t(STATUS[data.status])}
            </strong>
          </div>
        </StatusContent>
        <Description>
          {data.description}
        </Description>
      </div>
      <TaskActions 
        id={id}
        token={token}
      />
    </Root>
   );
}

TaskData.propTypes = {
  id: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};
 
export default TaskData;