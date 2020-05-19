/* eslint-disable prettier/prettier */

import React, { useEffect, Component } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;

function navCards(route, navigation, object ) { 
  var params = JSON.stringify(object) 
  navigation.navigation.navigate(route, {object})
}

class Item extends Component {

  render() {
    return (
      <TouchableOpacity onPress={() => navCards(this.props.to,this.props.nav, this.props.object)} style={styles.card}>
        <ImageBackground source={{ uri: this.props.object.image }} style={styles.img} imageStyle={{ borderRadius: WIDTH * 0.05 }}>
          <TouchableOpacity style={styles.card} onPress={() => console.log(this.props.object.id)} >
            <MaterialCommunityIcons name="cart" color={'#FFFFFF'} size={26} />
          </TouchableOpacity>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    margin: sizeW * 2,
    elevation: 10,
  },
  img: {
    width: sizeH * 18,
    height: sizeH * 18,
  }
});

export default Item;