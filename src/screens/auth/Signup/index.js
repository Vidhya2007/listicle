import React, { useState } from 'react';
import { View , Text } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import { styles } from './styles';
import Input from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';



const Signup = () => {
    const onBackPress = () =>{
        console.log("Back Press is clicked")
    }

    const onChecked =() => {
        setChecked(!checked);
    }

    const onSignIn = () =>{
        console.log("Signin button is pressed");
    }
    const [checked , setChecked] = useState(false);
    return(
        <View style = {styles.container}>
          <AuthHeader title = "Sign Up" onBackPress = {onBackPress}></AuthHeader>

          <Input label = "Name" placeholder = "John Doe"></Input>
          <Input label = "E-mail" placeholder = "example@gmail.com"></Input>
          <Input  isPassword = {true} label = "Password" placeholder = "********"></Input>
          
          <View style = {styles.checkBoxContainer}>
            <Checkbox checked = {checked} onChecked = {onChecked}></Checkbox>
            <Text style = {styles.checkBoxText}>I agree with 
                <Text style = {styles.checkBoxInnerText}>Terms</Text> & <Text style = {styles.checkBoxInnerText}>Privacy</Text>
            </Text>
          </View>

          <Button style = {styles.buttonStyle} title = "Sign Up"></Button>

          <Seperator title = "Or sign up with"></Seperator>

          <GoogleLogin></GoogleLogin>
          
          <Text style = {styles.footerText}>Already have an account? 
            <Text onPress= {onSignIn} style = {styles.footerLink}> Sign In </Text>
          </Text>
        </View>
    )
}


export default React.memo(Signup);