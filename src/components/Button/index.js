import React from 'react';
import {styles} from './styles';

import {
    View,
    StyleSheet,
    Pressable,
    Text,
    TouchableOpacity,
} from 'react-native' ;

const Button = ({title, onPress ,style}) => {
   
    return(
        <TouchableOpacity activeOpacity={0.6} onPress = {onPress} style = {[styles.container , style]}>
            <Text style = {styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(Button);