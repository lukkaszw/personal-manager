import React from 'react';
import { CategoryPart } from '../../Footer.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return ( 
    <>
      <CategoryPart>
        <FontAwesomeIcon 
          icon={faEnvelope}
        />
        <span>
          lukkiaszwoj.dev@gmail.com
        </span>
      </CategoryPart>
      <CategoryPart>
        <FontAwesomeIcon 
          icon={faMobile}
        />
        <a href="tel:603640252">
          603 640 252
        </a>
      </CategoryPart>
    </>
   );
}
 
export default Contact;