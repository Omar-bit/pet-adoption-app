import Home from './screens/Home'
import React from 'react'
import AnimalDetails from './screens/AnimalDetails'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Animal' component={AnimalDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
/*exp://192.168.1.14:19000*/
