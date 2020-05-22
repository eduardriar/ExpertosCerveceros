/* eslint-disable prettier/prettier */

import React, { useEffect, useMemo, createContext, useReducer, useState } from 'react';
import { View, Text, Button, Image, ScrollView, Alert } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from './Components/Search/Search'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import Premium from './Components/Premium'
import Profile from './Components/Profile/Profile'
import Home from './Components/Home/Home'
import AsyncStorage from '@react-native-community/async-storage';
import Receipt from './Components/Home/Recetas'
import LogoMorado from '../ExpertosCerveceros/assets/Images/IconoApp.png'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import { WEB_CLIENT_ID } from './instances/Keys'
import {styles} from './Components/Login/LoginStyles'

const Tab = createMaterialBottomTabNavigator();
const AuthContext = createContext();

const HomeScreen = props => (
  <Home {...props} />
);

const ReceiptScreen = props => (
  <Receipt {...props} context={AuthContext} />
);

const ProfileScreen = props => (
  <Profile {...props} />
);

const SearchScreen = props => (
  <Search {...props} />
);

const PremiumScreen = props => (
  <Premium {...props} />
);

const ShoppingCartScreen = props => (
  <ShoppingCart {...props} />
);

function HomeTab({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="Start"
      activeColor="#EC40F0"
      inactiveColor="#EC40F0"
      barStyle={{ backgroundColor: '#FFFFFF' }}>
      <Tab.Screen name="Start"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={'#EC40F0'} size={26} />
          ),
        }}>
      </Tab.Screen>
      <Tab.Screen name="Search" component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={'#EC40F0'} size={26} />
          ),
        }} />
      <Tab.Screen name="Shopping cart" component={ShoppingCartScreen}
        options={{
          tabBarLabel: 'Compras',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={'#EC40F0'} size={26} />
          ),
        }} />
      <Tab.Screen name="Profile" component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="beer" color={'#EC40F0'} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
}

function LoginScreen() {
  const [user, setUser] = useState({
    name: '',
    familyName: '',
    email: '',
    password: '',
    isSigninInProgress: false
  })

  function configureGoogleSign() {
    GoogleSignin.configure({
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true
    })
  }

  async function storeData(user) {
    var userInfo = JSON.stringify(user)
    console.log("this is " + userInfo)
    try {
      await AsyncStorage.setItem('userInfo', userInfo)
      console.log('Se guardo')
    } catch (e) {
      // saving error
    }
  }

  async function signInGoogle(){
    try {
      configureGoogleSign()
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      storeData(userInfo)
      Alert.alert('Bienvenido a Expertos Cerveceros');
      // setUser({ userInfo });

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

  const { signIn } = React.useContext(AuthContext)
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
          onPress={() => signInGoogle().then(()=> signIn({user}))}
          disabled={user.isSigninInProgress} />
      </ScrollView>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {

  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userName: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userName: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userName: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    SplashScreen.hide();
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userInfo;
      let userName;

      try {
        userInfo = await AsyncStorage.getItem('userInfo');

        userName = JSON.parse(userInfo)


        console.log("Hey the user is " + userName)
      } catch (e) {
        // Restoring token failed


      }
      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userName });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        let userInfo = await AsyncStorage.getItem('userInfo');
        let userName = JSON.parse(userInfo)
        console.log("entra")
        dispatch({ type: 'SIGN_IN', token: userName });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        let userInfo = await AsyncStorage.getItem('userInfo');
        let userName = JSON.parse(userInfo)

        dispatch({ type: 'SIGN_IN', token: userName });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>

          {state.userName == null ? (
            <Stack.Screen name="Login" component={LoginScreen} />
          ) : (
              <>
                <Stack.Screen name="Home" component={HomeTab} />
                <Stack.Screen name="Receipt" component={ReceiptScreen} />
                <Stack.Screen name="Premium" component={PremiumScreen} />
              </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

