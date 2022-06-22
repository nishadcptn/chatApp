import React from 'react';
import Home from './src/pages/Home/Index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SetupAcc from './src/pages/SetupAcc';
import OtpScreen from './src/pages/OtpVerify';
import SetupProfile from './src/pages/SetupProfile';

const Stack = createNativeStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          // animation: 'none'
        }}>
        <Stack.Screen
          name="SetupProfile"
          component={SetupProfile}
          options={{
            animation: 'none',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="setupAcc"
          component={SetupAcc}
          options={{
            animation: 'none',
          }}
        />

        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{
            animation: 'none',
          }}
        />

        {/* <Stack.Screen
          name="SetupProfile"
          component={SetupProfile}
          options={{
            animation: 'none',
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
