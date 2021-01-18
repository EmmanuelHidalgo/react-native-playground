import React, {useContext }  from 'react';
import { StyleSheet, View,Text, Image, FlatList, Dimensions } from 'react-native';
import { AmiiboContext } from '../../context/amiiboContext';


const AmiiboList = () => {
  const { amiiboData } = useContext(AmiiboContext);
  const { width } = Dimensions.get('screen');

  const imageW = width * 0.7;
  const imageH = imageW * 1.54;

  if(amiiboData.length === 0) {
    return <View style={{padding: 16}}>
      <Text style={styles.header}>Plese search for an Amiibo</Text>
    </View>
  }


  if (amiiboData.amiibo) {
    return <View>
      <FlatList
      data={amiiboData.amiibo}
      keyExtractor={(_, index) => index.toString()}
      pagingEnabled
      renderItem={({item}) =>
        <View style={{width, justifyContent:'center', alignItems:'center'}}>
          <Image source={{uri: item.image}}
            style={{
              width: imageW,
              height: imageH,
              resizeMode: 'stretch',
              borderRadius: 16
            }}
          />
        </View>
      }
      />
  </View>
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: '#fff'
  }
});

export default AmiiboList;