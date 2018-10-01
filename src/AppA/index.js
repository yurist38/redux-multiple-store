import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import store from './store';
import { incrementA } from './actions';

class AppContent extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <button onClick={() => dispatch(incrementA())}>
        Counter A: {this.props.counterA}
      </button>
    );
  }
}

const App = connect(state => ({
  counterA: state.AppA.counterA,
}))(AppContent);

const AppA = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppA;