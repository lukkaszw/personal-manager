import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { ButtonsWrapper, Question } from './AskDialog.styles';

const AskDialog = ({ 
  isOpen, question, yesAnswear, noAnswear,
  onClose, onYesAction, onNoAction,
}) => {
  return ( 
    <Dialog 
      open={isOpen}
      onClose={onClose}
    >
      <Question>
        {question}
      </Question>
      <DialogContent>
        <ButtonsWrapper>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={onNoAction}
          >
            {noAnswear}
          </Button>
          <Button
            size="small"
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