import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { EVENTS } from '../shared/events';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: EVENTS
        }
    }

    static navigationOptions = {
        title: 'Home'
    };

    render() {
        const { navigate } = this.props.navigation;
        const renderEventItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.location}
                    onPress={() => navigate('EventInfo', { eventId: item.id })}
                    leftAvatar={{source: require('./images/bay-slay-3.jpg')}}
                />
            );
        };

        return (
            <FlatList 
                data={this.state.events}
                renderItem={renderEventItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Home;
