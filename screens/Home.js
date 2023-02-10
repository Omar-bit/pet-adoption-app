import { StatusBar } from 'expo-status-bar'
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Animals from '../components/Animals'
import Form from '../components/Form'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import React from 'react'

export default function App({ navigation }) {
  const [selectedCath, setSelectedCath] = React.useState('cats')
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [navigation])
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 35,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F0EEED',
          marginTop: 50,
          borderTopRightRadius: 55,
          borderTopLeftRadius: 55,
          flex: 1,
        }}
      >
        <Form selectedCath={selectedCath} setSelectedCath={setSelectedCath} />
        <Animals selectedCath={selectedCath} navigation={navigation} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
