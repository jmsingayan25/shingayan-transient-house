import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import { useNavigation } from '@react-navigation/native'

const RoomCard = (route) => {

  const navigation = useNavigation();
  const {name, status, image, occupants} = route;
  const roomStatus = status == 0 ? 'Vacant' : 'Occupied';

  return (
    <TouchableOpacity 
      style={[styles.p1, styles.alignItemCenter, {width: '50%'}]}
      onPress={() => navigation.navigate('Detail', {params: route })}
    >
      <Image
        source={image}
        style={[styles.imageContainer]}
      />
      <Text style={styles.textBold}>{name}</Text>
      <Text style={styles.textBold}>Status: {roomStatus}</Text>
      <Text style={styles.textBold}>Occupants: {occupants.length} pax</Text>
    </TouchableOpacity>
    
  )
}

export default RoomCard