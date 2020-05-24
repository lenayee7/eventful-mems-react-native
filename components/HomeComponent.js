import React from 'react';
import { View, Text, Image} from 'react-native';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

function Home(props) {
    const renderEventItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.location}
            />
        );
    };

    return (
        <FlatList 
            data={props.events}
            renderItem={renderEventItem}
            keyExtractor={item => item.id.toString()}
        />
    );
    // const event = this.props.map( event => {
    //     return (
    //         <View>
    //             <Text>{event.name}</Text>
    //             <Text>{event.location}</Text>
    //              <Image
    //                 source={require('./images/bay-slay-3.jpg')}
    //               />
    //         </View>
    //     );
    // });

}

export default Home;
