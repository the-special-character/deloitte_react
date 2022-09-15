import React, { Component } from 'react';

// let xyz = 'hello xyz';

type Props = {
  text: string;
};

type State = {};

// if props value chage or state value changge
class Main extends Component<Props, State> {
  state = {
    xyz: 'Hello From state',
  };

  render() {
    const { text } = this.props;
    const { xyz } = this.state;
    return (
      <div>
        <h1>{text}</h1>
        <h2>{xyz}</h2>
        <button
          type="button"
          onClick={() => {
            this.setState({ xyz: 'changed xyz' });
          }}
        >
          Change xyz value
        </button>
      </div>
    );
  }
}

export default Main;
