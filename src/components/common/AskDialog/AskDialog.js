import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import { ButtonsWrapper } from './AskDialog.styles';

const AskDialog = ({ 
  isOpen, question, yesAnswear, noAnswear,
  onClose, onYesAction, onNoAction,
}) => {
  return ( 
    <Dialog 
      open={isOpen}
      onClose={onClose}
    >
      <DialogTitle>
        {question}
      </DialogTitle>
      <DialogContent>
        <ButtonsWrapper>
          <Button
            variant="contained"
            color="primary"
            onClick={onNoAction}
          >
            {noAnswear}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={onYesAction}
          >
            {yesAnswear}
          </Button>
        </ButtonsWrapper>
      </DialogContent>
    </Dialog>
   );
}

AskDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
  noAnswear: PropTypes.string.isRequired,
  yesAnswear: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onNoAction: PropTypes.func.isRequired,
  onYesAction: PropTypes.func.isRequired,
};
 
export default AskDialog;