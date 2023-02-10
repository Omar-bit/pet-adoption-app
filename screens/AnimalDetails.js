import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
//location
function AnimalDetails({ route, navigation }) {
  /*
    name
img:
type
age:*/
  //console.log(route.params)
  const souceOfImg = './../assets/' + route.params.img
  /* React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [navigation])*/
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#BDCDD6' }}>
      <View
        style={{
          flex: 1.25,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          style={{ width: '65%', height: 300, resizeMode: 'stretch' }}
          source={route.params.img}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          padding: 15,
          zIndex: 99,
          width: '60%',
          height: 110,
          borderRadius: 15,
          top: 300,
          left: '20%',
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 19, color: '#20262E' }}>
          {route.params.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 16, color: 'gray' }}>
            {route.params.type}
          </Text>
          <Text style={{ fontSize: 12, color: 'gray' }}>
            {route.params.age}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',

            alignItems: 'center',
          }}
        >
          <EvilIcons
            name='location'
            style={{ fontSize: 19, color: '#3C84AB' }}
          />

          <Text style={{ fontSize: 12, color: 'gray', marginLeft: 10 }}>
            chera3 jomhouriya msajken 4070
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: '#F0EEED', paddingTop: 20 }}>
        {/* HEADER */}
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            alignItems: 'center',
            marginLeft: '5%',
            marginVertical: 25,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Image
              source={require('./../assets/person.jpg')}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{ fontSize: 16, fontWeight: '600', color: '#20262E' }}
              >
                JANE GARY
              </Text>
              <Text
                style={{ fontSize: 13, fontWeight: 'lighter', color: 'gray' }}
              >
                State
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 13, fontWeight: 'lighter', color: 'gray' }}>
            May,25,2020
          </Text>
        </View>
        {/* Text */}
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '5%',
          }}
        >
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            possimus autem nisi numquam aliquid corporis.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginTop: 25,
            backgroundColor: '#B2B2B2',
            padding: 5,
            paddingHorizontal: '5%',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#3C84AB',
              borderRadius: 5,
              height: 50,
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <MaterialCommunityIcons
              name='cards-heart-outline'
              style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#3C84AB',
              borderRadius: 5,
              height: 50,
              width: '70%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: '600', color: 'white' }}>
              Adoption
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
export default AnimalDetails
/* */
