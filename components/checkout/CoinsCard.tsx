import { View, Text, StyleSheet, Switch } from 'react-native'
import React, { useState } from 'react'
import Foundation from '@expo/vector-icons/Foundation';

export default function CoinsCard() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.containerInside}>
      <Foundation name="bitcoin-circle" size={32} color="#F7BA45" />
        <Text style={styles.text}>Sem moedas para aplicar</Text>
      </View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#011a75" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}  
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    paddingHorizontal: 10,
    paddingVertical: 2
  },
  containerInside: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  text:{
    fontSize: 18
  },
  button: {
    backgroundColor: "#ED4D2D",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 64,
    paddingHorizontal: 20
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
})