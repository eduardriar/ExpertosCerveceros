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
    textView:{
      width: WIDTH * 0.9,
      alignSelf: 'center',
      marginTop: HEIGHT * 0.1,
    },
    textIntro: {
      fontSize: 24,
      fontWeight: '100',
      color: Colors.white,
      fontFamily: 'Jost-Black',
      alignContent: 'center',
      textAlign: 'center'
    },
    LogoImage: {
      width:sizeW,
      height: sizeW,
      alignSelf: 'center',
    },
    loginContainer: {
      width: WIDTH,
      height: HEIGHT,
      backgroundColor: '#411878',
    },
    backgroundBottom: {
      position: "absolute",
      bottom: 0,
      height: HEIGHT * 0.3
    },
    backgroundContainer: {
      width: WIDTH * 0.9,
      height: '45%',
      borderBottomLeftRadius: 400,
      borderBottomRightRadius: 400,
      opacity: 0.5
    },
    logoContainer: {
      height: HEIGHT * 0.5,
      width: WIDTH,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: WIDTH * 0
    },
    logo: {
      marginTop: sizeH * 5,
      width: '55%',
      height: '50%',
      alignSelf: 'center'
    },
    scrollView: {
      backgroundColor: '#411878',
    },
    GoogleButton: {
      width: sizeW * 80,
      height: sizeH * 7,
      alignSelf: 'center',
      marginTop: sizeH * 12,
      borderRadius: 20,
      zIndex: 4
    }
  });