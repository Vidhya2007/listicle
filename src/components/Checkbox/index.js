import React from 'react';
import { View , TouchableOpacity, Image  } from 'react-native';
import {styles} from './styles'

const Checkbox = ({checked, onChecked}) => {
    
    return(
       <TouchableOpacity activeOpacity={0.6} onPress={onChecked} style = {styles.container}>
           {checked && (
            <View style = {styles.innerContainer}>
                <Image style = {styles.checkIcon}source={require('../../assets/check.png')}></Image>
            </View>)}
       </TouchableOpacity>
 
    )
}

export default React.memo(Checkbox);