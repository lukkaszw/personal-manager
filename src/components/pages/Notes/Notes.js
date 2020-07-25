import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SuspenseErrorBundary from 'components/common/SuspenseErrorBundary';
import SELECTORS from 'store/selectors';
import ACTION_CREATORS from 'store/actionCreators';

const NotesList = React.lazy(() => import('./components/NotesList'));
const NotesActions = React.lazy(() => import('./components/NotesActions'));

const Notes = ({ 
  token, page, priority, category, sortBy, sortOrder, order,
  onChangePage, onChangePriority, onChangeCategory, onChangeSort, 
  onResetQuerySettings,
 }) => {

  return ( 
    <SuspenseErrorBundary>
      <NotesActions 
        priority={priority}
        category={category}
        sortBy={sortBy}
        sortOrder={sortOrder}
        order={order}
        onChangePriority={onChangePriority}
        onChangeCategory={onChangeCategory}
        onChangeSort={onChangeSort} 
        onResetQuerySettings={onResetQuerySettings}
      />
      <NotesList 
        token={token}
        page={page}
        priority={priority}
        category={category}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onChangePage={onChangePage}
      />
    </SuspenseErrorBundary>
   );
}

Notes.propTypes = {
  token: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  priority: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  sortBy: PropTypes.string,
  order: PropTypes.string,
  onChangePage: PropTypes.func.isRequired,
  onChangePriority: PropTypes.func.isRequired,
  onChangeCategory: PropTypes.func.isRequired,
  onChangeSort: PropTypes.func.isRequired,
  onResetQuerySettings: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  token: SELECTORS.user.getToken(state),
  page: SELECTORS.notes.getQueryPage(state),
  priority: SELECTORS.notes.getQueryPriority(state),
  category: SELECTORS.notes.getQueryCategory(state),
  sortBy: SELECTORS.notes.getQuerySortBy(state),
  order: SELECTORS.notes.getQuerySortOrder(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangePage: (page) => dispatch(ACTION_CREATORS.notes.setPage(page)),
  onChangePriority: (priority) => dispatch(ACTION_CREATORS.notes.setPriority(priority)),
  onChangeCategory: (categoryId) => dispatch(ACTION_CREATORS.notes.setCategory(categoryId)),
  onChangeSort: (sortBy) => dispatch(ACTION_CREATORS.tasks.setSort(sortBy)),
  onResetQuerySettings: () => dispatch(ACTION_CREATORS.tasks.resetQuerySettings()),
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Notes);