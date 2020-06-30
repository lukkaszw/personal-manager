import React from 'react';
import { MainLoaderRoot, Text } from './MainLoaderIndicator.styles';
import Loader from 'components/common/Loader';

const MainLoaderInidcator = () => {
  return ( 
    <MainLoaderRoot>
      <Text>Loading...</Text>
      <div>
        <Loader 
          size="big"
        />
      </div>
      
    </MainLoaderRoot>
   );
}
 
export default MainLoaderInidcator;