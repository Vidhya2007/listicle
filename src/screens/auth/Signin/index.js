import React, { useState } from 'react';
import { View , Text } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import { styles } from './styles';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';



const Signin = () => {
    const onBackPress = () =>{
        console.log("Back Press is clicked")
    }

    const onChecked =() => {
        setChecked(!checked);
    }

    const onSignUp = () =>{
        console.log("Signup button is pressed");
    }
    const [checked , setChecked] = useState(false);
    return(
        <View style = {styles.container}>
          <AuthHeader title = "Sign In" onBackPress = {onBackPress}></AuthHeader>

          <Input label = "Name" placeholder = "John Doe"></Input>
          <Input label = "E-mail" placeholder = "example@gmail.com"></Input>
          <Input  isPassword = {true} label = "Password" placeholder = "********"></Input>
          
          

          <Button style = {styles.buttonStyle} title = "Sign In"></Button>

          <Seperator title = "Or sign in with"></Seperator>

          <GoogleLogin></GoogleLogin>
          
          <Text style = {styles.footerText}> Don’t have an account? 
            <Text onPress= {onSignUp} style = {styles.footerLink}> Sign Up </Text>
          </Text>
        </View>
    )
}


export default React.memo(Signin);