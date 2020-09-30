import { VisibilityType } from 'src/constants/todos';
import { Actions, ITodo } from './actionTypes';

export type TodoActions =
  | {
      type: Actions.CREATE_ITEM;
      payload: ITodo;
    }
  | {
      type: Actions.UPDATE_ITEM;
      payload: {
        id: string;
        text: string;
      };
    }
  | {
      type: Actions.DELETE_ITEM;
      payload: {
        id: string;
      };
    }
  | {
      type: Actions.TOGGLE_ALL;
      payload: {
        toggleStatus: boolean;
      };
    }
  | {
      type: Actions.TOGGLE_ITEM;
      payload: {
        id: string;
      };
    }
  | {
      type: Actions.CLEAR_COMPLETED;
    }
  | {
      type: Actions.CHANGE_VISIBILITY;
      payload: {
        visibility: VisibilityType;
      };
    };
