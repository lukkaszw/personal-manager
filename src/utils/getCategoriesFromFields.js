export const getCategoriesFromFields = (values) => {
  const categories = Object
  .entries(values)
  .filter(([key, value]) => (
      key !== 'totalAmount' && 
      key !== 'type' && 
      key !== 'date' && 
      key !== 'name'
    ))
  .map(([key, value]) => ({ category: key, amount: parseFloat(Number(value).toFixed(2)) }));

  return categories;
}

export const getSumOfCategories = (values) => {
  return getCategoriesFromFields(values)
    .reduce((prevValue, nextCat) => {
      if(Number.isNaN(nextCat.amount)) {
        return prevValue;
      }
        return prevValue + nextCat.amount;
    }, 0)
}

