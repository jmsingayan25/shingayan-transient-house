import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles';
import RoomCard from '../../components/RoomCard';

const room = [
  {id: 1, name: 'Transient 1', status: 1, occupants: 1, image: require('../../assets/images/house.jpg')},
];

const TransientRoom = () => {
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

export default TransientRoom;