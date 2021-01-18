import React from 'react';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Emmanuel';

  return (
    <SafeAreaView>
      <Text style={styles.header}>Getting started with React Native!</Text>
      <Text style={styles.subheader}>My name is {name}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 45
  },
  subheader: {
    fontSize: 20
  }
});

export default ComponentsScreen;