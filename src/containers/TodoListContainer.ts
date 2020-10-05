import { connect } from 'react-redux';

import TodoList from '@components/TodoList';

const mapStateToProps = (state: any, ownProps: any) => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = () => ({});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const TodoListContainer = connectToStore(TodoList);

export default TodoListContainer;
