/* eslint-disable prettier/prettier */

import React, { useEffect, Component } from './node_modules/react';
import { View, Text, Button, FlatList, SafeAreaView, Image, Dimensions,Alert } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from './node_modules/@react-navigation/native';
import { createStackNavigator } from './node_modules/@react-navigation/stack';
import { createMaterialBottomTabNavigator } from './node_modules/@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from './node_modules/react-native-vector-icons/MaterialCommunityIcons';
import styles from './HomeStyle';
import Item from './Item';
import { ScrollView } from 'react-native-gesture-handler';
import { recetas } from './RecetasText';
import {beers} from './BeerText';
import {maridaje} from './MaridajeText'

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
          <ScrollView nestedScrollEnabled={true} style={styles.scrollView}>
            <View style={styles.containerCards}>
              <Text style={styles.label}>LAS CERVEZAS DE NUESTRAS RECETAS</Text>
              <FlatList
                nestedScrollEnabled={true}
                style={{ marginTop: HEIGHT * 0.03 }}
                horizontal={true}
                data={beers}
                renderItem={({ item }) => (
                  <Item
                    object={item}
                    nav={this.props}
                    to={'Receipt'}
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
                    to={'Receipt'}
                  />
                )}
                keyExtractor={item => item.id}
              />
            </View>
            <View style={styles.containerCards}>
              <Text style={styles.label}>RECETAS POPULARES</Text>
              <FlatList
                style={{ marginTop: sizeH * 2}}
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