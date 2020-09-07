import React from 'react';
import { faPortrait, faFilm, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CategoryLink, ItemIcon, ItemName } from '../../Footer.styles';

const Developer = () => {
  return ( 
    <>
      <CategoryLink
        href="https://github.com/lukkaszw?tab=repositories" 
        target="__blank"
      >
        <ItemIcon>
          <FontAwesomeIcon 
            icon={faGithub}
          />
        </ItemIcon>
        <ItemName >
          Github
        </ItemName>
      </CategoryLink>
      <CategoryLink
        href="https://lukkiasz-cinema.herokuapp.com" 
        target="__blank"
      >
        <ItemIcon>
          <FontAwesomeIcon 
            icon={faPortrait}
          />
        </ItemIcon>
        <ItemName >
          Portfolio
        </ItemName>
      </CategoryLink>
      <CategoryLink
        href="https://lukkiasz-cinema.herokuapp.com" 
        target="__blank"
      >
        <ItemIcon>
          <FontAwesomeIcon 
            icon={faFilm}
          />
        </ItemIcon>
        <ItemName >
          Cinema app
        </ItemName>
      </CategoryLink>
      <CategoryLink
        href="https://lukkiasz-shop-store.herokuapp.com" 
        target="__blank"
      >
        <ItemIcon>
          <FontAwesomeIcon 
            icon={faGamepad}
          />
        </ItemIcon>
        <ItemName >
          Games shop
        </ItemName>
      </CategoryLink>
    </>
   );
}
 
export default Developer;