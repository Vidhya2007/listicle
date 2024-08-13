import React from 'react';
import {styles} from './styles';
import Button from '../../../components/Button';

import {
  View,
  Text,
  Image,
  Pressable
} from 'react-native';

const Splash = () => {

    const handleThePress = () =>{
        return(
            console.log("Sign in button pressed")
        )
    }
    return(
        <View style = {styles.container}> 
        <Image resizeMode = 'contain' style = {styles.image} source = {require('../../../assets/splash_image.png')}/> 

        <View style = {styles.titleContainer}>
           <Text style = {styles.title}> You’ll Find </Text>
           <Text style = {[styles.title, styles.innerTitle]}>All you need</Text>
           <Text style = {styles.title}>Here!</Text> 
        </View>
       

        <Button title = "Sign Up"></Button>

        <Pressable hitSlop = {20} onPress = {handleThePress}>
            <Text style = {styles.footerText}>Sign In</Text>
        </Pressable>

        </View>
    )
}

export default React.memo(Splash); 
