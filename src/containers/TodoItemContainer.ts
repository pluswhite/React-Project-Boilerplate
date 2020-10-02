import { connect } from 'react-redux';
import { IAppState } from '@/store/actions/actionTypes';

import TodoItem from '../components/TodoItem';

const mapStateToProps = (state: IAppState, ownProps: any) => ({});

const mapDispatchToProps = () => ({});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const TodoItemContainer = connectToStore(TodoItem);

export default TodoItemContainer;
