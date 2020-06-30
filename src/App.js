import React from 'react';
import MainLayout from 'components/layout/MainLayout';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainLayout>
      
      </MainLayout>
    </Router>
   
  );
}

const RootApp = () => {
  return (
    <React.Suspense fallback='...'>
      <App />
    </React.Suspense>
  )
}

export default RootApp;
