import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';

import './index.scss';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    this.setState({
      hasError: true,
      message: error.message,
    });
  }
  componentDidUpdate(previousProps) {
    if (previousProps.children !== this.props.children)
      this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert severity="error" className="error-message">
          <AlertTitle>Error</AlertTitle>
          <div>{this.state.message}</div>
          <b>
            Try undoing the changes or refresh the page to go back to normal
          </b>
        </Alert>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
