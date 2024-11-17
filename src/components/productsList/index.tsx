import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import data from "../../services/DATA.json";

export default function ProdList() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <FlatList
        contentContainerStyle={styles.list}
        numColumns={2}
        data={data}
        renderItem={({item}) => (
            <View style={styles.prodCard}>
              <Image
                style={styles.image} 
                source={{uri: item.imgUri,}}
              />
              <Text style={styles.cardText}>{item.productName}</Text>
              <Text style={styles.cardText}>{item.price}</Text>
            </View>
        )}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80
  },
  contentContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  prodCard: {
    height: 140,
    width: 140,
    marginHorizontal: 5,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    gap: 5
  },
  cardText: {
    textAlign: "center"
  },
  list: {
    marginVertical: 10,
    gap: 20
  }
})