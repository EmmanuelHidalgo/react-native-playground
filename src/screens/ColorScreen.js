import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, FlatList } from 'react-native';

const ColorScreen = () => {

  const [colors, setColors] = useState([]);

  const generateRandomColor = () => {
    setColors([...colors, randomRgb()]);
  }

  return (
    <View>
      <Button
        title="Add a color"
        onPress={generateRandomColor}
      />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem ={({item}) => {
          return <View style={{height: 100, width: 100, backgroundColor: item}}/>
        }}
      />
    </View>
  )
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 45
  },
  subheader: {
    fontSize: 20
  }
});

export default ColorScreen;