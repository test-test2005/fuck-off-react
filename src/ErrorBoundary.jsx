import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto', color: '#1f2937' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#dc2626' }}>
            Application Error
          </h2>
          <p style={{ marginTop: '0.5rem', color: '#4b5563' }}>
            An unexpected error occurred while rendering the page:
          </p>
          <pre style={{ backgroundColor: '#f3f4f6', padding: '1rem', borderRadius: '0.5rem', overflowX: 'auto', marginTop: '1rem', fontSize: '0.875rem' }}>
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => {
              window.location.hash = '/';
              window.location.reload();
            }}
            style={{ marginTop: '1.5rem', padding: '0.5rem 1rem', backgroundColor: '#2563eb', color: '#ffffff', borderRadius: '0.375rem', border: 'none', cursor: 'pointer', fontWeight: 600 }}
          >
            Reload to Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
