import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Li } from './MenuLink.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

const MenuLink = ({ to, name, exact, icon }) => {
  const { t } = useTranslation();
  return ( 
    <Li>
      <NavLink 
        to={to}
        activeClassName='active'
        exact={exact}
      >
        {icon ? 
          <FontAwesomeIcon icon={icon}/>
          :
          <>
            {t(name)}
          </>
        }
      </NavLink>
    </Li>
  );
}

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string,
  exact: PropTypes.bool,
  icon: PropTypes.object,
};
 
MenuLink.defaultProps = {
  exact: true,
}

export default MenuLink;