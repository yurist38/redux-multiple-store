import React from 'react';
import ReactDOM from 'react-dom';
import AppA from './AppA';
import AppB from './AppB';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppA />
        <AppB />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
