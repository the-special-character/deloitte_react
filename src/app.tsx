import React from 'react';
import Child from './child';
import Main from './main';

// Props are immutable
// Function Component
const App = () => {
  return (
    <>
      <Main text="Hello from App" />
      <Child name="Yagnesh" />
    </>
  );
};

export default App;
