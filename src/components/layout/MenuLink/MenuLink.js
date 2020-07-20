import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Li } from './MenuLink.styles';
import { useTranslation } from 'react-i18next';

const MenuLink = ({ to, name, exact }) => {
  const { t } = useTranslation();
  return ( 
    <Li>
      <NavLink 
        to={to}
        activeClassName='active'
        exact={exact}
      >
        {t(name)}
      </NavLink>
    </Li>
  );
}

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string,
  exact: PropTypes.bool,
};
 
MenuLink.defaultProps = {
  exact: true,
}

export default MenuLink;