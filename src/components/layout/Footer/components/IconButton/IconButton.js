import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Div, Button } from './IconButton.styles';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

const IconButton = ({ icon, title, onClick, isActive }) => {
  const { t } = useTranslation();

  return ( 
    <Div>
      <Button
        onClick={onClick}
        className={clsx([isActive && 'active'])}
      >
        <FontAwesomeIcon 
          icon={icon}
        />
        <span className='title'>
          {title === 'Contact' ? t(title) : title}
        </span>
      </Button>
    </Div>
   );
}

IconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
}
 
export default IconButton;