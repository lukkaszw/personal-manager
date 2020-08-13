import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateField from 'components/common/datePickers/DateField';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Modal from '@material-ui/core/Modal';
import { } from '@fortawesome/fontawesome-svg-core'
import { useTranslation } from 'react-i18next';
import { 
  Root, 
  ButtonWrapper, 
  FieldContainer, 
  CategoryLabel, 
  useStyles, 
  CostContainer } from './TransactionForm.styles';
import { parseMoneyInput } from 'utils/parseMoneyInput';
import { validateTransaction } from 'utils/validators';

const TransactionForm = ({ token, id, initialValues, apiAction, isForEdit, categories }) => {

  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();

  return ( 
    <Modal
      open={true}
      onClose={history.goBack}
      disableBackdropClick={true}
    >
      <Root>
        <Form
          onSubmit={(values) => console.log(values)}
          initialValues={initialValues}
          validate={validateTransaction}
          render={({ handleSubmit, form, submitting, pristine, values }) => {
            const parentCategory = categories
              .find(c => { 
                const selectedCategory = c.category.subCategories.find(subc => subc._id === values.category);
                if(selectedCategory) return true;
                return false;
              });

            const categoryName = parentCategory ? `(${t(parentCategory.category.name)})` : `(${t('Others')})`;

            return (
              <form onSubmit={handleSubmit}>

                <FieldContainer>
                  <Field name="description">
                    {({ input, meta }) => (
                      <TextField 
                        fullWidth={true}
                        {...input}
                        label={t('Description')}
                        placeholder={t('Description')}
                        error={meta.error && meta.touched}
                        helperText={(meta.error && meta.touched) && 
                        (meta.error === 'Required' ? t('Required') : meta.error)}
                      />
                    )}
                  </Field>
                </FieldContainer>

                <FieldContainer>
                  <Field name="date">
                    {(props) => (
                      <DateField 
                        {...props}
                        label={t('Transaction date')}
                      />
                    )}
                  </Field>
                </FieldContainer>

                <FieldContainer>
                  <Field name="category">
                    {({ input, meta }) => {
                        return  (
                          <FormControl>
                            <InputLabel id="transaction-category-label">{t('Category')}</InputLabel>
                            <NativeSelect
                              fullWidth={true}
                              labelid="transaction-category-label"
                              id="transaction-category-select"
                              {...input}
                            >
                              <optgroup label={t('Others')}>
                                <option
                                  value='others'
                                >
                                  {t('Others')}
                                </option>
                              </optgroup>
                              {
                                categories.map(cat => (
                                  <optgroup
                                    key={cat.category._id}
                                    label={t(cat.category.name)}
                                  >
                                    {
                                      cat.category.subCategories.map(subCat => (
                                        <option
                                          key={subCat._id}
                                          value={subCat._id}
                                        >
                                          {t(subCat.name)}
                                        </option>
                                      ))
                                    }
                                  </optgroup>
                                ))
                              }
                              
                            </NativeSelect>
                            <CategoryLabel>{categoryName}</CategoryLabel>
                          </FormControl>
                        )
                    }}
                  </Field>
                </FieldContainer>

                <CostContainer align="right">
                  <Field name="cost">
                    {({ input, meta }) => (
                      <TextField 
                        className={classes.costInput}
                        fullWidth={true}
                        {...input}
                        onChange={(e) => parseMoneyInput(e.target.value, input.onChange)}
                        type="number"
                        label={t('Cost')}
                        error={meta.error && meta.touched}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">zł</InputAdornment>,
                          inputProps: {
                            step: "0.01",
                            min: 0,
                          },
                        }}
                        helperText={(meta.error && meta.touched) && t(meta.error)}
                      />
                      )}
                  </Field>  
                </CostContainer>
       
                <ButtonWrapper>
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    onClick={history.goBack}
                  >
                    {t('Cancel')}
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit}
                  >
                    {isForEdit ? t('Edit transaction') : t('Add transaction')}
                  </Button>
                </ButtonWrapper>
              </form>
            )}}
        />
      </Root>
    </Modal>
   );
}

TransactionForm.propTypes = {
  id: PropTypes.string,
  isForEdit: PropTypes.bool,
  initialValues: PropTypes.object,
  categories: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
  apiAction: PropTypes.func.isRequired,
};
 
export default TransactionForm;