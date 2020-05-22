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
  },
  button: {
    borderRadius: sizeW * 2,
    flex: 0.2,
    alignSelf:'center',
    marginTop: sizeH * 2.5,
    backgroundColor: "#39CC7F",
    width: sizeW * 30,
    height: sizeH * 4,
    alignItems:'center',
    justifyContent:'center'
  },
  otro:{

    borderRadius: sizeW * 2,
    backgroundColor: "#39CC7F",
    alignSelf:'center',
    height:sizeH * 4,
    width: sizeW * 50,

    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{    
    fontSize: sizeH * 2,
    color: Colors.white,
    fontFamily: 'Jost-Light',
  },
});

export default styles