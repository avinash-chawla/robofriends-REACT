import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componontDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooops, something wrong</h1>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;