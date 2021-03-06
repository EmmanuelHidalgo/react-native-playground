import React from 'react';
import { Text, StyleSheet, View, SafeAreaView } from 'react-native';
import { AmiiboProvider } from '../context/amiiboContext';

import SearchBar from '../screens/components/SearchBar';
import  AmiiboList from '../screens/components/AmiiboList';


const AmiiboScreen = () => {
  return (
    <AmiiboProvider>
      <SafeAreaView style={{flex: 1}}>
            <SearchBar />
            <AmiiboList />
      </SafeAreaView>
    </AmiiboProvider>
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

export default AmiiboScreen;