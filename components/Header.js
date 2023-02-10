import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Header() {
  return (
    <View style={styles.header}>
      <MaterialIcons name='menu' style={{ fontSize: 40 }} />
      <Text style={{ color: '#3C84AB', fontSize: 20, fontWeight: '600' }}>
        JANE GARY
      </Text>
      <Image
        style={{ width: 50, height: 50, borderRadius: 50 }}
        source={{
          uri: 'https://media.gettyimages.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=1024x1024&w=gi&k=20&c=bf9OriUidtQUrg3IScbRz5InuyMrL9u85H-v5oH5j7Q=',
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5F2',
    paddingVertical: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 25, // will be removed
  },
})
