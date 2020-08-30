import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Root, ButtonWrapper } from './AccountActions.styles';
import { useTranslation } from 'react-i18next';

const AccountActions = () => {

  const { t } = useTranslation();

  return ( 
    <Root>
      <ButtonWrapper>
        <Button
          size="small"
          color="primary"
          fullWidth={true}
          component={Link}
          variant="contained"
          to="/account/update"
        >
          {t('Update data')}
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button
          size="small"
          color="secondary"
          fullWidth={true}
          component={Link}
          variant="contained"
          to="/account/pswd"
        >
          {t('Update password')}
        </Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button
          size="small"
          fullWidth={true}
          component={Link}
          variant="contained"
          to="/logout"
        >
          {t('Logout')}
        </Button>
      </ButtonWrapper>
      <ButtonWrapper separated>
        <Button
          color="secondary"
          size="small"
          component={Link}
          variant="contained"
          to="/logout"
        >
          {t('Delete account')}
        </Button>
      </ButtonWrapper>
    </Root>
   );
}
 
export default AccountActions;