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
    this.loadTodo(FilterType.all);
  }

  loadTodo = async (filterType: FilterType) => {
    try {
      let url = 'http://localhost:3000/todoList';

      if (filterType !== FilterType.all) {
        url = `${url}?isDone=${filterType === FilterType.complete}`;
      }

      const res = await fetch(url);
      const todoList = await res.json();
      this.setState({ todoList, filterType });
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

  toggleCompleteTodo = async (item: TodoItem) => {
    try {
      const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...item, isDone: !item.isDone }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const todoItem: TodoItem = await res.json();

      this.setState(({ todoList }, props) => {
        const index = todoList.findIndex((x) => x.id === item.id);

        return {
          todoList: [
            ...todoList.slice(0, index),
            todoItem,
            ...todoList.slice(index + 1),
          ],
        };
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  deleteTodo = async (item: TodoItem) => {
    try {
      await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'DELETE',
      });

      this.setState(({ todoList }, props) => {
        const index = todoList.findIndex((x) => x.id === item.id);
        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        };
      });
    } catch (error) {
      this.setState({ error });
    }
  };

  filterTodos = (filterType: FilterType) => {
    this.loadTodo(filterType);
  };

  render() {
    const { error, todoList, filterType } = this.state;

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
              todoList={todoList}
            />
            <TodoFilter
              filterTodos={this.filterTodos}
              filterType={filterType}
            />
          </>
        )}
      </div>
    );
  }
}

export default Todo;
