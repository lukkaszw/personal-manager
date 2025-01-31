import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import SmallTitle from 'components/common/SmallTitle';
import { ModalContainer, BtnsWrapper } from './ChangeLang.styles';
import { useTranslation } from 'react-i18next';

const ChangeLang = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();

  const langValue = i18n.language;
  const setPolish = useCallback(() => i18n.changeLanguage('pl-PL'), [i18n]);
  const setEnglish = useCallback(() => i18n.changeLanguage('eng-ENG'), [i18n]);

  return ( 
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="Modal to change language"
    >
      <ModalContainer>
        <div>
          <SmallTitle 
            title={t('App language')} 
          />
          <BtnsWrapper>
            <Button 
              size="small"
              onClick={setEnglish} 
              variant={langValue === 'eng-ENG' ? 'contained' : 'outlined'} 
              color="primary">
                english
            </Button>
            <Button 
              size="small"
              onClick={setPolish} 
              variant={langValue === 'pl-PL' ? 'contained' : 'outlined'} 
              color="secondary">
                polski
              </Button>
          </BtnsWrapper>
        </div>
      </ModalContainer>
    </Modal>
   );
}

ChangeLang.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}
 
export default ChangeLang;