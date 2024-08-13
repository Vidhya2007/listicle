
import React, {useState} from 'react';
import Splash from './src/screens/auth/splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';

import {
  SafeAreaView, StyleSheet,
} from 'react-native';





const App = () =>{
  return (
    <SafeAreaView> 
      {/* <Splash></Splash> */}
      {/* <Signup></Signup> */}
      <Signin></Signin>
    </SafeAreaView>
    
  );
};






export default App;
