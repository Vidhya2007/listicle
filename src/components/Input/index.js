import React, { useState } from 'react';
import { Pressable, View, Image , Text, TextInput} from 'react-native';
import { styles } from './styles';

const Input = ({label,placeholder , isPassword }) => {
    
    const [isPasswordVisible, setisPasswordVisible ] = useState(false);

    const onEyePress = () =>{
        setisPasswordVisible(!isPasswordVisible);
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.label}>{label}</Text>
            <View style = {styles.inputContainer}>
            <TextInput secureTextEntry = {isPassword && !isPasswordVisible} placeholder = {placeholder} style = {styles.input}></TextInput>
  
            {isPassword  &&
            <Pressable onPress={onEyePress}>
                <Image style = {styles.eye}source = {isPasswordVisible ? require('../../../src/assets/eye.png') : require('../../../src/assets/eye_closed.png')}></Image>
            </Pressable>
            }
            </View>
        </View>
    )
       
}


export default React.memo(Input);