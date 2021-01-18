import React, { useState, useContext }  from 'react';
import { StyleSheet, View,TextInput, Button } from 'react-native';
import { AmiiboContext } from '../../context/amiiboContext';
import fetchAmiiboData from '../../api/fecthAmiiboData';


const SearchBar = () => {
  const [term, setTerm] = useState('');
  const { setAmiiboData } = useContext(AmiiboContext);

  const onChangeTerm = (e) => {
    setTerm(e);
  }

  const searchAmiibo = async () => {
    const amiiboData = await fetchAmiiboData(term);
    setAmiiboData(amiiboData);
  }
  return (
    <View style={{flexDirection: 'row', width: '100%', padding: 16}}>
      <TextInput
        value={term}
        onChangeText={onChangeTerm}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%'}}/>
        <Button
          title="Search"
          style={{width: '20%'}}
          onPress={ searchAmiibo}
        />
    </View>
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

export default SearchBar;