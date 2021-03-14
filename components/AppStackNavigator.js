// import React, { Component } from 'react';
// import { createStackNavigator } from 'react-navigation-tabs';
// import BookDonationScreen from '../screens/BookDonationScreen'
// import ReceiverDetailsScreen from '../screens/ReceiverDetailsScreen';

// export const AppStackNavigator=createStackNavigator({
//     BookDonateList:{
//         screen:BookDonationScreen,
//         navigationOptions:{
//             headerShown:true
//         }
//     },
//     ReceiverDetails:{
//         screen:ReceiverDetailsScreen,
//         navigationOptions:{
//             headerShown:false
//         }
//     },
// },
// {
//     initialRouteName:'BookDonateList'
// }
// )

import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import BookDonateScreen from '../screens/NeedHelpForOthers'
import RecieverDetailsScreen from '../screens/ReceiverDetailsScreen'




export const AppStackNavigator = createStackNavigator({
  
  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'BookDonateList'
  }
);