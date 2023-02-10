import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Cath from '../components/Cath'
import data from '../data'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function Form(props) {
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          width: '90%',
          justifyContent: 'center',
          alignContent: 'center',
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 10,
          padding: 10,
          overflow: 'hidden',
        }}
      >
        <MaterialIcons
          name='search'
          style={{ fontSize: 30, color: '#EEE9DA' }}
        />
        <TextInput
          placeholder='Search'
          style={{ width: '80%', marginLeft: 5, fontSize: 18 }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,

          gap: 15,
        }}
      >
        {data.map((el, index) => (
          <Cath
            key={index}
            {...el}
            selectedCath={props.selectedCath}
            setSelectedCath={() => props.setSelectedCath(el.pet)}
          />
        ))}
      </View>
    </View>
  )
}
