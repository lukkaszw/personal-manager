import React from 'react';
import PropTypes from 'prop-types';
import { Root } from './Page.styles';

const Page = ({ children, centeredContent  }) => {
  return ( 
    <Root centeredContent={centeredContent}>
      {children}
    </Root>
   );
}
 
Page.propTypes = {
  centeredContent: PropTypes.bool,
};

export default Page;