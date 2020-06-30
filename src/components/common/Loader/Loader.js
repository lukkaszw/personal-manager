import React from 'react';
import PropTypes from 'prop-types';
import { LoaderRoot } from './Loader.style';

const Loader = ({ size, color }) => {
  return ( 
    <LoaderRoot size={size} color={color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoaderRoot>
   );
}

Loader.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

Loader.defaultProps = {
  size: 'normal',
  color: 'blue',
};
 
export default Loader;