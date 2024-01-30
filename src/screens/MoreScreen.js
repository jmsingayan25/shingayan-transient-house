import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MoreScreen = ({navigation}) => {
  return (
    <View style={styles.flex1}>
      <TouchableOpacity 
        style={[styles.p1, {backgroundColor: 'yellow'}]}
        onPress={() => navigation.navigate('AboutUs')}  
      >
        <Text style={{fontSize: 20}}><MaterialCommunityIcons name='map-marker-question' color='black' size={40}/>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.p1, {backgroundColor: 'gray'}]}>
        <Text style={{fontSize: 20}}><MaterialCommunityIcons name='map-marker-radius' color='black' size={40}/>Location</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MoreScreen