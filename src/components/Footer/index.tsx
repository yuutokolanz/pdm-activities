import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.icons}>
        <AntDesign name="like1" size={18} color="#fc6d01" />
        <Text style={styles.iconsText}>Descobertas</Text>
      </View>
      <View style={styles.icons}>
        <Feather name="shopping-bag" size={18} color="black" />
        <Text style={styles.iconsText}>Ofertas</Text>
      </View>
      <View style={styles.icons}>
        <AntDesign name="videocamera" size={18} color="black" />
        <Text style={styles.iconsText}>Live</Text>
      </View>
      <View style={styles.icons}>
        <AntDesign name="gift" size={18} color="black" />
        <Text style={styles.iconsText}>Prêmios</Text>
      </View>
      <View style={styles.icons}>
        <AntDesign name="bells" size={18} color="black" />
        <Text style={styles.iconsText}>Notificações</Text>
      </View>
      <View style={styles.icons}>
        <AntDesign name="user" size={18} color="black" />
        <Text style={styles.iconsText}>EU</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 40,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center"
  },
  icons: {
    justifyContent: "center",
    alignItems: "center"
  },
  iconsText: {
    fontSize: 10
  }
})