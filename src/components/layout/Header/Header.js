import React, { useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import MenuDesktop from 'components/layout/MenuDesktop';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './Header.styles';
import MenuRight from 'components/layout/MenuRight';


const Header = () => {
  const classes = useStyles();
  const [isMenuActive, setMenuActiveness] = useState(false);
  const toggleMenu = useCallback(() => setMenuActiveness(!isMenuActive), [isMenuActive]);

  return ( 
      <AppBar position="static" className={classes.root}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <IconButton 
              onClick={toggleMenu}
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
      </AppBar>
   );
}
 
export default Header;