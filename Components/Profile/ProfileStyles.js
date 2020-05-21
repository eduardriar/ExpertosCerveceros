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
  titleEmail:{
    alignSelf:'center',
    textAlign:'center',
    marginTop: sizeH * 5,
    fontSize: sizeW * 5,
    color: Colors.black,
    fontFamily: 'Raleway-Bold',
  },
  inputText:{
    width: sizeW * 80,
    height: sizeH * 5,
    alignSelf: 'center',
    textAlign:'center',
    borderWidth: 1,
    marginTop: sizeH * 2,
    borderRadius: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",    
  },
  modalView: {
    height: sizeH * 70,
    width: sizeW * 95,
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 35,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  premium: {
    fontSize: sizeW * 10,
    color: Colors.black,
    fontFamily: 'Satisfy-Regular',
    marginTop: HEIGHT * 0.005,
    textAlign:'center',
    // marginLeft: sizeW * 15,
    width: sizeW * 95
  },
  premiumText: {
    fontSize: sizeW * 5,
    color: Colors.black,
    fontFamily: 'Jost-Light',
    marginTop: HEIGHT * 0.005, 
    alignSelf:'center',
    textAlign:'center',
    width: sizeW * 90
  },
  socialMedia: {
    flex: 1,
    flexDirection: 'row',
    margin: sizeW * 2.5,
  },
  button: {
    borderRadius: sizeW* 2,
    flex: 0.2,
    alignSelf:'center',
    marginTop: sizeH * 2.5,
    backgroundColor: "#39CC7F",
    width: sizeW * 30,
    height: sizeH * 30,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{    
    fontSize: sizeH * 2,
    color: Colors.white,
    fontFamily: 'Jost-Light',
  },
  icon:{
    margin: 0,
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
