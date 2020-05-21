/* eslint-disable prettier/prettier */

import React, { useEffect, Component } from 'react';
import { View, Text, Button, FlatList, SafeAreaView, Image, Dimensions, Alert, ListView } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './HomeStyle';
import Item from './Item';
import { ScrollView } from 'react-native-gesture-handler';
import { recetas } from './RecetasText';
import { beers } from './BeerText';
import { maridaje } from './MaridajeText'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;

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
          <ScrollView style={styles.scrollView}>
            <View style={styles.containerCards}>
              <Text style={styles.label}>LAS CERVEZAS DE NUESTRAS RECETAS</Text>
              <ScrollView horizontal={true}>
                {beers.map((item,index) => <Item object={item} nav={this.props} to={'Receipt'} key={index}/>)}
              </ScrollView>
              <Text style={styles.label}>MARIDAJE</Text>
              <ScrollView horizontal={true}>
                {maridaje.map((item,index) => <Item object={item} nav={this.props} to={'Receipt'} key={index} />)}
              </ScrollView>
              <Text style={styles.label}>RECETAS</Text>
              <FlatList
                style={{ marginTop: sizeH * 2 }}
                numColumns={'2'}
                data={recetas}
                renderItem={({ item }) => (
                  <Item
                    object={item}
                    to={'Receipt'}
                    nav={this.props}
                  />
                )}
                key={item => item.id}
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