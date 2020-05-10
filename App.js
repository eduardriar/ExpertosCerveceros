/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Components/Login/Login'

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

function LoginScreen() {
  return (<Login/>)
}

const Stack = createStackNavigator();

function App() {
  useEffect(()=>{
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
          {props => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Home" component={HomeScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;