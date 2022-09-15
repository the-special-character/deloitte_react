import React, { PureComponent } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

type Props = {
  number: number;
};

type State = {};

class Child2 extends PureComponent<Props, State> {
  state = {};

  inrerval?: NodeJS.Timer;

  //   shouldComponentUpdate(nextProps: Props, nextState: State) {
  //     return shallowCompare(this, nextProps, nextState);
  //   }
  mousemove = () => {
    console.log('mousemove');
  };

  componentDidMount() {
    document.addEventListener('mousemove', this.mousemove);

    this.inrerval = setInterval(() => {
      console.log('interval');
    }, 1000);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mousemove);
    clearInterval(this.inrerval);
  }

  render() {
    console.log('Child 2 render');

    const { number } = this.props;

    if (number > 3) {
      throw new Error('somethig went wrong');
    }

    return (
      <div>
        <h1>Child2</h1>
        <p>{number}</p>
      </div>
    );
  }
}

export default Child2;
