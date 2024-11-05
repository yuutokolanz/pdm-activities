import { View, Text, Alert, StyleSheet } from "react-native";
import React from "react";
import FullScreen from "@/components/containers/FullScreen";
import HeaderHidden from "@/components/headers/HeaderHidden";
import HeaderWithTitle from "@/components/headers/HeaderWithTitle";
import AddressCard from "@/components/checkout/AddressCard";
import CheckoutCard from "@/components/checkout/CheckoutCard";
import CoinsCard from "@/components/checkout/CoinsCard";

export default function checkout() {
  const handleCheckout = () => {
    Alert.alert("Sucesso!", "O cartão passou! Que beleza hein!");
  };

  return (
    <FullScreen center>
      {/* <HeaderHidden /> */}
      <HeaderWithTitle title="Comprar!" />

      <AddressCard>
        <Text>Rua Rua Rua</Text>
        <Text>Bairro Bairro Bairro</Text>
        <Text>Cidade Cidade Cidade</Text>
      </AddressCard>

      <View style={styles.container}>
        <CoinsCard></CoinsCard>
        <CheckoutCard price={250} ></CheckoutCard>
      </View>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 5
  }
})
