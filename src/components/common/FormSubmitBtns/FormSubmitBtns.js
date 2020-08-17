import React from 'react';
import PropTypes from 'prop-types';
import { ButtonsWrapper, FirstBtn, SecondBtn } from './FormSubmitBtns.styles';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';

const FormSubmitBtns = ({ isForEdit, onCancel, submitDescription, disable, center }) => {

  const { t } = useTranslation();

  return ( 
    <ButtonsWrapper center={center}>
      <FirstBtn>
        <Button
          size="small"
          variant="outlined"
          color={isForEdit ? 'primary' : 'secondary'}
          onClick={onCancel}
          disable={disable}
        >
          {t('Cancel')}
        </Button>
      </FirstBtn>
      <SecondBtn>
        <Button
          size="small"
          variant="contained"
          color={isForEdit ? 'primary' : 'secondary'}
          type="submit"
          disabled={disable}
        >
          {t(submitDescription)}
        </Button>
      </SecondBtn>
    </ButtonsWrapper>
   );
}

FormSubmitBtns.propTypes = {
  isForEdit: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  submitDescription: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired,
  center: PropTypes.bool,
};
 
export default FormSubmitBtns;