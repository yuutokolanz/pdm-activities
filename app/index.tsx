import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

export default function Home() {
  return (
    <View style={styles.container} >
      <Stack.Screen options={{
        title: "Home"
      }} />
      <Text style={styles.text} >Home</Text>
      <Link href={"/About"} style={[styles.text, styles.links]} >About</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  links: {
    color: "red",
  },
  text: {
    fontSize: 25
  },
})