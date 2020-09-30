import { VisibilityType } from 'src/constants/todos';
import { Actions, ITodo } from './actionTypes';

export const nextTodoId = 0;

export const addTodo = (todo: ITodo) => ({
  type: Actions.CREATE_ITEM,
  payload: todo,
});

export const toggleTodo = (id: string) => ({
  type: Actions.TOGGLE_ITEM,
  payload: {
    id,
  },
});

export const setFilter = (filter: VisibilityType) => ({
  type: Actions.CHANGE_VISIBILITY,
  payload: {
    filter,
  },
});
