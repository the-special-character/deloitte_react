import React, { memo, useContext } from 'react';
import { TodoContext } from '../../context/todoContext';
import TodoListItem from './todoListItem';
import { AppState, FilterType, TodoItem } from './todoTypes';

type Props = {};

const TodoList = ({}: Props) => {
  const { todoList, toggleCompleteTodo, deleteTodo } = useContext(TodoContext);

  return (
    <ul className="w-full flex flex-col gap-4 flex-1">
      {todoList.map((todoItem) => {
        // const updateTodoItemState = updateTodoState?.find(
        //   (x) => x.id === todoItem.id,
        // );
        // const deleteTodoItemState = deleteTodoState?.find(
        //   (x) => x.id === todoItem.id,
        // );
        return (
          <TodoListItem
            key={todoItem.id}
            todoItem={todoItem}
            deleteTodo={deleteTodo}
            toggleCompleteTodo={toggleCompleteTodo}
            // updateTodoState={unde}
            // deleteTodoState={deleteTodoItemState}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
