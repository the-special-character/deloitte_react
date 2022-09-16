import React, { memo } from 'react';
import { FilterType } from './todoTypes';

type Props = {
  filterTodos: (ft: FilterType) => void;
};

const TodoFilter = ({ filterTodos }: Props) => {
  console.log('render todoFilter');

  return (
    <div className="flex w-full">
      <button
        className="btn rounded-none flex-1"
        type="button"
        onClick={() => filterTodos(FilterType.all)}
      >
        All
      </button>
      <button
        className="btn rounded-none  flex-1"
        type="button"
        onClick={() => filterTodos(FilterType.pending)}
      >
        Pending
      </button>
      <button
        className="btn rounded-none  flex-1"
        type="button"
        onClick={() => filterTodos(FilterType.complete)}
      >
        Completed
      </button>
    </div>
  );
};

export default memo(TodoFilter);
