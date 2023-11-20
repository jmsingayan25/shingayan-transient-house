import { View, Text } from 'react-native'
import React from 'react'
import RoomCard from '../../components/RoomCard';
import { FlatList } from 'react-native';
import { styles } from '../../styles/styles';

const room = [
  {id: 1, name: 'Room 1', status: 1, occupants: 1, image: require('../../assets/images/house.jpg')},
  {id: 2, name: 'Room 2', status: 0, occupants: 2, image: require('../../assets/images/house.jpg')},
  {id: 3, name: 'Room 3', status: 1, occupants: 1, image: require('../../assets/images/house.jpg')},
  {id: 4, name: 'Room 4', status: 0, occupants: 1, image: require('../../assets/images/house.jpg')},
  {id: 5, name: 'Room 5', status: 0, occupants: 2, image: require('../../assets/images/house.jpg')},
  {id: 6, name: 'Room 6', status: 1, occupants: 1, image: require('../../assets/images/house.jpg')},
  {id: 7, name: 'Room 7', status: 1, occupants: 1, image: require('../../assets/images/house.jpg')}
];

const RoomForRent = () => {
  return (
    <View style={[styles.flex1]}>
      <FlatList
        columnWrapperStyle={styles.justifySpaceBetween}
        numColumns={2}
        data={room}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <RoomCard name={item.name} status={item.status} image={item.image} occupants={item.occupants}/>}
      />
    </View>
  )
}

export default RoomForRent;