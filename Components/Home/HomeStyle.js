/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
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
  label: {
    fontSize: WIDTH * 0.035,
    color: '#B7B7B7',
    fontFamily: 'Raleway-SemiBold',
    marginTop: HEIGHT * 0.005,
  },
  containerCards: {
    marginTop: WIDTH * 0.1,
    marginLeft: WIDTH * 0.05
  },
  square: {
    flexDirection: 'row'
  },
  squareOne: {
    width: WIDTH * 0.15,
    height: WIDTH * 0.15,
    backgroundColor: '#858585',
    borderBottomLeftRadius: WIDTH * 0.05,
    color: '#858585'
  },
  squareTwo: {
    width: WIDTH * 0.25,
    height: WIDTH * 0.25,
    backgroundColor: '#B7B7B7',
    color: '#B7B7B7',
    borderBottomLeftRadius: WIDTH * 0.05,
    borderBottomRightRadius: WIDTH * 0.05
  },
  expertosCerveceros: {
    marginTop: HEIGHT * 0.04,
    justifyContent: 'center',
    alignItems: 'center'
  },
  expertos: {
    fontSize: WIDTH * 0.15,
    color: Colors.white,
    fontFamily: 'Satisfy-Regular',
    marginTop: HEIGHT * 0.005,
    alignSelf: 'center'
  },
  cerveceros: {
    fontSize: WIDTH * 0.07,
    color: Colors.white,
    fontFamily: 'Raleway-Black',
    alignSelf: 'center'
  },
  header: {
    width: WIDTH,
    height: HEIGHT * 0.25,
    backgroundColor: '#302F28',
    flexDirection: 'row'
  },
  headerTop: {
    flex: 1,
  },
  headerBottom: {
    flex: 1,
    alignItems: 'flex-end',
  },
  containerScroll: {
    backgroundColor: '#F2F2F2',
    borderTopRightRadius: WIDTH * 0.15,
    borderTopLeftRadius: WIDTH * 0.15,
    flex: 1,
    paddingBottom: sizeH * 6,
    paddingTop: sizeH * 3
  },
  scrollView: { width: WIDTH, alignSelf: 'center', flex: 1 },
  sectionContainer: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#302F28',
  },
});

export default styles
