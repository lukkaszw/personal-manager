import React, { useState, useCallback } from 'react';
import LoginLink from 'components/layout/LoginLink';
import Button from '@material-ui/core/Button';
import ChangeLang from 'components/layout/ChangeLang/ChangeLang';
import { useTranslation } from 'react-i18next';
import useStyles from './MenuRight.styles';

const MenuRight = () => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const lang = i18n.language.split('-')[0];

  const openModal = useCallback(() => setIsModalOpen(true), [setIsModalOpen]);
  const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);

  return ( 
    <div>
      <Button
        className={classes.langBtn}
        variant="outlined"
        color='secondary'
        onClick={openModal}
      >
        {lang}
      </Button>
      <LoginLink 
        isAuth={false}
      />
      <ChangeLang 
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
   );
}
 
export default MenuRight;