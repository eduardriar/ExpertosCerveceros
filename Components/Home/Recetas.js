/* eslint-disable prettier/prettier */

import React, { useEffect, Component } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, ImageBackground, Linking, Dimensions } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './RecetasStyles'


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;


class Receipt extends Component {

  componentDidMount() {

    console.log(this.props.route.params)
  }

  render() {
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.header}>
          <View>
            <ImageBackground source={{ uri: this.props.route.params.object.image }} style={styles.imageBackground} />
            <TouchableOpacity style={{ position: 'absolute' }} onPress={() => {
              this.props.navigation.goBack()
            }}>
              <MaterialCommunityIcons name="arrow-left" color={'#ffffff'} size={sizeH * 5} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={this.props.route.params.object.type == 'Receta' ? styles.titleView : this.props.route.params.object.type == 'Cerveza' ? styles.titleViewBeer : styles.titleViewMaridaje}>
          <View style={styles.expertosCerveceros}>
            <Text style={styles.expertos}> {this.props.route.params.object.title.split(',')[0]}</Text>
            <Text style={styles.cerveceros}> {this.props.route.params.object.title.split(',')[1]}</Text>
          </View>
        </View>
        <View style={this.props.route.params.object.type == 'Receta' ? { backgroundColor: '#FF0000', flex: 1 } : this.props.route.params.object.type == 'Cerveza' ? { backgroundColor: '#FFB400', flex: 1 } : { backgroundColor: '#39CC7F', flex: 1 }}>
          <View style={styles.containerScroll}>
            <ScrollView nestedScrollEnabled={true} style={styles.scrollView}>
              <Text style={styles.label}>INFROMACIÓN GENERAL</Text>
              <View style={styles.containerCards}>
                <Text style={styles.text}>{this.props.route.params.object.text}</Text>
              </View>
              {this.props.route.params.object.type == 'Receta' ?
                <View>
                  <Text style={styles.label}>NECESITAS: </Text>
                  <View style={styles.containerCards}>
                    {this.props.route.params.object.ingredients.map(text => <Text style={styles.text}>- {text}</Text>)}
                  </View>
                  <Text style={styles.label}>PREPARACIÓN: </Text>
                  <View style={styles.containerCards}>
                    {this.props.route.params.object.ingredients.map((text, index) => <Text style={styles.text}>{index}. {text}</Text>)}
                  </View>
                </View> : <Text></Text>}
              <Text style={styles.label}>COMPARTE LA RECETA EN TUS REDES SOCIALES: </Text>
              <View styles={styles.socialMedia}>
                <TouchableOpacity style={styles.icon} onPress={() => Linking.openURL('instagram://user?username=expertoscerveceros')}>
                  <MaterialCommunityIcons name="instagram" color={'#000000'} size={sizeH * 5} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon} onPress={() => Linking.openURL('fb://page/expetoscerveceros')}>
                  <MaterialCommunityIcons name="facebook" color={'#000000'} size={sizeH * 5} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
                  <MaterialCommunityIcons name="heart" color={'#000000'} size={sizeH * 5} />
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
export default Receipt;