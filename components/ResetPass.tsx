import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function ResetPass() {
  const [password, onChangePass] = React.useState("");
 
  return (
    <View>
      <TextInput 
        placeholder='Password'
        onChangeText={onChangePass}
        value={password}
      />
      
    </View>
  )
}