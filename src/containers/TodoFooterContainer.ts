import { connect } from 'react-redux';
import { IAppState } from '@/store/actions/actionTypes';

import TodoFooter from '../components/TodoFooter';

const mapStateToProps = (state: IAppState, ownProps: any) => ({});

const mapDispatchToProps = () => ({});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const TodoFooterContainer = connectToStore(TodoFooter);

export default TodoFooterContainer;
