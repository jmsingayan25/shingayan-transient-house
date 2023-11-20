import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'

const RoomCard = ({name, status, image, occupants}) => {

  status = status == 0 ? 'Vacant' : 'Occupied';
  return (
    <TouchableOpacity style={[styles.p1, styles.alignItemCenter, {width: '50%'}]}>
      <Image
        source={image}
        style={[styles.imageContainer]}
      />
      <Text style={styles.textBold}>{name}</Text>
      <Text style={styles.textBold}>Status: {status}</Text>
      <Text style={styles.textBold}>Occupants: {occupants} pax</Text>
    </TouchableOpacity>
    
  )
}

export default RoomCard