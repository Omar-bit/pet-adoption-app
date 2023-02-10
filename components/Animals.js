import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import data from './../data'
import Animal from './Animal.js'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
export default function Animals(props) {
  const [animalsToShow, setAnimalsToShow] = React.useState([])
  React.useEffect(() => {
    var Anim = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].pet === props.selectedCath) {
        for (let j = 0; j < data[i].pets.length; j++) {
          Anim.push(
            <Animal
              navigation={props.navigation}
              key={j}
              {...data[i].pets[j]}
            />
          )
        }
      }
    }
    setAnimalsToShow(Anim)
  }, [props.selectedCath])

  return (
    <ScrollView
      alignItems='center'
      style={{
        marginTop: 30,
        width: '100%',
        margin: 'auto',
      }}
    >
      {animalsToShow}
    </ScrollView>
  )
}
//exp://192.168.1.14:19000
