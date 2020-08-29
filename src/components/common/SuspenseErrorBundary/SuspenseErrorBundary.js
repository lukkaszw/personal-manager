import React, { Component } from 'react';
import LoaderIndicator from 'components/common/LoaderIndicator';
import { Error } from './SuspenseErrorBundary.styles';

class SuspenseErrorBoundary extends Component {
  state = { 
    hasError: false 
  };

  static getDerivedStateFromError(error) {
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
          <Error>Something went wrong!</Error>
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