import React, { useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import MenuDesktop from 'components/layout/MenuDesktop';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './Header.styles';
import MenuRight from 'components/layout/MenuRight';
import MobileMenu from 'components/layout/MobileMenu';


const Header = () => {
  const classes = useStyles();
  const [isMenuActive, setMenuActiveness] = useState(false);
  const openMenu = useCallback(() => setMenuActiveness(true), [setMenuActiveness]);
  const closeMenu = useCallback(() => setMenuActiveness(false), [setMenuActiveness]);
  return ( 
    <>
        <AppBar position="static" className={classes.root}>
          <Container>
            <Toolbar className={classes.toolbar}>
              <IconButton 
                onClick={openMenu}
                edge="start" 
                className={classes.menuButton} 
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <MenuDesktop isAuth={false}/>
              <MenuRight />
            </Toolbar>
          </Container>
          <MobileMenu 
            onCloseMenu={closeMenu}
            isActive={isMenuActive}
          />
        </AppBar>
      </>
   );
}
 
export default Header;