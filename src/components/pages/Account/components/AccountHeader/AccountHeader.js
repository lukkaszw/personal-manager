import React from 'react';
import PropTypes from 'prop-types';
import { Root, Image, Title } from './AccountHeader.styles';
import { useTranslation } from 'react-i18next';

const AccountHeader = ({ name, surname }) => {

  const { t } = useTranslation();

  return ( 
    <Root>
      <Image src="logo192.png" alt="logo-small"/>
      <Title>{t('Welcome')}, {name} {surname}!</Title>
    </Root>
  );
}

AccountHeader.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
};
 
export default AccountHeader;