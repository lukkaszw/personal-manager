import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import { Root } from './LoaderIndicator.styles';

const LoaderIndicator = ({ isOpen, size, blue }) => {
  if(isOpen) {
    return (
      <Root>
        <Loader />
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
  color: 'blue',
}

export default LoaderIndicator;
