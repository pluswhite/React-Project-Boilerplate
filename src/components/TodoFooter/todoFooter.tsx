import React, { FC } from 'react';
import classnames from 'classnames';

import { Actions, ITodo } from '@store/actions/actionTypes';
import { VisibilityType } from '@constants/todos';
import { TodoActions } from '@store/actions/actions';

import './todoFooter.scss';

export interface ITodoFooter {
  todos: ITodo[];
  visibility: VisibilityType;
  dispatch: (action: TodoActions) => void;
}

const TodoFooter: FC<ITodoFooter> = (props: ITodoFooter) => {
  const { todos, visibility, dispatch, ...restProps } = props;
  const isAllSelected = classnames({
    selected: visibility === VisibilityType.ALL,
  });
  const isActiveSelected = classnames({
    selected: visibility === VisibilityType.ACTIVE,
  });
  const isCompletedSelected = classnames({
    selected: visibility === VisibilityType.COMPLETED,
  });

  const isShowClearButton = todos.some((todo) => todo.isCompleted);
  const itemLeftCount = todos.filter((todo) => !todo.isCompleted).length;

  const handleVisibilityChange = (visibility: VisibilityType) => {
    dispatch({
      type: Actions.CHANGE_VISIBILITY,
      payload: {
        visibility,
      },
    });
  };

  const handleClearCompleted = () => {
    dispatch({
      type: Actions.CLEAR_COMPLETED,
    });
  };

  if (todos.length === 0) {
    return null;
  }

  return (
    <footer className="footer" {...restProps}>
      <span className="todo-count">
        <strong>{itemLeftCount}</strong> item left
      </span>
      <ul className="filters">
        <li onClick={() => handleVisibilityChange(VisibilityType.ALL)}>
          <a href="#/all" className={isAllSelected}>
            All
          </a>
        </li>
        <li onClick={() => handleVisibilityChange(VisibilityType.ACTIVE)}>
          <a href="#/active" className={isActiveSelected}>
            Active
          </a>
        </li>
        <li onClick={() => handleVisibilityChange(VisibilityType.COMPLETED)}>
          <a href="#/completed" className={isCompletedSelected}>
            Completed
          </a>
        </li>
      </ul>
      {isShowClearButton && (
        <button
          className="clear-completed"
          onClick={() => handleClearCompleted()}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default TodoFooter;
