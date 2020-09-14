import React from 'react';
import { MainLoaderRoot, LoaderWrapper } from './MainLoaderIndicator.styles';
import Loader from 'components/common/Loader';

const MainLoaderInidcator = () => {
  return ( 
    <MainLoaderRoot>
      <img src="logo192.png" alt="small logo"/>
      <LoaderWrapper>
        <Loader 
          size="normal"
        />
      </LoaderWrapper>
      
    </MainLoaderRoot>
   );
}
 
export default MainLoaderInidcator;