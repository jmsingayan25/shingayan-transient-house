import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { colors, styles } from '../styles/styles';
import { Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RoomForRent from './HomeScreen/RoomForRent';
import TransientRoom from './HomeScreen/TransientRoom';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

// const Tab = createMaterialTopTabNavigator();

const renderScene = SceneMap({
  first: RoomForRent,
  second: TransientRoom
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: colors.primaryColor}}
    style={{backgroundColor: 'white'}}
    activeColor= {colors.primaryColor}
    inactiveColor= {colors.primaryColor}
  />
)

const HomeScreen = () => {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Room for Rent'},
    {key: 'second', title: 'Transient Room'}
  ]);

  return (
    <View style={[styles.flex1]}>
      <View style={[styles.p1, styles.justifySpaceBetween, styles.flexDirectionRow, styles.alignItemCenter]}>
        <Text style={{fontSize: 20}}>Shingayan Transient House</Text>
        <FontAwesome name='gear' size={30}/>
      </View>
      <View style={[styles.p1, styles.alignItemCenter]}>
          <Image
            source={require('../assets/images/house.jpg')}
            style={[styles.imageContainer]}
          />
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
    </View>
  )
}

export default HomeScreen