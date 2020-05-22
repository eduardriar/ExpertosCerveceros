/* eslint-disable prettier/prettier */

import React, { useEffect, Component } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, ImageBackground, StyleSheet, Dimensions, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;

function navCards(route, navigation, object ) { 
  var params = JSON.stringify(object) 
  navigation.navigation.navigate(route, {object})
}



class Item extends Component {
  addItem = async (newshopping) => {
    try {
      await AsyncStorage.setItem('shopping',newshopping)   
      console.log(newshopping)
      Alert.alert("Unidad agregada exitosamente");   
    } catch (e) {
      console.log("error adding item store")
    }
  }

  addShopping = async (product) => {
    try {
      const shopping = await AsyncStorage.getItem('shopping');
      //shoppingC = JSON.parse(shopping)

      if(shopping !== null && shopping.length > 0)
      {

        var shoppingC = JSON.parse(shopping)
        var newshopping;
        if(shoppingC.filter(dpa => dpa.id === product.id).length > 0)
        {
          Alert.alert(
            '',
            'El producto ya existe en el carrito, desea agregar otra unidad',
            [
                { text: 'Aceptar', onPress: () => {
                  newshopping = JSON.stringify(shoppingC.filter(dpa => dpa.id !== product.id && dpa["0"] !== "[").concat({...product, cantidad:
                    shoppingC.filter(dpa => dpa.id === product.id && dpa["0"] !== "[")[0].cantidad + 1}));
                  this.addItem(newshopping)
                }},
            ],
            { cancelable: false },
          );
          //await AsyncStorage.setItem('shopping',newshopping)
        }
        else
        {
          try {
            newshopping = JSON.stringify(shoppingC.concat({...product, cantidad:1}))
            console.log(newshopping)
            await AsyncStorage.setItem('shopping',newshopping)     
            Alert.alert("Unidad agregada exitosamente"); 
          } catch (e) {
            console.log("error adding item store")
          }
        }
      }
      else
      {
        var newshopping = [];
        const addSho = JSON.stringify(newshopping.concat({...product, cantidad:1}));
        console.log(addSho)
        await AsyncStorage.setItem('shopping',addSho) 
        Alert.alert("Unidad agregada exitosamente");
      }
    } catch (e) {
      console.log("error getting item store " + e )
    }
    //AsyncStorage.removeItem('shopping')
  }

  render() {
    return (
      <TouchableOpacity onPress={() => navCards(this.props.to,this.props.nav, this.props.object)} style={styles.card}>
        <ImageBackground source={{ uri: this.props.object.image }} style={styles.img} imageStyle={{ borderRadius: WIDTH * 0.05 }}>
          <TouchableOpacity style={styles.card} onPress={() => this.addShopping(this.props.object)} >
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