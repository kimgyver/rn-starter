import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LayoutScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle}/>
            <View style={styles.viewTwoParentStyle}>
                <View style={styles.viewTwoStyle}/>
            </View>
            <View style={styles.viewThreeStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        //marginTop: 50
        //alignSelf: 'flex-end',
        //top: 50
    },
    viewTwoParentStyle: {
        height: 100,
        justifyContent: 'flex-end'
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    }
});

export default LayoutScreen;