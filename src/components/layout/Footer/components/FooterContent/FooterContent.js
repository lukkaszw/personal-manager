import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './FooterContent.styles';
import clsx from 'clsx';
import Contact from '../Contact';
import Developer from '../Developer';
import Socials from '../Socials';
import { parts } from '../../data';

const FooterContent = ({ currentContent }) => {
  const ShowedComp = useMemo(() => {
    switch(currentContent) {
      case parts[0].title: 
        return <Developer />
      case parts[1].title:
        return <Contact />
      case parts[2].title:
        return <Socials />
      default:
        return null;
    }
  }, [currentContent]);

  return ( 
    <Wrapper
      className={clsx([ currentContent && 'active'])}
    >
        {ShowedComp}
    </Wrapper>
   );
}

FooterContent.propTypes = {
  currentContent: PropTypes.string,
}
 
export default FooterContent;