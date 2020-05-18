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
import { recetas } from './RecetasText';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;

const beer = [
  { image: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza1.png', name: 'Estrella Damm', id: '1' },
  { image: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza2.png', name: 'Marantá', id: '2' },
  { image: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza3.png', name: 'Becks', id: '3' },
  { image: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza4.png', name: 'Bitburger', id: '4' },
  { image: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza5.png', name: 'Maredsous', id: '5' },
  { image: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza6.png', name: 'Erdinger', id: '6' },
  { image: 'http://www.gecsas.com.co/ImagesECommerce/Cerveza/Cerveza7.png', name: '3 Cordilleras', id: '7' }]

const maridaje = [
  { image: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Maridaje1.png', name: 'Estrella Damm', id: '11' },
  { image: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Maridaje2.png', name: 'Estrella Damm', id: '12' },
  { image: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Maridaje3.png', name: 'Estrella Damm', id: '13' },
  { image: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Maridaje4.png', name: 'Estrella Damm', id: '14' },
  { image: 'http://www.gecsas.com.co/ImagesECommerce/Maridaje/Maridaje5.png', name: 'Estrella Damm', id: '15' },
]

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableScrollViewScroll: true,
    };
  }

  componentDidMount(){
    console.log(this.props)
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
                    object={item}
                    nav={this.props}
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
                    object={item}
                    nav={this.props}
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
                data={recetas}
                renderItem={({ item }) => (
                  <Item
                    object={item}
                    to={'Receipt'}
                    nav={this.props}
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