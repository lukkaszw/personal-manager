import ACTIONS from '../actions';

export const setCategory = (categoryId) => ({ payload: categoryId, type: ACTIONS.transactions.SET_CATEGORY });
export const setSubcategory = (subcategoryData) => ({ payload: subcategoryData, type: ACTIONS.transactions.SET_SUBCATEGORY});
export const resetQueries = () => ({ type: ACTIONS.transactions.RESET_QUERIES });