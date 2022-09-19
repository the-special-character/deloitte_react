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

  setLoadingState = (type: TodoAppType, id: number = -1) => {
    this.setState(({ appState }) => {
      return {
        appState: [...appState, { type, isLoading: true, hasError: false, id }],
      };
    });
  };

  setSuccessState = (type: TodoAppType, id: number = -1) => {
    this.setState(({ appState }) => {
      return {
        appState: appState.filter((x) => !(x.type === type && x.id === id)),
      };
    });
  };

  setErrorState = (type: TodoAppType, error: Error, id: number = -1) => {
    this.setState(({ appState }, props) => {
      return {
        appState: appState.map((x) => {
          if (x.type === type && x.id === id) {
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
    const type = TodoAppType.UPDATE_TODO;
    try {
      this.setLoadingState(type, item.id);
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
      this.setSuccessState(type, item.id);
    } catch (error) {
      this.setErrorState(type, error, item.id);
    }
  };

  deleteTodo = async (item: TodoItem) => {
    const type = TodoAppType.DELETE;
    try {
      this.setLoadingState(type, item.id);
      await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'DELETE',
      });

      this.setState(({ todoList }, props) => {
        const index = todoList.findIndex((x) => x.id === item.id);
        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        };
      });
      this.setSuccessState(type, item.id);
    } catch (error) {
      this.setErrorState(type, error, item.id);
    }
  };

  filterTodos = (filterType: FilterType) => {
    this.loadTodo(filterType);
  };

  removeError = (error: AppState) => {
    this.setState(({ appState }) => {
      return { appState: appState.filter((x) => x.id !== error.id) };
    });
  };

  render() {
    const { error, todoList, filterType, appState } = this.state;

    const fetchTodoState = appState.find(
      (x) => x.type === TodoAppType.FETCH_TODO,
    );

    const addTodoState = appState.find((x) => x.type === TodoAppType.ADD_TODO);

    const updateTodoState = appState.filter(
      (x) => x.type === TodoAppType.UPDATE_TODO,
    );

    const deleteTodoState = appState.filter(
      (x) => x.type === TodoAppType.DELETE,
    );

    const errors = appState.filter((x) => x.hasError);

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

        <TodoList
          toggleCompleteTodo={this.toggleCompleteTodo}
          deleteTodo={this.deleteTodo}
          todoList={todoList}
          updateTodoState={updateTodoState}
          deleteTodoState={deleteTodoState}
        />
        <TodoFilter filterTodos={this.filterTodos} filterType={filterType} />

        <div className="w-full">
          {errors.map((x, i) => (
            <div
              key={x.id}
              role="alert"
              className="p-4 fixed right-0 max-w-screen-sm min-w-[320px]"
              style={{
                top: 100 * i,
              }}
            >
              <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 flex justify-between">
                <span>Danger</span>
                <button type="button" onClick={() => this.removeError(x)}>
                  X
                </button>
              </div>
              <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>{x.errorMessage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Todo;
