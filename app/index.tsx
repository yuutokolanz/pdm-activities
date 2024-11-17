import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '@/src/components/Header'
import ProdList from '@/src/components/productsList'
import Footer from '@/src/components/Footer'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <ProdList></ProdList>
      <Footer></Footer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgrey",
    flex: 1,
    justifyContent: "space-between"
  }
})