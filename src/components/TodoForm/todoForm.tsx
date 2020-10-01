import { Actions, ITodo } from '@/store/actions/actionTypes';
import React, {
  ChangeEvent,
  KeyboardEvent,
  FC,
  useRef,
  useState,
  useContext,
} from 'react';
import { nanoid } from 'nanoid';

import './todoForm.scss';

export interface ITodoForm {
  // todos: ITodo[];
  handleTodoCreate?: (todo: ITodo) => void;
}
const TodoForm: FC<ITodoForm> = (props: ITodoForm) => {
  // const { dispatch } = useContext(AppContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const [formState, setFormState] = useState('');

  const handleTodoCreate = (todo: ITodo) => {
    console.log(todo);
    // dispatch({
    //   type: Actions.CREATE_ITEM,
    //   payload: todo,
    // });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState(event.target.value);
  };

  const handleInputEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const newTodo: ITodo = {
        id: nanoid(),
        text: formState,
        isCompleted: false,
      };

      // Create new todo item
      handleTodoCreate(newTodo);

      // Reset the input field
      if (inputRef && inputRef.current) {
        inputRef.current.value = '';
        setFormState('');
      }
    }
  };

  return (
    <div className="todo-form">
      <input
        className="new-todo"
        ref={inputRef}
        type="text"
        placeholder="What needs to be done?"
        onChange={(event) => handleInputChange(event)}
        onKeyPress={(event) => handleInputEnter(event)}
      />
    </div>
  );
};

export default TodoForm;
