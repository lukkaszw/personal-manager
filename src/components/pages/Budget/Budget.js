import React from 'react';
import { Redirect } from 'react-router-dom';


const Budget = () => {
  return ( 
    <div>
      <Redirect to="/budget/list" />
    </div>
   );
}
 
export default Budget;