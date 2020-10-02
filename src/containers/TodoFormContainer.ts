import { connect } from 'react-redux';
import { IAppState } from '@/store/actions/actionTypes';

import TodoForm from '../components/TodoForm';

const mapStateToProps = (state: IAppState, ownProps: any) => ({});

const mapDispatchToProps = () => ({});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const TodoFormContainer = connectToStore(TodoForm);

export default TodoFormContainer;
