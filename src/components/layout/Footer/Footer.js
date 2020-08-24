import React, { useState, useCallback, useEffect } from 'react';
import { FooterWrapper, CopyRights } from './Footer.styles';
import Container from '@material-ui/core/Container';
import FooterMenu from './components/FooterMenu';
import FooterContent from './components/FooterContent';

const Footer = () => {
  const [currentContent, setContent] = useState(null);
  const handleSetContent = useCallback(
    (content) => setContent(currentContent === content ? null : content),
    [currentContent, setContent]
  );

  useEffect(() => {
    let timeOutId;

    if(currentContent) {
      timeOutId = setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
      }, 250);
    }

    return () => {
      clearTimeout(timeOutId);
      timeOutId = null;
    }
  }, [currentContent]);

  return ( 
    <FooterWrapper>
      <Container>
        <FooterMenu 
          onChangeContent={handleSetContent}
          currentContent={currentContent}
        />
        <FooterContent 
          currentContent={currentContent}
        />
      </Container>
      <CopyRights>
        &copy; 2020 Łukasz Wojdat
      </CopyRights>
    </FooterWrapper>
   );
}
 
export default Footer;