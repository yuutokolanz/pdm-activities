import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import PriceTag from './PriceTag'

type CheckoutCardProps = {
  price: number;
};

export default function CheckoutCard({price}: CheckoutCardProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Pagamento Total</Text>
        <PriceTag price={price} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>FAZER PEDIDO</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
  },
  text:{
    color: "grey",
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