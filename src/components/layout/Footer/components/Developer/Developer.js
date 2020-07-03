import React from 'react';
import { faPortrait, faFilm, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CategoryPart } from '../../Footer.styles';

const Developer = () => {
  return ( 
    <>
      <CategoryPart>
        <FontAwesomeIcon 
          icon={faGithub}
        />
        <a href="https://github.com/lukkaszw?tab=repositories" target="__blank">
          Github
        </a>
      </CategoryPart>
      <CategoryPart>
        <FontAwesomeIcon 
          icon={faPortrait}
        />
        <a href="https://lukkiasz-cinema.herokuapp.com" target="__blank">
          Portfolio
        </a>
      </CategoryPart>
      <CategoryPart>
        <FontAwesomeIcon 
          icon={faFilm}
        />
        <a href="https://lukkiasz-cinema.herokuapp.com" target="__blank">
          Cinema app
        </a>
      </CategoryPart>
      <CategoryPart>
        <FontAwesomeIcon 
          icon={faGamepad}
        />
        <a href="https://lukkiasz-shop-store.herokuapp.com" target="__blank">
          Games shop
        </a>
      </CategoryPart>
    </>
   );
}
 
export default Developer;