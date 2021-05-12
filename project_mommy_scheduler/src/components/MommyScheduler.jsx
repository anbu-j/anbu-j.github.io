import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

class MommyScheduler extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isChallengeReady: true,
          isActReady: false,
          isPriorityReady: true,
          isSummaryReady: false,
          isSchedulerReady: true,
          isActivationReady: false
        };
    }

    render() {
        return (
            
            <div className="Container1">
                <h1>Mommy Scheduler</h1>
                <div>
                <Navbar collapseOnSelect fixed='top' expand='lg' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav>
                                {/*<Nav.Link href='/'>Mommy Scheduler</Nav.Link>*/}
                                <Nav.Link href='/MommyChallenges'>Mommy Challenges</Nav.Link>
                                <Nav.Link href='/MommyActivities'>Mommy Activities</Nav.Link>
                                <Nav.Link href='/MommyReview'>Schedule Review</Nav.Link>
                            </Nav>
                    {/*<Link to='/MommyChallenges'>Mommy Challenges</Link>
                    <Link to='/MommyActivities'>Mommy Activities</Link>
                    <Link to='/MommyReview'>Mommy Review</Link>    */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </div>
                <div className="InitialSetup">
                   
                    <label className="labels">
                        <input
                            name="isChallengeReady"
                            type="checkbox"
                            readOnly={true}
                            checked={this.state.isChallengeReady}
                        > 
                        </input>
                        <input
                            className="labelText"
                            type="textbox"
                            readOnly={true}
                            value="Identify Challenges">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
                    </label>
                    <label className="labels">
                        <input
                            name="isActReady"
                            type="checkbox"
                            readOnly={true}
                            checked={this.state.isActReady}
                        > 
                        </input>
                        <input
                            className="labelText"
                            type="textbox"
                            readOnly={true}
                            value="Identify activities part of the challenges">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
                    </label>

                    
                    <label className="labels">
                        <input
                            name="isPriorityReady"
                            type="checkbox"
                            readOnly={true}
                            checked={this.state.isPriorityReady}
                        > 
                        </input>
                        <input
                            className="labelText"
                            type="textbox"
                            readOnly={true}
                            value="Prioritize activities and time">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
                    </label>
                    
                    <label className="labels">
                        <input
                            name="isSummaryReady"
                            type="checkbox"
                            readOnly={true}
                            checked={this.state.isSummaryReady}
                        > 
                        </input>
                        <input
                            className="labelText"
                            type="textbox"
                            readOnly={true}
                            value="Prioritize challenges">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
                    </label>

                    <label className="labels">
                        <input
                            name="isSchedulerReady"
                            type="checkbox"
                            readOnly={true}
                            checked={this.state.isSchedulerReady}
                        > 
                        </input>
                        <input
                            className="labelText"
                            type="textbox"
                            readOnly={true}
                            value="Preview Scheduler">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
                    </label>

                    <label className="labels">
                        <input
                            name="isActivationReady"
                            type="checkbox"
                            readOnly={true}
                            checked={this.state.isActivationReady}
                        > 
                        </input>
                        <input
                            className="labelText"
                            type="textbox"
                            readOnly={true} 
                            value="Activate Scheduler">
                        </input>
                        <button
                            className="SetupButton"
                        >
                            Start
                        </button>
                    </label>
                </div>
            </div>
        );
    }
}

export default MommyScheduler;