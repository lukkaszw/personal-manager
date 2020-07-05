import { useState, useCallback } from 'react';
import { validateAuthInputs } from 'utils/validators';

const useAuthForm = (onSendCredentials, onResetRequest, isSuccess) => {
  const [formDestination, setFormDestination] = useState('login');

  const onSubmit = useCallback((data) => onSendCredentials(data, formDestination), 
    [onSendCredentials, formDestination]
  );

  const changeDestination = useCallback(() => 
    setFormDestination(formDestination === 'register' ? 'login' : 'register'),
    [setFormDestination, formDestination]
  );

  const validateInputs = useCallback((values) => 
    validateAuthInputs(values, formDestination), 
    [formDestination]
  );

  const resetAction = useCallback(() => {
    if(isSuccess) {
      changeDestination('login');
    }
    onResetRequest();
  }, [isSuccess, onResetRequest, changeDestination]);

  return {
    formDestination,
    onSubmit,
    changeDestination,
    validateInputs,
    resetAction,
  }
}

export default useAuthForm;