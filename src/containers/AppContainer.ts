import { connect } from 'react-redux';
import { IAppState } from '@/store/actions/actionTypes';

import App from '../app';

const mapStateToProps = (state: IAppState, ownProps: any) => ({
  state: state,
});

const mapDispatchToProps = () => ({});

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const AppContainer = connectToStore(App);

export default AppContainer;
