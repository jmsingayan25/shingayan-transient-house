import { View, Text, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles';
import Carousel from 'react-native-reanimated-carousel';
import CarouselRoomCard from '../../components/CarouselRoomCard';

const DetailScreen = ({route}) => {

  const width = Dimensions.get('window').width;
  const {name, status} = route.params;
  const roomStatus = status == 0 ? 'Vacant' : 'Occupied';

  const roomImages = [{image: require('../../assets/images/house.jpg')}, {image: require('../../assets/images/house.jpg')}, {image: require('../../assets/images/house.jpg')}];

  return (
    <ScrollView>
      <Carousel
        loop
        width={width}
        height={width}
        autoPlay={false}
        data={roomImages}
        scrollAnimationDuration={1000}
        // onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={CarouselRoomCard}
      />
      <Text style={[styles.textCenter, styles.textBold, {fontSize: 25}]}>{name}</Text>
      <View style={[styles.p1, styles.alignItemCenter]}>
        <Text style={{fontSize: 20}}>Availability: {roomStatus}</Text>
        <Text style={[styles.p1, {fontSize: 20}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan felis tincidunt, pretium ligula quis, consectetur est. Sed tempor faucibus ante non laoreet. Duis vestibulum euismod malesuada. Ut laoreet tortor et felis consectetur dignissim. Nunc consequat arcu sit amet nunc suscipit, in volutpat erat egestas. Pellentesque sollicitudin accumsan elit ac aliquet. Donec malesuada, tortor nec ultrices auctor, turpis lectus suscipit nisl, eget sagittis nisi diam sit amet purus.</Text>
      </View>
    </ScrollView>
  )
}

export default DetailScreen