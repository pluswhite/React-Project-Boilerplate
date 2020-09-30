import { VisibilityType } from '@/constants/todos';
import { TodoActions } from '../actions/actions';
import { Actions, ITodoState } from '../actions/actionTypes';

export const initialState: ITodoState = {
  todos: [
    {
      id: '111',
      text: 'Test',
      isCompleted: false,
    },
  ],
  newTodo: '',
  editTodo: '',
};

const todosReducer = (
  state: ITodoState = initialState,
  action: TodoActions,
) => {
  console.log(action);
  switch (action.type) {
    case Actions.CREATE_ITEM: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    }
    case Actions.UPDATE_ITEM: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              text: todo.text,
            };
          } else {
            return todo;
          }
        }),
      };
    }
    case Actions.DELETE_ITEM: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    case Actions.TOGGLE_ITEM: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              isCompleted: !todo.isCompleted,
            };
          } else {
            return todo;
          }
        }),
      };
    }
    case Actions.TOGGLE_ALL: {
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          isCompleted: action.payload.toggleStatus,
        })),
      };
    }
    case Actions.CLEAR_COMPLETED: {
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.isCompleted),
      };
    }
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

export default todosReducer;
