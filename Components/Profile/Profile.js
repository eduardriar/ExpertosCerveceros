/* eslint-disable prettier/prettier */

import React, { useState, Component } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, Image, Dimensions, Linking } from 'react-native';
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
      modalVisible: false,
      email: ''
    };
  }

  getData = async () => {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo')
      let userName = JSON.parse(userInfo)
      if (userInfo !== null) {
        console.log(userName.user)
        this.setState({
          name: userName.user.name,
        });
      }
    } catch (e) {
      console.log(e)
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

  onChangeState(text, type) {
    let auxState = { ...this.state }

    auxState[type] = text

    this.setState({
      email: auxState[type]
    })
  }

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
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <TouchableOpacity style={styles.icon} onPress={() => {
                  this.setState({
                    modalVisible: !this.state.modalVisible
                  })
                }}>
                  <MaterialCommunityIcons name="close" color={'#000000'} size={sizeH * 5} />
                </TouchableOpacity>
                <Text style={styles.premium}>{' ' + '¿Quieres ser premium?' + ' '}</Text>
                <Text style={styles.premiumText}>{'Al ser cliente premium con expertos cerveceros, tendrás la posiblidad de adquirir la cerveza con que fue hecho tu pedido totalmente gratis, además tendrás la oportunidad de participar en cualquier eventos de nuestros bares aliados totalmente y recibir una cerveza de bienvenida totalmente gratis pagando solo $10.000 pesos mensuales'}</Text>
                <Text style={styles.titleEmail}>Escribe tu correo para contáctarnos con nosotros</Text>
                <TextInput style={styles.inputText} underlineColorAndroid={'#ffffff'} placeholder={'Escribe tu correo'} value={this.state.email} onChange={text => this.onChangeState(text, 'email')} />
                <TouchableOpacity style={styles.button} onPress={() => {
                  this.setState({
                    modalVisible: !this.state.modalVisible
                  })
                }}>
                  <Text styles={styles.buttonText}>SUSCRIBETE!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Text style={styles.name}>{this.state.name}</Text>
          <Text style={styles.menuText}> Tus Favoritos</Text>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                modalVisible: !this.state.modalVisible
              })
            }}
          >
            <Text style={styles.menuText}> Beneficios Premium</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.getData()}>
            <Text style={styles.menuText}> Eventos Premium</Text>
          </TouchableOpacity>
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