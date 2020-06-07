import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const ImageDetail = ({imageSource, title, score}) => {
    return <View>
        <Image source={imageSource}/>
        <Text>{title}</Text>
        <Text>Image Score - {score}</Text>
    </View>;
}

const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
});
  
export default ImageDetail;