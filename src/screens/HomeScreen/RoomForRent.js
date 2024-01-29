import { View, Text } from 'react-native'
import React from 'react'
import RoomCard from '../../components/RoomCard';
import { FlatList } from 'react-native';
import { styles } from '../../styles/styles';

const room = [
  {id: 1, name: 'Room 1', status: 1, occupants: [{id: 1, first_name: 'John Michael', last_name: 'Singayan'}], image: require('../../assets/images/house.jpg')},
  {id: 2, name: 'Room 2', status: 0, occupants: [{id: 2, first_name: 'Edmelyn', last_name: 'Florendo'}, {id: 3, first_name: 'Estrella', last_name: 'Florendo'}], image: require('../../assets/images/house.jpg')},
  {id: 3, name: 'Room 3', status: 1, occupants: [{id: 4, first_name: 'Sheenalyn', last_name: 'Singayan'}], image: require('../../assets/images/house.jpg')},
  {id: 4, name: 'Room 4', status: 0, occupants: [{id: 5, first_name: 'Marlene', last_name: 'Singayan'}], image: require('../../assets/images/house.jpg')},
  {id: 5, name: 'Room 5', status: 0, occupants: [{id: 6, first_name: 'Susana', last_name: 'Florendo'}, {id: 7, first_name: 'Alicia', last_name: 'Florendo'}], image: require('../../assets/images/house.jpg')},
  {id: 6, name: 'Room 6', status: 1, occupants: [{id: 8, first_name: 'Joshua Peter', last_name: 'Singayan'}], image: require('../../assets/images/house.jpg')},
  {id: 7, name: 'Room 7', status: 1, occupants: [{id: 9, first_name: 'Hipolito', last_name: 'Singayan'}], image: require('../../assets/images/house.jpg')}
];

const RoomForRent = () => {
  return (
    <View style={[styles.flex1]}>
      <FlatList
        columnWrapperStyle={styles.justifySpaceBetween}
        numColumns={2}
        data={room}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <RoomCard id={item.id} name={item.name} status={item.status} image={item.image} occupants={item.occupants}/>}
      />
    </View>
  )
}

export default RoomForRent;