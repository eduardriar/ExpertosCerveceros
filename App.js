/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './Components/Login/Login'
import Search from './Components/Search/Search'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart'
import Premium from './Components/Premium'
import Profile from './Components/Profile/Profile'
import Home from './Components/Home/Home'
import AsyncStorage from '@react-native-community/async-storage';
import Receipt from './Components/Home/Recetas'

const Tab = createMaterialBottomTabNavigator();

const HomeScreen = props => (
  <Home {...props} />
);

const ReceiptScreen = props =>(
  <Receipt {...props}/>
);

const ProfileScreen = props => (
  <Profile {...props} />
);

const SearchScreen = props => (
  <Search {...props}/>
);

const PremiumScreen = props => (
  <Premium {...props}/>
);

const ShoppingCartScreen = props => (
  <ShoppingCart {...props}/>
);

const LoginScreen = props => (
  <Login {...props}/>
);

function HomeTab({ navigation }) {
  return(
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

const Stack = createStackNavigator();

function App() {
  const [state, dispatch] = React.useReducer(
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

  React.useEffect(() => {
    SplashScreen.hide();
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userInfo;
      let userName;

      try {
        userInfo = await AsyncStorage.getItem('userInfo');
        userName = JSON.parse(userInfo)
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

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        let userInfo = await AsyncStorage.getItem('userInfo');
        let userName = JSON.parse(userInfo)

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

  const AuthContext = React.createContext();

  return (
    <AuthContext.Provider value={authContext}>
      {console.log(state.userName)}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
          {state.userName == null ? (
            <Stack.Screen name="Login">
              {props => <LoginScreen {...props} />}
            </Stack.Screen>
          ) : (
              <>
                <Stack.Screen name="Home" component={HomeTab} />
                <Stack.Screen name="Receipt" component={ReceiptScreen}/>
                <Stack.Screen name="Premium" component={PremiumScreen}/>
              </>
            )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;