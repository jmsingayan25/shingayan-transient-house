import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../../styles/styles'

const AboutScreen = () => {
  return (
    <View style={styles.flex1}>
        <View style={[styles.p1, styles.alignItemCenter]}>
            <Image
                source={require('../../assets/icons/android/drawable-hdpi/shingayan-transient-house-high-resolution-logo-transparent.png')}
                style={{width: 150, height: 150}}
            />
        </View>
      <Text style={[styles.textCenter, styles.textBold, {fontSize: 25}]}>Shingayan Transient House</Text>
      <Text style={[styles.p2, {fontSize: 16}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan felis tincidunt, pretium ligula quis, consectetur est. Sed tempor faucibus ante non laoreet. Duis vestibulum euismod malesuada. Ut laoreet tortor et felis consectetur dignissim. Nunc consequat arcu sit amet nunc suscipit, in volutpat erat egestas. Pellentesque sollicitudin accumsan elit ac aliquet. Donec malesuada, tortor nec ultrices auctor, turpis lectus suscipit nisl, eget sagittis nisi diam sit amet purus.</Text>
    </View>
  )
}

export default AboutScreen