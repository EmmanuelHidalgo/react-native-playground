import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';


const ImageDetail = ({ title, imageSrc, score }) => {
  return <View>
    <Image  source={imageSrc}/>
    <Text>{title}</Text>
    <Text>Image Score - {score}</Text>
  </View>
}

const styles = StyleSheet.create({
  header: {
    fontSize: 45
  },
  subheader: {
    fontSize: 20
  }
});

export default ImageDetail;