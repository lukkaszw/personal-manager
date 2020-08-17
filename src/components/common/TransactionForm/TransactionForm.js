import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import DateField from 'components/common/datePickers/DateField';
import FormControl from '@material-ui/core/FormControl';
import FormSubmitBtns from 'components/common/FormSubmitBtns';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Modal from '@material-ui/core/Modal';
import { useTranslation } from 'react-i18next';
import LoaderIndicator from 'components/common/LoaderIndicator';
import { 
  Root, 
  FieldContainer, 
  CategoryLabel, 
  useStyles, 
  CostContainer } from './TransactionForm.styles';
import { parseMoneyInput } from 'utils/parseMoneyInput';
import { validateTransaction } from 'utils/validators';
import { toast } from 'react-toastify';
import { useMutation, queryCache } from 'react-query';

const TransactionForm = ({ token, id, budgetId, initialValues, apiAction, isForEdit, categories }) => {

  const classes = useStyles();
  const history = useHistory();
  const { t } = useTranslation();

  const [submitAction, { isLoading: isSending }] = useMutation(apiAction, {
    onSuccess: data => {
      queryCache.invalidateQueries('transactions', { refetchActive: true })

      history.goBack();
      const message = isForEdit ? 'You have edited the transaction' : 'You have added a transaction'; 
      toast.success(`${t(message)}!`);
    },
    onError: data => {
      const message = isForEdit ? 'You can not edit a transaction now' : 'You can not add a transaction now';
      toast.error(`${t(message)}! ${t('Try again later')}!`);
    }
  });

  const handleSubmit = useCallback((data) => {
    const parsedData = {
      budgetId,
      date: data.date,
      description: data.description,
      cost: parseFloat(data.cost),
    };

    if(data.category !== 'others') {
      parsedData.subcategory = data.category;
      const category = categories.find(cat => {
        return cat.category.subCategories.some(subCat => subCat._id === data.category);
      });
      parsedData.category = category.category._id;
    }

      submitAction({ data: parsedData, token, id });
  }, [categories, budgetId, id, token, submitAction]);

  return ( 
    <Modal
      open={true}
      onClose={history.goBack}
      disableBackdropClick={true}
    >
      <Root>
        <LoaderIndicator isOpen={isSending} size='small' color="red"/>
        <Form
          onSubmit={handleSubmit}
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

                <FormSubmitBtns 
                  isForEdit={isForEdit}
                  onCancel={history.goBack}
                  submitDescription={isForEdit ? 'Edit transaction' : 'Add transaction'}
                  disable={isSending}
                  center={true}
                />
              </form>
            )}}
        />
      </Root>
    </Modal>
   );
}

TransactionForm.propTypes = {
  id: PropTypes.string,
  budgetId: PropTypes.string.isRequired,
  isForEdit: PropTypes.bool,
  initialValues: PropTypes.object,
  categories: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired,
  apiAction: PropTypes.func.isRequired,
};
 
export default TransactionForm;