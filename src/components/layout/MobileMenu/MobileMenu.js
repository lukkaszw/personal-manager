import React, { useState, useCallback, useEffect } from 'react';
import Portal from 'components/layout/Portal';
import { Wrapper, useStyles, Background, MenuList } from './MobileMenu.styles';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { notAuthenticatedMenu, authenticatedMenu } from 'utils/menu';
import { useTranslation } from 'react-i18next';

const MobileMenu = ({ isAuth, isActive, onCloseMenu }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const links = isAuth ? authenticatedMenu : notAuthenticatedMenu;

  const [isChangingPage, setIsChangingPage] = useState(false);
  const handleChangePage = useCallback(() => setIsChangingPage(true), [setIsChangingPage]);

  useEffect(() => {
    let timeoutId;
    if(isChangingPage) {
      timeoutId = setTimeout(() => {
        onCloseMenu();
        setIsChangingPage(false);
      }, [1200]);
    }
    return () => {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  }, [isChangingPage, onCloseMenu]);
  
  
  return ( 
    <Portal domId="menu">
      <Background className={clsx([isActive && 'active'])}/>
      <Wrapper className={clsx([isActive && 'active'])}>
        <div className="background" />
        <IconButton 
          onClick={onCloseMenu}
          className={classes.closeBtn}
          disabled={isChangingPage}
        >
          <FontAwesomeIcon icon={faTimes}/>
        </IconButton>
        <MenuList>
          {
            links.map(link => (
              <li
                key={link.name}
                className='mobileMenuItem'
              >
                <NavLink
                  exact={link.exact !== false}
                  className='mobileMenuLink'
                  to={link.to}
                  activeClassName="active"
                  onClick={handleChangePage}
                >
                  <span className="text">{t(link.name)}</span>
                </NavLink>
              </li>
            ))
          }
        </MenuList>
      </Wrapper>
    </Portal>
   );
}

MobileMenu.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  onCloseMenu: PropTypes.func.isRequired,
}
 
export default MobileMenu;