import React, { useMemo } from 'react';
import List from 'components/common/List';
import { authenticatedMenu, notAuthenticatedMenu } from 'utils/menu';
import { Nav } from './MenuDesktop.styles';
import MenuLink from '../MenuLink';
import PropTypes from 'prop-types';


const MenuDesktop = ({ isAuth }) => {
  const links = useMemo(() => {
    const menuLinks = isAuth ? authenticatedMenu : notAuthenticatedMenu;
    return menuLinks.filter(link => !link.onlyMobile);
  }, [isAuth]);


  return ( 
    <Nav>
      <List>
        {
          links.map(link => (
            <MenuLink 
              key={link.id}
              {...link}
            />
          ))
        }
      </List>
    </Nav>
   );
}

MenuDesktop.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};
 
export default MenuDesktop;