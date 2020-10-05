import { VisibilityType } from '@constants/todos';
import { TodoActions } from '../actions/actions';
import { Actions, IVisibilityFilterState } from '../actions/actionTypes';

export const initialState: IVisibilityFilterState = {
  visibility: VisibilityType.ALL,
};

const visibilityFitlerReducer = (
  state: IVisibilityFilterState = initialState,
  action: TodoActions,
): IVisibilityFilterState => {
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
