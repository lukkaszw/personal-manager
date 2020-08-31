import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Root } from './EditPersonalData.styles';
import PersonalDataForm from './components/PersonalDataForm';
import SELECTORS from 'store/selectors';
import ACTION_CREATORS from 'store/actionCreators';

const EditPersonalData = ({ token, userName, userSurname, onChangeUserData }) => {
  return ( 
    <Root>
      <PersonalDataForm 
        token={token}
        initialValues={{ name: userName, surname: userSurname }}
        onChangeUserData={onChangeUserData}
      />
    </Root>
  );
}

EditPersonalData.propTypes = {
  token: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userSurname: PropTypes.string.isRequired,
  onChangeUserData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
  userName: SELECTORS.user.getName(state),
  userSurname: SELECTORS.user.getSurname(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeUserData: (data) => dispatch(ACTION_CREATORS.user.updateData(data)),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(EditPersonalData);