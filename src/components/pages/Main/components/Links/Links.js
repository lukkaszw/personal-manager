import React from 'react';
import PropTypes from 'prop-types';
import { Root, ButtonWrapper } from './Links.styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MAIN_PAGE_LINKS } from 'utils/accountLinks';

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
          {
            MAIN_PAGE_LINKS.map(link => (
              <ButtonWrapper key={link.id}>
                <Button
                  fullWidth={true}
                  variant="contained"
                  size="small"
                  color={link.color}
                  component={Link}
                  to={link.to}
                >
                  {t(link.text)}
                </Button>
              </ButtonWrapper>
            ))
          }
        </div>
      }

    </Root>
  );
}

Links.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}
 
export default Links;