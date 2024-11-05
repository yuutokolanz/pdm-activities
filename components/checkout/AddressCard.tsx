import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import { Ionicons } from '@expo/vector-icons'

type AddresCardProps = {
  children: ReactNode;
}

export default function AddressCard({children}: AddresCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <Ionicons name='location-outline' color={"#EE4D2D"} size={24}/>
        <Text style={styles.text}>Endereço de Entrega</Text>
      </View>
      <View style={styles.container2}>
        <View>
          {children}
        </View>
          <Ionicons name="chevron-forward" size={24} color="grey" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#FFF",
    width: "100%",
    padding: 8,
    height: 95
  },
  text: {
    fontSize: 17
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginLeft: 25
  }
})