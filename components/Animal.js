import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import img from './../imgs/bird1.png'
export default function Animal(props) {
  let sourcee = props.img.toString()

  function clicking() {
    props.navigation.navigate('Animal', {
      age: props.age,
      name: props.name,
      type: props.type,
      img: props.img,
    })
  }

  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 150,

        marginBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      onPress={clicking}
    >
      {/*
        <TouchableOpacity
      style={{ width: 150, height: 50, backgroundColor: 'red' }}
      
    ></TouchableOpacity>*/}
      <View
        style={{
          backgroundColor: '#BDCDD6',
          width: '40%',
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          borderRadius: 15,
        }}
      >
        {/* <Image
         
          source={require(`./../imgs/${props.img}`)}
        /> */}
        <Image
          style={{ resizeMode: 'contain', width: '55%' }}
          source={props.img}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          backgroundColor: 'white',
          width: '40%',
          height: 110,
          borderTopRightRadius: 15,
          borderBottomRightRadius: 15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,

          elevation: 8,
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 20, color: '#3C84AB' }}>{props.name}</Text>
        <Text style={{ fontSize: 20, color: '#BDCDD6' }}>{props.type}</Text>
        <Text style={{ fontSize: 14, color: '#DDDDDD' }}>{props.age}</Text>
      </View>
    </TouchableOpacity>
  )
}
