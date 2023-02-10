import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function iconi(lib, name, bg) {
  if (lib === 'FontAwesome5')
    return (
      <FontAwesome5
        name={name}
        style={{
          fontSize: 23,
          color: bg === 'white' ? '#3C84AB' : 'white',

          borderRadius: 20,
          padding: 10,
        }}
      />
    )
  else {
    return (
      <MaterialCommunityIcons
        name={name}
        style={{
          fontSize: 23,
          color: bg === 'white' ? '#3C84AB' : 'white',

          borderRadius: 20,
          padding: 10,
        }}
      />
    )
  }
}
export default function Cath(props) {
  const bg = props.selectedCath === props.pet ? '#3C84AB' : 'white'
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 7,
      }}
    >
      <TouchableOpacity
        onPress={props.setSelectedCath}
        style={{
          backgroundColor: bg,
          borderRadius: 20,
          padding: 7,
        }}
      >
        {iconi(props.element[0], props.element[1], bg)}
      </TouchableOpacity>
      <Text style={{ fontSize: 18, color: '#3C84AB', fontWeight: '600' }}>
        {props.pet}
      </Text>
    </View>
  )
}
