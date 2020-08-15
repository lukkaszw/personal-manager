import { useState, useEffect, useCallback } from 'react';

const useChackedTransactions = (filteredTransactions) => {
  const [checkedTransactions, toggleTransaction] = useState([]);

  useEffect(() => toggleTransaction([]), [filteredTransactions]);

  const handleToggleAllTransactions = useCallback(() => {
    if(checkedTransactions.length >= filteredTransactions.length) {
      toggleTransaction([]);
    } else {
      const filteredTransIds = filteredTransactions.map(trans => trans._id);
      toggleTransaction(filteredTransIds);
    }
  }, [filteredTransactions, checkedTransactions.length])

  const handleToggleTransaction = (transId) => 
    toggleTransaction(prevChecked => 
      prevChecked.includes(transId) ? 
      checkedTransactions.filter(checkedTrans => checkedTrans !== transId) 
      : 
      checkedTransactions.concat([transId])
    );
  
  return {
    checkedTransactions,
    handleToggleAllTransactions,
    handleToggleTransaction,
  }

};

export default useChackedTransactions;