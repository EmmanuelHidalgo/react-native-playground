import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../screens/components/ImageDetail';


const ImageScreen = () => {
  const places = [
    { title: "Forest", imageSource: require('../../assets/forest.jpg'), score: 9 },
    { title: "Beach", imageSource: require('../../assets/beach.jpg'),score: 1 },
    { title: "Mountain", imageSource: require('../../assets/mountain.jpg'), score: 5 }
  ]
  return <View>
      {places.map((place, index) => {
        return <ImageDetail
          key={index}
          title={place.title}
          imageSrc={place.imageSource}
          score={place.score}
        />
      })}
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

export default ImageScreen;