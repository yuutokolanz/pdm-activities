import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SearchBar from './SearchBar'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
  return (
    <View style={styles.container}>
      <SearchBar></SearchBar>
      <Ionicons name="cart-outline" size={24} color="#ff9700" />
      <Ionicons name="chatbubbles-outline" size={24} color="#ff9700" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 40,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    gap: 15
  }
})