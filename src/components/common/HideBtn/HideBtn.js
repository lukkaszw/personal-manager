import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faCog } from '@fortawesome/free-solid-svg-icons';
import IconButton from '@material-ui/core/IconButton';
import { Root } from './HideBtn.styles';
import clsx from 'clsx';

const HideBtn = ({ onClick, ariaLabel, isHide }) => {
  return (
    <Root className={clsx(isHide && 'hidden')}>
      <IconButton
        aria-label={ariaLabel}
        onClick={onClick}
        >
        <FontAwesomeIcon icon={isHide ? faCog : faEyeSlash}/>
      </IconButton>
    </Root> 
  );
}

HideBtn.propTypes = {
  isHide: PropTypes.bool.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
 
export default HideBtn;