import React from 'react';
import { useTranslation } from 'react-i18next';
import { Root } from './NoDataFound.styles';

const NoDataFound = () => {

  const { t } = useTranslation();

  return ( 
    <Root>
      {t('Not found')}!
    </Root>
   );
}
 
export default NoDataFound;