import React from 'react';
import Description from '../Description';
import { Root, Title, Image } from './MainHeader.styles';

const MainHeader = () => {
  return ( 
    <Root>
      <Title>
        <span>Personal Manager</span>
      </Title>
      <div>
        <Image src="/logo512.png" alt="logo" />
      </div>
      <Description />
    </Root>
   );
}
 
export default MainHeader;