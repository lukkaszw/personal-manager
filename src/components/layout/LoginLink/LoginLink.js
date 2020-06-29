import React from 'react';
import PropTypes from 'prop-types';
import MenuLink from 'components/layout/MenuLink';
import { loginLinks } from 'utils/menu';

const LoginLink = ({ isAuth }) => {
  const link = isAuth ? loginLinks.isAuth : loginLinks.isNotAuth

  return ( 
    <MenuLink
      {...link}
    />
   );
}

LoginLink.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};
 
export default LoginLink;