import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={24} color="grey" />
      <TextInput style={styles.inputSearch} ></TextInput>
      <Ionicons name="camera-outline" size={24} color="grey" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#c0c0bf70",
    gap: 3,
    marginLeft: 5
  },
  inputSearch: {
    borderBottomWidth: 1,
    flex: 1
  }
})