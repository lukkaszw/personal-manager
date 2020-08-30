import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import LoginLink from 'components/layout/LoginLink';
import Button from '@material-ui/core/Button';
import ChangeLang from 'components/layout/ChangeLang/ChangeLang';
import MenuLink from 'components/layout/MenuLink';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import List from 'components/common/List';
import { useTranslation } from 'react-i18next';
import useStyles from './MenuRight.styles';

const MenuRight = ({ isAuth }) => {
  const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { i18n } = useTranslation();

  const lang = i18n.language.split('-')[0];

  const openModal = useCallback(() => setIsModalOpen(true), [setIsModalOpen]);
  const closeModal = useCallback(() => setIsModalOpen(false), [setIsModalOpen]);

  return ( 
    <div>
      <Button
        className={classes.langBtn}
        size="small"
        variant="outlined"
        color='secondary'
        onClick={openModal}
      >
        {lang}
      </Button>
      <List inline>
        {
          isAuth && 
            <MenuLink icon={faUser} to="/account"/>
        }
        <LoginLink 
          isAuth={isAuth}
        />
      </List>
      <ChangeLang 
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
   );
}

MenuRight.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}
 
export default MenuRight;