import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkWrapper, Description, BtnWrapper} from '../InfoPanel/InfoPanel.styles';
import { Icon } from './DayTasks.styles';
import { useTranslation } from 'react-i18next';
import { STATUS } from 'utils/tasks.statuses';
import { TASKS_STATUS_ICONS } from 'utils/icons';

const DayTasks = ({ tasks, isActiveDay, month, year, day }) => {

  const { t } = useTranslation();

  return (
    <div>
      <Description>
        { !tasks ?
          t(`Chose a day to see tasks for it`)
          :
            tasks.length > 0 ?
              t('Tasks in this day')
              :
              t('No tasks in this day')
        }
      </Description>
      {
        tasks && tasks.map(task => (
          <LinkWrapper key={task._id}>
            <Link 
              to={`/tasks/${task._id}`}
            >
              <span>
                {task.title}
              </span>
              <Icon color={TASKS_STATUS_ICONS[task.status].color}>
                <FontAwesomeIcon 
                  aria-label={t(STATUS[task.status])}
                  icon={TASKS_STATUS_ICONS[task.status].icon}
                />
              </Icon>
            </Link>
          </LinkWrapper>
        ))
      }
      {
        isActiveDay &&
          <BtnWrapper>
            <Button
              color="secondary"
              variant="contained"
              size="small"
              component={Link}
              to={`/tasks/add?month=${month}&year=${year}&day=${day}`}
            >
              {t('Add task')}
            </Button>
          </BtnWrapper>
      }
    </div>
    );
}

DayTasks.propTypes = {
  tasks: PropTypes.array, 
  isActiveDay: PropTypes.bool,
  month: PropTypes.number,
  year: PropTypes.number,
  day: PropTypes.number,
};
 
export default DayTasks;