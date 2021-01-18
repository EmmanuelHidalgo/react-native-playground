import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, SafeAreaView } from 'react-native';

const CounterScreen = () => {
  const [currentCounter, setCurrentCounter] = useState(0);

  const increaseCounter = () => {
    setCurrentCounter(currentCounter + 1)
  }

  const decreaseCounter = () => {
    setCurrentCounter(currentCounter - 1)
  }

  return (
    <SafeAreaView>
      <Button
      onPress={increaseCounter}
      title="Increase"
      />
      <Button
      onPress={decreaseCounter}
      title="Decrease"
    />
      <Text style={styles.counterStyle}>Current Count: {currentCounter}</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  counterStyle: {
    fontSize: 45
  }
});

export default CounterScreen;