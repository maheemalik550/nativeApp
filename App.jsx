import React from 'react'
import Naviagtion from './config/Navigaton'
import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';



const App = () => {
  return (
    <NativeBaseProvider>
      <Naviagtion/>
    </NativeBaseProvider>
  )
}

export default App