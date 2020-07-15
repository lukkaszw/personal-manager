import React, { Component } from 'react';
import LoaderIndicator from 'components/common/LoaderIndicator';

class SuspenseErrorBoundary extends Component {
  state = { 
    hasError: false 
  };

  static getDerivedStateFromError(error) {
    // Zaktualizuj stan, aby następny render pokazał zastępcze UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(errorInfo);
  }

  render() {
    return (
      <React.Suspense fallback={<LoaderIndicator isOpen={true}/>}>
        {
          this.state.hasError ?
          <h1>Something went wrong.</h1>
          :
          <>
            {this.props.children}
          </>
        }
      </React.Suspense>
  
    )
  }
}

export default SuspenseErrorBoundary;