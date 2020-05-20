/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert
} from 'react-native';
import LogoMorado from '../../assets/Images/IconoApp.png'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import { WEB_CLIENT_ID } from '../../instances/Keys.js'
import AsyncStorage from '@react-native-community/async-storage';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import {AuthContext} from '../../App'

const { width: WIDTH } = Dimensions.get('window');
const { height: HEIGHT } = Dimensions.get('window');
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100;

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      familyName: '',
      email: '',
      password: '',
      isSigninInProgress: false
    };
    this.configureGoogleSign()
  }

  configureGoogleSign() {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true
    })
  }
  moveOther(){
    this.props.navigation.navigate('TabScreen');
  }

  storeData = async () => {
    var userInfo = JSON.stringify(this.state)
    try {
      await AsyncStorage.setItem('userInfo', userInfo)      
    } catch (e) {
      // saving error
    }
  }

  signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo.user);
      Alert.alert('Bienvenido a Expertos Cerveceros');
      this.setState({ userInfo });   
      //
      //this.storeData()

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow

        Alert.alert('Process Cancelled')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already

        Alert.alert('Process in progress')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated

        Alert.alert('Play services are not available')
      } else {
        // some other error happened

        Alert.alert('Something else went wrong... ', error.toString())
      }
    }
  };

  render() {
    // const AuthContext = React.createContext();
    // const {signIn} = React.useContext(AuthContext)
    // onPress={() => this.signInGoogle().then(() => this.signIn(this.state) )}
    return (
      <View style={styles.loginContainer}>
        <View style={styles.textView}>
          <Image style={styles.LogoImage} source={LogoMorado} />
        </View>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          style={styles.scrollView}>
          <View style={styles.textView}>
            <Text style={styles.textIntro}>Inicia sesión con Google para entrar en esta aventura cervecera</Text>
          </View>
          <GoogleSigninButton
            style={styles.GoogleButton}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Light}
            onPress={() => console.log(this.props)}
            disabled={this.state.isSigninInProgress} />
        </ScrollView>
      </View>
    );
  }
}


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
    width: WIDTH * 0.8,
    height: WIDTH * 0.8,
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

export default LogIn;