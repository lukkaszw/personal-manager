import React from 'react';
import PropTypes from 'prop-types';
import { Root, Image, Title } from './AccountHeader.styles';
import { useTranslation } from 'react-i18next';

const AccountHeader = ({ login }) => {

  const { t } = useTranslation();

  return ( 
    <Root>
      <Image src="logo192.png" alt="logo-small"/>
      <Title>{t('Welcome')}, {login}!</Title>
    </Root>
  );
}

AccountHeader.propTypes = {
  login: PropTypes.string.isRequired,
};
 
export default AccountHeader;