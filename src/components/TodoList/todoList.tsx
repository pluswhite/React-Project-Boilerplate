import React, { ChangeEvent, FC, useRef } from 'react';

import TodoItem from '../TodoItem';
import './todoList.scss';
import { Actions, ITodo } from '@/store/actions/actionTypes';

export interface ITodoList {
  todos: ITodo[];
  handleTodoUpdate?: (event: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove?: (id: string) => void;
  handleTodoComplete?: (id: string) => void;
  handleTodoBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
}

// TodoItem Interface
const TodoList: FC = (props: ITodoList) => {
  const {
    state: { todos },
    dispatch,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTodoToggleAll = () => {
    console.log(inputRef.current?.checked);
    dispatch({
      type: Actions.TOGGLE_ALL,
      payload: {
        toggleStatus: !inputRef.current?.checked,
      },
    });
  };

  return (
    <div className="main">
      <input
        ref={inputRef}
        type="checkbox"
        id="toggle-all"
        className="toggle-all"
      />
      <label htmlFor="toggle-all" onClick={() => handleTodoToggleAll()}>
        Mark all as complete
      </label>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
