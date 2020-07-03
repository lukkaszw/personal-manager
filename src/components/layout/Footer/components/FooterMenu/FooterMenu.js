import React from 'react';
import PropTypes from 'prop-types';
import { MenuList, MenuItem } from './FooterMenu.styles';
import IconButton from '../IconButton';
import { parts } from '../../data';

const FooterMenu = ({ onChangeContent, currentContent }) => {
  return ( 
    <MenuList>
      {
        parts.map(button => (
          <MenuItem
            key={button.title}
          >
            <IconButton 
              icon={button.icon}
              title={button.title}
              onClick={() => onChangeContent(button.title)}
              isActive={currentContent === button.title}
            />
          </MenuItem>
        ))
      }
    </MenuList>
   );
}

FooterMenu.propTypes = {
  onChangeContent: PropTypes.func.isRequired,
  currentContent: PropTypes.string,
};


 
export default FooterMenu;