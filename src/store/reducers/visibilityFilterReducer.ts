import { VisibilityType } from '@/constants/todos';
import { TodoActions } from '../actions/actions';
import { Actions, IAppState } from '../actions/actionTypes';

export const initialState: IAppState = {
  todos: [],
  newTodo: '',
  editTodo: '',
  visibility: VisibilityType.ALL,
};

const visibilityFitlerReducer = (
  state: IAppState = initialState,
  action: TodoActions,
) => {
  console.log(action);
  switch (action.type) {
    case Actions.CHANGE_VISIBILITY: {
      return {
        ...state,
        visibility: action.payload.visibility,
      };
    }
    default:
      return state;
  }
};

export default visibilityFitlerReducer;
