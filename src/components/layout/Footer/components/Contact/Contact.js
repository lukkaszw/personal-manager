import React from 'react';
import { CategoryPart, CategoryLink, ItemIcon, ItemName } from '../../Footer.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return ( 
    <>
      <CategoryPart>
        <ItemIcon>
          <FontAwesomeIcon 
            icon={faEnvelope}
          />
        </ItemIcon>
        <ItemName>
          lukkiaszwoj.dev@gmail.com
        </ItemName>
      </CategoryPart>
      <CategoryLink href="tel:603640252">
        <ItemIcon>
          <FontAwesomeIcon 
            icon={faMobile}
          />
        </ItemIcon>
        <ItemName>
          603 640 252
        </ItemName>
      </CategoryLink>
    </>
   );
}
 
export default Contact;