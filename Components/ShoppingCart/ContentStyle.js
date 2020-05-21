/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import { Platform, Dimensions, StyleSheet, } from 'react-native'
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;

const styles = StyleSheet.create({
  titleText: {
    fontSize: WIDTH * 0.1,
    color: Colors.Black,
    fontFamily: 'Satisfy-Regular',
    marginTop: sizeH * 2.5,
    alignSelf: 'center'
  }
});

export default styles