import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import { ModalContainer } from './ResponseModal.styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

const ResponseModal = ({ isOpen, isError, title, message, onClose }) => {
  return ( 
    <Modal
      open={isOpen}
      aria-labelledby='Response modal'
    >
      <ModalContainer>
        {
          title &&
            <h3 className={clsx(['title', isError && 'error'])}>{title}</h3>
        }
        <p className="message">{message}</p>
        <Button
          onClick={onClose}
          variant="contained"
          color={isError ? "secondary" : "primary"}
          size="small"
        >
          Ok
        </Button>
      </ModalContainer>
    </Modal>
   );
}
 
ResponseModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isError: PropTypes.bool,
  onAction: PropTypes.func,
};

export default ResponseModal;