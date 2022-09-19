import React, { memo } from 'react';
import TodoListItem from './todoListItem';
import { AppState, FilterType, TodoItem } from './todoTypes';

type Props = {
  toggleCompleteTodo: (todoItem: TodoItem) => void;
  deleteTodo: (todoItem: TodoItem) => void;
  todoList: TodoItem[];
  updateTodoState?: AppState[];
  deleteTodoState?: AppState[];
};

const TodoList = ({
  todoList,
  toggleCompleteTodo,
  deleteTodo,
  updateTodoState,
  deleteTodoState,
}: Props) => {
  console.log('render todolist');
  return (
    <ul className="w-full flex flex-col gap-4 flex-1">
      {todoList.map((todoItem) => {
        const updateTodoItemState = updateTodoState?.find(
          (x) => x.id === todoItem.id,
        );
        const deleteTodoItemState = deleteTodoState?.find(
          (x) => x.id === todoItem.id,
        );
        return (
          <TodoListItem
            key={todoItem.id}
            todoItem={todoItem}
            deleteTodo={deleteTodo}
            toggleCompleteTodo={toggleCompleteTodo}
            updateTodoState={updateTodoItemState}
            deleteTodoState={deleteTodoItemState}
          />
        );
      })}
    </ul>
  );
};

export default memo(TodoList);
