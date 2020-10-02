import { connect } from 'react-redux';
import { IAppState } from '@/store/actions/actionTypes';

import TodoList from '../components/TodoList';

const mapStateToProps = (state: IAppState, ownProps: any) => ({
  state: state,
});

const mapDispatchToProps = () => ({});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const TodoListContainer = connectToStore(TodoList);

export default TodoListContainer;
