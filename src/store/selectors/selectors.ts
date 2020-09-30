import { IAppState } from '../actions/actionTypes';

export const getTodoList = (store: IAppState) => store.todos;

export const getTodoById = (store: IAppState, id: string) =>
  store.todos.find((item) => item.id === id);
