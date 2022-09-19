import React, { FormEvent, forwardRef, memo } from 'react';
import cn from 'classnames';
import { AppState } from './todoTypes';

type Props = {
  addTodo: (event: FormEvent<HTMLFormElement>) => void;
  addTodoState?: AppState;
};

const TodoForm = forwardRef<HTMLInputElement, Props>(
  ({ addTodo, addTodoState }: Props, ref) => {
    console.log('render TodoForm');
    return (
      <form onSubmit={addTodo}>
        <label htmlFor="todoInput" hidden>
          Todo Text
        </label>
        <input
          type="text"
          ref={ref}
          id="todoInput"
          required
          placeholder="write yout todo here.."
        />
        <button
          disabled={addTodoState?.isLoading}
          className={cn('btn rounded-l-none', {
            'bg-slate-400 hover:bg-slate-400 cursor-wait':
              addTodoState?.isLoading,
          })}
          type="submit"
        >
          Add Todo
        </button>
      </form>
    );
  },
);

export default memo(TodoForm);
