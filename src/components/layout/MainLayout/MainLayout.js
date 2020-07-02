import React from 'react';
import Header from 'components/layout/Header';
import Container from '@material-ui/core/Container';

const MainLayout = ({ children }) => {
  return ( 
    <>
      <Header />
      <Container>
        {children}
      </Container>
     
    </>
   );
}
 
export default MainLayout;