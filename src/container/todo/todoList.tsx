import React, { memo } from 'react';
import TodoListItem from './todoListItem';
import { FilterType, TodoItem } from './todoTypes';

type Props = {
  toggleCompleteTodo: (todoItem: TodoItem) => void;
  deleteTodo: (todoItem: TodoItem) => void;
  todoList: TodoItem[];
  filterType: FilterType;
};

const TodoList = ({
  todoList,
  filterType,
  toggleCompleteTodo,
  deleteTodo,
}: Props) => {
  console.log('render todolist');
  return (
    <ul className="w-full flex flex-col gap-4 flex-1">
      {todoList.map((todoItem) => {
        if (
          filterType === FilterType.all ||
          (filterType === FilterType.pending && todoItem.isDone === false) ||
          (filterType === FilterType.complete && todoItem.isDone === true)
        ) {
          return (
            <TodoListItem
              key={todoItem.id}
              todoItem={todoItem}
              deleteTodo={deleteTodo}
              toggleCompleteTodo={toggleCompleteTodo}
            />
          );
        }
        return null;
      })}
    </ul>
  );
};

export default memo(TodoList);
