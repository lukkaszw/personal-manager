import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SELECTORS from 'store/selectors';
import Page from 'components/layout/Page';
import ACTION_CREATORS from 'store/actionCreators';
import CalendarData from './components/CalendarData';

const Calendar = ({ token, month, year, onChangeMonth, onResetLoading }) => {

  return (
    <Page>
      <CalendarData 
        token={token}
        month={month}
        year={year}
        onResetLoading={onResetLoading}
        onChangeMonth={onChangeMonth}
      />
    </Page> 
  );
}

Calendar.propTypes = {
  token: PropTypes.string.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onChangeMonth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
  month: SELECTORS.calendar.getMonth(state),
  year: SELECTORS.calendar.getYear(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeMonth: ({ month, year }) => dispatch(ACTION_CREATORS.calendar.setMonth({month, year})),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);