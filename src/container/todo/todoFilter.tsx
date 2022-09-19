import React, { memo } from 'react';
import cn from 'classnames';
import { FilterType } from './todoTypes';

type Props = {
  filterTodos: (ft: FilterType) => void;
  filterType: FilterType;
};

const TodoFilter = ({ filterTodos, filterType }: Props) => {
  console.log('render todoFilter');

  return (
    <div className="flex w-full">
      <button
        className={cn('btn rounded-none flex-1', {
          'bg-orange-500 hover:bg-orange-700 focus:ring-orange-400':
            filterType === FilterType.all,
        })}
        type="button"
        onClick={() => filterTodos(FilterType.all)}
      >
        All
      </button>
      <button
        className={cn('btn rounded-none flex-1', {
          'bg-orange-500 hover:bg-orange-700 focus:ring-orange-400':
            filterType === FilterType.pending,
        })}
        type="button"
        onClick={() => filterTodos(FilterType.pending)}
      >
        Pending
      </button>
      <button
        className={cn('btn rounded-none flex-1', {
          'bg-orange-500 hover:bg-orange-700 focus:ring-orange-400':
            filterType === FilterType.complete,
        })}
        type="button"
        onClick={() => filterTodos(FilterType.complete)}
      >
        Completed
      </button>
    </div>
  );
};

export default memo(TodoFilter);
