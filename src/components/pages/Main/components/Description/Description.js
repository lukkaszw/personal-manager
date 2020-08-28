import React from 'react';
import { useTranslation } from 'react-i18next';
import { Root, Paragraph  } from './Description.styles';


const Description = () => {

  const { t } = useTranslation();

  return (
    <Root>
      <Paragraph>
        {t('This app helps you to manage your personal finances, tasks and notes')} 
      </Paragraph>
    </Root>
   );
}
 
export default Description;