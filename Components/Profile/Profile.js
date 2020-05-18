/* eslint-disable prettier/prettier */

import React, { useEffect, Component } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, Image, Dimensions, Linking } from 'react-native';
import styles from './ProfileStyles';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageGoodPeople from '../../assets/Images/Screenshot_20200329-114942_Instagram.png';
import AsyncStorage from '@react-native-community/async-storage';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  getData = async () => {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo')
      let userName = JSON.parse(userInfo)
      if (userInfo !== null) {
        console.log(userName.userInfo.user.name)
        this.setState({
          name: userName.userInfo.user.name,
        });
      }
    } catch (e) {
      // error reading value
    }
  }

  componentDidMount() {
    this.getData();
  }

  onEnableScroll = (value) => {
    this.setState({
      enableScrollViewScroll: value,
    });
  };

  render() {
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Image source={ImageGoodPeople} style={styles.imageGoodPeople} />
          </View>
          <View style={styles.headerBottom}>
            <View style={styles.square}>
              <Text style={styles.squareOne}>Square1</Text>
              <Text style={styles.squareTwo}>Square2</Text>
            </View>
          </View>
        </View>
        <View style={styles.menu}>
          <Text style={styles.name}>{this.state.name}</Text>
          <Text style={styles.menuText}> Tus Favoritos</Text>
          <Text style={styles.menuText}> Beneficios Premium</Text>
          <Text style={styles.menuText}> Síguenos en redes</Text>
          <View style={styles.socialMedia}>
            <TouchableOpacity style={styles.icon} onPress={() => Linking.openURL('instagram://user?username=expertoscerveceros')}>
              <MaterialCommunityIcons name="instagram" color={'#FFFFFF'} size={sizeH * 5} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} onPress={() => Linking.openURL('fb://page/expetoscerveceros')}>
              <MaterialCommunityIcons name="facebook" color={'#FFFFFF'} size={sizeH * 5} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <MaterialCommunityIcons name="heart" color={'#FFFFFF'} size={sizeH * 5} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logoBottom}>
          <View style={styles.expertosCerveceros}>
            <Text style={styles.expertos}> Expertos</Text>
            <Text style={styles.cerveceros}> CERVECEROS</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;