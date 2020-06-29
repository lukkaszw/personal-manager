import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Li } from './MenuLink.styles';

const MenuLink = ({ to, name }) => {
  return ( 
    <Li>
      <NavLink 
        to={to}
        activeClassName='active'
        exact
      >
        {name}
      </NavLink>
    </Li>
  );
}

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string,
};
 
export default MenuLink;