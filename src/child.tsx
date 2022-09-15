import React, { Component } from 'react';
import Child1 from './child1';
import Child2 from './child2';

type Props = {
  name: string;
};

type Todos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type State = {
  counter: number;
  greetName: string;
  data?: Todos;
};

// Four Stages of life cycle method

// Mounting

// 1. Constructur (call only once)
//  derive state base on props
//  bind the methods
// 2. getDerivedStateFromProps
// derive new state base on old state and old prop
// 3. render
// render html
// 4. componentDidMount (call only once)
// on page load display data
// manupulate DOM element

// Updating
// 1. getDerivedStateFromProps
// derive new state base on old state and old prop
// 2. shouldComponentUpdate(PureComponent/memo)
// avoid un nessessary rerendering
// 3. render
// render html
// 4 getSnapshotBeforeUpdate (not possible in function component)
// take a sanpshot of screen and pass it to componenddidupdate
// 5. componentDidUpdate
// maniupulate dom

// Unmounting
// 1. componentWillUnmount

// Error (not possible in function component)
// getDerivedStateFromError
// componentDidCatch

export default class Child extends Component<Props, State> {
  state = {
    counter: 0,
    greetName: '',
    data: {} as Todos,
  };
  //   Bind Method
  //   base on props value if you want to define state value
  constructor(props: Props) {
    super(props);
    console.log('constructor');

    // this.state = {
    //   counter: 0,
    //   greetName: `Mr. ${props.name}`,
    // };
  }

  //   static getDerivedStateFromProps(props: Props, state: State) {
  //     console.log('getDerivedStateFromProps');
  //     return {
  //       greetName: `Mr. ${props.name}`,
  //     };
  //   }

  //   on page load if u want to fetch data from api;
  async componentDidMount() {
    // console.log('componentDidMount');
    // try {
    //   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    //   const json: Todos = await res.json();
    //   this.setState({ data: json });
    // } catch (error) {}
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
  ) {
    return 10;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot);
  }

  increment = () => {
    this.setState(({ counter }) => {
      return {
        counter: counter + 1,
      };
    });
  };

  decrement() {
    this.setState(({ counter }) => {
      return {
        counter: counter - 1,
      };
    });
  }

  static getDerivedStateFromError(error: Error) {
    return {
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(errorInfo);

    // send error information to server
  }

  render() {
    console.log('render');
    const { counter, greetName, data, error } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }

    return (
      <div className="wrapper">
        <h1 id="heading">{greetName}</h1>
        <h2>{data?.title}</h2>
        <button type="button" onClick={this.increment}>
          +
        </button>
        <h2>{counter}</h2>
        <button type="button" onClick={this.decrement}>
          -
        </button>
        <Child1 />
        {counter < 5 && <Child2 number={counter} />}
      </div>
    );
  }
}
