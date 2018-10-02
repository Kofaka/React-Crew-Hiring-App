import React, {Component} from "react";
import {connect} from 'react-redux';

import {getUsersInfo} from '../actions/api';
import AppliedPersonel from './AppliedPersonel';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersInfo();
    }

    render() {
        const {usersInfo} = this.props;

        let AppliedPersonels = usersInfo.map((item, index) => <AppliedPersonel key={index} data={item}/>); //TODO: override wit React refs
        let InterviewingPersonels = null;
        let HiredPersonels = null;

        return (
            <div>
                <h1>Crew personnel hiring process</h1>

                <section>
                    <div>
                        <h2>Applied</h2>
                        <h2>Interviewing</h2>
                        <h2>Hired</h2>
                    </div>
                    <div>
                        {AppliedPersonels}
                        {InterviewingPersonels}
                        {HiredPersonels}
                    </div>
                </section>
            </div>
        );
    }
}

export default connect(
    state => ({
        usersInfo: state.users.usersInfo,
        usersInfoPending: state.users.pending,
    }),
    dispatch => ({
        getUsersInfo: () => dispatch(getUsersInfo())
    })
)(AppContainer);