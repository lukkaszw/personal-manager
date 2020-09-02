import React from 'react';
import { Root } from './Page.styles';

const Page = ({ children }) => {
  return ( 
    <Root>
      {children}
    </Root>
   );
}
 
export default Page;