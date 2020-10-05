import { connect } from 'react-redux';

import TodoFooter from '../components/TodoFooter';

const mapStateToProps = (state: any, ownProps: any) => ({
  todos: state.todos.todos,
  visibility: state.visibilityFilter.visibility,
});

const mapDispatchToProps = () => ({});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const TodoFooterContainer = connectToStore(TodoFooter);

export default TodoFooterContainer;
