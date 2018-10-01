import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import store from './store';
import { incrementB } from './actions';

class AppContent extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <button onClick={() => dispatch(incrementB())}>
        Counter B: {this.props.counterB}
      </button>
    );
  }
}

const App = connect(state => ({
  counterB: state.AppB.counterB,
}))(AppContent);

const AppB = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppB;