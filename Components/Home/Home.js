/* eslint-disable prettier/prettier */

import React, { useEffect, Component } from 'react';
import { View, Text, Button, FlatList, SafeAreaView, Image, Dimensions } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from '../Search';
import Premium from '../Premium';
import Profile from '../Profile';
import styles from './HomeStyle';
import Item from './Item';
import { ScrollView } from 'react-native-gesture-handler';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;

const beer = [
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza1.png', name: 'Estrella Damm', id: '1' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza2.png', name: 'Marantá', id: '2' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza3.png', name: 'Becks', id: '3' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza4.png', name: 'Bitburger', id: '4' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza5.png', name: 'Maredsous', id: '5' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza6.png', name: 'Erdinger', id: '6' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza7.png', name: '3 Cordilleras', id: '7' }]

const receipts = [
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Receta1.png', name: 'Estrella Damm', id: '8' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Receta2.png', name: 'Estrella Damm', id: '9' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Receta3.png', name: 'Estrella Damm', id: '10' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Receta4.png', name: 'Estrella Damm', id: '11' },
]

const maridaje = [
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Maridaje1.png', name: 'Estrella Damm', id: '11' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Maridaje2.png', name: 'Estrella Damm', id: '12' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Maridaje3.png', name: 'Estrella Damm', id: '13' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Maridaje4.png', name: 'Estrella Damm', id: '14' },
  { img: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Maridaje5.png', name: 'Estrella Damm', id: '15' },
]

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableScrollViewScroll: true,
    };
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
            <View style={styles.expertosCerveceros}>
              <Text style={styles.expertos}> Expertos</Text>
              <Text style={styles.cerveceros}> CERVECEROS</Text>
            </View>
          </View>
          <View style={styles.headerBottom}>
            <View style={styles.square}>
              <Text style={styles.squareOne}>Square1</Text>
              <Text style={styles.squareTwo}>Square2</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerScroll}>
          <ScrollView nestedScrollEnabled={true} style={styles.scrollView}>
            <View style={styles.containerCards}>
              <Text style={styles.label}>LAS CERVEZAS DE NUESTRAS RECETAS</Text>
              <FlatList
                nestedScrollEnabled={true}
                style={{ marginTop: HEIGHT * 0.03 }}
                horizontal={true}
                data={beer}
                renderItem={({ item }) => (
                  <Item
                    id={item.id}
                    img={item.img}
                  />
                )}
                keyExtractor={item => item.id}
              />
            </View>
            <View style={styles.containerCards}>
              <Text style={styles.label}>MARIDAJE</Text>
              <FlatList
                nestedScrollEnabled={true}
                style={{ marginTop: HEIGHT * 0.03 }}
                horizontal={true}
                data={maridaje}
                renderItem={({ item }) => (
                  <Item
                    id={item.id}
                    img={item.img}
                  />
                )}
                keyExtractor={item => item.id}
              />
            </View>
            <View style={styles.containerCards}>
              <Text style={styles.label}>RECETAS POPULARES</Text>
              <FlatList
                style={{ marginTop: HEIGHT * 0.03 }}
                horizontal={false}
                numColumns={'2'}
                data={receipts}
                renderItem={({ item }) => (
                  <Item
                    id={item.id}
                    img={item.img}
                  />
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Home;