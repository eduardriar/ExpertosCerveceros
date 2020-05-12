/* eslint-disable prettier/prettier */

import React, { useEffect, Component } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../Search';
import Premium from '../Premium';
import Profile from '../Profile';
import { ScrollView } from 'react-native-gesture-handler';
import Salchicha from '../../assets/Images/SalchicaALaCerveza.png'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;

class Item extends Component {

  render() {
    return (
      <ImageBackground source={{ uri: this.props.img }} style={styles.img} imageStyle={{ borderRadius: WIDTH * 0.05}}>
        <TouchableOpacity style={styles.card} onPress={() => console.log(this.props.id)} >
          <MaterialCommunityIcons name="cart" color={'#FFFFFF'} size={26} />
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    margin: sizeW * 2
  },
  img: {
    width: WIDTH * 0.4,
    height: WIDTH * 0.4,
    margin: sizeW * 2,
  }
});

export default Item;