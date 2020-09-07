import React from 'react';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CategoryLink, ItemName, ItemIcon } from '../../Footer.styles';

const Socials = () => {
  return ( 
    <>
      <CategoryLink
        href="https://facebook.com" 
        target="__blank"
      >
        <ItemIcon>
          <FontAwesomeIcon 
            icon={faFacebook}
          />
        </ItemIcon>
        <ItemName >
          Facebook
        </ItemName>
      </CategoryLink>
      <CategoryLink
        href="https://instagram.com" 
        target="__blank"
      >
        <ItemIcon>
          <FontAwesomeIcon 
            icon={faInstagram}
          />
        </ItemIcon>
        <ItemName >
          Instagram
        </ItemName>
      </CategoryLink>
      <CategoryLink
        href="https://twitter.com" 
        target="__blank"
      >
        <ItemIcon>
          <FontAwesomeIcon 
            icon={faTwitter}
          />
        </ItemIcon>
        <ItemName >
          Twitter
        </ItemName>
      </CategoryLink>
    </>
   );
}
 
export default Socials;