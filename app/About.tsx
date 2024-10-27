import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

export default function About() {
  const firstRandomItem: number = Math.trunc(Math.random() * 10);
  const secondRandomItem: number = Math.trunc(Math.random() * 10);
  const handlePush = (itemId: number) => {
    router.push({
      pathname: "/[id]",
      params: {
        id: itemId,
      },
    });
  }

  return (
    <View style={styles.container} >
      <Text style={styles.text} >About</Text>

      <View style={styles.itemList}>
          <Link style={styles.links} href="/">
            Home
          </Link>

          <Text style={styles.listTitle}>Items:</Text>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Item {firstRandomItem}:</Text>

            <Button
              onPress={() => handlePush(firstRandomItem)}
              title="item 1"
            />
          </View>

          <View style={styles.item}>
            <Text style={styles.itemTitle}>Item {secondRandomItem}:</Text>

            <Button
              onPress={() => handlePush(secondRandomItem)}
              title="item 2"
            />
          </View>
        </View>
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
    fontSize: 20
  },
  text: {
    fontSize: 25
  },
  itemList: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  listTitle: {
    fontSize: 20,
  },
  item: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: 12,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#b4b4b4",
    width: 280,
  },
  itemTitle: {
    fontSize: 16,
  },
})