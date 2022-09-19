import React, { Component, createRef } from 'react';
import ErrorBlock from './component/errorBlock';
import Todo from './container/todo';

// Props are immutable
// Function Component
type State = {};

type Props = {};
class App extends Component<Props, State> {
  render(): React.ReactNode {
    return (
      <ErrorBlock>
        <Todo />
      </ErrorBlock>
    );
  }
}

export default App;
