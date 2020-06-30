import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { ModalContainer } from './ChangeLang.styles';
import { useTranslation } from 'react-i18next';

const ChangeLang = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();

  const langValue = i18n.language;
  const onChange = useCallback((event) => i18n.changeLanguage(event.target.value), [i18n]);

  return ( 
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="Modal to change language"
      >
        <ModalContainer>
          <RadioGroup value={langValue} onChange={onChange}>
            <FormControl component="fieldset">
              <FormLabel component="legend">App language:</FormLabel>
                <FormControlLabel value="eng-ENG" control={<Radio />} label="english" />
                <FormControlLabel value="pl-PL" control={<Radio />} label="polish" />
            </FormControl>
          </RadioGroup>
        </ModalContainer>
      </Modal>
   );
}

ChangeLang.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
 
export default ChangeLang;