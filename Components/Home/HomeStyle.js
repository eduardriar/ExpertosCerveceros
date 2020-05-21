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
    fontSize: sizeW * 4,
    color: '#B7B7B7',
    fontFamily: 'Raleway-SemiBold',
    marginTop: sizeH * 1,
    marginBottom: sizeH * 1
  },
  containerCards: {
    marginTop: sizeW * 7,
    marginLeft: sizeW * 7
  },
  square: {
    flexDirection: 'row'
  },
  squareOne: {
    width: sizeW * 15,
    height: sizeW * 15,
    backgroundColor: '#858585',
    borderBottomLeftRadius: sizeW * 5,
    color: '#858585'
  },
  squareTwo: {
    width: sizeW * 25,
    height: sizeW * 25,
    backgroundColor: '#B7B7B7',
    color: '#B7B7B7',
    borderBottomLeftRadius: sizeW * 5,
    borderBottomRightRadius: sizeW * 5
  },
  expertosCerveceros: {
    marginTop: sizeH * 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  expertos: {
    fontSize: sizeW * 15,
    color: Colors.white,
    fontFamily: 'Satisfy-Regular',
    alignSelf: 'center'
  },
  cerveceros: {
    fontSize: sizeW * 7,
    color: Colors.white,
    fontFamily: 'Raleway-Black',
    alignSelf: 'center'
  },
  header: {
    width: WIDTH,
    height: sizeH * 25,
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
    borderTopRightRadius: sizeW * 15,
    borderTopLeftRadius: sizeW * 15,
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
