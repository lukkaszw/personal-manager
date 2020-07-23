import React from 'react'; 
import PropTypes from 'prop-types';
import { TextPart } from './Description.styles';

const Description = ({ text }) =>  ( 
  <>
    {
      text.split('\n').map((textPart, i) => (
        <TextPart key={i}>
          {textPart}
        </TextPart>
      ))
    }
  </>
);

Description.propTypes = {
  text: PropTypes.string,
};
 
export default Description;