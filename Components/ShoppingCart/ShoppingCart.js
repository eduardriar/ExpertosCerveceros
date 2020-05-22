/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import React, { useEffect, Component } from 'react';
import { View, Text, Button, Alert, FlatList, Dimensions,TouchableOpacity } from 'react-native';
import styles from "./ContentStyle"
import EventCard from "../Cards/ContentCard"
import { ScrollView } from 'react-native-gesture-handler';
//import { withNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-community/async-storage';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ev1: { sectionTitle: "Conciertos", sectionDescription: "Nuestros territorios son rockeros y cerveceros, por eso nos amas.", place: "Lugar: Territorios pub beer", imageRoute: "http://www.gecsas.com.co/ImagesECommerce/Eventos/Evento1.png", registered: false },
      ev2: { sectionTitle: "St Patricks", sectionDescription: "Hazte un BEERLANDES y disfruta la beerlandesaen nuestros territorios. Ven adisfrutar del 13 al 17 de marzo.", place: "Lugar: Territorios pub beer", imageRoute: "http://www.gecsas.com.co/ImagesECommerce/Eventos/Evento2.png", registered: false },
      ev3: { sectionTitle: "Torneo FIFA", sectionDescription: "¡Vamos a ser los primeros en estrenar el juego #FIFA18, y por eso BEER y SoccerCup se unen para realizar el Torneo Nacional de a parejas mas grande de Colombia! ", place: "Lugar: Territorios pub beer", imageRoute: "http://www.gecsas.com.co/ImagesECommerce/Eventos/Evento3.png", registered: false },
      ev4: { sectionTitle: "Torneo Cervecero", sectionDescription: "¡HOY! Es la primera eliminatoria para el Campeonato Fondo Blanco, y celebrar el #DíaMundialDeLaCerveza ¡Los esperamos!", place: "Lugar: Territorios pub beer", imageRoute: "http://www.gecsas.com.co/ImagesECommerce/Eventos/Evento4.png", registered: false },
      events: [],
      products: []
    }
  }
  

  fetchProducts = async () => {
    const shopping = await AsyncStorage.getItem('shopping');
    var shoppingC = JSON.parse(shopping)
    this.setState({
      products: shoppingC
    })
  }
  buy = async () => {
    await AsyncStorage.removeItem('shopping');
    Alert.alert(
      '',
      'La compra ha sido realizada con exito sus producto llegaran dento de 5 dias',
      [
          { text: 'Aceptar', onPress: () => {}},
      ],
      { cancelable: false },
    );
    this.fetchProducts()
  }
  componentDidMount() {
    this.fetchProducts();

    const {navigation} = this.props 
    this._unsubscribe = navigation.addListener('focus', () => {
      // do something
      this.fetchProducts()
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.ev1 !== prevState.ev1) {
      this.fetchEvents();
    } else if (this.state.ev2 !== prevState.ev2) {
      this.fetchEvents();
    } else if (this.state.ev3 !== prevState.ev3) {
      this.fetchEvents();
    } else if (this.state.ev4 !== prevState.ev4) {
      this.fetchEvents();
    }
  }

  render() {
    

    return (
      <View>

        <Text style={styles.titleText}>Carrito de compras</Text>
        <TouchableOpacity
          style={styles.otro}
          onPress={() => this.buy()}>
          <Text style={styles.buttonText}>{"Realizar compra"}</Text>
        </TouchableOpacity>
        <FlatList
          nestedScrollEnabled={true}
          style={{ marginTop: HEIGHT * 0.03 }}
          data={this.state.products}
          renderItem={({ item }) => (
            <EventCard
              sectionTitle={item.title}
              sectionDescription={item.title}
              imageRoute={item.image}
              place={item.cantidad}
              nav={this.props}
            />
          )}
          keyExtractor={item => item.id}
        />

      </View>
    )
  }
}

export default ShoppingCart