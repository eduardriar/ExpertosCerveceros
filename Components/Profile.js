/* eslint-disable prettier/prettier */

import React, {useEffect, Component} from 'react';
import { View, Text, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { withNavigation } from "@react-navigation/native";

class Profile extends Component {

  render(){
    return(
      <>
        <View>
          <Text>Profile</Text>
        </View>
      </>
    )
  }
}

export default Profile