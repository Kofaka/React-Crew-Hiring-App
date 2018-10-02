import React, {Component} from "react";
import {connect} from 'react-redux';

import {getUsersInfo} from '../actions/api';
import PersonnelCard from './PersonnelCard';

class AppContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            appliedPersonnels: [],
            interviewingPersonnels: [],
            hiredPersonnels: [],
        };

        this.proceedToAppliedStage = this.proceedToAppliedStage.bind(this);
        this.proceedToInterviewStage = this.proceedToInterviewStage.bind(this);
        this.proceedToHiredStage = this.proceedToHiredStage.bind(this);
    }

    componentDidMount() {
        this.props.getUsersInfo();
    }

    proceedToAppliedStage(user) {
        console.log('Applied:', user);
        // TODO: setup User to Applied Stage thru state or via sending info to server
        let appliedPersonnels = this.state.appliedPersonnels.push(user);
        // TODO: also remove user from Interview Stage
        this.setState({appliedPersonnels});
        console.log(this.state);
    }

    proceedToInterviewStage(user) {
        console.log('Interview:', user);
        // TODO: setup User to Interview Stage thru state or via sending info to server
        let interviewingPersonnels = this.state.interviewingPersonnels.push(user);
        this.setState({interviewingPersonnels});
    }

    proceedToHiredStage(user) {
        console.log('Hired:', user);
        // TODO: setup User to Hired Stage thru state or via sending info to server
        let hiredPersonnels = this.state.hiredPersonnels.push(user);
        this.setState({hiredPersonnels});
    }

    render() {
        const {usersInfo} = this.props;
        console.log(this.state);

        let AppliedPersonnels = usersInfo.map((item, index) => {
                // TODO: add condition to check users application stage via userId
                const {login: {username}} = item;
                return (
                    <PersonnelCard
                        key={index}
                        data={item}
                        nextHandler={() => this.proceedToInterviewStage(username)}
                    />
                )
            }
        );
        let InterviewingPersonnels = usersInfo.map((item, index) => {
                // TODO: add condition to check users application stage via userId
                const {login: {username}} = item;
                return (
                    <PersonnelCard
                        key={index}
                        data={item}
                        prevHandler={() => this.proceedToAppliedStage(username)}
                        nextHandler={() => this.proceedToHiredStage(username)}
                    />
                )
            }
        );
        let HiredPersonnels = usersInfo.map((item, index) => {
                // TODO: add condition to check users application stage via userId
                const {login: {username}} = item;
                return (
                    <PersonnelCard
                        key={index}
                        data={item}
                        prevHandler={() => this.proceedToInterviewStage(username)}
                    />
                )
            }
        );

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
                        {AppliedPersonnels}
                        {InterviewingPersonnels}
                        {HiredPersonnels}
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