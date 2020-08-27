import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import { Root } from './LoaderIndicator.styles';

const LoaderIndicator = ({ isOpen, size, color }) => {
  if(isOpen) {
    return (
      <Root>
        <Loader 
          size={size}
          color={color}
        />
      </Root>
    )
  }
  return null;
};

LoaderIndicator.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
};

LoaderIndicator.defaultProps = {
  size: 'normal',
  color: 'primary',
}

export default LoaderIndicator;
