import React from 'react';
import PropTypes from 'prop-types';
import { Root, ButtonWrapper } from './Links.styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Links = ({ isAuth }) => {

  const { t } = useTranslation();


  return ( 
    <Root>
      {
        !isAuth ? 
        <Button
          fullWidth={true}
          variant="contained"
          size="small"
          color="primary"
          component={Link}
          to="/auth"
        >
          {t('Sign in')} / {t('Sign up')}
        </Button>
        :
        <div>
          <ButtonWrapper>
            <Button
              fullWidth={true}
              variant="contained"
              size="small"
              color="primary"
              component={Link}
              to="/budget"
            >
              {t('Manage your budget')}
            </Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              fullWidth={true}
              variant="contained"
              size="small"
              color="secondary"
              component={Link}
              to="/tasks"
            >
              {t('Manage your tasks')}
            </Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              fullWidth={true}
              variant="contained"
              size="small"
              color="secondary"
              component={Link}
              to="/notes"
            >
              {t('Manage your notes')}
            </Button>
          </ButtonWrapper>
        </div>
      }

    </Root>
  );
}

Links.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}
 
export default Links;