import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TableCell from '@material-ui/core/TableCell';
import { useTranslation } from 'react-i18next';

const TransactionRow = ({ _id, checked, onChange, cost, description, category, subcategory, date, lang }) => {

  const { t } = useTranslation();
  const dateString = useMemo(() => new Intl.DateTimeFormat(lang).format(new Date(date)), [lang, date]);

  return ( 
    <TableRow key={_id}>
      <TableCell padding="checkbox">
        <Checkbox
          checked={checked}
          onChange={onChange}
        />
      </TableCell>
      <TableCell align="right">
        {cost.toFixed(2)}
      </TableCell>
      <TableCell>
        {description}
      </TableCell>
      <TableCell align="center">
        {
          category ? t(category.name) : t('Others')
        }
      </TableCell>
      <TableCell align="center" >
        {
          subcategory ? t(subcategory.name) : t('Others')
        }
      </TableCell>
      <TableCell align="center" >
        {dateString}
      </TableCell>
    </TableRow>
  );
}

TransactionRow.propTypes = {
  _id: PropTypes.string.isRequired, 
  checked: PropTypes.bool.isRequired, 
  onChange: PropTypes.func.isRequired, 
  cost: PropTypes.number.isRequired, 
  description: PropTypes.string.isRequired, 
  category: PropTypes.object, 
  subcategory: PropTypes.object, 
  date: PropTypes.string.isRequired, 
  lang: PropTypes.string.isRequired,
};
 
export default TransactionRow;