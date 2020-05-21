/* eslint-disable semi */
import React from './node_modules/react';
import {
  View,
  Text,
  Dimensions,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './ContentStyle';
const {width: WIDTH} = Dimensions.get('window');
const {height: HEIGHT} = Dimensions.get('window');
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;

export default function ContentCard(props) {
  var bTitle = 'Registrate';
  if (props.registered) {
    bTitle = '¡Inscrito!';
  } else {
    bTitle = 'Registrate';
  }
  function getRandom(){
    var RandomNumber = Math.floor(Math.random() * 50000) + 10000 ;
    return RandomNumber
  }

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.contentContainer}>
        <ImageBackground
          source={{uri: props.imageRoute}}
          style={styles.img}
          imageStyle={{borderRadius: 5}}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>{props.sectionTitle}</Text>
        <Text style={styles.sectionDescription}>
          {props.sectionDescription}
        </Text>
        <Text style={styles.sectionDescription}>{props.place}</Text>
        <Text style={styles.sectionDescription}>{'c/u  $' + getRandom()}</Text>
        <Text style={styles.sectionDescription}>{'Total  $' + getRandom() * props.place}</Text>
      </View>
    </View>
  );
}
