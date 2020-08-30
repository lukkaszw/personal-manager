import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Pagination as Paginate } from '@material-ui/lab';
import { Root } from './Pagination.styles';

const Pagination = ({ count, page, onChange, hide }) => {
  const handleChangePage = useCallback((e, value) => onChange(value), [onChange]);

  return ( 
    <Root>
      <Paginate
        hideNextButton={hide}
        hidePrevButton={hide}
        color="primary"
        count={count} 
        page={page}
        onChange={handleChangePage}
      />
    </Root>
   );
}

Pagination.propTypes = {
  hide: PropTypes.bool,
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
}
 
export default Pagination;