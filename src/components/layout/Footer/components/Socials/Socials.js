import React from 'react';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CategoryPart } from '../../Footer.styles';

const Socials = () => {
  return ( 
    <>
      <CategoryPart>
        <FontAwesomeIcon 
          icon={faFacebook}
        />
        <a href="https://facebook.com" target="__blank">
          Facebook
        </a>
      </CategoryPart>
      <CategoryPart>
        <FontAwesomeIcon 
          icon={faInstagram}
        />
        <a href="https://instagram.com" target="__blank">
          Instagram
        </a>
      </CategoryPart>
      <CategoryPart>
        <FontAwesomeIcon 
          icon={faTwitter}
        />
        <a href="https://twitter.com" target="__blank">
          Twitter
        </a>
      </CategoryPart>
    </>
   );
}
 
export default Socials;