import React, { Component } from 'react';
import Home from './HomeComponent';
import { EVENTS } from '../shared/events';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: EVENTS
        };
    }

    render() {
        return <Home events={this.state.events} />;
    }
}

export default Main;