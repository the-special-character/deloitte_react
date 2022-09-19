import React, { Component, ChangeEvent, FormEvent, createRef } from 'react';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';
import { FilterType, TodoItem } from './todoTypes';

type Props = {};

type State = {
  todoList: TodoItem[];
  filterType: FilterType;
  error?: Error;
};

class Todo extends Component<Props, State> {
  state: State = {
    todoList: [],
    filterType: FilterType.all,
    error: undefined,
  };

  todoInputRef = createRef<HTMLInputElement>();

  async componentDidMount() {
    this.loadTodo();
  }

  loadTodo = async () => {
    try {
      const res = await fetch('http://localhost:3000/todoList');
      const todoList = await res.json();
      this.setState({ todoList });
    } catch (error) {
      this.setState({ error });
    }
  };

  addTodo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const todoInput = this.todoInputRef.current;

      const res = await fetch('http://localhost:3000/todoList', {
        method: 'POST',
        body: JSON.stringify({
          text: todoInput?.value || '',
          isDone: false,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const todoItem: TodoItem = await res.json();

      if (todoInput) {
        this.setState(
          ({ todoList }) => {
            return {
              todoList: [...todoList, todoItem],
            };
          },
          () => {
            todoInput.value = '';
          },
        );
      }
    } catch (error) {
      this.setState({ error });
    }
  };

  toggleCompleteTodo = (item: TodoItem) => {
    this.setState(({ todoList }, props) => {
      const index = todoList.findIndex((x) => x.id === item.id);

      return {
        todoList: [
          ...todoList.slice(0, index),
          { ...item, isDone: !item.isDone },
          ...todoList.slice(index + 1),
        ],
      };
    });
  };

  deleteTodo = (item: TodoItem) => {
    this.setState(({ todoList }, props) => {
      const index = todoList.findIndex((x) => x.id === item.id);
      return {
        todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      };
    });
  };

  filterTodos = (filterType: FilterType) => {
    this.setState({ filterType });
  };

  render() {
    const { error } = this.state;

    // if (error) {
    //   return (
    //     <div>
    //       <h1>{error.message}</h1>
    //     </div>
    //   );
    // }

    return (
      <div className="flex flex-col h-screen items-center">
        <h1 className="text-4xl font-semibold py-4">Todo Application</h1>
        <TodoForm addTodo={this.addTodo} ref={this.todoInputRef} />
        {error ? (
          <div>
            <h1>{error.message}</h1>
          </div>
        ) : (
          <>
            <TodoList
              toggleCompleteTodo={this.toggleCompleteTodo}
              deleteTodo={this.deleteTodo}
              {...this.state}
            />
            <TodoFilter filterTodos={this.filterTodos} />
          </>
        )}
      </div>
    );
  }
}

export default Todo;
