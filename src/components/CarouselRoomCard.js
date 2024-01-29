import { View, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'

const CarouselRoomCard = ({item, index}) => {

  return (
    <View style={[styles.imageCarouselContainer]} key={index}>
      <Image
        source={item.image}
				style={styles.imageCarousel}
      />
    </View>
  )
}

export default CarouselRoomCard