/* eslint-disable prettier/prettier */
/* eslint-disable quotes */

import { Platform, Dimensions, StyleSheet, } from 'react-native'
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  mainContainer: {
    flex: 4,
    flexDirection: "column",
    backgroundColor: "#CC493A"
  },
  sectionContainer: {
    elevation: 10,
    flex: 1,
    flexDirection: "row",
    alignSelf:'center',
    width: sizeW * 95,
    marginTop: sizeW * 2.5,
    marginBottom: sizeW * 2.5,
    backgroundColor: Colors.white,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    fontFamily: 'Jost-Black'
  },
  titleText: {
    fontSize: WIDTH * 0.1,
    color: Colors.white,
    fontFamily: 'Satisfy-Regular',
    marginTop: sizeH * 2.5,
    alignSelf: 'center'
  },
  titleTextShop: {
    fontSize: WIDTH * 0.1,
    color: Colors.black,
    fontFamily: 'Satisfy-Regular',
    marginTop: sizeH * 2.5,
    alignSelf: 'center'
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  contentContainer: {
    flex: 0.45,
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 2,
    marginBottom: 5,
    marginTop: 5
  },
  button: {
    borderRadius: sizeW* 2,
    flex: 0.2,
    alignSelf:'center',
    marginTop: sizeH * 2.5,
    backgroundColor: "#39CC7F",
    width: sizeW * 30,
    height: sizeH * 4,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{    
    fontSize: sizeH * 2,
    color: Colors.white,
    fontFamily: 'Jost-Light',
  },
  img: {
    width: sizeH * 17,
    height: sizeH * 17,
    margin: sizeW * 2,
  }
});

export default styles