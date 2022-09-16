import React, { memo } from 'react';
import { TodoItem } from './todoTypes';

type Props = {
  todoItem: TodoItem;
  toggleCompleteTodo: (todoItem: TodoItem) => void;
  deleteTodo: (todoItem: TodoItem) => void;
};

const TodoListItem = ({ todoItem, toggleCompleteTodo, deleteTodo }: Props) => {
  console.log('todoList item');
  return (
    <li key={todoItem.id} className="flex items-center mx-4">
      <input
        type="checkbox"
        checked={todoItem.isDone}
        onChange={() => toggleCompleteTodo(todoItem)}
      />
      <p
        className="flex-1 px-4"
        style={{
          textDecoration: todoItem.isDone ? 'line-through' : 'none',
        }}
      >
        {todoItem.text}
      </p>
      <button type="button" onClick={() => deleteTodo(todoItem)}>
        Delete
      </button>
    </li>
  );
};

export default memo(TodoListItem);
