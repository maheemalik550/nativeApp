import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash_screen from '../Screens/Splash_screen';
import Slider_screen1 from '../Screens/Slider_screen1';



const Stack = createStackNavigator();


const Naviagtion = () => {


  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{
          headerShown:false
      }}>
          <Stack.Screen name='Splash_screen' component={Splash_screen} />
          <Stack.Screen name='Slider_screen1' component={Slider_screen1} />
      </Stack.Navigator>
        
    </NavigationContainer>
  )
}

export default Naviagtion
