import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { faCog, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Root, Form } from './QuerySettings.styles';
import { useTranslation } from 'react-i18next';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { useStyles } from './QuerySettings.styles';


const QuerySettings = ({ 
  priority, status, dateFrom, dateTo,
  onChangePriority, onChangeStatus, onChangeDateTo, onChangeDateFrom, onResetQuerySettings,
}) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [areSettingsOpen, setSettingsOpen] = useState(false);
  const handleOpenSettings = useCallback(() => setSettingsOpen(true), [setSettingsOpen]);
  const handleCloseSettings = useCallback(() => setSettingsOpen(false), [setSettingsOpen]);
  const handleChangePriority = useCallback((e) => onChangePriority(e.target.value), [onChangePriority]);
  const handleChangeStatus = useCallback((e) => onChangeStatus(e.target.value), [onChangeStatus]);

  
  const onFromDateChange = useCallback((date) => onChangeDateFrom(date), [onChangeDateFrom]);
  const onToDateChange = useCallback((date) => onChangeDateTo(date), [onChangeDateTo]);

  return ( 
    <Root>
      <div>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<FontAwesomeIcon icon={faPlus}/>}
          size="small"
          component={Link}
          to='/tasks/add'
        >
          {t('Add task')}
        </Button>
      </div>
      <div>
        <IconButton 
          onClick={handleOpenSettings}
          aria-label={t('open tasks settings')}
        >
          <FontAwesomeIcon icon={faCog} />
        </IconButton>
      </div>
      <Dialog
        fullWidth={true}
        maxWidth='md'
        open={areSettingsOpen}
        onClose={handleCloseSettings}
        aria-labelledby='query-settings'
      >
        <DialogTitle id="query-settings">{t('Tasks settings')}</DialogTitle>
        <DialogContent>
          <Form noValidate>
            <div>
              <FormControl className={classes.control}>
                <InputLabel htmlFor="priority">{t('Priority')}</InputLabel>
                <Select
                  autoFocus
                  value={priority}
                  onChange={handleChangePriority}
                  inputProps={{
                    name: 'priority',
                    id: 'priority',
                  }}
                >
                  <MenuItem value='all'>{t('all')}</MenuItem>
                  <MenuItem value='low'>{t('low')}</MenuItem>
                  <MenuItem value='normal'>{t('normal')}</MenuItem>
                  <MenuItem value='high'>{t('high')}</MenuItem>
                  <MenuItem value="very_high">{t('v_high')}</MenuItem>
                </Select>
              </FormControl>
              <FormControl className={classes.control}>
                <InputLabel htmlFor="status">Status</InputLabel>
                <Select
                  autoFocus
                  value={status}
                  onChange={handleChangeStatus}
                  inputProps={{
                    name: 'status',
                    id: 'status',
                  }}
                >
                  <MenuItem value='all'>{t('all')}</MenuItem>
                  <MenuItem value='in_progress'>{t('in_progress')}</MenuItem>
                  <MenuItem value='done'>{t('done')}</MenuItem>
                  <MenuItem value='failed'>{t('failed')}</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <KeyboardDatePicker
                className={classes.control}
                autoOk={true}
                showTodayButton={true}
                value={dateFrom}
                label={`${t('End date from')}:`}
                format="YYYY-MM-DD"
                onChange={onFromDateChange}
              />
              <KeyboardDatePicker
                className={classes.control}
                autoOk={true}
                showTodayButton={true}
                value={dateTo}
                label={`${t('End date to')}:`}
                format="YYYY-MM-DD"
                onChange={onToDateChange}
              />
            </div>
          </Form>
        </DialogContent>
        <DialogActions>
          <Button onClick={onResetQuerySettings} color="primary">
            {t('Reset')}
          </Button>
          <Button onClick={handleCloseSettings} color="secondary">
            {t('Close')}
          </Button>
        </DialogActions>
      </Dialog>
    </Root>
   );
}

QuerySettings.propTypes = {
  priority: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onChangePriority: PropTypes.func.isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onResetQuerySettings: PropTypes.func.isRequired,
};
 
export default QuerySettings;