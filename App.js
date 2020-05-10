/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Search from './Components/Search'
import Profile from './Components/Profile'
import Premium from './Components/Premium'
import Login from './components/Login/Login.js';

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

function SearchScreen() {
  return (<Search />)
}

function PremiumScreen() {
  return (<Premium />)
}

function ProfileScreen() {
  return (<Profile />)
}

const Tab = createMaterialBottomTabNavigator();

function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: ECRA</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step Uno</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
=======
=======
>>>>>>> 0f921a17516e8b517773d91e9354acbedc6b3168
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator> */}
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
    </NavigationContainer>
<<<<<<< HEAD
>>>>>>> 0f921a17516e8b517773d91e9354acbedc6b3168
=======
>>>>>>> 0f921a17516e8b517773d91e9354acbedc6b3168
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