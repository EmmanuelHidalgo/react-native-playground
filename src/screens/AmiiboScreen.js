import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { AmiiboProvider } from '../context/amiiboContext';

import SearchBar from '../screens/components/SearchBar';
import  AmiiboList from '../screens/components/AmiiboList';


const AmiiboScreen = () => {
  return (
    <AmiiboProvider>
      <View style={{flex: 1, width: '100%'}}>
          <View>
            <SearchBar />
          </View>
          <View>
            <AmiiboList />
          </View>
      </View>
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