import React, { ChangeEvent, FC } from 'react';
import { TodoActions } from '@store/actions/actions';
import { Actions, ITodo } from '@store/actions/actionTypes';

import './todoItem.scss';

export interface ITodoItem {
  todo: ITodo;
  handleTodoUpdate?: (event: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove?: (id: string) => void;
  handleTodoComplete?: (id: string) => void;
  handleTodoBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  dispatch: (action: TodoActions) => void;
}

const TodoItem: FC<ITodoItem> = (props: ITodoItem) => {
  const { todo, handleTodoBlur, dispatch, ...restProps } = props;

  const handleTodoToggle = () => {
    dispatch({
      type: Actions.TOGGLE_ITEM,
      payload: {
        id: todo.id,
      },
    });
  };

  const handleTodoRemove = () => {
    dispatch({
      type: Actions.DELETE_ITEM,
      payload: {
        id: todo.id,
      },
    });
  };

  const handleTodoUpdate = (
    event: ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    dispatch({
      type: Actions.UPDATE_ITEM,
      payload: {
        id,
        text: event.target.value,
      },
    });
  };

  return (
    <div className="view todo-item" {...restProps}>
      <input
        type="checkbox"
        checked={todo.isCompleted ? true : false}
        className="toggle"
        onClick={handleTodoToggle}
      />
      <label>{todo.text}</label>
      <button className="destroy" onClick={handleTodoRemove}></button>
      <input
        className="edit"
        value={todo.text}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          handleTodoUpdate(event, todo.id)
        }
        onBlur={handleTodoBlur}
      />
    </div>
  );
};

export default TodoItem;
