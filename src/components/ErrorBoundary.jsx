'use client';

import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'system-ui',
        }}>
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#7c4dff' }}>
              حدث خطأ غير متوقع
            </h1>
            <p style={{ color: '#666', marginBottom: '2rem' }}>
              يرجى تحديث الصفحة
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                background: '#7c4dff',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '0.75rem',
                border: 'none',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              تحديث الصفحة
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
