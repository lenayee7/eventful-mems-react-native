import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { EVENTS } from '../shared/events';

function RenderEvent({event}) {
    if(event) {
        return (
            <Card
                featuredTitle={event.name}
                image={require('./images/bay-slay-3.jpg')}>
                <Text style={{margin: 10}}>
                    {event.location}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class EventInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: EVENTS
        };
    }

    static navigationOptions = {
        title: 'Event Info'
    };

    render() {
        const eventId = this.props.navigation.getParam('eventId');
        const event = this.state.events.filter(event => event.id === eventId)[0];
        return <RenderEvent event={event} />;
    }

}

export default EventInfo;