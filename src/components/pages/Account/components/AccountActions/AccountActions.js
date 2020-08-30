import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AskDialog from 'components/common/AskDialog';
import LoaderIndicator from 'components/common/LoaderIndicator';
import { Root, ButtonWrapper } from './AccountActions.styles';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import API from 'store/api';

const AccountActions = ({ token }) => {

  const { t } = useTranslation();
  const history = useHistory();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteModalOpen = useCallback(() => setIsDeleteModalOpen(true), [setIsDeleteModalOpen]);
  const handleDeleteModalClose = useCallback(() => setIsDeleteModalOpen(false), [setIsDeleteModalOpen]);

  const [deleteAccount, { isLoading: isDeleting }] = useMutation(API.user.deleteAccount, {
    onSuccess: data => {
      history.push('/logout');
      toast.success(`${t('You have deleted your account')}!`);
    },
    onError: data => {
      toast.error(`${t('You can not delete your account now')}! ${t('Try again later')}!`);
    }
  });

  const handleDeleteAccount = useCallback(
    () => {
      deleteAccount({ token });
      handleDeleteModalClose();
    },
    [deleteAccount, handleDeleteModalClose, token]
  );

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
          disabled={isDeleting}
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
          disabled={isDeleting}
        >
          {t('Change password')}
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
          variant="contained"
          onClick={handleDeleteModalOpen}
          disabled={isDeleting}
        >
          {t('Delete account')}
        </Button>
      </ButtonWrapper>

      <AskDialog 
        isOpen={isDeleteModalOpen}
        question={t('Do you realy want to delete your account and related data?!')}
        yesAnswear={t('Yes')}
        noAnswear={t('No')}
        onClose={handleDeleteModalClose}
        onNoAction={handleDeleteModalClose}
        onYesAction={handleDeleteAccount}
      />

      <LoaderIndicator
        isOpen={isDeleting} 
        color="secondary"
        size="small"
      />
    </Root>
   );
}

AccountActions.propTypes = {
  token: PropTypes.string.isRequired,
};
 
export default AccountActions;