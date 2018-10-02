import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/api';

import AppContainer from './AppContainer';

const mapStateToProps = state => ({usersInfo: state.usersInfo});

const mapDispatchToProps = dispatch => ({actions: bindActionCreators(Actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);