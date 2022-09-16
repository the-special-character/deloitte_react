import React, { FormEvent, forwardRef, memo } from 'react';

type Props = {
  addTodo: (event: FormEvent<HTMLFormElement>) => void;
};

const TodoForm = forwardRef<HTMLInputElement, Props>(
  ({ addTodo }: Props, ref) => {
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
        <button className="btn rounded-l-none" type="submit">
          Add Todo
        </button>
      </form>
    );
  },
);

export default memo(TodoForm);
