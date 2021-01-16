import React, {useContext }  from 'react';
import { StyleSheet, View,Text, Image, FlatList } from 'react-native';
import { AmiiboContext } from '../../context/amiiboContext';


const AmiiboList = () => {
  const { amiiboData } = useContext(AmiiboContext);

  if(amiiboData.length === 0) {
    return <View style={{padding: 16}}>
      <Text style={styles.header}>Plese search for an Amiibo</Text>
    </View>
  }


  if (amiiboData.amiibo) {
    return <View style={{padding: 16}}>
      <FlatList
      data={amiiboData.amiibo}
      renderItem={({item}) => <Image source={{uri: item.image}}
      style={{width: 400, height: 600}}
      />}
      />
  </View>
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 45
  }
});

export default AmiiboList;