import React from 'react';
import { Text, StyleSheet, FlatList, View } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', key: '1', age: 20 },
        { name: 'Friend #2', key: '2', age: 45 },
        { name: 'Friend #3', key: '3', age: 32 },
        { name: 'Friend #4', key: '4', age: 27 },
        { name: 'Friend #5', key: '5', age: 53 },
        { name: 'Friend #6', key: '6', age: 30 },
        { name: 'Friend #7', key: '7', age: 21 },
        { name: 'Friend #8', key: '8', age: 42 },
        { name: 'Friend #9', key: '9', age: 62 },
    ];

    return (
        <View>
            <Text>List Screen--</Text>
            <FlatList 
                //horizontal
                keyExtractor={friend => friend.name}
                data={friends}
                renderItem={({item, index}) => { 
                    console.log(item);
                    // element === { item: { name: 'Friend #1' }, index: 0 }
                    return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;