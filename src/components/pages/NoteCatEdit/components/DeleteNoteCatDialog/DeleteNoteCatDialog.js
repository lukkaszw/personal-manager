import React from 'react';
import PropTypes from 'prop-types';
import LoaderIndicator from 'components/common/LoaderIndicator';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { ButtonWrapper, useStyles } from './DeleteNoteCatDialog.styles';


const DeleteNoteCatDialog = ({ 
  isOpen, onClose, disabled, isSending,
  onYes, onYesWithRelatedNotes,
}) => {

  const classes = useStyles();
  const { t } = useTranslation();


  return (   
    <Dialog 
      open={isOpen}
      onClose={onClose}
    >
      <DialogTitle>
        {t('Do you want to delete this category?')}
      </DialogTitle>
      <DialogContent>
        <ButtonWrapper>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            size="small"
            onClick={onYes}
            disabled={disabled}
          >
            {t('Yes, only category')}
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            size="small"
            onClick={onYesWithRelatedNotes}
            disabled={disabled}
          >
            {t('Yes, with related notes')}
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="small"
            onClick={onClose}
            disabled={disabled}
          >
            {t('Cancel')}
          </Button>
        </ButtonWrapper>
        <LoaderIndicator 
          isOpen={isSending}
        />
      </DialogContent>
    </Dialog> 
  );
}

DeleteNoteCatDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  onClose: PropTypes.func.isRequired,
  onYes: PropTypes.func.isRequired, 
  onYesWithRelatedNotes: PropTypes.func.isRequired, 
  disabled: PropTypes.bool.isRequired,
  isSending: PropTypes.bool.isRequired,
};
 
export default DeleteNoteCatDialog;