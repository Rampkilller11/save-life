import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import BookDonationScreen from '../screens/NeedHelpForOthers';
import BookRequestScreen from '../screens/NeedHelpForYourself';




export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/download.png")} style={{width:35, height:30}}/>,
      tabBarLabel : "Need Help For Others",
    }
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/unnamed.png")} style={{width:50, height:30}}/>,
      tabBarLabel : "Need Help For Yourself ",
    }
  }
});