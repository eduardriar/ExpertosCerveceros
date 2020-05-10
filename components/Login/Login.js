/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
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

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import { WEB_CLIENT_ID } from '../../instances/Keys.js'
const {width: WIDTH} = Dimensions.get('window');
const {height: HEIGHT} = Dimensions.get('window');
const sizeH = HEIGHT / 100;
const sizeW = WIDTH / 100; 

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isSigninInProgress: false  
    };
    this.configureGoogleSign()
  }

  componentWillMountMount(){
    console.log('Hola')
  }

  configureGoogleSign() {
    Alert.alert('ejecutando config..')
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true
    })
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      console.log(this.props)
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo.user.email);
      Alert.alert('Ingreso Exitoso');
      this.setState({ userInfo });      
      
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
    return (    
      <View style={styles.loginContainer}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            style={styles.scrollView}>
              <GoogleSigninButton
                    style={styles.GoogleButton}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Light}
                    onPress={() => this.signIn(this.props.navigation)}
                    disabled={this.state.isSigninInProgress} />
          </ScrollView>
      </View>  
    );
  }
}


const styles = StyleSheet.create({
  loginContainer:{
    width: WIDTH,
    height: HEIGHT,
  },
  backgroundBottom:{
    position: "absolute",
    bottom: 0,
    height: HEIGHT * 0.3
  },
  backgroundContainer:{
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
    backgroundColor: '#e2e2e2',
  },
  GoogleButton:{
    width: sizeW * 80, 
    height: sizeH * 7,
    alignSelf:'center',
    marginTop:sizeH * 12,
    borderRadius: 20,
    zIndex: 4
  }
});

export default LogIn;