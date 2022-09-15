import React from 'react';
import { createRoot } from 'react-dom/client';

import './main.css';

const container = document.getElementById('root');

// 1. first letter of the component Name should be capital letter
// 2. component will return only single element
// 3. style should be object and property name should be camelcase;
// 4. instead of class have to use classname
const App = ({ name, h1Color }) => {
  return (
    <div className="container">
      <h1
        style={{
          color: h1Color,
          backgroundColor: 'gold',
        }}
      >
        {name}
      </h1>
      <input type="checkbox" />
      <input type="text" />
    </div>
  );
};

if (container) {
  const root = createRoot(container);

  root.render(
    <>
      <App name="Yagnesh" h1Color="red" />
      <App name="Rohit" h1Color="blue" />
    </>,
  );
}
