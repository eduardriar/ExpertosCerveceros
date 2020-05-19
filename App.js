
import Login from './components/Login/Login.js';
import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from './components/Search'

import Profile from './components/Profile'
import Premium from './components/Premium'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Search')}
      />
    </View>
  );
}

function TabScreen({ navigation }) {

const Tab = createMaterialBottomTabNavigator();
  return (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#EC40F0"
        inactiveColor="#EC40F0"
        barStyle={{ backgroundColor: '#FFFFFF' }}>
        <Tab.Screen name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={'#EC40F0'} size={26} />
            ),
          }} />
        <Tab.Screen name="Search" component={SearchScreen}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="magnify" color={'#EC40F0'} size={26} />
            ),
          }} />
          <Tab.Screen name="Premium" component={PremiumScreen}
          options={{
            tabBarLabel: 'Premium',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="star" color={'#EC40F0'} size={26} />
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

function SearchScreen() {
  return (<Search />)
}

function PremiumScreen() {
  return(<Premium/>)
}

function ProfileScreen() {
  return(<Profile/>)
}


const Stack = createStackNavigator();

function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="TabScreen" component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const Stack = createStackNavigator();

// function App() {
//   useEffect(()=>{
//     SplashScreen.hide();
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Search" component={SearchScreen} />
//         <Stack.Screen name="Premium" component={HomeScreen} />
//         <Stack.Screen name="Profile" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default App;