import React, { Component, ChangeEvent, FormEvent, createRef } from 'react';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';
import { AppState, FilterType, TodoAppType, TodoItem } from './todoTypes';

type Props = {};

type State = {
  todoList: TodoItem[];
  filterType: FilterType;
  error?: Error;
  appState: AppState[];
};

class Todo extends Component<Props, State> {
  state: State = {
    todoList: [],
    filterType: FilterType.all,
    error: undefined,
    appState: [],
  };

  todoInputRef = createRef<HTMLInputElement>();

  setLoadingState = (type: TodoAppType) => {
    this.setState(({ appState }) => {
      return {
        appState: [...appState, { type, isLoading: true, hasError: false }],
      };
    });
  };

  setSuccessState = (type: TodoAppType) => {
    this.setState(({ appState }) => {
      return {
        appState: appState.filter((x) => x.type !== type),
      };
    });
  };

  setErrorState = (type: TodoAppType, error: Error) => {
    this.setState(({ appState }, props) => {
      return {
        appState: appState.map((x) => {
          if (x.type === type) {
            return {
              ...x,
              isLoading: false,
              hasError: true,
              errorMessage: error.message,
            };
          }
          return x;
        }),
      };
    });
  };

  async componentDidMount() {
    this.loadTodo(FilterType.all);
  }

  loadTodo = async (filterType: FilterType) => {
    const type = TodoAppType.FETCH_TODO;

    this.setLoadingState(type);
    try {
      let url = 'http://localhost:3000/todoList';

      if (filterType !== FilterType.all) {
        url = `${url}?isDone=${filterType === FilterType.complete}`;
      }

      const res = await fetch(url);
      const todoList = await res.json();
      this.setState({ todoList, filterType });
      this.setSuccessState(type);
    } catch (error) {
      this.setErrorState(type, error);
    }
  };

  addTodo = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const type = TodoAppType.ADD_TODO;

    try {
      const todoInput = this.todoInputRef.current;
      this.setLoadingState(type);

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
            this.setSuccessState(type);
          },
        );
      }
    } catch (error) {
      this.setErrorState(type, error);
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
    const { error, todoList, filterType, appState } = this.state;

    const fetchTodoState = appState.find(
      (x) => x.type === TodoAppType.FETCH_TODO,
    );

    const addTodoState = appState.find((x) => x.type === TodoAppType.ADD_TODO);

    if (fetchTodoState && fetchTodoState.isLoading) {
      return (
        <div className="h-screen flex justify-center items-center">
          <h1 className="text-4xl font-semibold text-red-400">Loading....</h1>
        </div>
      );
    }

    return (
      <div className="flex flex-col h-screen items-center">
        <h1 className="text-4xl font-semibold py-4">Todo Application</h1>
        <TodoForm
          addTodo={this.addTodo}
          ref={this.todoInputRef}
          addTodoState={addTodoState}
        />
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
