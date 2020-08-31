import React from 'react';
import PropTypes from 'prop-types';
import { Root, Title } from './SmallTitle.styles.js';
import { useTranslation } from 'react-i18next';

const SmallTitle = ({ margin, title, textAlign }) => {

  const { t } = useTranslation();

  return ( 
    <Root margin={margin} textAlign={textAlign}>
      <Title>
        {t(title)}
      </Title>
    </Root>
  );
}

SmallTitle.propTypes = {
  margin: PropTypes.oneOf(['small', 'normal', 'big']),
  title: PropTypes.string.isRequired,
  textAlign: PropTypes.oneOf(['center', 'right', 'left']),
};

SmallTitle.defaultProps = {
  margin: 'normal',
  textAlign: 'center',
};
 
export default SmallTitle;