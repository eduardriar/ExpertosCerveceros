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
  imageBackground:{
    borderRadius: WIDTH * 0.05,
    width: WIDTH,
    height: sizeH * 50

  },
  viewContainer:{
    flexDirection: 'column',
  },
  label: {
    fontSize: WIDTH * 0.035,
    color: '#B7B7B7',
    fontFamily: 'Raleway-SemiBold',
    marginTop: sizeH * 2,
    marginBottom: sizeH * 2
  },
  socialMedia: {
    marginTop: sizeH * 10,
    width: WIDTH,
    height: HEIGHT * 0.25,
    backgroundColor: '#302F28',
    flexDirection: 'row'
  },
  icon:{
    flex:1
  },
  containerCards: {
    marginTop: sizeH * 0.5,
    marginLeft: WIDTH * 0
  },
  expertosCerveceros: {
    marginTop: sizeH,
    marginLeft: sizeW * 5
  },
  expertos: {
    fontSize: sizeH * 6,
    color: Colors.white,
    fontFamily: 'Satisfy-Regular',
    marginTop: HEIGHT * 0.005,
  },
  cerveceros: {
    fontSize: sizeH * 3.5,
    color: Colors.white,
    fontFamily: 'Raleway-Black',
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
  scrollView: { 
    width: sizeH * 40,
    height: sizeH * 30, 
    alignSelf: 'center', 
    flex: 1 
    
  },
  sectionContainer: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#FF0000',
  },
  titleView:{
    backgroundColor: '#FF0000',
    borderTopRightRadius: WIDTH * 0.15,
    borderTopLeftRadius: WIDTH * 0.15,
    flex: 0.25,
  },
});

export default styles
