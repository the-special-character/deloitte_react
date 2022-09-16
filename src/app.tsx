import React, { Component, createRef } from 'react';
import Todo from './container/todo';

// Props are immutable
// Function Component
class App extends Component {
  render(): React.ReactNode {
    return (
      <div>
        <Todo />
      </div>
    );
  }
}

export default App;
