import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from './IconWrapper.styles';

const IconWrapper = ({ variant, children}) => {
  return ( 
    <Icon variant={variant}>
      {children}
    </Icon>
  );
}

IconWrapper.propTypes = {
  variant: PropTypes.oneOf(['positive', 'very_positive', 'negative', 'neutral']).isRequired,
};
 
export default IconWrapper;