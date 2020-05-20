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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",    
  },
  modalView: {
    height: sizeH * 70,
    width: sizeW * 95,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  socialMedia: {
    flex: 1,
    flexDirection: 'row',
    margin: sizeW * 2.5,
  },
  icon:{
    margin: sizeW * 2.5,
  },
  menu:{
    flex:1,
    marginTop: sizeH * 2
  },
  name: {
    fontSize: WIDTH * 0.125,
    color: Colors.white,
    fontFamily: 'Satisfy-Regular',
    margin: sizeW * 2.5,
    alignSelf: 'flex-start'
  },
  menuText:{
    fontSize: WIDTH * 0.08,
    color: Colors.white,
    fontFamily: 'Raleway-SemiBold',
    margin: sizeW * 2.5,
    alignSelf: 'flex-start'
  },
  imageGoodPeople:{
    width: sizeW * 50,
    height: sizeW * 50,
  },
  square: {
    flexDirection: 'row'
  },
  squareOne: {
    width: WIDTH * 0.15,
    height: WIDTH * 0.15,
    backgroundColor: '#27345A',
    borderBottomLeftRadius: WIDTH * 0.05,
    color: '#27345A'
  },
  squareTwo: {
    width: WIDTH * 0.25,
    height: WIDTH * 0.25,
    backgroundColor: '#4A5C94',
    color: '#4A5C94',
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
    backgroundColor: '#1D2848',
    flexDirection: 'row'
  },
  headerTop: {
    flex: 1,
  },
  headerBottom: {
    flex: 1,
    alignItems: 'flex-end',
  },
  logoBottom:{
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: "center",
    paddingBottom: sizeH * 10,
  },
  scrollView: { width: WIDTH, alignSelf: 'center', flex: 1 },
  sectionContainer: {
    width: WIDTH,
    height: HEIGHT,
    backgroundColor: '#1D2848',
  },
});

export default styles
