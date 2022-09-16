import React, { Component, ChangeEvent, FormEvent, createRef } from 'react';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';
import { FilterType, TodoItem } from './todoTypes';

type Props = {};

type State = {
  todoList: TodoItem[];
  filterType: FilterType;
};

class Todo extends Component<Props, State> {
  state: State = {
    todoList: [],
    filterType: FilterType.all,
  };

  todoInputRef = createRef<HTMLInputElement>();

  addTodo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const todoInput = this.todoInputRef.current;

    if (todoInput) {
      this.setState(
        ({ todoList }) => {
          return {
            todoList: [
              ...todoList,
              {
                id: new Date().valueOf(),
                text: todoInput.value || '',
                isDone: false,
              },
            ],
          };
        },
        () => {
          todoInput.value = '';
        },
      );
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
    return (
      <div className="flex flex-col h-screen items-center">
        <h1 className="text-4xl font-semibold py-4">Todo Application</h1>
        <TodoForm addTodo={this.addTodo} ref={this.todoInputRef} />
        <TodoList
          toggleCompleteTodo={this.toggleCompleteTodo}
          deleteTodo={this.deleteTodo}
          {...this.state}
        />
        <TodoFilter filterTodos={this.filterTodos} />
      </div>
    );
  }
}

export default Todo;
