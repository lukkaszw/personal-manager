import React from 'react';
import Header from 'components/layout/Header';
import Container from '@material-ui/core/Container';
import Footer from 'components/layout/Footer';
import { Wrapper, Content } from './MainLayout.styles';

const MainLayout = ({ children }) => {

  return (
      <Wrapper>
        <Header />
        <Content>
          <Container>
            {children}
          </Container>
        </Content>
        <Footer />
      </Wrapper>
   );
}
 
export default MainLayout;